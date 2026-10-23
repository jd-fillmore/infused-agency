# Phase 1 Inventory: infused.agency

Audit date: 2026-10-22 local / 2026-10-23 UTC. Repository: `infused-agency`. Audited commit: `0d2c44b` (`master`). This is a read-only inventory of the existing Next.js site, not an Astro implementation plan.

## Method

- Audited the source at `0d2c44b` in a detached worktree, not the main working tree.
- Ran the full production build with Node 22 and Yarn.
- Started the built site at `http://127.0.0.1:3010` and crawled every reachable local route, plus sitemap URLs and external links.
- Parsed the rendered HTML for title, description, canonical, H1, Open Graph, Twitter, JSON-LD, images, and link targets.
- Generated `page-inventory.csv` with one row per route and `link-audit.csv` with one row per source-page/target pair.

## Build and crawl snapshot

| Measure | Value |
| --- | ---: |
| Production build | Success |
| Static pages generated | 262 |
| HTML files emitted | 261 |
| HTML payload | 17,714,283 bytes |
| Server-rendered routes | 1 (`/blog`) |
| Routes crawled | 263 |
| `200` responses | 219 |
| `308` responses | 41 |
| `404` responses | 3 |
| Sitemap URLs | 260 |
| Sitemap `200` URLs | 219 |
| Sitemap non-`200` URLs | 41 (all `308`) |
| `200` pages missing from sitemap | 0 |

The three `404` routes are `/404` (intentional not-found page), `/500` (no `src/pages/500.js`, so Next's default 404 is served), and `/dev/styleguide` (development route disabled in production). `/reviews` is a configured `308` to `/get-a-quote` but is still in the sitemap.

Build reports from the audited worktree:

```text
Enumerated pages: 2590
Published: 52
Draft-excluded: 20
Gate-failed: 0
Released verticals: 2
sitemap-0.xml: kept 187 of 260 URLs
sitemap-vertical-general-contractors.xml: 10 URLs
sitemap-vertical-therapists.xml: 42 URLs
sitemap-services.xml: 21 URLs
Schema validation: 261 pages checked, 198 with JSON-LD, 0 failures
```

## Stack

| Area | Current implementation |
| --- | --- |
| Framework | Next.js `13.5.6`, Pages Router |
| UI | React `18.2.0` |
| Styling | Tailwind CSS v4 (`@tailwindcss/postcss`), Bootstrap 4, Sass/SCSS, custom `rescue.css` |
| Fonts | `next/font/google` Poppins |
| Images | `next/image` with `images.unoptimized: true` |
| Animation | Framer Motion |
| Forms | `react-calendly`; Formspree is present as a dependency but not used |
| Sitemap | `next-sitemap` plus `scripts/generate-vertical-sitemaps.js` |
| CI | GitHub Actions, Node 22, Yarn |
| Hosting config | `netlify.toml` with `NODE_VERSION = "22"` |
| Analytics | GA4 and Microsoft Clarity hardcoded in `src/pages/_app.js` |

Production branch is `master`. `.github/workflows/ci.yml` only runs on `main`, so the current CI trigger does not match the production branch. A separate scheduled workflow runs daily at `09:00 UTC` and uses a `DEPLOY_HOOK_URL` secret.

## Route inventory

Route families below account for all 263 crawled routes. The full URL-level inventory, including source file and data source, is in `page-inventory.csv`.

| Template | Routes | `200` | `308` | `404` | Main source / data |
| --- | ---: | ---: | ---: | ---: | --- |
| Home | 1 | 1 | 0 | 0 | `src/pages/index.js` |
| Service page | 21 | 21 | 0 | 0 | `data/services/services.json`; 19 content JSON files; `/seo` and `/web-design` are bespoke |
| Vertical SEO | 52 | 52 | 0 | 0 | `data/vertical-seo/content/verticals/**` |
| Industry SEO (Niagara) | 54 | 54 | 0 | 0 | Bespoke `src/pages/seo/for-*-niagara.js` and inline content |
| Concrete niche | 31 | 31 | 0 | 0 | `src/lib/canadaNicheSeo.js` and `src/content/canada-niche/concrete-contractors/**` |
| Legacy therapist | 46 | 6 | 40 | 0 | 40 old `/seo/for-therapists-*` URLs redirect; 6 US pages remain live |
| City SEO | 9 | 9 | 0 | 0 | Bespoke `src/pages/seo/<city>.js` with inline content |
| Web design city | 11 | 11 | 0 | 0 | Bespoke `src/pages/web-design/<city>.js` with inline content |
| Blog | 17 | 17 | 0 | 0 | 15 Markdown posts in `posts/`, plus `/blog` and `/posts` |
| Static | 15 | 14 | 1 | 0 | Inline pages; `/reviews` is the `308` |
| Services hub | 1 | 1 | 0 | 0 | `src/pages/services.js` |
| Industries hub | 1 | 1 | 0 | 0 | `src/pages/industries.js` |
| HTML sitemap | 1 | 1 | 0 | 0 | `src/pages/sitemap.js` |
| Error | 2 | 0 | 0 | 2 | `/404` and `/500` |
| Dev | 1 | 0 | 0 | 1 | `/dev/styleguide` |

### Vertical SEO detail

The 52 published vertical pages are:

- General contractors: 1 pillar (`/general-contractor-seo`), 9 province pages, 0 city pages.
- Therapists: 1 pillar (`/therapist-seo`), 10 Canadian province pages, 1 USA page, 30 city pages.

`data/vertical-seo/launch.json` starts wave 1 on `2026-10-11`; wave 2 is scheduled for `2026-11-01`. `src/lib/verticalSeo.js` is the source of truth for route generation, publishing gates, redirects, and schema. `docs/launch-status.md` and `docs/vertical-seo-report.md` are generated, but the committed copies say `53` published pages and list `/general-contractor-seo/prince-edward-island`; the current source has no Prince Edward Island general-contractor file, so the current build correctly produces `52`. The current build, not the committed docs, is authoritative.

### Service page detail

All 21 entries in `data/services/services.json` return `200` and are in `sitemap-services.xml`. Nineteen have content under `data/services/content/`; `/seo` and `/web-design` are older bespoke pages with content in their page files. The service gate in `src/lib/services.js` controls publishability and sitemap inclusion.

### Niagara and concrete detail

- 54 industry pages under `/seo/for-*-niagara`.
- 9 city pages under `/seo/<city>`.
- 11 web-design city pages under `/web-design/<city>`.
- 31 concrete-contractor pages: 1 hub and 30 city pages.
- Most of this copy is inline in page files or bespoke content modules, not in the vertical JSON system. That makes the migration surface larger than the vertical pages.

### Blog detail

There are 15 Markdown posts in `posts/`. `/blog` is the paginated, server-rendered listing; `/posts` is a second, legacy listing with no canonical and no inbound links. `/posts` is in the sitemap, so it is an indexable duplicate entry point. The blog post template is `src/pages/posts/[id].js`.

## Content and asset notes

- 351 rendered images were found across `200` pages. One image is missing an `alt` attribute on `/website-conversion-optimization` (9 images on that page).
- All images are served unoptimized because of `images.unoptimized: true` in `next.config.js`. This is a performance and migration consideration, not a correctness issue.
- `public/robots.txt` allows all crawling and points to `https://infused.agency/sitemap.xml`.
- `sitemap.xml` is an index with four children: default, general contractors, therapists, and services.
- `next-sitemap.config.js` is minimal: `siteUrl`, `generateRobotsTxt`, and `outDir`.
- The page inventory CSV is the authoritative URL list for the rebuild. It includes status, sitemap membership, title, H1, source file, and data source.
