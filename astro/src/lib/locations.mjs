// Single source of truth for the hierarchical location system.
//
// URL shape (one service at a time):
//   /{service}/                                    service root
//   /{service}/{country}/                          country hub
//   /{service}/{country}/{region}/                 region hub
//   /{service}/{country}/{region}/{city}           city page
//
// `src/data/locations.json` holds countries, regions and cities (with phase and
// per-service status). `src/data/locations/{service}/...` holds the per-page
// content files. Nothing here may build, link or list a page whose status is
// not "live".
//
// Statuses are "draft", "review", "live" and "skip". "skip" marks a city that
// is deferred: it stays in the data file so it can still be named in nearby-city
// text (as plain text, never a link) and re-enabled later, but it is never
// built, never in a sitemap and never counted toward a hub.

import fs from "node:fs";
import crypto from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
export const ASTRO_ROOT = path.resolve(HERE, "../..");
export const DATA_FILE = path.join(ASTRO_ROOT, "src/data/locations.json");
export const CONTENT_ROOT = path.join(ASTRO_ROOT, "src/data/locations");
export const LASTMOD_FILE = path.join(ASTRO_ROOT, "src/generated/location-lastmod.json");

const TITLE_LIMIT = 60;
const DESCRIPTION_MIN = 140;
const DESCRIPTION_MAX = 160;

export const MIN_NEIGHBOURHOODS = 3;
export const MIN_FAQS = 3;
export const MIN_UNIQUE_WORDS = 400;
export const MAX_SIMILARITY = 0.45;

export const REMOTE_NOTE =
  "We work with clients in this city remotely from the Niagara region in Ontario, Canada. We do not have an office there.";

/* -------------------------------------------------------------------------- */
/* Service configuration                                                       */
/* -------------------------------------------------------------------------- */

const SERVICE_LIST = [
  {
    slug: "seo-for-therapists",
    name: "SEO for Therapists",
    shortName: "Therapist SEO",
    rootLabel: "SEO for Therapists",
    locationLabel: "SEO for therapists",
    navLabel: "SEO for Therapists",
    serviceType: "Therapist SEO, local SEO and AI search optimization",
    schemaType: "ProfessionalService",
    requiresRegulatoryBody: true,
    sitemapKeys: { canada: "therapists-canada", usa: "therapists-us" },
    titleTemplates: [
      (city) => `${city} SEO for Therapists | Get More Client Inquiries`,
      (city) => `${city} SEO for Therapists | Get More Clients`,
      (city) => `${city} SEO for Therapists`,
    ],
    h1: (city) => `SEO for Therapists in ${city}`,
    descriptionTemplates: [
      (city) =>
        `SEO for therapists in ${city}. Improve local Google visibility and your Google Business Profile so your practice wins more client inquiries.`,
      (city) =>
        `Therapist SEO in ${city}. Get found on Google and in AI answers with local SEO, GEO and a stronger practice profile.`,
      (city) =>
        `SEO for therapists in ${city}: local SEO, Google Business Profile work and AI search visibility that bring in more inquiries.`,
      (city) =>
        `SEO for therapists in ${city}. Local SEO, profile work and AI search visibility that produce more client inquiries.`,
    ],
    variantKeyword: "local SEO, GEO",
    outcome: "more client inquiries",
  },
  {
    slug: "ai-search-optimization",
    name: "AI Search Optimization",
    shortName: "AI SEO",
    rootLabel: "AI Search Optimization",
    locationLabel: "AI search optimization",
    navLabel: "AI Search Optimization",
    serviceType:
      "AI search optimization, generative engine optimization (GEO), answer engine optimization (AEO)",
    schemaType: "ProfessionalService",
    requiresRegulatoryBody: false,
    sitemapKeys: { canada: "ai-search-canada", usa: "ai-search-us" },
    titleTemplates: [
      (city) => `${city} AI Search Optimization | Get Found in AI Answers`,
      (city) => `${city} AI SEO Agency | Get Found in ChatGPT & Google`,
      (city) => `${city} AI SEO Agency | Get Found in AI Search`,
      (city) => `${city} AI SEO Agency`,
    ],
    h1: (city) => `AI Search Optimization Services in ${city}`,
    descriptionTemplates: [
      (city) =>
        `AI search optimization services for ${city} businesses. Get cited by ChatGPT, Perplexity & Google AI with GEO and AI SEO.`,
      (city) =>
        `AI search optimization for ${city} businesses. Get found in ChatGPT, Perplexity and Google AI answers with AI SEO and GEO.`,
      (city) =>
        `AI search optimization in ${city}. Improve GEO, AI SEO and Google visibility so buyers find and cite your business.`,
      (city) =>
        `AI search optimization for ${city}. GEO and AI SEO work that helps assistants find, trust and cite you.`,
    ],
    variantKeyword: "GEO, AI SEO",
    outcome: "get cited by AI assistants",
  },
];

