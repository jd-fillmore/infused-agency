# LIGHT RE-SKIN SPEC: from dark SaaS to a light, polished design in Infused Agency's own colours

Read this together with `docs/redesign-spec.md`, `docs/redesign-notes.md`, `docs/vertical-seo-build-spec.md` and `docs/vertical-seo-build.md`. Their rules still apply (yarn, no new runtime dependencies, Tailwind CSS already installed, no fabricated facts, URLs and content unchanged, SEO regression check stays on). This spec changes the **look and the interaction feel only**.

Work on a new branch `feat/light-reskin` created from the current production branch. One commit per phase. Run `yarn verify:seo`, `yarn test:seo`, `yarn lint` and `yarn build` at the end of every phase. Do not stop to ask questions; record assumptions in `docs/light-reskin-notes.md` and keep going.

---

## 0. Goal

Re-skin the whole site from dark to a **light** theme. Take the typography feel and the smooth, polished hover and motion behaviour from https://mangomedia.ca/ as the reference, but express them in Infused Agency's own brand colours. The site should look like a premium, modern agency site, clearly its own.

---

## 1. Rules

1. **Reference, don't copy.** mangomedia.ca is a reference for typographic feel and interaction behaviour only. Never copy or closely paraphrase their text, headings, FAQs, statistics, images, icons, brandmark illustrations, logos, CSS, markup or code. Do not hotlink anything. Do not download or copy their font files.
2. **Mango Media is a direct local competitor** (Niagara-based SEO and web design agency). The result must not look like a re-skin of their site: use Infused's own palette, own iconography and own layout decisions. Do not use their teal/pine and coral colour pairing or anything close to it.
3. **Do not copy their claims.** They state a 5.0 rating from 32 reviews, "\$0 ad spend", "since 2013", published pricing, client logos, affiliations, certifications and testimonials. None of that is ours. Every claim on our pages must come from the current live site or `data/site/site-facts.json`.
4. **No content changes.** Titles, meta descriptions, canonicals, H1s, headings, body copy, JSON-LD, URLs, redirects, sitemaps and internal links stay exactly as they are. The `seo-regression` check must pass with no new allowlist entries. This is a visual change only.
5. **No new dependencies.** CSS and Tailwind utilities only. No animation libraries, no JS-driven motion unless a small amount of plain React is truly needed. Inline SVG icons.
6. **Performance and accessibility.** Mobile LCP under 2.5s, CLS under 0.1, no layout shift from fonts or hover effects. WCAG AA contrast on the light theme (text, muted text, buttons, links, focus rings, form fields). Visible `:focus-visible` states. All motion respects `prefers-reduced-motion`. Hover effects must have non-hover equivalents on touch devices (nothing essential is hidden behind hover).
7. Light theme only. Set `color-scheme: light` and update `theme-color`. No theme toggle.

---

## 2. Phases

### Phase L0: Reference extraction and baseline (no visual changes)

