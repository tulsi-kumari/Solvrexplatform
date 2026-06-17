// Pricing tiers for Career Services — single source of truth (homepage preview +
// /pricing page + Pricing mega-menu all read from here).
//
// NOTE: `priceFrom` values are PLACEHOLDERS. Replace with real amounts + billing.
export const PRICING_IS_PLACEHOLDER = true;

export interface PricingTier {
  slug: string;
  name: string;
  blurb: string;
  priceFrom: string; // e.g. "₹9,999" — placeholder until real prices provided
  billing: string; // e.g. "per month" / "per engagement"
  features: string[];
  highlighted?: boolean;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    slug: "essential",
    name: "Essential",
    blurb: "Managed applications and a tailored resume to get moving.",
    priceFrom: "₹—",
    billing: "per month",
    features: ["Managed applications", "Resume tailoring", "Follow-ups", "Weekly report"],
  },
  {
    slug: "professional",
    name: "Professional",
    blurb: "Everything in Essential, plus profile and interview prep.",
    priceFrom: "₹—",
    billing: "per month",
    features: ["Everything in Essential", "LinkedIn optimization", "2 mock interviews"],
    highlighted: true,
  },
  {
    slug: "premium",
    name: "Premium",
    blurb: "Our most hands-on tier, with coaching and priority support.",
    priceFrom: "₹—",
    billing: "per month",
    features: [
      "Everything in Professional",
      "AI-assisted matching",
      "Interview coaching",
      "Priority handling",
    ],
  },
];
