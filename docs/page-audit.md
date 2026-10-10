# Page audit — final (Phase 9)

Regenerated 2026-10-10 against a production build (172 HTML pages). Re-runs the Phase 3 audit and extends it to cover the service pages, the Solutions nav links and JSON-LD schema validation. Vertical-page structure comes from the data tree via `src/lib/verticalSeo.js`; links and schema types are read from the rendered HTML so nav/footer chrome is included.

## Vertical x geo cluster

- **Published pages: 42** (pillar, USA country, 10 provinces, city pages).
- **Unique prose** is the gate metric (directAnswer + intro + localInsight + local checklist + geo-specific FAQ answers), not the rendered word count.
- **In (group)** = other published vertical pages linking here. **In (chrome)** = site chrome (`/`, `/sitemap`, `/seo`, `/services`, `/work`).
- **City links / Province links / Legacy links** = out-links from the page matching `/therapist-seo/{province}/{city}`, `/therapist-seo/{province}` and `/seo/for-therapists-*`.

| Page | Kind | Sections | Unique prose | Out | In (group) | In (chrome) | City links | Province links | Legacy links | FAQs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| /therapist-seo | pillar | directAnswer, intro, localInsight, localChecklist, links, moreCities, proof, faq | 482 | 58 | 41 | 5 | 0 | 10 | 6 | 8 |
| /therapist-seo/alberta | province | directAnswer, intro, localInsight, localChecklist, links, citiesIndex, proof, faq | 405 | 47 | 7 | 1 | 5 | 0 | 0 | 5 |
| /therapist-seo/alberta/airdrie | city | directAnswer, intro, localInsight, localChecklist, links, proof, faq | 442 | 47 | 5 | 0 | 4 | 1 | 0 | 6 |
| /therapist-seo/alberta/calgary | city | directAnswer, intro, localInsight, localChecklist, links, proof, faq | 452 | 47 | 5 | 0 | 4 | 1 | 0 | 6 |
| /therapist-seo/alberta/edmonton | city | directAnswer, intro, localInsight, localChecklist, links, proof, faq | 431 | 47 | 5 | 0 | 4 | 1 | 0 | 6 |
| /therapist-seo/alberta/lethbridge | city | directAnswer, intro, localInsight, localChecklist, links, proof, faq | 447 | 47 | 5 | 0 | 4 | 1 | 0 | 6 |
| /therapist-seo/alberta/red-deer | city | directAnswer, intro, localInsight, localChecklist, links, proof, faq | 445 | 47 | 5 | 0 | 4 | 1 | 0 | 6 |
| /therapist-seo/british-columbia | province | directAnswer, intro, localInsight, localChecklist, links, citiesIndex, proof, faq | 421 | 47 | 7 | 1 | 5 | 0 | 0 | 5 |
| /therapist-seo/british-columbia/abbotsford | city | directAnswer, intro, localInsight, localChecklist, links, proof, faq | 451 | 47 | 5 | 0 | 4 | 1 | 0 | 6 |
| /therapist-seo/british-columbia/burnaby | city | directAnswer, intro, localInsight, localChecklist, links, proof, faq | 444 | 47 | 5 | 0 | 4 | 1 | 0 | 6 |
| /therapist-seo/british-columbia/richmond | city | directAnswer, intro, localInsight, localChecklist, links, proof, faq | 451 | 47 | 5 | 0 | 4 | 1 | 0 | 6 |
| /therapist-seo/british-columbia/surrey | city | directAnswer, intro, localInsight, localChecklist, links, proof, faq | 464 | 47 | 5 | 0 | 4 | 1 | 0 | 6 |
| /therapist-seo/british-columbia/vancouver | city | directAnswer, intro, localInsight, localChecklist, links, proof, faq | 441 | 47 | 5 | 0 | 4 | 1 | 0 | 6 |
| /therapist-seo/manitoba | province | directAnswer, intro, localInsight, localChecklist, links, citiesIndex, proof, faq | 401 | 43 | 3 | 1 | 1 | 0 | 0 | 5 |
| /therapist-seo/manitoba/winnipeg | city | directAnswer, intro, localInsight, localChecklist, links, proof, faq | 453 | 43 | 1 | 0 | 0 | 1 | 0 | 6 |
| /therapist-seo/new-brunswick | province | directAnswer, intro, localInsight, localChecklist, links, citiesIndex, proof, faq | 401 | 45 | 5 | 1 | 3 | 0 | 0 | 5 |
| /therapist-seo/new-brunswick/fredericton | city | directAnswer, intro, localInsight, localChecklist, links, proof, faq | 445 | 45 | 3 | 0 | 2 | 1 | 0 | 6 |
| /therapist-seo/new-brunswick/moncton | city | directAnswer, intro, localInsight, localChecklist, links, proof, faq | 446 | 45 | 3 | 0 | 2 | 1 | 0 | 6 |
| /therapist-seo/new-brunswick/saint-john | city | directAnswer, intro, localInsight, localChecklist, links, proof, faq | 466 | 45 | 3 | 0 | 2 | 1 | 0 | 6 |
| /therapist-seo/newfoundland-and-labrador | province | directAnswer, intro, localInsight, localChecklist, links, citiesIndex, proof, faq | 404 | 43 | 3 | 1 | 1 | 0 | 0 | 5 |
| /therapist-seo/newfoundland-and-labrador/st-johns | city | directAnswer, intro, localInsight, localChecklist, links, proof, faq | 446 | 43 | 1 | 0 | 0 | 1 | 0 | 6 |
| /therapist-seo/nova-scotia | province | directAnswer, intro, localInsight, localChecklist, links, citiesIndex, proof, faq | 410 | 44 | 4 | 1 | 2 | 0 | 0 | 5 |
| /therapist-seo/nova-scotia/cape-breton | city | directAnswer, intro, localInsight, localChecklist, links, proof, faq | 471 | 44 | 2 | 0 | 1 | 1 | 0 | 6 |
| /therapist-seo/nova-scotia/halifax | city | directAnswer, intro, localInsight, localChecklist, links, proof, faq | 440 | 44 | 2 | 0 | 1 | 1 | 0 | 6 |
| /therapist-seo/ontario | province | directAnswer, intro, localInsight, localChecklist, links, citiesIndex, proof, faq | 468 | 47 | 7 | 1 | 5 | 0 | 0 | 5 |
| /therapist-seo/ontario/brampton | city | directAnswer, intro, localInsight, localChecklist, links, proof, faq | 401 | 47 | 5 | 0 | 4 | 1 | 0 | 6 |
| /therapist-seo/ontario/hamilton | city | directAnswer, intro, localInsight, localChecklist, links, proof, faq | 407 | 47 | 5 | 0 | 4 | 1 | 0 | 6 |
| /therapist-seo/ontario/mississauga | city | directAnswer, intro, localInsight, localChecklist, links, proof, faq | 413 | 47 | 5 | 0 | 4 | 1 | 0 | 6 |
| /therapist-seo/ontario/ottawa | city | directAnswer, intro, localInsight, localChecklist, links, proof, faq | 420 | 47 | 5 | 0 | 4 | 1 | 0 | 6 |
| /therapist-seo/ontario/toronto | city | directAnswer, intro, localInsight, localChecklist, links, proof, faq | 447 | 47 | 5 | 0 | 4 | 1 | 0 | 6 |
| /therapist-seo/prince-edward-island | province | directAnswer, intro, localInsight, localChecklist, links, citiesIndex, proof, faq | 401 | 43 | 3 | 1 | 1 | 0 | 0 | 5 |
| /therapist-seo/prince-edward-island/charlottetown | city | directAnswer, intro, localInsight, localChecklist, links, proof, faq | 434 | 43 | 1 | 0 | 0 | 1 | 0 | 6 |
| /therapist-seo/quebec | province | directAnswer, intro, localInsight, localChecklist, links, citiesIndex, proof, faq | 429 | 47 | 7 | 1 | 5 | 0 | 0 | 5 |
| /therapist-seo/quebec/gatineau | city | directAnswer, intro, localInsight, localChecklist, links, proof, faq | 484 | 47 | 5 | 0 | 4 | 1 | 0 | 6 |
| /therapist-seo/quebec/laval | city | directAnswer, intro, localInsight, localChecklist, links, proof, faq | 459 | 47 | 5 | 0 | 4 | 1 | 0 | 6 |
| /therapist-seo/quebec/longueuil | city | directAnswer, intro, localInsight, localChecklist, links, proof, faq | 447 | 47 | 5 | 0 | 4 | 1 | 0 | 6 |
| /therapist-seo/quebec/montreal | city | directAnswer, intro, localInsight, localChecklist, links, proof, faq | 507 | 47 | 5 | 0 | 4 | 1 | 0 | 6 |
| /therapist-seo/quebec/quebec-city | city | directAnswer, intro, localInsight, localChecklist, links, proof, faq | 461 | 47 | 5 | 0 | 4 | 1 | 0 | 6 |
| /therapist-seo/saskatchewan | province | directAnswer, intro, localInsight, localChecklist, links, citiesIndex, proof, faq | 404 | 44 | 4 | 1 | 2 | 0 | 0 | 5 |
| /therapist-seo/saskatchewan/regina | city | directAnswer, intro, localInsight, localChecklist, links, proof, faq | 442 | 44 | 2 | 0 | 1 | 1 | 0 | 6 |
| /therapist-seo/saskatchewan/saskatoon | city | directAnswer, intro, localInsight, localChecklist, links, proof, faq | 473 | 44 | 2 | 0 | 1 | 1 | 0 | 6 |
| /therapist-seo/usa | country | directAnswer, intro, localInsight, localChecklist, links, proof, faq | 409 | 52 | 0 | 2 | 0 | 10 | 0 | 6 |

