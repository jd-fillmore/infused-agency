# REDESIGN SPEC: dark SaaS rebuild of infused.agency

Read this together with `docs/vertical-seo-build-spec.md`, `docs/vertical-seo-followups.md` and `docs/vertical-seo-build.md`. Their rules still apply: yarn, no new runtime dependencies (Tailwind CSS is the one approved addition, see rule 5), no thin pages, no fabricated facts, URL scheme unchanged, quality gate stays on. **Run this only after Phases 1 to 9 of the follow-up spec are complete**, because it restyles the nav, the vertical templates and the service templates those phases created.

Work on a new branch `feat/dark-saas-redesign`. One commit per phase. Run `yarn verify:seo`, `yarn test:seo`, `yarn lint` and `yarn build` at the end of every phase. Do not stop to ask questions; record assumptions in `docs/redesign-notes.md` and keep going.

---

## 0. Goal

Rebuild the visual design and homepage of infused.agency so it looks like a polished, dark-themed SaaS product site, with a homepage and an industries hub modelled on the structure of https://torontoseo.com/ and https://torontoseo.com/industries/. Content is written fresh from Infused Agency's own facts. The SEO value of the existing site must not regress.

---

## 1. Non-negotiable rules

1. **Reference, don't copy.** torontoseo.com is a structural and visual reference only. Never copy or closely paraphrase their text, FAQs, statistics, headings, images, icons, illustrations, CSS, markup or code. Do not hotlink anything. Match their section order and general design language; write everything else from scratch for Infused Agency. If a page of ours reads like theirs with a name swap, it's wrong.
2. **Do not replicate their claims.** The reference site claims things that are theirs and may not be true for Infused Agency: offices in 10 cities, "since 2014" / "twelve years", a number and rating of Google reviews, counts of builds, articles and tools, a Semrush snapshot, ROI and close-rate statistics, original research results, a live "audit requested" notification, an AI strategist chat widget, a French-language toggle. Do not build or imitate any of these unless Infused has the real thing. Every claim, number, rating, logo or testimonial on our pages must come from the current live site or from `data/site/site-facts.json` (section 2), including the owner-supplied facts listed there. If a section needs a fact we don't have, omit that element; never invent a placeholder.
3. **SEO must not regress.** Every existing URL, title, meta description, H1, canonical, JSON-LD block, redirect, sitemap entry and indexable body text is preserved unless this spec explicitly changes it. No content rendered client-side only. Headings stay in a logical order with one H1 per page. The regression check in Phase R0/R6 enforces this.
4. **Performance budget.** Server-rendered or statically generated. Targets on mobile: LCP under 2.5s, CLS under 0.1, no layout shift from fonts or the nav, no render-blocking third-party requests. Images through the existing image pipeline, with explicit dimensions. Respect `prefers-reduced-motion`.
5. **Dependencies: Tailwind CSS only.** The owner has asked for Tailwind CSS in this Next.js project, so adding it is approved and is the only permitted new dependency (as `devDependencies` via yarn: `tailwindcss` plus its PostCSS tooling for the version you choose). No runtime dependencies, no component libraries, no animation libraries, no icon packages (inline SVG). If a dev-only tool (screenshots, Lighthouse) is needed, run it via `npx` without saving it to `package.json`. Record the Tailwind decision and versions in `docs/redesign-notes.md`.
6. **Accessibility.** WCAG AA contrast on the dark theme, visible focus states, keyboard-operable nav, accordions and menus, semantic landmarks, alt text, `aria` attributes where needed.
7. Dark theme only. Set `color-scheme: dark` and a matching `theme-color`. No light mode toggle.
8. Do not change URLs, route structure, form endpoints or backend behaviour. Reuse the existing quote/contact form submission logic.

---

## 2. Facts file

Create `data/site/site-facts.json` for everything only the owner knows. Every field nullable, default null: real Google review count and rating (and the review link), client logos allowed to be shown, testimonials (reuse those already on the site), results figures (reuse the existing +550% Flat Rock Cellars and +670% Delta Energy Solutions results with their existing context), years in business, team size, response time, pricing model, contract terms (for example month-to-month), guarantees, address and hours (only what is already public on the site), social profiles.

**Owner-supplied facts (pre-fill these now):**

