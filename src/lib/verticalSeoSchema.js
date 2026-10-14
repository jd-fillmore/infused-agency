// Pure JSON-LD builders for the whole site. No fs, safe to import in pages and
// in the standalone verification / validation scripts.
//
// One entity, one id: the Organization/ProfessionalService node below is the
// single source of truth for Infused Agency. Every other node references it by
// `@id`, and every page that references it also defines it in the same @graph
// (scripts/validate-schema.js enforces both). Only details that are real and
// visible on the site are used: the footer address/phone/hours, the service
// area city list, and the sameAs links the site already declared.
const SITE = "https://infused.agency";

const ORG_ID = `${SITE}/#organization`;
const WEBSITE_ID = `${SITE}/#website`;
const LOGO_ID = `${SITE}/#logo`;
const LOGO_URL = `${SITE}/img/infused-logo.png`;

const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "73 Alexandra Blvd",
  addressLocality: "St. Catharines",
  addressRegion: "ON",
  postalCode: "L2P 1K2",
  addressCountry: "CA",
};

const GEO = {
  "@type": "GeoCoordinates",
  latitude: "43.197109",
  longitude: "-79.243362",
};

// The service area as listed in the site footer.
const AREA_CITIES = [
  "St. Catharines",
  "Niagara Falls",
  "Niagara-on-the-Lake",
  "Welland",
  "Fort Erie",
  "Beamsville",
  "Grimsby",
  "Thorold",
  "Port Colborne",
  "Fonthill",
  "Crystal Beach",
];

// Only the sameAs links already present on the existing site.
const SAME_AS = [
  "https://www.facebook.com/infused.agency",
  "https://twitter.com/InfusedAgency",
  "https://linkedin.com/company/infused-agency",
  "https://instagram.com/infusedagency",
  "https://www.mapquest.com/ca/ontario/infused-agency-456469990",
  "https://www.yellowpages.ca/bus/Ontario/St-Catharines/Infused-Agency/101902875.html",
  "https://gncc.ca/members-and-benefits/member-directory/#/action/Listing/value/41026/cid/1185/id/1002901/Infused-Agency",
  "https://www.goodfirms.co/company/infused-agency",
  "https://www.pagesjaunes.ca/bus/Ontario/St-Catharines/Infused-Agency/101902875.html",
  "https://about.me/infused0",
  "https://www.zoominfo.com/c/infused-agency/447274660",
  "https://www.hotfrog.ca/company/9a5d8745ba57d4499b16df3d144dae56/infused-agency/st-catharines/web-design",
  "https://www.localhomeservicepros.com/ontario/st-catharines/website-design/infused-agency",
  "https://www.getlisteduae.com/listings/infused-agency",
  "https://www.canadianplanet.net/infused-agency-niagara-F1109C6001ED043",
];

function absolute(url) {
  if (!url) return url;
  return url.startsWith("http") ? url : `${SITE}${url}`;
}

// The single Organization/ProfessionalService node.
function organizationNode() {
  return {
    "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
    "@id": ORG_ID,
    name: "Infused Agency",
    url: SITE,
    email: "info@infused.agency",
    telephone: "+1-905-933-3115",
    priceRange: "$$",
    sameAs: [...SAME_AS],
    address: { ...ADDRESS },
    geo: { ...GEO },
    hasMap: "https://maps.app.goo.gl/efsLRm9sTqUN7HhG7",
    logo: {
      "@type": "ImageObject",
      "@id": LOGO_ID,
      url: LOGO_URL,
      contentUrl: LOGO_URL,
      caption: "Infused Agency",
    },
    image: { "@id": LOGO_ID },
    // Hours exactly as shown in the site footer (Mon-Fri 9am-6pm, weekends
    // closed). The old homepage markup claimed different hours.
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: [
      { "@type": "AdministrativeArea", name: "Niagara Region, Ontario" },
      ...AREA_CITIES.map((name) => ({ "@type": "City", name })),
      { "@type": "Country", name: "Canada" },
    ],
    knowsAbout: [
      "Search engine optimization",
      "Local SEO",
      "AI search optimization",
      "Web design",
      "Digital marketing",
    ],
  };
}

