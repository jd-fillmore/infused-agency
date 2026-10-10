// Shared data + quality-gate library for the service pages, Solutions mega menu,
// hub grid, sitemap and internal links.
// CommonJS so it can be required by Next.js pages (via webpack interop) and by
// the standalone Node verification script without a build step.
const fs = require("fs");
const path = require("path");
const verticalSeo = require("./verticalSeo");

const SITE = "https://infused.agency";
const SERVICES_DIR = path.join(process.cwd(), "data", "services");
const CONTENT_DIR = path.join(SERVICES_DIR, "content");

// Data-driven group metadata (single source of truth lives in services.json;
// group => display name + pillar link for breadcrumbs / gate organisation).
const GROUP_NAMES = {
  seo: "SEO",
  "web-design": "Web Design",
  "ecommerce-marketing": "eCommerce Marketing",
  "digital-marketing": "Digital Marketing",
  reputation: "Reputation Management",
};

// Nav layout headings (follow-up Phase 7) map one or more groups to a column.
const NAV_GROUPS = [
  { heading: "SEO", groups: ["seo"] },
  { heading: "Web Design", groups: ["web-design"] },
  { heading: "eCommerce Marketing", groups: ["ecommerce-marketing"] },
  {
    heading: "Digital Marketing and Reputation",
    groups: ["digital-marketing", "reputation"],
  },
];

const _cache = {};

function readJson(absPath) {
  const raw = fs.readFileSync(absPath, "utf8");
  return JSON.parse(raw);
}

function loadServices() {
  if (!_cache.services) {
    _cache.services = readJson(path.join(SERVICES_DIR, "services.json"));
  }
  return _cache.services;
}

function loadServiceFacts() {
  if (!_cache.facts) {
    _cache.facts = readJson(path.join(SERVICES_DIR, "service-facts.json"));
  }
  return _cache.facts;
}

function loadServiceContent(slug) {
  const p = path.join(CONTENT_DIR, `${slug}.json`);
  if (!fs.existsSync(p)) return null;
  try {
    return readJson(p);
  } catch (err) {
    err.message = `Malformed service content file ${p}: ${err.message}`;
    throw err;
  }
}

function getService(slug) {
  return loadServices().find((s) => s.slug === slug) || null;
}

function getServiceByUrl(url) {
  return loadServices().find((s) => s.url === url) || null;
}

function groupName(group) {
  return GROUP_NAMES[group] || group;
}

// ----- text utilities (mirror verticalSeo) -----

