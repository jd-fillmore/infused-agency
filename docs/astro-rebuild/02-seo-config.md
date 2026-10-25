# Phase 1 SEO Configuration Audit

This report covers the current Next.js metadata, canonical, heading, structured-data, sitemap, robots, and redirect behaviour. Counts are for the `219` routes that return `200` unless stated otherwise.

## Metadata coverage

| Check | Result |
| --- | ---: |
| `200` pages checked | 219 |
| Duplicate titles | 0 |
| Duplicate descriptions | 0 |
| Duplicate canonicals | 0 |
| Missing title | 2 |
| Missing description | 2 |
| Missing canonical | 7 |
| H1 count not exactly 1 | 6 |
| Titles longer than 60 characters | 31 |
| Descriptions longer than 160 characters | 48 |
| Missing `og:image` | 219 |
| Missing `og:title` | 42 |
| Missing Twitter card metadata | 42 |
| Missing JSON-LD | 21 |
| JSON-LD parse errors | 0 |

The earlier duplicate-title and duplicate-description findings were caused by treating missing values as duplicates. With null values excluded, there are no duplicate non-null titles, descriptions, or canonicals.

### Missing metadata

Missing title and description:

- `/postLink` (`src/pages/postLink.js`) has no `Head` block and no H1. It appears to be an orphan component accidentally exposed as a page.
- `/sitemap` (`src/pages/sitemap.js`) has an H1 but no `Head`, title, description, or canonical.

Missing canonical:

- `/cass-a-bella-construction`
- `/get-started`
- `/kd-florist`
- `/postLink`
- `/posts`
- `/sitemap`
- `/tree-reports`

`/posts` is an indexable duplicate of `/blog` with no canonical. `/get-started` is also an orphan and its form is commented out (`src/pages/get-started.js:25-33`).

### Long titles and descriptions

31 titles exceed 60 characters. The worst offenders are the six live US legacy therapist pages (`/seo/for-therapists-albany`, `buffalo`, `huntington`, `new-york`, `rochester`, `syracuse`) at 177-185 characters. Nine city SEO pages, six industry pages, five blog posts, three static pages, one web-design page, and one service page are also over the threshold.

48 descriptions exceed 160 characters, including 22 industry pages, 9 city pages, 8 blog posts, 4 legacy therapist pages, 3 web-design pages, and 2 static pages. The longest are `/seo/for-home-additions-niagara` (231), `/seo/for-chiropractors-niagara` (226), and `/seo/for-financial-advisors-niagara` (218).

### H1 issues

`/postLink` has no H1. Five posts have two H1s because the post template renders `PageHero` with an H1, and the Markdown body also begins with `#`:

- `posts/can-seo-be-done-by-ai.md:14`
- `posts/common-seo-mistakes-and-how-to-avoid-them.md:12`
- `posts/local-seo-domination-small-business.md:12`
- `posts/local-seo-tips-niagara.md:12`
- `posts/seo-increases-business-opportunities.md:12`

The template H1 is in `components/ui/PageHero.js:30`; the post template invokes `PageHero` in `src/pages/posts/[id].js`. The Markdown H1s are rendered through `dangerouslySetInnerHTML`, so both headings survive.

### Open Graph and Twitter

All 219 `200` pages lack `og:image`. The 42 pages without `og:title` and Twitter metadata include `/`, `/about`, `/blog`, all 15 blog posts, `/seo`, `/web-design`, `/services`, `/sitemap`, `/work`, and the six US legacy therapist pages. Vertical pages set Open Graph title and description but still have no Open Graph image.

This is a social-sharing and entity-consistency gap rather than an indexing blocker. The migration should preserve or improve the current explicit metadata, especially for vertical and service pages.

## Structured data

`198` of 219 `200` pages contain JSON-LD. Schema validation reported `0` failures. The generated graph is built in `src/lib/verticalSeoSchema.js` and rendered by `components/seo/PageJsonLd.js`.

Common node types: `Organization`, `ProfessionalService`, `LocalBusiness`, `PostalAddress`, `ImageObject`, `BreadcrumbList`, `FAQPage`, `Service`, `BlogPosting`, `CollectionPage`, and `WebPage`.

21 `200` pages have no JSON-LD:

- `/areas-we-serve`
- `/blog`
- `/cass-a-bella-construction`
- `/effective-web-design-steps`
- `/get-started`
- `/kd-florist`
- `/postLink`
- `/posts`
- `/privacy-policy`
- `/process`
- `/sitemap`
- `/tree-reports`
- `/website-conversion-optimization`
- `/wordpress-developer-niagara`
- `/work`
- `/seo/for-therapists-albany`
- `/seo/for-therapists-buffalo`
- `/seo/for-therapists-huntington`
- `/seo/for-therapists-new-york`
- `/seo/for-therapists-rochester`
- `/seo/for-therapists-syracuse`

The six live US therapist pages are the only remaining legacy therapist pages; the other 40 legacy therapist URLs are redirects.

