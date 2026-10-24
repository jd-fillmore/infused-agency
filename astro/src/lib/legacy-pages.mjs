// Build-time adapters for the legacy Next.js content sources.
//
// Phase 5 keeps the original content files in place and reads them here rather
// than copying hundreds of pages into a second hand-maintained data set. The
// React pages themselves are never imported: only their plain data objects and
// content JSON are evaluated at build time.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import {
  extractLegacyConstants,
  extractLegacyContent,
} from "./legacy-jsx.mjs";
import { isRetiredRoute, rewritePageLinks } from "./retired-routes.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
export const REPO_ROOT = path.resolve(HERE, "../../..");

const requireFromRepo = createRequire(path.join(REPO_ROOT, "package.json"));

let babelParser;
function parser() {
  if (!babelParser) babelParser = requireFromRepo("@babel/parser");
  return babelParser;
}

const cache = new Map();
function memo(key, factory) {
  if (!cache.has(key)) cache.set(key, factory());
  return cache.get(key);
}

function legacyRequire(relativePath) {
  return requireFromRepo(path.join(REPO_ROOT, relativePath));
}

/* -------------------------------------------------------------------------- */
/* Tiny JS object-literal evaluator                                            */
/* -------------------------------------------------------------------------- */

function evaluate(node, context) {
  if (!node) return undefined;

  switch (node.type) {
    case "ObjectExpression": {
      const result = {};
      for (const property of node.properties) {
        if (property.type !== "ObjectProperty") continue;
        const key =
          property.key.type === "Identifier"
            ? property.key.name
            : property.key.value;
        result[key] = evaluate(property.value, context);
      }
      return result;
    }
    case "ArrayExpression":
      return node.elements.map((element) => evaluate(element, context));
    case "StringLiteral":
      return node.value;
    case "NumericLiteral":
      return node.value;
    case "BooleanLiteral":
      return node.value;
    case "NullLiteral":
      return null;
    case "TemplateLiteral":
      if (node.expressions.length === 0) return node.quasis[0].value.cooked;
      return node.quasis.map((quasi) => quasi.value.cooked).join("");
    case "UnaryExpression":
      return node.operator === "-"
        ? -evaluate(node.argument, context)
        : undefined;
    case "Identifier":
      if (Object.prototype.hasOwnProperty.call(context.constants, node.name)) {
        return context.constants[node.name];
      }
      if (Object.prototype.hasOwnProperty.call(context.imports, node.name)) {
        return context.imports[node.name];
      }
      return undefined;
    case "TSAsExpression":
      return evaluate(node.expression, context);
    default:
      return undefined;
  }
}

function imagePublicPath(source) {
  if (!/\.(jpe?g|png|webp|gif|avif|svg)$/i.test(source)) return undefined;
  return `/img/${path.basename(source)}`;
}

/**
 * Reads a legacy page module and evaluates its top-level constants plus the
 * `page` object. Image imports are mapped to their eventual public path.
 */
export function extractLegacyPage(file) {
  const absolute = path.isAbsolute(file) ? file : path.join(REPO_ROOT, file);
  const source = fs.readFileSync(absolute, "utf8");
  const ast = parser().parse(source, {
    sourceType: "module",
    plugins: ["jsx", "classProperties"],
  });

  const context = { imports: {}, constants: {} };

  for (const node of ast.program.body) {
    if (node.type !== "ImportDeclaration") continue;
    const imported = node.source.value;
    for (const specifier of node.specifiers) {
      if (specifier.type !== "ImportDefaultSpecifier") continue;
      const mapped = imagePublicPath(imported);
      if (mapped) context.imports[specifier.local.name] = mapped;
    }
  }

  for (const node of ast.program.body) {
    if (node.type !== "VariableDeclaration") continue;
    for (const declaration of node.declarations) {
      if (declaration.id.type !== "Identifier") continue;
      const value = evaluate(declaration.init, context);
      if (value !== undefined) context.constants[declaration.id.name] = value;
    }
  }

  let page;
  for (const node of ast.program.body) {
    if (node.type !== "VariableDeclaration") continue;
    for (const declaration of node.declarations) {
      if (declaration.id.type === "Identifier" && declaration.id.name === "page") {
        page = evaluate(declaration.init, context);
      }
    }
  }

  if (!page) throw new Error(`No evaluable data object found in ${file}`);
  return { page, constants: context.constants };
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
  { name: "Niagara-on-the-Lake", href: "/seo/niagara-on-the-lake" },
  { name: "Port Colborne", href: "/seo/port-colborne" },
  { name: "Thorold", href: "/seo/thorold" },
  { name: "Welland", href: "/seo/welland" },
];

