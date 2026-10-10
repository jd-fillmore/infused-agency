# Vertical × Geo SEO build notes

Working branch: `seo-overhaul`. Spec: `docs/vertical-seo-build-spec.md`.

## Follow-up phase checklist

Tracked against `docs/vertical-seo-followups.md`. One commit per phase.

- [x] Phase 1 — Visual bugs (breadcrumbs horizontal, hero cutoff fixed; no copy changes)
- [x] Phase 2 — Legacy pages, seed city lists, counts
- [x] Phase 3 — Baseline audit (`docs/page-audit.md`, document only)
- [x] Phase 4 — City content batch A
- [ ] Phase 5 — City content batch B
- [ ] Phase 6 — Data-driven service pages
- [ ] Phase 7 — "Solutions" mega menu
- [ ] Phase 8 — Final audit and report

## Phase 0 — discovery findings

- **Router / version:** Next.js `13.5.6`, **Pages Router** (`src/pages`). React 18.
- **Language:** JavaScript only. No TypeScript dependency in `package.json`. Every `.ts` in the spec is treated as `.js`. There is no `typecheck` script; `next build` is the compile gate (see below).
- **Package manager:** yarn (yarn.lock committed, package-lock.json is gitignored). No new dependencies were added.
- **Styling / components:** SCSS + Bootstrap 4 via reactstrap. Reusable chrome lives in the repo-root `components/` folder (`Nav/nav.js`, `Footer/footer.js`, `CTA/cta.js`, `innerHero/`, `innerContent/`). Pages import them with `../../../components/...`.
- **Existing geo pages:** individual static files, e.g. `src/pages/seo/beamsville.js` and `src/pages/seo/for-therapists-canada.js`. They are not dynamic. Therapist content is hardcoded in each file (source copy for migration).
- **Sitemap / robots:** `next-sitemap` runs on `postbuild` and writes `public/sitemap.xml` (an index) + `public/sitemap-0.xml`, plus `public/robots.txt` pointing at `/sitemap.xml`. `/sitemap` is also a hand-built HTML page (`src/pages/sitemap.js`).
- **Head/schema:** no shared SEO component and no schema helper; each page writes its own `<Head>`. No breadcrumb component. No `AggregateRating`/`Review` schema helper to reuse (the homepage graph has fabricated review markup, which spec rule 3 forbids reusing).
- **Top-level routes vs `urlSlug`:** no existing top-level route ends in `-seo`, so no collision. Confirmed by `verifySlugIntegrity()`.
- **Collision check for routing:** the only dynamic route previously present was `src/pages/posts/[id].js`; there was no root-level dynamic route. Option A (below) was therefore the least invasive choice.

## Key decisions

1. **Routing = Option A (root dynamic route).** `src/pages/[vertical]/index.js`, `[vertical]/[province].js`, `[vertical]/[province]/[city].js`, each with `getStaticPaths` limited to *published* `urlSlug`s and `fallback: false`. Static routes such as `/seo`, `/work`, `/about` keep priority; unknown paths 404. `usa` is a reserved child slug handled inside `[province].js` (kind `country`). No page is reachable at two URLs.
2. **Content files are `.json`; scripts are plain `.js`.** Spec `.ts` references were treated as `.js`/`.json`.
3. **Proof registry is `data/vertical-seo/proof.json` (not `.js`).** A dynamically-pathed `require()` of a `.js` file was turned into a webpack context by the Next bundler and failed at prerender time. Loading it as JSON through the same `fs`-based loader as every other data file avoids bundler analysis entirely. Only spec-authorised proof is listed, filtered per vertical.
4. **Unique-data-field counting (gate rule 3).** All therapist `regulator`/`advertisingRulesNote` values are `null` per spec §11, so the spec's literal field list would be unreachable. The counter counts genuine structural signals instead: for cities `neighbourhoods`, `majorIndustries`, `population2021`; for all pages `provinceSearchNotes`, verified regulator/note, `localInsight`, `proofRefs`; for provinces `capitalCity`, `languageNote`; for pillars `serviceEmphasis`, `primaryKeywords`. Every published page has ≥ 4.
5. **Similarity (gate rule 4)** is computed on the same "unique prose" text as rule 2, using 5-word shingles (falling back to whole-word sets for very short text). Siblings = same vertical **and** same level. The nearest published pair scores **0.025** (well under 0.35).
6. **Broken links fail the build; gate failures do not.** `scripts/verify-vertical-seo.js` exits `1` on a malformed data file, a slug-integrity error, or an internal vertical link on a published page that does not resolve. Ordinary gate failures only exclude the page (it 404s in production) and are reported in `docs/vertical-seo-report.md`.
7. **Redirects are generated from the published set.** `next.config.js` requires the lib and only emits a 301 when the destination is actually published, so a page that fails the gate can never produce a redirect chain or point at a 404.
8. **ESLint was never configured** (`next lint` previously prompted interactively). Added `.eslintrc.json` extending `next/core-web-vitals`, with the pre-existing-churn rules (`react/no-unescaped-entities`, `jsx-a11y/alt-text`, `@next/next/no-img-element`, etc.) set to `warn`. `yarn lint` now completes with exit code 0.
9. **No `typecheck` script.** The project is JavaScript-only with no `tsconfig.json`; `next build` (which type-checks via SWC where applicable and compiles every page) is the type/compile gate.

