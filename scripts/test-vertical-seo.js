#!/usr/bin/env node
// Dependency-free unit tests for slug generation, gate logic and sitemap
// filtering. Run with: node scripts/test-vertical-seo.js
const assert = require("assert");
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const seo = require("../src/lib/verticalSeo");
const launch = require("../src/lib/launch");
const services = require("../src/lib/services");

// Launch-aware helpers. The vertical gate assertions need every wave released,
// so they evaluate as of a date far past the schedule; the launch tests below
// exercise the scheduling logic itself.
const ALL_AS_OF = "2099-01-01";
const ROOT = path.join(__dirname, "..");
const MS_PER_DAY = 86400000;

function runNode(args, env = {}) {
  return execFileSync(process.execPath, args, {
    cwd: ROOT,
    env: { ...process.env, ...env },
    encoding: "utf8",
    stdio: ["ignore", "pipe", "ignore"],
  }).trim();
}

function datePlus(date, days) {
  return new Date(Date.parse(`${date}T00:00:00Z`) + days * MS_PER_DAY)
    .toISOString()
    .slice(0, 10);
}

let passed = 0;
function test(name, fn) {
  try {
    fn();
    passed++;
    console.log("ok   - " + name);
  } catch (err) {
    console.error("FAIL - " + name);
    console.error("       " + err.message);
    process.exitCode = 1;
  }
}

test("titleCase keeps small words lowercased (mid-string)", () => {
  assert.strictEqual(seo.titleCase("newfoundland and labrador"), "Newfoundland and Labrador");
  assert.strictEqual(seo.titleCase("british-columbia"), "British-Columbia");
});

test("pageTitle formats pillar, province and city", () => {
  const vertical = seo.getVerticalBySlug("therapists");
  const pillar = { kind: "pillar", vertical };
  assert.strictEqual(
    seo.pageTitle(pillar),
    "SEO for Therapists in Canada | Infused Agency"
  );
  const ontario = seo.getProvince("ontario");
  const province = { kind: "province", vertical, province: ontario };
  assert.strictEqual(
    seo.pageTitle(province),
    "Therapist SEO in Ontario | Infused Agency"
  );
  const toronto = seo.getCity("ontario", "toronto");
  const city = { kind: "city", vertical, province: ontario, city: toronto };
  assert.strictEqual(
    seo.pageTitle(city),
    "Therapist SEO in Toronto, ON | Infused Agency"
  );
});

test("slug integrity has no errors", () => {
  const errors = seo.verifySlugIntegrity();
  assert.deepStrictEqual(errors, []);
});

test("gate passes the pillar and every published page has unique fields >= 4", () => {
  const { published } = seo.computePublished({ asOf: ALL_AS_OF });
  assert.ok(published.length > 0, "expected some published pages");
  for (const r of published) {
    assert.ok(r.uniqueWords >= 400, `${r.page.urlPath} words=${r.uniqueWords}`);
    assert.ok(r.uniqueFields >= 4, `${r.page.urlPath} fields=${r.uniqueFields}`);
  }
});

test("no published sibling pair exceeds 0.35 Jaccard", () => {
  const { published } = seo.computePublished({ includeDrafts: true, asOf: ALL_AS_OF });
  const live = published;
  for (let i = 0; i < live.length; i++) {
    for (let j = i + 1; j < live.length; j++) {
      const a = live[i];
      const b = live[j];
      if (a.page.vertical.slug !== b.page.vertical.slug) continue;
      if (a.page.level !== b.page.level) continue;
      let inter = 0;
      for (const s of a.shingles) if (b.shingles.has(s)) inter++;
      const union = a.shingles.size + b.shingles.size - inter;
      const score = union === 0 ? 0 : inter / union;
      assert.ok(
        score <= 0.35,
        `${a.page.urlPath} vs ${b.page.urlPath} = ${score.toFixed(3)}`
      );
    }
  }
});

test("published pages never link to unpublished vertical pages", () => {
  const { published } = seo.computePublished({ asOf: ALL_AS_OF });
  const set = new Set(published.map((r) => r.page.urlPath));
  for (const r of published) {
    for (const l of seo.buildLinks(r.page, set)) {
      if (l.internal && l.href.startsWith("/") && seo.isVerticalHref(l.href)) {
        assert.ok(set.has(l.href), `${r.page.urlPath} -> ${l.href}`);
      }
    }
  }
});

