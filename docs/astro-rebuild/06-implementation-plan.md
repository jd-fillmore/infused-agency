# Phase 2 Implementation Plan: Astro Rebuild and Premium Redesign

Status: implementation plan only. No Astro code, production change, redirect change, content rewrite, commit, or deployment has been made.

Prepared: 2026-10-22

Audit baseline: commit `0d2c44b`, local build plus crawl performed 2026-10-22/23. Reports `01-inventory.md` through `05-risks-and-open-questions.md` and the two CSVs are the primary evidence. This plan resolves the remaining inventory discrepancies where the source code and verifier disagree with the prose reports.

## Executive summary

This plan migrates infused.agency from Next.js (Pages Router) to a static-first Astro build while leaving the current production site untouched. Goals: preserve URLs/content/SEO where correct, fix confirmed defects (broken links, redirect debt, orphan clusters, metadata gaps), and deliver a premium light redesign in Infused's blue/indigo palette with accessible CSS-first animations. All changes are planned only - no implementation, commits, deploys, or configuration changes during Phase 2. The route manifest, redirect register, and explicit owner decisions gate all later phases.

The rebuild is a **migration plus redesign**, not a redesign that rebuilds content from scratch. The existing 219 successful routes, their copy, their metadata intent, their schema entities, and the working conversion path must survive the framework change. The visual layer is replaced; the URL and content layer is preserved except where the owner explicitly approves a consolidation.

## 1. Outcomes

At completion the site will have:

- A static-first Astro build on Node 22, with no React runtime and no legacy Bootstrap/Sass layer.
- A premium light design in Infused's blue/indigo palette, with a consistent CSS-only motion system and a small number of accessible vanilla-JS enhancements.
- Every current `200` URL accounted for as preserve, redirect, noindex, or approved removal.
- Every one of the 121 current redirect rules audited; the 30 rules that currently end at `404` resolved; no redirect chains, loops, duplicate sources, spaces, or redirecting sitemap entries.
- A sitemap containing canonical, indexable `200` URLs only.
- Metadata, canonical, H1, Open Graph, Twitter, and JSON-LD parity or deliberate improvement on every indexable page.
- The general-contractor cluster, the orphaned pages, and the broken internal links resolved rather than copied forward.
- Performance, accessibility, and SEO checks running in CI against the built output.

## 2. Verified baseline

### 2.1 Build and crawl counts

| Measure | Value | Interpretation |
| --- | ---: | --- |
| Routes crawled | 263 | `219` 200 + `41` 308 + `3` 404 |
| Production route entries | 262 | Includes `/dev/styleguide`, which returns `notFound` in production |
| HTML files emitted | 261 | `/dev/styleguide` contributes a route but no usable page HTML |
| Crawled 404 probes | 3 | `/404`, `/404`-served `/500`, and production-disabled `/dev/styleguide` |
| Sitemap URLs | 260 | `219` 200 + `41` 308 |
| Indexable 200 pages missing from sitemap | 0 | Sitemap is over-inclusive, not under-inclusive |
| Redirect rules | 121 | `8` configured 301, `113` configured 308 |
| Actual first-hop statuses | 4x 301, 115x 308, 2x 404 | Trailing-slash normalisation changes first-hop status |
| Redirect failures | 30 | All finalise at `404` |
| Redirect chains | 5 | 4 end at `200`, 1 ends at `404` |
| Redirect loops | 0 | None found |
| Duplicate redirect source | 1 | `/posts/how-can-i-generate-website-traffic-with-0-marketing-budget` |

The count reconciliation is:

- `262` Astro-equivalent source routes plus the synthetic `/500` probe equals the `263` crawled paths.
- `/404` is an intentional error route.
- `/500` is not a source route; Next serves its default 404 because `src/pages/500.js` does not exist.
- `/dev/styleguide` returns `notFound` in production, which explains `262` route entries versus `261` emitted page HTML files.

The `page-inventory.csv` remains the authoritative one-row-per-route list. The build output is authoritative for the current published vertical count, not the stale reports.

### 2.2 Route families and verified discrepancies

| Family | Routes | 200 | 308 | 404 | Migration treatment |
| --- | ---: | ---: | ---: | ---: | --- |
| Home | 1 | 1 | 0 | 0 | Preserve |
| Service pages | 21 | 21 | 0 | 0 | Preserve, data-driven |
| Vertical SEO | 52 | 52 | 0 | 0 | Preserve published gate |
| Niagara industry SEO | 54 | 54 | 0 | 0 | Preserve, template/data migration |
| Concrete niche | 31 | 31 | 0 | 0 | Preserve, data-driven |
| Legacy therapist | 46 | 6 | 40 | 0 | Keep 6 US pages; keep 40 redirects out of sitemap |
| City SEO | 9 | 9 | 0 | 0 | Preserve |
| Web design city | 11 | 11 | 0 | 0 | Preserve |
| Blog | 17 | 17 | 0 | 0 | Preserve `/blog` and posts; consolidate `/posts` with approval |
| Static | 15 | 14 | 1 | 0 | Preserve with exceptions |
| Services hub | 1 | 1 | 0 | 0 | Preserve |
| Industries hub | 1 | 1 | 0 | 0 | Preserve |
| HTML sitemap | 1 | 1 | 0 | 0 | Preserve and fix metadata |
| Error | 2 | 0 | 0 | 2 | Implement Astro 404 and 500 |
| Dev styleguide | 1 | 0 | 0 | 1 | Exclude from production build |
| **Total** | **263** | **219** | **41** | **3** | |

**Verified discrepancies (source of truth):**
- **Counts:** 263 routes crawled, 262 route entries in build, 261 HTML files emitted. The +1 entry is `/dev/styleguide` which returns `notFound` in production; `/500` is not a source route (Next serves default 404 when missing). `/404` is intentional.
- **Verticals:** Build produces 52 published vertical pages (10 general contractors + 42 therapists). Committed docs say 53 and mention a Prince Edward Island general-contractor page; there is no current PEI GC source file in `data/vertical-seo/content/verticals/general-contractors/`. The build/publish gate is authoritative. PEI GC is not fabricated - treat as either stale documentation or unapproved addition (see D16).
- **Sitemap:** 260 URLs total, but 41 return 308 (40 legacy therapist + `/reviews`). 219 sitemap URLs return 200; 0 pages return 200 and are missing from sitemap. Sitemap is over-inclusive of redirecting URLs.
- **Legacy therapist:** 46 source files correspond to 40 redirects + 6 live US pages (verified against redirect map count of 40). Docs previously said 39 - corrected to 40.
- **Route authority:** Use `page-inventory.csv` as the canonical URL list; cross-check against source files and computed published sets. Generated outputs take precedence over stale markdown reports.

### 2.3 Redirect truth

The redirect verifier resolves the prose ambiguity:

