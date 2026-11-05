// JSON-LD helpers for the hierarchical location pages. Kept apart from
// lib/schema.ts so the shared graph helpers stay untouched.
import { SITE } from "./site";
import { baseGraph, breadcrumbNode, faqPageNode, webPageNode } from "./schema";

type AreaServed = Array<Record<string, unknown>>;

export function locationServiceNode(input: {
  url: string;
  name: string;
  description: string;
  serviceType: string;
  areaServed: AreaServed;
  type?: "Service" | "ProfessionalService";
}) {
  const url = `${SITE}${input.url}`;
  return {
    "@type": input.type ?? "ProfessionalService",
    "@id": `${url}#service`,
    name: input.name,
    description: input.description,
    serviceType: input.serviceType,
    url,
    provider: { "@id": `${SITE}/#organization` },
    areaServed: input.areaServed,
  };
}

export function locationCityGraph(input: {
  pathname: string;
  title: string;
  description: string;
  h1: string;
  serviceType: string;
  breadcrumbs: Array<{ name: string; href?: string }>;
  areaServed: AreaServed;
  faqs: Array<{ q: string; a: string }>;
}) {
  return [
    ...baseGraph(),
    webPageNode({ url: input.pathname, name: input.title, description: input.description }),
    breadcrumbNode(input.breadcrumbs, input.pathname),
    locationServiceNode({
      url: input.pathname,
      name: input.h1,
      description: input.description,
      serviceType: input.serviceType,
      areaServed: input.areaServed,
      type: "ProfessionalService",
    }),
    ...(input.faqs.length > 0 ? [faqPageNode(input.pathname, input.faqs)] : []),
  ];
}

export function locationHubGraph(input: {
  pathname: string;
  title: string;
  description: string;
  serviceType: string;
  breadcrumbs: Array<{ name: string; href?: string }>;
  areaServed: AreaServed;
}) {
  return [
    ...baseGraph(),
    webPageNode({
      url: input.pathname,
      name: input.title,
      description: input.description,
      type: "CollectionPage",
    }),
    breadcrumbNode(input.breadcrumbs, input.pathname),
    locationServiceNode({
      url: input.pathname,
      name: input.title,
      description: input.description,
      serviceType: input.serviceType,
      areaServed: input.areaServed,
      type: "Service",
    }),
  ];
}
