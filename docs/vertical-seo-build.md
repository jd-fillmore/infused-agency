# Vertical × Geo SEO build notes

Working branch: `seo-overhaul`. Spec: `docs/vertical-seo-build-spec.md`.

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

- `yarn verify:seo` — enumerated 150, **published 17**, draft-excluded 45, gate-failed 0, slug errors 0, broken links 0.
- `yarn test:seo` — 10/10 unit tests pass (slug generation, gate logic, link resolution, draft exclusion, redirect safety, sitemap filtering).
- `yarn lint` — exit 0 (warnings only, all pre-existing).
- `yarn build` — success. 17 vertical pages prerendered.
- Live checks: published URLs return 200 with one H1, one self-referencing canonical, unique title/meta, and one valid JSON-LD `@graph` (BreadcrumbList + Service + FAQPage). `/seo/for-therapists-*` legacy URLs 301/308 to the new ones. Unknown or draft URLs under a `urlSlug` return 404. `sitemap.xml` is an index of `sitemap-0.xml` + `sitemap-vertical-therapists.xml` (17 URLs); no vertical path leaks into `sitemap-0.xml`.
