# Vertical × Geo SEO build notes

> **Historical document.** This describes the original Next.js implementation
> of the vertical/geo SEO system. The Next.js application has since been retired;
> Astro is the repository's only application and the live implementation lives
> under `astro/`. The content, data model and quality gate described here are
> still in use, but file paths and build commands reflect the old Next.js setup.
> See `docs/astro-rebuild/LEGACY_NEXTJS_REMOVAL_REPORT.md`.

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

## Launch waves — item 5: scheduled deploys

**Hosting / remote detection.** The git remote is
`https://github.com/jd-fillmore/infused-agency.git` (GitHub) and hosting is
Netlify. The repo ships a `netlify.toml` that only pins the build-time Node
version (`NODE_VERSION`); release deploys are otherwise driven by a Netlify
**build hook** (Site configuration -> Build & deploy -> Continuous deployment ->
Build hooks). The workflow POSTs to that hook URL from the `DEPLOY_HOOK_URL`
repo secret; the same check works with any host that exposes a build webhook.

**`scripts/should-deploy-today.js`** prints `true` on stdout only when some
wave's UTC date equals today's UTC date, otherwise `false`, and always exits 0
(diagnostics go to stderr). `freezeAtWave` is honoured: waves above the freeze
never count even on their date. Run it with `yarn deploy:check`, or with
`LAUNCH_AS_OF=YYYY-MM-DD` to test a specific day.

**`.github/workflows/scheduled-wave-deploy.yml`** runs daily at `09:00 UTC` and
on manual dispatch. It runs the script, and only when the output is `true` does
it `curl -X POST "$DEPLOY_HOOK_URL"` (from the `DEPLOY_HOOK_URL` repo secret) to
trigger a production rebuild. If the secret is unset it fails with a clear
message. `.github/workflows/ci.yml` separately runs `yarn verify:seo` and
`yarn build` on pushes/PRs (this is what keeps the released surface honest
between waves).

### One-time setup (Netlify)

1. Netlify dashboard -> the site -> **Site configuration -> Build & deploy ->
   Continuous deployment -> Build hooks**. Create a hook named e.g.
   `scheduled-wave-deploy` on the production branch (`main`); copy the generated
   URL.
2. GitHub repo -> **Settings -> Secrets and variables -> Actions -> New
   repository secret** named `DEPLOY_HOOK_URL` with that URL as the value.
3. Test without waiting for cron: **Actions -> Scheduled wave deploy -> Run
   workflow**. On a non-wave day it logs "No wave is scheduled for today"; on a
   wave day it POSTs to Netlify and starts a build.
4. Turn off any Netlify **auto-publish on push** if you want releases to happen
   *only* on wave dates (the task's intent); content/other changes then ship via
   the normal deploy flow you choose.

### Operating the schedule

- **Pause everything** — set `freezeAtWave` in `data/vertical-seo/launch.json`
  to the last wave number that may release (e.g. `1`). Waves above it stop
  releasing and `should-deploy-today.js` reports `false` on their dates.
- **Change dates** — edit `startDate` and/or each wave's `offsetDays` (days from
  `startDate`). Wave dates are `startDate + offsetDays`, compared as UTC days.
- **Move a vertical out of hold** — remove its slug from the `hold` array and
  place it in the wave you want (it must be in a wave to release).
- **Preview a future wave** — set `LAUNCH_AS_OF=YYYY-MM-DD` when running
  `yarn verify:seo`, `yarn build` or `yarn deploy:check` to build/see the state
  as of that date without touching the schedule.

### Assumptions recorded

- **Auto-deploy is superseded by wave-gated deploys.** The deploy hook is only
  pinged on wave dates; whether other pushes auto-deploy is a host setting the
  operator controls (step 4).
- **Dates compare as whole UTC days** (the same clock the publishing logic and
  the 09:00 UTC cron use).
- **`LAUNCH_AS_OF` is the simulation lever** for all three entry points.

## Launch waves — item 6: build-time caching + profiling

`computePublished()` is now cached at two levels, so a day-by-day release build
evaluates the gate once instead of once per generated page:

- **Per-process memo** keyed by `as-of|includeDrafts`. In `next build` this
  covers getStaticPaths for all three dynamic routes, every getStaticProps, the
  nav snapshot, `/industries`, and `next.config` redirects — the first call pays
  the gate, the rest are O(1).
