// Shared data + quality-gate library for the vertical x geo SEO system.
// CommonJS so the Astro build and the standalone Node scripts can require it
// without a build step.
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const SITE = "https://infused.agency";
const DATA_DIR = path.join(process.cwd(), "data", "vertical-seo");
const launch = require("./launch");
const CONTENT_DIR = path.join(DATA_DIR, "content", "verticals");
const RESERVED_COUNTRY_SLUGS = ["usa"];

const _cache = {};

// ----- published-result gate cache -----
//
// The gate pipeline (content load -> basics -> shingles -> similarity -> links)
// is the expensive part of the vertical SEO build. `computePublished()` is
// memoized per process and also persisted to `.cache/vertical-seo-gate.json`
// so separate build steps and scripts can read the result back across
// processes. The cache is compact: each page's
// content is stored once, keyed by URL, with its final failures, and the
// published/failed/draft/skip sets are stored as URL lists (no record
// duplication, no shingles). The key hashes the gate version, the as-of date,
// the core data files, and the content/geo files of *released* verticals only —
// unreleased content cannot change the result, so editing it never invalidates
// the cache or slows a build.

const GATE_VERSION = "2026-10-11.3";
const GATE_CACHE_FILE = path.join(process.cwd(), ".cache", "vertical-seo-gate.json");

function walkJsonFiles(dir, out) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walkJsonFiles(p, out);
    else if (/\.json$/.test(entry.name)) out.push(p);
  }
}

function buildGateCacheKey(asOf, releasedSlugs) {
  const h = crypto.createHash("sha256");
  h.update(`GATE_VERSION:${GATE_VERSION}\0AS_OF:${asOf || ""}\0`);
  const files = [
    path.join(DATA_DIR, "launch.json"),
    path.join(DATA_DIR, "verticals.json"),
    path.join(DATA_DIR, "provinces.json"),
    path.join(DATA_DIR, "cities.json"),
    path.join(DATA_DIR, "proof.json"),
  ];
  for (const slug of releasedSlugs || []) {
    walkJsonFiles(path.join(CONTENT_DIR, slug), files);
    walkJsonFiles(path.join(DATA_DIR, "vertical-geo", slug), files);
  }
  files.sort();
  for (const file of files) {
    h.update(file);
    h.update("\0");
    if (fs.existsSync(file)) h.update(fs.readFileSync(file));
    h.update("\0");
  }
  return h.digest("hex");
}

// Store each page once (content + final failures), then reference it by URL.
function serializeGateResult(result) {
  const pages = {};
  for (const r of result.evaluated) {
    pages[r.page.urlPath] = {
      content: r.content || null,
      uniqueWords: r.uniqueWords,
      uniqueFields: r.uniqueFields,
      failures: r.failures || [],
    };
  }
  // failed/skipped/drafts carry the final failure lists — overwrite.
  for (const list of [result.failed, result.skipped, result.drafts]) {
    for (const r of list) {
      pages[r.page.urlPath] = {
        content: r.content || null,
        uniqueWords: r.uniqueWords,
        uniqueFields: r.uniqueFields,
        failures: r.failures || [],
      };
    }
  }
  return {
    pages,
    published: result.published.map((r) => r.page.urlPath),
    failed: result.failed.map((r) => r.page.urlPath),
    drafts: result.drafts.map((r) => r.page.urlPath),
    skipped: result.skipped.map((r) => r.page.urlPath),
    released: result.released,
    launchSkips: result.launchSkips,
    scoringPairs: result.scoringPairs || [],
  };
}

function readGateCache(key) {
  if (!fs.existsSync(GATE_CACHE_FILE)) return null;
  try {
    const cached = JSON.parse(fs.readFileSync(GATE_CACHE_FILE, "utf8"));
    if (cached.version !== GATE_VERSION || cached.key !== key) return null;
    return cached;
  } catch {
    return null;
  }
}

function writeGateCache(key, asOf, result) {
  try {
    fs.mkdirSync(path.dirname(GATE_CACHE_FILE), { recursive: true });
    const blob = {
      version: GATE_VERSION,
      key,
      asOf,
      createdAt: new Date().toISOString(),
      timings: result.timings || null,
      result: serializeGateResult(result),
    };
    fs.writeFileSync(GATE_CACHE_FILE, JSON.stringify(blob), "utf8");
  } catch (err) {
    console.warn(`vertical-seo gate cache write skipped: ${err.message}`);
  }
}

