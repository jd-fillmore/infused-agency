// Shared data + helpers for the Canada-wide niche SEO pages:
//   /seo/for-<niche>          (hub)
//   /seo/for-<niche>/<city>   (city pages)
// Copy lives in src/content/canada-niche/<niche>/ (hub.js + cities/<slug>.js).
// This module owns only structure: provinces, cities, nearby sets, URL
// builders, breadcrumbs and JSON-LD graph composition.
const {
  organizationNode,
  breadcrumbList,
  serviceNode,
  faqPageNode,
  graph,
} = require("./verticalSeoSchema");

const SITE = "https://infused.agency";

const PROVINCES = [
  { slug: "ontario", name: "Ontario", abbr: "ON" },
  { slug: "quebec", name: "Quebec", abbr: "QC" },
  { slug: "british-columbia", name: "British Columbia", abbr: "BC" },
  { slug: "alberta", name: "Alberta", abbr: "AB" },
  { slug: "manitoba", name: "Manitoba", abbr: "MB" },
  { slug: "saskatchewan", name: "Saskatchewan", abbr: "SK" },
  { slug: "new-brunswick", name: "New Brunswick", abbr: "NB" },
  { slug: "nova-scotia", name: "Nova Scotia", abbr: "NS" },
  {
    slug: "newfoundland-and-labrador",
    name: "Newfoundland and Labrador",
    abbr: "NL",
  },
  { slug: "prince-edward-island", name: "Prince Edward Island", abbr: "PE" },
];

