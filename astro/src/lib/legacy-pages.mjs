// Build-time adapters for the content inherited from the retired Next.js site.
//
// The legacy React page tree has been removed. Its rendered content was
// exported once to JSON under astro/src/data/legacy/ so the Astro build reads
// plain data instead of evaluating React modules. The remaining CommonJS
// modules under /src/lib are data/computation helpers shared with the vertical
// SEO content set; they are required here at build time.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { isRetiredRoute, rewritePageLinks } from "./retired-routes.mjs";
import { LOCAL_SEO_PAGES } from "./local-seo-pages.mjs";
import { applyServiceContentOverrides } from "./service-content-overrides.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
export const REPO_ROOT = path.resolve(HERE, "../../..");

const requireFromRepo = createRequire(path.join(REPO_ROOT, "package.json"));

const LEGACY_CONTENT_DIR = path.join(
  REPO_ROOT,
  "astro",
  "src",
  "data",
  "legacy"
);
function readLegacyContent(file) {
  return JSON.parse(
    fs.readFileSync(path.join(LEGACY_CONTENT_DIR, file), "utf8")
  );
}

const LEGACY_INDUSTRY_PAGES = readLegacyContent("industry-pages.json");
const LEGACY_CITY_PAGES = readLegacyContent("city-pages.json");
const LEGACY_BESPOKE_PAGES = readLegacyContent("bespoke-pages.json");
const LEGACY_WORK_PROJECTS = readLegacyContent("work-projects.json");

const cache = new Map();
function memo(key, factory) {
  if (!cache.has(key)) cache.set(key, factory());
  return cache.get(key);
}

function legacyRequire(relativePath) {
  return requireFromRepo(path.join(REPO_ROOT, relativePath));
}

/* -------------------------------------------------------------------------- */
/* Industry and city pages                                                     */
/* -------------------------------------------------------------------------- */

const NIAGARA_CITIES = [
  { name: "Beamsville", href: "/seo/beamsville" },
  { name: "Crystal Beach", href: "/seo/crystal-beach" },
  { name: "Fonthill", href: "/seo/fonthill" },
  { name: "Fort Erie", href: "/seo/fort-erie" },
  { name: "Grimsby", href: "/seo/grimsby" },
  { name: "Niagara Falls", href: "/seo/niagara-falls" },
  { name: "Niagara-on-the-Lake", href: "/seo/niagara-on-the-lake" },
  { name: "Pelham", href: "/seo/pelham" },
  { name: "Port Colborne", href: "/seo/port-colborne" },
  { name: "Smithville", href: "/seo/smithville" },
  { name: "St. Catharines", href: "/seo/st-catharines" },
  { name: "Thorold", href: "/seo/thorold" },
  { name: "Wainfleet", href: "/seo/wainfleet" },
  { name: "Welland", href: "/seo/welland" },
  { name: "West Lincoln", href: "/seo/west-lincoln" },
];

export const NIAGARA_CITY_LINKS = NIAGARA_CITIES;

/** @returns {any[]} */
export function getIndustryPages() {
  return memo("industry-pages", () => LEGACY_INDUSTRY_PAGES);
}

export function getIndustryPage(pathname) {
  return getIndustryPages().find((page) => page.seo.url === pathname);
}

/** @returns {any[]} */
export function getCitySeoPages() {
  return memo("city-pages", () => {
    // Astro-authored pages carry their own nearby-location links so the
    // township and community pages can point at genuinely related pages.
    const authoredPages = LOCAL_SEO_PAGES.map((page) => ({
      ...page,
      relatedLinks: page.relatedLinks ?? [],
    }));

    return [...LEGACY_CITY_PAGES, ...authoredPages].map((page) =>
      rewritePageLinks(page)
    );
  });
}

export function getCitySeoPage(pathname) {
  if (pathname === "/seo/port-colborne") return null;
  return getCitySeoPages().find((page) => page.seo.url === pathname);
}

/* -------------------------------------------------------------------------- */
/* Service pages                                                               */
/* -------------------------------------------------------------------------- */

/** @returns {any[]} */
export function getServicePages() {
  return memo("service-pages", () => {
    const services = legacyRequire("src/lib/services.js");
    const all = services.loadServices();
    const pages = [];
    for (const service of all) {
      if (service.slug === "seo" || service.slug === "web-design") continue;
      // Retired services never produce a page, even if the legacy gate still
      // publishes their legacy route.
      if (isRetiredRoute(service.url)) continue;
      const result = services.servicePagePropsFor(service.slug);
      if (result?.props?.page) {
        pages.push(
          applyServiceContentOverrides(
            rewritePageLinks(result.props.page)
          )
        );
      }
    }
    return pages.sort((a, b) => a.urlPath.localeCompare(b.urlPath));
  });
}

export function getServicePage(pathname) {
  return getServicePages().find((page) => page.urlPath === pathname);
}

/* -------------------------------------------------------------------------- */
/* Vertical x geo pages                                                        */
/* -------------------------------------------------------------------------- */

/** @returns {any[]} */
export function getVerticalPages() {
  return memo("vertical-pages", () => {
    const verticalSeo = legacyRequire("src/lib/verticalSeo.js");
    const { published } = verticalSeo.computePublished();
    const publishedSet = new Set(published.map((record) => record.page.urlPath));
    return published
      .map((record) => verticalSeo.buildPageProps(record.page, publishedSet))
      .map((page) => rewritePageLinks(page))
      .sort((a, b) => a.urlPath.localeCompare(b.urlPath));
  });
}