The HTML document declares `<Html lang="en">` (`src/pages/_document.js:5`), while the schema graph uses `en-CA` (`src/lib/verticalSeoSchema.js:119,143,166`). This is a minor consistency issue.

## Sitemap and robots

- `public/robots.txt` allows all user agents and points to `https://infused.agency/sitemap.xml`.
- `sitemap.xml` is an index with four children.
- `sitemap-0.xml`: 187 URLs.
- `sitemap-vertical-general-contractors.xml`: 10 URLs.
- `sitemap-vertical-therapists.xml`: 42 URLs.
- `sitemap-services.xml`: 21 URLs.
- Total: 260 URLs.
- `219` sitemap URLs return `200`; `41` return `308`; no `200` page is missing from the sitemap.

The 41 redirecting sitemap URLs are:

- 40 `/seo/for-therapists-*` legacy URLs that redirect to `/therapist-seo*`.
- `/reviews`, which redirects to `/get-a-quote`.

`/reviews` is a live route file (`src/pages/reviews.js`) but is unreachable because `next.config.js` redirects it. Keeping it in the sitemap contradicts the redirect.

`next-sitemap` generates the default sitemap from the build route table. `scripts/generate-vertical-sitemaps.js` then removes vertical prefixes and exact service URLs from `sitemap-0.xml`, writes child sitemaps, and rebuilds the index. The scrub does not remove legacy redirect URLs or `/reviews`, which is why they remain.

## Redirect configuration

`next.config.js` defines 121 redirects:

- 8 configured with `statusCode: 301`.
- 113 configured with `permanent: true` (308).
- 40 are legacy therapist redirects from `getPublishedRedirects()`.
- 8 are Arizona solar pages to the Niagara solar page.
- 14 are web-design or removed web-design city pages.
- 29 are legacy blog URLs.
- 2 contain literal spaces in the source (`/ecommerce-web-design-St. Catharines`, `/wordpress-developer-St. Catharines`).
- The rest are legacy SEO, pricing, review, and agency pages.

Actual first-hop behaviour:

- 4 sources return `301`.
- 115 sources return `308`.
- 2 sources return `404` because the literal-space paths do not match the encoded request.

Other findings:

- 30 configured redirects terminate at `404`, not `200`.
- 28 of those are legacy blog rules whose final URL is a missing post; 2 are the literal-space sources.
- 5 redirect chains exist. Four resolve to `200`; one blog chain ends at `404`.
- 0 redirect loops.
- One duplicate source: `/posts/how-can-i-generate-website-traffic-with-0-marketing-budget`.

Redirect categories are important for the rebuild because the Astro site must reproduce the useful redirects without carrying forward the 404 destinations. The 30 failing rules are primarily old blog URLs whose redirect target or source does not resolve to a live post in `posts/`.

`/seo/st-catharines`, `/seo/niagara-falls`, and their trailing-slash variants are configured to `301` to `/`. Those deleted city pages are still linked from the global footer and homepage; the link audit records 436 internal occurrences to those two redirects.

## Indexation and rendering

- `/blog` is the only server-rendered route (`getServerSideProps` in `src/pages/blog.js:85`).
- `/blog` pagination uses `/blog?page=N`, but the canonical is always `https://infused.agency/blog` (`src/pages/blog.js:22`). Page 2+ is therefore canonicalised to page 1 and has no `noindex`. This appears intentional as consolidation, but it is not a unique canonical per page.
- `/posts` is a second blog listing, returns `200`, and is in the sitemap. It has no canonical and zero inbound links. It is both an orphan and a potential duplicate.
- `/reviews` is in the sitemap but redirects.
- `/404` is intentionally a `404`. `/500` is a `404` because `src/pages/500.js` does not exist. `/dev/styleguide` is built but returns `404` in production.
- `/postLink` is an accidental page. It has no metadata, no H1, no canonical, and no inbound links.

## Analytics and consent

`src/pages/_app.js:55-77` hardcodes GA4 and Microsoft Clarity script tags. No consent-management platform, consent banner, or Google Tag Manager container was found. The analytics IDs are public client-side identifiers; they are not reproduced here. The rebuild needs an explicit decision on consent before reusing these tags.

## Migration-sensitive SEO behaviour

The following must be treated as first-class data during migration:

1. 121 redirect entries, including their status codes, chains, duplicates, and 30 failing destinations.
2. 260 sitemap URLs across four child sitemaps, with 41 redirect entries currently included.
3. 52 data-driven vertical pages gated by `src/lib/verticalSeo.js`.
4. 21 data-driven service pages gated by `src/lib/services.js`.
5. The JSON-LD graph and its `@id` references.
6. Canonical rules, especially `/blog` pagination, `/posts`, `/reviews`, and legacy therapist URLs.
7. The difference between the current build (`52` published vertical pages) and the stale committed reports (`53`, including a Prince Edward Island page with no current source file).
