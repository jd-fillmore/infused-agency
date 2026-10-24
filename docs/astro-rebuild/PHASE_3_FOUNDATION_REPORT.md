# Phase 3 — Astro Foundation Report

**Project:** infused.agency Next.js → Astro rebuild  
**Branch:** `astro-rebuild`  
**Starting HEAD:** `93e274b` (`astro plan`)  
**Date:** 2026-10-23  
**Status:** Foundation and representative page prototypes complete. **Not committed, not pushed, not deployed.**

---

## 1. Scope and outcome

Phase 3 establishes an isolated Astro foundation and proves the visual direction on a representative route set. It does **not** migrate all 263 routes.

Built and verified:

- **23 static HTML files** (21 indexable pages + `404` + `500`).
- Home page, core service page, local SEO city page, vertical pillar page, blog index, 15 blog posts, quote page, and error pages.
- One shared design system, layout, navigation, footer, SEO head, JSON-LD helpers, and content loaders.
- A custom validation script that checks metadata, canonicals, H1 count, JSON-LD, links, assets, analytics absence, and known deleted-city links.
- The legacy Next.js app still compiles (direct `next build` check).

The Astro project lives entirely in `astro/`. The legacy Next.js `src/`, `components/`, `public/`, `data/`, `posts/`, `netlify.toml`, and deploy configuration were not modified.

---

## 2. Preflight and environment

| Check | Result |
| --- | --- |
| Branch | `astro-rebuild` (confirmed) |
| Working tree at start | Clean; HEAD `93e274b` |
| Route manifest | `docs/astro-rebuild/route-manifest.csv` — **263 data rows** |
| Redirect register | `docs/astro-rebuild/redirect-register.csv` — **121 data rows** |
| Local Node | `v20.19.0` |
| CI Node | `22` (`.github/workflows/ci.yml`) |
| Netlify Node | `22` (`netlify.toml` → `[build.environment] NODE_VERSION = "22"`) |
| Package manager | Yarn Classic `1.22.22`; CI uses `yarn install --frozen-lockfile` and `cache: yarn` |
| Astro version | `astro@^5.18.2` (installed `5.18.2`) |
| Astro/Node compatibility | Astro 5.18.2 supports Node 18.20.8 / ^20.3.0 / ≥22.0.0, covering local Node 20.19.0 and Netlify Node 22 |
| Why not Astro 7.x | Astro 7.4.2 requires Node ≥22.23.4; local Node is 20.19.0 |
| Missing Phase 2.1 report | Treated as a documentation gap per instruction; a retrospective `PHASE_2_1_VALIDATION_REPORT.md` was created from repository-verifiable facts |

**Pre-existing install constraint:** `googleapis@186.0.0` requires Node ≥22, so a local Yarn install fails the engine check on Node 20.19.0. Dependency installation used `--ignore-engines` locally. This does not alter the dependency set and should not be necessary on CI/Netlify Node 22. This is a pre-existing project condition, not introduced by Astro.

---

## 3. Architecture and isolation

### Project layout

```text
astro/
  astro.config.mjs
  tsconfig.json
  .gitignore
  public/
    favicon.ico
    img/                 # approved assets copied from the legacy app
  scripts/
    validate-prototype.mjs
  src/
    components/
      footer/Footer.astro
      nav/Nav.astro
      seo/JsonLd.astro
      seo/SeoHead.astro
      ui/                # 11 shared UI components
    layouts/BaseLayout.astro
    lib/
      posts.ts
      schema.ts
      site.ts
    pages/               # route entry points
    styles/              # tokens, base, components, motion, global
    templates/           # route-family templates
```

### Why `astro/` is a separate root

- The legacy Next.js app owns the repository root (`src/`, `public/`, `.next/`).
- Astro is invoked with `--root astro`, so its pages never collide with Next pages.
- The legacy build, deploy, and Netlify configuration remain intact and runnable as the migration reference.
- `astro/astro.config.mjs` allows Vite to read the root JSON/Markdown sources (`server.fs.allow: [".."]`).

### Astro configuration