## Service pages

- **Published services: 21** (2 existing + 19 new).
- **Draft services: 0** — none.
- **Gate-failed services: 0** — none.
- **Direct answer** target is 40–60 words; **summary** 140–155 chars; **title** ≤ 65 chars; **unique prose** ≥ 500 words.

| Page | Group | Status | Unique prose | Direct answer (words) | FAQs | Summary len | Title len | Service links | Industry links | Schema types |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| /ai-search | seo | published | 834 | 59 | 6 | 150 | 47 | 5 | 1 | Organization/ProfessionalService/LocalBusiness | BreadcrumbList | Service | FAQPage |
| /digital-marketing | digital-marketing | published | 784 | 55 | 6 | 148 | 43 | 4 | 0 | Organization/ProfessionalService/LocalBusiness | BreadcrumbList | Service | FAQPage |
| /digital-marketing/conversion-rate-optimization | digital-marketing | published | 829 | 60 | 6 | 145 | 54 | 5 | 0 | Organization/ProfessionalService/LocalBusiness | BreadcrumbList | Service | FAQPage |
| /ecommerce-marketing | ecommerce-marketing | published | 741 | 54 | 6 | 146 | 45 | 4 | 0 | Organization/ProfessionalService/LocalBusiness | BreadcrumbList | Service | FAQPage |
| /ecommerce-marketing/ecommerce-optimization | ecommerce-marketing | published | 692 | 54 | 6 | 154 | 48 | 5 | 0 | Organization/ProfessionalService/LocalBusiness | BreadcrumbList | Service | FAQPage |
| /ecommerce-marketing/ecommerce-ppc | ecommerce-marketing | published | 725 | 55 | 6 | 145 | 39 | 5 | 0 | Organization/ProfessionalService/LocalBusiness | BreadcrumbList | Service | FAQPage |
| /ecommerce-marketing/ecommerce-seo | ecommerce-marketing | published | 723 | 53 | 6 | 141 | 39 | 5 | 0 | Organization/ProfessionalService/LocalBusiness | BreadcrumbList | Service | FAQPage |
| /ecommerce-marketing/shopify-seo | ecommerce-marketing | published | 700 | 56 | 6 | 142 | 37 | 5 | 0 | Organization/ProfessionalService/LocalBusiness | BreadcrumbList | Service | FAQPage |
| /reputation-management | reputation | published | 738 | 57 | 6 | 147 | 47 | 4 | 1 | Organization/ProfessionalService/LocalBusiness | BreadcrumbList | Service | FAQPage |
| /reputation-management/online-reputation-repair | reputation | published | 750 | 58 | 6 | 155 | 50 | 5 | 0 | Organization/ProfessionalService/LocalBusiness | BreadcrumbList | Service | FAQPage |
| /seo | seo | existing | 0 | 0 | 0 | 154 | 52 | 4 | 0 | Organization/ProfessionalService/LocalBusiness | BreadcrumbList | CollectionPage |
| /seo/content-writing | seo | published | 872 | 57 | 6 | 149 | 41 | 5 | 1 | Organization/ProfessionalService/LocalBusiness | BreadcrumbList | Service | FAQPage |
| /seo/franchise-seo | seo | published | 784 | 55 | 6 | 154 | 39 | 5 | 0 | Organization/ProfessionalService/LocalBusiness | BreadcrumbList | Service | FAQPage |
| /seo/link-building | seo | published | 782 | 54 | 6 | 143 | 39 | 5 | 0 | Organization/ProfessionalService/LocalBusiness | BreadcrumbList | Service | FAQPage |
| /seo/local-seo | seo | published | 878 | 60 | 6 | 154 | 35 | 5 | 1 | Organization/ProfessionalService/LocalBusiness | BreadcrumbList | Service | FAQPage |
| /seo/technical-seo | seo | published | 843 | 56 | 6 | 142 | 39 | 5 | 0 | Organization/ProfessionalService/LocalBusiness | BreadcrumbList | Service | FAQPage |
| /seo/white-label | seo | published | 795 | 54 | 6 | 150 | 46 | 5 | 0 | Organization/ProfessionalService/LocalBusiness | BreadcrumbList | Service | FAQPage |
| /web-design | web-design | existing | 0 | 0 | 0 | 155 | 36 | 3 | 0 | Organization/ProfessionalService/LocalBusiness | BreadcrumbList | WebPage |
| /web-design/ecommerce-web-design | web-design | published | 782 | 53 | 6 | 146 | 46 | 5 | 0 | Organization/ProfessionalService/LocalBusiness | BreadcrumbList | Service | FAQPage |
| /web-design/shopify-web-design | web-design | published | 748 | 57 | 6 | 141 | 44 | 5 | 0 | Organization/ProfessionalService/LocalBusiness | BreadcrumbList | Service | FAQPage |
| /web-design/website-hosting | web-design | published | 748 | 57 | 6 | 147 | 41 | 5 | 0 | Organization/ProfessionalService/LocalBusiness | BreadcrumbList | Service | FAQPage |

