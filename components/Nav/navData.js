import snapshot from "../../src/generated/services-nav.json";

export const GROUPS = snapshot.groups || [];
export const INDUSTRIES = snapshot.industries || [];

// Short, neutral one-line descriptions in our own words (no competitor copy).
export const DESCRIPTIONS = {
  "/seo": "Search engine optimization strategy and execution.",
  "/ai-search": "Show up in ChatGPT, Gemini and AI Overviews.",
  "/seo/content-writing": "Content that ranks and converts.",
  "/seo/franchise-seo": "Local SEO across every franchise location.",
  "/seo/link-building": "Earn authority with quality backlinks.",
  "/seo/local-seo": "Own the local pack and Maps results.",
  "/seo/technical-seo": "Fix the technical issues holding rankings back.",
  "/seo/white-label": "SEO delivered under your agency's brand.",
  "/web-design": "Fast, lead-generating websites.",
  "/web-design/ecommerce-web-design": "Online stores built to sell.",
  "/web-design/shopify-web-design": "Shopify storefronts designed for growth.",
  "/web-design/website-hosting": "Fast, secure managed hosting.",
  "/ecommerce-marketing": "Marketing built for online stores.",
  "/ecommerce-marketing/ecommerce-optimization": "Improve conversion across the funnel.",
  "/ecommerce-marketing/ecommerce-ppc": "Paid campaigns that pay for themselves.",
  "/ecommerce-marketing/ecommerce-seo": "Organic traffic for product pages.",
  "/ecommerce-marketing/shopify-seo": "Rank Shopify collections and products.",
  "/digital-marketing": "Full-funnel digital marketing.",
  "/digital-marketing/conversion-rate-optimization": "Turn more visitors into leads.",
  "/reputation-management": "Manage and grow your online reputation.",
  "/reputation-management/online-reputation-repair": "Repair and rebuild a damaged reputation.",
};
