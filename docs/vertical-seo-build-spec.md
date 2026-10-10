# BUILD SPEC: Vertical × Geo SEO architecture for infused.agency

You are working in the existing infused.agency codebase (Next.js; detect Pages Router vs App Router and version yourself). Build the system described below on a new git branch `feat/vertical-geo-seo`. Do not touch unrelated pages. Work autonomously: where this spec is silent, choose the simplest option consistent with the existing codebase, and record the decision in `docs/vertical-seo-build.md`. Do not stop to ask questions.

---

## 0. Goal

Create a programmatic-but-genuinely-unique page system that lets Infused Agency rank for "{industry} SEO" searches at national, provincial, and city level in Canada, structured as pillar → province → city.

Competitor context: smartlinks.ca (WordPress/Rank Math) runs a templated city × service grid with near-identical pages. We win by having real per-page differentiation, a vertical dimension they lack, and a hard quality gate so thin pages never go live.

---

## 1. Non-negotiable rules

1. **No thin or duplicate pages in production.** Every indexable page must pass the quality gate (section 7). Pages that fail are not built in production.
2. **No fabricated facts.** Do not invent statistics, review counts, ratings, client results, addresses, regulator rules, or population numbers. If a fact is not provided in the data files or already on the current site, leave the field `null` and omit the block that needs it. Existing proof you MAY reuse (from the live homepage): Flat Rock Cellars +550% local visibility; Delta Energy Solutions +670% local visibility; testimonials from Fred's Concrete (Lucas Folino), Brandi May Psychotherapy, VISCA Electric (Sandro Visca). Use each only on pages where it is relevant to the vertical.
3. **No self-serving review/rating schema** (no AggregateRating/Review markup for Infused's own reviews).
4. **No build-time LLM/API calls.** Content is static files committed to the repo.
5. **Do not change the homepage, existing `/seo/<niagara-city>` pages, blog, work, about, or get-a-quote pages**, except for adding links (section 9) and the redirects in section 10.
6. **No new dependencies** unless unavoidable. If you add one, justify it in the docs file.
7. **URLs are exactly as specified**: lowercase, kebab-case, no trailing slash, accents stripped (`montreal`, `quebec-city`).
8. Titles must not be keyword-stuffed or repeat SEO variants. One primary phrase per title.

---

## 2. Phase 0: discovery (do this first, write findings to the docs file)

- Detect router type, Next version, package manager, TS/JS, styling system, existing layout/components, and how existing pages like `/seo/beamsville` and `/seo/for-therapists-canada` are implemented (dynamic route vs. individual files).
- Find existing sitemap generation. (`/sitemap` is currently an HTML page; check whether `/sitemap.xml` and `robots.txt` exist and how.)
- Find existing head/SEO component, schema helpers, breadcrumb components, and CTA components. Reuse them.
- Find how the existing therapist pages source content, so migration (section 10) preserves their copy.
- Vertical URLs now live at the site root (`/therapist-seo/...`, see section 3). List every existing top-level route and confirm none equals a vertical `urlSlug`. Next.js cannot match a partial dynamic segment like `[vertical]-seo`, so pick the least invasive of: (A) a root `[vertical]` dynamic route (merge into an existing root dynamic route if one exists; static routes like `/work` and `/about` keep priority) with `getStaticPaths`/`generateStaticParams` limited to the live `urlSlug` list, `fallback: false` / `dynamicParams = false`; or (B) an internal route folder plus a `rewrites` entry constrained with a regex such as `/:vertical(.+-seo)/:path*`. With (B), make sure the internal path is not reachable or indexable as a second URL. Either way, 404 anything unknown, and no page may be reachable at two URLs.

---

## 3. URL architecture

```
/{urlSlug}                                  Vertical pillar = Canadian market page (default country)
/{urlSlug}/{province}                       Province page
/{urlSlug}/{province}/{city}                City page
/{urlSlug}/usa                              (later) US country page
/{urlSlug}/usa/{state}/{city}               (later) US state/city pages
```

`urlSlug` is `{singular}-seo`: `therapist-seo`, `electrician-seo`, `concrete-contractor-seo`, `contractor-seo` (category hub). Example: `/therapist-seo/ontario/toronto`.

- Canada is the default country and does not appear in the URL. The pillar IS the Canada page, so it must cover both the concept (what {vertical} SEO is, why it differs, our process) and the Canadian market (provincial regulation landscape, Quebec/French considerations, province index) without padding.
- Reserved slugs: `usa` and any future country slug can never be a province slug. The verify script must enforce this.
- Do NOT build US pages now beyond migrating the existing therapist USA page to `/therapist-seo/usa` using the `country` template (section 5).
- The pillars are not nested under `/seo/`, but breadcrumbs still show the path: Home › SEO › {Vertical} › {Province} › {City}, where "SEO" links to `/seo`.
- Provinces in scope: ON, QC, BC, AB, SK, MB, NS, NB, NL, PE. Territories are out of scope (config-able, default off).
- Cities: top 5 per province (see seed data, section 11). City slug is unique within its province.
- Province slugs: `ontario`, `quebec`, `british-columbia`, `alberta`, `saskatchewan`, `manitoba`, `nova-scotia`, `new-brunswick`, `newfoundland-and-labrador`, `prince-edward-island`.

---

## 4. Data model (single source of truth, no hardcoded geo/vertical text in components)

Create `/data/vertical-seo/`:

**`verticals.ts|json`**: one entry per vertical:
`slug` (`therapists`), `urlSlug` (`therapist-seo`), `singular` (`therapist`), `plural` (`therapists`), `displayName` (`Therapists`), `parentSlug` (nullable; a trade such as `concrete-contractors` has parent `contractors`), `maxDepth` (`'country' | 'province' | 'city'`, default `'city'`; trades default to `'province'`, so no city pages are generated for them), `primaryKeywords[]`, `geoScope` (`{ provinces: 'all' | string[] }`: e.g. wineries only ON, BC, QC, NS), `launchStatus` (`live` | `scaffold`), `serviceEmphasis[]` (what SEO work matters most for this vertical), `buyerJourneyNotes`, `proofRefs[]` (ids from the proof registry), `defaultFaqs[]` (vertical-level, geo-neutral).

**`provinces.ts|json`**: `slug`, `name`, `abbr`, `capitalCity`, `languageNote`, `topCitySlugs[]`, `verified` (bool).

**`cities.ts|json`**: `slug`, `name`, `provinceSlug`, `population2021` (nullable), `metroNote` (nullable), `neighbourhoods[]` (nullable), `majorIndustries[]` (nullable), `verified` (bool).

**`vertical-geo/{vertical}/{province}.json`** (per vertical × province): `regulator` (name, nullable), `advertisingRulesNote` (nullable, plain-language summary of what that regulator restricts in online marketing; leave null unless verified), `provinceSearchNotes`, `verified` (bool).

**`content/verticals/{vertical}/{country|province|city path}.json`**: the unique prose per page. Fields: `status` (`draft` | `reviewed`), `updated` (ISO date; this feeds sitemap lastmod), `directAnswer` (40–60 words), `intro`, `localInsight` (unique to that geo+vertical), `localChecklist[]`, `faqs[]` (each with `q`, `a`, and `geoSpecific: boolean`), `summary` (used for meta description, 140–155 chars), `proofRefs[]`.

**`proof.ts`**: registry of the real proof items listed in rule 2 with the vertical(s) each is relevant to.

Quebec: set `languageNote` that Quebec businesses face French-language website requirements under the Charter of the French Language (Bill 96). Quebec pages must mention this and state that French-language SEO is a consideration. Do not build French pages now.

---

## 5. Page templates

Build four templates (pillar, province, city, and a `country` template used only for the migrated `/usa` page) sharing one layout system and the existing site design/components. Each page renders sections only when their data exists (no empty headings, no filler).

**Vertical pillar `/{urlSlug}`** (also the Canada page)
H1 → direct answer → why {vertical} SEO differs → our process for this vertical (from `serviceEmphasis`) → Canadian market overview → provincial regulation landscape (table of provinces and regulators, verified rows only) → Quebec/French consideration → province index grid → proof → FAQs → CTA.

**Country `/{urlSlug}/usa`** (migrated page only, for now)
Built from the existing therapist USA copy, extended. Same section pattern as the pillar, minus the Canadian regulation and Quebec blocks.

**Province `/{urlSlug}/{province}`**
H1 → direct answer → how {vertical} search works in {province} (`provinceSearchNotes`) → regulator/advertising block (verified only) → city index (the 5 cities, linking only to published city pages) → proof → FAQs → CTA.

**City `/{urlSlug}/{province}/{city}`**
H1 → direct answer → how {vertical} search works in {city} (`localInsight`, neighbourhoods, industries) → province rules block (verified only) → what we do (order and emphasis driven by `serviceEmphasis`) → local checklist → proof (only if relevant proof exists) → FAQs (≥6, ≥3 `geoSpecific`) → related links (section 9) → CTA.

All CTAs point to `/get-a-quote`.

---

## 6. Metadata and schema

Titles (aim ≤ 60 chars; build warns above 65):

- Pillar: `SEO for {Plural Title Case} in Canada | Infused Agency`
- US country page: `SEO for {Plural} in the USA | Infused Agency`
- Province: `{Singular Title} SEO in {Province} | Infused Agency`
- City: `{Singular Title} SEO in {City}, {Abbr} | Infused Agency`
  Meta description = the page's `summary` field (unique per page, 140–155 chars). Never templated boilerplate. Self-referencing canonical. Open Graph/Twitter tags consistent with existing site. No `hreflang` yet.

JSON-LD (validate it parses):

- `BreadcrumbList` on every page.
- `Service` (provider = existing Organization/LocalBusiness entity for Infused Agency; reuse existing schema if present; `areaServed` = `Country`/`AdministrativeArea`/`City` matching the page).
- `FAQPage` where FAQs are rendered (note: rich results are restricted, but keep the markup valid; the content matters more for AI-search extraction).
- Never AggregateRating/Review for Infused itself.

---

## 7. Quality gate (build-time, blocking)

Create `scripts/verify-vertical-seo.ts` and wire it into the build (`prebuild` or equivalent) plus a standalone `pnpm|npm run verify:seo`.

A page is **publishable** only if ALL of these hold:

1. `status === 'reviewed'` (or env `VERTICAL_SEO_INCLUDE_DRAFTS=true`, which is for local/preview only and must be false in production).
2. Unique prose ≥ 400 words (count only `intro`, `localInsight`, `localChecklist`, geo-specific FAQ answers; exclude boilerplate and nav).
3. At least 4 populated unique-data fields among: neighbourhoods, majorIndustries, population2021, provinceSearchNotes, verified regulator/advertising note, `localInsight`, proof ref.
4. Similarity: 5-word-shingle Jaccard similarity of unique prose against every sibling page in the same vertical and level ≤ 0.35. Also ≤ 0.35 against the same geo in other verticals.
5. `summary` length 140–155; title ≤ 65; exactly one H1; all internal links resolve to published pages.
6. Not a duplicate of an existing Niagara city page's topic (vertical pages must never target "SEO {niagara city}").
7. Slug integrity: every `urlSlug` is unique and does not collide with an existing top-level route; no province/state slug equals a reserved country slug (`usa`); every URL is lowercase kebab-case with no trailing slash.
   Pages failing the gate are not generated in production (404). The script outputs `docs/vertical-seo-report.md`: counts by status, every failed page with the failing rule, nearest-duplicate pairs with scores. A failing gate on a page must not fail the whole build; a malformed data file or broken link on a published page must.

---

## 8. Sitemaps, robots

- Produce `/sitemap.xml` as a sitemap index (preserve any existing sitemap entries) plus child sitemaps: existing pages, and one per live vertical (`sitemap-vertical-therapists.xml`, etc.). Only publishable pages are included.
- `lastmod` comes from each content file's `updated` field. Never use build time.
- `robots.txt` references the index. Keep the existing `/sitemap` HTML page; add the vertical pillar and province pages (not cities) to it.
- Optional: `/llms.txt` listing the vertical pillars and country pages with one-line descriptions.

---

## 9. Internal linking rules

- Every page links up to its parent (breadcrumb + in-body link).
- Pillar → all published provinces; province → its published cities; city → its province.
- City → up to 4 sibling cities in the same province, same vertical (published only).
- City → the same city in up to 3 other published verticals (cross-vertical block).
- Link each live vertical pillar from the `/seo` page and from the `/services` page via a compact "SEO by industry" block. Do not add links to the homepage footer.
- Never link to unpublished pages. Anchor text varies, descriptive, no exact-match stuffing. No page has more than ~40 body links.
- Ontario province pages include a short "Based in St. Catharines" contextual link to `/seo/st-catharines`.

---

## 10. Redirects and migration

- `/seo/for-therapists-canada` → `/therapist-seo` (301)
- `/seo/for-therapists-usa` → `/therapist-seo/usa` (301)
- Migrate their existing copy into content files. Preserve existing wording as the base, then extend. The old Canada page's content becomes the base of the new pillar.
- Update any internal links pointing to the old URLs (including sitemap, nav, blog posts).
- Implement redirects the way the codebase already does (next.config redirects, or the platform's config such as `netlify.toml`/`vercel.json`; detect which).

---

## 11. Seed data

**Verticals.** Only `therapists` is `launchStatus: 'live'` (migrated from the existing therapist pages). `contractors` is a category pillar (`parentSlug: null`) with trade children, all `launchStatus: 'scaffold'` for now: `concrete-contractors` (`concrete-contractor-seo`), `insulation-contractors` (`insulation-contractor-seo`), `electricians` (`electrician-seo`), then `roofers`, `plumbers`, `hvac-contractors`, `landscapers`, each following the `{singular}-seo` pattern. Each trade is its own vertical with `parentSlug: 'contractors'`, `maxDepth: 'province'`, and its own URL (`/electrician-seo`), never nested under a generic "contractors" slug, because people search for "electrician SEO", not "contractor SEO". `/contractor-seo` is a category hub that links to published trade pillars only. Scaffold = data and empty content stubs exist; nothing is built or routed.

**Cities (top 5 per province). Mark all `verified: false`; the maintainer will confirm against 2021 Census:**

- ON: Toronto, Ottawa, Mississauga, Brampton, Hamilton
- QC: Montreal, Quebec City, Laval, Gatineau, Longueuil
- BC: Vancouver, Surrey, Burnaby, Richmond, Abbotsford
- AB: Calgary, Edmonton, Red Deer, Lethbridge, St. Albert
- SK: Saskatoon, Regina, Prince Albert, Moose Jaw, Swift Current
- MB: Winnipeg, Brandon, Steinbach, Winkler, Thompson
- NS: Halifax, Sydney, Truro, New Glasgow, Kentville
- NB: Moncton, Saint John, Fredericton, Dieppe, Miramichi
- NL: St. John's, Mount Pearl, Corner Brook, Conception Bay South, Paradise
- PE: Charlottetown, Summerside, Stratford, Cornwall, Kensington
  **Therapist regulators:** title-dependent (psychotherapist, psychologist, counsellor, social worker are regulated by different bodies per province). Leave `regulator` and `advertisingRulesNote` null with `verified: false`; the maintainer fills them in.

---

## 12. Content to write in THIS run (launch scope)

Volume limits make full prose for every page unrealistic in one session. In this run, write complete, genuinely unique `reviewed` content for:

- **Therapists only:** pillar (which is also the Canada page), all 10 provinces, the 5 Ontario cities, and the migrated `/therapist-seo/usa` page (migrate existing Canada/USA copy first).
  Write each page as if by a specialist: concrete, specific to the vertical's actual client acquisition (e.g. directory competition (e.g. Psychology Today-style listings), specialization pages, intake and booking behaviour, trust signals, client-confidentiality sensitivities in marketing), and specific to the geography. Do not pad. If you cannot honestly reach the unique-word and unique-field thresholds for a page without inventing facts, leave it `draft` and let the gate exclude it.

For all other pages (remaining cities, contractor trades), generate content stubs with `status: 'draft'` and a `docs/content-backlog.md` listing every page, its status, and which data fields are missing. Add `npm run content:status` that prints counts by vertical and status.

---

## 13. Acceptance criteria (run and report results)

1. `build`, `lint`, and `typecheck` pass on the branch.
2. `verify:seo` passes; report counts: published, draft-excluded, gate-failed.
3. Every published URL returns 200 with exactly one H1, one canonical, unique title, unique meta description, valid JSON-LD.
4. Every unknown or draft URL under a vertical `urlSlug` returns 404, and no existing top-level route collides with a vertical `urlSlug`.
5. Both old therapist URLs 301 to the new ones, with zero redirect chains.
6. Sitemap index validates; contains only published pages; child sitemap URLs match published routes exactly.
7. No orphan pages: every published page is reachable from the pillar through crawlable `<a>` links within 4 clicks of `/seo`.
8. Existing Niagara city pages, homepage, and blog render unchanged.
9. A short test (script or unit) covering slug generation, gate logic, and sitemap filtering.

## 14. Deliverables

- Code on `feat/vertical-geo-seo` (commit in logical steps, clear messages).
- `docs/vertical-seo-build.md`: discovery findings, decisions, how to add a vertical, how to add a province/city, how to promote a page `draft` → `reviewed`.
- `docs/vertical-seo-report.md` (generated) and `docs/content-backlog.md`.
- A final summary listing what was built, what failed the gate and why, and the recommended next batch of content to write.