## Solutions nav links

Every internal page link on the rendered homepage (header nav, Solutions mega menu, footer, body) was checked against the built route set plus the src/pages tree for dynamic routes. Asset links (`/_next/`, fonts, stylesheets, images) are ignored.
- Internal page links on `/`: **44**.
- Links pointing at a route that does not exist: **0**.

## Schema validation

- Pages checked: **172**.
- Pages with JSON-LD: **95**.
- Pages with unparseable JSON-LD: **0**.
- Full per-type checks run by `scripts/validate-schema.js` (duplicate/unresolved `@id`, required properties, forbidden Review/AggregateRating, required types per URL) — see the `yarn build` / `yarn verify:seo` output; currently 0 failures.

## Flags

| Page | Issue |
| --- | --- |
| /posts/how-can-i-generate-website-traffic-with-0-marketing-budget | duplicate redirect source in next.config.js (harmless, worth cleaning up) |

## Sibling similarity

- Vertical cluster nearest pair: **0.111** (/therapist-seo/saskatchewan/regina vs /therapist-seo/saskatchewan/saskatoon) — gate caps at 0.35.
- Service pages nearest same-group pair: **0.004** (/reputation-management vs /reputation-management/online-reputation-repair) — gate caps at 0.30.

## Provinces by published city pages

