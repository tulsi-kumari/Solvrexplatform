// Pricing — single source of truth (homepage preview + /pricing page + Pricing mega-menu).
// Career Services is priced per application cycle (USD). Business & IT work is custom
// (project-based or monthly retainer) and quoted per engagement.
export const PRICING_IS_PLACEHOLDER = false;

export const PRICING_NOTE =
  "Career Services is priced per application cycle. We confirm the exact application cap for your tier before we start.";

export interface PricingTier {
  slug: string;
  name: string;
  blurb: string;
  priceFrom: string; // e.g. "$199"
  billing: string; // e.g. "per cycle"
  features: string[];
  highlighted?: boolean;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    slug: "essential",
    name: "Essential",
    blurb: "Managed applications and a tailored resume to get moving.",
    priceFrom: "$199",
    billing: "per cycle",
    features: [
      "Managed applications (up to your cycle cap)",
      "Resume tailoring",
      "Follow-ups",
      "Weekly report",
      "Dedicated operator + QA",
    ],
  },
  {
    slug: "professional",
    name: "Professional",
    blurb: "Higher volume, plus profile and interview prep.",
    priceFrom: "$299",
    billing: "per cycle",
    features: [
      "Everything in Essential, at higher volume",
      "LinkedIn optimization",
      "2 mock interviews",
    ],
    highlighted: true,
  },
  {
    slug: "premium",
    name: "Premium",
    blurb: "Our most hands-on tier, with coaching and priority support.",
    priceFrom: "$399",
    billing: "per cycle",
    features: [
      "Everything in Professional",
      "AI-assisted resume / JD matching",
      "Interview coaching",
      "Priority handling",
    ],
  },
];

// Feature × tier matrix for the comparison table.
// Cell value: true = included, false = not included, string = tier-specific detail.
export interface ComparisonRow {
  feature: string;
  tiers: [boolean | string, boolean | string, boolean | string];
}

export const COMPARISON: ComparisonRow[] = [
  { feature: "Managed applications", tiers: ["Up to cap", "Higher volume", "Higher volume"] },
  { feature: "Resume tailoring", tiers: [true, true, true] },
  { feature: "Follow-ups", tiers: [true, true, true] },
  { feature: "Weekly report", tiers: [true, true, true] },
  { feature: "Dedicated operator + QA", tiers: [true, true, true] },
  { feature: "LinkedIn optimization", tiers: [false, true, true] },
  { feature: "Mock interviews", tiers: [false, "2 sessions", "Included"] },
  { feature: "AI-assisted resume / JD matching", tiers: [false, false, true] },
  { feature: "Interview coaching", tiers: [false, false, true] },
  { feature: "Priority handling", tiers: [false, false, true] },
];

export interface AddOn {
  name: string;
  price: string;
}

export const ADD_ONS: AddOn[] = [
  { name: "Standalone mock interview session", price: "On request" },
  { name: "Resume / LinkedIn rewrite (one-off)", price: "On request" },
  { name: "AI-assisted resume / JD matching", price: "$49" },
];

// Secondary: business & IT work is scoped per engagement.
export const BUSINESS_PRICING = {
  heading: "Business & IT services",
  blurb:
    "Websites, digital marketing, and operational support are scoped to your needs — project-based or as a monthly retainer. Request a quote and we'll tailor it.",
};

export interface PricingFaq {
  q: string;
  a: string;
}

export const PRICING_FAQ: PricingFaq[] = [
  {
    q: "How is pricing structured?",
    a: "Career Services is priced per application cycle. You pick a tier, we confirm the scope, and you're billed per cycle — no long lock-in.",
  },
  {
    q: "How many applications does a cycle include?",
    a: "Each tier covers a set number of managed applications per cycle. We confirm the exact cap with you before we start so expectations are clear.",
  },
  {
    q: "Can I add services to a plan?",
    a: "Yes. Add-ons like a standalone mock interview, a one-off resume/LinkedIn rewrite, or AI-assisted matching can be added to any tier.",
  },
  {
    q: "Do you work with businesses too?",
    a: "Yes. Business & IT work — websites, digital marketing, and operational support — is scoped per project or as a monthly retainer. Request a quote and we'll tailor it.",
  },
  {
    q: "How do I get started?",
    a: "Book a free consultation. We'll recommend the right tier and confirm scope before any commitment.",
  },
];