export const NIAGARA_CITY_LINKS = NIAGARA_CITIES;

const INDUSTRY_FILES = [
  "accountants",
  "appliance-repair",
  "architects",
  "asphalt-paving",
  "auto-body-shops",
  "basement-finishing",
  "cabinet-makers",
  "chiropractors",
  "concrete-contractors",
  "countertop-fabricators",
  "deck-builders",
  "dentists",
  "design-build-firms",
  "eavestrough-contractors",
  "electricians",
  "fence-installers",
  "financial-advisors",
  "fireplace-and-chimney-services",
  "flooring-installers",
  "foundation-waterproofing",
  "garage-door-companies",
  "general-contractors",
  "home-additions",
  "home-automation-installers",
  "home-builders",
  "hvac-contractors",
  "insulation",
  "insurance-brokers",
  "interior-designers",
  "interlock-installers",
  "kitchen-and-bathroom-renovators",
  "landscapers",
  "law-firms",
  "masonry-contractors",
  "med-spas",
  "mortgage-brokers",
  "optometrists",
  "painters",
  "pest-control",
  "physiotherapists",
  "plumbers",
  "pool-and-hot-tub-service",
  "pool-builders",
  "restoration-companies",
  "roofers",
  "septic-services",
  "siding-contractors",
  "solar-companies",
  "tile-installers",
  "towing-companies",
  "tree-services",
  "veterinarians",
  "window-and-door-installers",
  "wineries",
];

/** @returns {any[]} */
export function getIndustryPages() {
  return memo("industry-pages", () =>
    INDUSTRY_FILES.map((slug) => {
      const { page } = extractLegacyPage(
        `src/pages/seo/for-${slug}-niagara.js`
      );
      return rewritePageLinks(page);
    }).sort((a, b) => a.seo.url.localeCompare(b.seo.url))
  );
}

export function getIndustryPage(pathname) {
  return getIndustryPages().find((page) => page.seo.url === pathname);
}

const CITY_SEO_SLUGS = [
  "beamsville",
  "crystal-beach",
  "fonthill",
  "fort-erie",
  "grimsby",
  "niagara-on-the-lake",
  "thorold",
  "welland",
];