| Province | Seeded cities | Published city pages |
| --- | --- | --- |
| Ontario | 5 | 5 |
| Quebec | 5 | 5 |
| British Columbia | 5 | 5 |
| Alberta | 5 | 5 |
| Saskatchewan | 5 | 2 |
| Manitoba | 5 | 1 |
| Nova Scotia | 5 | 2 |
| New Brunswick | 5 | 3 |
| Newfoundland and Labrador | 5 | 1 |
| Prince Edward Island | 5 | 1 |

## Redirects now active

### Legacy therapist pages → new vertical pages (40)

| Source | Destination |
| --- | --- |
| /seo/for-therapists-canada | /therapist-seo |
| /seo/for-therapists-usa | /therapist-seo/usa |
| /seo/for-therapists-ontario | /therapist-seo/ontario |
| /seo/for-therapists-quebec | /therapist-seo/quebec |
| /seo/for-therapists-british-columbia | /therapist-seo/british-columbia |
| /seo/for-therapists-alberta | /therapist-seo/alberta |
| /seo/for-therapists-saskatchewan | /therapist-seo/saskatchewan |
| /seo/for-therapists-manitoba | /therapist-seo/manitoba |
| /seo/for-therapists-nova-scotia | /therapist-seo/nova-scotia |
| /seo/for-therapists-new-brunswick | /therapist-seo/new-brunswick |
| /seo/for-therapists-newfoundland-labrador | /therapist-seo/newfoundland-and-labrador |
| /seo/for-therapists-toronto | /therapist-seo/ontario/toronto |
| /seo/for-therapists-ottawa | /therapist-seo/ontario/ottawa |
| /seo/for-therapists-mississauga | /therapist-seo/ontario/mississauga |
| /seo/for-therapists-brampton | /therapist-seo/ontario/brampton |
| /seo/for-therapists-hamilton | /therapist-seo/ontario/hamilton |
| /seo/for-therapists-montreal | /therapist-seo/quebec/montreal |
| /seo/for-therapists-quebec-city | /therapist-seo/quebec/quebec-city |
| /seo/for-therapists-laval | /therapist-seo/quebec/laval |
| /seo/for-therapists-gatineau | /therapist-seo/quebec/gatineau |
| /seo/for-therapists-longueuil | /therapist-seo/quebec/longueuil |
| /seo/for-therapists-vancouver | /therapist-seo/british-columbia/vancouver |
| /seo/for-therapists-surrey | /therapist-seo/british-columbia/surrey |
| /seo/for-therapists-burnaby | /therapist-seo/british-columbia/burnaby |
| /seo/for-therapists-richmond | /therapist-seo/british-columbia/richmond |
| /seo/for-therapists-abbotsford | /therapist-seo/british-columbia/abbotsford |
| /seo/for-therapists-calgary | /therapist-seo/alberta/calgary |
| /seo/for-therapists-edmonton | /therapist-seo/alberta/edmonton |
| /seo/for-therapists-red-deer | /therapist-seo/alberta/red-deer |
| /seo/for-therapists-lethbridge | /therapist-seo/alberta/lethbridge |
| /seo/for-therapists-airdrie | /therapist-seo/alberta/airdrie |
| /seo/for-therapists-saskatoon | /therapist-seo/saskatchewan/saskatoon |
| /seo/for-therapists-regina | /therapist-seo/saskatchewan/regina |
| /seo/for-therapists-winnipeg | /therapist-seo/manitoba/winnipeg |
| /seo/for-therapists-halifax | /therapist-seo/nova-scotia/halifax |
| /seo/for-therapists-cape-breton | /therapist-seo/nova-scotia/cape-breton |
| /seo/for-therapists-moncton | /therapist-seo/new-brunswick/moncton |
| /seo/for-therapists-saint-john | /therapist-seo/new-brunswick/saint-john |
| /seo/for-therapists-fredericton | /therapist-seo/new-brunswick/fredericton |
| /seo/for-therapists-st-johns | /therapist-seo/newfoundland-and-labrador/st-johns |

