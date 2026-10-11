// Shared data + quality-gate library for the vertical x geo SEO system.
// CommonJS so it can be required by Next.js pages (via webpack interop) and by
// the standalone Node verification script without a build step.
const fs = require("fs");
const path = require("path");

const SITE = "https://infused.agency";
const DATA_DIR = path.join(process.cwd(), "data", "vertical-seo");
const CONTENT_DIR = path.join(DATA_DIR, "content", "verticals");
const RESERVED_COUNTRY_SLUGS = ["usa"];

const _cache = {};

function readJson(absPath) {
  const raw = fs.readFileSync(absPath, "utf8");
  return JSON.parse(raw);
}

function loadVerticals() {
  if (!_cache.verticals) {
    _cache.verticals = readJson(path.join(DATA_DIR, "verticals.json"));
  }
  return _cache.verticals;
}

function loadProvinces() {
  if (!_cache.provinces) {
    _cache.provinces = readJson(path.join(DATA_DIR, "provinces.json"));
  }
  return _cache.provinces;
}

function loadCities() {
  if (!_cache.cities) {
    _cache.cities = readJson(path.join(DATA_DIR, "cities.json"));
  }
  return _cache.cities;
}

function loadProof() {
  if (!_cache.proof) {
    _cache.proof = readJson(path.join(DATA_DIR, "proof.json"));
  }
  return _cache.proof;
}

function getVertical(urlSlug) {
  return loadVerticals().find((v) => v.urlSlug === urlSlug) || null;
}

function getVerticalBySlug(slug) {
  return loadVerticals().find((v) => v.slug === slug) || null;
}

function getProvince(slug) {
  return loadProvinces().find((p) => p.slug === slug) || null;
}

function getCity(provinceSlug, citySlug) {
  return (
    loadCities().find(
      (c) => c.provinceSlug === provinceSlug && c.slug === citySlug
    ) || null
  );
}

function getProvinceCities(provinceSlug) {
  const province = getProvince(provinceSlug);
  if (!province) return [];
  return province.topCitySlugs
    .map((s) => getCity(provinceSlug, s))
    .filter(Boolean);
}

function getVerticalGeo(verticalSlug, provinceSlug) {
  const p = path.join(DATA_DIR, "vertical-geo", verticalSlug, `${provinceSlug}.json`);
  if (!fs.existsSync(p)) return null;
  return readJson(p);
}

function getProofForVertical(verticalSlug) {
  return loadProof().filter((item) => (item.verticals || []).includes(verticalSlug));
}

function getProofByIds(ids) {
  const wanted = new Set(ids || []);
  return loadProof().filter((item) => wanted.has(item.id));
}

function isReservedCountrySlug(slug) {
  return RESERVED_COUNTRY_SLUGS.includes(slug);
}

// ----- content -----

function contentPathFor(page) {
  const v = page.vertical.slug;
  if (page.kind === "pillar") return path.join(CONTENT_DIR, v, "canada.json");
  if (page.kind === "country") return path.join(CONTENT_DIR, v, "usa.json");
  if (page.kind === "province") return path.join(CONTENT_DIR, v, `${page.province.slug}.json`);
  if (page.kind === "city")
    return path.join(CONTENT_DIR, v, page.province.slug, `${page.city.slug}.json`);
  return null;
}

function loadContent(page) {
  const p = contentPathFor(page);
  if (!p || !fs.existsSync(p)) return null;
  try {
    return readJson(p);
  } catch (err) {
    err.message = `Malformed content file ${p}: ${err.message}`;
    throw err;
  }
}

// ----- page enumeration -----

function pageId(page) {
  return page.urlPath;
}

