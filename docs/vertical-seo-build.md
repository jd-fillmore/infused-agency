# Vertical × Geo SEO build notes

Working branch: `seo-overhaul`. Spec: `docs/vertical-seo-build-spec.md`.

## Follow-up phase checklist

Tracked against `docs/vertical-seo-followups.md`. One commit per phase.

- [x] Phase 1 — Visual bugs (breadcrumbs horizontal, hero cutoff fixed; no copy changes)
- [x] Phase 2 — Legacy pages, seed city lists, counts
- [x] Phase 3 — Baseline audit (`docs/page-audit.md`, document only)
- [x] Phase 4 — City content batch A
- [x] Phase 5 — City content batch B
- [x] Phase 6 — Data-driven service pages (6A and 6B committed)
- [x] Phase 7 — "Solutions" mega menu
- [x] Phase 8 — Schema audit and completion
- [x] Phase 9 — Final audit and report

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

- `yarn verify:seo` — enumerated 150, **published 42**, draft-excluded 20, gate-failed 0, slug errors 0, broken links 0, live legacy orphans 0.
- `yarn test:seo` — 12/12 unit tests pass (slug generation, gate logic, link resolution, draft exclusion, redirect safety, sitemap filtering, legacy orphan linking, More cities redirect drop, summary gate).
- `yarn lint` — exit 0 (warnings only, all pre-existing).
- `yarn build` — success. 42 vertical pages prerendered.
- Live checks: published URLs return 200 with one H1, one self-referencing canonical, unique title/meta, and one valid JSON-LD `@graph` (BreadcrumbList + Service + FAQPage). `/seo/for-therapists-*` legacy URLs 301/308 to the new ones. Unknown or draft URLs under a `urlSlug` return 404. `sitemap.xml` is an index of `sitemap-0.xml` + `sitemap-vertical-therapists.xml` (42 URLs); no vertical path leaks into `sitemap-0.xml`.

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

## Follow-up Phase 5 — city content batch B (SK, MB, NS, NB, NL)

Published **9 city pages** and activated their legacy redirects. This closes out
every remaining Canadian live legacy page. One commit.

### Pages written (all `status: reviewed`)

- **Saskatchewan:** saskatoon, regina
- **Manitoba:** winnipeg
- **Nova Scotia:** halifax, cape-breton
- **New Brunswick:** moncton, saint-john, fredericton
- **Newfoundland and Labrador:** st-johns

Same pattern as Phase 4: each page is based on its legacy page's local copy
(`src/pages/seo/for-therapists-*.js`) rewritten with the city's real
search-market reality. Note the follow-up prompt said "8 cities" but **9 legacy
files exist** (`for-therapists-st-johns.js` included), and all 9 were migrated.

### Cities data

- `cities.json`: `neighbourhoods` and `majorIndustries` filled for all 9;
  `population2021` stays `null` (same convention as Phases 1–4). All other
  null entries were left untouched.

### Moncton bilingual note

- The Moncton page carries a bilingual EN/FR note (official bilingualism of
  New Brunswick) as editorial copy in `localInsight` and a geoSpecific FAQ.
  `vertical-geo/therapists/new-brunswick.json` keeps `regulator: null`, so no
  "Provincial rules" section renders anywhere (verified for SK/MB/NS/NB/NL as
  well — no regulator claims added).

### Redirects and live-legacy arithmetic

- Added 9 city sources to `LEGACY_REDIRECT_MAP`. Active redirects: **31 → 39**.
  Live legacy pages: **15 → 6** (only the 6 US cities: albany, buffalo,
  huntington, new-york, rochester, syracuse). The province pages for
  Saskatchewan, Manitoba, Nova Scotia, New Brunswick and Newfoundland and
  Labrador now render empty "More cities" blocks. `yarn verify:seo` reports
  **0 live legacy orphans**.

### Similarity (follow-up reporting threshold 0.30)

- Nearest published sibling pair after Phase 5: **0.099** (`red-deer <->
  abbotsford`, unchanged from Phase 4). Nothing exceeded 0.30, so no rewrites
  were needed. The gate (≤ 0.35) is enforced by `verify:seo`.

### Verification