### Other permanent redirects (57)

| Source | Destination |
| --- | --- |
| /beamsville-web-design | /web-design |
| /crystal-beach-web-design | /web-design |
| /fonthill-web-design | /web-design |
| /fort-erie-web-design | /web-design |
| /grimsby-web-design | /web-design |
| /port-colborne-web-design | /web-design |
| /thorold-web-design | /web-design |
| /web-design-welland | /web-design |
| /seo/niagara | / |
| /pricing | /get-a-quote |
| /reviews | /get-a-quote |
| /digital-marketing-agency-niagara | / |
| /digital-marketing-agency-st-catharines | / |
| /posts/best-practices-cta-buttons | /posts/3-best-practices-for-high-converting-cta-buttons |
| /posts/3-things-your-website-needs-to-bring-in-more-revenue | /posts/3-things-website-needs-to-bring-in-revenue/ |
| /posts/10-best-seo-strategies-2021/ | /posts/10-of-the-best-seo-strategies-for-2021 |
| /posts/10-tips-how-to-create-effective-landing-page/ | /posts/10-tips-on-how-to-create-an-effective-landing-page |
| /posts/best-strategies-rank-higher-google-maps-pack/ | /posts/best-strategies-techniques-to-rank-higher-in-google-maps-pack |
| /posts/web-design-for-small-businesses/ | /posts/crafting-a-powerful-online-presence-web-design-tips-for-small-businesses |
| /posts/visual-heirarchy-web-design/ | /posts/creating-visual-hierarchy-in-web-design-guiding-users-with-design-principles |
| /posts/web-design-trends | /posts/exploring-the-top-web-design-trends-of-2023-a-visual-revolution |
| /posts/how-to-make-website-AODA-compliant/ | /posts/how-do-i-make-my-website-aoda-wcag-accessibility-compliant |
| /posts/boost-business-sales-web-design/ | /posts/how-do-we-boost-our-business-sales-with-web-design |
| /posts/how-to-create-effective-website-layout/ | /posts/how-to-create-an-effective-website-layout-for-better-user-experience |
| /posts/make-website-load-faster-pictures/ | /posts/how-to-make-a-website-load-faster-with-pictures |
| /posts/mastering-local-seo/ | /posts/mastering-local-seo-7-strategies-to-boost-your-local-business |
| /posts/web-performance-optimization/ | /posts/maximizing-user-experience-the-art-of-web-performance-optimization |
| /posts/new-website-tree-reports/ | /posts/new-website-launched-treereports |
| /posts/on-page-seo-best-practices/ | /posts/on-page-seo-best-practices-optimizing-your-website-for-search-engines |
| /posts/web-design-process/ | /posts/our-8-step-web-design-process-for-2019 |
| /posts/seo-vs-ppc | /posts/seo-vs-ppc-which-should-you-use |
| /posts/website-sales-speed-engagement | /posts/the-crucial-link-between-website-speed-sales-and-customer-engagement |
| /posts/white-space-web-design | /posts/the-importance-of-white-space-in-web-design |
| /posts/power-of-backlinks/ | /posts/the-power-of-backlinks-building-a-strong-link-profile |
| /posts/power-of-video-seo/ | /posts/unlocking-the-power-of-video-seo-boost-your-visibility-and-engagement |
| /posts/seo-in-web-design/ | /posts/unveiling-the-importance-of-seo-in-web-design |
| /posts/seo-steps-new-website/ | /posts/what-are-the-steps-involved-for-doing-seo-for-a-new-website |
| /posts/drive-visitors-to-new-website/ | /posts/what-is-the-best-method-to-drive-visitors-to-a-new-website |
| /Dundas-web-design | / |
| /ecommerce-web-design-St. Catharines | / |
| /ecommerce-web-design-st-catharines | / |
| /wordpress-developer-St. Catharines | / |
| /wordpress-developer-st-catharines | / |
| /posts/how-can-i-generate-website-traffic-with-0-marketing-budget | / |
| /posts/how-to-build-a-website-with-good-seo-in-mind/ | / |
| /posts/best-seo-keywords-for-interior-designers/ | / |
| /5-effective-seo-techniques-for-landscaping-companies/ | / |
| /beamsville | /seo/beamsville |
| /beamsville-seo-digital-marketing | /seo/beamsville |
| /fonthill | /seo/fonthill |
| /fort-erie | /seo/fort-erie |
| /grimsby | /seo/grimsby |
| /niagara-on-the-lake | /seo/niagara-on-the-lake |
| /niagara-falls | / |
| /port-colborne | /seo/port-colborne |
| /thorold | /seo/thorold |
| /welland | /seo/welland |