## How to add a vertical

1. Add an entry to `data/vertical-seo/verticals.json` (`slug`, `urlSlug` = `{singular}-seo`, `singular`, `plural`, `displayName`, `parentSlug`, `maxDepth`, `primaryKeywords`, `geoScope`, `launchStatus`, `serviceEmphasis`, `buyerJourneyNotes`, `proofRefs`, `defaultFaqs`).
2. Keep `launchStatus: "scaffold"` while drafting. Nothing is routed until it is `"live"`.
3. Add content stubs: `yarn content:scaffold`.
4. Write real `reviewed` content (see below).
5. Set `launchStatus: "live"`, run `yarn verify:seo`, then `yarn build`.
6. Add the new pillar link to the "SEO by industry" block on `/seo` and `/services`.

## How to add a province or city

- **Province:** add to `data/vertical-seo/provinces.json` (`slug`, `name`, `abbr`, `capitalCity`, `languageNote`, `topCitySlugs`, `verified`). Province pages are generated for any province in the vertical's `geoScope`.
- **City:** add to `data/vertical-seo/cities.json` **and** to the province's `topCitySlugs`. City pages are only generated for verticals with `maxDepth: "city"`.
- **Per-vertical-per-province facts:** add `data/vertical-seo/vertical-geo/{vertical}/{province}.json` (`regulator`, `advertisingRulesNote`, `provinceSearchNotes`, `verified`).
- Then `yarn content:scaffold` to create the stub and write reviewed prose.

## How to promote a page `draft` → `reviewed`

1. Fill `directAnswer` (40–60 words), `intro`, `localInsight`, `localChecklist[]`, `faqs[]` (city pages need ≥ 6, with ≥ 3 `geoSpecific: true`), and `summary` (140–155 chars).
2. Set `"status": "reviewed"` and update the `updated` date (this becomes the sitemap `lastmod`).
3. Run `yarn verify:seo`. If the page fails, it is listed in `docs/vertical-seo-report.md` with the failing rule; it stays excluded (404) until it passes.
4. `yarn build`. The published page, its sitemap entry, and (if it has a legacy equivalent) its 301 are generated automatically.

## Verification results

- `yarn verify:seo` — enumerated 150, **published 33**, draft-excluded 29, gate-failed 0, slug errors 0, broken links 0, live legacy orphans 0.
- `yarn test:seo` — 12/12 unit tests pass (slug generation, gate logic, link resolution, draft exclusion, redirect safety, sitemap filtering, legacy orphan linking, More cities redirect drop, summary gate).
- `yarn lint` — exit 0 (warnings only, all pre-existing).
- `yarn build` — success. 33 vertical pages prerendered.
- Live checks: published URLs return 200 with one H1, one self-referencing canonical, unique title/meta, and one valid JSON-LD `@graph` (BreadcrumbList + Service + FAQPage). `/seo/for-therapists-*` legacy URLs 301/308 to the new ones. Unknown or draft URLs under a `urlSlug` return 404. `sitemap.xml` is an index of `sitemap-0.xml` + `sitemap-vertical-therapists.xml` (33 URLs); no vertical path leaks into `sitemap-0.xml`.

## Follow-up Phase 1 — visual bugs

No copy was changed. Reused the existing global SCSS/: no new dependency.

### 1. Breadcrumbs

- **Cause.** The component rendered a bare `<ol className="breadcrumbs">` / `<li>` and no `.breadcrumbs` rule existed anywhere in the stylesheet, so the browser's default `ol`/`li` styling applied: a vertical, bulleted list. The `›` was also emitted as literal text inside each `<li>`.
- **Fix.** Added a `.breadcrumbs` rule (`components/verticalSeo/vertical-seo.scss`, imported globally in `_app.js`): `display:flex; flex-wrap:wrap`, `list-style:none`, `padding-left:0`, small (13px) type. Separators are now CSS `li + li::before { content:"›" }` so they cannot wrap onto their own line. The current page stays a `<span aria-current="page">` (text, not a link). The literal separator text was removed from the JSX. The `BreadcrumbList` JSON-LD in `src/lib/verticalSeoSchema.js` was not touched.
- This `.breadcrumbs` class is the shared horizontal component the later service pages (Phase 6) will reuse.

