# Schema (JSON-LD) audit — Phase 8

Audit of the structured data emitted by every page type, taken before the
Phase 8 fixes. Findings are grouped by page type and split into **types
present**, **types missing**, and **problems**. The fixes are described in
`docs/vertical-seo-build.md` under "Follow-up Phase 8". A machine check
(`scripts/validate-schema.js`) now enforces the result on the built HTML.

Legend: `ORG_ID = https://infused.agency/#organization`.

## 1. Homepage — `/` (`src/pages/index.js`)

- **Present:** `Place` (`#place`), `["LocalBusiness", "Organization"]`
  (`#organization`), `WebSite` (`#website`), `WebPage` (`#webpage`),
  a second `LocalBusiness` node with `@id` `https://infused.agency/about/`,
  `FAQPage` (`#faq`). One `@graph`.
- **Missing:** `ProfessionalService` typing (the org is typed
  `LocalBusiness`/`Organization` only).
- **Problems:**
  - **Duplicate organization entities.** Two nodes describe Infused Agency:
    `#organization` and `/about/`. Two `LocalBusiness`/`Organization` nodes on
    one page is exactly the duplication the rule forbids.
  - **Fabricated `aggregateRating`** (`4.9`, `33`) on **both** org nodes, with
    no data file or visible source.
  - **Fabricated `Review` nodes** — 3 reviews authored by "JD Fillmore",
    "Alice Smith" and "John Doe" with invented `reviewBody` text that is not
    on the page. Review/AggregateRating markup for Infused itself is
    forbidden and these are invented.
  - **Brittle `logo`/`image` URL** pointing at a build-hashed asset
    (`_next/static/media/infused-logo.6971b904.png`); the hash changes on
    rebuild.
  - `/about/` node is a **page URL used as an entity id**, not a stable
    fragment id.
  - **Opening hours do not match visible content.** The org node declares
    `Mo-Fr 09:00-17:00` and `Sa 10:00-14:00`, but the footer (visible on every
    page) says Monday–Friday 9a.m.–6p.m. and Saturday/Sunday closed. The
    schema marks up hours that are not shown.
  - `WebSite.inLanguage` is `en-US` (site is en-CA); `potentialAction`
    `SearchAction` targets `/?s=` although the site has no on-site search.
  - `Place` and org both carry address/geo — acceptable, but the org node
    already covers them.
  - The footer's Instagram link (`instagram.com/infusedweb`) differs from the
    schema `sameAs` Instagram (`instagram.com/infusedagency`). Flagged for a
    human to confirm which is canonical; the audit keeps the value already
    declared in the existing schema.

## 2. `/seo` pillar (existing) — `src/pages/seo/index.js`

- **Present:** none.
- **Missing:** `Organization` reference, `WebPage`/`CollectionPage`,
  `BreadcrumbList`.
- **Problems:** no structured data at all on a key hub page.

## 3. `/services` hub — `src/pages/services.js`

- **Present:** none.
- **Missing:** `Organization` reference, `CollectionPage`/`WebPage`,
  `BreadcrumbList`.
- **Problems:** no structured data.

## 4. `/web-design` pillar (existing) — `src/pages/web-design/index.js`

- **Present:** none.
- **Missing:** `Organization` reference, `WebPage`, `BreadcrumbList`.
- **Problems:** no structured data.

## 5. Niagara city pages — `/seo/{city}`

Pages: `beamsville`, `crystal-beach`, `fonthill`, `fort-erie`, `grimsby`,
`niagara-falls`, `niagara-on-the-lake`, `port-colborne`, `st-catharines`,
`thorold`, `welland` (`src/pages/seo/*.js`).

- **Present:** `FAQPage` only.
- **Missing:** `Service`, `BreadcrumbList`, `Organization` reference.
- **Problems:** the FAQ text is duplicated between the JSON-LD block and the
  rendered FAQ section (pre-existing, left as-is); no service/city entity is
  declared; no breadcrumb trail.

## 6. Legacy live therapist pages — `/seo/for-therapists-{city}` (US, live)

`albany`, `buffalo`, `huntington`, `new-york`, `rochester`, `syracuse`.

- **Present:** none.
- **Missing:** `WebPage`, `Organization` reference.
- **Problems:** kept live for backlink/ranking preservation; out of scope for
  content work, but noted as the last pages with no structured data.

## 7. Vertical × geo pages — `/therapist-seo`, `/therapist-seo/{province}`,

`/therapist-seo/{province}/{city}`

- **Present:** one `@graph` per page: `BreadcrumbList`, `Service`,
  `FAQPage` (where FAQs render).
- **Missing:** the `Organization` node itself.
- **Problems:** `Service.provider = { "@id": ORG_ID }` is an **unresolved
  `@id` reference** — the entity is only defined on the homepage.

## 8. Service pages — `/ai-search`, `/seo/*`, `/web-design/*`,

`/digital-marketing*`, `/ecommerce-marketing*`, `/reputation-management*`

- **Present:** one `@graph` per page: `BreadcrumbList`, `Service`,
  `FAQPage`.
- **Missing:** the `Organization` node itself.
- **Problems:** same unresolved `Service.provider` `@id` as the vertical
  pages.

## 9. Blog posts — `/posts/{id}` (15 posts)

- **Present:** none.
- **Missing:** `BlogPosting` (author, `datePublished`, `dateModified`),
  `Organization` reference.
- **Problems:** articles are not marked up; frontmatter already carries
  `title`, `date`, `excerpt`, `image`.

## 10. `/about`

- **Present:** none.
- **Missing:** `AboutPage`, `Organization` reference.

## 11. `/get-a-quote`

- **Present:** none.
- **Missing:** `ContactPage`, `Organization` reference.

## 12. `/work`

- **Present:** none.
- **Missing:** `WebPage`, `BreadcrumbList`. (Not in the required-types list;
  noted for completeness.)

## 13. Other legacy web-design pages

- `/niagara-web-design`: `FAQPage` only.
- `/caledonia-web-design`: a bare `LocalBusiness` node with **no `@id`**, a
  wrong `url` (`https://www.infused.agency`), a hashed `_next/image` logo URL,
  and a `sameAs` Instagram link (`infusedweb`) that doesn't match the site's
  Instagram (`infusedagency`). Duplicates the agency entity without an id.
  Left untouched (outside the required-types list) but flagged for a human.

## Required types after fix (per `docs/vertical-seo-followups.md` §Phase 8)

| Page type                  | Required types                                    |
| -------------------------- | ------------------------------------------------- |
| Homepage                   | Organization/ProfessionalService + WebSite        |
| Niagara city `/seo/{city}` | Service, BreadcrumbList, FAQPage                  |
| Vertical pages             | BreadcrumbList, Service, FAQPage (+ Organization) |
| Service pages              | BreadcrumbList, Service, FAQPage (+ Organization) |
| Blog posts                 | BlogPosting (author, datePublished, dateModified) |
| `/about`                   | AboutPage                                         |
| `/get-a-quote`             | ContactPage                                       |

## Rules enforced

1. Only mark up content that is visible on the page.
2. No `Review` or `AggregateRating` markup for Infused Agency itself.
3. No duplicate `Organization`/`LocalBusiness` nodes on a page.
4. No invented properties; only real address, phone, hours and `sameAs` links
   already on the site.