test("draft stubs are excluded from production", () => {
  const { published, drafts } = seo.computePublished({ asOf: ALL_AS_OF });
  const publishedPaths = new Set(published.map((r) => r.page.urlPath));
  for (const d of drafts) {
    assert.ok(!publishedPaths.has(d.page.urlPath), d.page.urlPath);
  }
});

test("redirects are only emitted for published targets", () => {
  const { published } = seo.computePublished({ asOf: ALL_AS_OF });
  const set = new Set(published.map((r) => r.page.urlPath));
  const redirects = seo.getPublishedRedirects(set);
  for (const r of redirects) {
    assert.ok(set.has(r.destination), `${r.source} -> ${r.destination}`);
  }
  assert.ok(
    redirects.some((r) => r.source === "/seo/for-therapists-canada"),
    "expected canada redirect"
  );
});

test("sitemap filtering drops every vertical prefix", () => {
  const prefixes = seo.loadVerticals().map((v) => `/${v.urlSlug}`);
  const sample = prefixes.map((p) => seo.SITE + p);
  const keep = sample.filter(
    (loc) =>
      !prefixes.some((p) => {
        const rel = loc.replace(seo.SITE, "");
        return rel === p || rel.startsWith(p + "/");
      })
  );
  assert.strictEqual(keep.length, 0);
});

test("every live legacy therapist page is linked from a published page", () => {
  const { published } = seo.computePublished({ asOf: ALL_AS_OF });
  const set = new Set(published.map((r) => r.page.urlPath));
  const orphans = seo.findOrphanLiveLegacyPages(published, set);
  assert.deepStrictEqual(orphans, []);
});

test("More cities block drops a city once its redirect is live", () => {
  const { published } = seo.computePublished({ asOf: ALL_AS_OF });
  const set = new Set(published.map((r) => r.page.urlPath));
  const ontario = published.find((r) => r.page.urlPath === "/therapist-seo/ontario");
  const links = seo.buildLegacyLinks(ontario.page, set);
  const hrefs = links.map((l) => l.href);
  assert.ok(
    hrefs.every((h) => h !== "/seo/for-therapists-toronto"),
    "redirected city must not appear in More cities"
  );
});

test("summary length gate is enforced", () => {
  const { published } = seo.computePublished({ asOf: ALL_AS_OF });
  for (const r of published) {
    const len = (r.content.summary || "").length;
    assert.ok(len >= 140 && len <= 155, `${r.page.urlPath} summary=${len}`);
  }
});

test("service summary lengths are 140-155 and unique", () => {
  const { published } = services.computePublishedServices();
  const seen = new Set();
  for (const r of published) {
    const len = r.service.summary.length;
    assert.ok(len >= 140 && len <= 155, `${r.service.url} summary=${len}`);
    assert.ok(!seen.has(r.service.summary), `${r.service.url} duplicate summary`);
    seen.add(r.service.summary);
  }
});

test("service gate passes published pages with 500+ words and 6+ FAQs", () => {
  const { published } = services.computePublishedServices();
  for (const r of published) {
    if (r.service.existing) continue;
    assert.ok(r.uniqueWords >= 500, `${r.service.url} words=${r.uniqueWords}`);
    assert.ok(r.content.faqs.length >= 6, `${r.service.url} faqs=${r.content.faqs.length}`);
    const da = (r.content.directAnswer || "").split(/\s+/).filter(Boolean).length;
    assert.ok(da >= 40 && da <= 60, `${r.service.url} directAnswer=${da}`);
    assert.ok(services.serviceTitle(r.service).length <= 65, `${r.service.url} title too long`);
  }
});

test("no published sibling service pair exceeds 0.30 Jaccard", () => {
  const { published } = services.computePublishedServices({ includeDrafts: true });
  const gated = published.filter((r) => !r.service.existing && r.content);
  for (let i = 0; i < gated.length; i++) {
    for (let j = i + 1; j < gated.length; j++) {
      const a = gated[i];
      const b = gated[j];
      if (a.service.group !== b.service.group) continue;
      let inter = 0;
      for (const s of a.shingles) if (b.shingles.has(s)) inter++;
      const union = a.shingles.size + b.shingles.size - inter;
      const score = union === 0 ? 0 : inter / union;
      assert.ok(
        score <= 0.3,
        `${a.service.url} vs ${b.service.url} = ${score.toFixed(3)}`
      );
    }
  }
});