function enumeratePages(opts = {}) {
  const includeScaffold = opts.includeScaffold !== false;
  const pages = [];
  for (const vertical of loadVerticals()) {
    if (!includeScaffold && vertical.launchStatus !== "live") continue;

    const push = (page) => {
      page.id = pageId(page);
      pages.push(page);
    };

    // Pillar (Canada) always exists for a vertical that is at least routed.
    push({
      kind: "pillar",
      vertical,
      urlPath: `/${vertical.urlSlug}`,
      level: "country",
      province: null,
      city: null,
    });

    // Country page (migrated USA page) for therapists.
    if (vertical.countryPages && vertical.countryPages.includes("usa")) {
      push({
        kind: "country",
        vertical,
        country: "usa",
        urlPath: `/${vertical.urlSlug}/usa`,
        level: "country",
        province: null,
        city: null,
      });
    } else if (vertical.slug === "therapists") {
      push({
        kind: "country",
        vertical,
        country: "usa",
        urlPath: `/${vertical.urlSlug}/usa`,
        level: "country",
        province: null,
        city: null,
      });
    }

    const scope = vertical.geoScope && vertical.geoScope.provinces;
    const inScope = (slug) =>
      scope === "all" || (Array.isArray(scope) && scope.includes(slug));

    if (vertical.maxDepth === "province" || vertical.maxDepth === "city") {
      for (const province of loadProvinces()) {
        if (!inScope(province.slug)) continue;
        push({
          kind: "province",
          vertical,
          province,
          urlPath: `/${vertical.urlSlug}/${province.slug}`,
          level: "province",
          city: null,
        });
        if (vertical.maxDepth === "city") {
          for (const city of getProvinceCities(province.slug)) {
            push({
              kind: "city",
              vertical,
              province,
              city,
              urlPath: `/${vertical.urlSlug}/${province.slug}/${city.slug}`,
              level: "city",
            });
          }
        }
      }
    }
  }
  return pages;
}

// ----- text utilities -----

const SMALL_WORDS = new Set(["and", "or", "the", "of", "in", "for", "to", "a", "an"]);