1. Inspect the current design system from the previous redesign: Tailwind theme, CSS variables, shared components, the `/dev/styleguide` page, and every place dark-specific styling is hard-coded (gradients, glows, `bg-black`-style classes, white-on-dark text, dark-adapted image treatments). List them in `docs/light-reskin-notes.md`.
2. Run the SEO baseline: `yarn verify:seo` must be green before you start. Save a screenshot set of the current site for before/after comparison under `docs/light-reskin-screenshots/before/` (homepage, `/industries`, a vertical pillar, a province page, a city page, a service page, a Niagara city page, a blog post, `/get-a-quote`) at 375, 768 and 1280px.
3. **Reference extraction.** With `curl` on this machine, fetch https://mangomedia.ca/ and read its HTML and linked CSS. Write `docs/light-design-reference.md` containing design facts only, no copy and no code excerpts:
   - the heading and body font families, weights, sizes, line heights and letter spacing, and where each is used; whether the fonts are open-licence (for example Google Fonts) or commercial or custom
   - how the type scale behaves (fluid or stepped), heading weight and tracking, eyebrow label style
   - the spacing rhythm, section padding, container width, grid gaps, radius and border styles, shadow styles (number of layers, blur, offset, opacity)
   - **hover and motion behaviour** for cards, buttons, links, nav items, images and icons: which properties change (transform, shadow, border colour, background, image scale, arrow icon movement), distance moved, durations, easing curves, delays, and whether anything is staggered. Check `transition`, `transform`, `box-shadow` and `cubic-bezier` declarations and any scroll-reveal behaviour
   - the structural patterns on their homepage, as component types only: announcement strip, trust-stat row with icons, logo strip, image-backed service cards, case-study cards with a headline metric, testimonials with star rows, FAQ accordion, contact form block, affiliation strip, newsletter strip, mega footer
   - If their fonts are open-licence, use the same families. If they are commercial, custom or unidentifiable, choose the closest open-licence Google Fonts and record why. Do not copy their font files either way; load our fonts the same way the current site does (self-hosted or the framework's font optimisation).
4. **Brand palette.** Extract Infused Agency's brand colour(s) from the logo and the current accent token. Design a light palette from it and document it with contrast ratios in `docs/light-reskin-notes.md`:
   - page background (a soft, slightly warm or cool off-white that suits the brand), elevated surface (white), subtle surface (a tint of the brand)
   - text (a deep ink derived from the brand hue, not pure black), muted text, borders
   - primary accent (the brand colour) for buttons, links and highlights, plus a hover and pressed state
   - one deep "contrast band" colour derived from the brand colour, for occasional full-width dark sections (CTA band, footer) that give the page rhythm
   - success, warning and error colours
     Check every text/background pair for AA contrast and adjust the palette until all pass.

### Phase L1: Tokens and typography re-skin

- Replace the dark tokens with the light palette in the Tailwind theme and CSS variables so that components pick up the new look from tokens. Set `color-scheme: light`, `theme-color`, and the body background and text.
- Install the chosen heading and body fonts the same way the current site loads fonts, with `font-display: swap`, a Latin subset, preload of the critical weight, and size-adjusted fallbacks to avoid layout shift. Max 2 families and 3 to 4 weights. Match the reference's type scale and heading character with `clamp()` sizes.
- Update the `/dev/styleguide` page (still `noindex` and disabled in production) to show the new tokens, type scale and components.
- Remove dark-only treatments: glows, dark gradients, glass-on-dark navbars. Replace them with soft light shadows, subtle tinted gradients, and clean borders.

### Phase L2: Interaction and motion system

Build a small set of reusable motion utilities (Tailwind classes and a few CSS custom properties) so every component gets the same smooth feel. Derive exact values from `docs/light-design-reference.md`; the defaults below apply where the reference gives no value:

- **Easing and timing tokens:** one smooth ease-out curve (for example `cubic-bezier(0.22, 1, 0.36, 1)`), `150ms` for micro-interactions, `250 to 350ms` for card and image motion.
- **Cards and boxes:** on hover, lift by about 4px (`translateY`), expand to a layered soft shadow, shift the border toward the accent, optionally tint the background; the title or arrow icon nudges slightly. Animate only `transform`, `opacity`, `box-shadow`, `border-color` and `background-color`. No layout-affecting properties.
- **Images inside cards:** a subtle zoom (`scale` about 1.03 to 1.05) inside an `overflow: hidden` container with matching radius.
- **Buttons:** primary buttons lift slightly and brighten or deepen; secondary buttons fill or underline smoothly; arrow icons slide a few pixels; active state presses down.
- **Links and nav:** animated underline reveal; the Solutions mega menu panel fades and rises gently with a short delay so it doesn't flicker.
- **Accordions (FAQ):** smooth height or grid-rows transition, rotating chevron.
- **Optional scroll reveal:** a light fade-up on sections using CSS only (or the smallest possible `IntersectionObserver` helper). It must not hide content from crawlers or from users with JS disabled (content visible by default; animation is an enhancement), and must not cause layout shift.
- Honour `prefers-reduced-motion` by removing transforms and transitions beyond simple colour changes. Ensure touch devices don't get stuck hover states (use `@media (hover: hover)` for hover-only effects).
- Add each effect to the styleguide so it can be reviewed.

### Phase L3: Shell and homepage

- Restyle the header (light, with a subtle border or shadow once scrolled, no layout shift), the Solutions mega menu, the mobile menu and the footer using the new tokens and motion system. Keep all links, structure and behaviour. The CTA band and footer may use the deep contrast colour from the palette.
- Restyle every homepage section in the new system without changing content, order, headings or links. Where the reference has a pattern we already have a real section for (trust stats row, proof strip, services cards, testimonials, FAQ), adopt its polish: icon-led stat row, image-led or icon-led service cards, case-study cards with a large headline metric (using only our real results), star rows on testimonial cards (only for real testimonials). Do not add sections whose content we don't have (client logo strip, affiliations, newsletter, announcement strip) unless the data already exists in `site-facts.json`. No hero background video.
- Replace the CSS/SVG hero visual so it works on a light background.

### Phase L4: Templates

Restyle, without changing content or markup semantics: the `/industries` hub (cards, filter chips), vertical pillar, province and city pages (province grid cards, city chips, related-links blocks), service pages and the `/services` hub (numbered process steps, direct-answer callout, related-services cards), and the `/seo` and `/web-design` pages. Cards use the motion system from Phase L2. Breadcrumbs stay a single horizontal row.

### Phase L5: Remaining pages

Niagara city pages (`/seo/{city}`), legacy therapist pages still live, About, Work and case studies, Blog index and posts (light, highly readable article layout), Get a quote and Contact (form fields with clear focus and error states, accessible contrast), Privacy and Terms, 404. Fix any image or logo that was prepared for a dark background (transparent logos with white text, dark-mode screenshots, inverted icons) by using suitable containers or CSS, without altering the image files unless unavoidable.

### Phase L6: QA and report

1. `yarn verify:seo` including the regression check, schema validation and verify scripts must pass with **no new allowlist entries**.
2. Capture after-screenshots at 375, 768, 1280 and 1440px of the same pages as in L0, under `docs/light-reskin-screenshots/after/`.
3. Check contrast for every text and background pair actually used on the pages, using a script or Lighthouse accessibility results, and fix failures.
4. Run Lighthouse (mobile) via `npx` (not saved to `package.json`) on the homepage, a pillar, a city page, a service page and a blog post. Record Performance, Accessibility, SEO and Best Practices in `docs/light-reskin-notes.md`. Fix anything below 90 on Accessibility and SEO and any LCP or CLS above target.
5. Verify keyboard navigation through the header, mega menu, accordions and forms, `prefers-reduced-motion` behaviour, and that no hover effect is required to reach content on touch devices.
6. Check that the built CSS did not grow noticeably versus before (report sizes), and that no dead dark-theme CSS remains.
7. Final summary in `docs/light-reskin-notes.md`: what changed per phase, the fonts and palette chosen and why, the motion tokens used, anything that looked too close to the reference and how it was changed, and the top five things a human should review before merging.

---

## 3. Out of scope

- Any copy, heading, URL, redirect, schema or sitemap change
- New sections or pages, a client logo strip, affiliations, newsletter, video backgrounds, free tools, chat widgets
- New dependencies, a dark/light toggle
