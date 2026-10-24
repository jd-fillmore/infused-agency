import { extractLegacyContent } from "./astro/src/lib/legacy-jsx.mjs";

for (const file of process.argv.slice(2)) {
  const result = extractLegacyContent(file);
  console.log(`\n===== ${file}`);
  console.log("title:", result.title);
  console.log("description:", result.description);
  console.log("canonical:", result.canonical);
  console.log("h1:", result.h1);
  console.log("hero:", result.hero);
  console.log("blocks:", result.blocks.length);
  for (const block of result.blocks) {
    if (block.type === "heading") console.log(`  H${block.level}: ${block.text.slice(0, 100)}`);
    else if (block.type === "paragraph") console.log(`  P: ${block.text.slice(0, 120)}`);
    else if (block.type === "list") console.log(`  LIST(${block.items.length}): ${block.items[0]?.slice(0, 80)}`);
    else if (block.type === "image") console.log(`  IMG: ${block.src} | ${block.alt.slice(0, 60)}`);
    else if (block.type === "caption") console.log(`  CAP: ${block.text.slice(0, 80)}`);
    else if (block.type === "testimonial") console.log(`  TEST: ${block.person} / ${block.company}`);
    else if (block.type === "faqs") console.log(`  FAQS: ${block.items.length}`);
    else if (block.type === "map") console.log(`  MAP: ${block.place}`);
    else if (block.type === "cta") console.log(`  CTA: ${block.label} -> ${block.href}`);
    else if (block.type === "link") console.log(`  LINK: ${block.label} -> ${block.href}`);
    else console.log(`  ${block.type}: ${JSON.stringify(block).slice(0, 100)}`);
  }
}