### 2. Hero cutoff

- **Cause.** Every page used `<section className="seo-city-hero">`, but the `.seo-city-hero` rule (`components/Home/Hero/hero.scss`) only set the H1 size — it set **no top padding and no background**, unlike every other hero on the site (`.main-hero`, `.hero`, `.inner-hero`, and the legacy per-city classes all pad the top by ~180–220px). The header is `position:fixed` (`.fixed-top` → TopBar + Navbar, ~150px tall), so the H1, direct-answer paragraph and CTA sat underneath it and were clipped on every template (pillar, province, city, usa). There was no `overflow:hidden`, fixed height, `100vh` sizing or colour-on-colour problem.
- **Fix.** Gave `.seo-city-hero` the site's standard hero treatment: the dark gradient background and `padding: 210px 0 120px` (desktop) / `120px 0 60px` (≤992px), matching `.inner-hero`. H1/paragraph spacing also normalised. Verified the rendered static HTML contains `class="seo-city-hero"` and the CSS chunk includes the new padding at all three widths.

## Follow-up Phase 2 — legacy pages, seed city lists, counts

### Seed city lists

- `data/vertical-seo/cities.json`: `st-albert` → replaced by `airdrie` (in `alberta`, name "Airdrie"); `sydney` → replaced by `cape-breton` (in `nova-scotia`, name "Cape Breton"). The draft stubs were renamed with `git mv` (`alberta/st-albert.json` → `airdrie.json`, `nova-scotia/sydney.json` → `cape-breton.json`) so the moves — not deletes/adds — are what get committed.
- `data/vertical-seo/provinces.json`: `alberta.topCitySlugs` → `["calgary","edmonton","red-deer","lethbridge","airdrie"]`; `nova-scotia.topCitySlugs` → `["halifax","cape-breton","truro","new-glasgow","kentville"]`.
- Copy sweep for the survivors: `content/verticals/therapists/alberta.json` (3 mentions of St. Albert → Airdrie), `content/verticals/therapists/nova-scotia.json` (intro, one FAQ answer and the `summary` — Sydney → Cape Breton), `vertical-geo/therapists/nova-scotia.json` (`provinceSearchNotes` — "Truro and Sydney" → "Truro and Cape Breton").

### Legacy orphan prevention

- **True legacy page count is 46**, not the 45 the follow-up doc guessed (`docs/legacy-redirect-map.md` documents the reconciliation). `Get-ChildItem src/pages/seo/for-therapists-*.js` returns 46 files. It splits into **16 with an active redirect** to a published replacement (canada, usa, 10 provinces, 5 Ontario cities) and **30 that stay live** (24 Canadian cities not yet replaced + the 6 US city pages albany, buffalo, huntington, new-york, rochester, syracuse). 16 + 30 = 46.
- **Mechanism (data-driven, so it disappears automatically when a redirect activates):** `src/lib/verticalSeo.js` now derives the live legacy set as *legacy pages whose `LEGACY_REDIRECT_MAP` target is missing or not published*.
  - `legacyTherapistFiles()` — enumerates every `src/pages/seo/for-therapists-*.js` file.
  - `getLegacyTherapistPages()` — classifies each legacy file as a Canadian city (via `cities.json`), a US city (hardcoded `US_LEGACY_CITIES` list of the 6), or unknown.
  - `buildLegacyLinks(page, publishedSet)` — "More cities" links: a province page lists its live legacy cities (`{Name}, {ProvAbbr}` anchor text, sorted by name); the pillar lists the live US cities (`{Name}` only, to avoid exact-match stuffing). Canadian legacy city anchors use `{Name}, {ProvAbbr}` for the same reason. The country/US pages and city pages render no block.
  - `findOrphanLiveLegacyPages(publishedRecords, publishedSet)` — union of all `buildLegacyLinks` targets; any **live** legacy page (including unknown/unregistered ones) that isn't in the union is an orphan.