function countWords(str) {
  return String(str || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

function uniqueProseText(content) {
  if (!content) return "";
  const parts = [];
  if (content.intro) parts.push(content.intro);
  if (content.forWho) parts.push(content.forWho);
  if (Array.isArray(content.process)) {
    parts.push(content.process.map((p) => (p && p.text) || "").join(" "));
  }
  if (Array.isArray(content.deliverables)) parts.push(content.deliverables.join(" "));
  if (Array.isArray(content.metrics)) parts.push(content.metrics.join(" "));
  if (Array.isArray(content.sections)) {
    parts.push(
      content.sections
        .map((s) => (s && s.paragraphs ? s.paragraphs.join(" ") : ""))
        .join(" ")
    );
  }
  if (Array.isArray(content.faqs)) {
    parts.push(content.faqs.map((f) => (f && f.a) || "").join(" "));
  }
  return parts.join(" ");
}

function shingleSet(text, n = 5) {
  const words = String(text || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  const set = new Set();
  for (let i = 0; i + n <= words.length; i++) {
    set.add(words.slice(i, i + n).join(" "));
  }
  if (set.size === 0) words.forEach((w) => set.add(w));
  return set;
}

function jaccard(a, b) {
  if (a.size === 0 && b.size === 0) return 0;
  let inter = 0;
  for (const s of a) if (b.has(s)) inter++;
  const union = a.size + b.size - inter;
  return union === 0 ? 0 : inter / union;
}

// ----- gate -----

function serviceTitle(service) {
  if (service.titleOverride) return service.titleOverride;
  return `${service.name} Services | Infused Agency`;
}

function evaluateServiceBasics(service, content) {
  const failures = [];
  if (!content) {
    failures.push("missing-content");
    return { failures, uniqueWords: 0 };
  }
  if (content.status !== "reviewed") {
    failures.push(`status:${content.status || "none"}`);
  }
  const uniqueWords = countWords(uniqueProseText(content));
  if (uniqueWords < 500) failures.push(`unique-words:${uniqueWords}`);

  const da = content.directAnswer || "";
  const daWords = countWords(da);
  // Template specifies a self-contained, quotable direct answer of 40-60 words.
  if (daWords < 40 || daWords > 60) failures.push(`direct-answer:${daWords}`);

  const faqs = Array.isArray(content.faqs) ? content.faqs : [];
  if (faqs.length < 6) failures.push(`faqs:${faqs.length}`);

  const summary = content.summary || "";
  if (summary.length < 140 || summary.length > 155) {
    failures.push(`summary-length:${summary.length}`);
  }

  const title = serviceTitle(service);
  if (title.length > 65) failures.push(`title-length:${title.length}`);

  return { failures, uniqueWords };
}

function evaluateServices() {
  const services = loadServices();
  const evaluated = services.map((service) => {
    const content = loadServiceContent(service.slug);
    const basics = content ? evaluateServiceBasics(service, content) : null;
    return {
      service,
      content,
      failures: basics ? basics.failures : [],
      uniqueWords: basics ? basics.uniqueWords : 0,
      shingles: shingleSet(uniqueProseText(content)),
    };
  });
  return evaluated;
}

function computePublishedServices(opts = {}) {
  const includeDrafts = opts.includeDrafts === true;

  // Verticals published now (drives industry links + nav industries column).
  let verticalsPublished = new Set();
  try {
    const vresult = verticalSeo.computePublished();
    verticalsPublished = new Set(vresult.published.map((r) => r.page.urlPath));
  } catch (_e) {
    verticalsPublished = new Set();
  }

  const evaluated = evaluateServices();
  const servicesPublished = new Set(
    evaluated
      .filter((r) => !r.service.existing && r.content)
      .map((r) => r.service.url)
  );

  let candidates;
  if (includeDrafts) {
    candidates = evaluated.filter((r) => r.content);
  } else {
    candidates = evaluated.filter(
      (r) =>
        r.service.existing || (r.content && r.failures.length === 0)
    );
  }

  // Similarity pass: greedy, deterministic, siblings = same group.
  // Existing legacy pages have no content file and are excluded.
  const kept = [];
  const failed = [];
  const sorted = [...candidates]
    .filter((r) => !r.service.existing)
    .sort((a, b) => a.service.url.localeCompare(b.service.url));
  for (const cand of sorted) {
    if (includeDrafts) {
      kept.push(cand);
      continue;
    }
    let worst = 0;
    let worstId = null;
    for (const k of kept) {
      if (k.service.group !== cand.service.group) continue;
      const score = jaccard(k.shingles, cand.shingles);
      if (score > worst) {
        worst = score;
        worstId = k.service.url;
      }
    }
    if (worst > 0.3) {
      failed.push({
        ...cand,
        failures: [...cand.failures, `similarity:${worst.toFixed(2)}:${worstId}`],
      });
    } else {
      kept.push(cand);
    }
  }

  // Link pass: every published service's configured links must resolve to a
  // known service / vertical (draft targets are simply omitted from rendering).
  const publishedAll = [
    ...evaluated.filter((r) => r.service.existing),
    ...kept,
  ];
  const publishedServiceSet = new Set(publishedAll.map((r) => r.service.url));

  const finalKept = [];
  for (const k of kept) {
    if (includeDrafts) {
      finalKept.push(k);
      continue;
    }
    const broken = checkServiceLinks(k.service, publishedServiceSet, verticalsPublished);
    if (broken.length) {
      failed.push({
        ...k,
        failures: [...k.failures, `broken-links:${broken.join(",")}`],
      });
    } else {
      finalKept.push(k);
    }
  }

  const allPublished = [
    ...evaluated.filter((r) => r.service.existing),
    ...finalKept,
  ];

  // Summary uniqueness across everything that is published and rendered.
  const summaries = new Set();
  const duplicateSummary = allPublished.filter((r) => {
    const s = r.service.summary;
    if (summaries.has(s)) return true;
    summaries.add(s);
    return false;
  });
  for (const dup of duplicateSummary) {
    failed.push({
      ...dup,
      failures: [...dup.failures, "duplicate-summary"],
    });
  }

  const drafts = evaluated.filter(
    (r) => !r.service.existing && r.content === null
  );
  const gateFailed = [
    ...failed,
    ...evaluated.filter(
      (r) =>
        !r.service.existing &&
        r.content &&
        r.content.status === "reviewed" &&
        !allPublished.includes(r) &&
        !failed.find((f) => f.service.slug === r.service.slug)
    ),
  ].filter((v, i, arr) => arr.findIndex((x) => x.service.slug === v.service.slug) === i);

  return {
    services: loadServices(),
    evaluated,
    published: allPublished,
    failed: gateFailed,
    drafts,
    verticalsPublished,
    includeDrafts,
  };
}

// ----- links & breadcrumbs -----

function checkServiceLinks(service, servicesPublishedSet, verticalsPublishedSet) {
  const errors = [];
  if (service.parentUrl && !getServiceByUrl(service.parentUrl)) {
    errors.push(`parent-not-found:${service.parentUrl}`);
  }
  for (const slug of service.relatedServices || []) {
    if (!getService(slug)) errors.push(`related-not-found:${slug}`);
  }
  for (const vslug of service.relevantVerticals || []) {
    if (!verticalSeo.getVerticalBySlug(vslug)) errors.push(`vertical-not-found:${vslug}`);
  }
  return errors;
}

function buildServiceRelatedLinks(service, servicesPublishedSet) {
  const links = [];
  const add = (href, label) => links.push({ href, label, internal: true });
  if (service.parentUrl) {
    const parent = getServiceByUrl(service.parentUrl);
    if (parent && servicesPublishedSet.has(parent.url)) add(parent.url, parent.name);
  }
  for (const slug of service.relatedServices || []) {
    const related = getService(slug);
    if (related && servicesPublishedSet.has(related.url)) add(related.url, related.name);
  }
  return links;
}

function buildServiceIndustryLinks(service, verticalsPublishedSet) {
  const links = [];
  for (const vslug of service.relevantVerticals || []) {
    const v = verticalSeo.getVerticalBySlug(vslug);
    if (!v) continue;
    const href = `/${v.urlSlug}`;
    if (verticalsPublishedSet.has(href)) {
      links.push({
        href,
        label: `SEO for ${verticalSeo.titleCase(v.plural)} in Canada`,
        internal: true,
      });
    }
  }
  return links;
}

// Live vertical pillars -> relevant published services (rendered on pillars).
function buildVerticalServiceLinks(vertical, servicesPublishedSet) {
  const links = [];
  for (const service of loadServices()) {
    const rel = service.relevantVerticals || [];
    if (!rel.includes(vertical.slug)) continue;
    if (!servicesPublishedSet.has(service.url)) continue;
    links.push({
      href: service.url,
      label: `${service.name} services`,
      internal: true,
    });
  }
  return links;
}

function buildBreadcrumbs(service) {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/services" },
    { name: groupName(service.group), href: service.url },
  ];
  if (service.parentUrl) {
    crumbs[2] = {
      name: groupName(service.group),
      href: getServiceByUrl(service.parentUrl)
        ? service.parentUrl
        : service.url,
    };
    crumbs.push({ name: service.name, href: service.url });
  }
  return crumbs;
}

// ----- slug / file integrity -----

const ROUTE_FILE = (url) =>
  path.join(
    process.cwd(),
    "src",
    "pages",
    ...url.split("/").filter(Boolean).map((seg, i, arr) =>
      i === arr.length - 1 ? `${seg}.js` : seg
    )
  );

function verifyServiceIntegrity() {
  const errors = [];
  const services = loadServices();
  const slugs = new Set();
  const urls = new Set();
  for (const s of services) {
    if (!/^[a-z0-9-]+$/.test(s.slug)) errors.push(`bad slug format: ${s.slug}`);
    if (slugs.has(s.slug)) errors.push(`duplicate slug: ${s.slug}`);
    slugs.add(s.slug);
    if (!/^\/[a-z0-9-]+(\/[a-z0-9-]+)*$/.test(s.url) || s.url.endsWith("/")) {
      errors.push(`bad url format: ${s.url}`);
    }
    if (urls.has(s.url)) errors.push(`duplicate url: ${s.url}`);
    urls.add(s.url);
    if (!s.parentUrl && ["seo", "web-design"].includes(s.slug) && s.existing !== true) {
      errors.push(`existing flag missing on ${s.slug}`);
    }
  }
  const topLevel = new Set(
    fs
      .readdirSync(path.join(process.cwd(), "src", "pages"))
      .filter((f) => f.endsWith(".js") && !f.startsWith("[") && !f.startsWith("_") && f !== "404.js")
      .map((f) => f.replace(/\.js$/, ""))
  );
  for (const v of verticalSeo.loadVerticals()) {
    if (topLevel.has(v.urlSlug)) {
      errors.push(`vertical urlSlug collides with top-level route: ${v.urlSlug}`);
    }
  }
  const pageFileExists = (url) => {
    const rel = url.split("/").filter(Boolean);
    const dir = path.join(process.cwd(), "src", "pages");
    if (rel.length === 1) {
      return (
        fs.existsSync(path.join(dir, `${rel[0]}.js`)) ||
        fs.existsSync(path.join(dir, rel[0], "index.js"))
      );
    }
    const last = rel[rel.length - 1];
    const parent = path.join(dir, ...rel.slice(0, -1));
    return (
      fs.existsSync(path.join(parent, `${last}.js`)) ||
      fs.existsSync(path.join(parent, last, "index.js"))
    );
  };
  for (const s of services) {
    // A route file is required once a service is publishable (existing pages or
    // a reviewed content file); draft services may wait for their batch.
    const content = loadServiceContent(s.slug);
    const publishable =
      s.existing === true || (content && content.status === "reviewed");
    if (publishable && !pageFileExists(s.url)) {
      errors.push(`no page file for ${s.url}`);
    }
  }
  return errors;
}

// ----- nav snapshot (written to src/generated/services-nav.json) -----

function buildNavSnapshot() {
  const { published, verticalsPublished } = computePublishedServices();
  const publishedServices = published.map((r) => r.service);
  const groups = NAV_GROUPS.map((g) => ({
    heading: g.heading,
    links: publishedServices
      .filter((s) => g.groups.includes(s.group))
      .map((s) => ({ name: s.shortName || s.name, url: s.url })),
  }));
  const industries = verticalSeo
    .loadVerticals()
    .filter((v) => verticalsPublished.has(`/${v.urlSlug}`))
    .map((v) => ({
      name: `SEO for ${verticalSeo.titleCase(v.plural)} in Canada`,
      url: `/${v.urlSlug}`,
    }));
  return { groups, industries };
}

// ----- serializable page props (for getStaticProps) -----

function buildServicePageProps(record, servicesPublishedSet, verticalsPublishedSet) {
  const service = record.service;
  const content = record.content;
  const proof = verticalSeo.getProofByIds(content ? content.proofRefs : []);
  const breadcrumbs = buildBreadcrumbs(service);
  const related = buildServiceRelatedLinks(service, servicesPublishedSet);
  const industries = buildServiceIndustryLinks(service, verticalsPublishedSet);

  return {
    slug: service.slug,
    urlPath: service.url,
    canonical: `${SITE}${service.url}`,
    title: serviceTitle(service),
    h1: service.name,
    group: groupName(service.group),
    name: service.name,
    summary: service.summary,
    content,
    proof,
    breadcrumbs,
    related,
    industries,
    relatedSectionTitle: "Related services",
    industrySectionTitle: "Industries we serve",
    updated: service.updated,
  };
}

function servicePagePropsFor(slug) {
  const service = getService(slug);
  if (!service) return { notFound: true };
  const res = computePublishedServices();
  const record = res.published.find((r) => r.service.slug === slug);
  if (!record) return { notFound: true };
  const servicesPublishedSet = new Set(res.published.map((r) => r.service.url));
  const verticalsPublishedSet = res.verticalsPublished;
  return {
    props: {
      page: buildServicePageProps(record, servicesPublishedSet, verticalsPublishedSet),
    },
  };
}

module.exports = {
  SITE,
  SERVICES_DIR,
  CONTENT_DIR,
  GROUP_NAMES,
  NAV_GROUPS,
  loadServices,
  loadServiceFacts,
  loadServiceContent,
  getService,
  getServiceByUrl,
  countWords,
  uniqueProseText,
  shingleSet,
  jaccard,
  serviceTitle,
  evaluateServiceBasics,
  evaluateServices,
  computePublishedServices,
  checkServiceLinks,
  buildServiceRelatedLinks,
  buildServiceIndustryLinks,
  buildVerticalServiceLinks,
  buildBreadcrumbs,
  verifyServiceIntegrity,
  buildNavSnapshot,
  buildServicePageProps,
  servicePagePropsFor,
};