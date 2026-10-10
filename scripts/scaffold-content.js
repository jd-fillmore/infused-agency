#!/usr/bin/env node
// Idempotently scaffolds draft content stubs for every enumerated page that
// does not yet have a content file. Existing files are never overwritten.
const fs = require("fs");
const path = require("path");
const seo = require("../src/lib/verticalSeo");

const STUB = (page) => ({
  status: "draft",
  updated: new Date().toISOString().slice(0, 10),
  directAnswer: "",
  intro: "",
  localInsight: "",
  localChecklist: [],
  faqs: [],
  summary: "",
  proofRefs: page.vertical.proofRefs || [],
});

function main() {
  const all = seo.enumeratePages({ includeScaffold: true });
  let created = 0;
  for (const page of all) {
    const p = seo.contentPathFor(page);
    if (!p || fs.existsSync(p)) continue;
    fs.mkdirSync(path.dirname(p), { recursive: true });
    fs.writeFileSync(p, JSON.stringify(STUB(page), null, 2) + "\n", "utf8");
    created++;
    console.log("+ " + path.relative(process.cwd(), p));
  }
  console.log(`\n${created} stub(s) created.`);
}

main();