- **Rendering.** `VerticalSeoPage.js` renders a "More cities" `<section>` (with Next `<Link>`s — crawlable anchors) after the city index and before `<Proof>`, only when `page.legacyCities` is non-empty. Confirmed in the prerendered HTML: British Columbia lists its 5 live legacy cities (Abbotsford, Burnaby, Richmond, Surrey, Vancouver); Ontario renders no block (all 5 of its cities are published, all redirected); the pillar lists the US cities.
- **Gate.** `yarn verify:seo` now reports `Live legacy orphans: N` and **exits 1** if any live legacy page is unlinked (goes into `docs/vertical-seo-report.md` under "no crawlable internal link"). Current result: 0 orphans.
- **Tests.** Two new `yarn test:seo` cases: (a) every live legacy page is linked from a published page; (b) a redirected city (toronto) is dropped from the More cities block. 12/12 pass.

### Assumptions recorded

- **US city pages get no province page yet** — no US therapeutic province content exists, so the pillar hosts the "More cities" block for the 6 US legacy cities.
- **Only city legacy pages need linking.** The province/country/pillar legacy pages are all currently redirected to a published page (so not "live"). The orphan check is written against **every** live legacy file on disk, so any non-city legacy page would also fail the build if it were ever left live without a link — fail-loud by design; the 24 Canadian + 6 US cities are the only legitimately-live legacy pages today.
- **Anchor text uses `{Name}, {ProvAbbr}`** (Canadian) and `{Name}` (US) deliberately — no exact-match URL-anchor stuffing against the legacy pages.
- **`docs/content-backlog.md` is generated** by `scripts/content-status.js`; regenerated via `yarn content:status` (therapists reviewed=17, draft=45).

### Verification

- `yarn verify:seo` — 150 enumerated, 17 published, 0 gate-failed, 0 slug errors, 0 broken links, **0 live legacy orphans**.
- `yarn test:seo` — 12/12 pass.
- `yarn lint` — exit 0 (pre-existing warnings only).
- `yarn build` — success (needed a clean `.next` first; the first build hit a stale-cache `PageNotFoundError` on `/niagara-web-design` and cleared it the same way a normal `rm -rf .next` does). 17 vertical pages prerendered; the More cities block appears on the published province pages. Restored the `public/sitemap-0.xml` build-timestamp noise before committing.

## Follow-up Phase 3 — baseline audit (`docs/page-audit.md`)

Document only; no code or content changed.

- **Method.** A throwaway Node script walked the prerendered `.next` HTML for all 17 published pages and, per page, recorded: kind, sections rendered, unique visible words, out-links, in-links (from the vertical cluster and from site chrome `/`, `/sitemap`, `/seo`, `/services`, `/work`), city/province/legacy out-link counts and FAQ count. Section presence came from `buildPageProps` (data, not heuristics).
- **Findings.** 0 orphan live legacy pages. No published sibling pair exceeds 0.30 (nearest ≈ 0.03). No mostly-empty sections. Only structural gaps: **9 of 10 province pages have zero linked city pages** (only Ontario, with its 5 published cities, links any) and **the `/therapist-seo/usa` country page has no in-links inside the vertical cluster** — it is only linked from `/` and `/sitemap` (the pillar's `provincesIndex` lists provinces only, and the `usa` child slug isn't a province).
- **Proposed fixes (deferred, not implemented):** publish the Phase 4–5 city batches (closes the zero-city flags) and link the USA page from the pillar index (Phase 8 baseline item).
- **Assumption recorded:** word counts include nav/footer chrome, so they are a conservative floor; page-specific copy is smaller. FAQs: city pages ≥ 6, other pages 5–8; no page is below the gate minimum.
- **Commit note:** `page-audit.md` is generated data captured at this point in time; Phase 8 will re-run the audit and overwrite it per the follow-up spec.

## Follow-up fixes (after Phase 3, before Phases 4–8)

Requested before continuing to Phases 4–8.

### Charlottetown, PEI city page

- `prince-edward-island` had a province page but no published city page. `charlottetown` was already seeded in `cities.json` and its stub already sat in `content/verticals/therapists/prince-edward-island/`, so no routing or data-model change was needed — only real city data + reviewed copy.
- `cities.json`: filled `charlottetown` with real `neighbourhoods` (Downtown Charlottetown, Brighton, Parkdale, Spring Park, Sherwood, Hillsborough Park, East Royalty, West Royalty) and `majorIndustries` (public administration and government services, healthcare, education, tourism and hospitality, retail trade). `population2021` left `null`, matching the published Ontario cities.
- `content/verticals/therapists/prince-edward-island/charlottetown.json`: promoted to `reviewed` with directAnswer (43 words), intro, localInsight, 6-item localChecklist, 6 FAQs (4 `geoSpecific`), and a 147-char `summary` (gate 140–155).
- No regulator claims: PEI's `vertical-geo` file has `regulator: null`, so the "Provincial rules" section does not render on the city page (correct, not an omission).
- Published count is now **18** (pillar, usa, 10 provinces, 6 city pages). PEI province page now links its Charlottetown city page, so the audit's "zero city links" set dropped from 9 provinces to 8 (Ontario and PEI covered).
- `docs/page-audit.md` regenerated to reflect 18 pages.