- `121` rules exist.
- `40` legacy therapist redirects come from `getPublishedRedirects()`.
- `29` unique legacy blog sources exist, represented by `30` rule entries because one source is duplicated.
- `30` rules end at `404`.
- Of those 30:
  - `25` have destinations that do not exist in `posts/`.
  - `3` are legacy blog sources ending in `/` that do not match the encoded request, even though their configured destination `/` is live.
  - `2` contain literal spaces in the source and cannot match the encoded request.
- The audit sentence saying all 28 failing legacy blog rules have missing final URLs is imprecise. The precise split is `25` missing destinations plus `3` source-normalisation failures.
- `5` chains: four trailing-slash normalisations end at `200`; one blog chain ends at `404`.
- One duplicate source: `/posts/how-can-i-generate-website-traffic-with-0-marketing-budget`.
- `41` sitemap entries return `308`: 40 legacy therapist URLs plus `/reviews`.

The verifier also confirms `LEGACY_REDIRECT_MAP` has 40 entries, not 39 as stated in `docs/legacy-redirect-map.md`. The 46 legacy therapist files comprise 40 redirects and 6 live US pages.

### 2.4 Current link and reachability debt

- `21,292` anchor occurrences; `20,213` internal.
- `439` internal occurrences hit redirects across `437` grouped source-target rows.
- `436` of those occurrences are the two deleted city pages: `/seo/st-catharines` and `/seo/niagara-falls`, each 218 occurrences from 217 source pages.
- `3` internal links return `404`.
- `21` pages are unreachable from `/`; `11` have zero inbound links; the other `10` are the general-contractor cluster.
- `198` pages are reachable within three clicks.
- The general-contractor pillar has 9 inbound links, all from its own province pages.
- `/posts` has zero inbound links, is in the sitemap, and has no canonical.
- `/get-started` has zero inbound links and its form is commented out.
- `/postLink` is an accidental component page with no metadata, H1, or canonical.
- `20` absolute internal links live in four posts, including one `localhost:3000` link.

### 2.5 Metadata and schema debt

- `219` indexable pages checked.
- `2` missing titles and descriptions: `/postLink`, `/sitemap`.
- `7` missing canonicals: `/cass-a-bella-construction`, `/get-started`, `/kd-florist`, `/postLink`, `/posts`, `/sitemap`, `/tree-reports`.
- `6` H1 problems: `/postLink` has none; five posts render two H1s.
- `31` titles over 60 characters and `48` descriptions over 160 characters.
- `219` pages lack `og:image`; `42` lack `og:title` and Twitter metadata.
- `21` pages have no JSON-LD; `198` have valid JSON-LD.
- All `219` sitemap `200` URLs are present, but `41` redirect URLs pollute the sitemap.
- HTML uses `lang="en"` while schema uses `en-CA`.

### 2.6 Design and platform constraints

- Existing visual direction is a light, premium, typographic agency site in Infused's own blue/indigo palette. Poppins at 400/500/600/700 is the approved family.
- The reference site is a feel reference only. Do not copy copy, layout, assets, palette, icons, or code.
- The current app imports 41 CSS/SCSS files, Bootstrap 4, Tailwind v4 with `!important`, and legacy rescue CSS. This must not be carried into Astro.
- No form backend exists. `/get-a-quote` uses the Calendly inline widget. Formspree is installed but unused.
- GA4 and Microsoft Clarity load unconditionally; there is no consent mechanism.
- CI runs on `main`, while production is `master`. Both `yarn.lock` and `package-lock.json` are present.
- Netlify pins Node 22. The daily wave deploy uses `DEPLOY_HOOK_URL` and `scripts/should-deploy-today.js`.

## 3. Guardrails

These are release blockers, not cleanup suggestions:

1. Do not lose or silently rename a working `200` URL.
2. Do not copy `next.config.js` redirects wholesale. Treat every rule as data requiring a decision.
3. Do not send unrelated retired URLs to `/`. Use the most relevant live hub, or an approved `410` for content with no replacement.
4. Do not leave a redirect source, chain, loop, duplicate, or space in the final map.
5. Do not include redirects, noindex pages, error pages, or prototypes in the sitemap.
6. Do not change titles, descriptions, H1s, body copy, schema, or claims during structural migration without owner approval. Flag issues instead.
7. Do not carry unverified claims forward. Existing claims such as "40+ five-star", "over 10 years", and client counts require owner confirmation and, where applicable, a public source.
8. Do not load analytics before a documented consent decision.
9. Do not introduce client-side React, a CSS framework, jQuery, a carousel library, or an animation library. Use CSS and small vanilla-JS islands.
10. Do not ship motion that hides content from crawlers, no-JS users, or reduced-motion users, or that causes layout shift.
11. Keep the existing Calendly conversion path available, with a non-JavaScript fallback link.
12. No production deploy or DNS change until the owner signs the preview and redirect manifest.

## 4. Target Astro architecture

### 4.1 Stack

- Current stable Astro, pinned at implementation time.
- `output: "static"`; no server adapter for the initial rebuild. `/blog?page=N` does not need server rendering if the listing is rendered as one static page.
- Node 22, Yarn, TypeScript strict for build-time modules and Astro components.
- Existing JSON and Markdown remain the content sources of truth. Do not fork the content into a second system.
- No React integration. No Bootstrap. No legacy Sass. One CSS entry point.
- Build-time validation scripts in `scripts/`; runtime JavaScript only for accessibility and interaction.

### 4.2 Proposed repository shape

```text
astro.config.mjs
src/
  layouts/
    BaseLayout.astro
    PageLayout.astro
    ArticleLayout.astro
  components/
    seo/SeoHead.astro
    seo/JsonLd.astro
    nav/Nav.astro
    nav/MegaMenu.astro
    nav/MobileMenu.astro
    nav/TopBar.astro
    footer/Footer.astro
    ui/Button.astro
    ui/Card.astro
    ui/ServiceCard.astro
    ui/Section.astro
    ui/PageHero.astro
    ui/Breadcrumb.astro
    ui/Accordion.astro
    ui/StatBlock.astro
    ui/TestimonialCard.astro
    ui/Icon.astro
    ui/Image.astro
    ui/ConsentNotice.astro
    forms/CalendlyEmbed.astro
  templates/
    HomePage.astro
    ServicePage.astro
    VerticalPillarPage.astro
    VerticalProvincePage.astro
    VerticalCityPage.astro
    IndustryPage.astro
    ConcreteCityPage.astro
    CitySeoPage.astro
    WebDesignCityPage.astro
    BlogIndexPage.astro
    BlogPostPage.astro
    HtmlSitemapPage.astro
  pages/
    index.astro
    [...service].astro
    [vertical]/
    seo/
    web-design/
    posts/
    blog.astro
    404.astro
  content/
    posts/
    verticals/
  data/
    routes.ts
    redirects.ts
    site.ts
  styles/
    reset.css
    tokens.css
    base.css
    layout.css
    components.css
    motion.css
    utilities.css
    global.css
  lib/
    published.ts
    services.ts
    schema.ts
    posts.ts
    seo.ts
    routes.ts
scripts/
  validate-content.mjs
  validate-redirects.mjs
  validate-sitemap.mjs
  validate-links.mjs
  validate-seo-parity.mjs
public/
  _redirects
  robots.txt
  og/
  fonts/
  images/
```

