// In-browser JEV: Qwen3.5-0.8B (tank-tuned, GGUF) on wllama/WebGPU. Same readout as the JEV server:
// one forward pass per tank, softmax over the answer-letter logits. Prompt format = semif_phase1.core.direct_messages.
const browserFetch = self.fetch.bind(self);
self.fetch = (input, init = {}) => browserFetch(input, { ...init, referrerPolicy: "no-referrer" });

const { Wllama, LoggerWithoutDebug } = await import("./vendor/wllama/index.js");

const REPO = "https://huggingface.co/andrewaldrichnet/tankbattle-jev-qwen3.5-0.8b-GGUF/resolve/4d391e6f18277fc49425530811ca14b8f28c986c/";
const FILES = { q4: "tankbattle-jev-qwen3.5-0.8b-Q4_K_M.gguf", q8: "tankbattle-jev-qwen3.5-0.8b-Q8_0.gguf" };
const LOCAL = { small: "https://huggingface.co/andrewaldrichnet/tankbattle-jev-smollm2-135m-GGUF/resolve/9b04a706a58a3e8962368eaef96ff01d871f386e/tankbattle-jev-smollm2-135m-Q8_0.gguf" };   // tiny SmolLM2-135M (training/train_small.py)
const LABEL_BASE = 32;   // Qwen token id of "A"; B, C, ... follow
const SYSTEM = "Apply the supplied criterion to the supplied evidence. Choose exactly one listed option. " +
  "Respond with only its uppercase letter, with no explanation or reasoning.";
const LETTERS = "ABCDEFGHIJKLMNOP";

let engine;
const send = (type, data = {}) => self.postMessage({ type, ...data });

// Python's json.dumps (default separators) so the prompt is byte-identical to the one the adapter was tuned on.
function pyJson(v) {
  if (Array.isArray(v)) return "[" + v.map(pyJson).join(", ") + "]";
  if (v && typeof v === "object") return "{" + Object.entries(v).map(([k, x]) => JSON.stringify(k) + ": " + pyJson(x)).join(", ") + "}";
  return JSON.stringify(v);
}
function messagesFor(state, item) {
  const payload = {
    evidence: state,
    criterion: item.question,
    options: item.options.map((o, i) => ({ letter: LETTERS[i], description: o.description })),
  };
  return [{ role: "system", content: SYSTEM }, { role: "user", content: pyJson(payload) }];
}

// Our own download instead of wllama's: a plain fetch gives real progress, and the size check means a partial download is
// never mistaken for the model. Stored in OPFS (what wllama itself uses): iOS Safari fails big reads from Cache API blobs
// ("I/O operation failed"), but reads OPFS files fine. The Cache API is only a fallback where OPFS is missing.
async function fetchModel(url, name) {
  const root = await navigator.storage?.getDirectory?.().catch(() => null);
  const r0 = root && await readyOpfs(root, name);
  if (r0) return r0;
  send("log", { m: "downloading" });
  const r = await fetch(url);
  if (!r.ok || !r.body) throw new Error("HTTP " + r.status);
  const total = Number(r.headers.get("content-length")) || 0;
  const reader = r.body.getReader();
  let loaded = 0, last = 0, sink, finish;
  if (root && FileSystemFileHandle.prototype.createSyncAccessHandle) {
    const meta = await root.getFileHandle(name + ".ok", { create: true });
    const mh = await meta.createSyncAccessHandle(); mh.truncate(0); mh.close();   // the old marker is void until this download finishes
    const ah = await (await root.getFileHandle(name, { create: true })).createSyncAccessHandle();
    ah.truncate(0);
    sink = chunk => { ah.write(chunk, { at: loaded }); };
    finish = async () => {
      ah.flush(); ah.close();
      if (total && loaded !== total) throw new Error(`incomplete ${loaded}/${total}`);
      const h = await meta.createSyncAccessHandle(); h.write(new TextEncoder().encode(String(loaded)), { at: 0 }); h.close();
      return readyOpfs(root, name);
    };
  } else {   // no OPFS sync handles: keep it in memory
    const parts = [];
    sink = chunk => parts.push(chunk);
    finish = async () => { if (total && loaded !== total) throw new Error(`incomplete ${loaded}/${total}`); return new Blob(parts); };
  }
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    sink(value); loaded += value.byteLength;
    const now = Date.now();
    if (now - last > 200) { last = now; send("progress", { loaded, total }); }
  }
  send("progress", { loaded, total: total || loaded });
  return finish();
}
// the model file, if a previous download finished (marker holds the exact size)
async function readyOpfs(root, name) {
  try {
    const file = await (await root.getFileHandle(name)).getFile();
    const ok = Number(await (await (await root.getFileHandle(name + ".ok")).getFile()).text());
    if (file.size > 0 && file.size === ok) { send("log", { m: "opfs hit" }); return file; }
  } catch (e) { /* not there yet */ }
  return null;
}

