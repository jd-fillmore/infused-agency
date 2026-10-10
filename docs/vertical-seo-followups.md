# FOLLOW-UP SPEC: fixes, legacy handling, audit, city batches, service pages, and Solutions mega menu

Read this together with `docs/vertical-seo-build-spec.md` and `docs/vertical-seo-build.md`. The original spec's rules (no thin pages, no fabricated facts, quality gate, URL scheme, no new dependencies, yarn) all still apply and take priority wherever this file is silent.

Execute the phases below IN ORDER. Make a separate commit for each phase, with a clear commit message. Run `yarn verify:seo`, `yarn test:seo`, `yarn lint` and `yarn build` at the end of every phase and fix failures before moving on. Do not stop to ask questions; record any assumption in `docs/vertical-seo-build.md` and keep going. Maintain a checklist of these phases in that file and tick them off as you go.

---

## Phase 1: Visual bugs (no copy changes)

Reuse the site's existing styles and components where possible. Verify at 375px, 768px and 1280px widths. Do not change any copy.

1. **Breadcrumbs** render as a vertical bulleted list. Make them a single horizontal row with "›" separators, small text, wrapping gracefully on mobile, with the current page shown as text, not a link. Keep the BreadcrumbList JSON-LD unchanged. If the site already has a breadcrumb component, use or adapt it rather than writing a new one.
2. **Hero section is cut off** on the vertical SEO pages (pillar, province, city, usa). Find the cause (likely a fixed or sticky header overlapping the hero, a fixed height or `overflow: hidden`, `100vh` sizing, or text colour matching the background). Fix it so the H1, the direct-answer paragraph and the CTA are fully visible at all three widths on every template. Check every template, not just one.
   Report what the root causes were in `docs/vertical-seo-build.md`.

---

## Phase 2: Legacy pages, seed city lists, counts

1. **Orphan prevention.** For every legacy `/seo/for-therapists-*` page that is still live (not redirected), add a "More cities" link block to the matching new province page (use the pillar for US cities). Render the block only while the legacy page is live and not redirected, so a city disappears from it automatically when its redirect activates. Plain, descriptive anchor text, no exact-match stuffing. Add a `verify:seo` check that fails if a live legacy page has no crawlable internal link pointing to it from a published page.
2. **Seed city lists.** Update the city data so it matches the cities that already have legacy pages. Keep `verified: false` on every city and flag that population rankings need checking against the 2021 Census.
   - Alberta: Calgary, Edmonton, Red Deer, Lethbridge, Airdrie (replaces St. Albert)
   - Nova Scotia: Halifax, Cape Breton (replaces Sydney), Truro, New Glasgow, Kentville
   - Other provinces unchanged
     Update the data model and any tests that referenced the old cities.
3. **Reconcile the legacy page count.** `docs/legacy-redirect-map.md` says 45 legacy pages, but 16 active redirects plus 30 live pages is 46. Work out the true number and correct the doc.
   US legacy pages (buffalo, albany, new-york, rochester, syracuse, huntington) stay live, untouched and out of scope.

---

## Phase 3: Baseline audit (document only, no new features)

Audit all published vertical SEO pages and write `docs/page-audit.md`. For each page list: URL, sections rendered, unique word count, internal links in and out, and for province pages how many city pages are linked. Flag:

- every province page with zero city links
- every orphan page (including live legacy pages)
- any page with mostly empty sections
- any claim about regulators, advertising rules or statistics that isn't sourced from a data file
- any pair of sibling pages with similarity above 0.30
  Do not add placeholder text such as "cities coming soon". Propose fixes in the doc but do not implement anything beyond Phases 1 and 2.

---

## Phases 4 and 5: City content batches

Write and publish city pages under `/therapist-seo/{province}/{city}` using the spec's city template, data files and quality gate.

**Batch A (Phase 4):**

- Quebec: `montreal`, `quebec-city`, `laval`, `gatineau`, `longueuil`
- British Columbia: `vancouver`, `surrey`, `burnaby`, `richmond`, `abbotsford`
- Alberta: `calgary`, `edmonton`, `red-deer`, `lethbridge`, `airdrie`
  **Batch B (Phase 5):**