- `output: "static"`
- `site: "https://infused.agency"`
- `trailingSlash: "never"`
- `build.format: "directory"`
- `devToolbar.enabled: false`
- No adapter, no React integration, no Bootstrap/Tailwind, no animation/carousel library.

### Scripts added to `package.json`

The legacy scripts are unchanged. New, isolated scripts:

```json
"dev:astro": "astro dev --root astro",
"build:astro": "astro build --root astro",
"preview:astro": "astro preview --root astro",
"check:astro": "astro check --root astro",
"validate:astro": "node astro/scripts/validate-prototype.mjs"
```

---

## 4. Design system

The visual direction is a premium, editorial local-agency system built from the existing brand palette and typography, without importing legacy CSS.

### Tokens

- Brand blue `#005c97`, indigo `#363795`, deep contrast `#0e1b3d`
- Base `#f6f7fb`, card `#ffffff`, ink `#161b33`, muted `#516172`, border `#e2e7ef`, gold `#8a6100`
- Poppins 400/500/600/700, self-hosted via `@fontsource/poppins`
- Easing `cubic-bezier(0.2, 0.75, 0.25, 1)`; micro 150ms; cards 250–350ms
- Radii, shadows, container widths, and fluid type scales are defined in `astro/src/styles/tokens.css`

### Key UI patterns

- Sticky header with desktop mega-menu (`<details>`) and mobile menu (`<details>`).
- Editorial hero with gradient mesh/orbs, a focused CTA panel, and a trust row.
- Service cards, result cards with verified metrics, testimonial cards, city pills, industry cards.
- Native `<details>`/`<summary>` FAQ accordion.
- Dark gradient CTA band.
- Deep-navy footer with four columns and social links.

### Motion and accessibility

- Content is visible without JavaScript.
- Only tiny inline scripts: header scroll state and an `IntersectionObserver` reveal for grid groups.
- `prefers-reduced-motion: reduce` disables transforms/reveals.
- Skip link, semantic landmarks, visible `:focus-visible`, native accordions, non-empty alt text, and labelled navigation.
- No analytics or third-party embeds load by default.

---

## 5. Pages and content sources

### Built routes

| Route | Family | Source of truth |
| --- | --- | --- |
| `/` | Home | `src/pages/index.js`, `data/site/site-facts.json`, `src/lib/homeFaqs.js`, `data/services/services.json` |
| `/seo` | Core service | `src/pages/seo/index.js` |
| `/seo/port-colborne` | Local SEO | `src/pages/seo/port-colborne.js` |
| `/therapist-seo` | Vertical pillar | `data/vertical-seo/verticals.json`, `provinces.json`, `content/verticals/therapists/canada.json` |
| `/blog` | Blog index | `posts/*.md` |
| `/posts/[slug]` | 15 blog posts | `posts/*.md` (gray-matter + marked) |
| `/get-a-quote` | Conversion | `src/pages/get-a-quote.js`; Calendly link only |
| `/404` | Error | New functional copy; `noindex`, no canonical |
| `/500` | Error | New functional copy; `noindex`, no canonical |

### Blog posts generated (15)

`benefits-of-using-digital-marketing`, `can-seo-be-done-by-ai`, `common-seo-mistakes-and-how-to-avoid-them`, `electrician-web-design`, `get-your-website-to-top-of-google`, `home-insulation-web-design`, `how-does-seo-help-your-business-grow`, `how-much-should-a-small-business-spend-on-seo`, `how-search-engines-work`, `how-seo-upgrades-business`, `how-to-create-a-lead-generating-website`, `local-seo-domination-small-business`, `local-seo-tips-niagara`, `seo-increases-business-opportunities`, `web-design-impacts-content-marketing`.

### Content handling

- JSON is imported at build time from the existing `data/` and `src/generated/` sources.
- Markdown posts are loaded at build time with the existing `gray-matter` + `marked` dependencies.
- Home FAQs are loaded from `src/lib/homeFaqs.js` via `createRequire`.
- No CMS, database, API, or runtime content fetch was introduced.

---

## 6. SEO, analytics, forms, redirects

### Metadata and SEO

Each indexable page emits:

- One `<title>` and one meta description.
- Self-referencing canonical URL (absolute, no trailing slash).
- `robots` `index, follow` (except errors: `noindex, nofollow`).
- Open Graph and Twitter card metadata.
- Geo metadata where applicable.
- One `<h1>` per page.
- JSON-LD with `@context: "https://schema.org"`.

### JSON-LD coverage

| Route | Node types present |
| --- | --- |
| `/` | Organization, WebSite, WebPage, FAQPage, Question/Answer, City/PostalAddress |
| `/seo` | Organization, WebSite, CollectionPage, BreadcrumbList, Service, City/PostalAddress |
| `/seo/port-colborne` | Organization, WebSite, WebPage, BreadcrumbList, Service, FAQPage, City/PostalAddress |
| `/therapist-seo` | Organization, WebSite, WebPage, BreadcrumbList, Service, FAQPage, City/PostalAddress |
| `/blog` | Organization, WebSite, CollectionPage, BreadcrumbList |
| `/posts/*` | Organization, WebSite, WebPage, BlogPosting, BreadcrumbList |
| `/get-a-quote` | Organization, WebSite, ContactPage, BreadcrumbList |
| `/404`, `/500` | No JSON-LD (noindex error pages) |

The validator parses every JSON-LD block and checks expected node types per route.

### Analytics and consent

- **No GA4, Google Tag Manager, Clarity, or other analytics is present in the Astro output.**
- The validator checks for `googletagmanager`, `google-analytics`, `clarity.ms`, `gtag(`, and `datalayer`; all pages pass.
- This is the correct default while **D10 (analytics consent standard/vendor)** remains unresolved.
- No analytics decision was made on the owner's behalf.

### Forms and external functionality

- No new form backend, CRM, or newsletter integration was created.
- `/get-a-quote` links to the existing Calendly URL in a new tab. The legacy inline Calendly widget is deferred; no third-party embed script loads.
- Existing social links and contact details are preserved.

### Redirects, sitemap, and trailing slashes

- **No `_redirects` file and no final redirect rules were created.**
- **No sitemap was generated or declared authoritative.**
- `/sitemap` is linked in the footer as a legacy route; it is not part of the prototype build.
- `trailingSlash: "never"` is configured. In `astro preview`, `/seo/` returns **404**, which is strict no-trailing-slash behaviour. Host-level enforcement (a 301 from trailing-slash variants) is deferred to Phase 4 because it is part of the redirect decision set.
- `/posts` → `/blog` (D1) and `/get-started` → `/get-a-quote` (D3) were **not** implemented.

---

## 7. Content fidelity and deliberate deviations

### Preserved

- Home page H1, hero copy, service copy, AI search copy, web design copy, results, FAQs, and area list.
- `/seo` H1, approach, results copy, service descriptions, city list, industry links, and child-service links.
- `/seo/port-colborne` H1, market intro, proof, FAQ, and local copy.
- `/therapist-seo` direct answer, intro, local insight, checklist, FAQs, and province links.
- Blog titles, excerpts, dates, images, and Markdown bodies.
- Legacy titles, descriptions, canonicals, heading hierarchy, and internal destinations for the prototype pages.
- Existing image assets and their source alt text (copied into `astro/public/img/`).

### Deliberate removals / changes

1. **Unverified claims removed:** “Over 10 years of local SEO”, the “40+ five-star” affiliate note, and the “since 2013” footer line. These were not supported by the verified `site-facts` record.
2. **Verified facts used:** “50+ Niagara businesses helped” comes from `siteFacts.clientsHelped`. Results use `siteFacts.results`. Testimonials use the three records in `siteFacts.testimonials` (the legacy page also rendered two additional testimonials that are not in the verified fact file).
3. **Deleted city links:** St. Catharines and Niagara Falls are rendered as plain text on the home page, omitted from the footer city list, and omitted from `/seo` city pills. No link points to `/seo/st-catharines` or `/seo/niagara-falls`. **D2 remains open** (restore or retire).
4. **General-contractor placement:** Added the recommended default links (home page, footer, and `/seo` industry pill) per **D9**. Confirm if the owner prefers a different placement.
5. **Therapist province cards:** Show “Province-wide coverage” because no published city count was wired into the prototype. This is accurate but intentionally minimal.
6. **Home result cards:** Use the verified metric/context from `site-facts` with the legacy result images and source alt text. The two result JPGs were converted to WebP derivatives for size; originals were not modified.
7. **Error pages:** New functional copy only; no business claims.
8. **Quote page:** Calendly link fallback instead of the inline widget; the internal phase note was removed from user-facing copy.

