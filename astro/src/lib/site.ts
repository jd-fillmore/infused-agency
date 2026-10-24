import siteFactsJson from "../../../data/site/site-facts.json";
import servicesJson from "../../../data/services/services.json";
import navJson from "../../../src/generated/services-nav.json";
import { RETIRED_ROUTE_PATHS } from "./retired-routes.mjs";
import { homeFaqs as astroHomeFaqs } from "./home-faqs";

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

const retiredRouteSet = new Set(RETIRED_ROUTE_PATHS);
const isLiveService = (service: Service) => !retiredRouteSet.has(service.url);

export const siteFacts = siteFactsJson as SiteFacts;
export const services = (servicesJson as Service[]).filter(isLiveService);
export const navGroups = (navJson as { groups: NavGroup[] }).groups.map(
  (group) => ({
    ...group,
    links: group.links.filter((link) => !retiredRouteSet.has(link.url)),
  })
);
export const industries = (navJson as { industries: NavLink[] }).industries;

// Homepage FAQ copy lives in the Astro project so the legacy Next.js pages are
// not modified. It is the single source for both visible copy and FAQPage JSON-LD.
export const homeFaqs: Faq[] = astroHomeFaqs;

export function absoluteUrl(pathname: string): string {
  if (pathname === "/") return SITE;
  const clean = pathname.replace(/\/+$/, "");
  return `${SITE}${clean.startsWith("/") ? clean : `/${clean}`}`;
}

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
