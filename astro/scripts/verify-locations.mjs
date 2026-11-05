// Pre-build gate for the location system. Fails the build on:
//   - invalid data (slugs, coordinates, phases, statuses)
//   - a live page with a missing or incomplete content file
//   - a title over 60 characters, or a description outside 140-160
//   - duplicate titles or descriptions
//   - a redirect map with duplicates, loops or chains
// It also prints the live title table.

import { validateLocations } from "../src/lib/locations.mjs";

const { errors, rows } = validateLocations();
rows.sort((a, b) => a.pathname.localeCompare(b.pathname));

console.log("\nLive location titles (limit 60 characters)");
console.log("-".repeat(112));
console.log("PATH".padEnd(58), "LEN", " TITLE");
for (const row of rows) {
  console.log(row.pathname.padEnd(58), String(row.title.length).padStart(3), ` ${row.title}`);
}

console.log("\nLive location meta descriptions (140-160 characters)");
console.log("-".repeat(112));
for (const row of rows) {
  console.log(row.pathname.padEnd(58), String(row.description.length).padStart(3));
}

console.log(`\n${rows.length} live city pages, ${errors.length} error(s).`);

if (errors.length > 0) {
  console.error("\nLocation errors:");
  for (const error of errors) console.error(` - ${error}`);
  process.exit(1);
}