function titleCase(str) {
  return String(str || "")
    .split(/\s+/)
    .filter(Boolean)
    .map((word, i) => {
      const lower = word.toLowerCase();
      if (i > 0 && SMALL_WORDS.has(lower)) return lower;
      return word
        .split("-")
        .map((part) => (part ? part[0].toUpperCase() + part.slice(1) : part))
        .join("-");
    })
    .join(" ");
}

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
  if (content.localInsight) parts.push(content.localInsight);
  if (Array.isArray(content.localChecklist)) parts.push(content.localChecklist.join(" "));
  if (Array.isArray(content.faqs)) {
    for (const f of content.faqs) {
      if (f && f.geoSpecific && f.a) parts.push(f.a);
    }
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
  // For very short prose, fall back to whole-word set so similarity is meaningful.
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

// ----- gate pieces -----

function pageTitle(page) {
  const v = page.vertical;
  if (page.kind === "pillar") return `SEO for ${titleCase(v.plural)} in Canada | Infused Agency`;
  if (page.kind === "country") return `SEO for ${titleCase(v.plural)} in the USA | Infused Agency`;
  if (page.kind === "province")
    return `${titleCase(v.singular)} SEO in ${page.province.name} | Infused Agency`;
  return `${titleCase(v.singular)} SEO in ${page.city.name}, ${page.province.abbr} | Infused Agency`;
}

function pageH1(page) {
  const v = page.vertical;
  if (page.kind === "pillar") return `SEO for ${titleCase(v.plural)} in Canada`;
  if (page.kind === "country") return `SEO for ${titleCase(v.plural)} in the USA`;
  if (page.kind === "province") return `${titleCase(v.singular)} SEO in ${page.province.name}`;
  return `${titleCase(v.singular)} SEO in ${page.city.name}, ${page.province.abbr}`;
}

function uniqueFieldCount(page, content) {
  let count = 0;
  const has = (v) =>
    v !== undefined && v !== null && !(Array.isArray(v) && v.length === 0) && v !== "";
  if (page.kind === "city" && page.city) {
    if (has(page.city.neighbourhoods)) count++;
    if (has(page.city.majorIndustries)) count++;
    if (has(page.city.population2021)) count++;
  }
  const geo = page.province ? getVerticalGeo(page.vertical.slug, page.province.slug) : null;
  if (geo && has(geo.provinceSearchNotes)) count++;
  if (geo && has(geo.regulator)) count++;
  if (geo && geo.advertisingRulesNote) count++;
  if (content && has(content.localInsight)) count++;
  if (content && has(content.proofRefs)) count++;
  // Province structural signals (documented assumption): regulators are null for
  // therapists, so capital + indexed cities are counted as genuine unique data.
  if (page.kind === "province" && page.province) {
    if (page.province.capitalCity) count++;
    if (page.province.languageNote) count++;
  }
  if (page.kind === "pillar" || page.kind === "country") {
    if (page.vertical) {
      if (has(page.vertical.serviceEmphasis)) count++;
      if (has(page.vertical.primaryKeywords)) count++;
    }
  }
  return count;
}

function evaluateBasics(page, content) {
  const failures = [];
  if (!content) {
    failures.push("missing-content");
    return { failures, uniqueWords: 0, uniqueFields: 0 };
  }
  if (content.status !== "reviewed") failures.push(`status:${content.status || "none"}`);
  const uniqueWords = countWords(uniqueProseText(content));
  if (uniqueWords < 400) failures.push(`unique-words:${uniqueWords}`);
  const uniqueFields = uniqueFieldCount(page, content);
  if (uniqueFields < 4) failures.push(`unique-fields:${uniqueFields}`);
  const summary = content.summary || "";
  if (summary.length < 140 || summary.length > 155)
    failures.push(`summary-length:${summary.length}`);
  const title = pageTitle(page);
  if (title.length > 65) failures.push(`title-length:${title.length}`);
  // Rule 6: vertical pages must never target "SEO {niagara city}".
  const niagara = /niagara/i;
  if (niagara.test(title) || niagara.test(summary)) failures.push("niagara-overlap");
  return { failures, uniqueWords, uniqueFields };
}

// Internal site routes that always exist (not part of vertical publishing).
const ALLOWED_STATIC_LINKS = new Set([
  "/",
  "/seo",
  "/services",
  "/work",
  "/blog",
  "/about",
  "/get-a-quote",
  "/seo/st-catharines",
]);

function levelOf(page) {
  return page.level;
}

function computePublished(opts = {}) {
  const includeDrafts = opts.includeDrafts === true;
  const allPages = enumeratePages();
  const livePages = allPages.filter((p) => p.vertical.launchStatus === "live");

  const evaluated = livePages.map((page) => {
    const content = loadContent(page);
    const basics = evaluateBasics(page, content);
    return { page, content, ...basics, shingles: shingleSet(uniqueProseText(content)) };
  });

  let candidates;
  if (includeDrafts) {
    candidates = evaluated.filter((r) => r.content);
  } else {
    candidates = evaluated.filter((r) => r.failures.length === 0);
  }

  // Similarity pass: greedy, deterministic, siblings = same vertical + same level.
  const kept = [];
  const failed = [];
  const sorted = [...candidates].sort((a, b) => a.page.urlPath.localeCompare(b.page.urlPath));
  for (const cand of sorted) {
    if (includeDrafts) {
      kept.push(cand);
      continue;
    }
    let worst = 0;
    let worstId = null;
    for (const k of kept) {
      if (k.page.vertical.slug !== cand.page.vertical.slug) continue;
      if (levelOf(k.page) !== levelOf(cand.page)) continue;
      const score = jaccard(k.shingles, cand.shingles);
      if (score > worst) {
        worst = score;
        worstId = k.page.urlPath;
      }
    }
    if (worst > 0.35) {
      failed.push({ ...cand, failures: [...cand.failures, `similarity:${worst.toFixed(2)}:${worstId}`] });
    } else {
      kept.push(cand);
    }
  }

  // Link pass: every published page's generated vertical links must be published.
  const publishedSet = new Set(kept.map((k) => k.page.urlPath));
  const finalKept = [];
  for (const k of kept) {
    if (includeDrafts) {
      finalKept.push(k);
      continue;
    }
    const links = buildLinks(k.page, publishedSet);
    const broken = links.filter(
      (l) => l.internal && l.href.startsWith("/") && isVerticalHref(l.href) && !publishedSet.has(l.href)
    );
    if (broken.length) {
      failed.push({ ...k, failures: [...k.failures, `broken-links:${broken.map((b) => b.href).join(",")}`] });
    } else {
      finalKept.push(k);
    }
  }

  const drafts = evaluated.filter((r) => r.content && r.content.status !== "reviewed");
  const gateFailed = evaluated.filter(
    (r) =>
      r.content &&
      r.content.status === "reviewed" &&
      !finalKept.includes(r) &&
      r.failures.length > 0
  );

  return {
    all: allPages,
    evaluated,
    published: finalKept,
    failed: [...failed, ...gateFailed.filter((g) => !failed.find((f) => f.page.urlPath === g.page.urlPath))],
    drafts,
    includeDrafts,
  };
}

function isVerticalHref(href) {
  // A vertical href is /{verticalUrlSlug}[/...] for a known urlSlug.
  const first = String(href || "").split("/").filter(Boolean)[0];
  if (!first) return false;
  return loadVerticals().some((v) => v.urlSlug === first);
}

// ----- links & breadcrumbs -----

function buildBreadcrumbs(page) {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "SEO", href: "/seo" },
    { name: titleCase(page.vertical.plural), href: `/${page.vertical.urlSlug}` },
  ];
  if (page.kind === "province" || page.kind === "city") {
    crumbs.push({
      name: page.province.name,
      href: `/${page.vertical.urlSlug}/${page.province.slug}`,
    });
  }
  if (page.kind === "city") {
    crumbs.push({
      name: page.city.name,
      href: `/${page.vertical.urlSlug}/${page.province.slug}/${page.city.slug}`,
    });
  }
  if (page.kind === "country") {
    crumbs[2] = { name: titleCase(page.vertical.plural), href: `/${page.vertical.urlSlug}` };
    crumbs.push({ name: "USA", href: `/${page.vertical.urlSlug}/usa` });
  }
  return crumbs;
}