Exact filenames can change; the boundaries cannot. Content and publish-gate modules must be shared by page generation, sitemap generation, redirect generation, and validation.

### 4.3 Build-time data flow

1. Load `data/services/services.json`, `data/services/content/*.json`, `data/vertical-seo/*`, `src/generated/services-nav.json`, and the Markdown posts.
2. Validate every record against a schema.
3. Compute published services and verticals using the existing gates. Preserve wave dates and destination filtering.
4. Generate the canonical route manifest and static page paths.
5. Generate sitemap child files from the same manifest.
6. Generate `_redirects` from the redirect register.
7. Run parity, link, redirect, sitemap, metadata, and schema validators against `dist/`.
8. Fail the build on any unaccounted route, redirect failure, sitemap non-200, missing canonical, or broken internal link.

The route manifest is the single source of truth shared by page generation, sitemap, redirects, and QA.

### 4.4 Rendering and islands

Static HTML is the default. The following are the only planned client-side enhancements:

| Enhancement | Implementation | Why needed |
| --- | --- | --- |
| Desktop mega menu | Small vanilla-JS controller or CSS `:focus-within` plus a custom element | Keyboard, Escape, touch, delayed open/close |
| Mobile menu | Vanilla-JS disclosure with focus management | Accessibility |
| Sticky header state | `IntersectionObserver` or scroll listener with passive event | Visual polish only |
| FAQ accordion | Native `<details>` plus CSS grid-row transition | No JS required |
| Scroll reveal | `IntersectionObserver` adds a class after paint; content visible by default | Optional polish |
| Industry filter, if retained | Vanilla-JS filter with visible no-JS fallback | Preserve current browse behaviour |
| Portfolio carousel/lightbox | CSS scroll-snap plus native `<dialog>`/link fallback | Replace Slick/Swiper/lightgallery |
| Calendly | Lazy-loaded embed with an always-visible booking link | Conversion |
| Consent | Small first-party banner/controller or owner-selected CMP | Privacy |

No framework hydration is required. If a later phase adds Astro View Transitions, it is progressive enhancement only, must not delay content, and must be disabled for reduced motion.

## 5. Route and URL disposition

### 5.1 Route manifest

Create `docs/astro-rebuild/route-manifest.csv` during implementation with one row for each of the 263 current routes:

```text
url,family,current_status,current_indexable,current_sitemap,source,disposition,final_url,status_after,indexable_after,sitemap_after,owner,reason
```

Allowed `disposition` values:

- `preserve`
- `preserve_noindex`
- `canonicalize`
- `redirect_301`
- `remove_410`
- `restore_or_owner`
- `error_page`
- `exclude_from_build`
- `owner_decision`

No URL leaves this table unresolved. The manifest is reviewed before any template migration.

Create `docs/astro-rebuild/redirect-register.csv` with one row for each of the 121 current rules:

```text
source,current_destination,current_status,current_final_status,decision,new_destination,new_status,reason,owner
```

The generated `_redirects` file must be reproducible from this register.

### 5.2 Default dispositions by family

| Family | Default | Exceptions |
| --- | --- | --- |
| Home, services, hubs, city/industry/concrete pages | Preserve exact path and copy | None |
| Published vertical pages | Preserve exact path; gate by publish date | Use current build (52), not stale 53 |
| 6 US legacy therapist pages | Preserve as `200` until owner decides | Add canonical/schema/metadata |
| 40 legacy therapist URLs | 301 to their current live destination | Remove from sitemap |
| `/blog` and `/posts/<slug>` | Preserve | Normalize post metadata and H1 |
| `/posts` | 301 to `/blog` with owner approval | If not approved, self-canonical to `/blog` and remove from sitemap |
| `/reviews` | Keep 301 to `/get-a-quote`; remove from sitemap | Restore only if real review content is supplied |
| `/postLink` | Remove from build; `410` or no public route | Never carry forward as an indexable page |
| `/get-started` | 301 to `/get-a-quote` unless a real form endpoint is supplied | Owner decision |
| `/dev/styleguide` | Exclude from production build | Keep a noindex dev-only styleguide |
| `/404` | Implement real Astro 404 | Preserve status |
| `/500` | Add real Astro 500 | Fix current default-404 behaviour |
| `/sitemap` | Preserve, add title/description/self-canonical | Remove redirecting links |
| Orphan case studies | Preserve and link from relevant hubs, or redirect with owner approval | Do not silently drop |

### 5.3 Specific page defects

| Page | Defect | Plan |
| --- | --- | --- |
| `/areas-we-serve` | Orphan; links to missing `/seo/wainfleet` | Link from a relevant hub; replace the Wainfleet target with `/seo` or remove the link |
| `/process` | Orphan; links to missing `/niagara-seo-company` | Link from About/Services; replace target with `/seo` |
| `/wordpress-developer-niagara` | Orphan; links to missing `/niagara-seo-company` | Link from Web Design; replace target with `/seo` |
| `/get-started` | Orphan; form commented out | Redirect to `/get-a-quote` or restore with a real endpoint |
| `/postLink` | Accidental component page | Exclude from build |
| `/posts` | Indexable duplicate blog listing | 301 to `/blog` |
| `/cass-a-bella-construction`, `/kd-florist`, `/tree-reports` | Orphan case studies, missing canonical | Link from Work and add self-canonical |
| `/effective-web-design-steps`, `/website-conversion-optimization` | Orphan service content | Link from relevant service hub or redirect with approval |
| `/seo/st-catharines`, `/seo/niagara-falls` | Linked from every page but redirect to `/` | Remove links; retarget redirects to `/seo` unless pages are restored |
| General-contractor cluster | 10 pages unreachable from `/` | Add pillar link from `/industries` and footer; keep province links from pillar |
| `/posts/common-seo-mistakes-and-how-to-avoid-them` | Linked with trailing slash from two posts | Normalize all post internal links |
| `/blog?page=2` | Server-rendered query page canonicalised to `/blog` | Render all 15 posts statically on `/blog`; ignore query params |

### 5.4 Canonical URL rules

- Canonical origin: `https://infused.agency`.
- Lowercase paths only.
- No trailing slash. Set Astro `trailingSlash: "never"` and use directory output for host compatibility.
- One canonical per indexable page; self-referencing unless it is an approved consolidation.
- Canonicals point to final `200` URLs, never to redirects.
- Query strings do not create canonical variants. `/blog?page=N` canonicalises to `/blog`.
- No canonical on `404`, `500`, prototypes, or noindex utility pages.
- `en-CA` is the document and schema language, matching the business locale.

## 6. Redirect migration

### 6.1 Rules of the final map