function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE,
    name: "Infused Agency",
    alternateName: "Infused",
    publisher: { "@id": ORG_ID },
    inLanguage: "en-CA",
  };
}

function breadcrumbList(breadcrumbs) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absolute(c.href),
    })),
  };
}

function webPageNode(opts) {
  const url = absolute(opts.url);
  const node = {
    "@type": opts.pageType || "WebPage",
    "@id": opts.id || url,
    url,
    name: opts.name,
    about: { "@id": opts.about || ORG_ID },
    inLanguage: "en-CA",
  };
  if (opts.description) node.description = opts.description;
  if (opts.datePublished) node.datePublished = opts.datePublished;
  if (opts.dateModified) node.dateModified = opts.dateModified;
  if (opts.primaryImage) node.primaryImageOfPage = { "@id": opts.primaryImage };
  // Only the homepage also defines the WebSite node, so only it may reference
  // it; other pages leave isPartOf out to avoid an unresolved @id.
  if (opts.isPartOf) node.isPartOf = { "@id": opts.isPartOf };
  return node;
}

function blogPostingNode(opts) {
  const url = absolute(opts.url);
  const node = {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: opts.headline,
    mainEntityOfPage: url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified || opts.datePublished,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    inLanguage: "en-CA",
  };
  if (opts.description) node.description = opts.description;
  if (opts.image) node.image = absolute(opts.image);
  return node;
}

function serviceNode({ name, serviceType, url, areaServed }) {
  return {
    "@type": "Service",
    name,
    serviceType,
    provider: { "@id": ORG_ID },
    areaServed: areaServed || [
      { "@type": "AdministrativeArea", name: "Niagara Region" },
      { "@type": "Country", name: "Canada" },
    ],
    url: absolute(url),
  };
}

function areaServedFor(page) {
  if (page.kind === "pillar") return { "@type": "Country", name: "Canada" };
  if (page.kind === "country")
    return { "@type": "Country", name: "United States" };
  if (page.kind === "province")
    return { "@type": "AdministrativeArea", name: page.province.name };
  return { "@type": "City", name: page.city.name };
}

function serviceSchema(page) {
  return serviceNode({
    name: `${page.headingSingular} SEO`,
    serviceType: "Search engine optimization",
    url: page.canonical,
    areaServed: areaServedFor(page),
  });
}

function faqPageNode(faqs, id) {
  if (!faqs || !faqs.length) return null;
  const node = {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q || f.name,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a || (f.acceptedAnswer && f.acceptedAnswer.text),
      },
    })),
  };
  if (id) node["@id"] = id;
  return node;
}

// Kept for backwards compatibility with existing callers/tests.
function faqSchema(faqs) {
  return faqPageNode(faqs);
}

function graph(nodes) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.filter(Boolean),
  };
}

// ----- page-type graph builders -----

// Vertical x geo pages (pillar / province / city / usa).
function buildGraph(page) {
  return graph([
    organizationNode(),
    breadcrumbList(page.breadcrumbs),
    serviceSchema(page),
    faqPageNode(page.faqs, `${page.canonical}#faq`),
  ]);
}

// Service pages: BreadcrumbList + Service + FAQPage.
function servicePageGraph({ breadcrumbs, name, serviceType, url, faqs }) {
  const target = absolute(url);
  return graph([
    organizationNode(),
    breadcrumbList(breadcrumbs),
    serviceNode({
      name,
      serviceType,
      url: target,
      areaServed: [
        { "@type": "AdministrativeArea", name: "Niagara Region" },
        { "@type": "Country", name: "Canada" },
      ],
    }),
    faqPageNode(faqs, `${target}#faq`),
  ]);
}

// Homepage: Organization/ProfessionalService + WebSite + WebPage + FAQPage.
function homeGraph({ faqs } = {}) {
  return graph([
    organizationNode(),
    websiteNode(),
    webPageNode({
      url: `${SITE}/`,
      id: `${SITE}/#webpage`,
      name: "SEO Niagara | Grow Traffic & Local Leads",
      primaryImage: LOGO_ID,
      isPartOf: WEBSITE_ID,
      datePublished: "2023-01-01T09:00:00+00:00",
      dateModified: "2025-08-27T10:00:00+00:00",
    }),
    faqPageNode(faqs, `${SITE}/#faq`),
  ]);
}