function buildLinks(page, publishedSet) {
  const links = [];
  const pub = (href) => publishedSet.has(href);
  const v = page.vertical;

  // Parent / up link (in-body).
  if (page.kind === "province" || page.kind === "city") {
    links.push({ href: `/${v.urlSlug}`, label: `${titleCase(v.plural)} SEO in Canada`, internal: true });
  }
  if (page.kind === "city") {
    links.push({
      href: `/${v.urlSlug}/${page.province.slug}`,
      label: `${titleCase(v.singular)} SEO in ${page.province.name}`,
      internal: true,
    });
  }

  // Pillar -> published provinces.
  if (page.kind === "pillar" || page.kind === "country") {
    for (const province of loadProvinces()) {
      const href = `/${v.urlSlug}/${province.slug}`;
      if (pub(href)) links.push({ href, label: `${titleCase(v.singular)} SEO in ${province.name}`, internal: true });
    }
  }

  // Province -> its published cities.
  if (page.kind === "province") {
    for (const city of getProvinceCities(page.province.slug)) {
      const href = `/${v.urlSlug}/${page.province.slug}/${city.slug}`;
      if (pub(href)) links.push({ href, label: `${titleCase(v.singular)} SEO in ${city.name}`, internal: true });
    }
  }

  // City -> up to 4 sibling cities (published), same province/vertical.
  if (page.kind === "city") {
    let n = 0;
    for (const city of getProvinceCities(page.province.slug)) {
      if (city.slug === page.city.slug) continue;
      const href = `/${v.urlSlug}/${page.province.slug}/${city.slug}`;
      if (pub(href)) {
        links.push({ href, label: `SEO for ${titleCase(v.plural)} in ${city.name}`, internal: true });
        if (++n >= 4) break;
      }
    }
  }

  // City -> same city in up to 3 other published verticals.
  if (page.kind === "city") {
    let n = 0;
    for (const other of loadVerticals()) {
      if (other.slug === v.slug || other.launchStatus !== "live") continue;
      if (other.maxDepth !== "city") continue;
      const scope = other.geoScope && other.geoScope.provinces;
      const inScope = scope === "all" || (Array.isArray(scope) && scope.includes(page.province.slug));
      if (!inScope) continue;
      const city = getCity(page.province.slug, page.city.slug);
      if (!city) continue;
      const href = `/${other.urlSlug}/${page.province.slug}/${page.city.slug}`;
      if (pub(href)) {
        links.push({ href, label: `${titleCase(other.singular)} SEO in ${page.city.name}`, internal: true });
        if (++n >= 3) break;
      }
    }
  }

  // Ontario contextual local link (spec section 9).
  if (page.province && page.province.slug === "ontario") {
    links.push({ href: "/seo/st-catharines", label: "our home base in St. Catharines", internal: true });
  }

  return links;
}