/** @returns {any[]} */
export function getCitySeoPages() {
  return memo("city-pages", () =>
    CITY_SEO_SLUGS.map((slug) => {
      const { page } = extractLegacyPage(`src/pages/seo/${slug}.js`);
      const relatedLinks = NIAGARA_CITIES.filter(
        (city) => city.name !== page.city
      ).map((city) => ({ href: city.href, label: `${city.name}, ON` }));
      return rewritePageLinks({
        ...page,
        relatedLinks,
        hero: {
          ...page.hero,
          // The legacy pages already supply an image import; keep the mapped
          // public path produced by the evaluator.
          image: page.hero?.image,
        },
      });
    })
  );
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
      if (result?.props?.page) pages.push(rewritePageLinks(result.props.page));
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
/* Bespoke JSX pages (static pages, web-design cities, US therapist pages)     */
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

const US_THERAPIST_CITIES = [
  { slug: "albany", name: "Albany" },
  { slug: "buffalo", name: "Buffalo" },
  { slug: "huntington", name: "Huntington" },
  { slug: "new-york", name: "New York" },
  { slug: "rochester", name: "Rochester" },
  { slug: "syracuse", name: "Syracuse" },
];

export const US_THERAPIST_ROUTES = US_THERAPIST_CITIES.map((city) => ({
  pathname: `/seo/for-therapists-${city.slug}`,
  city: city.name,
}));

function cloneBlocks(blocks) {
  return blocks.map((block) => ({
    ...block,
    items: Array.isArray(block.items)
      ? block.items.map((item) => (typeof item === "object" ? { ...item } : item))
      : block.items,
  }));
}

function isFaqHeading(block) {
  return (
    block.type === "heading" &&
    /frequently asked questions/i.test(block.text)
  );
}

function convertFaqSequence(blocks) {
  const start = blocks.findIndex(isFaqHeading);
  if (start === -1) return blocks;

  let end = blocks.findIndex(
    (block, index) =>
      index > start && block.type === "heading" && block.level <= 2
  );
  if (end === -1) end = blocks.length;

  const items = [];
  const region = blocks.slice(start + 1, end);
  for (let index = 0; index < region.length; index += 1) {
    const block = region[index];
    if (block.type !== "heading" || block.level !== 3) continue;
    const answer = region[index + 1];
    if (!answer || answer.type !== "paragraph") continue;
    items.push({ q: block.text, a: answer.text });
    index += 1;
  }

  if (items.length < 2) return blocks;

  const faqBlock = { type: "faqs", items };
  return [
    ...blocks.slice(0, start + 1),
    faqBlock,
    ...blocks.slice(end),
  ];
}

function trimTrailingBlogTeaser(blocks) {
  const index = blocks.findIndex(
    (block) =>
      block.type === "heading" && /latest blog posts/i.test(block.text)
  );
  return index === -1 ? blocks : blocks.slice(0, index);
}

function dropIconImages(blocks) {
  return blocks.filter((block) => {
    if (block.type !== "image") return true;
    const base = path.basename(block.src).toLowerCase();
    return !["check.png", "check.webp", "check.svg"].includes(base);
  });
}

function replaceLinks(blocks, replacements) {
  const replace = (value) => {
    if (typeof value !== "string") return value;
    let output = value;
    for (const [from, to] of Object.entries(replacements)) {
      output = output.split(from).join(to);
    }
    return output;
  };

  return blocks.map((block) => {
    const next = { ...block };
    if (typeof next.text === "string") next.text = replace(next.text);
    if (typeof next.label === "string") next.label = replace(next.label);
    if (typeof next.href === "string") next.href = replace(next.href);
    if (Array.isArray(next.items)) {
      next.items = next.items.map((item) =>
        typeof item === "string"
          ? replace(item)
          : {
              ...item,
              q: replace(item.q),
              a: replace(item.a),
              label: replace(item.label),
              href: replace(item.href),
            }
      );
    }
    return next;
  });
}

function insertCrossLinks(blocks, pathname) {
  const headingIndex = blocks.findIndex(
    (block) =>
      block.type === "heading" && /web design across niagara/i.test(block.text)
  );
  if (headingIndex === -1) return blocks;

  let insertAt = headingIndex + 1;
  while (
    insertAt < blocks.length &&
    blocks[insertAt].type !== "heading" &&
    blocks[insertAt].type !== "eyebrow"
  ) {
    insertAt += 1;
  }

  const list = {
    type: "list",
    ordered: false,
    items: WEB_DESIGN_CITY_LINKS.filter(
      (link) => link.href !== pathname
    ).map((link) => `[${link.label}](${link.href})`),
  };

  return [
    ...blocks.slice(0, insertAt),
    list,
    ...blocks.slice(insertAt),
  ];
}

function normaliseHeroImage(blocks, hero) {
  if (!hero || hero.image) return { blocks, hero };
  const index = blocks.findIndex((block) => block.type === "image");
  if (index !== 0) return { blocks, hero };

  const [image] = blocks.splice(index, 1);
  return {
    blocks,
    hero: { ...hero, image: image.src, imageAlt: image.alt },
  };
}

function bespokePage(pathname, file, options = {}) {
  const extracted = extractLegacyContent(file);
  let blocks = dropIconImages(cloneBlocks(extracted.blocks));
  let hero = extracted.hero ? { ...extracted.hero } : null;

  if (options.faqs !== false) blocks = convertFaqSequence(blocks);
  if (options.trimTeaser) blocks = trimTrailingBlogTeaser(blocks);
  if (options.replaceLinks) blocks = replaceLinks(blocks, options.replaceLinks);
  if (options.crossLinks) blocks = insertCrossLinks(blocks, pathname);
  if (options.heroImage) {
    const normalised = normaliseHeroImage(blocks, hero);
    blocks = normalised.blocks;
    hero = normalised.hero;
  }

  return {
    pathname,
    file,
    kind: options.kind ?? "static",
    eyebrow: options.eyebrow ?? "Infused Agency",
    title: extracted.title,
    description: extracted.description,
    canonical:
      extracted.canonical || `https://infused.agency${pathname}`,
    h1: extracted.h1,
    hero,
    blocks,
    breadcrumbs: options.breadcrumbs ?? [
      { name: "Home", href: "/" },
      { name: extracted.h1 || pathname },
    ],
  };
}

const BESPOKE_ROUTES = [
  {
    pathname: "/about",
    file: "src/pages/about.js",
    kind: "static",
    eyebrow: "About",
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "About" },
    ],
  },
  {
    pathname: "/process",
    file: "src/pages/process.js",
    kind: "static",
    eyebrow: "Process",
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Process" },
    ],
  },
  {
    pathname: "/privacy-policy",
    file: "src/pages/privacy-policy.js",
    kind: "static",
    eyebrow: "Legal",
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Privacy Policy" },
    ],
  },
  {
    pathname: "/areas-we-serve",
    file: "src/pages/areas-we-serve.js",
    kind: "static",
    eyebrow: "Areas",
    replaceLinks: { "/seo/wainfleet": "/seo" },
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Areas We Serve" },
    ],
  },
  {
    pathname: "/cass-a-bella-construction",
    file: "src/pages/cass-a-bella-construction.js",
    kind: "case-study",
    eyebrow: "Case study",
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Work", href: "/work" },
      { name: "Cass-A-Bella Construction" },
    ],
  },
  {
    pathname: "/kd-florist",
    file: "src/pages/kd-florist.js",
    kind: "case-study",
    eyebrow: "Case study",
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Work", href: "/work" },
      { name: "KD Flowers" },
    ],
  },
  {
    pathname: "/tree-reports",
    file: "src/pages/tree-reports.js",
    kind: "case-study",
    eyebrow: "Case study",
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Work", href: "/work" },
      { name: "TreeReports" },
    ],
  },
  {
    pathname: "/effective-web-design-steps",
    file: "src/pages/effective-web-design-steps.js",
    kind: "article",
    eyebrow: "Guide",
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Effective Web Design Steps" },
    ],
  },
  {
    pathname: "/website-conversion-optimization",
    file: "src/pages/website-conversion-optimization.js",
    kind: "service",
    eyebrow: "Services",
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
      { name: "Website Conversion Rate Optimization" },
    ],
  },
  {
    pathname: "/wordpress-developer-niagara",
    file: "src/pages/wordpress-developer-niagara.js",
    kind: "service",
    eyebrow: "Web design",
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Web Design", href: "/web-design" },
      { name: "WordPress Developer Niagara" },
    ],
  },
  {
    pathname: "/web-design",
    file: "src/pages/web-design/index.js",
    kind: "web-design",
    eyebrow: "Web design",
    heroImage: true,
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Web Design" },
    ],
  },
  ...WEB_DESIGN_CITIES.map((city) => ({
    pathname: `/web-design/${city.slug}`,
    file: `src/pages/web-design/${city.slug}.js`,
    kind: "web-design",
    eyebrow: "Web design",
    heroImage: true,
    crossLinks: true,
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Web Design", href: "/web-design" },
      { name: city.name },
    ],
  })),
  ...US_THERAPIST_CITIES.map((city) => ({
    pathname: `/seo/for-therapists-${city.slug}`,
    file: `src/pages/seo/for-therapists-${city.slug}.js`,
    kind: "therapist",
    eyebrow: "Therapist SEO",
    trimTeaser: true,
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "SEO", href: "/seo" },
      { name: "Therapist SEO", href: "/therapist-seo" },
      { name: city.name },
    ],
  })),
];

/** @returns {any[]} */
export function getBespokePages() {
  return memo("bespoke-pages", () =>
    BESPOKE_ROUTES.map((route) =>
      rewritePageLinks(bespokePage(route.pathname, route.file, route))
    ).sort((a, b) => a.pathname.localeCompare(b.pathname))
  );
}

export function getBespokePage(pathname) {
  return getBespokePages().find((page) => page.pathname === pathname);
}

/* -------------------------------------------------------------------------- */
/* Data-driven hub pages                                                       */
/* -------------------------------------------------------------------------- */

export function getWorkProjects() {
  return memo("work-projects", () => {
    const constants = extractLegacyConstants("src/pages/work.js");
    return rewritePageLinks(constants.PROJECTS);
  });
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