// Slugs for names that collide with another Canadian city get a lowercase
// province code; everything else stays plain. `nearby` only ever points at
// cities in this list. Niagara Region cities are excluded — they live on
// /seo/for-concrete-contractors-niagara.
const CITIES = [
  {
    slug: "toronto",
    name: "Toronto",
    province: "ontario",
    nearby: ["mississauga", "hamilton", "kitchener"],
  },
  {
    slug: "mississauga",
    name: "Mississauga",
    province: "ontario",
    nearby: ["toronto", "hamilton", "kitchener"],
  },
  {
    slug: "ottawa",
    name: "Ottawa",
    province: "ontario",
    nearby: ["gatineau", "kingston-on", "montreal"],
  },
  {
    slug: "hamilton",
    name: "Hamilton",
    province: "ontario",
    nearby: ["toronto", "mississauga", "kitchener", "london-on"],
  },
  {
    slug: "kitchener",
    name: "Kitchener",
    province: "ontario",
    nearby: ["hamilton", "london-on", "toronto", "mississauga"],
  },
  {
    slug: "london-on",
    name: "London",
    province: "ontario",
    nearby: ["kitchener", "windsor-on", "hamilton", "toronto"],
  },
  {
    slug: "windsor-on",
    name: "Windsor",
    province: "ontario",
    nearby: ["london-on", "kitchener", "hamilton"],
  },
  {
    slug: "kingston-on",
    name: "Kingston",
    province: "ontario",
    nearby: ["ottawa", "montreal", "toronto"],
  },
  {
    slug: "montreal",
    name: "Montreal",
    province: "quebec",
    nearby: ["quebec-city", "laval", "gatineau", "ottawa"],
  },
  {
    slug: "quebec-city",
    name: "Quebec City",
    province: "quebec",
    nearby: ["montreal", "laval", "gatineau"],
  },
  {
    slug: "laval",
    name: "Laval",
    province: "quebec",
    nearby: ["montreal", "quebec-city", "gatineau"],
  },
  {
    slug: "gatineau",
    name: "Gatineau",
    province: "quebec",
    nearby: ["ottawa", "montreal", "laval", "quebec-city"],
  },
  {
    slug: "vancouver",
    name: "Vancouver",
    province: "british-columbia",
    nearby: ["surrey", "burnaby", "richmond-bc", "victoria-bc"],
  },
  {
    slug: "surrey",
    name: "Surrey",
    province: "british-columbia",
    nearby: ["vancouver", "burnaby", "richmond-bc", "victoria-bc"],
  },
  {
    slug: "burnaby",
    name: "Burnaby",
    province: "british-columbia",
    nearby: ["vancouver", "surrey", "richmond-bc"],
  },
  {
    slug: "victoria-bc",
    name: "Victoria",
    province: "british-columbia",
    nearby: ["vancouver", "surrey", "burnaby", "richmond-bc"],
  },
  {
    slug: "richmond-bc",
    name: "Richmond",
    province: "british-columbia",
    nearby: ["vancouver", "burnaby", "surrey"],
  },
  {
    slug: "calgary",
    name: "Calgary",
    province: "alberta",
    nearby: ["edmonton", "red-deer", "lethbridge"],
  },
  {
    slug: "edmonton",
    name: "Edmonton",
    province: "alberta",
    nearby: ["red-deer", "calgary", "lethbridge"],
  },
  {
    slug: "red-deer",
    name: "Red Deer",
    province: "alberta",
    nearby: ["edmonton", "calgary", "lethbridge"],
  },
  {
    slug: "lethbridge",
    name: "Lethbridge",
    province: "alberta",
    nearby: ["calgary", "red-deer", "edmonton"],
  },
  {
    slug: "winnipeg",
    name: "Winnipeg",
    province: "manitoba",
    nearby: ["brandon", "regina", "saskatoon"],
  },
  {
    slug: "brandon",
    name: "Brandon",
    province: "manitoba",
    nearby: ["winnipeg", "regina", "saskatoon"],
  },
  {
    slug: "regina",
    name: "Regina",
    province: "saskatchewan",
    nearby: ["saskatoon", "winnipeg", "brandon"],
  },
  {
    slug: "saskatoon",
    name: "Saskatoon",
    province: "saskatchewan",
    nearby: ["regina", "winnipeg", "brandon"],
  },
  {
    slug: "moncton",
    name: "Moncton",
    province: "new-brunswick",
    nearby: ["fredericton", "charlottetown", "halifax"],
  },
  {
    slug: "fredericton",
    name: "Fredericton",
    province: "new-brunswick",
    nearby: ["moncton", "charlottetown", "halifax"],
  },
  {
    slug: "halifax",
    name: "Halifax",
    province: "nova-scotia",
    nearby: ["moncton", "charlottetown", "fredericton"],
  },
  {
    slug: "st-johns",
    name: "St. John's",
    province: "newfoundland-and-labrador",
    nearby: ["halifax", "moncton", "charlottetown"],
  },
  {
    slug: "charlottetown",
    name: "Charlottetown",
    province: "prince-edward-island",
    nearby: ["moncton", "fredericton", "halifax"],
  },
];

// Explicit require map so webpack can statically resolve content modules
// (a computed require() path would be a "request of a dependency is an
// expression" warning and fail at build time). Populated as city pages are
// written, one batch at a time.
const CONCRETE_CITY_MODULES = {
  toronto: require("../content/canada-niche/concrete-contractors/cities/toronto.js"),
  mississauga: require("../content/canada-niche/concrete-contractors/cities/mississauga.js"),
  ottawa: require("../content/canada-niche/concrete-contractors/cities/ottawa.js"),
  hamilton: require("../content/canada-niche/concrete-contractors/cities/hamilton.js"),
  kitchener: require("../content/canada-niche/concrete-contractors/cities/kitchener.js"),
  "london-on": require("../content/canada-niche/concrete-contractors/cities/london-on.js"),
  "windsor-on": require("../content/canada-niche/concrete-contractors/cities/windsor-on.js"),
  "kingston-on": require("../content/canada-niche/concrete-contractors/cities/kingston-on.js"),
  montreal: require("../content/canada-niche/concrete-contractors/cities/montreal.js"),
  "quebec-city": require("../content/canada-niche/concrete-contractors/cities/quebec-city.js"),
  laval: require("../content/canada-niche/concrete-contractors/cities/laval.js"),
  gatineau: require("../content/canada-niche/concrete-contractors/cities/gatineau.js"),
  vancouver: require("../content/canada-niche/concrete-contractors/cities/vancouver.js"),
  surrey: require("../content/canada-niche/concrete-contractors/cities/surrey.js"),
  burnaby: require("../content/canada-niche/concrete-contractors/cities/burnaby.js"),
  "victoria-bc": require("../content/canada-niche/concrete-contractors/cities/victoria-bc.js"),
  "richmond-bc": require("../content/canada-niche/concrete-contractors/cities/richmond-bc.js"),
  calgary: require("../content/canada-niche/concrete-contractors/cities/calgary.js"),
  edmonton: require("../content/canada-niche/concrete-contractors/cities/edmonton.js"),
  "red-deer": require("../content/canada-niche/concrete-contractors/cities/red-deer.js"),
  lethbridge: require("../content/canada-niche/concrete-contractors/cities/lethbridge.js"),
  winnipeg: require("../content/canada-niche/concrete-contractors/cities/winnipeg.js"),
  brandon: require("../content/canada-niche/concrete-contractors/cities/brandon.js"),
  regina: require("../content/canada-niche/concrete-contractors/cities/regina.js"),
  saskatoon: require("../content/canada-niche/concrete-contractors/cities/saskatoon.js"),
};