- Use `301` for all permanent content moves and consolidations. Use `308` only where the host generates it automatically and it cannot be avoided.
- Every destination must be a canonical `200` URL in the new build.
- No chains: one hop from source to final destination.
- No loops.
- No duplicate sources.
- No literal spaces; use lower-case hyphenated sources and URL-encoded variants only if analytics show real demand.
- No redirect source may also be a generated `200` route.
- No redirect source belongs in the sitemap.
- Redirect both slash variants only when necessary, and validate that both resolve in one hop.
- Internal links always point to final destinations, never redirects.
- Prefer a relevant hub or live page over `/`; use `/` only for genuine site-level consolidation approved by the owner.
- Use `410` only for content intentionally retired with no replacement; do not use `410` as a substitute for fixing a redirect.

### 6.2 Resolving the 30 failures

The provisional destination below is the recommended mapping. The owner approves the list before implementation.

#### 25 legacy blog posts with missing destinations

Default policy: map to the closest live post, case study, or process page; use `/blog` only where no closer page exists.

| Source | Missing current destination | Proposed 301 destination |
| --- | --- | --- |
| `/posts/best-practices-cta-buttons` | `/posts/3-best-practices-for-high-converting-cta-buttons` | `/posts/how-to-create-a-lead-generating-website` |
| `/posts/3-things-your-website-needs-to-bring-in-more-revenue` | `/posts/3-things-website-needs-to-bring-in-revenue/` | `/posts/how-does-seo-help-your-business-grow` |
| `/posts/10-best-seo-strategies-2021/` | `/posts/10-of-the-best-seo-strategies-for-2021` | `/posts/get-your-website-to-top-of-google` |
| `/posts/10-tips-how-to-create-effective-landing-page/` | `/posts/10-tips-on-how-to-create-an-effective-landing-page` | `/posts/how-to-create-a-lead-generating-website` |
| `/posts/best-strategies-rank-higher-google-maps-pack/` | `/posts/best-strategies-techniques-to-rank-higher-in-google-maps-pack` | `/posts/local-seo-domination-small-business` |
| `/posts/web-design-for-small-businesses/` | `/posts/crafting-a-powerful-online-presence-web-design-tips-for-small-businesses` | `/posts/web-design-impacts-content-marketing` |
| `/posts/visual-heirarchy-web-design/` | `/posts/creating-visual-hierarchy-in-web-design-guiding-users-with-design-principles` | `/posts/web-design-impacts-content-marketing` |
| `/posts/web-design-trends` | `/posts/exploring-the-top-web-design-trends-of-2023-a-visual-revolution` | `/posts/web-design-impacts-content-marketing` |
| `/posts/how-to-make-website-AODA-compliant/` | `/posts/how-do-i-make-my-website-aoda-wcag-accessibility-compliant` | `/blog` |
| `/posts/boost-business-sales-web-design/` | `/posts/how-do-we-boost-our-business-sales-with-web-design` | `/posts/how-to-create-a-lead-generating-website` |
| `/posts/how-to-create-effective-website-layout/` | `/posts/how-to-create-an-effective-website-layout-for-better-user-experience` | `/posts/web-design-impacts-content-marketing` |
| `/posts/make-website-load-faster-pictures/` | `/posts/how-to-make-a-website-load-faster-with-pictures` | `/blog` |
| `/posts/mastering-local-seo/` | `/posts/mastering-local-seo-7-strategies-to-boost-your-local-business` | `/posts/local-seo-domination-small-business` |
| `/posts/web-performance-optimization/` | `/posts/maximizing-user-experience-the-art-of-web-performance-optimization` | `/posts/get-your-website-to-top-of-google` |
| `/posts/new-website-tree-reports/` | `/posts/new-website-launched-treereports` | `/tree-reports` |
| `/posts/on-page-seo-best-practices/` | `/posts/on-page-seo-best-practices-optimizing-your-website-for-search-engines` | `/posts/get-your-website-to-top-of-google` |
| `/posts/web-design-process/` | `/posts/our-8-step-web-design-process-for-2019` | `/process` |
| `/posts/seo-vs-ppc` | `/posts/seo-vs-ppc-which-should-you-use` | `/posts/how-does-seo-help-your-business-grow` |
| `/posts/website-sales-speed-engagement` | `/posts/the-crucial-link-between-website-speed-sales-and-customer-engagement` | `/blog` |
| `/posts/power-of-backlinks/` | `/posts/the-power-of-backlinks-building-a-strong-link-profile` | `/posts/get-your-website-to-top-of-google` |
| `/posts/white-space-web-design` | `/posts/the-importance-of-white-space-in-web-design` | `/posts/web-design-impacts-content-marketing` |
| `/posts/power-of-video-seo/` | `/posts/unlocking-the-power-of-video-seo-boost-your-visibility-and-engagement` | `/blog` |
| `/posts/seo-in-web-design/` | `/posts/unveiling-the-importance-of-seo-in-web-design` | `/posts/web-design-impacts-content-marketing` |
| `/posts/seo-steps-new-website/` | `/posts/what-are-the-steps-involved-for-doing-seo-for-a-new-website` | `/posts/get-your-website-to-top-of-google` |
| `/posts/drive-visitors-to-new-website/` | `/posts/what-is-the-best-method-to-drive-visitors-to-a-new-website` | `/posts/how-to-create-a-lead-generating-website` |

#### 3 source-normalisation failures that currently end at 404

Add the trailing-slash variant explicitly or, preferably, redirect the non-slash source and let the host canonicalise the slash in one hop.

| Source | Proposed 301 destination |
| --- | --- |
| `/5-effective-seo-techniques-for-landscaping-companies/` | `/seo/for-landscapers-niagara` |
| `/posts/how-to-build-a-website-with-good-seo-in-mind/` | `/posts/get-your-website-to-top-of-google` |
| `/posts/best-seo-keywords-for-interior-designers/` | `/seo/for-interior-designers-niagara` |

#### 2 literal-space sources

Replace both malformed sources with lower-case hyphenated rules. Keep encoded variants only if analytics prove demand.

| Malformed source | Proposed 301 destination |
| --- | --- |
| `/ecommerce-web-design-St. Catharines` and lower-case variant | `/web-design/ecommerce-web-design` |
| `/wordpress-developer-St. Catharines` and lower-case variant | `/wordpress-developer-niagara` |

#### Duplicate and chains

- Remove the duplicate `/posts/how-can-i-generate-website-traffic-with-0-marketing-budget` entry. Redirect its unique source once to `/blog`.
- Flatten the four trailing-slash chains to one hop:
  - `/web-design/niagara/` to `/web-design`
  - `/seo/st-catharines/` to `/seo`
  - `/seo/niagara-falls/` to `/seo`
  - `/st-catharines-seo-company/` to `/seo`
- Flatten the blog chain through the missing destination to the approved live post.

### 6.3 Other redirects to review

These currently land on `/` and should be retargeted to the nearest relevant live page unless the owner confirms homepage consolidation:

| Source | Current | Proposed |
| --- | --- | --- |
| `/seo/niagara` | `/` | `/seo` |
| `/seo/st-catharines` | `/` | `/seo`, or restore page |
| `/seo/niagara-falls` | `/` | `/seo`, or restore page |
| `/st-catharines-seo-company` | `/` | `/seo` |
| `/web-design/niagara` | `/` | `/web-design` |
| `/niagara-falls` | `/` | `/web-design/niagara-falls` |
| `/digital-marketing-agency-niagara` | `/` | `/digital-marketing` |
| `/digital-marketing-agency-st-catharines` | `/` | `/digital-marketing` |
| `/Dundas-web-design` | `/` | `/web-design` |
| `/posts/how-can-i-generate-website-traffic-with-0-marketing-budget` | `/` | `/blog` |
| `/posts/how-to-build-a-website-with-good-seo-in-mind/` | `/` | `/posts/get-your-website-to-top-of-google` |
| `/posts/best-seo-keywords-for-interior-designers/` | `/` | `/seo/for-interior-designers-niagara` |
| `/5-effective-seo-techniques-for-landscaping-companies/` | `/` | `/seo/for-landscapers-niagara` |

### 6.4 Sitemap cleanup

Remove all 41 redirecting entries:

- 40 `/seo/for-therapists-*` legacy URLs.
- `/reviews`.

Then apply approved page consolidations. The baseline target is `216` canonical URLs if `/posts`, `/get-started`, and `/postLink` are consolidated; it returns to `217` or `218` if the owner retains either of the first two. Keep the six live US therapist pages, all published service/vertical pages, the HTML sitemap, and the retained orphans in the sitemap.

The final sitemap must:

- Contain only canonical `200` URLs.
- Contain no `noindex`, error, redirect, prototype, or dev routes.
- Match the route manifest exactly.
- Keep the four-child sitemap structure unless the owner approves simplification.
- Use canonical no-trailing-slash URLs and stable `lastmod` values.
- Be checked with a live crawl of `dist/` before deployment.
- Remove any URL that immediately redirects; validate with a crawler hitting each sitemap entry.

## 7. SEO implementation

### 7.1 Metadata and headings

- Build one `SeoHead` component with explicit title, description, canonical, robots, Open Graph, Twitter, and optional geo/site-verification fields.
- Preserve existing titles and descriptions by default. Do not shorten the 31 long titles or 48 long descriptions during migration; flag them for a separate, approved content pass.
- Add the seven missing canonicals.
- Add title, description, and canonical to `/sitemap`.
- Give `/postLink` no public indexable route.
- Ensure exactly one H1 per page:
  - `PageHero` or `ArticleLayout` supplies the H1.
  - Strip the leading Markdown H1 from the five affected posts at render time or during content normalization, without losing the heading text.
  - Add an H1 to any retained page missing one.
- Add `og:image` to every indexable page using a branded 1200x630 fallback; add page-specific images only where real assets exist.
- Add `og:title`, `og:description`, and Twitter card metadata to all pages, using the existing metadata as the source.
- Set `lang="en-CA"` and keep schema locale consistent.
- Preserve existing geo meta tags on the homepage.

### 7.2 Structured data

- Port `src/lib/verticalSeoSchema.js` to a typed build-time module with deterministic absolute `@id` values.
- Preserve the existing graph types and relationships: Organization, ProfessionalService, LocalBusiness, PostalAddress, ImageObject, BreadcrumbList, FAQPage, Service, BlogPosting, CollectionPage, WebPage.
- Generate schema from the same page/content data used to render the page, not from a second hand-maintained copy.
- Add schema only where truthful:
  - WebPage and BreadcrumbList for retained static pages.
  - CollectionPage for `/blog` and hubs.
  - BlogPosting for posts.
  - ContactPage for `/get-a-quote` if not already represented.
  - Do not add review or rating schema while `googleReviews` values are null.
- Validate every graph with `scripts/validate-schema.js` or an Astro equivalent; build fails on parse errors or broken `@id` references.
- Keep the existing `en-CA` entity language and verify the homepage Organization ID is reused by service/vertical nodes.

### 7.3 Internal linking

- Remove the 436 deleted-city links from `Footer` and the homepage. Replace with live city pages or the `/areas-we-serve` hub.
- Fix the three `404` links:
  - `/areas-we-serve` Wainfleet link to `/seo` or remove the hyperlink.
  - `/process` and `/wordpress-developer-niagara` `/niagara-seo-company` links to `/seo`.
- Convert all absolute internal links to root-relative links during content normalization.
- Fix the `localhost:3000` link in `posts/how-much-should-a-small-business-spend-on-seo.md:40`.
- Remove trailing slashes from post links.
- Link the general-contractor pillar from `/industries` and the footer. Add related links from the Niagara general-contractor page. Keep the 10-page cluster within three clicks of `/`.
- Link orphan case studies from `/work` and relevant service pages if retained.
- Link `/areas-we-serve`, `/process`, and `/website-conversion-optimization` from relevant hubs if retained.
- Replace all global "217 inbound links" accidental emphasis with an intentional hierarchy: primary nav, footer, related content, and contextual links.

### 7.4 Blog

- Keep `/blog` as the canonical blog index.
- Keep `/posts/<slug>`.
- Render all 15 posts on `/blog` statically, removing the need for server-side query pagination. Ignore `?page` or collapse it to `/blog`.
- Add BlogPosting, canonical, OG, and Twitter metadata to every post.
- Normalize post frontmatter (date, title, excerpt, image, canonical slug) and validate it.
- Preserve Markdown body content; strip duplicate H1s; sanitize any raw HTML through a controlled renderer.
- Consolidate `/posts` to `/blog` with owner approval.

### 7.5 Error and utility pages

- Implement a branded `404.astro` that returns `404`.
- Implement a branded `500.astro` that returns `500` at the host level.
- Keep `/dev/styleguide` out of production builds or return `404` with `noindex`.
- Add a skip link and accessible focus handling in the base layout.

### 7.6 Analytics, forms, and runtime behaviour

**Forms and runtime:**
- `/get-a-quote`: use Calendly inline widget with a persistent fallback link (`https://calendly.com/infused-agency/project-discovery/`) for no-JS. No native form backend exists; Formspree is unused. Do not fabricate an endpoint.
- `/get-started`: orphan with commented form. Default to 301 to `/get-a-quote` unless owner supplies a real endpoint, validation, spam protection, and success/error handling (see D3/D19).
- Audit all pages for forms, mailto:, and action= attributes. Remove or replace broken form code.
- Maps/embeds: document third-party requests; lazy-load where possible.
- Environment variables/secrets: do not expose; only use owner-provided env vars in build/host config. No secrets in repo.

**Analytics and consent:**
- Remove unconditional GA4 and Clarity tags from the shared layout.
- Do not load analytics until the owner selects a consent standard and mechanism.
- Default preview behaviour: no analytics.
- Production options:
  - Owner-provided CMP with Google Consent Mode v2, or
  - A lightweight first-party consent notice that loads analytics only after affirmative consent.
- Centralize IDs in configuration; do not duplicate hard-coded IDs across templates.
- Treat the Calendly embed as a third-party functional embed and document its privacy treatment.
- Keep analytics out of the critical path and never let it block LCP.

## 8. Content migration

### 8.1 Source of truth