- `yarn verify:seo` — 150 enumerated, **42 published**, 20 draft-excluded, 0 gate-failed, 0 slug errors, 0 broken links, **0 live legacy orphans**.
- `yarn test:seo` — 12/12 pass.
- `yarn lint` — exit 0 (pre-existing warnings only).
- `yarn build` — success; 42 vertical pages prerendered; `sitemap-vertical-therapists.xml` now lists 42 URLs. Restored the `public/sitemap-0.xml` build-timestamp noise before committing.

### Assumptions recorded

- **`population2021` stays `null`** and `verified` stays `false` for the 9 new
  cities, matching every other city in the published set.
- **Regulation is intentionally absent** in SK/MB/NS/NB/NL (regulator null in
  the vertical-geo files); the only editorial regulatory-adjacent copy is the
  Moncton bilingual note.
- **6 live legacy US pages remain by design** — out of scope for this launch,
  kept to preserve rankings/backlinks, still linked from the pillar.
  `docs/legacy-redirect-map.md` reconciles the 39/6 split.

## Follow-up Phase 8 — schema audit and completion

Audit captured in `docs/schema-audit.md`. One shared Organization entity
(`https://infused.agency/#organization`) is now defined on every page that
references it, by `id`, via the extended `src/lib/verticalSeoSchema.js`.

### What changed

- **`src/lib/verticalSeoSchema.js`** rewritten as the single source of schema.
  Adds `organizationNode`, `websiteNode`, `webPageNode`, `blogPostingNode`,
  `serviceNode`, `faqPageNode`, `graph`, and page-type builders (`homeGraph`,
  `localCityGraph`, `aboutPageGraph`, `contactPageGraph`, `webPageGraph`,
  `blogGraph`). `buildGraph` and `servicePageGraph` now prepend the Organization
  node, fixing the previously unresolved `Service.provider` `@id`.
- **Homepage** — the inline `@graph` (which contained a duplicate
  `LocalBusiness`, fabricated `AggregateRating` 4.9/33, and 3 invented `Review`
  nodes) is replaced by `homeGraph()`: Organization/ProfessionalService/
  LocalBusiness + WebSite + WebPage + FAQPage. No review/rating markup. The
  visible FAQ section now renders from `src/lib/homeFaqs.js`, the same array
  the FAQPage schema uses, so markup and visible text cannot drift.
- **11 Niagara city pages** (`/seo/{city}`) — kept their existing FAQPage block
  and gained a `components/seo/CitySeoJsonLd.js` block emitting
  Organization + BreadcrumbList + Service.
- **`/about` / `/get-a-quote`** — AboutPage / ContactPage + Organization +
  BreadcrumbList via `components/seo/PageJsonLd.js`.
- **`/seo`, `/services`, `/web-design`** — CollectionPage/WebPage +
  Organization + BreadcrumbList.
- **Blog** (`/posts/{id}`, 15 posts) — BlogPosting (headline, datePublished,
  dateModified = date, image, author/publisher = Organization) + Organization,
  plus a canonical link built from the post id.
- **Logo** copied to `public/img/infused-logo.png`; the schema references the
  stable `/img/infused-logo.png` instead of a build-hashed `_next/...` asset.
- **`scripts/validate-schema.js`** parses every `application/ld+json` block in
  the built HTML and fails on invalid JSON, duplicate `@id`s, unresolved `@id`
  references, `Review`/`AggregateRating` markup, missing required properties,
  and missing required types. Wired into `postbuild` (`--require`) and
  `verify:seo` (skips when no build exists). Current result: 172 pages checked,
  95 with JSON-LD, 0 failures.

### Assumptions recorded

- **Opening hours follow the visible footer** (Monday–Friday 9a.m.–6p.m.,
  weekends closed), not the old homepage markup (`Mo-Fr 09:00-17:00`,
  `Sa 10:00-14:00`), because the schema must match visible content.
- **`sameAs` links are copied from the existing homepage schema** (unchanged).
  The footer’s Instagram link (`instagram.com/infusedweb`) differs from the
  schema Instagram (`instagram.com/infusedagency`); both predate this work and
  the discrepancy is flagged in `docs/schema-audit.md` for a human to confirm.
- **Homepage FAQ source of truth** is now `src/lib/homeFaqs.js`; one schema text
  typo (“yoursearch”) was corrected to “your search”.
- **Out-of-scope pages were audited, not changed:** the legacy live US therapist
  pages (no schema), `/niagara-web-design` (FAQPage only) and
  `/caledonia-web-design` (an un-id'd `LocalBusiness` node with a wrong `url`
  and a mismatched Instagram `sameAs`). The validator leaves unmapped pages to
  structural checks only, so these do not fail the build.