test("service integrity has no errors", () => {
  assert.deepStrictEqual(services.verifyServiceIntegrity(), []);
});

test("published service pages ride on route files and never link unpublished pages", () => {
  const { published } = services.computePublishedServices();
  const { verticalsPublished } = services.computePublishedServices();
  const serviceSet = new Set(published.map((r) => r.service.url));
  for (const r of published) {
    const related = services.buildServiceRelatedLinks(r.service, serviceSet);
    for (const l of related) assert.ok(serviceSet.has(l.href), `${r.service.url} -> ${l.href}`);
    const industries = services.buildServiceIndustryLinks(r.service, verticalsPublished);
    for (const l of industries) assert.ok(verticalsPublished.has(l.href), `${r.service.url} -> ${l.href}`);
    assert.deepStrictEqual(services.checkServiceLinks(r.service, serviceSet, verticalsPublished), []);
  }
});

// ---------------------------------------------------------------------------
// Launch schedule (wave-based publishing)
// ---------------------------------------------------------------------------

test("wave dates equal startDate + offsetDays", () => {
  const cfg = launch.loadLaunch();
  for (const wave of cfg.waves) {
    assert.strictEqual(
      launch.waveDate(wave),
      datePlus(cfg.startDate, Number(wave.offsetDays) || 0),
      `wave ${wave.wave}`
    );
  }
});

test("wave slugs plus the hold list cover the catalogue exactly once", () => {
  const cfg = launch.loadLaunch();
  const seen = new Set();
  for (const wave of cfg.waves) {
    for (const slug of wave.verticals) {
      assert.ok(!seen.has(slug), `duplicate across waves: ${slug}`);
      seen.add(slug);
    }
  }
  for (const slug of cfg.hold) {
    assert.ok(!seen.has(slug), `duplicate in hold: ${slug}`);
    seen.add(slug);
  }
  const allSlugs = seo.loadVerticals().map((v) => v.slug);
  assert.strictEqual(seen.size, allSlugs.length, "schedule must cover all verticals");
  for (const slug of allSlugs) assert.ok(seen.has(slug), `missing from schedule: ${slug}`);
});

test("a vertical releases on its wave date, not before", () => {
  const cfg = launch.loadLaunch();
  const wave1 = cfg.waves[0];
  const first = wave1.verticals.find((s) => !cfg.hold.includes(s));
  const dayBefore = datePlus(launch.waveDate(wave1), -1);
  assert.ok(!launch.releasedSlugs(dayBefore).has(first), "released too early");
  assert.ok(launch.releasedSlugs(launch.waveDate(wave1)).has(first), "not released on wave date");
});

test("held verticals are never released", () => {
  const cfg = launch.loadLaunch();
  const released = launch.releasedSlugs(ALL_AS_OF);
  for (const slug of cfg.hold) {
    assert.ok(launch.isHeld(slug), `${slug} not held`);
    assert.ok(!released.has(slug), `held vertical released: ${slug}`);
  }
});

test("freezeAtWave hides every wave above it", () => {
  const cfg = launch.loadLaunch();
  const frozen = { ...cfg, freezeAtWave: 1 };
  const released = launch.releasedSlugsAt(frozen, ALL_AS_OF);
  const wave1 = cfg.waves.find((w) => Number(w.wave) === 1).verticals;
  const later = cfg.waves
    .filter((w) => Number(w.wave) > 1)
    .flatMap((w) => w.verticals);
  for (const slug of wave1) {
    if (!cfg.hold.includes(slug)) assert.ok(released.has(slug), `wave 1 hidden: ${slug}`);
  }
  for (const slug of later) assert.ok(!released.has(slug), `frozen wave released: ${slug}`);
});

test("LAUNCH_AS_OF overrides UTC today (fresh process)", () => {
  const overridden = runNode(
    ["-e", "process.stdout.write(require('./src/lib/launch').asOfDate())"],
    { LAUNCH_AS_OF: "2026-11-04" }
  );
  assert.strictEqual(overridden, "2026-11-04");
  const real = runNode(["-e", "process.stdout.write(require('./src/lib/launch').asOfDate())"]);
  assert.match(real, /^\d{4}-\d{2}-\d{2}$/);
});