const CONCRETE_HUB_MODULE = require("../content/canada-niche/concrete-contractors/hub.js");

const NICHES = [
  {
    slug: "concrete-contractors",
    name: "Concrete Contractors",
    nameLower: "concrete contractors",
    singularLower: "concrete contractor",
    // eslint-disable-next-line import/no-anonymous-default-export
    hub: CONCRETE_HUB_MODULE,
    cities: CONCRETE_CITY_MODULES,
  },
];

function getProvince(slug) {
  return PROVINCES.find((p) => p.slug === slug) || null;
}

function getCity(slug) {
  return CITIES.find((c) => c.slug === slug) || null;
}

function getNiche(slug) {
  return NICHES.find((n) => n.slug === slug) || null;
}

// Provinces in display order, each with its cities (in CITIES order), only
// including provinces that actually have cities.
function citiesByProvince() {
  return PROVINCES.map((province) => ({
    province,
    cities: CITIES.filter((c) => c.province === province.slug),
  })).filter((group) => group.cities.length > 0);
}

function nearbyCities(citySlug) {
  const city = getCity(citySlug);
  if (!city) return [];
  return city.nearby.map((slug) => getCity(slug)).filter(Boolean);
}

function hubPath(nicheSlug) {
  return `/seo/for-${nicheSlug}`;
}

function cityPath(nicheSlug, citySlug) {
  return `${hubPath(nicheSlug)}/${citySlug}`;
}

function absolute(urlPath) {
  return urlPath.startsWith("http") ? urlPath : `${SITE}${urlPath}`;
}

function hubBreadcrumbs(niche, urlPath) {
  return [
    { name: "Home", href: "/" },
    { name: "SEO", href: "/seo" },
    { name: `${niche.name} in Canada`, href: urlPath },
  ];
}

function cityBreadcrumbs(niche, city, urlPath) {
  return [
    { name: "Home", href: "/" },
    { name: "SEO", href: "/seo" },
    { name: `${niche.name} in Canada`, href: hubPath(niche.slug) },
    { name: city.name, href: urlPath },
  ];
}

// Organization + BreadcrumbList + Service + FAQPage (validate-schema.js
// requires an Organization node and a BreadcrumbList alongside any Service).
function canadaNicheHubGraph({ niche, urlPath, name, description, faqs }) {
  return graph([
    organizationNode(),
    breadcrumbList(hubBreadcrumbs(niche, urlPath)),
    serviceNode({
      name: `SEO for ${niche.name} in Canada`,
      serviceType: "Search engine optimization",
      url: urlPath,
      areaServed: { "@type": "Country", name: "Canada" },
    }),
    faqPageNode(faqs, `${absolute(urlPath)}#faq`),
  ]);
}