// ----- legacy page orphan prevention (follow-up Phase 2) -----
//
// The legacy /seo/for-therapists-* city pages stay live and indexable until
// their replacement is published. While live they must remain reachable through
// a crawlable link from a published page, so we surface them in a "More cities"
// block on the matching province page (and on the pillar for the US cities,
// which have no built province pages). Deriving "live" from LEGACY_REDIRECT_MAP
// vs the published set means a city drops out of the block automatically the
// moment its redirect activates.

const US_LEGACY_CITIES = [
  { slug: "albany", name: "Albany" },
  { slug: "buffalo", name: "Buffalo" },
  { slug: "huntington", name: "Huntington" },
  { slug: "new-york", name: "New York" },
  { slug: "rochester", name: "Rochester" },
  { slug: "syracuse", name: "Syracuse" },
];

// Every legacy therapist file on disk, regardless of kind.
function legacyTherapistFiles() {
  const dir = path.join(process.cwd(), "src", "pages", "seo");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => /^for-therapists-.*\.js$/.test(f))
    .map((f) => {
      const slug = f.replace(/^for-therapists-/, "").replace(/\.js$/, "");
      return { slug, url: `/seo/for-therapists-${slug}` };
    });
}

// The legacy city pages we know how to classify, with their province / region.
function getLegacyTherapistPages() {
  if (_cache.legacyPages) return _cache.legacyPages;
  const provinces = loadProvinces();
  const cities = loadCities();
  const us = new Map(US_LEGACY_CITIES.map((c) => [c.slug, c]));
  const entries = [];
  for (const file of legacyTherapistFiles()) {
    const city = cities.find((c) => c.slug === file.slug);
    if (city) {
      const province = provinces.find((p) => p.slug === city.provinceSlug);
      entries.push({
        slug: file.slug,
        name: city.name,
        url: file.url,
        kind: "city",
        region: "canada",
        provinceSlug: city.provinceSlug,
        abbr: province ? province.abbr : "",
      });
    } else if (us.has(file.slug)) {
      entries.push({
        slug: file.slug,
        name: us.get(file.slug).name,
        url: file.url,
        kind: "usa-city",
        region: "usa",
        provinceSlug: null,
        abbr: "US",
      });
    }
  }
  _cache.legacyPages = entries;
  return entries;
}

// A legacy page is live while it has no redirect, or its redirect target is not
// actually published.
function isLegacyPageLive(url, publishedSet) {
  const target = LEGACY_REDIRECT_MAP[url];
  if (!target) return true;
  if (!publishedSet) return false;
  return !publishedSet.has(target);
}

// "More cities" links for a page: province pages list their live legacy cities;
// the pillar lists the live US city pages.
function buildLegacyLinks(page, publishedSet) {
  if (page.vertical.slug !== "therapists") return [];
  const live = getLegacyTherapistPages().filter((e) =>
    isLegacyPageLive(e.url, publishedSet)
  );
  let relevant = [];
  if (page.kind === "province") {
    relevant = live.filter(
      (e) => e.kind === "city" && e.provinceSlug === page.province.slug
    );
  } else if (page.kind === "pillar") {
    relevant = live.filter((e) => e.kind === "usa-city");
  } else {
    return [];
  }
  return relevant
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((e) => ({
      href: e.url,
      label: e.region === "usa" ? e.name : `${e.name}, ${e.abbr}`,
    }));
}

