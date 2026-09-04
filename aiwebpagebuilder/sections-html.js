var sectionsHtml = 

{
    "content-section.html": `
<section>
    <div class="container py-3 my-5">
      <div class="row" style="font-size: 1.2rem">
        <div class="col-12 col-lg-8">
          <div>
            <h4>[MainHeading]</h4>
          </div>
          <div>
            [MainContent]
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <div>
            <h4>[SideHeading]</h4>
          </div>
          <div>
            [SideContent]
          </div>
        </div>
      </div>
    </div>
  </section>
`,
    "headline-section.html": `
<section>
    <div class="container py-3">
      <h3 style="font-size: 4rem" class="mb-0">
        [HeadlineText]
      </h3>
    </div>
  </section>
`,
    "image-banner.html": `
<section>
    <div class="container py-5">
      <img
        src="https://placehold.co/1280x700"
        class="mw-100 rounded shadow-sm"
      />
    </div>
  </section>
`,
    "features-section-dark.html": `
<section>
    <div class="bg-dark text-light">
      <div class="container-xl py-5 px-5">
        <div class="row">
          <div class="col-12 col-lg-5">
            <div class="py-lg-5">
              <div class="d-flex flex-column gap-1">
                <div class="text-uppercase text-primary">[SectionTitle]</div>
                <div style="font-size: 3rem" class="mb-1 fw-bold">
                  [MainTitle]
                </div>
                <div style="font-size: 1.3rem">
                  [Description]
                </div>
                <div class="mt-5">
                  <a href="[ButtonLink]" class="btn btn-lg px-5 py-3 btn-primary">
                    [ButtonLabel]
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-7 px-5">
            <div class="row">
              <div class="col-6 my-3">
                <div class="px-4 py-3 rounded shadow bg-dark bg-gradient">
                  <div style="font-size: 4rem" class="px-1">
                    <i class="[FeatureIcon1] text-primary"></i>
                  </div>
                  <div class="mt-3 mb-1">
                    <h4 class="fw-bold fs-4 mb-2">[FeatureTitle1]</h4>
                    <div>
                      [FeatureDescription1]
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6 my-3">
                <div class="px-4 py-3 rounded shadow bg-dark bg-gradient">
                  <div style="font-size: 4rem" class="px-1">
                    <i class="[FeatureIcon2] text-primary"></i>
                  </div>
                  <div class="mt-3 mb-1">
                    <h4 class="fw-bold fs-4 mb-2">[FeatureTitle2]</h4>
                    <div>
                      [FeatureDescription2]
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6 my-3">
                <div class="px-4 py-3 rounded shadow bg-dark bg-gradient">
                  <div style="font-size: 4rem" class="px-1">
                    <i class="[FeatureIcon3] text-primary"></i>
                  </div>
                  <div class="mt-3 mb-1">
                    <h4 class="fw-bold fs-4 mb-2">[FeatureTitle3]</h4>
                    <div>
                      [FeatureDescription3]
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6 my-3">
                <div class="px-4 py-3 rounded shadow bg-dark bg-gradient">
                  <div style="font-size: 4rem" class="px-1">
                    <i class="[FeatureIcon4] text-primary"></i>
                  </div>
                  <div class="mt-3 mb-1">
                    <h4 class="fw-bold fs-4 mb-2">[FeatureTitle4]</h4>
                    <div>
                      [FeatureDescription4]
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`,
    "action-stats-section.html": `
<section>
    <div class="container">
      <div>
        <h2 class="display-4 fw-bold mb-3 fs-1">[SectionTitle]</h2>
        <p class="text-muted">
          [Description]
        </p>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-6 col-6">
          <div class="border-top pt-4 mt-5 mb-5">
            <h2 class="display-3 fw-bold mb-0">[Stat1Value]</h2>
            <p class="text-uppercase text-muted">[Stat1Label]</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-6">
          <div class="border-top pt-4 mt-5 mb-5">
            <h2 class="display-3 fw-bold mb-0">[Stat2Value]</h2>
            <p class="text-uppercase text-muted">[Stat2Label]</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-6">
          <div class="border-top pt-4 mt-5 mb-5">
            <h2 class="display-3 fw-bold mb-0">[Stat3Value]</h2>
            <p class="text-uppercase text-muted">[Stat3Label]</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-6">
          <div class="border-top pt-4 mt-5 mb-5">
            <h2 class="display-3 fw-bold mb-0">[Stat4Value]</h2>
            <p class="text-uppercase text-muted">[Stat4Label]</p>
          </div>
        </div>
      </div>
    </div>
  </section>
`,
    "features-section.html": `
<section>
    <div class="container py-5 my-5 text-center">
      <h2 style="font-size: 3rem">[MainTitle]</h2>
      <div class="mt-5">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4">
            <div class="d-flex flex-column gap-3 my-md-5">
              <div>
                <i class="[FeatureIcon1]" style="font-size: 4rem"></i>
              </div>
              <h3>[FeatureTitle1]</h3>
              <div>
                [FeatureDescription1]
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div class="d-flex flex-column gap-3 my-md-5">
              <div>
                <i class="[FeatureIcon2]" style="font-size: 4rem"></i>
              </div>
              <h3>[FeatureTitle2]</h3>
              <div>
                [FeatureDescription2]
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div class="d-flex flex-column gap-3 my-md-5">
              <div>
                <i class="[FeatureIcon3]" style="font-size: 4rem"></i>
              </div>
              <h3>[FeatureTitle3]</h3>
              <div>
                [FeatureDescription3]
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div class="d-flex flex-column gap-3 my-md-5">
              <div>
                <i class="[FeatureIcon4]" style="font-size: 4rem"></i>
              </div>
              <h3>[FeatureTitle4]</h3>
              <div>
                [FeatureDescription4]
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div class="d-flex flex-column gap-3 my-md-5">
              <div>
                <i class="[FeatureIcon5]" style="font-size: 4rem"></i>
              </div>
              <h3>[FeatureTitle5]</h3>
              <div>
                [FeatureDescription5]
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div class="d-flex flex-column gap-3 my-md-5">
              <div>
                <i class="[FeatureIcon6]" style="font-size: 4rem"></i>
              </div>
              <h3>[FeatureTitle6]</h3>
              <div>
                [FeatureDescription6]
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`,
    "features-section-2.html": `
<section>
    <div class="container py-5 my-5 text-center">
      <div>
        <h2 style="font-size: 3rem">[MainTitle]</h2>
        <div class="fs-4 mt-4 text-muted">
          [Subtitle]
        </div>
      </div>
  
      <div class="row mt-5 py-5">
        <div class="col-12 col-md-4">
          <div
            class="py-5 px-4 shadow-sm rounded rounded-3 border border-light mx-3"
          >
            <div class="d-flex flex-column gap-3">
              <div>
                <i class="[FeatureIcon1]" style="font-size: 4rem"></i>
              </div>
              <h3>[FeatureTitle1]</h3>
              <div>
                [FeatureDescription1]
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div
            class="py-5 px-4 shadow-sm rounded rounded-3 border border-light mx-3"
          >
            <div class="d-flex flex-column gap-3">
              <div>
                <i class="[FeatureIcon2]" style="font-size: 4rem"></i>
              </div>
              <h3>[FeatureTitle2]</h3>
              <div>
                [FeatureDescription2]
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div
            class="py-5 px-4 shadow-sm rounded rounded-3 border border-light mx-3"
          >
            <div class="d-flex flex-column gap-3">
              <div>
                <i class="[FeatureIcon3]" style="font-size: 4rem"></i>
              </div>
              <h3>[FeatureTitle3]</h3>
              <div>
                [FeatureDescription3]
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`,
    "text-content-section.html": `
<section>
    <div class="container my-3 py-3">
      <div style="font-size: 1.5rem; line-height: 1.7">
        [ContentText]
      </div>
    </div>
  </section>
`,
    "customer-testimonials-section.html": `
<section>
    <div class="container">
      <div class="text-center py-5">
        <h2 style="font-size: 3.5rem" class="fw-bold mb-5">
          What Customer's Say
        </h2>
        <div style="max-width: 700px" class="m-auto">
          <div style="line-height: 3.5rem" class="text-start">
            <span style="font-size: 3rem">&ldquo;</span>
            <span style="font-size: 2rem" class="fw-semibold">
              [TestimonialText]
            </span>
            <span style="font-size: 3rem">&rdquo;</span>
          </div>
  
          <div class="fs-3 text-end text-primary mt-1">
            &mdash;<span>[CustomerName]</span> &dash; <span>[CustomerCompany]</span>
          </div>
        </div>
      </div>
    </div>
  </section>
`,
    "about-us-section.html": `
<section>
    <div class="container py-5 my-5">
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="position-relative pb-5 pe-lg-5 me-lg-5 align-items-start">
            <div style="min-height: 400px;" class="mb-5">
              <img src="https://placehold.co/300x330" class="rounded">
            </div>
            <img src="https://placehold.co/300x400" class="position-absolute rounded" style="right: 0; bottom: 0;">
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <h4>[SubTitle]</h4>
          <div class="fw-semibold" style="font-size: 4rem;">[Title]</div>
          <div style="font-size: 1.8rem" class="mt-3">
            [DescriptionText]
          </div>
          <div class="mt-5">
            <a href="#" class="btn btn-lg btn-primary py-3 px-5">[ButtonText]</a>
          </div>
        </div>
      </div>
    </div>
  </section>
`,
    "hero-banner-3.html": `
<section>
    <div class="py-5">
      <div class="position-relative">
        <div style="bottom: 0; left: 0; right: 0" class="position-absolute">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#273036"
              fill-opacity="1"
              d="M0,32L80,42.7C160,53,320,75,480,85.3C640,96,800,96,960,112C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div class="container position-relative mb-5 pb-5">
          <div class="d-flex justify-content-center mb-5 pb-5">
            <div
              class="mw-100 p-5 border border-5 border-light rounded text-center bg-light"
              style="width: 800px"
            >
              <h1 style="font-size: 5rem">[Title]</h1>
              <div class="mt-3 text-muted" style="font-size: 2rem">
                [DescriptionText]
              </div>
              <div class="w-100 d-flex gap-3 mt-5 justify-content-center">
                <a
                  href="#"
                  class="btn btn-lg btn-outline-dark py-3 px-5 border-2 fw-bold"
                  >[PrimaryButtonText]</a
                >
                <a href="#" class="btn btn-lg btn-primary py-3 px-5"
                  >[SecondaryButtonText]</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`,
    "solution-promo-section.html": `
<section>
    <div class="py-5 my-5">
      <div class="container">
        <div class="row">
          <div class="offset-lg-2 col-lg-8 col-md-12 col-12 text-center">
            <span class="fs-4 text-warning text-uppercase fw-semibold">
              [Subheading]
            </span>
            <h2 class="display-3 mt-4 mb-3 fw-bold">
              [Headline]
            </h2>
            <p class="lead px-lg-8 mb-6">
              [Description]
            </p>
            <a href="[ButtonLink]" class="btn btn-primary btn-lg py-3 px-5 mt-4">
              [ButtonText]
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
`,
    "hero-banner.html": `
<section
  class="hero-banner d-flex align-items-center justify-content-center text-center position-relative"
>
  <div class="container position-relative">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <h1 class="display-4 fw-bold text-white">[Headline]</h1>
        <p class="lead text-white-50">
          [SubTitle]
        </p>
        <a href="#" class="btn btn-primary btn-lg mt-4">[CallToActionText]</a>
      </div>
    </div>
  </div>
  <div
    class="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"
  ></div>
  <style>
    .hero-banner {
      background-image: url("https://placehold.co/1920x600");
      background-size: cover;
      background-position: center;
      height: 100vh;
    }
    .overlay {
      z-index: 1;
    }
    .container {
      z-index: 2;
    }
  </style>
</section>
`,
    "hero-banner-2.html": `
<section>
  <div class="container py-5">
    <div class="my-5">
      <div class="row">
        <div class="col-12 col-lg-7">
          <div class="d-flex flex-column gap-3 align-items-center text-start">
            <div class="w-100">
              <h1 style="font-size: 5rem">[Headline]</h1>
            </div>
            <div class="w-100">
              <h2 style="font-size: 3rem" class="text-primary">[SubTitle]</h2>
            </div>
            <div class="text-muted w-100" style="font-size: 2rem">
              [DescriptionText]
            </div>
            <div class="w-100 d-flex gap-3 mt-3">
              <a href="#" class="btn btn-lg btn-light py-3 px-5">
                [PrimaryButtonText]
              </a>
              <a href="#" class="btn btn-lg btn-primary py-3 px-5">
                [SecondaryButtonText]
              </a>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-5">
          <img
            src="https://placehold.co/500x600"
            class="rounded shadow mw-100"
          />
        </div>
      </div>
    </div>
  </div>
</section>
`,
    "text-heading-section.html": `
<section>
    <div class="container py-3">
      <h2 style="font-size: 5rem" class="mb-0">
        [PrimaryHeading]
      </h2>
      <h3 style="font-size: 3rem" class="mb-0 text-muted">
        [SecondaryHeading]
      </h3>
    </div>
  </section>
`,
    "lorem-ipsum-section.html": `
<section>
    <div class="container-xl">
      <div class="py-5 my-5">
        <div class="row">
          <div class="col-12 order-1 order-lg-0 col-lg-5">
            <div class="pe-lg-5">
              <div class="pe-lg-5 me-lg-5">
                <h2 style="font-size: 4rem">[Title]</h2>
              </div>
              <div>
                <div style="font-size: 2rem" class="text-muted fw-bold">
                  [Subtitle]
                </div>
                <div style="font-size: 1.5rem" class="mt-3">
                  [DescriptionText]
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-7">
            <div class="py-3">
              <img
                src="https://placehold.co/700x450"
                class="rounded mw-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`,
    "statistics-display-section.html": `
<section>
    <div class="container py-5 my-5 px-lg-5">
      <div class="px-lg-5">
        <div class="px-lg-5">
          <div class="row text-center">
            <div class="col-12 col-lg-6 my-3">
              <div class="fw-bold" style="font-size: 5rem">[Stat1Value]</div>
              <div class="fs-3">[Stat1Label]</div>
            </div>
            <div class="col-12 col-lg-6 my-3">
              <div class="fw-bold" style="font-size: 5rem">[Stat2Value]</div>
              <div class="fs-3">[Stat2Label]</div>
            </div>
            <div class="col-12 col-lg-6 my-3">
              <div class="fw-bold" style="font-size: 5rem">[Stat3Value]</div>
              <div class="fs-3">[Stat3Label]</div>
            </div>
            <div class="col-12 col-lg-6 my-3">
              <div class="fw-bold" style="font-size: 5rem">[Stat4Value]</div>
              <div class="fs-3">[Stat4Label]</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`,
    "cta-section.html": `
<section>
    <div class="container py-5 my-5">
      <div class="row">
        <div class="col-xl-10 offset-xl-1 col-md-12 col-12">
          <div class="bg-primary py-5 px-5 px-xl-0 rounded-4">
            <div class="row align-items-center">
              <div class="offset-xl-1 col-xl-5 col-md-6 col-12">
                <div class="py-3">
                  <h2 class="fs-1 text-white mb-3 fw-bold">
                    [Headline]
                  </h2>
                  <p class="text-white fs-4">
                    [Description]
                  </p>
                  <a href="[ButtonLink]" class="btn btn-dark btn-lg py-3 px-5">
                    [ButtonText]
                  </a>
                </div>
              </div>
              <div class="col-xl-6 col-md-6 col-12">
                <div class="text-center px-5">
                  <img
                    src="https://placehold.co/300x300"
                    class="mw-100 shadow rounded"
                    width="300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`,
    "nature-topic-section.html": `
<section>
    <div class="container py-5 my-5">
      <div class="row">
        <div class="col-12 col-lg-7">
          <img
            src="https://placehold.co/600x450"
            class="mw-100 rounded mx-lg-3 mx-1 shadow"
          />
        </div>
  
        <div class="col-12 col-lg-5">
          <div class="mx-lg-3 mx-1 py-5 px-3">
            <div><h2 style="font-size: 3rem">[Title]</h2></div>
            <div class="mt-3" style="font-size: 1.2rem">
              [DescriptionText]
            </div>
            <a href="#" class="btn btn-primary btn-lg py-3 px-5 mt-5">
              [ButtonText]
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
`,
    "dual-image-section.html": `
<section>
    <div class="container py-5">
      <div class="row">
        <div class="col-12 col-lg-5">
          <img
            src="https://placehold.co/450x500"
            class="mw-100 rounded shadow-sm"
          />
        </div>
        <div class="col-12 col-lg-7">
          <img
            src="https://placehold.co/600x500"
            class="mw-100 rounded shadow-sm"
          />
        </div>
      </div>
    </div>
  </section>
`,
    "detailed-information-section.html": `
<section>
    <div class="container py-5 my-5">
      <div class="row">
        <div class="col-12 col-lg-7">
          <div class="px-lg-3">
            <h2 style="font-size: 3.5rem">[MainTitle]</h2>
            <div style="font-size: 1.5rem">
              [MainContent]
            </div>
            <div class="row align-items-stretch mt-5">
              <div class="col-6 d-flex flex-column my-3">
                <h3 style="font-size: 2.5rem">[SubTitle1]</h3>
                <div class="flex-grow-1">
                  [SubContent1]
                </div>
              </div>
              <div class="col-6 d-flex flex-column my-3">
                <h3 style="font-size: 2.5rem">[SubTitle2]</h3>
                <div class="flex-grow-1">
                  [SubContent2]
                </div>
              </div>
              <div class="col-6 d-flex flex-column my-3">
                <h3 style="font-size: 2.5rem">[SubTitle3]</h3>
                <div class="flex-grow-1">
                  [SubContent3]
                </div>
              </div>
              <div class="col-6 d-flex flex-column my-3">
                <h3 style="font-size: 2.5rem">[SubTitle4]</h3>
                <div class="flex-grow-1">
                  [SubContent4]
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-5">
          <img
            src="https://placehold.co/700x1100"
            class="mw-100 rounded shadow"
          />
        </div>
      </div>
    </div>
  </section>
`,
    "pricing-section.html": `
<section>
    <div class="container py-5 my-5 text-center">
      <div>
        <h2 style="font-size: 3rem">[SectionTitle]</h2>
        <div class="fs-4 mt-4 text-muted">
          [Description]
        </div>
      </div>
      <div class="mx-lg-3 mt-5">
        <div class="row align-items-stretch">
          <div class="col-12 col-lg-4 d-flex flex-column">
            <div
              class="mx-1 text-center d-flex flex-column border border-light rounded rounded-2 gap-5 py-5 shadow shadow-sm flex-grow-1"
            >
              <div>
                <h3 class="mb-0 fw-bold">[PlanTitle1]</h3>
              </div>
              <div
                class="d-flex justify-content-center gap-1 fw-bold align-items-baseline"
                style="font-size: 1.2rem"
              >
                <div>$</div>
                <div
                  style="font-size: 6rem; line-height: 1"
                  class="text-primary"
                >
                  [PlanPrice1]
                </div>
                <div>/[PlanPeriod1]</div>
              </div>
              <div
                class="flex-grow-1 d-flex flex-column gap-1 text-start px-5 mt-3"
              >
                <div>
                  <i class="bi bi-check-circle text-success"></i>
                  [PlanFeatures1A]
                </div>
                <div>
                  <i class="bi bi-check-circle text-success"></i>
                  [PlanFeatures1B]
                </div>
                <div>
                  <i class="bi bi-check-circle text-success"></i>
                  [PlanFeatures1C]
                </div>
              </div>
              <div>
                <a href="[PlanButtonLink1]" class="btn btn-outline-primary btn-lg px-5 py-3">
                  [PlanButtonText1]
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4 d-flex flex-column">
            <div
              class="mx-1 text-center d-flex flex-column border border-light rounded rounded-2 gap-5 py-5 shadow shadow-sm bg-dark text-light flex-grow-1"
            >
              <div>
                <h3 class="mb-0 fw-bold">[PlanTitle2]</h3>
              </div>
              <div
                class="d-flex justify-content-center gap-1 fw-bold align-items-baseline"
                style="font-size: 1.2rem"
              >
                <div>$</div>
                <div
                  style="font-size: 6rem; line-height: 1"
                  class="text-light"
                >
                  [PlanPrice2]
                </div>
                <div>/[PlanPeriod2]</div>
              </div>
              <div
                class="flex-grow-1 d-flex flex-column gap-1 text-start px-5 mt-3"
              >
                <div>
                  <i class="bi bi-check-circle-fill text-success"></i>
                  [PlanFeatures2A]
                </div>
                <div>
                  <i class="bi bi-check-circle-fill text-success"></i>
                  [PlanFeatures2B]
                </div>
                <div>
                  <i class="bi bi-check-circle-fill text-success"></i>
                  [PlanFeatures2C]
                </div>
                <div>
                  <i class="bi bi-check-circle-fill text-success"></i>
                  [PlanFeatures2D]
                </div>
              </div>
              <div>
                <a href="[PlanButtonLink2]" class="btn btn-primary btn-lg px-5 py-3">
                  [PlanButtonText2]
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4 d-flex flex-column">
            <div
              class="mx-1 text-center d-flex flex-column border border-light rounded rounded-2 gap-5 py-5 shadow shadow-sm flex-grow-1"
            >
              <div>
                <h3 class="mb-0 fw-bold">[PlanTitle3]</h3>
              </div>
              <div
                class="d-flex justify-content-center gap-1 fw-bold align-items-baseline"
                style="font-size: 1.2rem"
              >
                <div>$</div>
                <div
                  style="font-size: 6rem; line-height: 1"
                  class="text-primary"
                >
                  [PlanPrice3]
                </div>
                <div>/[PlanPeriod3]</div>
              </div>
              <div
                class="flex-grow-1 d-flex flex-column gap-1 text-start px-5 mt-3"
              >
                <div>
                  <i class="bi bi-check-circle text-success"></i>
                  [PlanFeatures3A]
                </div>
                <div>
                  <i class="bi bi-check-circle text-success"></i>
                  [PlanFeatures3B]
                </div>
                <div>
                  <i class="bi bi-check-circle text-success"></i>
                  [PlanFeatures3C]
                </div>
                <div>
                  <i class="bi bi-check-circle text-success"></i>
                  [PlanFeatures3D]
                </div>
              </div>
              <div>
                <a href="[PlanButtonLink3]" class="btn btn-outline-primary btn-lg px-5 py-3">
                  [PlanButtonText3]
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`
}