No testimonials, metrics, credentials, reviews, SEO claims, routes, or functionality were invented.

---

## 8. Verification performed

### Automated checks actually run

| Command | Result |
| --- | --- |
| `yarn check:astro` | **37 files; 0 errors, 0 warnings, 0 hints** |
| `yarn build:astro` | **23 pages built in 1.36s**; output `astro/dist` |
| `yarn validate:astro` | **PASSED** with 1 expected warning |
| `npx next build` | **Passed** (legacy Next compile check; postbuild scripts intentionally not run) |

### Custom validator coverage

`astro/scripts/validate-prototype.mjs` checks every generated HTML file for:

- `<html lang="en-CA">` and viewport meta
- exactly one `<title>` and one non-empty meta description
- exactly one `<h1>`
- canonical correctness (and absence on 404/500)
- `robots` values (`index, follow` vs `noindex, nofollow`)
- Open Graph title/description/type/locale
- JSON-LD parse validity, schema.org context, and expected node types
- external `<script src>` absence
- analytics string absence
- non-empty `alt` on every `<img>`
- internal links: built route, or valid route-manifest entry (warn), or error
- no trailing-slash internal links
- no links to `/seo/st-catharines` or `/seo/niagara-falls`
- local asset and font-file existence
- CSS-referenced font assets

**Validator warning:** 57 internal targets are valid production routes not included in this prototype build (nav/footer/service/city/province links). This is expected for a partial migration. Examples: `/about`, `/services`, `/web-design`, `/seo/beamsville`, `/therapist-seo/ontario`, `/sitemap`, `/general-contractor-seo`. They are **not** broken destinations in the final site; they are simply outside the Phase 3 build.

### HTTP checks

Run against `astro preview` on `127.0.0.1:4321` with `curl`:

| Request | Result |
| --- | --- |
| `/` | 200 |
| `/seo` | 200 |
| `/seo/` | **404** (strict `trailingSlash: "never"` in preview) |
| `/seo/port-colborne` | 200 |
| `/therapist-seo` | 200 |
| `/blog` | 200 |
| `/posts/local-seo-tips-niagara` | 200 |
| `/get-a-quote` | 200 |
| `/404` | 200 (direct file request) |
| `/does-not-exist` | **404**, serving the 404 page with `noindex` and no canonical |
| CSS, font, image, favicon requests | 200 |

### Visual review actually performed

Headless Chrome was used to render screenshots of the home page (desktop and 390px CSS-width layout), `/seo`, `/seo/port-colborne`, `/therapist-seo`, `/blog`, a blog post, `/get-a-quote`, and the 404 page. The 390px layout was emulated by using a 500px headless window at device scale factor 1.282; it is a responsive-layout check, not a physical-device test.

The visual pass found and fixed:

- White client-logo PNGs disappearing on the light client strip (CSS filter applied).
- The three-item trust row leaving an awkward gap (auto-fit grid).
- The `/seo` child-service link list not using the available width (converted to link tiles).
- Redundant province card links (heading link with arrow instead of duplicate footer link).

**Not performed:** Lighthouse, axe, manual keyboard walkthrough, screen-reader testing, real mobile-device testing, browser-matrix testing, or live-host testing. No claims are made for those.

### Build output

- 23 HTML files
- `astro/dist` total: **2.8 MB** (includes copied images/fonts)
- Single CSS bundle: **34,873 bytes**
- Self-hosted Poppins: 8 font files (woff/woff2 for 4 weights)
- No external client-side JS bundle; only two small inline scripts (header state and reveal observer)

---

## 9. Dependencies added

| Package | Declared | Installed | Purpose |
| --- | --- | --- | --- |
| `astro` | `^5.18.2` | `5.18.2` | Static site framework |
| `@fontsource/poppins` | `^5.3.0` | `5.3.0` | Self-hosted brand font |
| `@astrojs/check` | `^0.9.12` | `0.9.12` | Astro/TypeScript checker (dev) |
| `typescript` | `^5.9.0` | `5.9.3` | Checker peer (dev) |
| `@emnapi/runtime` | `^1.7.1` | `1.11.3` | Workaround for the checker's WASM runtime (dev) |