export const SERVICES = SERVICE_LIST;
export const SERVICE_SLUGS = SERVICE_LIST.map((service) => service.slug);

export function getServiceConfig(slug) {
  const config = SERVICE_LIST.find((service) => service.slug === slug);
  if (!config) throw new Error(`Unknown location service: ${slug}`);
  return config;
}

/* -------------------------------------------------------------------------- */
/* Data loading                                                                */
/* -------------------------------------------------------------------------- */

const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));

export const SERVICE_AREA_NOTE = data.serviceAreaNote;
export const COUNTRIES = data.countries;

export function displayName(city) {
  return city.title_name ?? city.name;
}

function isAsciiSlug(value) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
}

/** Every city in the data file, flattened with its country and region. */
export function allCities() {
  const records = [];
  for (const country of COUNTRIES) {
    for (const region of country.regions) {
      for (const city of region.cities) {
        records.push({ country, region, city });
      }
    }
  }
  return records;
}

export const CITY_STATUSES = ["draft", "review", "live", "skip"];

export function statusOf(city, serviceSlug) {
  return city.status?.[serviceSlug] ?? "draft";
}

export function isLive(city, serviceSlug) {
  return statusOf(city, serviceSlug) === "live";
}

/** A skipped city is deferred: kept in the data file, but never built or linked. */
export function isSkipped(city, serviceSlug) {
  return statusOf(city, serviceSlug) === "skip";
}

/* -------------------------------------------------------------------------- */
/* URL builders                                                                */
/* -------------------------------------------------------------------------- */

export function serviceRootPath(serviceSlug) {
  return `/${serviceSlug}`;
}

export function countryPath(serviceSlug, country) {
  return `/${serviceSlug}/${country.slug}`;
}

export function regionPath(serviceSlug, country, region) {
  return `/${serviceSlug}/${country.slug}/${region.slug}`;
}

export function cityPath(serviceSlug, country, region, city) {
  return `/${serviceSlug}/${country.slug}/${region.slug}/${city.slug}`;
}

export function pathForRecord(serviceSlug, record) {
  return cityPath(serviceSlug, record.country, record.region, record.city);
}

/* -------------------------------------------------------------------------- */
/* Content files                                                               */
/* -------------------------------------------------------------------------- */

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function cityContentFile(serviceSlug, country, region, city) {
  return path.join(CONTENT_ROOT, serviceSlug, country.slug, region.slug, `${city.slug}.json`);
}

export function readCityContent(serviceSlug, country, region, city) {
  const file = cityContentFile(serviceSlug, country, region, city);
  if (!fs.existsSync(file)) return null;
  return readJson(file);
}

export function cityContentExists(serviceSlug, country, region, city) {
  return fs.existsSync(cityContentFile(serviceSlug, country, region, city));
}

function regionContentFile(serviceSlug, country, region) {
  return path.join(CONTENT_ROOT, serviceSlug, country.slug, region.slug, "_region.json");
}

