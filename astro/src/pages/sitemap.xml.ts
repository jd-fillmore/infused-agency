import type { APIRoute } from "astro";
import { SITE } from "../lib/site";
import { siteMapEntriesForService, lastmodFor } from "../lib/locations.mjs";
import { escapeXml } from "../lib/xml.mjs";

// Sitemap index. Each child covers one service and one country so Search
// Console reporting stays readable as the location set grows.
const GROUPS = ["core", "therapists-canada", "therapists-us", "ai-search-canada", "ai-search-us"];

function latestForGroup(group: string): string | undefined {
  const entries = [
    ...siteMapEntriesForService("seo-for-therapists"),
    ...siteMapEntriesForService("ai-search-optimization"),
  ].filter((entry) => entry.group === group);
  const dates = entries.map((entry) => lastmodFor(entry.pathname)).filter(Boolean) as string[];
  return dates.sort().at(-1);
}

export const GET: APIRoute = () => {
  const items = GROUPS.map((group) => {
    const lastmod = latestForGroup(group);
    return [
      "  <sitemap>",
      `    <loc>${escapeXml(`${SITE}/sitemap-${group}.xml`)}</loc>`,
      lastmod ? `    <lastmod>${escapeXml(lastmod.slice(0, 10))}</lastmod>` : "",
      "  </sitemap>",
    ]
      .filter(Boolean)
      .join("\n");
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</sitemapindex>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
