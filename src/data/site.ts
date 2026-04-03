export const siteConfig = {
  name: "New Deliverance",
  title: "New Deliverance | Built for clarity, care, and conversion",
  description:
    "A polished, search-friendly website foundation for New Deliverance, designed to scale from a focused landing page into a full content and service platform.",
  url: "https://autonateai.github.io/new-deliverance/",
  ogImage: "/social-card.svg",
  nav: [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Proof", href: "#proof" },
    { label: "Contact", href: "#contact" },
  ],
  stats: [
    { value: "Fast", label: "Static delivery on GitHub Pages" },
    { value: "SEO", label: "Structured metadata and sitemap baked in" },
    { value: "Ready", label: "Firebase can slot in when needed" },
  ],
  services: [
    {
      title: "Message Clarity",
      description:
        "Turn the core offer into headline-ready language, clear calls to action, and page structures that help people understand what happens next.",
    },
    {
      title: "Trust Building",
      description:
        "Layer in testimonials, outcomes, FAQs, and proof points without turning the experience into a wall of generic marketing copy.",
    },
    {
      title: "Scalable Content",
      description:
        "Add guides, announcements, case studies, and campaign landing pages without rewriting the foundation every time the site grows.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Define the story",
      description:
        "Align the homepage, service pages, and future content around one clear positioning narrative.",
    },
    {
      step: "02",
      title: "Build modular sections",
      description:
        "Use reusable Astro components and content-driven data so new pages stay consistent and easy to extend.",
    },
    {
      step: "03",
      title: "Launch and iterate",
      description:
        "Deploy on every push to main, then add analytics, forms, scheduling, or Firebase-backed features only when they become necessary.",
    },
  ],
  proof: [
    {
      quote:
        "This foundation keeps the visual layer sharp while leaving the architecture disciplined enough for real growth.",
      name: "Site Architecture",
      role: "Astro + GitHub Pages",
    },
    {
      quote:
        "The content model is simple on purpose: clear sections now, expandable page and data patterns later.",
      name: "Publishing Workflow",
      role: "Main -> gh-pages",
    },
  ],
  faqs: [
    {
      question: "Why Astro for this project?",
      answer:
        "It ships static HTML by default, performs well, gives strong SEO fundamentals, and still leaves room to add interactive islands only where they matter.",
    },
    {
      question: "Can backend features be added later?",
      answer:
        "Yes. Firebase is a clean next step for forms, auth, lightweight data storage, and admin workflows without replacing the frontend architecture.",
    },
    {
      question: "Will this work on GitHub Pages?",
      answer:
        "Yes. The build output is static, and the deployment workflow publishes the generated site to a dedicated gh-pages branch on every push to main.",
    },
  ],
} as const;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
};
