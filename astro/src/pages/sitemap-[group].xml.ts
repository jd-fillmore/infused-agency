import type { APIRoute } from "astro";
import { SITE } from "../lib/site";
import { siteMapEntriesForService, lastmodFor } from "../lib/locations.mjs";
import { urlElement } from "../lib/xml.mjs";

// One child sitemap per service and country, containing only live pages.
const GROUPS = ["therapists-canada", "therapists-us", "ai-search-canada", "ai-search-us"];

export function getStaticPaths() {
  return GROUPS.map((group) => ({ params: { group }, props: { group } }));
}

export const GET: APIRoute = ({ props }) => {
  const group = (props as { group: string }).group;
  const entries = [
    ...siteMapEntriesForService("seo-for-therapists"),
    ...siteMapEntriesForService("ai-search-optimization"),
  ]
    .filter((entry) => entry.group === group)
    .sort((a, b) => a.pathname.localeCompare(b.pathname));

  const urls = entries
    .map((entry) => urlElement(`${SITE}${entry.pathname}`, lastmodFor(entry.pathname)))
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
