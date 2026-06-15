/**
 * Single source of truth for brand / contact / config values.
 * Anything that might change later lives here — not hardcoded in components.
 */
export const siteConfig = {
  name: "Solvrex",
  // Used for metadata (canonical, Open Graph). No trailing slash.
  url: "https://solvrex.in",
  description:
    "Solvrex helps professionals and businesses achieve measurable outcomes through technology consulting, career support, operational guidance, and practical business solutions.",
  // Public-facing contact inbox (the contact form's API route can override via env).
  contactEmail: "solvrex.official@gmail.com",
  linkedInUrl: "https://www.linkedin.com/company/solvrex-private-limited/",
  // Shared Google Form the Careers "Apply" button opens.
  applyFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSfqfcGhR_3LsTCc1UQ6KaqdaQyAR9uxb18B7LVsHc_sKgRb-w/viewform",
} as const;