export function readRegionContent(serviceSlug, country, region) {
  const file = regionContentFile(serviceSlug, country, region);
  return fs.existsSync(file) ? readJson(file) : null;
}

function countryContentFile(serviceSlug, country) {
  return path.join(CONTENT_ROOT, serviceSlug, country.slug, "_country.json");
}

export function readCountryContent(serviceSlug, country) {
  const file = countryContentFile(serviceSlug, country);
  return fs.existsSync(file) ? readJson(file) : null;
}

/** Raw text of a content file, used for lastmod hashing. */
export function readCityContentRaw(serviceSlug, country, region, city) {
  const file = cityContentFile(serviceSlug, country, region, city);
  return fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
}

/* -------------------------------------------------------------------------- */
/* Live sets                                                                   */
/* -------------------------------------------------------------------------- */

/**
 * Live cities for a service. A city marked live without a content file is a
 * build error, never a silently skipped page.
 */
export function liveCities(serviceSlug) {
  const records = allCities().filter((record) => isLive(record.city, serviceSlug));
  for (const record of records) {
    if (!cityContentExists(serviceSlug, record.country, record.region, record.city)) {
      throw new Error(
        `[locations] ${record.city.name} is live for ${serviceSlug} but has no content file: ` +
          `${path.relative(ASTRO_ROOT, cityContentFile(serviceSlug, record.country, record.region, record.city))}`
      );
    }
  }
  return records;
}

/** Live cities inside one region. */
export function liveCitiesInRegion(serviceSlug, country, region) {
  return liveCities(serviceSlug).filter(
    (record) => record.country.slug === country.slug && record.region.slug === region.slug
  );
}

/** Live cities inside one country. */
export function liveCitiesInCountry(serviceSlug, country) {
  return liveCities(serviceSlug).filter((record) => record.country.slug === country.slug);
}

/** Countries with at least one live page for the service. */
export function liveCountries(serviceSlug) {
  return COUNTRIES.filter((country) => liveCitiesInCountry(serviceSlug, country).length > 0);
}

/** Regions with at least one live page for the service. */
export function liveRegions(serviceSlug) {
  const live = liveCities(serviceSlug);
  const out = [];
  for (const country of COUNTRIES) {
    for (const region of country.regions) {
      const cities = live.filter(
        (record) => record.country.slug === country.slug && record.region.slug === region.slug
      );
      if (cities.length > 0) out.push({ country, region, cities });
    }
  }
  return out;
}

/* -------------------------------------------------------------------------- */
/* Titles, descriptions, H1                                                    */
/* -------------------------------------------------------------------------- */

export function buildTitle(serviceSlug, city) {
  const config = getServiceConfig(serviceSlug);
  const name = displayName(city);
  const fitting = config.titleTemplates
    .map((template) => template(name))
    .find((title) => title.length <= TITLE_LIMIT);
  return fitting ?? config.titleTemplates[0](name);
}

export function buildDescription(serviceSlug, city, hook) {
  const config = getServiceConfig(serviceSlug);
  const name = displayName(city);
  const variants = config.descriptionTemplates.map((template) => `${template(name)} ${hook}`.replace(/\s+/g, " "));
  return (
    variants.find((value) => value.length >= DESCRIPTION_MIN && value.length <= DESCRIPTION_MAX) ??
    variants.reduce((shortest, value) => (value.length < shortest.length ? value : shortest))
  );
}

export function buildH1(serviceSlug, city) {
  return getServiceConfig(serviceSlug).h1(displayName(city));
}

/** Title/description for one city, honouring reviewed overrides. */
export function seoFor(serviceSlug, record, content) {
  const { city } = record;
  const hook = content?.city_hook ?? `Serving ${displayName(city)} remotely from Niagara.`;
  const title = content?.title_override ?? buildTitle(serviceSlug, city);
  const description = content?.description_override ?? buildDescription(serviceSlug, city, hook);
  return { title, description, h1: buildH1(serviceSlug, city) };
}