- Blog: existing `posts/*.md`.
- Services: `data/services/services.json`, `data/services/service-facts.json`, and `data/services/content/*.json`.
- Verticals: `data/vertical-seo/*` and `data/vertical-seo/content/verticals/**`.
- Concrete: `src/content/canada-niche/concrete-contractors/**` and `src/lib/canadaNicheSeo.js`.
- Niagara industries: `src/lib/niagaraIndustries.js` plus the bespoke page files.
- City SEO and web-design city pages: bespoke page files.
- Navigation: `src/generated/services-nav.json` and `components/Nav/navData.js`.
- Site facts: `data/site/site-facts.json`.
- Schema: `src/lib/verticalSeoSchema.js`.

### 8.2 Migration method

1. Keep data in place; add loaders and schemas rather than copying records.
2. Extract repeated bespoke page structures into data records only where the same fields repeat. Port one-off pages to `.astro` using shared sections.
3. Preserve copy verbatim during the migration. Use a normalized visible-text diff against the baseline to catch omissions.
4. Preserve frontmatter titles, descriptions, dates, images, and slugs.
5. Fix structural defects (duplicate H1s, localhost link, trailing slashes, missing alt) in the same pass; do not rewrite marketing copy.
6. Record every intentional content change in an allowlist with owner approval.
7. Update stale launch/vertical reports to the current build count after the source of truth is confirmed.

### 8.3 Content parity checks

For every retained `200` URL compare baseline and preview:

- Status code.
- Title, description, canonical, robots, Open Graph, Twitter.
- Exactly one H1 and heading outline.
- Normalized main-content text hash, with an allowlist for approved changes.
- JSON-LD parse result and node types.
- Internal links and destinations.
- Image count, alt text, and intrinsic dimensions.
- No unverified claims introduced.

## 9. Design system and motion

### 9.1 Visual system

- Light theme only: `color-scheme: light`.
- Palette from `docs/light-reskin-notes.md`: off-white base, white cards, brand blue accent, deep indigo contrast band, AA-compliant muted text.
- Poppins for display and body, weights 400/500/600/700, self-hosted WOFF2, Latin subset, `font-display: swap`, preloaded critical weight, size-adjusted fallback.
- Fluid `clamp()` display and heading scale; body line-height 1.6-1.7.
- Container max width around 80rem; 4-6rem section rhythm; 6/8/16/20px radii; layered brand-tinted shadows.
- Replace dark-only glows and glass effects with subtle tinted gradients and clean borders.
- Use the deep indigo band for the footer and selected CTA sections, not every section.
- Inline SVG icon set; no icon-font or image-sprite dependency.

### 9.2 CSS architecture

- One global CSS entry built from ordered layers: reset, tokens, base, layout, components, utilities, motion.
- Delete Bootstrap, 41 Sass imports, `rescue.css`, `legacy-saas.css`, and `!important` global overrides from the rebuilt site.
- Keep page-specific styles scoped to components or Astro style blocks.
- Do not use Tailwind merely to preserve the old utility soup. Either keep a small utility layer or use semantic component classes; the decision must be documented before template work.
- CSS budget target: under 80 KB gzip for the shared bundle, with page CSS code-split by Astro.

### 9.3 Motion system

Use one easing family and a small duration scale:

- `--ease-smooth: cubic-bezier(0.2, 0.75, 0.25, 1)`
- Micro-interactions: 150 ms.
- Cards, images, nav panels: 250-350 ms.
- Section reveal: 600-800 ms.
- Animate only `transform`, `opacity`, `box-shadow`, `border-color`, `background-color`, `color`, and `filter`.
- Never animate layout-affecting properties on hover.

Components:

- **Cards:** rise 4px, deepen shadow, shift border toward accent, nudge title/arrow. No content hidden behind hover.
- **Images in cards:** scale 1.03-1.05 inside an overflow-hidden, radius-matched container.
- **Buttons:** primary lifts and deepens; secondary fills or underlines; arrow moves 3-4px; active state presses down.
- **Links and nav:** underline reveal; accent colour shift; focus-visible ring.
- **Mega menu:** fade and rise 4px, short delay; Escape closes; focus returns to trigger.
- **Mobile menu:** disclosure with focus trap and body scroll lock; reduced-motion users get instant state changes.
- **Accordion:** native `<details>` with grid-rows transition and rotating chevron.
- **Reveal:** IntersectionObserver adds a class only after content is visible; baseline is visible, no layout shift, no content hidden from crawlers.
- **Hero atmosphere:** CSS radials/grid only; no video, no scroll hijacking, no heavy parallax.
- **Carousel/lightbox:** CSS scroll-snap with keyboard controls and a native dialog fallback.
- **Top bar:** static text; no auto-rotating content.

Accessibility and performance rules:

- Honour `prefers-reduced-motion: reduce` by removing transforms and non-essential transitions.
- Gate hover effects with `@media (hover: hover)`.
- Visible `:focus-visible` styles on every interactive element.
- No animation that delays LCP, blocks interaction, or changes layout.
- No animation library and no React runtime.

### 9.4 Template direction

- **Homepage:** editorial hero, trust row, service cards, proof with real results, testimonials with verified quotes, industry cards, CTA band, FAQ, latest posts. Keep existing sections and copy; no invented logos, ratings, or statistics.
- **Hubs:** clear card grids, filter chips where the current data supports them, related-link blocks, strong section rhythm.
- **Service pages:** direct-answer callout, numbered process, related services, FAQ; preserve headings and copy.
- **Vertical pillar/province/city:** pillar overview, province grid, city chips, proof, FAQ, related links. Use the therapist cluster as the structural model; fix the general-contractor external linking.
- **Industry and concrete pages:** consistent cards, breadcrumbs, direct-answer section, related links, local proof only where data exists.
- **Blog:** readable article layout, sticky table of contents only if headings support it, author/date metadata, related posts; no infinite scroll.
- **Quote:** Calendly panel with a fallback link, clear next-step copy, no fake form.
- **Work/case studies:** image-led cards with one real metric where available; no invented outcomes.
- **Footer:** keep the deep band, fix deleted-city links, add the general-contractor pillar, preserve contact/social/legal links.

### 9.5 Content claims

`site-facts.json` contains `googleReviews` values of `null`, while the current homepage says "40+ five-star" and "over 10 years"; other copy says different durations. These are not verified by the repository. Before launch:

- Confirm or remove the review claim.
- Confirm or remove the years-in-business claim.
- Confirm client count and results claims against evidence.
- Keep logos only from `clientLogosAllowed`.
- Never invent ratings, prices, guarantees, certifications, or team size.

This is an owner decision. The migration must not silently turn an unverified claim into structured data.

## 10. Templates and component inventory