export function getVerticalPage(pathname) {
  return getVerticalPages().find((page) => page.urlPath === pathname);
}

/* -------------------------------------------------------------------------- */
/* Canada-wide concrete niche                                                  */
/* -------------------------------------------------------------------------- */

export function getNicheHub() {
  return memo("niche-hub", () => {
    const niche = legacyRequire("src/lib/canadaNicheSeo.js");
    return rewritePageLinks(niche.hubPageProps("concrete-contractors").props);
  });
}

/** @returns {any[]} */
export function getNicheCityPages() {
  return memo("niche-cities", () => {
    const niche = legacyRequire("src/lib/canadaNicheSeo.js");
    return niche
      .publishedCitySlugs("concrete-contractors")
      .map((slug) => niche.cityPageProps("concrete-contractors", slug).props)
      .map((page) => rewritePageLinks(page))
      .sort((a, b) => a.urlPath.localeCompare(b.urlPath));
  });
}

export function getNicheCityPage(pathname) {
  return getNicheCityPages().find((page) => page.urlPath === pathname);
}

/* -------------------------------------------------------------------------- */
/* Shared helpers                                                              */
/* -------------------------------------------------------------------------- */

export function richTextToPlain(text) {
  return String(text ?? "").replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1");
}

/* -------------------------------------------------------------------------- */
/* Bespoke JSX pages (static pages and web-design cities)                      */
/* -------------------------------------------------------------------------- */

export const WEB_DESIGN_CITIES = [
  { slug: "beamsville", name: "Beamsville" },
  { slug: "crystal-beach", name: "Crystal Beach" },
  { slug: "fonthill", name: "Fonthill" },
  { slug: "fort-erie", name: "Fort Erie" },
  { slug: "grimsby", name: "Grimsby" },
  { slug: "niagara-falls", name: "Niagara Falls" },
  { slug: "niagara-on-the-lake", name: "Niagara-on-the-Lake" },
  { slug: "port-colborne", name: "Port Colborne" },
  { slug: "st-catharines", name: "St. Catharines" },
  { slug: "thorold", name: "Thorold" },
  { slug: "pelham", name: "Pelham" },
  { slug: "smithville", name: "Smithville" },
  { slug: "wainfleet", name: "Wainfleet" },
  { slug: "west-lincoln", name: "West Lincoln" },
  { slug: "welland", name: "Welland" },
];

export const WEB_DESIGN_CITY_LINKS = [
  { label: "St. Catharines web design", href: "/web-design/st-catharines" },
  ...WEB_DESIGN_CITIES.filter((city) => city.slug !== "st-catharines").map(
    (city) => ({
      label: `Web design in ${city.name}`,
      href: `/web-design/${city.slug}`,
    })
  ),
];

/** @returns {any[]} */
export function getBespokePages() {
  // Legacy data lives beside the surviving Los Angeles therapist page. The
  // removed city entries (and the Syracuse testimonial source still read by
  // that page) must never produce routes or sitemap entries themselves, so
  // they are filtered out here.
  return memo("bespoke-pages", () =>
    LEGACY_BESPOKE_PAGES.filter(
      (page) => !page.pathname.startsWith("/seo/for-therapists-")
    )
  );
}

export function getBespokePage(pathname) {
  return getBespokePages().find((page) => page.pathname === pathname);
}

/* -------------------------------------------------------------------------- */
/* Data-driven hub pages                                                       */
/* -------------------------------------------------------------------------- */

export function getWorkProjects() {
  return memo("work-projects", () => LEGACY_WORK_PROJECTS);
}

export function getIndustriesData() {
  return memo("industries-data", () => {
    const verticalSeo = legacyRequire("src/lib/verticalSeo.js");
    const { items, categories } = verticalSeo.buildIndustriesProps();
    return { items: rewritePageLinks(items), categories };
  });
}

export function getServicesData() {
  return memo("services-data", () => {
    const services = legacyRequire("src/lib/services.js");
    const { published } = services.computePublishedServices();
    const groupTitles = [
      { title: "SEO", groups: ["seo"] },
      { title: "Web Design", groups: ["web-design"] },
      { title: "eCommerce Marketing", groups: ["ecommerce-marketing"] },
      {
        title: "Digital Marketing and Reputation",
        groups: ["digital-marketing", "reputation"],
      },
    ];
    // Retired standalone services must not appear in the services hub, the
    // human sitemap, or any generated service list. Filter them before the
    // group mapping so empty legacy groups disappear as well.
    const liveServices = published
      .map((record) => record.service)
      .filter((service) => !isRetiredRoute(service.url));

    return {
      groups: groupTitles
        .map((group) => ({
          title: group.title,
          services: liveServices
            .filter((service) => group.groups.includes(service.group))
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((service) => ({
              name: service.name,
              url: service.url,
              summary: service.summary,
            })),
        }))
        .filter((group) => group.services.length > 0),
      all: liveServices,
    };
  });
}

export function getNiagaraIndustries() {
  return memo("niagara-industries", () => {
    const data = legacyRequire("src/lib/niagaraIndustries.js");
    return data.NIAGARA_INDUSTRIES ?? data.default?.NIAGARA_INDUSTRIES ?? [];
  });
}