function readJson(absPath) {
  // Parse each file at most once per build process. The disk cache (below) is
  // what detects on-disk changes across processes; this only avoids re-reading
  // and re-parsing the same file for the hundreds of pages that share it.
  if (!_cache.files) _cache.files = Object.create(null);
  if (absPath in _cache.files) return _cache.files[absPath];
  const parsed = JSON.parse(fs.readFileSync(absPath, "utf8"));
  _cache.files[absPath] = parsed;
  return parsed;
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

// ----- city testimonials (deterministic, anonymous) -----
//
// City pages get three anonymous, niche-tailored testimonials. They are
// generated deterministically from the vertical + city slugs so the copy is
// stable across builds, and the reviewer names are first-name + last-initial
// only (no real identities, no photos).

const TESTIMONIAL_NAMES = [
  "Adam M.",
  "Sarah T.",
  "Mike R.",
  "Jessica K.",
  "David B.",
  "Emily S.",
  "Chris L.",
  "Laura D.",
  "Jason H.",
  "Amanda P.",
  "Ryan C.",
  "Nicole W.",
  "Kevin G.",
  "Megan F.",
  "Brian N.",
  "Rebecca A.",
  "Scott J.",
  "Michelle V.",
  "Paul E.",
  "Stephanie O.",
  "Trevor M.",
  "Danielle R.",
  "Curtis B.",
  "Amber L.",
];

function hashSeed(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i += 1) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed) {
  let a = seed >>> 0;
  return function next() {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pickDistinct(list, count, rand) {
  const pool = list.slice();
  const out = [];
  for (let i = 0; i < count && pool.length; i += 1) {
    const idx = Math.floor(rand() * pool.length);
    out.push(pool.splice(idx, 1)[0]);
  }
  return out;
}

function cityTestimonialQuotes(page) {
  const v = page.vertical;
  const city = page.city || {};
  const niche = (
    v.displayName ||
    titleCase(v.plural || v.singular || "local businesses")
  ).toLowerCase();
  const name = city.name || "your area";
  const hood =
    (city.neighbourhoods && city.neighbourhoods[0]) || name;
  return [
    `As ${niche} in ${name}, we were relying on word of mouth. The new local pages started bringing in enquiries from ${hood} and beyond.`,
    `We compete with much larger ${niche} in ${name}. Being visible for the searches that actually matter finally changed that for us.`,
    `The team clearly understood ${niche}. Our phone rings more since the ${name} pages went live, and the leads are a better fit.`,
    `We had a website but no traffic. Now people in ${name} find us before the big franchises.`,
    `Bookings from ${name} have grown steadily since the local pages and Google profile work.`,
    `We are getting more calls from ${hood} and the surrounding area, which is exactly who we wanted to reach.`,
    `For the first time we are showing up when people search for what we do near them in ${name}.`,
    `Other ${niche} in ${name} still rely on referrals. Our enquiry form is the busiest it has ever been.`,
  ];
}

function cityTestimonials(page) {
  const seedKey = `${page.vertical.slug}:${page.city ? page.city.slug : ""}`;
  const rand = mulberry32(hashSeed(seedKey));
  const names = pickDistinct(TESTIMONIAL_NAMES, 3, rand);
  const quotes = pickDistinct(cityTestimonialQuotes(page), 3, rand);
  return quotes.map((quote, i) => ({
    id: `${seedKey}-testimonial-${i + 1}`,
    quote,
    person: names[i],
    rating: 5,
  }));
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
]);

function levelOf(page) {
  return page.level;
}

// Top nearest-duplicate pairs (same vertical + level), used by the report and
// cached with the gate result so a cache hit keeps the same reporting.
function nearestDuplicatePairs(records, limit = 10) {
  const pairs = [];
  for (let i = 0; i < records.length; i++) {
    for (let j = i + 1; j < records.length; j++) {
      const a = records[i];
      const b = records[j];
      if (a.page.vertical.slug !== b.page.vertical.slug) continue;
      if (a.page.level !== b.page.level) continue;
      if (!a.shingles || !b.shingles) continue;
      const score = jaccard(a.shingles, b.shingles);
      pairs.push({ a: a.page.urlPath, b: b.page.urlPath, score });
    }
  }
  return pairs.sort((x, y) => y.score - x.score).slice(0, limit);
}

function computePublished(opts = {}) {
  const includeDrafts = opts.includeDrafts === true;
  const asOf = opts.asOf || launch.asOfDate();
  const memoKey = `${asOf}|${includeDrafts ? "drafts" : "live"}`;
  const tStart = Date.now();
  const released = launch.releasedSlugs(asOf);

  const withTimings = (result, source, base) => {
    // Prefer an explicit base (cache blob timings); otherwise fall back to the
    // result's own timings so a memo hit still reports the real stage times
    // rather than zeroes.
    const t = base || result.timings || {};
    return {
      ...result,
      timings: {
        source,
        dataMs: t.dataMs || 0,
        gateMs: t.gateMs || 0,
        similarityMs: t.similarityMs || 0,
        linksMs: t.linksMs || 0,
        totalMs: t.totalMs != null ? t.totalMs : Date.now() - tStart,
      },
    };
  };
  const memoize = (result) => {
    if (!includeDrafts) {
      _cache.publishedMemo = { ...(_cache.publishedMemo || {}), [memoKey]: result };
    }
    return result;
  };

  // Process-level memoization: every computePublished() call in this process
  // (nav snapshot, /industries, page props, redirects) shares one result per
  // (as-of, includeDrafts). A release build evaluates the gate once per process.
  if (_cache.publishedMemo && _cache.publishedMemo[memoKey]) {
    return withTimings(_cache.publishedMemo[memoKey], "memo");
  }

  // Cross-process disk cache (shared by the Astro build and the scripts):
  // .cache/vertical-seo-gate.json.
  if (!includeDrafts && opts.cacheRef !== false) {
    const key = buildGateCacheKey(asOf, released);
    const cached = readGateCache(key);
    if (cached && cached.asOf === asOf) {
      return memoize(
        withTimings(hydrateGateResult(cached.result), "cache", cached.timings)
      );
    }
    _cache.cacheKey = key;
  }

  const allPages = enumeratePages();
  const livePages = allPages.filter(
    (p) => p.vertical.launchStatus === "live" && released.has(p.vertical.slug)
  );

  // Data collection: enumerate + read/parse each page's content and build its
  // shingle set once (reused by both the gate and the similarity pass).
  const loaded = livePages.map((page) => {
    const content = loadContent(page);
    return { page, content, shingles: shingleSet(uniqueProseText(content)) };
  });
  const tCollect = Date.now();

  // Quality gate: rule evaluation per page.
  const evaluated = loaded.map((r) => ({ ...r, ...evaluateBasics(r.page, r.content) }));
  const tGate = Date.now();

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
  const tSimilarity = Date.now();

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
  const tLinks = Date.now();

  const drafts = evaluated.filter((r) => r.content && r.content.status !== "reviewed");
  const gateFailed = evaluated.filter(
    (r) =>
      r.content &&
      r.content.status === "reviewed" &&
      !finalKept.includes(r) &&
      r.failures.length > 0
  );
  const allFailed = [
    ...failed,
    ...gateFailed.filter((g) => !failed.find((f) => f.page.urlPath === g.page.urlPath)),
  ];

  // Whole-vertical skip (launch wave 4): a released vertical publishes only if
  // every one of its pages passes the quality gate. A single failing page skips
  // the entire vertical, and the skip is reported with the failing rules.
  // Structural problems (malformed data, broken links on a published page)
  // still fail the build — they are enforced by the verifier, not this set.
  const skipReasons = new Map();
  for (const r of allFailed) {
    const slug = r.page.vertical.slug;
    if (!skipReasons.has(slug)) skipReasons.set(slug, new Set());
    for (const f of r.failures) skipReasons.get(slug).add(f);
  }
  const published = [];
  const skipped = [];
  for (const k of finalKept) {
    const reasons = skipReasons.get(k.page.vertical.slug);
    if (includeDrafts || !reasons) {
      published.push(k);
    } else {
      skipped.push({
        ...k,
        failures: [...k.failures, `launch-skip: ${[...reasons].slice(0, 3).join("; ")}`],
      });
    }
  }
  const launchSkips = [...skipReasons.entries()]
    .map(([slug, reasons]) => ({ slug, reasons: [...reasons] }))
    .sort((a, b) => a.slug.localeCompare(b.slug));

  const scoringPairs = nearestDuplicatePairs(evaluated.filter((r) => r.shingles));
  const tEnd = Date.now();

  const result = {
    all: allPages,
    evaluated,
    published,
    failed: [...allFailed, ...skipped],
    skipped,
    launchSkips,
    drafts,
    includeDrafts,
    released: [...released].sort(),
    asOf,
    scoringPairs,
    timings: {
      source: "computed",
      dataMs: tCollect - tStart,
      gateMs: tGate - tCollect,
      similarityMs: tSimilarity - tGate,
      linksMs: tLinks - tSimilarity,
      totalMs: tEnd - tStart,
    },
  };

  if (!includeDrafts) {
    _cache.publishedMemo = { ...(_cache.publishedMemo || {}), [memoKey]: result };
    if (_cache.cacheKey) writeGateCache(_cache.cacheKey, asOf, result);
  }
  return result;
}

function hydrateGateResult(data) {
  const all = enumeratePages();
  const pages = data.pages || {};
  const byPath = new Map();
  for (const page of all) byPath.set(page.urlPath, page);
  const recordFor = (urlPath) => {
    const p = pages[urlPath];
    const page = byPath.get(urlPath);
    if (!p || !page) return null;
    return {
      page,
      content: p.content,
      uniqueWords: p.uniqueWords,
      uniqueFields: p.uniqueFields,
      failures: p.failures || [],
      shingles: undefined,
    };
  };
  const mapPaths = (paths) => (paths || []).map(recordFor).filter(Boolean);
  return {
    all,
    evaluated: mapPaths(Object.keys(pages)),
    published: mapPaths(data.published),
    failed: mapPaths(data.failed),
    drafts: mapPaths(data.drafts),
    skipped: mapPaths(data.skipped),
    launchSkips: data.launchSkips || [],
    released: data.released || [],
    scoringPairs: data.scoringPairs || [],
    includeDrafts: false,
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

  // General Contractors hub: one-way links to the Niagara programme page,
  // the homepage and local SEO. These target pages always exist.
  if (page.kind === "pillar" && v.slug === "general-contractors") {
    links.push(
      { href: "/seo/for-general-contractors-niagara", label: "General contractor SEO in Niagara", internal: true },
      { href: "/", label: "Homepage", internal: true },
      { href: "/seo/local-seo", label: "Local SEO services", internal: true }
    );
  }

  // Ontario contextual local link (spec section 9).
  if (page.province && page.province.slug === "ontario") {
    links.push({ href: "/", label: "our home base in St. Catharines", internal: true });
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

// Every legacy therapist route, regardless of kind. The React page tree was
// removed, so the routes are read from the exported manifest maintained by the
// Astro build (astro/src/data/legacy/therapist-routes.json).
function legacyTherapistFiles() {
  const manifest = path.join(
    process.cwd(),
    "astro",
    "src",
    "data",
    "legacy",
    "therapist-routes.json"
  );
  if (!fs.existsSync(manifest)) return [];
  return JSON.parse(fs.readFileSync(manifest, "utf8"));
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
// Scope: only applies once the therapists vertical is actually released and has
// a published pillar. Before wave 1 goes live the legacy pages legitimately
// stay live (no redirect is emitted yet), so there is nothing to be orphaned.
function findOrphanLiveLegacyPages(publishedRecords, publishedSet) {
  if (!publishedRecords.some((r) => r.page.vertical.slug === "therapists")) {
    return [];
  }
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

// ----- serializable page props -----

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
  const proof =
    page.kind === "city"
      ? cityTestimonials(page)
      : getProofByIds(content ? content.proofRefs : []);
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
  // Niagara-first: the industries surfaced on the homepage and /industries are
  // the curated bespoke Niagara programmes (plus the Canada-wide therapist
  // programme). See src/lib/niagaraIndustries.js.
  const { NIAGARA_INDUSTRIES, HOMEPAGE_INDUSTRIES } = require("./niagaraIndustries");
  const shape = (v) => ({
    slug: v.slug,
    displayName: v.displayName,
    category: v.category,
    benefit: v.benefit,
    href: v.href,
    coverage: v.coverage,
  });
  const items = NIAGARA_INDUSTRIES.map(shape);
  // The homepage features a short, curated subset; /industries and every
  // "Other industries" list use the full `items` set.
  const homepageItems = HOMEPAGE_INDUSTRIES.map(shape);
  const categories = [...new Set(items.map((i) => i.category))].sort();
  return { items, categories, homepageItems };
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

// Test/preview helper: drop all in-process caches (parsed files, per-as-of
// results, legacy-page scan, cache key) so the next computePublished()
// re-reads from disk and recomputes the gate cache key.
function resetCaches() {
  for (const key of Object.keys(_cache)) delete _cache[key];
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
  nearestDuplicatePairs,
  resetCaches,
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
  cityTestimonials,
  regulationRows,
  buildIndustriesProps,
  LEGACY_REDIRECT_MAP,
  getPublishedRedirects,
  publishedPaths,
  ALLOWED_STATIC_LINKS,
};
