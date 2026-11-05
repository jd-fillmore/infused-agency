import { SITE, SITE_NAME, siteFacts, type Faq } from "./site";

type JsonLdNode = Record<string, unknown>;

const ORGANIZATION_ID = `${SITE}/#organization`;
const WEBSITE_ID = `${SITE}/#website`;
const AUTHOR_ID = `${SITE}/about#jd-fillmore`;

export function organizationNode(): JsonLdNode {
  return {
    // ProfessionalService is a LocalBusiness subtype; keep Organization too so
    // existing Organization references remain valid.
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    url: SITE,
    logo: `${SITE}/icon-512.png`,
    image: `${SITE}/icon-512.png`,
    telephone: siteFacts.phone,
    email: siteFacts.email,
    // TODO: add streetAddress here if the business decides to publish one.
    address: {
      "@type": "PostalAddress",
      addressLocality: siteFacts.address.addressLocality,
      addressRegion: siteFacts.address.addressRegion,
      addressCountry: siteFacts.address.addressCountry,
    },
    areaServed: [
      ...siteFacts.serviceArea.map((city) => ({
        "@type": "City",
        name: city,
      })),
      { "@type": "AdministrativeArea", name: "Niagara Region" },
    ],
    sameAs: siteFacts.socialProfiles.map((profile) => profile.url),
  };
}

export function authorNode(): JsonLdNode {
  return {
    "@type": "Person",
    "@id": AUTHOR_ID,
    // TODO: confirm the public byline name ("Jarryd" vs "JD Fillmore") before
    // publishing this schema beyond the existing site identity.
    name: "JD Fillmore",
    jobTitle: "Founder & Owner",
    description:
      "JD leads strategy, design and delivery at Infused Agency, with hands-on experience in local SEO and conversion-focused web design.",
    worksFor: { "@id": ORGANIZATION_ID },
    url: `${SITE}/about`,
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
  areaServed?: Array<Record<string, unknown>>;
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
    areaServed:
      input.areaServed ??
      siteFacts.serviceArea.map((city) => ({
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
    author: { "@id": AUTHOR_ID },
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "en-CA",
  };
}

export function baseGraph(): JsonLdNode[] {
  return [organizationNode(), websiteNode()];
}