- **Cross-process disk cache** at `.next/cache/vertical-seo-gate.json` keyed by
  a SHA-256 of the gate version, the as-of date, the core data files
  (`launch.json`, `verticals.json`, `provinces.json`, `cities.json`,
  `proof.json`) and the content/geo files **of released verticals only**.
  Unreleased content can't change the result, so editing it never invalidates
  the cache. prebuild (`verify`) computes and writes it; `next build` and
  postbuild (sitemaps, schema) read it back. The cache is compact — each page's
  content is stored once by URL, plus URL lists for the published / failed /
  draft / skip sets — so it is ~7 MB at the full catalogue rather than tens of
  MB. `GATE_VERSION` must be bumped when the gate logic changes.
- **Per-process file cache.** `readJson()` parses each JSON file at most once
  per build process (keyed by absolute path). Content files are mostly unique
  per page so the win is small there, but the shared geo files, `proof.json`
  etc. are read many times. The disk cache (above) is what detects on-disk
  changes across processes.

**Shingle sets and the similarity pass.** Each page's 5-gram shingle set is
built once during data collection and reused by both the gate and the similarity
pass. The similarity pass compares a page only against already-kept pages in its
own sibling set (same vertical + same level), never all pages, so it is not
quadratic across the catalogue. We prototyped the spec's suggested inverted
index (shingle -> kept pages) and **rejected it**: at the current data sizes the
sibling groups are small (≈30 city pages) while shingle sets are large, so
building and probing the index cost more than the linear sibling scan it
replaced. Measured at the full catalogue: linear sibling scan ≈ 240 ms vs
inverted index ≈ 386 ms for the similarity stage. The inverted-index variant is
also provably output-identical (it only skips pairs that share no shingle, whose
Jaccard is 0); it is simply slower here, so the sibling-scoped linear scan
stands. If a single vertical ever grows to hundreds of same-level pages, revisit
this.

**Measured profile.** The verifier prints a stopwatch profile (`source` +
data / gate / similarity / links / total ms) and records it in
`docs/vertical-seo-report.md`. Full catalogue, 1680 pages (all 44 released
verticals):

| Stage | Cold (computed) | Warm (disk cache) |
| --- | --- | --- |
| data collection (enumerate + read/parse + shingles) | ~737 ms | 0 ms |
| quality gate (rule evaluation) | ~123 ms | 0 ms |
| similarity | ~240 ms | 0 ms |
| link pass | ~26 ms | 0 ms |
| **computePublished total** | **~1.45 s** | **~7 ms** |

`LAUNCH_AS_OF` forces a different as-of date and therefore a different cache key.

**Build times** (Windows Dev box, `next build` + prebuild verify; the second and
later runs benefit from Next's own webpack compilation cache, so the first
`wave 1` figure below is the warm-compile number):

| Schedule | Pages generated | Wall time |
| --- | --- | --- |
| embargo (no waves released) | 0 vertical | 43–45 s |
| wave 1 only (`LAUNCH_AS_OF=2026-10-14`) | 329 | 50.2 s |
| all waves, cold gate cache (`2027-01-01`) | 1680 | 70.4 s |
| all waves, warm gate cache (repeat) | 1680 | 68.9 s |

The gate cache saves ~1.5 s on a full-catalogue build (the gate is computed once
in prebuild either way); the dominant cost is Next's static generation of the
1680 pages, which item 6 must not change.

`scripts/generate-vertical-sitemaps.js` also deletes any
`sitemap-vertical-*.xml` it did not write this run, so an unreleased, held or
skipped vertical leaves no stale child sitemap on disk (the index never listed
it, but the orphan file was still fetchable).

### Identical-output proof

- **Route set.** `computePublished()` was run against the pre-cache code
  (`git worktree` at `72eabb5`) and the optimized code at three as-of dates. The
  sorted published URL list hashes are byte-identical:

  | As-of | Published | Published-URL-list SHA-256 (16) |
  | --- | --- | --- |
  | 2026-10-14 | 329 | `88e07720151db5bf` |
  | 2026-11-04 | 739 | `c531024d14216827` |
  | 2027-01-01 | 1680 | `d450ba602a90abc2` |

