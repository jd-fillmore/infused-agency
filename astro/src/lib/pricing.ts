// Shared pricing data for the SEO and AI search offers.
//
// The /seo page and every page that reuses the pricing plans import from here
// so the tiers, prices and payment terms stay identical everywhere. Pages that
// are not the main /seo page deliberately omit the delivery guarantee: those
// pages carry their own "we do not guarantee rankings" FAQ copy and the two
// would contradict each other.

export interface PricingPlan {
  name: string;
  /** Monthly installment amount (the only, most prominent price). */
  monthly: number;
  /** Optional lead-in above the feature list, e.g. "Everything in Starter, plus:" */
  lead?: string;
  features: string[];
  featured?: boolean;
  badge?: string;
}

export interface PricingBlock {
  heading: string;
  description: string;
  note?: string;
  guarantee?: { title: string; body: string };
  plans: PricingPlan[];
  ctaLabel?: string;
}

const paymentNote =
  "No need to pay the entire project cost upfront. Your first and final monthly payments are collected at signup, followed by 10 monthly installments. The monthly amount is a payment installment toward your project — not an ongoing monthly SEO retainer.";

const seoPlans: PricingPlan[] = [
  {
    name: "Starter",
    monthly: 329.99,
    features: [
      "Comprehensive SEO and AI search strategy",
      "Keyword research and opportunity analysis",
      "Website content and on-page SEO optimization",
      "Technical SEO review and recommendations",
      "Content improvements targeting relevant search opportunities",
      "Off-page SEO and backlink building",
      "Performance tracking and reporting",
    ],
  },
  {
    name: "Professional",
    monthly: 379.99,
    featured: true,
    badge: "Most Popular",
    lead: "Everything in Starter, plus:",
    features: [
      "Expanded keyword and content optimization",
      "Google Business Profile optimization",
      "Broader local and organic search strategy",
      "Additional authority-building opportunities",
    ],
  },
  {
    name: "Premium",
    monthly: 429.99,
    lead: "Everything in Professional, plus:",
    features: [
      "More extensive content and keyword strategy",
      "Expanded website optimization",
      "Additional off-page SEO and backlink opportunities",
      "Broader search visibility strategy",
    ],
  },
];

/** Full SEO pricing block, including the delivery guarantee. Used on /seo. */
export const seoPricing: PricingBlock = {
  heading: "Flexible SEO Pricing. Meaningful Results.",
  description:
    "Get a comprehensive SEO and AI search strategy implemented within 3 months, with the investment conveniently spread across 12 monthly payments.",
  note: paymentNote,
  guarantee: {
    title: "Page 1 in 30 days — or your money back",
    body:
      "If your website isn't ranking on page 1 of Google for at least one relevant keyword phrase within the first month, we'll refund the payments you've made and cancel the remaining installments. Keyword phrases are agreed with you before work begins — no hoops, no fine print.",
  },
  plans: seoPlans,
};

/**
 * SEO pricing without the guarantee banner. Used on the homepage, city pages
 * and industry pages whose own FAQ copy states that rankings are not
 * guaranteed.
 */
export const seoPricingPlans: PricingBlock = {
  ...seoPricing,
  guarantee: undefined,
};

const aiSearchPlans: PricingPlan[] = [
  {
    name: "Starter",
    monthly: 329.99,
    features: [
      "AI search visibility strategy (AI SEO, GEO and AEO)",
      "Entity and brand consistency audit across your site and profiles",
      "Answer-ready content optimization for AI Overviews and assistants",
      "Structured data and technical review for machine-readable facts",
      "Content improvements targeting the questions buyers ask AI tools",
      "Citation and mention building across trusted sources",
      "AI visibility tracking and reporting",
    ],
  },
  {
    name: "Professional",
    monthly: 379.99,
    featured: true,
    badge: "Most Popular",
    lead: "Everything in Starter, plus:",
    features: [
      "Expanded answer engine optimization (AEO)",
      "AI-ready Google Business Profile and entity details",
      "Broader generative engine optimization (GEO)",
      "Additional authority and citation opportunities",
    ],
  },
  {
    name: "Premium",
    monthly: 429.99,
    lead: "Everything in Professional, plus:",
    features: [
      "More extensive answer-ready content and entity strategy",
      "Expanded website and structured data optimization",
      "Additional citation, mention and authority opportunities",
      "Broader AI answer visibility strategy",
    ],
  },
];

/** AI search pricing block. Used on /ai-search. */
export const aiSearchPricing: PricingBlock = {
  heading: "AI Search Pricing Built Around Answers",
  description:
    "Get a complete AI search optimization program — AI SEO, GEO and AEO — implemented within 3 months, with the investment conveniently spread across 12 monthly payments.",
  note: paymentNote,
  guarantee: {
    title: "Page 1 in 30 days — or your money back",
    body:
      "AI answers are built on strong search foundations. If your website isn't ranking on page 1 of Google for at least one relevant keyword phrase within the first month, we'll refund the payments you've made and cancel the remaining installments. Keyword phrases are agreed with you before work begins — no hoops, no fine print.",
  },
  plans: aiSearchPlans,
};

/**
 * AI search pricing without the guarantee banner. Used on city AI SEO pages
 * whose own FAQ copy states that rankings, citations and AI recommendations
 * are not guaranteed.
 */
export const aiSearchPricingPlans: PricingBlock = {
  ...aiSearchPricing,
  guarantee: undefined,
};