Notes:

- `@astrojs/check` initially failed with `ERR_MODULE_NOT_FOUND` from `@napi-rs/wasm-runtime`; adding `@emnapi/runtime` resolved it.
- TypeScript 7 was initially installed but is not accepted by `@astrojs/check@0.9.12`; TypeScript 5.9.3 was pinned instead.
- `yarn.lock` was updated. `package-lock.json` was **not** updated.

---

## 10. Files changed

### Modified

- `.gitignore` — added `!astro/tsconfig.json` so the root `*.json` rule does not silently exclude the Astro config.
- `package.json` — added five Astro scripts and the dependencies above; all legacy scripts unchanged.
- `yarn.lock` — Astro dependency resolution.

### Created — Astro project

- `astro/.gitignore`
- `astro/astro.config.mjs`
- `astro/tsconfig.json`
- `astro/scripts/validate-prototype.mjs`
- `astro/src/layouts/BaseLayout.astro`
- `astro/src/components/footer/Footer.astro`
- `astro/src/components/nav/Nav.astro`
- `astro/src/components/seo/JsonLd.astro`
- `astro/src/components/seo/SeoHead.astro`
- `astro/src/components/ui/Accordion.astro`
- `astro/src/components/ui/Breadcrumb.astro`
- `astro/src/components/ui/Button.astro`
- `astro/src/components/ui/Card.astro`
- `astro/src/components/ui/Container.astro`
- `astro/src/components/ui/CtaBand.astro`
- `astro/src/components/ui/Icon.astro`
- `astro/src/components/ui/PageHero.astro`
- `astro/src/components/ui/Section.astro`
- `astro/src/components/ui/ServiceCard.astro`
- `astro/src/components/ui/TestimonialCard.astro`
- `astro/src/lib/posts.ts`
- `astro/src/lib/schema.ts`
- `astro/src/lib/site.ts`
- `astro/src/styles/tokens.css`
- `astro/src/styles/base.css`
- `astro/src/styles/components.css`
- `astro/src/styles/motion.css`
- `astro/src/styles/global.css`
- `astro/src/templates/HomePage.astro`
- `astro/src/templates/ServicePage.astro`
- `astro/src/templates/LocalSeoPage.astro`
- `astro/src/templates/VerticalPage.astro`
- `astro/src/templates/BlogIndexPage.astro`
- `astro/src/templates/BlogPostPage.astro`
- `astro/src/pages/index.astro`
- `astro/src/pages/seo/index.astro`
- `astro/src/pages/seo/port-colborne.astro`
- `astro/src/pages/therapist-seo.astro`
- `astro/src/pages/blog/index.astro`
- `astro/src/pages/posts/[slug].astro`
- `astro/src/pages/get-a-quote.astro`
- `astro/src/pages/404.astro`
- `astro/src/pages/500.astro`
- `astro/public/favicon.ico`
- 33 image assets in `astro/public/img/` (copied from approved legacy assets; two result JPGs converted to WebP derivatives)
- `docs/astro-rebuild/PHASE_2_1_VALIDATION_REPORT.md` (retrospective, per instruction)
- `docs/astro-rebuild/PHASE_3_FOUNDATION_REPORT.md` (this report)

### Unchanged

- Legacy Next.js `src/`, `components/`, `public/`, `data/`, `posts/`, `next.config.js`, `netlify.toml`, CI workflows, route manifest, redirect register, and implementation plan.
- No `_redirects`, sitemap, DNS, Netlify environment, secret, domain, or deploy-hook changes.

---

## 11. Known limitations and risks

