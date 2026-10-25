# Retired Routes and Internal Link Audit

Date: 2026-10-24
Scope: Astro rebuild only (`astro/`). The legacy Next.js implementation was not modified.

## 1. Outcome

- All 16 retired routes are removed from the Astro build. None is generated as an active canonical page.
- All 16 are absent from the generated sitemap.
- Navigation, footer, services hub, human sitemap, related-link modules, and legacy page adapters no longer emit links to them.
- 8 routes return `301` to a genuinely equivalent surviving page.
- 8 routes return `410 Gone` because the offer was discontinued and no equivalent page exists.
- Pre-change output contained 71 page-level references (87 rendered `href` attributes) across 16 retired routes. Post-change output contains 0.
- Generated-output audit found 0 broken internal targets, 0 internal links that rely on a redirect, 0 redirect chains, and 0 self-redirects.
- `yarn check:astro`, `yarn build:astro`, and `yarn validate:astro` all pass.

No commit, push, or deploy was performed.

## 2. Route dispositions

`Refs` is the pre-change count of generated pages containing the link, followed by the number of rendered `href` attributes. The `/services` page renders each service twice (card title and "Learn more"), so its href count is double its page count.

### Redirected routes (301)

| Retired route | Destination | Refs (pages / hrefs) | Rationale |
| --- | --- | --- | --- |
| `/ecommerce-marketing/ecommerce-optimization` | `/website-conversion-optimization` | 3 / 4 | Store and checkout optimization is now delivered by the surviving conversion optimization service. |
| `/digital-marketing/conversion-rate-optimization` | `/website-conversion-optimization` | 2 / 3 | Direct equivalent page survives at `/website-conversion-optimization`. |
| `/ecommerce-marketing/ecommerce-seo` | `/seo` | 2 / 3 | eCommerce SEO is now delivered within the core SEO service. |
| `/seo/content-writing` | `/seo` | 5 / 6 | Content writing is delivered as part of the core SEO service. |
| `/seo/franchise-seo` | `/seo` | 3 / 4 | Franchise and multi-location SEO is delivered within the core SEO service. |
| `/seo/link-building` | `/seo` | 3 / 4 | Link earning is delivered as part of the core SEO service. |
| `/seo/local-seo` | `/seo` | 26 / 27 | Local SEO is delivered within the core SEO service, city pages, and industry pages. |
| `/seo/technical-seo` | `/seo` | 4 / 5 | Technical SEO is delivered as part of the core SEO service. |

### Removed routes (410 Gone)

| Retired route | Refs (pages / hrefs) | Rationale |
| --- | --- | --- |
| `/web-design/website-hosting` | 3 / 4 | Website hosting and maintenance was retired as a standalone service and has no equivalent page. |
| `/ecommerce-marketing` | 4 / 5 | The standalone eCommerce marketing service line was retired and has no equivalent hub page. |
| `/ecommerce-marketing/ecommerce-ppc` | 2 / 3 | Paid eCommerce advertising is no longer offered. |
| `/ecommerce-marketing/shopify-seo` | 3 / 4 | Standalone Shopify SEO was retired. Shopify builds survive at `/web-design/shopify-web-design`; SEO is covered by `/seo`. |
| `/digital-marketing` | 2 / 3 | The standalone digital marketing service was retired. The agency now sells SEO, AI search, and web design. |
| `/reputation-management` | 4 / 5 | Reputation management was retired as a standalone service. |
| `/reputation-management/online-reputation-repair` | 2 / 3 | Online reputation repair was retired with the reputation service line. |
| `/seo/white-label` | 3 / 4 | The white-label fulfilment programme was retired. |

## 3. Pre-change reference inventory

Counts and locations were measured from a clean build of `HEAD` before these changes, by scanning every rendered `href` in `astro/dist/**/*.html`.