/* -------------------------------------------------------------------------- */
/* Nearby cities                                                               */
/* -------------------------------------------------------------------------- */

function distanceKm(a, b) {
  const toRad = (value) => (value * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h =
    Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

/**
 * The nearest cities by distance, regardless of province, state or country
 * border. Each neighbour reports whether that city's page for the service is
 * live so the component can link it or render plain text. Skipped and draft
 * cities stay in the pool as plain text; only live pages are ever linked.
 */
export function nearbyCities(serviceSlug, record, limit = 6) {
  return allCities()
    .filter((candidate) => !(candidate.city.slug === record.city.slug && candidate.region.slug === record.region.slug && candidate.country.slug === record.country.slug))
    .map((candidate) => ({
      ...candidate,
      distanceKm: distanceKm(record.city, candidate.city),
      live:
        !isSkipped(candidate.city, serviceSlug) &&
        isLive(candidate.city, serviceSlug) &&
        cityContentExists(serviceSlug, candidate.country, candidate.region, candidate.city),
      href: cityPath(serviceSlug, candidate.country, candidate.region, candidate.city),
    }))
    .sort((a, b) => a.distanceKm - b.distanceKm)
    .slice(0, limit);
}

/* -------------------------------------------------------------------------- */
/* Sitemaps and lastmod                                                        */
/* -------------------------------------------------------------------------- */

let lastmodCache = null;
function lastmodManifest() {
  if (lastmodCache) return lastmodCache;
  lastmodCache = fs.existsSync(LASTMOD_FILE) ? readJson(LASTMOD_FILE) : {};
  return lastmodCache;
}

export function lastmodFor(pathname) {
  return lastmodManifest().pages?.[pathname]?.date;
}

/** Sitemap child name for a live city page, e.g. "therapists-canada". */
export function sitemapKeyFor(serviceSlug, country) {
  const config = getServiceConfig(serviceSlug);
  return config.sitemapKeys[country.slug] ?? `core`;
}

export function siteMapEntriesForService(serviceSlug) {
  const entries = [];
  const config = getServiceConfig(serviceSlug);
  for (const record of liveCities(serviceSlug)) {
    entries.push({
      pathname: pathForRecord(serviceSlug, record),
      group: sitemapKeyFor(serviceSlug, record.country),
      service: serviceSlug,
      label: `${displayName(record.city)}, ${record.region.code}`,
      record,
      content: readCityContent(serviceSlug, record.country, record.region, record.city),
    });
  }
  for (const { country, region } of liveRegions(serviceSlug)) {
    entries.push({
      pathname: regionPath(config.slug, country, region),
      group: sitemapKeyFor(serviceSlug, country),
      service: serviceSlug,
    });
  }
  for (const country of liveCountries(serviceSlug)) {
    entries.push({
      pathname: countryPath(config.slug, country),
      group: sitemapKeyFor(serviceSlug, country),
      service: serviceSlug,
    });
  }
  entries.push({
    pathname: serviceRootPath(config.slug),
    group: sitemapKeyFor(serviceSlug, liveCountries(serviceSlug)[0] ?? { slug: "canada" }),
    service: serviceSlug,
  });
  return entries;
}

/* -------------------------------------------------------------------------- */
/* Hashing                                                                     */
/* -------------------------------------------------------------------------- */

export function contentHash(parts) {
  return crypto.createHash("sha1").update(parts.join("\u0000")).digest("hex").slice(0, 12);
}

/* -------------------------------------------------------------------------- */
/* Redirects                                                                   */
/* -------------------------------------------------------------------------- */

export const STATIC_REDIRECTS = [
  { from: "/seo/for-therapists", to: "/seo-for-therapists", reason: "Service root moved into the hierarchical location system." },
  { from: "/ai-search", to: "/ai-search-optimization", reason: "AI SEO service root moved to /ai-search-optimization/." },
  { from: "/seo/for-therapists-canada", to: "/seo-for-therapists/canada", reason: "Old country-style therapist URL." },
  { from: "/seo/for-therapists-usa", to: "/seo-for-therapists/usa", reason: "Old country-style therapist URL." },
];

/**
 * Every legacy city URL from the data file, mapped straight to its final URL.
 * Only pages that are live today carry legacy URLs, so this map never
 * redirects to a page that is not built.
 */
export function redirectMap() {
  const entries = [];
  for (const record of allCities()) {
    for (const serviceSlug of SERVICE_SLUGS) {
      const legacy = record.city.legacy?.[serviceSlug];
      if (!legacy || !legacy.length) continue;
      const target = pathForRecord(serviceSlug, record);
      if (!isLive(record.city, serviceSlug)) {
        throw new Error(
          `[locations] ${record.city.name} has legacy URLs for ${serviceSlug} but is not live.`
        );
      }
      for (const from of legacy) entries.push({ from, to: target, service: serviceSlug });
    }
  }
  return [...STATIC_REDIRECTS, ...entries];
}

/* -------------------------------------------------------------------------- */
/* Validation                                                                  */
/* -------------------------------------------------------------------------- */

const isNonEmptyString = (value) => typeof value === "string" && value.trim().length > 0;

function validateContentFile(serviceSlug, record, content) {
  const errors = [];
  const where = `${serviceSlug} ${record.city.name}`;
  const { city } = record;
  if (!content) {
    errors.push(`${where}: content file is missing.`);
    return errors;
  }
  if (!isNonEmptyString(content.city_hook)) errors.push(`${where}: city_hook is missing.`);
  if (!Array.isArray(content.neighbourhoods) || content.neighbourhoods.filter(isNonEmptyString).length < MIN_NEIGHBOURHOODS) {
    errors.push(`${where}: needs at least ${MIN_NEIGHBOURHOODS} neighbourhoods.`);
  }
  const market = content.local_market_context;
  const marketOk =
    (Array.isArray(market) && market.filter(isNonEmptyString).length > 0) || isNonEmptyString(market);
  if (!marketOk) errors.push(`${where}: local_market_context is missing.`);

  const faqs = Array.isArray(content.faqs) ? content.faqs : [];
  if (faqs.length < MIN_FAQS) errors.push(`${where}: needs at least ${MIN_FAQS} FAQs.`);
  faqs.forEach((faq, index) => {
    if (!isNonEmptyString(faq?.q) || !isNonEmptyString(faq?.a)) {
      errors.push(`${where}: FAQ ${index + 1} is missing a question or answer.`);
    }
  });

  if (!Array.isArray(content.sources) || content.sources.filter(isNonEmptyString).length === 0) {
    errors.push(`${where}: sources must list at least one URL backing the regulatory or statistical claims.`);
  }

  const config = getServiceConfig(serviceSlug);
  if (config.requiresRegulatoryBody) {
    const body = content.regulatory_body;
    if (!isNonEmptyString(body?.name) || !isNonEmptyString(body?.url)) {
      errors.push(`${where}: regulatory_body (name and url) is required for therapist pages.`);
    }
  }

  if (serviceSlug === "ai-search-optimization") {
    const hasGeoFaq = faqs.some((faq) => /what does geo mean/i.test(faq?.q ?? ""));
    if (!hasGeoFaq) {
      errors.push(`${where}: AI search pages need the "What does GEO mean in AI search optimization?" FAQ.`);
    }
  }

  if (!isNonEmptyString(content.hero?.description)) errors.push(`${where}: hero.description is missing.`);

  const structured = Boolean(content.legacy_body);
  if (!structured) {
    if (!isNonEmptyString(content.market_heading)) errors.push(`${where}: market_heading is missing.`);
    if (!Array.isArray(content.services?.cards) || content.services.cards.length === 0) {
      errors.push(`${where}: services.cards are missing.`);
    }
    if (!Array.isArray(content.ai?.paragraphs) || content.ai.paragraphs.length === 0) {
      errors.push(`${where}: ai.paragraphs are missing.`);
    }
  }
  return errors;
}

/**
 * Whole-system validation: data integrity, content files, titles and meta
 * descriptions. Returns rows for the title table too.
 */
export function validateLocations() {
  const errors = [];
  const rows = [];
  const seenSlugs = new Map();

  for (const record of allCities()) {
    const { country, region, city } = record;
    for (const slug of [country.slug, region.slug, city.slug]) {
      if (!isAsciiSlug(slug)) errors.push(`Invalid slug "${slug}" — must be lowercase, hyphenated ASCII.`);
    }
    const key = `${country.slug}/${region.slug}/${city.slug}`;
    if (seenSlugs.has(key)) errors.push(`Duplicate city key ${key}`);
    seenSlugs.set(key, true);
    if (typeof city.lat !== "number" || typeof city.lng !== "number") {
      errors.push(`${city.name}: latitude and longitude are required.`);
    }
    if (![1, 2, 3, 4].includes(city.phase)) errors.push(`${city.name}: phase must be 1-4.`);
    for (const serviceSlug of SERVICE_SLUGS) {
      const status = statusOf(city, serviceSlug);
      if (!CITY_STATUSES.includes(status)) {
        errors.push(`${city.name}: invalid ${serviceSlug} status "${status}".`);
      }
    }
  }

  const titles = new Map();
  const descriptions = new Map();

  for (const serviceSlug of SERVICE_SLUGS) {
    const live = liveCities(serviceSlug);
    for (const record of live) {
      const content = readCityContent(serviceSlug, record.country, record.region, record.city);
      errors.push(...validateContentFile(serviceSlug, record, content));
      if (!content) continue;
      const { title, description, h1 } = seoFor(serviceSlug, record, content);
      const pathname = pathForRecord(serviceSlug, record);
      rows.push({ pathname, service: serviceSlug, city: record.city.name, title, description, h1 });

      if (title.length > TITLE_LIMIT) errors.push(`${pathname}: title is ${title.length} chars (max ${TITLE_LIMIT}).`);
      if (description.length > DESCRIPTION_MAX || description.length < DESCRIPTION_MIN) {
        errors.push(`${pathname}: description is ${description.length} chars (must be ${DESCRIPTION_MIN}-${DESCRIPTION_MAX}).`);
      }
      if (titles.has(title)) errors.push(`Duplicate title "${title}" on ${pathname} and ${titles.get(title)}.`);
      titles.set(title, pathname);
      if (descriptions.has(description)) {
        errors.push(`Duplicate description on ${pathname} and ${descriptions.get(description)}.`);
      }
      descriptions.set(description, pathname);
    }

    for (const { country, region } of liveRegions(serviceSlug)) {
      const hub = readRegionContent(serviceSlug, country, region);
      if (!hub) {
        errors.push(`${serviceSlug} region hub ${region.name}: content file is missing.`);
        continue;
      }
      const overview = hub.overview;
      const overviewOk = (Array.isArray(overview) && overview.filter(isNonEmptyString).length > 0) || isNonEmptyString(overview);
      if (!overviewOk) errors.push(`${serviceSlug} ${region.name}: region overview is missing.`);
      for (const record of liveCitiesInRegion(serviceSlug, country, region)) {
        const blurb = hub.city_blurbs?.[record.city.slug];
        if (!isNonEmptyString(blurb)) {
          errors.push(`${serviceSlug} ${region.name}: missing one-line blurb for ${record.city.name}.`);
        }
      }
    }

    for (const country of liveCountries(serviceSlug)) {
      const hub = readCountryContent(serviceSlug, country);
      if (!hub || !isNonEmptyString(hub.intro)) {
        errors.push(`${serviceSlug} ${country.name}: country hub content is missing.`);
      }
    }
  }

  for (const redirect of redirectMap()) {
    if (redirect.from === redirect.to) errors.push(`Redirect loop: ${redirect.from} points at itself.`);
  }

  return { errors, rows };
}