### Centered city heroes

- The shared `.seo-city-hero` section already carried Bootstrap's `text-center` class on the new pages, but the **live legacy city pages** (`.toronto`, `.vancouver`, etc.) render the same class without `text-center`, so their hero text was left-aligned.
- Fix: `text-align: center` added to `.seo-city-hero` in `components/Home/Hero/hero.scss`. This centers the H1, tagline, direct-answer paragraph and CTA on **every** city hero — new and legacy — without touching per-page markup. Confirmed the built CSS contains the rule and the legacy province/city heroes inherit it.

## Follow-up Phase 4 — city content batch A (QC, BC, AB)

Published **15 city pages** and activated their legacy redirects. One commit.

### Pages written (all `status: reviewed`)

- **Quebec:** montreal, quebec-city, laval, gatineau, longueuil
- **British Columbia:** vancouver, surrey, burnaby, richmond, abbotsford
- **Alberta:** calgary, edmonton, red-deer, lethbridge, airdrie

Each page is based on its legacy page's local copy (`src/pages/seo/for-therapists-*.js`), rewritten and extended with the city's actual search-market reality (real neighbourhoods, institutions, industries and commuting patterns). All pass the gate: unique prose ≥ 400 words (intro + localInsight + checklist + geoSpecific FAQ answers), ≥ 6 FAQs with ≥ 4 `geoSpecific`, `summary` 140–155 chars, `directAnswer` 40–60 words, `proofRefs: ["brandi-may-psychotherapy"]`.

### Cities data

- `cities.json`: `neighbourhoods` (from the legacy About copy) and `majorIndustries` filled for all 15. `population2021` stays `null`, matching the published Ontario cities.

### Quebec French-language note

- All five Quebec city pages weave in the bilingual reality and the Charter of the French Language (Bill 96): a geoSpecific FAQ on French-language web presence plus a reflection of it in `localInsight`. `vertical-geo/therapists/quebec.json` keeps `regulator: null`, so the "Provincial rules" section does **not** render (correct — the note is editorial content, not a legal claim).

### Airdrie copy defect fixed

- The legacy Airdrie About paragraph was a **verbatim copy of the Lethbridge one** (Lethbridge landmarks and a non-existent "University of Airdrie"). The new page was rewritten from scratch with Airdrie-accurate communities (Cooper's Crossing, Windsong, Chinook Winds, Ravenswood, King's Heights, Bayview) and its real commuter-suburb positioning.

### Redirects and live-legacy arithmetic

- Added 15 city sources to `LEGACY_REDIRECT_MAP`. Active redirects: **16 → 31**. Live legacy pages: **30 → 15** (the 9 remaining Canadian cities + the 6 US cities). The Quebec, BC and Alberta province pages' "More cities" blocks are now empty (each city dropped automatically the moment its redirect activated); Ontario's block was already empty. `yarn verify:seo` reports **0 live legacy orphans**.

### Similarity (follow-up reporting threshold 0.30)

- Nearest published sibling pair after Phase 4: **0.099** (`red-deer <-> abbotsford`). Nothing exceeded 0.30, so no rewrites were needed. The gate (≤ 0.35) is enforced by `verify:seo`.

### Verification

- `yarn verify:seo` — 150 enumerated, **33 published**, 29 draft-excluded, 0 gate-failed, 0 slug errors, 0 broken links, **0 live legacy orphans**.
- `yarn test:seo` — 12/12 pass.
- `yarn lint` — exit 0 (pre-existing warnings only).
- `yarn build` — success; 33 vertical pages prerendered; `sitemap-vertical-therapists.xml` now lists 33 URLs. Restored the `public/sitemap-0.xml` build-timestamp noise before committing.

### Assumptions recorded

- **`population2021` stays `null`** for new cities, consistent with the published Ontario cities; the unique-fields gate is satisfied by neighbourhoods + majorIndustries + provinceSearchNotes + localInsight + proofRefs.
- **Quebec regulation is intentionally absent** (regulator null in geo data); the Bill 96 note lives in city copy only.
- **Migrated legacy URLs become 301s**, never deletes: `/seo/for-therapists-{city}` → `/therapist-seo/{province}/{city}` preserves any existing backlinks/rankings. `docs/legacy-redirect-map.md` reconciles the 31/15 split.