- **Page HTML.** Two full builds at `2027-01-01` (cold gate cache vs warm gate
  cache) emitted the same 1808 `.html` files; normalizing Next's per-build
  `buildId` and asset-content hashes, **all 1680 vertical pages are
  byte-identical**. Only a handful of pre-existing legacy `posts/*` and `seo/*`
  pages differ, and the differing fragment is a Date rendered as
  `2025-08-30T13:08:47.634Z` in one build and
  `Sat Aug 30 2025 09:08:47 GMT-0400 (Eastern Daylight Saving Time)` in the
  other — a pre-existing Date-serialization nondeterminism on those legacy
  pages (the differing set changes from build to build regardless of the gate
  cache, and none of those pages are vertical pages). Not caused by item 6.

### Assumptions recorded

- **Editing unreleased content does not invalidate the cache.** Only released
  verticals' files are hashed, because only they participate in the result;
  this keeps the key cheap and avoids needless rebuilds.
- **`GATE_VERSION` is the manual invalidation lever.** Any logic change to the
  gate must bump it; schema/shape changes also require it because the cache
  stores the result shape directly.
- **The cache is regenerated, not edited** (`.next` is git-ignored); a missing,
  stale or malformed cache simply falls through to a fresh compute.
- **The inverted index was measured and rejected** at current data sizes (see
  above); the sibling-scoped linear scan already satisfies "not quadratic across
  all pages".
- **Legacy `posts/*`/`seo/*` Date serialization is out of scope** — those pages
  are pre-existing, unmodified by this task, and nondeterministic independent of
  the gate cache.

## Launch waves — item 7: tests and verification

### Unit tests (`yarn test:seo`)

`scripts/test-vertical-seo.js` grew from the vertical-gate suite to 28 tests,
all passing (`yarn test:seo`, ~12s). Added coverage for:

- wave dates (`startDate` + `offsetDays`, normalized to UTC);
- the schedule covering the catalogue exactly once (51 slugs, no duplicates and
  no omissions across the four waves plus `hold`);
- release on the wave date but not before (boundary at `asOf === waveDate`);
- held verticals never releasing at any date;
- `freezeAtWave` hiding every higher wave regardless of date;
- the `LAUNCH_AS_OF` override (run in a fresh child process so the in-process
  `asOfDate()` cache cannot mask it);
- the released set growing monotonically with the as-of date;
- `scripts/should-deploy-today.js` printing `true` only on a wave date and
  `false` otherwise (exit 0 either way);
- unreleased verticals producing no published pages;
- the gate-skip behaviour (a released vertical with a corrupt content file is
  listed as skipped, not failed — verified by temporarily corrupting
  `dentists/ontario.json` and restoring it);
- gate-cache invalidation when a content file changes (a whitespace-only rewrite
  of a released content file forces a recompute).

`src/lib/launch.js` was refactored for testability along the way: `waveDate()` now
takes an optional `config`, and `releasedSlugsAt(config, date)` was extracted from
`releasedSlugs()` so synthetic/frozen schedules can be exercised without editing
`launch.json`. No behaviour change.

### Surface verification (`scripts/verify-launch-surface.js`)

A new post-build script proves the item-3 "behaves exactly like scaffold"
requirement. After a build it asserts, for the build's as-of date:

- every **released live** pillar route is prerendered (scaffold verticals are
  released on schedule but intentionally never build pages, so they are exempt);
- no **unreleased**, **held** or **scaffold** vertical has *any* prerendered
  route (`fallback:false` ⇒ those URLs 404);
- no such vertical appears in any sitemap, `src/generated/services-nav.json`,
  `/industries`, or the homepage (footer / industry chips), matched on the
  vertical `urlSlug`;
- explicit pillar / province / city spot-checks for the next unreleased wave and
  for a held vertical.

### Builds at each wave (`LAUNCH_AS_OF`), with resolved slugs and counts

| As-of | Released | Live with pages | Published | Prerendered routes | Vertical routes | Sitemap URLs | Build time |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-10-14 (`startDate`, wave 1) | 8 | 8 | 329 | 424 | 329 | 465 (11 files) | 49.5s |
| 2026-11-05 (+22d, wave 2) | 18 | 18 | 739 | 834 | 739 | 885 (21 files) | 55.6s |
| 2026-12-17 (+64d, wave 4) | 44 | 41 | 1680 | 1775 | 1680 | 1849 (44 files) | 68.6s |
| today (`startDate` not yet reached, embargo) | 0 | 0 | 0 | 95 | 0 | 128 (3 files) | 46.7s |

Resolved slugs per wave (from `data/vertical-seo/launch.json`):

- **Wave 1 (offset 0 → 2026-10-14):** therapists, electricians, plumbers,
  hvac-contractors, roofers, landscapers, dentists, accountants.