// Orphan check: every live legacy page must be linked from a published page.
function findOrphanLiveLegacyPages(publishedRecords, publishedSet) {
  const linked = new Set();
  for (const r of publishedRecords) {
    for (const l of buildLegacyLinks(r.page, publishedSet)) linked.add(l.href);
  }
  const orphans = [];
  for (const file of legacyTherapistFiles()) {
    if (!isLegacyPageLive(file.url, publishedSet)) continue;
    if (!linked.has(file.url)) orphans.push(file.url);
  }
  return orphans;
}

// ----- slug integrity -----

function verifySlugIntegrity() {
  const errors = [];
  const verticals = loadVerticals();
  const provinces = loadProvinces();
  const urlSlugs = new Set();
  for (const v of verticals) {
    if (!/^[a-z0-9-]+$/.test(v.urlSlug)) errors.push(`bad urlSlug format: ${v.urlSlug}`);
    if (urlSlugs.has(v.urlSlug)) errors.push(`duplicate urlSlug: ${v.urlSlug}`);
    urlSlugs.add(v.urlSlug);
  }
  for (const p of provinces) {
    if (isReservedCountrySlug(p.slug))
      errors.push(`province slug collides with reserved country slug: ${p.slug}`);
  }
  // Existing top-level page routes (files) must not equal a vertical urlSlug.
  const pagesDir = path.join(process.cwd(), "src", "pages");
  const topLevel = fs
    .readdirSync(pagesDir)
    .filter((f) => f.endsWith(".js") && !f.startsWith("_") && f !== "404.js")
    .map((f) => f.replace(/\.js$/, ""));
  for (const v of verticals) {
    if (topLevel.includes(v.urlSlug))
      errors.push(`vertical urlSlug collides with top-level route: ${v.urlSlug}`);
  }
  return errors;
}

// ----- serializable page props (for getStaticProps) -----

function regulationRows(verticalSlug) {
  const rows = [];
  for (const province of loadProvinces()) {
    const geo = getVerticalGeo(verticalSlug, province.slug);
    if (geo && geo.verified && geo.regulator) {
      rows.push({
        name: province.name,
        abbr: province.abbr,
        regulator: geo.regulator,
        note: geo.advertisingRulesNote || null,
      });
    }
  }
  return rows;
}

function buildPageProps(page, publishedSet) {
  const content = loadContent(page);
  const geo = page.province ? getVerticalGeo(page.vertical.slug, page.province.slug) : null;
  const proof = getProofByIds(content ? content.proofRefs : []);
  const breadcrumbs = buildBreadcrumbs(page);
  const links = buildLinks(page, publishedSet);
  const legacyCities = buildLegacyLinks(page, publishedSet);
  const v = page.vertical;

  let provincesIndex = [];
  if (page.kind === "pillar" || page.kind === "country") {
    provincesIndex = loadProvinces().map((p) => {
      const cities = getProvinceCities(p.slug)
        .map((c) => ({
          name: c.name,
          slug: c.slug,
          href: `/${v.urlSlug}/${p.slug}/${c.slug}`,
          published: publishedSet.has(`/${v.urlSlug}/${p.slug}/${c.slug}`),
        }))
        .filter((c) => c.published);
      return {
        name: p.name,
        slug: p.slug,
        abbr: p.abbr,
        href: `/${v.urlSlug}/${p.slug}`,
        published: publishedSet.has(`/${v.urlSlug}/${p.slug}`),
        cities,
        publishedCityCount: cities.length,
      };
    });
  }

  let citiesIndex = [];
  if (page.kind === "province") {
    citiesIndex = getProvinceCities(page.province.slug).map((c) => ({
      name: c.name,
      slug: c.slug,
      href: `/${v.urlSlug}/${page.province.slug}/${c.slug}`,
      published: publishedSet.has(`/${v.urlSlug}/${page.province.slug}/${c.slug}`),
    }));
  }

  const quebec = loadProvinces().find((p) => p.slug === "quebec");

  return {
    kind: page.kind,
    urlPath: page.urlPath,
    canonical: `${SITE}${page.urlPath}`,
    title: pageTitle(page),
    h1: pageH1(page),
    headingSingular: titleCase(v.singular),
    headingPlural: titleCase(v.plural),
    vertical: {
      slug: v.slug,
      urlSlug: v.urlSlug,
      singular: v.singular,
      plural: v.plural,
      displayName: v.displayName,
      serviceEmphasis: v.serviceEmphasis || [],
      primaryKeywords: v.primaryKeywords || [],
    },
    province: page.province
      ? {
          slug: page.province.slug,
          name: page.province.name,
          abbr: page.province.abbr,
          capitalCity: page.province.capitalCity,
          languageNote: page.province.languageNote,
        }
      : null,
    city: page.city
      ? {
          slug: page.city.slug,
          name: page.city.name,
          neighbourhoods: page.city.neighbourhoods,
          majorIndustries: page.city.majorIndustries,
        }
      : null,
    geo,
    content,
    faqs: content && Array.isArray(content.faqs) ? content.faqs : [],
    proof,
    breadcrumbs,
    links,
    legacyCities,
    provincesIndex,
    citiesIndex,
    regulationRows:
      page.kind === "pillar" || page.kind === "country"
        ? regulationRows(v.slug)
        : [],
    quebecLanguageNote: quebec ? quebec.languageNote : null,
    updated: content ? content.updated : null,
  };
}