// Niagara city pages (/seo/{city}): Service + BreadcrumbList (FAQPage is emitted
// by each page alongside this).
function localCityGraph({ city, region, url, serviceName }) {
  return graph([
    organizationNode(),
    breadcrumbList([
      { name: "Home", href: "/" },
      { name: "SEO", href: "/seo" },
      { name: `${city} SEO`, href: url },
    ]),
    serviceNode({
      name: serviceName || `${city} SEO`,
      serviceType: "Search engine optimization",
      url,
      areaServed: [
        { "@type": "City", name: city },
        ...(region ? [{ "@type": "AdministrativeArea", name: region }] : []),
        { "@type": "Country", name: "Canada" },
      ],
    }),
  ]);
}

// Bespoke Niagara industry pages (/seo/for-*-niagara): Organization +
// BreadcrumbList + Service + FAQPage, with the service area anchored to the
// Niagara region and its cities.
function industryGraph({ url, name, serviceName, description, faqs, breadcrumbs }) {
  const target = absolute(url);
  return graph([
    organizationNode(),
    breadcrumbList(
      breadcrumbs || [
        { name: "Home", href: "/" },
        { name: "SEO", href: "/seo" },
        { name: serviceName || name, href: url },
      ]
    ),
    serviceNode({
      name: serviceName || name,
      serviceType: "Search engine optimization",
      url: target,
      areaServed: [
        { "@type": "AdministrativeArea", name: "Niagara Region, Ontario" },
        ...AREA_CITIES.map((cityName) => ({ "@type": "City", name: cityName })),
        { "@type": "Country", name: "Canada" },
      ],
    }),
    faqPageNode(faqs, `${target}#faq`),
  ]);
}

function aboutPageGraph({ url, name, description }) {
  const target = absolute(url);
  return graph([
    organizationNode(),
    breadcrumbList([
      { name: "Home", href: "/" },
      { name: "About", href: url },
    ]),
    webPageNode({
      url: target,
      pageType: "AboutPage",
      name,
      description,
    }),
  ]);
}

function contactPageGraph({ url, name, description }) {
  const target = absolute(url);
  return graph([
    organizationNode(),
    breadcrumbList([
      { name: "Home", href: "/" },
      { name: "Get a Quote", href: url },
    ]),
    webPageNode({
      url: target,
      pageType: "ContactPage",
      name,
      description,
    }),
  ]);
}

function webPageGraph({ url, name, pageType, description, breadcrumbs }) {
  const target = absolute(url);
  return graph([
    organizationNode(),
    breadcrumbs ? breadcrumbList(breadcrumbs) : null,
    webPageNode({ url: target, pageType, name, description }),
  ]);
}

// ItemList of live industry pillars for the /industries hub.
function itemListNode(items) {
  if (!items || !items.length) return null;
  return {
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: absolute(item.url),
    })),
  };
}

// Industries hub: Organization + BreadcrumbList + CollectionPage + ItemList.
function industriesGraph({ url, name, description, breadcrumbs, items }) {
  const target = absolute(url);
  return graph([
    organizationNode(),
    breadcrumbs ? breadcrumbList(breadcrumbs) : null,
    webPageNode({ url: target, pageType: "CollectionPage", name, description }),
    itemListNode(items),
  ]);
}

function blogGraph({
  url,
  headline,
  description,
  datePublished,
  dateModified,
  image,
}) {
  const target = absolute(url);
  return graph([
    organizationNode(),
    blogPostingNode({
      url: target,
      headline,
      description,
      datePublished,
      dateModified,
      image,
    }),
  ]);
}

module.exports = {
  SITE,
  ORG_ID,
  WEBSITE_ID,
  LOGO_ID,
  LOGO_URL,
  organizationNode,
  websiteNode,
  breadcrumbList,
  webPageNode,
  blogPostingNode,
  serviceNode,
  serviceSchema,
  faqPageNode,
  faqSchema,
  graph,
  buildGraph,
  servicePageGraph,
  homeGraph,
  localCityGraph,
  industryGraph,
  aboutPageGraph,
  contactPageGraph,
  webPageGraph,
  industriesGraph,
  itemListNode,
  blogGraph,
};