async function load(quant, gpu = true) {
  if (engine) return;
  const stage = async (name, f) => { send("stage", { name }); try { return await f(); } catch (e) { throw new Error(`${name}: ${e?.message ?? e}`); } };
  const url = LOCAL[quant] ? new URL(LOCAL[quant], self.location.href).href : REPO + (FILES[quant] || FILES.q4);
  const blob = await stage("download", () => fetchModel(url, "tb-jev-" + (LOCAL[quant] || FILES[quant] ? quant : "q4") + ".gguf"));
  await stage("init", async () => {
    engine = new Wllama({ default: new URL("./vendor/wllama/wasm/wllama.wasm", self.location.href).href },
      { logger: LoggerWithoutDebug, suppressNativeLog: true });
    // iOS kills the tab when memory spikes after load: the prompts are ~300 tokens, so keep context/batch buffers small
    const ios = /iP(hone|ad|od)/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    await engine.loadModel([blob], { n_ctx: 1024, n_batch: 128, n_ubatch: 128, n_parallel: 1, warmup: false, n_gpu_layers: gpu ? 999 : 0, cache_prompt: true, ...(ios ? { n_threads: 1 } : {}) });
  });
  await stage("warmup", () => score("warmup", { question: "Pick one.", options: [{ id: "a", description: "a" }, { id: "b", description: "b" }] }));
  send("ready");
}

async function score(state, item) {
  const n = item.options.length, labels = [...LETTERS].slice(0, n);
  // The grammar limits sampling to the option letters; post_sampling_probs reports the distribution over just those
  // (after a temperature-only sampler chain), i.e. the softmax of the letter logits. The model's natural top-k
  // is useless here: the tuned model ranks the letters against each other, not against the rest of the vocabulary.
  const r = await engine.createChatCompletion({
    messages: messagesFor(state, item),
    max_tokens: 1, temperature: 1, top_k: 0, top_p: 1, min_p: 0,
    samplers: ["temperature"],
    logprobs: true, top_logprobs: n, post_sampling_probs: true,
    grammar: "root ::= " + labels.map(l => `"${l}"`).join(" | "),
    cache_prompt: true,
    chat_template_kwargs: { enable_thinking: false },
  });
  const first = r.choices?.[0]?.logprobs?.content?.[0];
  const top = first?.top_probs ?? first?.top_logprobs ?? [];
  const pr = labels.map(l => {
    const t = top.find(t => t.token === l || (t.bytes?.length === 1 && t.bytes[0] === l.charCodeAt(0)));
    return t ? Number(t.prob ?? Math.exp(t.logprob)) : NaN;
  });
  if (pr.some(x => !Number.isFinite(x))) throw new Error("no option probabilities: " + JSON.stringify(r.choices?.[0]?.logprobs ?? r).slice(0, 600));
  const sum = pr.reduce((a, b) => a + b, 0) || 1;
  return { option_ids: item.options.map(o => o.id), probabilities: pr.map(x => x / sum) };
}

self.addEventListener("message", async ({ data }) => {
  try {
    if (data.type === "load") await load(data.quant, data.gpu);
    if (data.type === "decide") {
      const results = [];
      for (const item of data.items) results.push(await score(data.state, item));   // tanks one after another: no GPU contention
      send("result", { id: data.id, results });
    }
  } catch (e) {
    console.error(e);
    if (data.type === "load") engine = undefined;
    send("error", { id: data.id, message: e?.message ?? String(e) });
  }
});

send("booted");   // the module (and its top-level await) is done and the listener is attached: the page may send "load" now