- **Ordering:** Phase 8 is committed before the homepage SEO pass and Phase 9,
  so the final report reflects the homepage work. Doing the homepage links last
  avoids re-touching schema added here.

## Homepage Niagara local-SEO pass (after Phase 8)

**Assumption / spec override:** the original build spec said not to change the
homepage beyond adding links. The client explicitly asked for a homepage pass
to improve local organic rankings for "Niagara", so the spec note is overridden
here. No fabricated claims were added and the visible FAQ/schema pairing from
Phase 8 is unchanged.

### What changed (`src/pages/index.js`)

- The six cards in "Niagara SEO & AI Search Services" now link their headings to
  the matching service pages (`/seo`, `/seo/link-building`,
  `/seo/content-writing`, `/seo/local-seo`, `/seo/technical-seo`).
- A new "Solutions for Niagara Businesses" section links to the main pillars:
  `/seo`, `/ai-search`, `/web-design`, `/ecommerce-marketing`,
  `/digital-marketing`, `/reputation-management`, plus "View all solutions" →
  `/services`. Reuses the existing `.home-services` card styling (no new SCSS).
- The "Supporting Local Businesses in Niagara" subsection gained a paragraph
  linking the 11 Niagara city pages (`/seo/{city}`).

Homepage H1 ("Niagara SEO and AI SEO Services") and the title/description were
already locally targeted and were left unchanged. No sections were removed or
reordered; the changes are additive and contained.

## Follow-up Phase 9 — final audit and report

Re-ran the Phase 3 audit extended to service pages, the Solutions nav links and
schema validation, and overwrote `docs/page-audit.md` (regenerated by the new
`scripts/audit-pages.js`). One commit.

### What changed, per phase

| Phase | Change |
| --- | --- |
| 1 | Breadcrumb CSS (`.breadcrumbs`, horizontal) and `.seo-city-hero` top padding/background (fixed clipped heroes). No copy. |
| 2 | Legacy US/Canadian city lists reconciled; "More cities" block keeps every live legacy page crawlable; orphan check fails the build. Seed city fixes (Airdrie, Cape Breton). |
| 3 | Baseline `docs/page-audit.md` (document only). |
| 4 | 15 city pages published (QC, BC, AB) + 15 legacy 301s. |
| 5 | 9 city pages published (SK, MB, NS, NB, NL) + 9 legacy 301s. |
| 6 | 19 new service pages (6A: 9, 6B: 10) + route files + `sitemap-services.xml`; nav snapshot; hub grid + child later. |
| 7 | "Solutions" mega menu (hover + mobile accordion, keyboard accessible, SSR links). |
| 8 | One shared Organization/ProfessionalService `@id` across every page; homepage graph de-fabricated; JSON-LD validator wired into build; logo made stable. |
| — | Homepage Niagara local-SEO pass (card headings, Solutions section, city links). |
| 9 | This final audit + report; competitor-overlap check. |

### Schema audit findings and fixes

Findings are recorded in `docs/schema-audit.md`; the fixes are summarised in the
Phase 8 section above. In short: the homepage defined a duplicate
`LocalBusiness` node and carried fabricated `AggregateRating` (4.9/33) and three
invented `Review` nodes; several pages referenced an Organization `@id` that was
never defined; the logo used a build-hashed `_next` asset. All are fixed: one
Organization node per page, referenced by `@id`; no ratings/reviews; stable
`/img/infused-logo.png`. `scripts/validate-schema.js` now checks every built page
for invalid JSON, duplicate/unresolved `@id`, forbidden Review/AggregateRating,
missing required properties and missing required types per URL. Current result:
**172 pages checked, 95 with JSON-LD, 0 failures**.

Pages intentionally left out of schema changes (audited only): the 6 live legacy
US therapist pages (no JSON-LD), `/niagara-web-design` (FAQPage only) and
`/caledonia-web-design` (an un-`@id`'d `LocalBusiness` with a wrong `url` and a
mismatched Instagram `sameAs`). These are listed under human review below.

### Competitor-overlap check (in-memory only)

`scripts/competitor-overlap.js` fetched the Phase 6 competitor counterparts and
compared 5-word shingles against our unique prose. Competitor text was held in
memory and never stored. Results (threshold 0.15):

