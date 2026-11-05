export function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function urlElement(loc, lastmod) {
  return [
    "  <url>",
    `    <loc>${escapeXml(loc)}</loc>`,
    lastmod ? `    <lastmod>${escapeXml(String(lastmod).slice(0, 10))}</lastmod>` : "",
    "  </url>",
  ]
    .filter(Boolean)
    .join("\n");
}
