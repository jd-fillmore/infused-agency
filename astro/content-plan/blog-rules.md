# Blog writing rules

## LENGTH AND QUALITY
- At least 2,000 words of body text. Never pad: no repeated points, no filler intros, no generic "in today's digital world" openings. Write for a small-business owner or practitioner: plain language, specific, short paragraphs.
- Structure: direct answer in the first 40-60 words; a short key-takeaways list; a table of contents with anchor links; H2/H3 headings that are real questions or long-tail phrases from the brief, used naturally; at least one comparison table or checklist; a practical "do this today" section; 6-8 FAQs at the end that are different from the headings; one closing call to action.
- No invented facts. Never invent client results, testimonials, statistics, rankings, case studies, quotes, or personal anecdotes. No "we helped X clients" unless that exact claim is already on the live site. State a statistic, regulation, or Google policy only if verified from an official source in this run; otherwise leave it out and write the point generally. No placeholders, and don't mention what was omitted.
- No guarantees about rankings, leads, or AI citations. No prices for our services. No offer we don't make (no free audit/consult). No claims of a physical office. Healthcare-related posts must not give legal, clinical, or regulatory advice; tell readers to confirm rules with their regulator.
- Each post must be genuinely different in angle, examples, and wording from every other post and every location page. Vary openings, structures, and FAQ phrasing; don't reuse templates across posts.

## TITLE AND META
Title 60 characters or fewer with the primary keyword near the front; meta description 140-160 characters; H1 matches the topic; unique 3-6 word slug.

## LINKS
- 3-5 contextual links to the pages named in the brief (descriptive anchors, not "click here"); for therapist posts also link 1-2 live therapist city pages where natural.
- 2-3 contextual links to previously written posts in the same or a related cluster, only posts that publish on or before this post's date. Never link to a later post; the Related Posts block handles that automatically.
- 2-4 external links to authoritative sources, only if verified, with appropriate rel attributes.
- Never link to a redirect source.

## SCHEMA (JSON-LD)
BlogPosting (headline, description, author as Person with URL, publisher Organization, datePublished, dateModified equal to publish date, image, mainEntityOfPage); FAQPage matching the visible FAQs exactly; BreadcrumbList. No HowTo schema.

## FRONTMATTER FIELDS
Cluster (`cluster: T | A | L | W | S`), publish date (`date` — shown on the post and in its BlogPosting schema), `faqs:` as a list of `{ q, a }` pairs (the template renders them as the visible FAQ block and emits matching FAQPage schema; `yarn check:blog` fails if the two disagree), and optional `related:` slugs. A post goes live when it is committed and deployed; there is no scheduling.
