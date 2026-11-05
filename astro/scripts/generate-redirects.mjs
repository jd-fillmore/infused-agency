// Generates the legacy -> hierarchical redirect map from the data file,
// writes REDIRECTS.md and refreshes the managed block at the top of
// astro/public/_redirects. Fails on duplicate sources, loops or chains.

import fs from "node:fs";
import path from "node:path";
import { redirectMap } from "../src/lib/locations.mjs";

const ROOT = process.cwd();
const REDIRECT_FILE = path.join(ROOT, "astro/public/_redirects");
const MARK_START = "# BEGIN generated location redirects (astro/scripts/generate-redirects.mjs)";
const MARK_END = "# END generated location redirects";

const entries = redirectMap().sort((a, b) => a.from.localeCompare(b.from));
const sources = new Set(entries.map((entry) => entry.from));
const seen = new Set();
const errors = [];

for (const entry of entries) {
  if (seen.has(entry.from)) errors.push(`Duplicate redirect source: ${entry.from}`);
  seen.add(entry.from);
  if (entry.from === entry.to) errors.push(`Redirect loop: ${entry.from}`);
  if (sources.has(entry.to)) {
    errors.push(`Redirect chain: ${entry.from} -> ${entry.to} (target is itself a redirect source)`);
  }
}

if (errors.length > 0) {
  console.error("Redirect map errors:");
  for (const error of errors) console.error(` - ${error}`);
  process.exit(1);
}

const table = entries
  .map((entry) => `| \`${entry.from}\` | \`${entry.to}\` | 301 | ${entry.service ?? "service root"} |`)
  .join("\n");

const markdown = `# Redirect map — hierarchical location URLs

Generated from \`astro/src/data/locations.json\` by
\`astro/scripts/generate-redirects.mjs\`. Every legacy location URL that is
still live today maps directly to its final URL in the
\`/{service}/{country}/{region}/{city}\` hierarchy. No chains, no loops, and no
redirect points at a page that is not built.

Redirects are written as 301s at the top of \`astro/public/_redirects\`; Netlify
resolves rules in file order, so this block must stay ahead of the legacy 410
rules it supersedes.

| From | To | Status | Service |
| --- | --- | --- | --- |
${table}

## Deliberately not redirected

- \`/seo/{niagara-town}\`, \`/web-design/{niagara-town}\` and
  \`/seo/for-*-niagara\` are unchanged.
- \`/therapist-seo/*\` and the \`/seo/for-therapists-{city}\` routes that already
  returned 410 stay 410. They were retired before this migration and had no
  page to preserve.
- \`/seo/niagara\` is served directly (200) and has no rule in \`_redirects\`.
`;

fs.writeFileSync(path.join(ROOT, "REDIRECTS.md"), markdown);

const block = `${MARK_START}\n${entries.map((entry) => `${entry.from} ${entry.to} 301`).join("\n")}\n${MARK_END}\n`;

let redirects = fs.existsSync(REDIRECT_FILE) ? fs.readFileSync(REDIRECT_FILE, "utf8") : "";

// Strip any previously generated block. The markers contain regex
// metacharacters (parentheses, slashes), so this is a plain string cut rather
// than a RegExp, and it keeps running until no block is left.
let blockStart = redirects.indexOf(MARK_START);
while (blockStart !== -1) {
  const blockEnd = redirects.indexOf(MARK_END, blockStart);
  const stop = blockEnd === -1 ? redirects.length : blockEnd + MARK_END.length;
  redirects = `${redirects.slice(0, blockStart)}${redirects.slice(stop)}`;
  redirects = redirects.replace(/\n{3,}/g, "\n\n");
  blockStart = redirects.indexOf(MARK_START);
}

// Keep the generated block at the top so it wins over legacy 410 rules.
const firstNewline = redirects.indexOf("\n");
redirects = `${redirects.slice(0, firstNewline + 1)}\n${block}${redirects.slice(firstNewline + 1)}`;
fs.writeFileSync(REDIRECT_FILE, redirects);

console.log(`Redirect map: ${entries.length} rules written to REDIRECTS.md and _redirects.`);