| Our page | Score |
| --- | ---: |
| `/seo/local-seo` | 0.000 |
| `/seo/white-label` | 0.000 |
| `/ecommerce-marketing` | 0.000 |
| `/seo`, `/services` | n/a (existing pages; no content file to compare) |

No page exceeded 0.15, so no rewrites were required. (5-word shingles are a
strict measure: even on-topic pages almost never share five consecutive words
unless text was copied.)

### Service pages: published vs draft

- **Published: 21** (2 existing — `/seo`, `/web-design` — plus the 19 new:
  AI Search, Local/Technical/Link-Building/Content-Writing/White-Label/Franchise
  SEO, Digital Marketing + CRO, eCommerce Marketing + Optimization/SEO/PPC/Shopify
  SEO, Web Design eCommerce/Shopify/Hosting, Reputation Management + Repair).
- **Draft / gate-failed: 0.** Every reviewed service page passes the service gate
  (unique prose ≥ 500 words, direct answer 40–60 words, ≥ 6 FAQs, summary
  140–155 chars, title ≤ 65 chars, sibling similarity ≤ 0.30). Nearest same-group
  pair: **0.004**.
- **Facts the owner must supply (`docs/service-pages-open-questions.md`):** every
  key in `data/services/service-facts.json` is still `null` and no page states any
  of them. Open items: `pricingModel`, `packages`, `toolsAndPlatforms`,
  `hostingProvider`, `uptimeGuarantee`, `backupTerms`, `securityMonitoring`,
  `maintenanceTerms`, `supportTerms`, `sla`, `turnaroundTimes`, `minimums`,
  `guarantees`, `certifications`, `partnerPrograms`, `geographicLimits`. Confirm a
  field, set it in the JSON, then weave it into the listed pages.

### Pages published and pages left as draft

**Vertical × geo: 42 published** (pillar `/therapist-seo`, country
`/therapist-seo/usa`, 10 province pages, 30 city pages). The 30 cities: Ontario 5
(toronto, ottawa, mississauga, brampton, hamilton), Quebec 5 (montreal,
quebec-city, laval, gatineau, longueuil), BC 5 (vancouver, surrey, burnaby,
richmond, abbotsford), Alberta 5 (calgary, edmonton, red-deer, lethbridge,
airdrie), Saskatchewan 2 (saskatoon, regina), Manitoba 1 (winnipeg), Nova Scotia
2 (halifax, cape-breton), New Brunswick 3 (moncton, saint-john, fredericton),
Newfoundland 1 (st-johns), PEI 1 (charlottetown).

**20 seeded city pages left as draft** — the lower-demand seeded cities that have
no legacy page and were never written (they resolve to 404, they are not in the
sitemap). Saskatchewan: prince-albert, moose-jaw, swift-current. Manitoba:
brandon, steinbach, winkler, thompson. Nova Scotia: truro, new-glasgow, kentville.
New Brunswick: dieppe, miramichi. Newfoundland and Labrador: mount-pearl,
corner-brook, conception-bay-south, paradise. Prince Edward Island: summerside,
stratford, cornwall, kensington. All other enumerated pages (88) belong to
scaffold verticals that are not `live` and are not routed.

### Provinces by published city pages

Publish counts: Ontario 5, Quebec 5, British Columbia 5, Alberta 5, Saskatchewan
2, Nova Scotia 2, New Brunswick 3, Manitoba 1, Newfoundland and Labrador 1,
Prince Edward Island 1. **No province now has zero published city pages** — the
Phase 3 flag ("9 of 10 provinces had zero") is closed in Ontario, Quebec, BC, AB,
SK, MB, NS, NB, NL and PEI. Provinces still "few" (1–3 published vs 5 seeded):
Manitoba, Nova Scotia, New Brunswick, Newfoundland and Labrador, Prince Edward
Island, Saskatchewan.

### Redirects now active

- **40 legacy therapist 301s** — `/seo/for-therapists-*` → `/therapist-seo/...`
  (the 11 pillar/province/US country pages + 29 Canadian city pages). Full list in
  `docs/page-audit.md`.
- **58 other permanent redirects** from `next.config.js` (retired `*-web-design`
  city microsites → `/web-design`; `/pricing` and `/reviews` → `/get-a-quote`;
  old `/posts/*` trailing-slash URLs → current slugs; `/niagara-falls`, Dublin
  etc. → `/`; neighbourhood URLs → `/seo/{city}`). One harmless duplicate source
  exists (`/posts/how-can-i-generate-website-traffic-with-0-marketing-budget`,
  listed twice) — worth cleaning up but behaviourally identical.