- `clientsHelped`: "50+". Infused Agency has helped over 50 clients with SEO.
- `resultsClaim`: those clients rank for hundreds of long-tail, high-buying-intent keywords and have seen an increase in leads.
  Use these prominently, in their own words: in the hero trust row (for example a "50+ clients" stat), the proof strip, the "Why Infused" section, a homepage FAQ ("How many clients have you helped?"), the final CTA, and as supporting copy on the industries hub. Suggested phrasing: "Over 50 clients helped, ranking for hundreds of long-tail, high-buying-intent keywords, with more leads to show for it." Do not strengthen the claim: no percentages, timeframes, revenue figures, "guaranteed", or "every client" wording beyond what's stated here; do not attribute these claims to specific named clients except where the existing site already does. Do not change the homepage title or meta description (they're covered by the SEO regression check).

Pages may only state what is in this file or already on the current live site. Pull what you can from the live site into the file during Phase R0. Write every missing fact you needed to `docs/redesign-open-questions.md`.

---

## 3. Phases

### Phase R0: Discovery and baseline (no visual changes)

1. Inspect the codebase: router, styling system, global CSS, component library, layout shell, existing nav (including the Solutions mega menu), footer, image handling, font loading, Node and Next.js versions, PostCSS/Tailwind configuration if any, and how pages are composed. Record in `docs/redesign-notes.md`.
2. **SEO baseline.** Build the site and crawl the built output for every published page. Save `docs/pre-redesign-baseline.json`: per URL, title, meta description, canonical, H1 text, H2 list, word count of main content, JSON-LD types, internal link count, robots meta. Write `scripts/seo-regression.js` that recomputes the same data and compares against the baseline. It fails on any change to title, meta description, canonical, robots, JSON-LD types or H1 for pages not listed in an explicit allowlist (`docs/redesign-allowlist.json`, which only the homepage H2s and the new `/industries` page may use), and warns when main-content word count drops more than 15%. Wire it into `yarn verify:seo`.
3. **Reference extraction.** Fetch https://torontoseo.com/ with `curl`. Read its HTML and linked CSS. Record in `docs/design-reference.md` only design facts: the heading and body font families (and weights/sizes if visible), the page background and surface colours, text and muted-text colours, border and radius values, shadow and glow styles, spacing rhythm, container width, button and card styles, and any gradient or grid-line background treatment. Also record the section order of their homepage and industries page (headings and component types only, no copy).
   - If the fonts are open-licence (for example Google Fonts), use the same families. If they are commercial or can't be identified, pick the closest open-licence Google Fonts and record why.
   - Their page background colour is `#0a0d14` (their `theme-color`). Use it or a very close dark navy as the page background.
   - Do not copy any of their CSS verbatim; re-derive tokens in our own files.
4. Extract Infused's current brand colour(s) from the logo and existing site. The accent colour of the new design must be derived from Infused's brand, not from the reference site, so the result doesn't look like a clone.

### Phase R1: Tailwind setup and design system

**Tailwind setup first.**