- Saskatchewan: `saskatoon`, `regina`
- Manitoba: `winnipeg`
- Nova Scotia: `halifax`, `cape-breton`
- New Brunswick: `moncton`, `saint-john`, `fredericton`
- Newfoundland and Labrador: `st-johns`
  The other seeded cities (for example Winkler, Truro, Charlottetown) have no legacy page and low demand; leave them as drafts.

Rules for every city page:

- **Base copy.** Each city already has a legacy page at `/seo/for-therapists-{city}`. Use its existing copy as the base, then extend it. The result must be genuinely unique to that city, not a template with the city name swapped. Write as a specialist: how therapy clients in that city actually search and choose a practice, local competition and directory dynamics, neighbourhood and service-area specifics, and trust signals.
- **No invention.** Fill `neighbourhoods`, `majorIndustries` and `localInsight` only with things you can state confidently. Use `null` for anything uncertain. Do not invent statistics, regulator rules or advertising rules.
- **Quebec.** Quebec cities must include the French-language website note (Charter of the French Language / Bill 96). Do not build French pages.
- **Reviewed vs draft.** Set `status: reviewed` only if the page passes the gate honestly. If a page cannot reach the unique-word and unique-field thresholds without padding or inventing facts, leave it `draft` and list it with the reason.
- **Redirects.** Add each published city to `LEGACY_REDIRECT_MAP` so its legacy URL 301s once the page is published, and update `docs/legacy-redirect-map.md`. No redirect chains; destinations must be published pages.
- **Linking.** Confirm each province page now links to its published cities, and that the "More cities" block (Phase 2) drops those cities automatically.
- **Sibling comparison.** For each batch, report nearest-duplicate similarity scores between sibling cities in the same province and the same city across provinces with similar names. If any pair scores above 0.30, rewrite the weaker page before publishing.
  At the end of each batch, run all four checks and report: published count, draft count, gate-failed count, new redirects activated.

---

## Phase 6: Service pages (data-driven)

Infused Agency offers all of the services below, so each needs its own page. Two already exist (`/seo` and `/web-design`); leave their copy as is, and add only a block linking to their child services. Build the other 19. This also feeds Google AI Overviews and LLM citation, so each page is written for answer extraction (see template).

### URL map (one URL per service, lowercase kebab-case, no trailing slash)

| Service                            | URL                                               | Status                                              |
| ---------------------------------- | ------------------------------------------------- | --------------------------------------------------- |
| Services hub (top-nav "Solutions") | `/services`                                       | existing; make data-driven grid, keep existing copy |
| Search Engine Optimization         | `/seo`                                            | existing; links only                                |
| Local SEO                          | `/seo/local-seo`                                  | new                                                 |
| Technical SEO                      | `/seo/technical-seo`                              | new                                                 |
| Link Building                      | `/seo/link-building`                              | new                                                 |
| Content Writing                    | `/seo/content-writing`                            | new                                                 |
| White Label Services               | `/seo/white-label`                                | new                                                 |
| Franchise SEO                      | `/seo/franchise-seo`                              | new                                                 |
| AI Search (GEO, AEO, LLM SEO)      | `/ai-search`                                      | new; single page, see note                          |
| Digital Marketing                  | `/digital-marketing`                              | new pillar                                          |
| Conversion Rate Optimization (CRO) | `/digital-marketing/conversion-rate-optimization` | new                                                 |
| Web Design                         | `/web-design`                                     | existing; links only                                |
| eCommerce Web Design               | `/web-design/ecommerce-web-design`                | new                                                 |
| Shopify Web Design                 | `/web-design/shopify-web-design`                  | new                                                 |
| Website Hosting                    | `/web-design/website-hosting`                     | new                                                 |
| eCommerce Marketing                | `/ecommerce-marketing`                            | new pillar                                          |
| eCommerce Optimization             | `/ecommerce-marketing/ecommerce-optimization`     | new                                                 |
| eCommerce SEO                      | `/ecommerce-marketing/ecommerce-seo`              | new                                                 |
| eCommerce PPC                      | `/ecommerce-marketing/ecommerce-ppc`              | new                                                 |
| Shopify SEO                        | `/ecommerce-marketing/shopify-seo`                | new                                                 |
| Reputation Management              | `/reputation-management`                          | new pillar                                          |
| Online Reputation Repair           | `/reputation-management/online-reputation-repair` | new                                                 |