### Legacy pages still live

**6** legacy therapist pages have no published replacement and stay live and
indexable, kept for existing backlinks/rankings and linked from the pillar's
"More cities" block:

`/seo/for-therapists-albany`, `-buffalo`, `-huntington`, `-new-york`,
`-rochester`, `-syracuse`. All 40 other legacy therapist files now 301.

### Five highest-risk items for a human to review

1. **Homepage reviews section** — the visible copy claims *"50 SEO clients served
   and 40+ five-star Google reviews"*. There is no `AggregateRating`/`Review`
   markup (correctly), but the numeric claim is unverified and should be confirmed
   or softened before merge.
2. **Regulatory-adjacent editorial copy** — the Quebec pages' Charter of the
   French Language (Bill 96) note and the Moncton bilingual (NB official
   bilingualism) note are legal-adjacent. Confirm the wording; no regulator claims
   are made anywhere (all `regulator` values are `null`).
3. **6 live legacy US therapist pages** — old, unschema'd, still indexable
   (`/seo/for-therapists-{albany,buffalo,huntington,new-york,rochester,syracuse}`).
   Decide whether to keep, redirect or rebuild them.
4. **Out-of-scope pages with schema defects** — `/caledonia-web-design` (un-`@id`'d
   `LocalBusiness`, wrong `url`, mismatched Instagram `sameAs`) and
   `/niagara-web-design` (FAQPage only). Flagged in `docs/schema-audit.md`.
5. **Service-page facts that stay unspoken** — `/web-design/website-hosting` and
   `/seo/white-label` are the pages most likely to need the `service-facts.json`
   answers (hosting provider, uptime, backup, SLA, support, turnaround). Confirm
   no page currently implies a guarantee or names an unconfirmed platform/partner;
   the open-questions file lists every such field.

### Verification

- `yarn verify:seo` — 150 enumerated, **42 published**, 20 draft-excluded, 0
  gate-failed, 0 slug errors, 0 broken links, 0 live legacy orphans; schema
  validation 172 checked / 95 with JSON-LD / 0 failures. Services: 21 published,
  0 draft, 0 failed.
- `yarn test:seo` — 17/17 pass.
- `node scripts/audit-pages.js` — regenerated `docs/page-audit.md`.
- `node scripts/competitor-overlap.js` — all mapped pages ≤ 0.15.
- `yarn lint` — exit 0 (pre-existing warnings only).
- `yarn build` — success, 172 pages prerendered; restored the `public/sitemap-0.xml`
  build-timestamp noise before committing.

## Launch waves — item 1: terminology and card copy (verticals not in wave 1)

Scope is deliberately limited to verticals that are **not** in wave 1; the eight
wave-1 slugs (`therapists`, `electricians`, `plumbers`, `hvac-contractors`,
`roofers`, `landscapers`, `dentists`, `accountants`) are frozen and untouched
(slug, singular/plural, category, blurb and copy all left as-is).

### Renames applied

| Old slug | New slug | urlSlug | singular | plural | displayName |
| --- | --- | --- | --- | --- | --- |
| `adu-contractors` | `secondary-suite-builders` | `secondary-suite-seo` | `secondary suite` | `secondary suite builders` | Secondary Suite & ADU Builders |
| `basement-remodelers` | `basement-renovators` | `basement-renovation-seo` | `renovator` | `renovators` | Basement Renovation Companies |
| `home-remodelers` | `home-renovators` | `home-renovation-seo` | `home renovator` | `home renovators` | Home Renovation Companies |
| `kitchen-bath` (unchanged) | `kitchen-bath` | `kitchen-bath-seo` | `kitchen & bath` | `kitchen & bathroom renovators` | Kitchen & Bathroom Renovators |
| `daycares` (unchanged) | `daycares` | `daycare-seo` | `daycare` | `daycares` | Daycare Centres |

### Assumptions recorded

- **ADU → "Secondary Suite & ADU Builders".** "ADU" (accessory dwelling unit) is
  the US term; the Canadian equivalents are "secondary suite" (and "garden
  suite"). The display name keeps the ADU acronym (uppercase, as the prompt
  requires) alongside the Canadian term so both audiences are covered. The
  singular/plural used in page titles are `secondary suite` / `secondary suite
  builders`; the full display name is used for cards and headings.