| Area | Components | Data source | Notes |
| --- | --- | --- | --- |
| Shell | BaseLayout, SeoHead, Nav, TopBar, MegaMenu, MobileMenu, Footer, SkipLink | nav snapshot, site facts | One nav/footer implementation |
| Home | HomePage, Hero, TrustRow, ServiceCards, ProofCards, Testimonials, IndustryCards, CtaBand, Faq, LatestPosts | home data, site facts, posts | Preserve section order/copy |
| Services | ServicePage, ProcessSteps, DirectAnswer, RelatedServices, Faq | services JSON/content | 21 pages |
| Verticals | Pillar, Province, City, ProvinceGrid, CityChips, RelatedLinks, Faq | vertical data + publish gate | 52 current pages |
| Industries | IndustryPage, IndustryGrid, FilterChips, RelatedLinks | Niagara industry data | 54 pages |
| Concrete | ConcreteHub, ConcreteCityPage | concrete content | 31 pages |
| City SEO | CitySeoPage, LocalProof, RelatedLinks | bespoke city data | 9 pages |
| Web design city | WebDesignCityPage | bespoke city data | 11 pages |
| Blog | BlogIndex, BlogCard, BlogPost, PostBody, RelatedPosts | Markdown collection | 15 posts |
| Static | About, Work, CaseStudy, Contact/Quote, Privacy, Terms, Areas, Process, Sitemap | content/data | Preserve/approve |
| Utility | Button, Card, Section, PageHero, Breadcrumb, Accordion, StatBlock, Testimonial, Icon, Image, Badge | design system | No legacy CSS |
| Interactive | MegaMenu, MobileMenu, Reveal, Carousel, Calendly, Consent | vanilla JS | No framework |

## 11. Build, CI, and deployment

### 11.1 Build

- Add Astro scripts: `dev`, `build`, `preview`, `check`, `validate`, `test:seo`.
- Build command: content validation, publish-gate check, Astro build, sitemap generation, redirect generation, post-build validation.
- Keep Node 22 and pin the Astro version.
- Choose one lockfile. CI currently uses Yarn; remove the duplicate `package-lock.json` only after confirming the team's package-manager choice.
- Update `netlify.toml` with publish directory and build command if Netlify remains the host.
- Generate `public/_redirects` from the redirect register; do not hand-edit the output.
- Add standard headers: HSTS, `X-Content-Type-Options`, `Referrer-Policy`, and a tested CSP where compatible with Calendly/analytics.

### 11.2 CI

- Fix the branch trigger: production is `master`, but `.github/workflows/ci.yml` currently runs on `main`. Trigger on `master` and pull requests, or rename the production branch with owner approval.
- Jobs:
  - content/schema validation
  - Astro build
  - redirect validation against the built site
  - sitemap validation
  - internal-link crawl
  - SEO parity check
  - Lighthouse/axe smoke check on key templates
- Keep the scheduled wave deploy, but update it to trigger the Astro build and the host deploy hook.
- Never deploy from a failed validation job.

### 11.3 Hosting and cutover

- Confirm the host and who owns `DEPLOY_HOOK_URL`. The current config assumes Netlify.
- Deploy a preview on Linux, not only Windows, so case sensitivity and trailing-slash behaviour are tested. Specifically: test mixed-case variants of known paths (e.g. `/SEO`, `/Web-Design`, `/About`) against the host; confirm expected behaviour (case-sensitive on Linux by default) and add explicit redirects/canonicalization only if needed. Document results in the test plan.
- Verify redirects and 404s at the host edge, not just in Astro preview. Test slash variants and encoded paths for space-containing sources.
- Keep the current production site live until preview sign-off.
- At cutover:
  - Deploy the Astro build and redirect file together.
  - Verify the canonical host, HTTPS, trailing-slash policy, and sitemap URL.
  - Submit the cleaned sitemap to Google Search Console.
  - Keep the previous deploy and DNS record available for rollback.
  - Monitor 404s, redirect chains, GSC coverage, Core Web Vitals, and conversion events for at least four weeks.

## 12. Phased delivery

### Phase 0: Freeze and manifests

Deliverables:

- `route-manifest.csv` with 263 rows.
- `redirect-register.csv` with 121 rows.
- Baseline screenshots at 375, 768, 1280, and 1440 for the homepage, hubs, one pillar, one province, one city, one service, one industry, one blog post, and `/get-a-quote`.
- Reconciled counts and an updated `legacy-redirect-map.md` count if approved.
- Owner decision log.

Exit criteria: every route and redirect has a disposition; high-risk decisions have named owners.

### Phase 1: Astro foundation and design tokens

Deliverables:

- Astro scaffold, base layout, SEO head, nav/footer shell, 404/500, noindex styleguide.
- CSS layers, tokens, fonts, images pipeline, motion primitives.
- Route/redirect/sitemap validators.
- Preview of the shell and homepage.

Exit criteria: design direction approved; no React runtime; build and validation scripts run.

### Phase 2: Data and template migration

Deliverables:

- All content loaders and schemas.
- Service, vertical, industry, concrete, city, web-design, blog, and static templates.
- All 219 retained `200` URLs rendering.
- Content parity report.

Exit criteria: every route family renders; no unapproved copy loss; one H1 and canonical rules in place.

### Phase 3: Motion and interaction

Deliverables:

- Mega menu, mobile menu, accordion, sticky header, reveals, cards, carousels, Calendly, consent placeholder.
- Reduced-motion and keyboard behaviour.
- Visual QA at all breakpoints.

Exit criteria: no layout shift, no content hidden, touch and keyboard usable, motion matches the design system.

### Phase 4: SEO and redirect hardening

Deliverables:

- Final metadata, canonicals, schema, OG/Twitter.
- Final sitemap.
- Final redirect register and generated `_redirects`.
- Fixed internal links, general-contractor linking, orphan links.
- Analytics consent decision implemented or explicitly deferred with tags disabled.

Exit criteria: sitemap has zero non-200 URLs; redirects have zero failures/chains/loops/duplicates; internal-link crawl has zero broken links.

### Phase 5: QA and owner sign-off

Deliverables:

- Full crawl of preview and diff against baseline.
- Lighthouse/axe results.
- Keyboard, reduced-motion, browser, and mobile checks.
- Redirect, sitemap, schema, metadata, and content-parity reports.
- Rollback plan.

Exit criteria: owner signs the preview, redirect map, and content changes; no unresolved high-risk item.

### Phase 6: Cutover and monitoring

Deliverables:

- Production deploy, DNS/canonical host verification, sitemap submission, monitoring dashboard.
- Post-launch 404 and redirect report.
- Rollback if canonical routes, redirects, or conversion paths fail.

## 13. Acceptance criteria

