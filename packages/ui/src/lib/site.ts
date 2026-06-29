/**
 * Single source of truth for brand / contact / config values.
 * Anything that might change later lives here — not hardcoded in components.
 */
export const siteConfig = {
  name: "Solvrex",
  // Per-domain canonical/OG/sitemap URL. Each app sets NEXT_PUBLIC_SITE_URL
  // (solvrex.us / solvrex.in). No trailing slash.
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://solvrex.in").replace(/\/$/, ""),
  description:
    "Practical career services, technology consulting, and business enablement. Resume reviews, LinkedIn optimization, job search strategy, website development, and operational support.",
  // Public-facing contact inbox (the contact form's API route can override via env).
  contactEmail: "official@solvrex.in",
  linkedInUrl: "https://www.linkedin.com/company/solvrex-private-limited/",
  // Shared Google Form the Careers "Apply" button opens.
  applyFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSfqfcGhR_3LsTCc1UQ6KaqdaQyAR9uxb18B7LVsHc_sKgRb-w/viewform",
};