- **Singular strings are chosen to keep the title-length gate (≤ 65 chars).**
  The longest province name is "Newfoundland and Labrador" (25), so
  `"Secondary Suite SEO in Newfoundland and Labrador | Infused Agency"` is
  exactly 65. A longer singular (`secondary suite builder`) would exceed the
  gate, which is why titles use the shorter `secondary suite`. `renovator` (not
  `basement renovator`) is used for the same reason, matching the previous
  `remodeler` convention.
- **`kitchen-bath` slug and urlSlug are unchanged** (neither contained
  "remodel"); only its display name, plural and copy changed.
- **Copy was rewritten in place** across `data/vertical-seo/content/verticals/*`
  and `data/vertical-seo/vertical-geo/*` (165 content files + 30 geo files):
  "remodeler(s)" → "renovator(s)", "remodeling" → "renovation",
  "ADU contractor(s)" → "secondary suite builder(s)", "centers" → "centres".
  Article and sentence-case cleanups were applied afterwards (for example
  "an ADU contractor" → "a secondary suite builder", sentence-initial
  "secondary suite" → "Secondary suite"). Standalone "ADU" in prose is retained
  uppercase.
- **Categories rebalanced** for non-wave-1 verticals: `Home & Trade Services`
  (trades/home), `Health & Wellness` (med spas, orthodontists, veterinarians),
  new `Legal & Financial Services` (the four lawyer verticals, financial
  advisors, mortgage brokers), `Business & Professional Services` (architects,
  home stagers, interior designers, wedding photographers) and new
  `Education & Childcare` (daycares, moved out of Business & Professional
  Services). Wave-1 categories were left unchanged, so `accountants` remains in
  Business & Professional Services.
- **Card blurbs** (`industriesBenefit`) were rewritten per industry for every
  non-wave-1 vertical so each reflects how that trade's customers actually
  search (emergency/urgent intent for locksmiths and restoration, seasonality
  for pool and snow, program/eligibility for immigration, and so on) instead of
  the repeated "Reach X searching for Y" template. Wave-1 blurbs are unchanged.
- **Old slugs purged** from `data/vertical-seo/verticals.json`, `proof.json`
  (ids, quotes, `verticals` arrays), the content and geo directories,
  `scripts/vertical-batch-specs.js`, the generated sitemaps and the generated
  `docs/vertical-seo-report.md` / `src/generated/services-nav.json`. The three
  stale per-vertical sitemaps (`adu-contractors`, `basement-remodelers`,
  `home-remodelers`) were deleted and the index rebuilt. No redirects are needed
  because none of these verticals were ever published.

### Verification

- `node scripts/verify-vertical-seo.js` — 2956 enumerated, 1967 published,
  20 draft-excluded, 0 gate-failed, 0 slug errors, 0 broken links.
- `node scripts/test-vertical-seo.js` — 17/17 pass.
- Repo-wide search confirms no remaining reference to the old slugs or
  "remodeler"/"Accessory Dwelling Unit (ADU) Contractors"/"Daycare Centers".

## Launch waves — item 2: launch schedule (`data/vertical-seo/launch.json`)

`startDate` defaults to **2026-10-14** (three days after the 2026-10-11 build
date), `freezeAtWave` is `null`, and the four waves use `offsetDays`
`0 / 21 / 42 / 63`. Names were resolved to slugs against
`data/vertical-seo/verticals.json` (note the item-1 renames). Resolved slugs:

- **Wave 1 (offset 0, 8):** `therapists`, `electricians`, `plumbers`,
  `hvac-contractors`, `roofers`, `landscapers`, `dentists`, `accountants`.
- **Wave 2 (offset 21, 10):** `home-builders`, `home-renovators`,
  `kitchen-bath`, `flooring`, `window-door`, `pest-control`, `arborists`,
  `garage-door`, `paving-companies`, `pool-builders`.
- **Wave 3 (offset 42, 10):** `basement-renovators`, `deck-builders`,
  `home-additions`, `cabinet-makers`, `tile-contractors`, `drywallers`,
  `design-builders`, `movers`, `locksmiths`, `commercial-cleaning`.