- **Wave 2 (offset 21 → 2026-11-04):** home-builders, home-renovators,
  kitchen-bath, flooring, window-door, pest-control, arborists, garage-door,
  paving-companies, pool-builders.
- **Wave 3 (offset 42 → 2026-11-25):** basement-renovators, deck-builders,
  home-additions, cabinet-makers, tile-contractors, drywallers, design-builders,
  movers, locksmiths, commercial-cleaning.
- **Wave 4 (offset 63 → 2026-12-16):** the 16 remaining non-held verticals
  (secondary-suite-builders, architects, commercial-snow-removal,
  concrete-contractors, contractors, daycares, home-stagers,
  insulation-contractors, interior-designers, modular-builders, orthodontists,
  restoration-companies, septic-services, smart-home, veterinarians,
  wedding-photographers).
- **Hold (never):** family-lawyers, immigration-lawyers, injury-lawyers,
  real-estate-lawyers, med-spas, mortgage-brokers, financial-advisors.

At wave 1 the publisher emits exactly 170 pages per wave-1 vertical except
therapists at 171 (`therapists` has one extra legacy-eligible geo page), for a
total of 329. By the last wave 44 verticals are released but only **41 publish**
pages: `concrete-contractors`, `contractors` and `insulation-contractors` are
`launchStatus: scaffold`, so they are released on schedule yet (correctly)
produce no pages. This is why "released" and "live with pages" differ from wave 4
onward, and why the surface script only requires pillar routes for released
*live* verticals.

### 404 / nowhere proof (wave 2 and held, at the wave-1 build)

At `LAUNCH_AS_OF=2026-10-14`, `scripts/verify-launch-surface.js` reported
`OK — no unreleased vertical is reachable or referenced anywhere`, including:

```
404   wave 2  — /home-builder-seo
404   wave 2  — /home-builder-seo/ontario
404   wave 2  — /home-builder-seo/ontario/toronto
404   on hold — /family-lawyer-seo
404   on hold — /family-lawyer-seo/ontario
404   on hold — /family-lawyer-seo/ontario/toronto
```

The same run confirmed no unreleased/held `urlSlug` occurs in any sitemap, the
services nav snapshot, `/industries` or the homepage. Re-running at
`2026-11-05` (wave 2 released) correctly moves the spot-check to wave 3
(`/basement-renovation-seo…` 404), and at `2026-12-17` (wave 4 released) only the
held vertical remains 404 — demonstrating wave 2 then wave 4 appearing as their
dates pass.

### `yarn verify:seo`, `yarn test:seo`, `yarn lint`, `yarn build`

- `yarn test:seo` — **pass** (28/28).
- `yarn lint` — **pass** (warnings only; all pre-existing).
- `yarn build` — **pass** at every `LAUNCH_AS_OF` tested above. The final
  committed artifacts are the canonical embargo build (95 routes, 0 vertical
  pages).
- `yarn verify:seo` — the `verify-vertical-seo` and `validate-schema` steps pass;
  the `seo-regression` step still exits 1 on **11 pre-existing H2 changes** on
  the Niagara `/seo/*` pages (`beamsville`, `crystal-beach`, `fonthill`,
  `fort-erie`, `grimsby`, `niagara-falls`, `niagara-on-the-lake`,
  `port-colborne`, `st-catharines`, `thorold`, `welland`). Those eleven
  `src/pages/seo/*.js` files are modified in the working tree by the in-progress
  redesign that predates this task; the task explicitly scopes out changing
  those pages, so they are left as-is.

### Assumptions recorded

- **`seo-regression` made launch-aware, not silenced.** `scripts/seo-regression.js`
  now treats a baseline page that is missing from the build as expected (info)
  when its leading path segment is a vertical `urlSlug` that is not currently
  published (unreleased, held, or scaffold). Released live pillars still fail if
  absent. At the default as-of this reclassifies 42 vertical pages from failures
  to "launch-hidden". This is required because item 3 deliberately removes those
  pages; without it the regression harness would flag the feature itself.
- **Launch-gated "Industries we serve" heading.** When zero live verticals are
  published there is no industries surface, so pages embedding it legitimately
  drop that H2. `seo-regression.js` strips the `Industries we serve` heading from
  both baseline and current H2 lists *only* when no live vertical is released, so
  the four remaining non-vertical diffs (`/ai-search`, `/reputation-management`,
  `/seo/content-writing`, `/seo/local-seo`) are treated as launch-gated rather
  than regressions. At any as-of with at least one published vertical the heading
  is compared normally.