function canadaNicheCityGraph({ niche, city, urlPath, name, description, faqs }) {
  return graph([
    organizationNode(),
    breadcrumbList(cityBreadcrumbs(niche, city, urlPath)),
    serviceNode({
      name: `SEO for ${niche.name} in ${city.name}`,
      serviceType: "Search engine optimization",
      url: urlPath,
      areaServed: [
        { "@type": "City", name: city.name },
        { "@type": "Country", name: "Canada" },
      ],
    }),
    faqPageNode(faqs, `${absolute(urlPath)}#faq`),
  ]);
}

const _contentCache = {};

// Loads hub + city content for a niche from the statically-referenced maps on
// the niche records (see NICHES). City content files export a plain object
// whose `seo` field carries title/description only; the shell builds
// url/canonical from the slug so structure stays in one place.
function loadNicheContent(nicheSlug) {
  if (_contentCache[nicheSlug]) return _contentCache[nicheSlug];
  const niche = getNiche(nicheSlug);
  if (!niche) throw new Error(`Unknown niche: ${nicheSlug}`);
  const { hub, cities } = niche;
  for (const slug of Object.keys(cities || {})) {
    if (!getCity(slug)) {
      throw new Error(
        `canadaNicheSeo: cities/${slug}.js does not match any city slug`
      );
    }
  }
  _contentCache[nicheSlug] = { hub, cities: cities || {} };
  return _contentCache[nicheSlug];
}

// Props for the hub route shell.
function hubPageProps(nicheSlug) {
  const niche = getNiche(nicheSlug);
  if (!niche) throw new Error(`Unknown niche: ${nicheSlug}`);
  const { hub } = loadNicheContent(nicheSlug);
  const urlPath = hubPath(nicheSlug);
  return {
    props: {
      niche: { slug: niche.slug, name: niche.name },
      hub,
      urlPath,
      canonical: absolute(urlPath),
      breadcrumbs: hubBreadcrumbs(niche, urlPath),
      groups: citiesByProvince().map((group) => ({
        province: group.province,
        cities: group.cities.map((city) => ({
          slug: city.slug,
          name: city.name,
          href: cityPath(nicheSlug, city.slug),
          published: Boolean(loadNicheContent(nicheSlug).cities[city.slug]),
        })),
      })),
    },
  };
}

// Props for one city page (used by getStaticProps in the [city] shell).
function cityPageProps(nicheSlug, citySlug) {
  const niche = getNiche(nicheSlug);
  const city = getCity(citySlug);
  if (!niche || !city) throw new Error(`Unknown niche/city: ${citySlug}`);
  const { cities } = loadNicheContent(nicheSlug);
  const content = cities[citySlug];
  if (!content) throw new Error(`No content for ${citySlug}`);
  const urlPath = cityPath(nicheSlug, citySlug);
  return {
    props: {
      niche: { slug: niche.slug, name: niche.name },
      city: { slug: city.slug, name: city.name },
      content,
      urlPath,
      canonical: absolute(urlPath),
      breadcrumbs: cityBreadcrumbs(niche, city, urlPath),
      nearby: nearbyCities(citySlug).map((n) => ({
        slug: n.slug,
        name: n.name,
        href: cityPath(nicheSlug, n.slug),
        note: (content.nearby && content.nearby.notes && content.nearby.notes[n.slug]) || null,
      })),
    },
  };
}

// Valid slugs for getStaticPaths (only cities that have content written).
function publishedCitySlugs(nicheSlug) {
  const { cities } = loadNicheContent(nicheSlug);
  return Object.keys(cities);
}

module.exports = {
  SITE,
  PROVINCES,
  CITIES,
  NICHES,
  getProvince,
  getCity,
  getNiche,
  citiesByProvince,
  nearbyCities,
  hubPath,
  cityPath,
  absolute,
  hubBreadcrumbs,
  cityBreadcrumbs,
  canadaNicheHubGraph,
  canadaNicheCityGraph,
  loadNicheContent,
  hubPageProps,
  cityPageProps,
  publishedCitySlugs,
};