1. **Partial migration warning.** 57 internal links target valid production routes not built in Phase 3. This is expected and must not be mistaken for a broken-link failure in the final site.
2. **Trailing-slash enforcement is host-level.** `astro preview` 404s `/seo/`; Netlify must be configured to 301 trailing-slash variants to the canonical no-slash URL. No final rule was created (D20).
3. **Lockfile divergence.** CI uses Yarn and `yarn.lock` is current. `package-lock.json` is tracked but stale relative to the new dependencies. `netlify.toml` does not declare a build command, so the Netlify build/lockfile path must be confirmed before deployment (D11).
4. **Local install flag.** `--ignore-engines` was needed because of the pre-existing `googleapis@186` Node ≥22 requirement on local Node 20.19. CI/Netlify run Node 22 and should not need it.
5. **Checker workaround.** `@emnapi/runtime` and TypeScript 5.9.3 are compatibility workarounds for `@astrojs/check@0.9.12`; revisit when the checker supports newer TypeScript/Astro.
6. **No analytics.** Correct while D10 is unresolved, but conversion measurement is not wired.
7. **No final redirects or sitemap.** D1, D3, D6, D7, D18, and D20 remain open.
8. **Unverified assets/claims.** Existing client logos and affiliate badges are used as-is; owner confirmation remains (D12). Unverified numeric claims were removed, not replaced.
9. **Therapist province coverage** is a static “Province-wide coverage” label; city counts were not wired.
10. **Performance not measured.** Static output is lean, but no Lighthouse/Core Web Vitals run was performed, and images are not yet served with responsive `srcset`/AVIF.
11. **No manual accessibility or device testing.** Automated checks cover structure and metadata only; keyboard, screen-reader, contrast, and real-device behavior still need manual review.
12. **Uncommitted state.** All work is uncommitted. `astro/dist`, `astro/.astro`, and nested caches are ignored.

---

## 12. Outstanding owner decisions

| ID | Decision | Phase 3 handling |
| --- | --- | --- |
| D1 | Canonical blog index and `/posts` | `/blog` built with canonical `/blog`; no `/posts` redirect |
| D2 | Restore or retire St. Catharines / Niagara Falls | Links removed/plain text; no redirect; **open** |
| D3 | `/get-started` | Not built; no redirect |
| D4 | `/postLink` | Not touched |
| D5 | `/reviews` | Not touched |
| D6 | 25 missing legacy blog destinations | Not touched |
| D7 | Space-containing legacy sources | Not touched |
| D8 | Six US legacy therapist pages | Not touched |
| D9 | General-contractor cluster placement | Recommended default applied (home, footer, `/seo`); **confirm** |
| D10 | Analytics consent standard/vendor | No analytics loaded; **open** |
| D11 | Host and deploy-hook owner | No host changes; Netlify build command still unconfirmed; **open** |
| D12 | Unverified claims and client logos | Unverified numeric claims removed; logos/badges retained for confirmation; **open** |
| D13 | Rewrite long titles/descriptions | Legacy titles/descriptions preserved; no rewrite |
| D14 | Case-sensitive legacy variants | Not touched |
| D15 | Missing `/seo/wainfleet` and `/niagara-seo-company` | Wainfleet plain text; no link; **open** |
| D16 | PEI general-contractor page | Not touched; 10-page build remains authoritative |
| D17 | Orphan case studies/utility pages | Not touched |
| D18 | `/sitemap` indexability | No sitemap generated; **open** |
| D19 | Real lead form | Calendly link only; no backend; **open** |
| D20 | Redirect status convention | No redirects created; **open** |

---

## 13. Next steps (not started)

1. Owner review of this report and the visual direction.
2. Resolve D2, D9, D10, D11, D12, D19, and D20 before any deployment work.
3. Decide the lockfile/build-command path for Netlify (Yarn vs npm).
4. Add host-level trailing-slash and redirect handling in a dedicated redirect phase.
5. Extend the route-family templates to the remaining routes only after sign-off.
6. Add consent-gated analytics and the real form/Calendly embed only after D10/D19 are resolved.
7. Run Lighthouse/axe/manual accessibility and real-device testing before launch.

---

## 14. Sign-off statement

- Branch: `astro-rebuild`.
- No commit, push, deploy, DNS change, Netlify setting change, environment/secret change, or domain change was made.
- `master` and production branches were not modified.
- The legacy Next.js implementation and production configuration remain in place.
- This phase stopped after the foundation, representative prototypes, automated validation, and visual review.