| Retired route | Pages / hrefs | Locations |
| --- | --- | --- |
| `/web-design/website-hosting` | 3 / 4 | `/services` (2 hrefs), `/sitemap`, `/web-design/shopify-web-design` |
| `/ecommerce-marketing` | 4 / 5 | `/services` (2), `/sitemap`, `/web-design/ecommerce-web-design`, `/web-design/shopify-web-design` |
| `/ecommerce-marketing/ecommerce-optimization` | 3 / 4 | `/services` (2), `/sitemap`, `/web-design/ecommerce-web-design` |
| `/ecommerce-marketing/ecommerce-ppc` | 2 / 3 | `/services` (2), `/sitemap` |
| `/ecommerce-marketing/ecommerce-seo` | 2 / 3 | `/services` (2), `/sitemap` |
| `/ecommerce-marketing/shopify-seo` | 3 / 4 | `/services` (2), `/sitemap`, `/web-design/shopify-web-design` |
| `/digital-marketing` | 2 / 3 | `/services` (2), `/sitemap` |
| `/digital-marketing/conversion-rate-optimization` | 2 / 3 | `/services` (2), `/sitemap` |
| `/reputation-management` | 4 / 5 | `/ai-search`, `/services` (2), `/sitemap`, `/therapist-seo` |
| `/reputation-management/online-reputation-repair` | 2 / 3 | `/services` (2), `/sitemap` |
| `/seo/content-writing` | 5 / 6 | `/ai-search`, `/seo`, `/services` (2), `/sitemap`, `/therapist-seo` |
| `/seo/franchise-seo` | 3 / 4 | `/seo`, `/services` (2), `/sitemap` |
| `/seo/link-building` | 3 / 4 | `/seo`, `/services` (2), `/sitemap` |
| `/seo/local-seo` | 26 / 27 | `/general-contractor-seo`, `/seo`, `/services` (2), `/sitemap`, `/therapist-seo`, `/web-design/niagara-falls`, `/web-design/st-catharines`, plus 19 Niagara industry pages: concrete contractors, countertop fabricators, deck builders, dentists, electricians, fireplace/chimney services, flooring installers, HVAC contractors, insulation, landscapers, law firms, masonry contractors, painters, plumbers, roofers, solar companies, tile installers, tree services, wineries |
| `/seo/technical-seo` | 4 / 5 | `/ai-search`, `/seo`, `/services` (2), `/sitemap` |
| `/seo/white-label` | 3 / 4 | `/seo`, `/services` (2), `/sitemap` |

Total: 71 page-level references and 87 `href` attributes.

## 4. Changes made

### 4.1 Astro-only retirement registry

Added `astro/src/lib/retired-routes.mjs` and its declaration file. It is the single source for:

- each retired route, its disposition, destination, and rationale;
- whether a promotional link list should drop or rewrite the link;
- internal link normalization and markdown-link rewriting;
- removal of obsolete promotional links and de-linking of gone routes in editorial copy;
- exact-string copy replacements for legacy pages that still pitch a retired service.

The registry is used only by the Astro build. Shared legacy data under `src/` and `data/` was left intact so the live Next.js implementation is unaffected.

### 4.2 Page generation and navigation

- `astro/src/lib/legacy-pages.mjs`
  - Skips retired services when generating service pages.
  - Applies link rewriting/removal to service pages, industry pages, city pages, vertical pages, niche pages, bespoke pages, work projects, and industry data.
  - Filters retired services out of the services hub and removes groups that become empty.
- `astro/src/lib/site.ts`
  - Filters retired services from the exported service list.
  - Filters retired routes from navigation groups.
- `astro/src/pages/services.astro`
  - Meta description changed from "digital marketing, SEO and web design" to "SEO, AI search and web design".

### 4.3 Sitemap

- `astro/src/pages/sitemap.xml.ts` explicitly deletes every retired route before writing `sitemap.xml`. This is a guard against a future adapter reintroducing one.
- The generated sitemap contains 200 URLs and none of the 16 retired routes.

### 4.4 Redirects

Added 16 rules to `astro/public/_redirects`:

- Eight `301` rules for equivalent surviving pages.
- Eight self-referencing `410` rules for discontinued offers.

Existing aliases are preserved. Two internal aliases were added to link rewriting so generated pages point at final URLs directly instead of taking an unnecessary redirect hop:

- `/work` → `/results`
- `/niagara-seo-company` → `/`

### 4.5 Copy changes

Two legacy pages still advertised a retired service as a current offer. Their copy is overridden at build time in the Astro registry, not in the legacy source:

- `/web-design/st-catharines`
  - "Hosting and ongoing maintenance" became "Support after launch".
  - "We offer website hosting and ongoing maintenance..." became copy stating that hosting is not sold as a separate service, with a recommendation/handover instead.
- `/web-design/shopify-web-design`
  - The Shopify SEO FAQ answer now frames the work as part of the core SEO service rather than a separate Shopify-only package.

### 4.6 Validation guardrails

`astro/scripts/validate-prototype.mjs` now fails when:

