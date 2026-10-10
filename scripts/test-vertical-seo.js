#!/usr/bin/env node
// Dependency-free unit tests for slug generation, gate logic and sitemap
// filtering. Run with: node scripts/test-vertical-seo.js
const assert = require("assert");
const fs = require("fs");
const path = require("path");
const seo = require("../src/lib/verticalSeo");

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
  const { published } = seo.computePublished();
  assert.ok(published.length > 0, "expected some published pages");
  for (const r of published) {
    assert.ok(r.uniqueWords >= 400, `${r.page.urlPath} words=${r.uniqueWords}`);
    assert.ok(r.uniqueFields >= 4, `${r.page.urlPath} fields=${r.uniqueFields}`);
  }
});

test("no published sibling pair exceeds 0.35 Jaccard", () => {
  const { published } = seo.computePublished({ includeDrafts: true });
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
  const { published } = seo.computePublished();
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
  const { published, drafts } = seo.computePublished();
  const publishedPaths = new Set(published.map((r) => r.page.urlPath));
  for (const d of drafts) {
    assert.ok(!publishedPaths.has(d.page.urlPath), d.page.urlPath);
  }
});

test("redirects are only emitted for published targets", () => {
  const { published } = seo.computePublished();
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
  const { published } = seo.computePublished();
  const set = new Set(published.map((r) => r.page.urlPath));
  const orphans = seo.findOrphanLiveLegacyPages(published, set);
  assert.deepStrictEqual(orphans, []);
});

test("More cities block drops a city once its redirect is live", () => {
  const { published } = seo.computePublished();
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
  const { published } = seo.computePublished();
  for (const r of published) {
    const len = (r.content.summary || "").length;
    assert.ok(len >= 140 && len <= 155, `${r.page.urlPath} summary=${len}`);
  }
});

console.log(`\n${passed} test(s) passed.`);