- **Scaffold verticals release but never publish.** Three wave-4 catalogue
  entries are `launchStatus: scaffold`; the schedule releases them on the wave
  date, but the publisher's existing `launchStatus === "live"` filter (item 3)
  keeps them page-less. "Released" therefore counts them while "live with pages"
  does not. No change was made to their status.
- **The surface script's as-of must match the build's.** It reads
  `LAUNCH_AS_OF` (or its argument) and compares against the prerender manifest,
  so it must be run with the same as-of the build used. `yarn build` alone uses
  the real current date.
- **`yarn verify:seo` remains red only on pre-existing redesign H2s.** No failure
  from this task remains; the residual 11 are uncommitted redesign edits to
  Niagara `/seo/*` pages that existed before this branch's launch work.
- **The wave-1 build time reported here (49.5s) is a warm-`Next`-cache build**
  with only the gate cache cleared; item 6's cold-cache figures (43–70s) are the
  authoritative per-stage profile.

## Pre-launch fixes

Five fixes were applied after item 7, ahead of launch.

### 1. Launch now starts 2026-10-11 (wave 1 live)

`data/vertical-seo/launch.json` `startDate` changed `2026-10-14` → `2026-10-11`.
Relative to the default as-of (UTC today `2026-10-12`), wave 1 is now released:

- **Released verticals: 8 / 51** (all of wave 1), **Published pages: 329**,
  skipped released verticals: 0.
- Wave dates recompute from the new start: wave 1 `2026-10-11`, wave 2
  `2026-11-01`, wave 3 `2026-11-22`, wave 4 `2026-12-13`.
- `docs/launch-status.md` reports `Published waves: 1`, next wave 2 on
  `2026-11-01`, and per-vertical page counts (41 each, 42 for `therapists`).

**The Build profile now shows real gate and similarity times.** With the site
embargoed (0 released) there was nothing to gate, so the committed profile
showed `content gate: 0 ms` / `similarity scoring: 0 ms`. With wave 1 released
the profile reports, e.g.:

```
computePublished  : source=cache, data 195ms, gate 31ms, similarity 58ms, links 9ms, total 356ms
```

To make this robust against cache hits, `computePublished()` now stores its stage
timings in the gate cache blob and replays them on a cache hit (`source=cache`),
so the profile always reports the real gate and similarity times instead of
zeroes; `GATE_VERSION` was bumped (`…11.3`) so pre-change caches invalidate. The
memo path likewise now carries the computed stage times.

**Wave-1-only build time:**

| Build | Time |
| --- | --- |
| Cold (full recompile after the `services.js`/`verticalSeo.js` edits) | 111.4s |
| Warm re-run | 39.3s |

Both runs published 329 pages; `computePublished` reported `gate 31 ms,
similarity 58 ms` (source `computed` on the cold run, `cache` on the warm run).

### 2. Duplicated-word title bug fixed

**Cause.** `serviceTitle()` in `src/lib/services.js` unconditionally built
`` `${name} Services | Infused Agency` ``. The `white-label` service is named
"White Label Services", so its title became
"White Label Services **Services** | Infused Agency".

**Fix (general).** `serviceTitle()` now omits the appended " Services" when the
service name already ends in that word:

```js
if (/Services$/i.test(service.name.trim())) return `${service.name} | Infused Agency`;
return `${service.name} Services | Infused Agency`;
```

**Audit.** Every service title was checked for adjacent duplicated words
(case-insensitive). Result: **0 duplicated-word titles** across all 21 services.
The fix is recorded as an intentional change in
`docs/redesign-allowlist.json` under a new `allowTitleChanges` list, which
`scripts/seo-regression.js` now honours (so the `title changed` finding is
reported as allowlisted rather than a failure).

All 21 service titles (source of truth `serviceTitle()`):

