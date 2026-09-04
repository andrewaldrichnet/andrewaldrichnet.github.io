document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('builderForm');
  const generateBtn = document.getElementById('generate-btn');
  const btnLabel = document.getElementById('generate-btn-label');
  const spinner = document.getElementById('generate-spinner');
  const apiKeyInput = document.getElementById('openaiKey');
  const baseUrlInput = document.getElementById('baseUrl');
  const modelInput = document.getElementById('model');
  const modelList = document.getElementById('modelList');
  const getModelsBtn = document.getElementById('getModelsBtn');
  const rememberKey = document.getElementById('rememberKey');
  const topicInput = document.getElementById('topic');
  const descriptionInput = document.getElementById('description');
  const statusBox = document.getElementById('statusBox');
  const resultsSection = document.getElementById('resultsSection');
  const previewFrame = document.getElementById('previewFrame');
  const generatedHtml = document.getElementById('generatedHtml');
  const copyBtn = document.getElementById('copyBtn');
  const downloadBtn = document.getElementById('downloadBtn');

  const DEFAULT_BASE_URL = 'https://api.openai.com/v1';
  const DEFAULT_MODEL = 'gpt-5-mini';

  const STORAGE_KEY = 'aiwebpagebuilder_openai_key';
  const STORAGE_BASE_URL_KEY = 'aiwebpagebuilder_base_url';
  const STORAGE_MODEL_KEY = 'aiwebpagebuilder_model';

  // Restore previously remembered settings (stored only in this browser, never sent anywhere but the configured API).
  const savedKey = localStorage.getItem(STORAGE_KEY);
  const savedBaseUrl = localStorage.getItem(STORAGE_BASE_URL_KEY);
  const savedModel = localStorage.getItem(STORAGE_MODEL_KEY);
  if (savedKey) {
    apiKeyInput.value = savedKey;
    rememberKey.checked = true;
  }
  baseUrlInput.value = savedBaseUrl || DEFAULT_BASE_URL;
  modelInput.value = savedModel || DEFAULT_MODEL;

  function setStatus(message, type) {
    if (!message) {
      statusBox.style.display = 'none';
      statusBox.textContent = '';
      return;
    }
    statusBox.style.display = 'block';
    statusBox.className = 'status-box status-' + (type || 'info');
    statusBox.textContent = message;
  }

  function setLoading(isLoading) {
    generateBtn.disabled = isLoading;
    spinner.style.display = isLoading ? 'inline-block' : 'none';
    btnLabel.textContent = isLoading ? 'Generating…' : 'Generate Webpage';
  }

  getModelsBtn.addEventListener('click', async function () {
    const apiKey = apiKeyInput.value.trim();
    const baseUrl = (baseUrlInput.value.trim() || DEFAULT_BASE_URL).replace(/\/+$/, '');

    if (!apiKey) {
      setStatus('Enter your API key first, then fetch the model list.', 'error');
      apiKeyInput.focus();
      return;
    }

    const originalLabel = getModelsBtn.textContent;
    getModelsBtn.disabled = true;
    getModelsBtn.textContent = 'Loading…';
    setStatus('Fetching available models…', 'info');

    try {
      const response = await fetch(`${baseUrl}/models`, {
        headers: { 'Authorization': `Bearer ${apiKey}` }
      });

      if (!response.ok) {
        const errBody = await response.json().catch(() => null);
        const message = errBody?.error?.message || `Request failed with status ${response.status}.`;
        throw new Error(message);
      }

      const data = await response.json();
      const models = (Array.isArray(data.data) ? data.data : Array.isArray(data) ? data : [])
        .map((m) => (typeof m === 'string' ? m : m.id))
        .filter(Boolean)
        .sort();

      if (!models.length) throw new Error('No models were returned for this endpoint.');

      modelList.innerHTML = '';
      models.forEach((id) => {
        const option = document.createElement('option');
        option.value = id;
        modelList.appendChild(option);
      });

      if (!modelInput.value.trim()) modelInput.value = models[0];

      setStatus(`Loaded ${models.length} model${models.length === 1 ? '' : 's'} — pick one from the Model field.`, 'success');
    } catch (error) {
      console.error(error);
      setStatus(error.message || 'Could not fetch models for this base URL.', 'error');
    } finally {
      getModelsBtn.disabled = false;
      getModelsBtn.textContent = originalLabel;
    }
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const apiKey = apiKeyInput.value.trim();
    const baseUrl = (baseUrlInput.value.trim() || DEFAULT_BASE_URL).replace(/\/+$/, '');
    const model = modelInput.value.trim() || DEFAULT_MODEL;
    const topic = topicInput.value.trim();
    const description = descriptionInput.value.trim();

    if (!apiKey) {
      setStatus('Enter your API key to generate a page.', 'error');
      apiKeyInput.focus();
      return;
    }

    if (rememberKey.checked) {
      localStorage.setItem(STORAGE_KEY, apiKey);
      localStorage.setItem(STORAGE_BASE_URL_KEY, baseUrl);
      localStorage.setItem(STORAGE_MODEL_KEY, model);
    } else {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(STORAGE_BASE_URL_KEY);
      localStorage.removeItem(STORAGE_MODEL_KEY);
    }

    setLoading(true);
    setStatus('Talking to the API and assembling your page…', 'info');
    resultsSection.style.display = 'none';

    const exampleOutput = [
      { id: 'sectionId', inputs: { InputName1: 'string' } }
    ];

    const prompt =
      `Topic: ${topic}, Description: ${description}\n` +
      `Example output: \`\`\`${JSON.stringify(exampleOutput)}\`\`\`\n` +
      `Output complete accurate JSON format ONLY. ONLY use section ids from the following JSON: \`\`\`${JSON.stringify(sectionsJSON)}\`\`\``;

    fetch(`${baseUrl}/responses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: model,
        input: [
          {
            role: 'system',
            content: 'You make webpages. Return sections with input fields given a topic and description. Only output JSON that includes relevant section ids and their specific suggested values for input requirements. Include ALL inputs. For image sources write a short prompt and size in this format {prompt||width x height}. Use bootstrap icons for icons. Respond with ONLY a single ```json fenced code block containing the JSON — no other text before or after it.'
          },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
        max_output_tokens: 4096,
        text: { format: { type: 'text' } }
      })
    })
      .then(async (response) => {
        if (!response.ok) {
          const errBody = await response.json().catch(() => null);
          const message = errBody?.error?.message || `Request failed with status ${response.status}.`;
          throw new Error(message);
        }
        return response.json();
      })
      .then((data) => {
        const completion = extractOutputText(data);
        if (!completion) throw new Error('The API returned an empty response.');

        const parsed = extractJsonContent(completion);
        if (!parsed) throw new Error('Could not parse the AI response into sections. Try again or tweak your description.');

        renderSections(parsed);
        setStatus('Your page is ready! Preview it below, then copy or download the HTML.', 'success');
      })
      .catch((error) => {
        console.error(error);
        setStatus(error.message || 'Something went wrong talking to the API. Check your base URL, model, and API key and try again.', 'error');
      })
      .finally(() => {
        setLoading(false);
      });
  });

  function renderSections(jsonOutput) {
    let combinedHtml = '';

    (Array.isArray(jsonOutput) ? jsonOutput : jsonOutput.sections || []).forEach((sectionData) => {
      const sectionInfo = sectionsJSON.find((section) => section.id === sectionData.id);
      if (!sectionInfo) return;

      const templateContent = sectionsHtml[sectionInfo.file];
      if (!templateContent) return;

      combinedHtml += generateSectionHtml(sectionData, templateContent) + '\n\n';
    });

    if (!combinedHtml) {
      throw new Error('The AI response did not match any known sections. Try a different topic or description.');
    }

    const finalHTML = templateHTML.replace('[Content]', combinedHtml);
    generatedHtml.value = finalHTML;
    previewFrame.srcdoc = finalHTML;
    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function extractOutputText(data) {
    if (typeof data.output_text === 'string' && data.output_text) return data.output_text;

    const output = Array.isArray(data.output) ? data.output : [];
    return output
      .filter((item) => item.type === 'message')
      .flatMap((item) => (Array.isArray(item.content) ? item.content : []))
      .filter((part) => part.type === 'output_text' && typeof part.text === 'string')
      .map((part) => part.text)
      .join('');
  }

  function extractJsonContent(text) {
    const jsonStart = text.indexOf('```json');
    const jsonEnd = text.indexOf('```', jsonStart + 7);

    let jsonText = text;
    if (jsonStart !== -1 && jsonEnd !== -1) {
      jsonText = text.substring(jsonStart + 7, jsonEnd).trim();
    }

    try {
      return JSON.parse(jsonText);
    } catch (e) {
      console.error('Failed to parse JSON:', e);
      return null;
    }
  }

  function generateSectionHtml(sectionData, templateContent) {
    let populatedTemplate = templateContent;

    Object.entries(sectionData.inputs || {}).forEach(([key, value]) => {
      const placeholder = new RegExp(`\\[${key}\\]`, 'g');
      let resolvedValue = value;

      if (typeof value === 'string' && value.startsWith('{') && value.endsWith('}')) {
        const imageSuggestion = value.substring(1, value.length - 1);
        const [imagePrompt, size] = imageSuggestion.split('||');
        const [width, height] = (size || '600x400').split('x');
        resolvedValue = getImage(imagePrompt, width, height);
      }

      populatedTemplate = populatedTemplate.replace(placeholder, resolvedValue);
    });

    return populatedTemplate;
  }

  function getImage(promptText, width, height) {
    return `https://placehold.co/${width}x${height}?text=${encodeURIComponent(promptText || 'image')}`;
  }

  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(generatedHtml.value);
      const original = copyBtn.textContent;
      copyBtn.textContent = 'Copied!';
      setTimeout(() => { copyBtn.textContent = original; }, 1500);
    } catch (e) {
      generatedHtml.select();
      document.execCommand('copy');
    }
  });

  downloadBtn.addEventListener('click', () => {
    const blob = new Blob([generatedHtml.value], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const safeTopic = (topicInput.value.trim() || 'generated-page').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    a.href = url;
    a.download = `${safeTopic || 'generated-page'}.html`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });
});