// ----- industries hub (R4) -----

// Live verticals with the coverage computed from the published set, shaped for
// the /industries hub. Never hardcodes province/city counts, so the grid grows
// automatically as new verticals or geo pages go live.
function buildIndustriesProps() {
  const { published } = computePublished();
  const liveVerticals = loadVerticals().filter((v) => v.launchStatus === "live");
  const items = liveVerticals.map((v) => {
    const pages = published.filter((r) => r.page.vertical.slug === v.slug);
    const provinceCount = pages.filter((r) => r.page.kind === "province").length;
    const cityCount = pages.filter((r) => r.page.kind === "city").length;
    const parent = v.parentSlug ? getVerticalBySlug(v.parentSlug) : null;
    return {
      slug: v.slug,
      urlSlug: v.urlSlug,
      displayName: v.displayName,
      category: v.category || (parent && parent.category) || "Other",
      benefit:
        v.industriesBenefit ||
        (v.serviceEmphasis && v.serviceEmphasis[0]) ||
        `Search growth built for ${v.displayName.toLowerCase()}`,
      href: `/${v.urlSlug}`,
      provinceCount,
      cityCount,
    };
  });
  const categories = [...new Set(items.map((i) => i.category))].sort();
  return { items, categories };
}

// ----- legacy redirects (only emitted when the target is published) -----