- **Wave 4 (offset 63, 16 — every remaining vertical that is not on hold):**
  `secondary-suite-builders`, `architects`, `commercial-snow-removal`,
  `concrete-contractors`, `contractors`, `daycares`, `home-stagers`,
  `insulation-contractors`, `interior-designers`, `modular-builders`,
  `orthodontists`, `restoration-companies`, `septic-services`, `smart-home`,
  `veterinarians`, `wedding-photographers`.
- **`hold` (never auto-published, 7):** `family-lawyers`,
  `immigration-lawyers`, `injury-lawyers`, `real-estate-lawyers`, `med-spas`,
  `mortgage-brokers`, `financial-advisors`.

### Assumptions recorded

- **Wave 4 literally means "every remaining vertical".** It includes the three
  `scaffold` verticals (`concrete-contractors`, `contractors`,
  `insulation-contractors`); they stay unpublished because `computePublished()`
  only ever emits pages for `launchStatus: "live"`. Recording them keeps the
  schedule a complete partition of the catalogue.
- **`startDate` is relative to the build date.** The spec asks for "3 days from
  today"; the day this schedule was authored was 2026-10-11.

## Launch waves — item 3: publishing gate (`src/lib/launch.js`)

The schedule now drives publishing. `src/lib/launch.js` reads `launch.json` and
exposes the schedule helpers; `computePublished()` in `src/lib/verticalSeo.js`
only evaluates *released* live verticals (their wave date has elapsed and they
are not on `hold`), and `buildIndustriesProps()` only emits verticals that
actually have a published pillar. Because `buildNavSnapshot()` and the
`/industries` card data derive from the published set, unreleased verticals now
vanish from the Solutions/industries snapshot and therefore from the homepage
chips, nav snapshot, related-links blocks, and sitemaps automatically. Wave 1
(`startDate` 2026-10-14) resolves to 329 pages across all 8 verticals.

`LAUNCH_AS_OF=YYYY-MM-DD` overrides "today" (UTC) for build-time simulation:
`LAUNCH_AS_OF=2026-10-14 yarn verify:seo` verifies the wave-1 catalogue as it
will build on go-live morning.

### Assumptions recorded

- **Embargo day publishes nothing, and that is a clean build.** The day the
  builder runs there are no released verticals, so there are zero vertical SEO
  pages. The verifier must stay green so the build can succeed and CI can
  deploy the (empty, warm-up) vertical surface while the wave schedule rolls
  forward. The legacy-therapist orphan check is therefore scoped to "the
  therapists pillar is actually published" — before wave 1 the legacy `/seo/for-
  therapists-*` pages legitimately stay live because their redirects are not
  emitted yet.
- **Unreleased content still passes the quality gate invisibly.** Content for
  unreleased verticals is not evaluated (and thus cannot raise "gate-failed"
  counts) until its wave date; the first release is a dry-run of the whole
  wave-1 surface, surfacing any content issues *before* the wave is public.
- **Held verticals can never publish from the schedule** (they still pass the
  content gate checks when the rest of a release is verified).

## Launch waves — item 4: quality-gate short-circuit (`docs/launch-status.md`)

`computePublished()` now applies whole-vertical gating: a *released* vertical
publishes only if every one of its pages passes the quality gate. A single
failing page skips the entire vertical; the skip is carried on the failed page
records as `launch-skip: <failing rules>` and reported separately as
`launchSkips` (slug + reasons). This is the day-by-day build semantics: content
issues no longer fail the build, they simply delay a vertical until its content
is fixed and the next build rolls.

Structural problems still fail the build: a malformed data file throws during
`loadContent` (prebuild aborts), and `verify-vertical-seo.js` exits 1 when a
published page has a broken internal link or the legacy-orphan invariant breaks.

The verify script now also writes `docs/launch-status.md`: the evaluation date
(effective `/ UTC`, with a `LAUNCH_AS_OF` override note), wave table, per-slug
status (released / scheduled / on hold) and published-page counts, and the
skipped-released-vertical reasons.

### Assumptions recorded

- **A skip is recorded, not silently swallowed.** The reason list is appended
  to the failing rules on the page records AND grouped by slug in the status
  doc, so an operator sees exactly which rule kept a vertical out.
- **Gate failures count as "not published", not "build failure".** This is the
  exact trade the spec asks for; verify stays green on a skipped vertical.
- **`docs/launch-status.md` is a generated artifact** (do not edit by hand); it
  is committed so the rolling status is visible in-repo after each `verify:seo`.
