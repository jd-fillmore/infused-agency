import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const manifest = fs
  .readFileSync(path.join(root, "docs/astro-rebuild/route-manifest.csv"), "utf8")
  .trim()
  .split("\n")
  .slice(1)
  .map((line) => {
    const first = line.indexOf(",");
    return line.slice(0, first).replace(/^"|"$/g, "");
  });

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.name === "index.html") {
      const rel = "/" + path.relative(path.join(root, "astro/dist"), dir).split(path.sep).join("/");
      out.push(rel === "/." ? "/" : rel);
    } else if (entry.name.endsWith(".html") && !entry.name.startsWith("index")) {
      const rel = "/" + path.relative(path.join(root, "astro/dist"), full).split(path.sep).join("/").replace(/\.html$/, "");
      out.push(rel);
    }
  }
  return out;
}

const built = new Set(walk(path.join(root, "astro/dist")));
const manifestSet = new Set(manifest);
const missing = [...manifestSet].filter((u) => !built.has(u)).sort();
const extra = [...built].filter((u) => !manifestSet.has(u) && u !== "/404" && u !== "/500").sort();

console.log(`manifest rows: ${manifest.length}`);
console.log(`built routes: ${built.size}`);
console.log(`missing (${missing.length}):`);
for (const u of missing) console.log("  " + u);
console.log(`extra (${extra.length}):`);
for (const u of extra) console.log("  " + u);