Notes:

- **AI Search** is one page, not four. GEO, AEO and LLM SEO describe the same service. Name each term once in a short "also known as" definition, explain how they overlap, and do not stuff. Title leads with "AI Search".
- Discovery first: list existing routes under `/seo/*`, `/web-design/*` and the root, and confirm none collide with these slugs (including the dynamic `/seo/{niagara-city}` pages and the legacy `/seo/for-therapists-*` files). Slug integrity from the original spec applies: unique, lowercase, no collisions. If an existing page already covers one of these services, extend it instead of creating a duplicate and note it in `docs/vertical-seo-build.md`.
- One URL per service; never reachable at two paths.

### Data model

Create `data/services/services.json` (the single source of truth for pages, nav, hub grid, sitemap and internal links): `slug`, `url`, `name`, `shortName`, `group` (`seo` | `web-design` | `ecommerce-marketing` | `digital-marketing` | `reputation`), `parentUrl`, `status` (`draft` | `reviewed`), `updated` (ISO date), `titleOverride`, `summary` (140 to 155 chars, unique), `relatedServices[]`, `relevantVerticals[]`, `proofRefs[]`.

Create `data/services/service-facts.json` for things only the owner knows. Every field is nullable and defaults to null: pricing or pricing model, packages/tiers, tools and platforms, hosting provider, uptime or support terms, turnaround times, minimums, guarantees, certifications, partner programs (for example a Shopify partnership), geographic limits. **Pages may only state a fact from this file or from the current live site.** If a fact is null, omit the statement. Write every null you needed to `docs/service-pages-open-questions.md` so the owner can fill them in.

Content per page lives in `content/services/{slug}.json` (`directAnswer`, `intro`, `sections[]`, `process[]`, `faqs[]`, and so on), same pattern as the vertical content files.

### Page template

H1 → direct answer (40 to 60 words, self-contained, quotable) → what it is (plain definition) → who it's for → what we do (concrete process steps) → what you get (deliverables) → how we measure results → proof (real items from `proof.json`, only where relevant) → related services → industries (link to live vertical pillars such as `/therapist-seo` where relevant) → FAQs (at least 6, service-specific) → CTA to `/get-a-quote`.

Rules:

- Write as a specialist: specific to how the service actually works and what changes for the client. No padding, no generic agency language.
- Honesty limits for this category: no guaranteed rankings, traffic or revenue figures; no invented case studies or statistics. **Reputation Management and Online Reputation Repair:** never promise to remove reviews or search results; describe legitimate approaches only (responding, generating new reviews within platform policies, policy-based removal requests where valid, suppression through better content). **Website Hosting:** do not claim uptime guarantees, backups, security monitoring, maintenance, SLAs or support terms unless they are in `service-facts.json`. **White Label and Franchise SEO:** describe the working model without inventing minimums, pricing or partner counts. **Shopify pages:** do not claim a Shopify partner status unless it's in the facts file.
- Titles come from `titleOverride` or this pattern: `{Service Name} Services | Infused Agency`; Niagara/St. Catharines mention only where it's natural. Meta description = `summary`.
- JSON-LD: `BreadcrumbList`, `Service` (provider = the existing Infused Agency entity; `serviceType`; `areaServed` = Niagara Region and Canada), and `FAQPage`. No AggregateRating or Review markup.
- Breadcrumbs use the fixed horizontal component from Phase 1: Home › Solutions › {Group} › {Service}.

### Quality gate for service pages

Reuse the gate engine with service thresholds: `status === 'reviewed'`, unique prose of 500+ words, direct answer present, 6+ FAQs, summary 140 to 155 chars, 5-word-shingle similarity of unique prose at most 0.30 against every sibling service page, all internal links resolve. Failing pages are not built in production and are listed in the report with the reason. Extend `verify:seo` and `test:seo` to cover services.

### Writing order