## Legacy pages still live

**6** legacy `/seo/for-therapists-*` pages are still live and indexable (no active redirect because their replacement is not published). They remain crawlable via the "More cities" block.

| Legacy page | Kind | Region |
| --- | --- | --- |
| /seo/for-therapists-albany | usa-city | usa |
| /seo/for-therapists-buffalo | usa-city | usa |
| /seo/for-therapists-huntington | usa-city | usa |
| /seo/for-therapists-new-york | usa-city | usa |
| /seo/for-therapists-rochester | usa-city | usa |
| /seo/for-therapists-syracuse | usa-city | usa |

## Open questions the owner must supply

# Service pages — open questions (missing facts)

Every field in `data/services/service-facts.json` is currently **null**. Per the "never
fabricate facts" rule, no service page states any of these things until they are confirmed.
Each entry below lists the fact, why it matters, and which pages/blocks need it. Fill in the
value in `service-facts.json` and the fact can be woven into the listed pages.

Status key: **open** = awaiting answer, **not-applicable** = intentionally unused.

| Fact (`service-facts.json` key) | Status | Why it matters | Pages/blocks that need it |
| --- | --- | --- | --- |
| `pricingModel` | open | Customers ask how pricing works (retainer, project, hourly, from-$). Pages avoid all price claims until confirmed. | All 19 new service pages; `/services` hub; FAQ answers about cost |
| `packages` | open | Whether defined tiers exist and what they include. | `/seo`, `/web-design`, child service pages, `/services` hub |
| `toolsAndPlatforms` | open | Naming the tools/platforms we actually use (avoid implying partner status). | `/seo/technical-seo`, `/seo/link-building`, `/seo/content-writing`, `/ai-search`, `/digital-marketing`, `/ecommerce-marketing`, `/web-design` |
| `hostingProvider` | open | `/web-design/website-hosting` must not name a provider it cannot confirm. | `/web-design/website-hosting` |
| `uptimeGuarantee` | open | Cannot state or imply a guaranteed uptime figure. | `/web-design/website-hosting` |
| `backupTerms` | open | Cannot promise backup frequency or retention. | `/web-design/website-hosting` |
| `securityMonitoring` | open | Cannot claim specific security monitoring/scanning. | `/web-design/website-hosting`, `/seo/technical-seo` |
| `maintenanceTerms` | open | What ongoing maintenance includes and how often. | `/web-design/website-hosting` |
| `supportTerms` | open | Support hours, channels, and response window. | `/web-design/website-hosting`, `/seo/white-label` |
| `sla` | open | Agency/white-label partners ask about service levels. | `/seo/white-label` |
| `turnaroundTimes` | open | White label and content/franchise delivery timelines. | `/seo/white-label`, `/seo/content-writing`, `/seo/franchise-seo` |
| `minimums` | open | Minimum contract length or spend. | All service pages' "Who it's for" / FAQ; `/services` hub |
| `guarantees` | open | Whether any guarantee is offered (currently we state none are made). | All pages, especially `/seo` and FAQ answers |
| `certifications` | open | Cannot list certifications unless held and verifiable. | `/seo`, `/ai-search`, `/digital-marketing`, `/ecommerce-marketing` |
| `partnerPrograms` | open | Do not claim Clutch/HubSpot/Google Ads/Shopify partner status unless true. | `/seo`, `/web-design`, `/ecommerce-marketing`, `/seo/white-label` |
| `geographicLimits` | open | Whether service is limited to Niagara/Canada or remote-anywhere. | All pages' "Who it's for"; `/services` hub |

## How to use this file

1. Get a confirmation for a field from the client.
2. Set the value in `data/services/service-facts.json` (keep the JSON shape; replace `null`).
3. Update the specific pages/blocks listed above to include the now-confirmed fact.
4. Remove the row here (or move it to a "resolved" log) once the fact is live.