| Service | Title |
| --- | --- |
| /seo (existing, exempt) | Search Engine Optimization Services \| Infused Agency |
| /web-design (existing, exempt) | Web Design Services \| Infused Agency |
| /seo/local-seo | Local SEO Services \| Infused Agency |
| /seo/technical-seo | Technical SEO Services \| Infused Agency |
| /seo/link-building | Link Building Services \| Infused Agency |
| /seo/content-writing | Content Writing Services \| Infused Agency |
| /seo/white-label | White Label Services \| Infused Agency |
| /seo/franchise-seo | Franchise SEO Services \| Infused Agency |
| /ai-search | AI Search (GEO, AEO & LLM SEO) \| Infused Agency |
| /digital-marketing | Digital Marketing Services \| Infused Agency |
| /digital-marketing/conversion-rate-optimization | Conversion Rate Optimization Services \| Infused Agency |
| /web-design/ecommerce-web-design | eCommerce Web Design Services \| Infused Agency |
| /web-design/shopify-web-design | Shopify Web Design Services \| Infused Agency |
| /web-design/website-hosting | Website Hosting Services \| Infused Agency |
| /ecommerce-marketing | eCommerce Marketing Services \| Infused Agency |
| /ecommerce-marketing/ecommerce-optimization | eCommerce Optimization Services \| Infused Agency |
| /ecommerce-marketing/ecommerce-seo | eCommerce SEO Services \| Infused Agency |
| /ecommerce-marketing/ecommerce-ppc | eCommerce PPC Services \| Infused Agency |
| /ecommerce-marketing/shopify-seo | Shopify SEO Services \| Infused Agency |
| /reputation-management | Reputation Management Services \| Infused Agency |
| /reputation-management/online-reputation-repair | Online Reputation Repair Services \| Infused Agency |

### 3. Three verticals moved from wave 4 to wave 2

`concrete-contractors`, `insulation-contractors` and `contractors` moved from
wave 4 (`offset 63`) to wave 2 (`offset 21`) in `launch.json`. Wave sizes are now
wave 1 = 8, **wave 2 = 13**, wave 3 = 10, **wave 4 = 13**, hold = 7 (still 44 + 7
= 51, no duplicates). Their new due date is `2026-11-01`. All three remain
`launchStatus: scaffold`, so despite releasing in wave 2 they still publish no
pages — the release only changes their scheduled date.

### 4. `/seo` and `/web-design` shown as "existing (exempt)"

`scripts/verify-vertical-seo.js` no longer lists the two pre-existing service
pages in the "Published service pages" table with zero counts. They are split
out into their own **"Existing (exempt) service pages"** table, and the counts
now read `Published: 19`, `Existing (exempt): 2` (console summary:
`Service published: 19 (+2 existing, exempt)`).

### 5. Nearest-duplicate service pairs added to the report

Added `nearestDuplicatePairs()` to `src/lib/services.js` (same-group sibling
pairing over content shingle sets, mirroring the vertical helper). The report now
has a **"Nearest duplicate service pairs (same group)"** table with Jaccard
scores. Current top pairs (all very low; the service corpus is well-differentiated
against the 0.3 failure threshold):

| Service A | Service B | Jaccard |
| --- | --- | --- |
| /reputation-management | /reputation-management/online-reputation-repair | 0.004 |
| /ecommerce-marketing/ecommerce-seo | /ecommerce-marketing/shopify-seo | 0.003 |
| /ecommerce-marketing | /ecommerce-marketing/ecommerce-ppc | 0.001 |
| /ecommerce-marketing/ecommerce-seo | /ecommerce-marketing/ecommerce-ppc | 0.001 |
| /ecommerce-marketing | /ecommerce-marketing/ecommerce-seo | 0.001 |

### Verification after the fixes

- `yarn build` — **pass** (wave 1 live, 329 pages). Cold 111.4s / warm 39.3s.
- `yarn test:seo` — **pass** (28/28). The schedule tests still pass with the new
  `startDate` and wave-2 membership.
- `yarn lint` — **pass** (pre-existing warnings only).
- `yarn verify:seo` — `verify-vertical-seo` and `validate-schema` pass; the
  `seo-regression` step still exits 1 on the same **11 pre-existing** Niagara
  `/seo/*` H2 changes (uncommitted redesign, out of scope). The white-label
  title fix is allowlisted and no longer a failure.

### Assumptions recorded

- **Timings persisted in the cache are the real gate/similarity times** from the
  compute that produced the cached result; the report labels them with
  `source: cache` so they are not mistaken for a fresh measurement.
- **`allowTitleChanges` is a new, explicit allowlist key** rather than a baseline
  edit, so the intentional white-label title fix is auditable and other title
  regressions are still caught.
- **The moved wave-2 scaffold verticals still publish nothing** — moving them is
  a scheduling change only.
- **The 111.4s cold build is a post-source-change full recompile**; the 39.3s
  warm build is the steady-state wave-1 build time.