- Choose the version from what the repo supports: Tailwind v4 (with `@tailwindcss/postcss`) if the Node and Next.js versions allow it, otherwise Tailwind v3.4 with `postcss` and `autoprefixer`. Install with `yarn add -D`. Add the PostCSS config and a global stylesheet imported from the app entry (`_app.js` or the root layout), with content paths covering every directory that holds components or pages (including `src/pages`, `components/`, `src/components/` and `components/verticalSeo`), and `data/` if any class names appear there.
- Map the design tokens into the Tailwind theme (colours, fonts, radii, shadows, spacing, container widths, z-index) backed by CSS variables, so components use utilities such as `bg-surface` and `text-muted` rather than hard-coded values. Wire the font families through the framework's font variables.
- Use complete static class names only. Never build class names by string concatenation (Tailwind can't detect them); use lookup objects or `clsx`-style conditionals written by hand (no new package).
- Tailwind's preflight reset will change how existing unstyled elements look. Keep it enabled, and fix any legacy page that breaks as part of Phase R5. Don't leave two competing styling systems: when a component or page is converted, delete the CSS it no longer uses, but never delete global CSS still used by a page that hasn't been converted yet.
- Keep dark-only styling as the default (no `dark:` variants). Production CSS should stay lean: check the built stylesheet size and report it (target under about 50 KB gzipped).
- Prose and article styling for blog posts and long-form content: hand-written utilities or a small component, not `@tailwindcss/typography`.
- Commit the Tailwind setup separately before any visual work.
  **Then create the token and component layer:**

- **Tokens** (CSS variables): background, elevated surface, card, border (low-opacity white), text, muted text, accent (from Infused's brand), accent-glow, success, radius scale, spacing scale, shadow and glow styles, container widths, z-index scale.
- **Typography:** one display/heading family and one body family (max 2 families, 3 weights total), self-hosted or via the framework's font optimization (`next/font` if the Next version supports it; otherwise download woff2 files to `public/fonts` with `@font-face`, `font-display: swap`, Latin subset, preload the critical weight, size-adjust fallbacks to avoid layout shift). Fluid type scale with `clamp()`.
- **Components:** Section wrapper with eyebrow label, heading and subhead; primary and secondary buttons; badge/pill and chip; card (with subtle border, hover lift, optional accent glow); numbered service card; stat block; accordion (native `<details>`-based or accessible button pattern); form field styles; testimonial card; breadcrumb (keep the horizontal one from Phase 1); inline icon set as SVG components.
- **Atmosphere:** subtle radial gradient glows behind heroes, optional faint grid-line background, thin gradient borders on featured cards. Keep it tasteful and cheap to render (CSS only, no large images).
- Show everything on an internal style guide page at `/dev/styleguide` that is `noindex`, excluded from sitemaps, and disabled in production builds.

### Phase R2: Header, Solutions mega menu, footer

- Restyle the sticky header as a translucent dark bar with backdrop blur: logo, Solutions (mega menu), Industries, Work, Resources (blog), About, and a primary "Get a quote" button. Keep the existing links and the Phase 7 menu behaviour (hover, focus, Escape, mobile accordion, server-rendered links) and restyle it as a dark multi-column panel with group headings, short descriptions per link where we have them, and a featured card.
- Header and menu must never clip or overlap page content; the hero fix from Phase 1 must still hold.
- **Footer:** mega footer in columns: Services (by group), Industries (live verticals), Niagara cities (existing `/seo/{city}` pages), Company (About, Work, Blog, Contact), plus contact details (only what's already public), social links from the facts file, and legal links. If a Google reviews badge is warranted, show it only with the real rating and count from `site-facts.json`.

### Phase R3: Homepage rebuild

Keep the current H1 and primary keyword focus of the existing homepage (title and meta description unchanged). Rebuild the page in this section order. Each section's content comes from Infused's own facts and the existing site, written fresh.

1. **Hero:** eyebrow label (location and focus), H1 (existing), supporting paragraph, primary CTA, and a compact inline lead form that reuses the existing quote form logic (with a hidden honeypot field). Beneath it, a trust row with only real items: review rating and count, client results, verticals served, response time or contract terms if in the facts file. Subtle gradient background; a hero visual built in CSS/SVG only (for example a stylised search-results or rankings card), not stock imagery.
2. **Proof strip:** the real results and testimonials already on the site, presented as stat blocks and testimonial cards. Omit if fewer than two real items exist.
3. **"Where to start" cards:** four numbered cards (Local SEO, Technical SEO, Content, AI Search), each a short practical explanation ending in a link to the matching service page. Followed by a short list of buyer-guide links (only to pages that exist).
4. **Services grid:** numbered cards for the main services, linking to the service pages built in Phase 6, grouped as in the mega menu. Generated from `data/services/services.json`.
5. **"Choose your path":** three intent cards (for example a full SEO programme, local visibility, a new website) linking to the matching pages.
6. **How we work:** three or four concrete steps from our actual process (written from the facts file and service content; no video).
7. **SEO + web design together:** a feature section explaining why one team handling the build and the search strategy avoids lost rankings at launch, with three feature blocks. Only claim what Infused actually does; no invented migration statistics.
8. **Why Infused:** four differentiators from the facts file. If fewer than three real differentiators exist, merge this into section 6.
9. **Industries:** a short paragraph and chips for live verticals (generated from the vertical data, currently Therapist SEO) linking to `/industries` and to each pillar.
10. **Where we work:** a row of pills for the Niagara cities that have published `/seo/{city}` pages, plus a line that vertical programmes are available across Canadian provinces, linking to the live vertical pillars. Published pages only.
11. **FAQ:** accordion with real FAQs (reuse the existing homepage FAQs where present, extend with new ones written fresh). Render with `FAQPage` JSON-LD consistent with the visible text.
12. **Final CTA** with the form again.
    Do not add: Semrush or third-party analytics snapshots, offices lists, fake live notifications, a chat widget, a video block, free-tool showcases, or a language toggle.

### Phase R4: Industries hub and template restyle

**New page `/industries`** (add to sitemap; title, meta description and H1 are new, allowlisted):

- Eyebrow badge, H1, subhead, and filter chips by category (only categories that contain a live vertical). Filtering is progressive enhancement: all cards are in the server-rendered HTML and links work with JS disabled.
- A grid of industry cards generated from `data/vertical-seo/verticals`, **live verticals only**. Each card: name, a one-line benefit written for that vertical, a coverage line computed from published data (for example "10 provinces · 12 cities", never hardcoded), and a "View provinces" link to the pillar `/{urlSlug}`.
- A "Don't see your industry?" card linking to `/get-a-quote`.
- Optional "What we've learned" block only if real, sourced findings exist in `site-facts.json`, each shown with method and limitation. Otherwise omit it.
- With few live verticals the grid will be small. That's expected; do not pad it with unpublished or fake industries. The grid grows automatically as verticals go live.
- JSON-LD: `CollectionPage` + `BreadcrumbList` + `ItemList` of the live pillars, using the shared Organization `@id`.
  **Vertical pages (pillar, province, city):** restyle in the new system without changing content or URLs. Pillar: province grid as cards, each showing the province name, a count of published cities and chips for those cities. Province: city cards. City: the existing sections in dark cards, related-links block as a chip grid. Province and city pages are the programmatic geography; keep the hierarchy province → top cities exactly as built.

**Service pages and `/services` hub:** restyle with the same system: hero with breadcrumb, direct-answer callout, numbered process steps, FAQ accordion, related-services cards, industries chips.

### Phase R5: Remaining pages

Apply the new shell (header, footer, tokens, typography) and component styles to: `/seo` and `/web-design`, Niagara city pages (`/seo/{city}`), legacy therapist pages still live, About, Work and case studies, Blog index and posts (readable dark article layout, code and image handling, table of contents if present), Get a quote and Contact (form restyle only), Privacy/Terms, 404. Content, headings, links and schema stay as they are. Make existing images look right on dark (card backgrounds, rounded corners, no white boxes); do not alter the images themselves unless needed for contrast.

### Phase R6: QA and report

1. Run `yarn verify:seo`, including the regression check against the baseline. List every difference and confirm each is intended.
2. Capture screenshots (headless browser via `npx`, nothing saved to `package.json`) at 375, 768, 1280 and 1440px for: homepage, `/industries`, a pillar, a province page, a city page, a service page, `/services`, a blog post, `/get-a-quote`. Save under `docs/redesign-screenshots/`.
3. Check the built CSS size and confirm no unused legacy stylesheet is still shipped on converted pages. Run Lighthouse (mobile) via `npx` on the same pages and record Performance, Accessibility, SEO and Best Practices scores in `docs/redesign-notes.md`. Fix anything below 90 on Accessibility and SEO, and any LCP or CLS above target on the homepage.
4. Verify keyboard navigation through the header, mega menu, accordions and forms, and `prefers-reduced-motion` behaviour.
5. Verify the Solutions menu, filter chips and accordions work with JS disabled where they should (links and content present in server HTML).
6. Final summary in `docs/redesign-notes.md`: what changed per phase, fonts and colours chosen and why, facts used and where they came from, claims deliberately omitted because no real data exists, open questions in `docs/redesign-open-questions.md`, any regression-check differences, and the top five things a human should review before merging.

---

## 4. Optional Phase R7 (only if everything above is complete and green)

Site-wide search palette opened with ⌘K or Ctrl+K: a client-side fuzzy search over a static JSON index of published pages (services, verticals, provinces, cities, blog posts), built at build time with no new dependencies, keyboard navigable, accessible dialog, with a visible search button in the header. All pages must stay reachable without it.

---

## 5. Out of scope

- Any new service, vertical, province or city pages beyond what the earlier specs defined
- Free tools, an AI chat widget, video content, multi-language support, offices pages
- Changes to URLs, redirects, form backends, analytics setup or hosting
- Copy rewrites of existing pages beyond the homepage, `/industries` and the template-level components described above