- [ ] All 263 current routes are represented in the route manifest.
- [ ] All 219 currently successful URLs are preserved, or have an approved redirect/removal decision.
- [ ] All 121 redirect rules are represented in the redirect register.
- [ ] Zero redirects end at 404; zero chains, loops, duplicate sources, or spaces.
- [ ] Sitemap contains only canonical `200` URLs and no redirects.
- [ ] Every indexable page has one title, description, canonical, H1, OG image, and Twitter metadata. No page with unverified claims has fabricated ratings/schema.
- [ ] Every JSON-LD block parses and validates; no schema is fabricated.
- [ ] Zero broken internal links; zero internal links to redirects.
- [ ] The 436 deleted-city links are gone; the general-contractor cluster is reachable within three clicks.
- [ ] `/posts`, `/postLink`, `/get-started`, `/reviews`, and `/dev/styleguide` have explicit approved dispositions.
- [ ] The five duplicate-H1 posts render exactly one H1.
- [ ] The localhost link, absolute internal links, and trailing-slash links are fixed.
- [ ] The 40 legacy therapist URLs redirect directly to live pages and are absent from the sitemap.
- [ ] The six US legacy therapist pages remain `200` with canonical/schema fixes unless the owner approves otherwise.
- [ ] Calendly works, with a fallback link when JavaScript is unavailable.
- [ ] Analytics does not load before consent; the production consent decision is documented.
- [ ] No unverified reviews, ratings, years, client counts, prices, or guarantees are shipped.
- [ ] No Bootstrap, legacy Sass, React runtime, carousel library, or animation library is shipped.
- [ ] Mobile LCP under 2.5s, CLS under 0.1, INP under 200ms on the key templates.
- [ ] Lighthouse targets: Performance >= 90, Accessibility 100, SEO 100 on representative pages.
- [ ] WCAG AA contrast, visible focus, keyboard navigation, and reduced-motion behaviour pass.
- [ ] Preview on Linux/host edge passes redirects, sitemap, case sensitivity (mixed-case variants), trailing slashes, and 404/500 tests.
- [ ] CI runs on the production branch and blocks deployment on validation failure.
- [ ] Rollback and post-launch monitoring are in place.

## 14. Owner decisions

These decisions are not blockers for the audit or scaffolding, but they block the affected migration phase. The recommended default is listed so work can proceed on non-destructive parts.

| ID | Decision | Recommended default | Needed by |
| --- | --- | --- | --- |
| D1 | Canonical blog index and `/posts` | `/blog` canonical; `/posts` 301 to `/blog` | Phase 2 |
| D2 | Restore or retire `/seo/st-catharines` and `/seo/niagara-falls` | Remove footer links; 301 to `/seo` | Phase 2 |
| D3 | `/get-started` | 301 to `/get-a-quote` unless a real form endpoint is supplied | Phase 2 |
| D4 | `/postLink` | Exclude from build | Phase 1 |
| D5 | `/reviews` | Keep 301; remove from sitemap | Phase 2 |
| D6 | 25 missing legacy blog destinations | Topic-level 301s in section 6.2; `/blog` fallback | Phase 4 |
| D7 | Space-containing legacy sources | Replace with lower-case hyphenated rules | Phase 4 |
| D8 | Six US legacy therapist pages | Preserve for now; review content fit | Phase 4 |
| D9 | General-contractor cluster placement | Link from `/industries` and footer | Phase 3 |
| D10 | Analytics consent standard/vendor | No analytics until consent mechanism is chosen | Phase 4 |
| D11 | Host and deploy-hook owner | Confirm Netlify or equivalent; owner owns secret | Phase 1 |
| D12 | Unverified claims and client logos | Confirm or remove; do not invent | Phase 3 |
| D13 | Rewrite long titles/descriptions | Defer to a separate approved content pass | Post-launch |
| D14 | Case-sensitive legacy variants | Add only known variants after host log review | Phase 4 |
| D15 | Missing `/seo/wainfleet` and `/niagara-seo-company` | Link to `/seo` or create real pages | Phase 2 |
| D16 | Prince Edward Island general-contractor page | Treat current 10-page build as authoritative; create only with content approval | Phase 2 |
| D17 | Orphan case studies and utility pages | Preserve and link, or redirect with approval | Phase 2 |
| D18 | `/sitemap` indexability | Keep indexable with self-canonical | Phase 4 |
| D19 | Real lead form | No backend today; keep Calendly unless endpoint supplied | Phase 2 |
| D20 | Redirect status convention | 301 for content moves; avoid host-generated 308 chains | Phase 4 |

## 15. Risks and mitigations

| Risk | Mitigation |
| --- | --- |
| Route or copy loss during framework migration | Route manifest, content parity diff, per-family sign-off |
| Redirect debt carried into Astro | Generated redirects from one register; host-level crawl of every source |
| SEO regression from canonical/H1/schema drift | Baseline metadata/schema report; CI parity checks; no unapproved copy changes |
| Legacy CSS conflicts | Rebuild CSS from tokens; no Bootstrap/Sass/rescue imports |
| Motion hurting LCP/CLS or accessibility | CSS-only transforms, visible-by-default content, reduced-motion net, Lighthouse/axe |
| Calendly or analytics blocking rendering | Lazy embed with fallback link; consent-gated analytics |
| Case/trailing-slash differences on Linux host | `trailingSlash: "never"`, lower-case internal links, Linux preview |
| General-contractor cluster remains orphaned | Explicit hub/footer link and crawl-depth test |
| Stale launch reports drive wrong build | Build-time publish gate is authoritative; update reports after reconciliation |
| CI does not guard production branch | Fix trigger before cutover |
| Unverified claims create legal/trust risk | Owner verification; hide null facts; no fabricated schema |
| No rollback after cutover | Previous deploy retained, DNS rollback documented, post-launch monitor |

## 16. Out of scope

- Rewriting marketing copy, titles, descriptions, or claims without approval.
- Creating new service or city pages to satisfy broken links.
- Building a form backend or CRM integration.
- Adding a CMS, database, authentication, e-commerce, chat, or newsletter.
- A dark/light theme toggle.
- Copying the reference site's design, copy, palette, assets, or code.
- Changing the canonical domain or hosting provider without a separate decision.
- Implementing the rebuild in this phase.

## 17. References

- `docs/astro-rebuild/01-inventory.md`
- `docs/astro-rebuild/02-seo-config.md`
- `docs/astro-rebuild/03-link-audit.md`
- `docs/astro-rebuild/04-internal-linking-map.md`
- `docs/astro-rebuild/05-risks-and-open-questions.md`
- `docs/astro-rebuild/page-inventory.csv`
- `docs/astro-rebuild/link-audit.csv`
- `docs/legacy-redirect-map.md`
- `docs/light-redesign-spec.md`
- `docs/light-design-reference.md`
- `docs/light-reskin-notes.md`
- `docs/redesign-open-questions.md`
- `next.config.js`
- `src/lib/verticalSeo.js`
- `src/lib/services.js`
- `src/lib/verticalSeoSchema.js`
- `src/generated/services-nav.json`
- `data/services/services.json`
- `data/vertical-seo/verticals.json`
- `data/vertical-seo/launch.json`
- `data/site/site-facts.json`
- `components/Footer/footer.js`
- `src/pages/index.js`
- `src/pages/blog.js`
- `src/pages/posts/[id].js`
- `src/pages/get-a-quote.js`
- `src/pages/get-started.js`
- `src/pages/postLink.js`
- `src/pages/sitemap.js`
- `src/pages/_app.js`
- `netlify.toml`
- `.github/workflows/ci.yml`
- `.github/workflows/scheduled-wave-deploy.yml`
