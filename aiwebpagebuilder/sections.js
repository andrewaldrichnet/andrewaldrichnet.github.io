var sectionsJSON = [
  {
    id: "hero-banner-2",
    generalDescription:
      "This section is a hero banner and provides calls to action.",
    visualDescription:
      "The layout includes a large, attention-grabbing headline, a subtitle, descriptive text, and two prominent call-to-action buttons, all paired with a relevant image.",
    useCases: [
      "Provide an overview",
      "Encourage user interaction with call-to-action buttons",
      "Engage visitors with appealing visuals and concise text",
      "Highlight specific features or benefits of a service",
    ],
    file: "hero-banner-2.html",
    inputs: {
      Headline: "ShortText",
      SubTitle: "ShortText",
      DescriptionText: "LongText",
      PrimaryButtonText: "ShortText",
      SecondaryButtonText: "ShortText",
      ImageSrc: "ImageSrc",
    },
  },
  {
    id: "hero-banner-3",
    generalDescription:
      "This section is a hero banner and provides calls to action.",
    visualDescription:
      "The section features a large central title with a modern SVG wave design at the bottom, surrounded by a light-themed background. It includes a description and two call-to-action buttons aligned centrally.",
    useCases: [
      "Promote a special feature or service",
      "Capture user attention with a bold message",
      "Guide users to specific pages using call-to-action buttons",
      "Introduction to a topic",
    ],
    file: "hero-banner-3.html",
    inputs: {
      Title: "ShortText",
      DescriptionText: "LongText",
      PrimaryButtonText: "ShortText",
      SecondaryButtonText: "ShortText",
    },
  },
  {
    id: "about-us-section",
    generalDescription:
      "Featuring a compelling title, description, and call-to-action button. It includes two strategically positioned images for visual appeal.",
    visualDescription:
      "The layout includes two images positioned with a sense of layering, a bold title, a descriptive paragraph, and a prominent call-to-action button, creating a modern and engaging design.",
    useCases: [
      "Provide visual storytelling through images",
      "Encourage users to explore services with a call-to-action",
      "Enhance site aesthetics with an appealing image layout",
      "Introduce something",
    ],
    file: "about-us-section.html",
    inputs: {
      Title: "ShortText",
      SubTitle: "ShortText",
      DescriptionText: "LongText",
      ButtonText: "ShortText",
      ImageSrc1: "ImageSrc",
      ImageSrc2: "ImageSrc",
    },
  },
  {
    id: "lorem-ipsum-section",
    generalDescription:
      "This section highlights key information with a large title and supporting text alongside a wide image. It is designed to be engaging and informative, suitable for presenting detailed content.",
    visualDescription:
      "The layout features a bold heading with descriptive text on the left and a full-width image on the right.",
    useCases: [
      "Present key information or announcements",
      "Showcase features with accompanying visuals",
      "Provide detailed explanations alongside images",
      "Introduce a product or service with visual storytelling",
      "Highlight case studies or testimonials",
    ],
    file: "lorem-ipsum-section.html",
    inputs: {
      Title: "ShortText",
      Subtitle: "ShortText",
      DescriptionText: "LongText",
      ImageSrc: "ImageSrc",
    },
  },
  {
    id: "nature-topic-section",
    generalDescription:
      "This section is an image and descriptive text. It provides a call-to-action button.",
    visualDescription:
      "The layout includes a large image on the left and a text block on the right, featuring a bold title, descriptive paragraph, and call-to-action button.",
    useCases: [
      "Display visually appealing content with accompanying information",
      "Encourage exploration of products or services related to nature",
      "Present an article or blog post introduction with a strong visual element",
      "Highlight environmental initiatives or sustainability efforts",
      "Enhance site engagement with informative and visually rich sections",
    ],
    file: "nature-topic-section.html",
    inputs: {
      Title: "ShortText",
      DescriptionText: "LongText",
      ButtonText: "ShortText",
      ImageSrc: "ImageSrc",
    },
  },
  {
    id: "content-section",
    generalDescription:
      "This section presents detailed information using a two-column layout. It provides ample space for text, making it ideal for delivering comprehensive content to visitors.",
    visualDescription:
      "The design features a larger content area on the left and a complementary smaller section on the right, allowing for a balanced presentation of detailed and supplementary information.",
    useCases: [
      "Display detailed articles or blog content",
      "Provide in-depth explanations with supporting information",
      "Highlight case studies or research findings",
      "Showcase product descriptions and technical specifications",
      "Present company history or mission statement alongside key highlights",
    ],
    file: "content-section.html",
    inputs: {
      MainHeading: "ShortText",
      MainContent: "LongText",
      SideHeading: "ShortText",
      SideContent: "LongText",
    },
  },
  {
    id: "image-banner",
    generalDescription:
      "This section features a large, high-quality image designed to grab attention and provide a strong visual impact",
    visualDescription: "A full-width image",
    useCases: [
      "Display a hero image on a landing page",
      "Showcase featured products or services",
      "Highlight stunning photography or artwork",
      "Create a visual impact on portfolio sites",
      "Provide a visual break between content sections",
    ],
    file: "image-banner.html",
    inputs: {
      ImageSrc: "ImageSrc",
    },
  },
  {
    id: "text-heading-section",
    generalDescription:
      "This section prominently displays a primary heading and a secondary subheading.",
    visualDescription:
      "The section features a large, bold primary heading and a slightly smaller, muted secondary subheading.",
    useCases: [
      "Introduce key topics or themes on a landing page",
      "Highlight important announcements or messages",
      "Serve as a section header in articles or blog posts",
      "Draw attention to quotes or testimonials",
      "Provide clear and bold calls to action",
    ],
    file: "text-heading-section.html",
    inputs: {
      PrimaryHeading: "ShortText",
      SecondaryHeading: "ShortText",
    },
  },
  {
    id: "text-content-section",
    generalDescription:
      "This section is designed for presenting detailed textual content, such as articles or lengthy descriptions, with an emphasis on readability and clarity.",
    visualDescription:
      "The section features a block of text with a moderate font size and line height, ensuring comfortable reading",
    useCases: [
      "Display articles or blog posts",
      "Present detailed product descriptions",
      "Provide terms and conditions or policy content",
      "Showcase informative content or guides",
      "Include storytelling or narrative sections",
    ],
    file: "text-content-section.html",
    inputs: {
      ContentText: "LongText",
    },
  },
  {
    id: "dual-image-section",
    generalDescription:
      "This section is designed to display two images side-by-side, offering a visual comparison or highlighting complementary visuals.",
    visualDescription:
      "The section features two images placed in separate columns within a responsive grid.",
    useCases: [
      "Showcase related products or services",
      "Highlight before-and-after transformations",
      "Display complementary visuals for storytelling",
      "Compare features or designs",
      "Provide a visual gallery with descriptive text",
    ],
    file: "dual-image-section.html",
    inputs: {
      FirstImageSrc: "ImageSrc",
      SecondImageSrc: "ImageSrc",
    },
  },
  {
    id: "headline-section",
    generalDescription:
      "A minimal section featuring a bold headline, ideal for emphasizing key messages or introducing topics.",
    visualDescription: "Large Headline with large typography",
    useCases: [
      "Introduce a new topic or section",
      "Provide a heading for subsequent content",
      "Grab attention with a bold, minimalistic design",
    ],
    file: "headline-section.html",
    inputs: {
      HeadlineText: "ShortText",
    },
  },
  {
    id: "detailed-information-section",
    generalDescription:
      "A versatile section that combines a primary message with supporting subtopics and a visual element to engage visitors and convey detailed information.",
    visualDescription:
      "The section consists of a large headline and introductory text on the left side, complemented by four subtopics arranged in a grid format, alongside a supporting image on the right.",
    useCases: [
      "Present complex information with multiple subpoints",
      "Engage visitors with both text and visuals",
      "Explain detailed topics with supporting sub-sections",
      "Showcase key features or services",
      "Enhance storytelling with structured content",
    ],
    file: "detailed-information-section.html",
    inputs: {
      MainTitle: "ShortText",
      MainContent: "LongText",
      SubTitle1: "ShortText",
      SubContent1: "LongText",
      SubTitle2: "ShortText",
      SubContent2: "LongText",
      SubTitle3: "ShortText",
      SubContent3: "LongText",
      SubTitle4: "ShortText",
      SubContent4: "LongText",
      ImageSrc: "ImageSrc",
    },
  },
  {
    id: "features-section",
    generalDescription:
      "This section showcases key features or benefits with icons and brief descriptions, arranged in a responsive grid layout.",
    visualDescription:
      "The section consists of a main headline followed by a grid of blocks, each containing an icon, a title, and a short description",
    useCases: [
      "Highlight product features or benefits",
      "Showcase service offerings",
      "Present key aspects",
      "Display advantages or unique selling points",
    ],
    file: "features-section.html",
    inputs: {
      MainTitle: "ShortText",
      FeatureIcon1: "Icon",
      FeatureTitle1: "ShortText",
      FeatureDescription1: "LongText",
      FeatureIcon2: "Icon",
      FeatureTitle2: "ShortText",
      FeatureDescription2: "LongText",
      FeatureIcon3: "Icon",
      FeatureTitle3: "ShortText",
      FeatureDescription3: "LongText",
      FeatureIcon4: "Icon",
      FeatureTitle4: "ShortText",
      FeatureDescription4: "LongText",
      FeatureIcon5: "Icon",
      FeatureTitle5: "ShortText",
      FeatureDescription5: "LongText",
      FeatureIcon6: "Icon",
      FeatureTitle6: "ShortText",
      FeatureDescription6: "LongText",
    },
  },
  {
    id: "features-section-2",
    generalDescription:
      "This section highlights key features or benefits, complete with icons, titles, and descriptions.",
    visualDescription:
      "The section includes a large header with a subtitle, followed by three evenly spaced cards with icons and text descriptions.",
    useCases: [
      "Showcase product or service features",
      "Highlight benefits or advantages",
      "Present key offerings",
    ],
    file: "features-section-2.html",
    inputs: {
      MainTitle: "ShortText",
      Subtitle: "ShortText",
      FeatureIcon1: "Icon",
      FeatureTitle1: "ShortText",
      FeatureDescription1: "LongText",
      FeatureIcon2: "Icon",
      FeatureTitle2: "ShortText",
      FeatureDescription2: "LongText",
      FeatureIcon3: "Icon",
      FeatureTitle3: "ShortText",
      FeatureDescription3: "LongText",
    },
  },
  {
    id: "features-section-dark",
    generalDescription:
      "Featuring a bold headline, detailed description, call-to-action button, and a series of feature highlights.",
    visualDescription:
      "The section has a dark theme with a bold headline, a description, a call-to-action button, and a grid of cards with icons, titles, and descriptions.",
    useCases: [
      "Introduce a topic with key features",
      "Highlight capabilities of a product or service",
      "Use icons and short text to convey feature benefits",
    ],
    file: "features-section-dark.html",
    inputs: {
      SectionTitle: "ShortText",
      MainTitle: "ShortText",
      Description: "LongText",
      ButtonLabel: "ShortText",
      ButtonLink: "URL",
      FeatureIcon1: "Icon",
      FeatureTitle1: "ShortText",
      FeatureDescription1: "LongText",
      FeatureIcon2: "Icon",
      FeatureTitle2: "ShortText",
      FeatureDescription2: "LongText",
      FeatureIcon3: "Icon",
      FeatureTitle3: "ShortText",
      FeatureDescription3: "LongText",
      FeatureIcon4: "Icon",
      FeatureTitle4: "ShortText",
      FeatureDescription4: "LongText",
    },
  },
  {
    id: "pricing-section",
    generalDescription:
      "This section presents three different pricing plans with a central emphasis on the middle plan, complete with pricing, features, and purchase options.",
    visualDescription:
      "The section is centered on a text block with a headline and description, followed by a row of three pricing cards with feature highlights.",
    useCases: [
      "Display multiple pricing options for products or services",
      "Highlight key differences between pricing tiers",
      "Use contrasting styles to draw attention to a preferred plan",
    ],
    file: "pricing-section.html",
    inputs: {
      SectionTitle: "ShortText",
      Description: "LongText",
      PlanTitle1: "ShortText",
      PlanPrice1: "Price",
      PlanPeriod1: "ShortText",
      PlanFeatures1A: "ShortText",
      PlanFeatures1B: "ShortText",
      PlanFeatures1C: "ShortText",
      PlanButtonText1: "ShortText",
      PlanButtonLink1: "URL",
      PlanTitle2: "ShortText",
      PlanPrice2: "Price",
      PlanPeriod2: "ShortText",
      PlanFeatures2A: "ShortText",
      PlanFeatures2B: "ShortText",
      PlanFeatures2C: "ShortText",
      PlanFeatures2D: "ShortText",
      PlanButtonText2: "ShortText",
      PlanButtonLink2: "URL",
      PlanTitle3: "ShortText",
      PlanPrice3: "Price",
      PlanPeriod3: "ShortText",
      PlanFeatures3A: "ShortText",
      PlanFeatures3B: "ShortText",
      PlanFeatures3C: "ShortText",
      PlanFeatures3D: "ShortText",
      PlanButtonText3: "ShortText",
      PlanButtonLink3: "URL",
    },
  },
  {
    id: "action-stats-section",
    generalDescription:
      "This section highlights key statistics of a product or service, showcasing impressive numbers to potential users and enhancing credibility.",
    visualDescription:
      "The section features a headline and a description, followed by four equally spaced statistic boxes, each displaying a large, bold number and a label, emphasizing various aspects of the service.",
    useCases: [
      "Display statistical achievements to attract potential users",
      "Highlight user engagement or product success metrics",
      "Create a visual impact with large numbers and concise text",
      "Provide social proof of the product or service's popularity",
      "Use as a summary section in marketing or landing pages",
    ],
    file: "action-stats-section.html",
    inputs: {
      SectionTitle: "ShortText",
      Description: "LongText",
      Stat1Value: "Number",
      Stat1Label: "ShortText",
      Stat2Value: "Number",
      Stat2Label: "ShortText",
      Stat3Value: "Number",
      Stat3Label: "ShortText",
      Stat4Value: "Number",
      Stat4Label: "ShortText",
    },
  },
  {
    id: "statistics-display-section",
    generalDescription:
      "A section designed to present key statistics, highlighting significant achievements or metrics.",
    visualDescription:
      "This section consists of a responsive grid layout with large, bold numbers representing statistics, paired with smaller descriptive labels",
    useCases: [
      "Display important metrics to potential users or stakeholders",
      "Highlight usage statistics for marketing purposes",
      "Provide social proof of a product or service's impact",
      "Showcase achievements in a portfolio",
    ],
    file: "statistics-display-section.html",
    inputs: {
      Stat1Value: "Number",
      Stat1Label: "ShortText",
      Stat2Value: "Number",
      Stat2Label: "ShortText",
      Stat3Value: "Number",
      Stat3Label: "ShortText",
      Stat4Value: "Number",
      Stat4Label: "ShortText",
    },
  },
  {
    id: "customer-testimonials-section",
    generalDescription:
      "A section designed to showcase customer testimonials, highlighting positive feedback and endorsements from satisfied clients.",
    visualDescription:
      "The section features a large blockquote-style testimonial and a customer attribution line",
    useCases: [
      "Display testimonials from happy customers to build trust",
      "Highlight customer stories on a landing page",
      "Provide social proof for potential clients",
      "Enhance a product or service page with real customer feedback",
      "A quote",
    ],
    file: "customer-testimonials-section.html",
    inputs: {
      TestimonialText: "LongText",
      CustomerName: "ShortText",
      CustomerCompany: "ShortText",
    },
  },
  {
    id: "cta-section",
    generalDescription:
      "This section serves as a call to action designed to attract attention and prompt visitors to explore available solutions or make a purchase.",
    visualDescription:
      "The section features a two-column layout with a prominent headline, supporting text, and a call-to-action button. A relevant image is on the right.",
    useCases: [
      "Encourage users to explore available solutions",
      "Prompt visitors to make a purchase",
      "Direct users to sign up for a newsletter or service",
      "Highlight special offers or promotions",
    ],
    file: "cta-section.html",
    inputs: {
      Headline: "ShortText",
      Description: "LongText",
      ButtonText: "ShortText",
      ButtonLink: "Url",
      ImageSrc: "ImageSrc",
      ImageAlt: "ShortText",
    },
  },
  {
    id: "solution-promo-section",
    generalDescription:
      "This section presents a promotional message designed to capture the visitor's attention and encourage them to try a solution or product.",
    visualDescription:
      "The section features a centered layout with a prominent headline, subheading, and a call-to-action button",
    useCases: [
      "Encourage users to try a solution",
      "Highlight a special offer or promotion",
      "Direct visitors to sign up for a service",
      "Guide users to explore product features",
      "Drive traffic to a specific landing page",
      "Call to action",
    ],
    file: "solution-promo-section.html",
    inputs: {
      Subheading: "ShortText",
      Headline: "ShortText",
      Description: "LongText",
      ButtonText: "ShortText",
      ButtonLink: "Url",
    },
  },
];