- a retired route is built as an HTML page;
- any generated page links to a retired route;
- a retired route appears in the sitemap;
- a retired route is missing its expected `301`/`410` rule;
- a `301` destination is retired, missing, or itself redirects;
- a `410` rule does not point at itself.

It also warns on pre-existing redirect chains.

### 4.7 Documentation data

- `docs/astro-rebuild/route-manifest.csv`: the 16 routes now have `in_sitemap=false`, `410_gone` or `redirect:<destination>`, and a retired disposition/rationale.
- `docs/astro-rebuild/redirect-register.csv`: appended the 16 redirect/410 decisions in the file's existing UTF-16LE BOM/CRLF encoding.

## 5. Retained references and why

These references were deliberately kept because they are editorial, historical, or describe a capability of a surviving service. None links to a retired route.

- **Blog content.** The blog index describes the blog as covering "digital marketing, SEO & web design", and posts such as `/posts/benefits-of-using-digital-marketing` discuss digital marketing as a topic. These are editorial articles, not the retired `/digital-marketing` service page. They contain no link to it.
- **`/seo` capability copy.** Link building, content writing, local SEO, and technical SEO remain as named components of the surviving SEO service. The pages describe how the work is delivered, not standalone offers, and do not link to the retired child routes.
- **`/results` portfolio tags.** "Web Hosting & Ongoing Maintenance" remains as historical project metadata on work items. It records what was delivered on past projects and is not presented as a current standalone service.
- **Shopify SEO FAQ.** `/web-design/shopify-web-design` still answers a customer question about SEO for Shopify stores. The answer now explicitly routes the work through the core SEO service rather than advertising a separate Shopify SEO package.
- **Local SEO pages footer.** "Local SEO pages" in the footer links to surviving city pages, not to `/seo/local-seo`.
- **Human sitemap.** `/sitemap` lists surviving services and pages only. Blog titles containing "digital marketing" or "local SEO" remain because they are article titles.

## 6. Generated-output audit

Audited `astro/dist/` after a clean `yarn build:astro`.

| Check | Result |
| --- | --- |
| Pages built | 203 (202 HTML files) |
| `href` attributes scanned | 13,121 |
| Internal `href` attributes | 11,680 |
| Unique internal paths | 196 |
| Unique external URLs | 212 |
| Links to the 16 retired routes | 0 |
| Retired routes built as HTML pages | 0 |
| Retired routes in `sitemap.xml` | 0 |
| Sitemap URLs | 200 |
| Internal links to redirect sources | 0 |
| Broken internal link targets | 0 |
| Redirect chains / self-redirects | 0 |
| `_redirects` rules | 142 |
| Retired-route rules present and correct | 16 of 16 |

The 202 HTML files include `/404` and `/500`, which are intentionally excluded from the sitemap. The 200 sitemap URLs therefore match the indexable HTML page set.

### Redirect file audit

- 142 total rules.
- 16 rules cover the retired routes: 8 `301`, 8 `410`.
- 0 self-redirects.
- 0 redirect chains.
- 25 pre-existing rules point to `/posts/...` targets that are not part of the current Astro build. These are inherited legacy post-rename redirects, are not linked internally, and are unrelated to the retired service routes. See section 7.

## 7. Unresolved and pre-existing issues

