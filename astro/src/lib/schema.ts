import { SITE, SITE_NAME, siteFacts, type Faq } from "./site";

type JsonLdNode = Record<string, unknown>;

const ORGANIZATION_ID = `${SITE}/#organization`;
const WEBSITE_ID = `${SITE}/#website`;

export function organizationNode(): JsonLdNode {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    url: SITE,
    telephone: siteFacts.phone,
    email: siteFacts.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteFacts.address.addressLocality,
      addressRegion: siteFacts.address.addressRegion,
      addressCountry: siteFacts.address.addressCountry,
    },
    areaServed: siteFacts.serviceArea.map((city) => ({
      "@type": "City",
      name: city,
    })),
    sameAs: siteFacts.socialProfiles.map((profile) => profile.url),
  };
}

export function websiteNode(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE,
    name: SITE_NAME,
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "en-CA",
  };
}

export function webPageNode(input: {
  url: string;
  name: string;
  description: string;
  type?: "WebPage" | "CollectionPage" | "ContactPage" | "AboutPage";
}): JsonLdNode {
  const url = input.url === "/" ? SITE : `${SITE}${input.url}`;
  return {
    "@type": input.type ?? "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: input.name,
    description: input.description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
    inLanguage: "en-CA",
  };
}

export function breadcrumbNode(
  items: Array<{ name: string; href?: string }>,
  pageUrl: string
): JsonLdNode {
  const url = pageUrl === "/" ? SITE : `${SITE}${pageUrl}`;
  return {
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.href
        ? { item: item.href === "/" ? SITE : `${SITE}${item.href}` }
        : {}),
    })),
  };
}

export function serviceNode(input: {
  url: string;
  name: string;
  description: string;
  serviceType?: string;
}): JsonLdNode {
  const url = `${SITE}${input.url}`;
  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name: input.name,
    description: input.description,
    serviceType: input.serviceType ?? input.name,
    url,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: siteFacts.serviceArea.map((city) => ({
      "@type": "City",
      name: city,
    })),
  };
}

export function faqPageNode(pageUrl: string, faqs: Faq[]): JsonLdNode {
  const url = pageUrl === "/" ? SITE : `${SITE}${pageUrl}`;
  return {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function blogPostingNode(input: {
  url: string;
  headline: string;
  description: string;
  datePublished: string;
  image?: string;
}): JsonLdNode {
  const url = `${SITE}${input.url}`;
  return {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: input.headline,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.datePublished,
    mainEntityOfPage: url,
    ...(input.image ? { image: `${SITE}${input.image}` } : {}),
    author: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "en-CA",
  };
}

export function baseGraph(): JsonLdNode[] {
  return [organizationNode(), websiteNode()];
}