test("the released set grows with the as-of date", () => {
  const cfg = launch.loadLaunch();
  const w1 = launch.waveDate(cfg.waves.find((w) => Number(w.wave) === 1));
  const w2 = launch.waveDate(cfg.waves.find((w) => Number(w.wave) === 2));
  assert.ok(launch.releasedSlugs(datePlus(w1, -1)).size === 0);
  assert.ok(launch.releasedSlugs(w1).size > 0);
  assert.ok(launch.releasedSlugs(w2).size > launch.releasedSlugs(w1).size);
});

test("should-deploy-today is true only on a wave date", () => {
  const cfg = launch.loadLaunch();
  const w1 = launch.waveDate(cfg.waves.find((w) => Number(w.wave) === 1));
  const w2 = launch.waveDate(cfg.waves.find((w) => Number(w.wave) === 2));
  assert.strictEqual(runNode(["scripts/should-deploy-today.js"], { LAUNCH_AS_OF: w1 }), "true");
  assert.strictEqual(runNode(["scripts/should-deploy-today.js"], { LAUNCH_AS_OF: w2 }), "true");
  assert.strictEqual(
    runNode(["scripts/should-deploy-today.js"], { LAUNCH_AS_OF: datePlus(w1, 1) }),
    "false"
  );
  assert.strictEqual(
    runNode(["scripts/should-deploy-today.js"], { LAUNCH_AS_OF: datePlus(w1, -3) }),
    "false"
  );
});

test("unreleased verticals produce no published pages", () => {
  const cfg = launch.loadLaunch();
  const wave1 = launch.waveDate(cfg.waves.find((w) => Number(w.wave) === 1));
  const result = seo.computePublished({ asOf: wave1 });
  const released = launch.releasedSlugs(wave1);
  for (const r of result.published) {
    assert.ok(released.has(r.page.vertical.slug), `unreleased published: ${r.page.urlPath}`);
  }
  const wave2Slug = cfg.waves.find((w) => Number(w.wave) === 2).verticals[0];
  assert.ok(!result.published.some((r) => r.page.vertical.slug === wave2Slug), "wave 2 leaked");
  for (const slug of cfg.hold) {
    assert.ok(!result.published.some((r) => r.page.vertical.slug === slug), `held leaked: ${slug}`);
  }
});

test("a released vertical with a failing page is skipped, not failed", () => {
  const file = path.join(seo.CONTENT_DIR, "dentists", "ontario.json");
  const original = fs.readFileSync(file);
  try {
    const obj = JSON.parse(original.toString("utf8"));
    obj.summary = "too short";
    fs.writeFileSync(file, JSON.stringify(obj, null, 2));
    seo.resetCaches();
    const result = seo.computePublished({ asOf: ALL_AS_OF, cacheRef: false });
    const skip = result.launchSkips.find((s) => s.slug === "dentists");
    assert.ok(skip, "dentists should be skipped");
    assert.ok(skip.reasons.length > 0, "skip must carry a reason");
    assert.ok(result.skipped.some((s) => s.page.vertical.slug === "dentists"));
    assert.ok(!result.published.some((p) => p.page.vertical.slug === "dentists"));
  } finally {
    fs.writeFileSync(file, original);
    seo.resetCaches();
  }
});

test("gate cache invalidates when a content file changes", () => {
  const file = path.join(seo.CONTENT_DIR, "dentists", "ontario.json");
  const original = fs.readFileSync(file);
  try {
    seo.resetCaches();
    const first = seo.computePublished({ asOf: ALL_AS_OF });
    seo.resetCaches();
    const warm = seo.computePublished({ asOf: ALL_AS_OF });
    assert.strictEqual(warm.timings.source, "cache", "expected a warm cache read");

    // Rewriting the same JSON with different whitespace changes the file bytes
    // (and therefore the cache key) without changing the parsed result.
    const obj = JSON.parse(original.toString("utf8"));
    fs.writeFileSync(file, JSON.stringify(obj, null, 4));
    seo.resetCaches();
    const afterChange = seo.computePublished({ asOf: ALL_AS_OF });
    assert.strictEqual(afterChange.timings.source, "computed", "changed file must miss the cache");
    assert.strictEqual(
      afterChange.published.length,
      first.published.length,
      "output must be unchanged"
    );
  } finally {
    fs.writeFileSync(file, original);
    seo.resetCaches();
  }
});

console.log(`\n${passed} test(s) passed.`);