1. **25 pre-existing post redirects have no current destination.** These rules were already in `_redirects`; this work neither added nor changed them. Their destinations are legacy post slugs that were not migrated into the Astro build. They should be resolved in a separate blog-migration task, either by adding the missing posts or by changing the rules to `410`.

   <details>
   <summary>List of 25 missing destinations</summary>

   - `/posts/best-practices-cta-buttons` → `/posts/3-best-practices-for-high-converting-cta-buttons`
   - `/posts/10-best-seo-strategies-2021/` → `/posts/10-of-the-best-seo-strategies-for-2021`
   - `/posts/3-things-your-website-needs-to-bring-in-more-revenue` → `/posts/3-things-website-needs-to-bring-in-revenue/`
   - `/posts/10-tips-how-to-create-effective-landing-page/` → `/posts/10-tips-on-how-to-create-an-effective-landing-page`
   - `/posts/best-strategies-rank-higher-google-maps-pack/` → `/posts/best-strategies-techniques-to-rank-higher-in-google-maps-pack`
   - `/posts/web-design-for-small-businesses/` → `/posts/crafting-a-powerful-online-presence-web-design-tips-for-small-businesses`
   - `/posts/visual-heirarchy-web-design/` → `/posts/creating-visual-hierarchy-in-web-design-guiding-users-with-design-principles`
   - `/posts/web-design-trends` → `/posts/exploring-the-top-web-design-trends-of-2023-a-visual-revolution`
   - `/posts/how-to-make-website-AODA-compliant/` → `/posts/how-do-i-make-my-website-aoda-wcag-accessibility-compliant`
   - `/posts/boost-business-sales-web-design/` → `/posts/how-do-we-boost-our-business-sales-with-web-design`
   - `/posts/how-to-create-effective-website-layout/` → `/posts/how-to-create-an-effective-website-layout-for-better-user-experience`
   - `/posts/make-website-load-faster-pictures/` → `/posts/how-to-make-a-website-load-faster-with-pictures`
   - `/posts/mastering-local-seo/` → `/posts/mastering-local-seo-7-strategies-to-boost-your-local-business`
   - `/posts/web-performance-optimization/` → `/posts/maximizing-user-experience-the-art-of-web-performance-optimization`
   - `/posts/new-website-tree-reports/` → `/posts/new-website-launched-treereports`
   - `/posts/on-page-seo-best-practices/` → `/posts/on-page-seo-best-practices-optimizing-your-website-for-search-engines`
   - `/posts/web-design-process/` → `/posts/our-8-step-web-design-process-for-2019`
   - `/posts/seo-vs-ppc` → `/posts/seo-vs-ppc-which-should-you-use`
   - `/posts/website-sales-speed-engagement` → `/posts/the-crucial-link-between-website-speed-sales-and-customer-engagement`
   - `/posts/power-of-backlinks/` → `/posts/the-power-of-backlinks-building-a-strong-link-profile`
   - `/posts/white-space-web-design/` → `/posts/the-importance-of-white-space-in-web-design`
   - `/posts/power-of-video-seo/` → `/posts/unlocking-the-power-of-video-seo-boost-your-visibility-and-engagement`
   - `/posts/seo-in-web-design/` → `/posts/unveiling-the-importance-of-seo-in-web-design`
   - `/posts/seo-steps-new-website/` → `/posts/what-are-the-steps-involved-for-doing-seo-for-a-new-website`
   - `/posts/drive-visitors-to-new-website/` → `/posts/what-is-the-best-method-to-drive-visitors-to-a-new-website`

   </details>

2. **Legacy source still contains retired URLs.** This is intentional. Editing `src/` or `data/` would change the live Next.js implementation, so the Astro adapters filter and rewrite the data at build time. Any future Astro page that reads legacy data directly must use the helpers in `retired-routes.mjs` or it may reintroduce a retired link.

3. **`src/generated/services-nav.json` is a stale snapshot.** It still contains retired routes. `astro/src/lib/site.ts` filters it at build time, but the generated file should be regenerated by its owner so the snapshot reflects the current service set.

4. **`docs/astro-rebuild/route-manifest.csv` has a pre-existing malformed row.** The `/seo/grimsby` row has an unbalanced quote and merged columns. Strict CSV parsers stop or misparse from that point, which can hide later rows, including `/seo/link-building`. The row itself and the 16 updated rows are correct in the raw file. This is a documentation-data issue, not a site-build issue.

5. **Pre-existing duplicate related links.** `/ai-search`, `/web-design/ecommerce-web-design`, and `/web-design/shopify-web-design` each render a duplicated chip (Search Engine Optimization or Web Design). These duplicates existed before this work and were not introduced by the retirement changes. They do not link to retired routes.

## 8. Validation results

All commands were run from the repository root after the final build.

```text
yarn check:astro
Result (77 files):
- 0 errors
- 0 warnings
- 0 hints

yarn build:astro
203 page(s) built

yarn validate:astro
PASSED with 0 warning(s)
```

`yarn validate:astro` audited 202 HTML files, the sitemap, and `_redirects`, including the retired-route checks described in section 4.6.

## 9. Files changed

- `astro/src/lib/retired-routes.mjs` (new)
- `astro/src/lib/retired-routes.d.mts` (new)
- `astro/src/lib/legacy-pages.mjs`
- `astro/src/lib/site.ts`
- `astro/src/pages/services.astro`
- `astro/src/pages/sitemap.xml.ts`
- `astro/public/_redirects`
- `astro/scripts/validate-prototype.mjs`
- `docs/astro-rebuild/route-manifest.csv`
- `docs/astro-rebuild/redirect-register.csv`
- `docs/astro-rebuild/RETIRED_ROUTES_AND_INTERNAL_LINK_AUDIT.md` (this report)