const LEGACY_REDIRECT_MAP = {
  "/seo/for-therapists-canada": "/therapist-seo",
  "/seo/for-therapists-usa": "/therapist-seo/usa",
  "/seo/for-therapists-ontario": "/therapist-seo/ontario",
  "/seo/for-therapists-quebec": "/therapist-seo/quebec",
  "/seo/for-therapists-british-columbia": "/therapist-seo/british-columbia",
  "/seo/for-therapists-alberta": "/therapist-seo/alberta",
  "/seo/for-therapists-saskatchewan": "/therapist-seo/saskatchewan",
  "/seo/for-therapists-manitoba": "/therapist-seo/manitoba",
  "/seo/for-therapists-nova-scotia": "/therapist-seo/nova-scotia",
  "/seo/for-therapists-new-brunswick": "/therapist-seo/new-brunswick",
  "/seo/for-therapists-newfoundland-labrador":
    "/therapist-seo/newfoundland-and-labrador",
  "/seo/for-therapists-toronto": "/therapist-seo/ontario/toronto",
  "/seo/for-therapists-ottawa": "/therapist-seo/ontario/ottawa",
  "/seo/for-therapists-mississauga": "/therapist-seo/ontario/mississauga",
  "/seo/for-therapists-brampton": "/therapist-seo/ontario/brampton",
  "/seo/for-therapists-hamilton": "/therapist-seo/ontario/hamilton",
  "/seo/for-therapists-montreal": "/therapist-seo/quebec/montreal",
  "/seo/for-therapists-quebec-city": "/therapist-seo/quebec/quebec-city",
  "/seo/for-therapists-laval": "/therapist-seo/quebec/laval",
  "/seo/for-therapists-gatineau": "/therapist-seo/quebec/gatineau",
  "/seo/for-therapists-longueuil": "/therapist-seo/quebec/longueuil",
  "/seo/for-therapists-vancouver": "/therapist-seo/british-columbia/vancouver",
  "/seo/for-therapists-surrey": "/therapist-seo/british-columbia/surrey",
  "/seo/for-therapists-burnaby": "/therapist-seo/british-columbia/burnaby",
  "/seo/for-therapists-richmond": "/therapist-seo/british-columbia/richmond",
  "/seo/for-therapists-abbotsford": "/therapist-seo/british-columbia/abbotsford",
  "/seo/for-therapists-calgary": "/therapist-seo/alberta/calgary",
  "/seo/for-therapists-edmonton": "/therapist-seo/alberta/edmonton",
  "/seo/for-therapists-red-deer": "/therapist-seo/alberta/red-deer",
  "/seo/for-therapists-lethbridge": "/therapist-seo/alberta/lethbridge",
  "/seo/for-therapists-airdrie": "/therapist-seo/alberta/airdrie",
  "/seo/for-therapists-saskatoon": "/therapist-seo/saskatchewan/saskatoon",
  "/seo/for-therapists-regina": "/therapist-seo/saskatchewan/regina",
  "/seo/for-therapists-winnipeg": "/therapist-seo/manitoba/winnipeg",
  "/seo/for-therapists-halifax": "/therapist-seo/nova-scotia/halifax",
  "/seo/for-therapists-cape-breton": "/therapist-seo/nova-scotia/cape-breton",
  "/seo/for-therapists-moncton": "/therapist-seo/new-brunswick/moncton",
  "/seo/for-therapists-saint-john": "/therapist-seo/new-brunswick/saint-john",
  "/seo/for-therapists-fredericton": "/therapist-seo/new-brunswick/fredericton",
  "/seo/for-therapists-st-johns": "/therapist-seo/newfoundland-and-labrador/st-johns",
};

function getPublishedRedirects(publishedSet) {
  const redirects = [];
  for (const [source, destination] of Object.entries(LEGACY_REDIRECT_MAP)) {
    if (publishedSet.has(destination)) {
      redirects.push({ source, destination, permanent: true });
    }
  }
  return redirects;
}

function publishedPaths() {
  const { published } = computePublished();
  return published.map((p) => p.page.urlPath);
}

module.exports = {
  SITE,
  DATA_DIR,
  CONTENT_DIR,
  RESERVED_COUNTRY_SLUGS,
  loadVerticals,
  loadProvinces,
  loadCities,
  loadProof,
  getVertical,
  getVerticalBySlug,
  getProvince,
  getCity,
  getProvinceCities,
  getVerticalGeo,
  getProofForVertical,
  getProofByIds,
  isReservedCountrySlug,
  contentPathFor,
  loadContent,
  enumeratePages,
  titleCase,
  countWords,
  uniqueProseText,
  pageTitle,
  pageH1,
  uniqueFieldCount,
  evaluateBasics,
  computePublished,
  buildLinks,
  buildLegacyLinks,
  getLegacyTherapistPages,
  legacyTherapistFiles,
  isLegacyPageLive,
  findOrphanLiveLegacyPages,
  buildBreadcrumbs,
  verifySlugIntegrity,
  isVerticalHref,
  buildPageProps,
  regulationRows,
  buildIndustriesProps,
  LEGACY_REDIRECT_MAP,
  getPublishedRedirects,
  publishedPaths,
  ALLOWED_STATIC_LINKS,
};