- **Batch 6A (9 pages):** `/ai-search`, `/seo/local-seo`, `/seo/technical-seo`, `/seo/link-building`, `/seo/content-writing`, `/seo/white-label`, `/seo/franchise-seo`, `/digital-marketing`, `/digital-marketing/conversion-rate-optimization`
- **Batch 6B (10 pages):** `/web-design/ecommerce-web-design`, `/web-design/shopify-web-design`, `/web-design/website-hosting`, `/ecommerce-marketing`, `/ecommerce-marketing/ecommerce-optimization`, `/ecommerce-marketing/ecommerce-seo`, `/ecommerce-marketing/ecommerce-ppc`, `/ecommerce-marketing/shopify-seo`, `/reputation-management`, `/reputation-management/online-reputation-repair`
  Commit each batch separately.

### Wiring

- Add `sitemap-services.xml` to the sitemap index (published pages only, `lastmod` from each page's `updated`). Update the HTML `/sitemap` page.
- Add a "child services" block to `/seo` and `/web-design`, and make the `/services` hub a grid generated from `services.json`. Links only; do not edit the existing copy on those pages.
- Internal linking: every service page links to its parent, to 3 to 4 related services, and to relevant live vertical pillars. The live vertical pillars link back to the relevant services (for `/therapist-seo`: Local SEO, Content Writing, Reputation Management, AI Search). No page links to unpublished pages.
- Optional: list the service pillars in `/llms.txt` if one is added.

---

## Phase 7: "Solutions" mega menu

Make **Solutions** in the top navigation a hover dropdown containing one mega menu with every service. Build it from `data/services/services.json` so adding a service updates the menu automatically. Only published services appear.

Layout (desktop):

- **SEO:** SEO, Local SEO, Technical SEO, Link Building, Content Writing, AI Search, White Label Services, Franchise SEO
- **Web Design:** Web Design, eCommerce Web Design, Shopify Web Design, Website Hosting
- **eCommerce Marketing:** eCommerce Marketing, eCommerce Optimization, eCommerce SEO, eCommerce PPC, Shopify SEO
- **Digital Marketing and Reputation:** Digital Marketing, Conversion Rate Optimization, Reputation Management, Online Reputation Repair
- **SEO by industry** (generated from live vertical pillars only; currently Therapist SEO)
  Behaviour and accessibility:
- Opens on hover with a short open and close delay so it doesn't flicker or close when the pointer moves diagonally. Also opens on keyboard focus, closes on Escape and when focus leaves.
- The "Solutions" label itself remains a link to `/services`. The trigger has `aria-haspopup`/`aria-expanded` and the panel is reachable by Tab.
- Every item is a real crawlable `<a href>`, not a button or JS-only navigation. Group headings may link to their pillar.
- Touch devices and the mobile menu: no hover. Use the existing mobile menu pattern with "Solutions" as an accordion containing the same groups, and tap-to-open on touch-capable desktop widths.
- Match the site's existing design (colours, type, spacing, shadows) and existing nav component and styles. Add no new dependencies.
- The panel must layer above page content including heroes (check z-index and that no `overflow: hidden` clips it), cause no layout shift, and be fully visible at 1024px, 1280px and 1440px wide. Verify the Phase 1 hero fix still holds with the nav changes.
- Keep the other nav items (Work, About, Blog, Get A Quote) unchanged.
  Verify: the menu renders the same links in server-rendered HTML (view-source shows them); the mobile accordion works at 375px and 768px; keyboard-only navigation works; no console errors.

---

## Phase 8: Final audit and report

Re-run the Phase 3 audit (extended to cover service pages and the nav links) and overwrite `docs/page-audit.md`. Then write a final summary in `docs/vertical-seo-build.md` covering:

- what changed in each phase
- service pages published vs draft, and the contents of `docs/service-pages-open-questions.md` (facts the owner needs to supply)
- the list of pages published, the pages left as draft, and why
- which provinces still have zero or few city pages
- every redirect now active, and every legacy page still live
- the five highest-risk claims or pages that a human should review before merging (anything about regulators or advertising rules, any numbers, any page where the unique content was hard to reach)

---

## Out of scope for this file (do not build)

- Contractor or other trade verticals
- US state or city pages
- French-language pages
- Any change to the homepage or to existing pages beyond what Phases 2, 6 and 7 state (links on `/seo`, `/web-design` and `/services`, the nav, and sitemaps)
