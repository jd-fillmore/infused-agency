import { createRequire } from "node:module";

import siteFactsJson from "../../../data/site/site-facts.json";
import servicesJson from "../../../data/services/services.json";
import navJson from "../../../src/generated/services-nav.json";

export const SITE = "https://infused.agency";
export const SITE_NAME = "Infused Agency";
export const CALENDLY_URL = "https://calendly.com/infused-agency/project-discovery/";

export interface SiteFacts {
  clientsHelped: string | null;
  resultsClaim: string | null;
  results: Array<{
    id: string;
    namedEntity: string;
    metric: string;
    metricLabel: string;
    context: string;
    source: string;
  }>;
  testimonials: Array<{
    id: string;
    namedEntity: string;
    person: string;
    role: string;
    quote: string;
    source: string;
  }>;
  clientLogosAllowed: string[];
  googleReviews: { count: number | null; rating: number | null; url: string | null };
  yearsInBusiness: number | null;
  teamSize: number | null;
  responseTime: string | null;
  pricingModel: string | null;
  contractTerms: string | null;
  guarantees: string | null;
  address: { addressLocality: string; addressRegion: string; addressCountry: string };
  phone: string;
  email: string;
  hours: string[];
  socialProfiles: Array<{ platform: string; url: string }>;
  serviceArea: string[];
}

export interface Service {
  slug: string;
  url: string;
  name: string;
  shortName: string;
  group: string;
  parentUrl: string | null;
  status: string;
  existing: boolean;
  summary: string;
  relatedServices: string[];
  relevantVerticals: string[];
  proofRefs: string[];
  titleOverride: string | null;
}

export interface NavLink {
  name: string;
  url: string;
}

export interface NavGroup {
  heading: string;
  links: NavLink[];
}

export interface Faq {
  q: string;
  a: string;
}

export const siteFacts = siteFactsJson as SiteFacts;
export const services = servicesJson as Service[];
export const navGroups = (navJson as { groups: NavGroup[] }).groups;
export const industries = (navJson as { industries: NavLink[] }).industries;

// The homepage FAQ module is CommonJS and already the single source of truth for
// both visible copy and FAQPage JSON-LD; load it at build time rather than
// duplicating the content.
const require = createRequire(import.meta.url);
export const homeFaqs = (
  require("../../../src/lib/homeFaqs.js") as { HOME_FAQS: Faq[] }
).HOME_FAQS;

export function absoluteUrl(pathname: string): string {
  if (pathname === "/") return SITE;
  const clean = pathname.replace(/\/+$/, "");
  return `${SITE}${clean.startsWith("/") ? clean : `/${clean}`}`;
}

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
