#!/usr/bin/env node
/**
 * Blog content gate. Runs after `astro build` because it inspects astro/dist.
 *
 * Scope: content-plan posts, i.e. posts whose frontmatter includes `cluster`
 * (T | A | L | W | S). The fifteen legacy posts predate the content plan and
 * are only used as comparison targets, so the two generations of content can
 * coexist without rewriting published pages.
 *
 * Fails on:
 *   - body under 2,000 words
 *   - title over 60 characters
 *   - meta description (excerpt) outside 140-160 characters
 *   - duplicate title, slug or description
 *   - missing or invalid BlogPosting, FAQPage or BreadcrumbList schema
 *   - FAQPage questions/answers that do not match the visible FAQ block
 *   - an internal link to a redirect source or to a page that was not built
 *   - 5-gram Jaccard similarity above 0.30 between a plan post and any other
 *     post or a location page; the closest pairs are printed
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ASTRO = path.resolve(HERE, "..");
const DIST = path.join(ASTRO, "dist");
const POSTS = path.resolve(ASTRO, "..", "posts");

const MIN_WORDS = 2000;
const TITLE_MAX = 60;
const DESC_MIN = 140;
const DESC_MAX = 160;
const SIMILARITY_MAX = 0.3;
const SHINGLE = 5;
const CLUSTERS = new Set(["T", "A", "L", "W", "S"]);

// Location pages are the hierarchical city/region/country set. Industry and
// local SEO pages are not part of that system and are not compared here.
const LOCATION_PREFIXES = ["/seo-for-therapists/", "/ai-search-optimization/"];

const errors = [];

function walk(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) =>
      entry.isDirectory() ? walk(path.join(dir, entry.name)) : [path.join(dir, entry.name)]
    );
}

function routeForFile(file) {
  const rel = path.relative(DIST, file).split(path.sep).join("/");
  if (rel === "index.html") return "/";
  if (rel.endsWith("/index.html")) return `/${rel.slice(0, -"/index.html".length)}`;
  return `/${rel}`;
}

function decodeEntities(value) {
  return String(value)
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#0*39;/g, "'")
    .replace(/&apos;/gi, "'")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&");
}

function normalize(value) {
  return decodeEntities(value)
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function normalizeRoute(value) {
  const clean = String(value || "").trim().split("#")[0].split("?")[0].replace(/\/+$/, "");
  return clean || "/";
}

function wordCount(markdown) {
  const text = markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/^#{1,6}\s+/gm, " ");
  return (text.match(/[A-Za-z0-9']+/g) ?? []).length;
}

function readPosts() {
  return fs
    .readdirSync(POSTS)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const id = file.replace(/\.md$/, "");
      const { data, content } = matter(fs.readFileSync(path.join(POSTS, file), "utf8"));
      const parsed = data.date ? new Date(data.date) : null;
      return {
        id,
        cluster: data.cluster ? String(data.cluster).trim().toUpperCase() : undefined,
        title: String(data.title ?? "").trim(),
        date: parsed && !Number.isNaN(parsed.getTime()) ? parsed.toISOString() : "",
        description: String(data.excerpt ?? "").trim(),
        slug: data.slug ? String(data.slug).trim() : `/posts/${id}`,
        faqs: Array.isArray(data.faqs)
          ? data.faqs.map((faq) => ({
              q: String(faq?.q ?? "").trim(),
              a: String(faq?.a ?? "").trim(),
            }))
          : [],
        body: content,
      };
    });
}

function mainText(html) {
  const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? "";
  return main
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+data-shared[^>]*>[\s\S]*?<\/[a-z]+>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function tokens(text) {
  return text.match(/[a-z0-9']+/g) ?? [];
}

function shingles(words) {
  const set = new Set();
  for (let i = 0; i + SHINGLE <= words.length; i += 1) {
    set.add(words.slice(i, i + SHINGLE).join(" "));
  }
  return set;
}

function jaccard(a, b) {
  if (a.size === 0 || b.size === 0) return 0;
  let intersection = 0;
  for (const value of a) if (b.has(value)) intersection += 1;
  return intersection / (a.size + b.size - intersection);
}

function jsonLdNodes(html) {
  const nodes = [];
  const problems = [];
  const pattern = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  for (const match of html.matchAll(pattern)) {
    const raw = match[1].trim();
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch {
      try {
        parsed = JSON.parse(decodeEntities(raw));
      } catch (error) {
        problems.push(`unparseable JSON-LD (${error.message})`);
        continue;
      }
    }
    const add = (value) => {
      if (Array.isArray(value)) {
        value.forEach(add);
        return;
      }
      if (!value || typeof value !== "object") return;
      if (Array.isArray(value["@graph"])) value["@graph"].forEach(add);
      nodes.push(value);
    };
    add(parsed);
  }
  return { nodes, problems };
}

function hasType(node, type) {
  const value = node["@type"];
  return value === type || (Array.isArray(value) && value.includes(type));
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function isReference(value) {
  return Boolean(value) && typeof value === "object" && (isNonEmptyString(value["@id"]) || isNonEmptyString(value.name));
}

function validDate(value) {
  return isNonEmptyString(value) && !Number.isNaN(new Date(value).getTime());
}

function checkBlogPosting(node) {
  const problems = [];
  if (!isNonEmptyString(node.headline)) problems.push("headline");
  if (!isNonEmptyString(node.description)) problems.push("description");
  if (!validDate(node.datePublished)) problems.push("datePublished");
  if (!validDate(node.dateModified)) problems.push("dateModified");
  else if (node.dateModified !== node.datePublished) problems.push("dateModified must equal datePublished");
  if (!isNonEmptyString(node.image)) problems.push("image");
  if (!isNonEmptyString(node.mainEntityOfPage)) problems.push("mainEntityOfPage");
  if (!isReference(node.author)) problems.push("author");
  if (!isReference(node.publisher)) problems.push("publisher");
  return problems;
}

function checkFaqPage(node) {
  const problems = [];
  const entries = node.mainEntity;
  if (!Array.isArray(entries) || entries.length === 0) {
    problems.push("mainEntity must list at least one Question");
    return problems;
  }
  entries.forEach((entry, index) => {
    if (!isNonEmptyString(entry?.name)) problems.push(`mainEntity[${index}].name`);
    const text = entry?.acceptedAnswer?.text;
    if (!isNonEmptyString(text)) problems.push(`mainEntity[${index}].acceptedAnswer.text`);
  });
  return problems;
}

function checkBreadcrumb(node) {
  const problems = [];
  const items = node.itemListElement;
  if (!Array.isArray(items) || items.length < 2) {
    problems.push("itemListElement must list at least Home and the post");
    return problems;
  }
  items.forEach((item, index) => {
    if (!isNonEmptyString(item?.name)) problems.push(`itemListElement[${index}].name`);
    if (!Number.isFinite(item?.position)) problems.push(`itemListElement[${index}].position`);
  });
  return problems;
}

function visibleFaqs(html) {
  const blocks = [...html.matchAll(/<div[^>]*data-post-faq[^>]*>([\s\S]*?)<\/div>/gi)];
  return blocks
    .map(([, block]) => {
      const question = block.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i)?.[1] ?? "";
      const answer = block.replace(/<h3[^>]*>[\s\S]*?<\/h3>/i, "");
      return { q: normalize(question), a: normalize(answer) };
    })
    .filter((faq) => faq.q);
}

function readRedirectSources() {
  const file = path.join(DIST, "_redirects");
  const map = new Map();
  if (!fs.existsSync(file)) return map;
  for (const line of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const tokens = trimmed.split(/\s+/);
    if (tokens.length < 3) continue;
    const source = normalizeRoute(tokens.slice(0, -2).join(" "));
    if (!map.has(source)) map.set(source, tokens[tokens.length - 2]);
  }
  return map;
}

function internalRoute(href) {
  const value = String(href || "").trim();
  if (!value || value.startsWith("#")) return null;
  if (/^(mailto|tel|javascript|data):/i.test(value)) return null;
  if (value.startsWith("//")) return null;
  if (/^https?:/i.test(value)) {
    try {
      const url = new URL(value);
      if (url.hostname === "infused.agency" || url.hostname === "www.infused.agency") {
        return normalizeRoute(url.pathname || "/");
      }
    } catch {
      return null;
    }
    return null;
  }
  if (!value.startsWith("/")) return null;
  return normalizeRoute(value);
}

function main() {
  if (!fs.existsSync(DIST)) {
    console.error(`No Astro build found at ${DIST}. Run "yarn build:astro" first.`);
    process.exit(1);
  }

  const allPosts = readPosts().filter((post) => post.date);
  const planPosts = allPosts.filter((post) => post.cluster);
  const redirects = readRedirectSources();
  const htmlFiles = walk(DIST).filter((file) => file.endsWith(".html"));
  const builtRoutes = new Set(htmlFiles.map(routeForFile));

  console.log(
    `Blog gate: ${planPosts.length} content-plan post(s) checked, ${allPosts.length - planPosts.length} legacy post(s) used for comparison only.`
  );

  // 1. Per-post content rules.
  for (const post of planPosts) {
    const label = `${post.id}`;
    if (!CLUSTERS.has(post.cluster)) {
      errors.push(`${label}: invalid cluster "${post.cluster}" (expected T, A, L, W or S).`);
    }
    const words = wordCount(post.body);
    if (words < MIN_WORDS) errors.push(`${label}: ${words} words (minimum ${MIN_WORDS}).`);
    if ([...post.title].length > TITLE_MAX) {
      errors.push(`${label}: title is ${[...post.title].length} characters (maximum ${TITLE_MAX}).`);
    }
    const descriptionLength = [...post.description].length;
    if (descriptionLength < DESC_MIN || descriptionLength > DESC_MAX) {
      errors.push(
        `${label}: description is ${descriptionLength} characters (must be ${DESC_MIN}-${DESC_MAX}).`
      );
    }
    if (post.faqs.length === 0) {
      errors.push(`${label}: no faqs in frontmatter, so no FAQPage schema can match the page.`);
    }
  }

  // 2. Duplicate titles, slugs and descriptions across every post. A conflict
  // only fails when one side is a content-plan post.
  const duplicates = [
    { field: "title", key: (post) => normalize(post.title) },
    { field: "slug", key: (post) => normalizeRoute(post.slug) },
    { field: "description", key: (post) => normalize(post.description) },
  ];
  for (const { field, key } of duplicates) {
    const groups = new Map();
    for (const post of allPosts) {
      const value = key(post);
      if (!value) continue;
      if (!groups.has(value)) groups.set(value, []);
      groups.get(value).push(post);
    }
    for (const [, group] of groups) {
      if (group.length < 2) continue;
      if (!group.some((post) => post.cluster)) continue;
      errors.push(
        `duplicate ${field}: ${group.map((post) => post.id).join(", ")} (${field} "${key(group[0])}").`
      );
    }
  }

  // 3. Built page, schema, FAQ parity and internal links.
  const postTexts = [];
  for (const post of allPosts) {
    const file = path.join(DIST, "posts", post.id, "index.html");
    if (!fs.existsSync(file)) {
      // A plan post must be built. Legacy posts are built too, but tolerate a
      // missing page rather than failing on content outside the plan.
      if (post.cluster) {
        errors.push(`${post.id}: built page missing at /posts/${post.id}.`);
      }
      continue;
    }
    const html = fs.readFileSync(file, "utf8");
    postTexts.push({ id: post.id, shingles: shingles(tokens(mainText(html))) });

    const { nodes, problems } = jsonLdNodes(html);
    for (const problem of problems) errors.push(`${post.id}: ${problem}`);

    if (!post.cluster) continue;

    const blogPosting = nodes.find((node) => hasType(node, "BlogPosting"));
    const faqPage = nodes.find((node) => hasType(node, "FAQPage"));
    const breadcrumb = nodes.find((node) => hasType(node, "BreadcrumbList"));

    if (!blogPosting) errors.push(`${post.id}: missing BlogPosting schema.`);
    else {
      for (const problem of checkBlogPosting(blogPosting)) {
        errors.push(`${post.id}: invalid BlogPosting (${problem}).`);
      }
    }
    if (!faqPage) errors.push(`${post.id}: missing FAQPage schema.`);
    if (!breadcrumb) errors.push(`${post.id}: missing BreadcrumbList schema.`);
    else {
      for (const problem of checkBreadcrumb(breadcrumb)) {
        errors.push(`${post.id}: invalid BreadcrumbList (${problem}).`);
      }
    }

    const visible = visibleFaqs(html);
    if (faqPage) {
      for (const problem of checkFaqPage(faqPage)) {
        errors.push(`${post.id}: invalid FAQPage (${problem}).`);
      }
      const schemaFaqs = (faqPage.mainEntity ?? []).map((entry) => ({
        q: normalize(entry?.name ?? ""),
        a: normalize(entry?.acceptedAnswer?.text ?? ""),
      }));
      if (schemaFaqs.length !== visible.length) {
        errors.push(
          `${post.id}: FAQPage has ${schemaFaqs.length} question(s) but the page shows ${visible.length}.`
        );
      }
      const mismatch = schemaFaqs.findIndex(
        (faq, index) => faq.q !== visible[index]?.q || faq.a !== visible[index]?.a
      );
      if (mismatch !== -1) {
        errors.push(
          `${post.id}: FAQPage entry ${mismatch + 1} does not match the visible FAQ (schema "${schemaFaqs[mismatch]?.q}" vs page "${visible[mismatch]?.q}").`
        );
      }
    }

    for (const match of html.matchAll(/href="([^"]+)"/g)) {
      const route = internalRoute(match[1]);
      if (!route) continue;
      if (redirects.has(route)) {
        errors.push(
          `${post.id}: links to redirect source ${route} (${redirects.get(route)}); link the destination instead.`
        );
        continue;
      }
      if (builtRoutes.has(route)) continue;
      const asset = path.join(DIST, route.replace(/^\//, ""));
      if (route !== "/" && fs.existsSync(asset)) continue;
      errors.push(`${post.id}: internal link ${route} is not a built page.`);
    }
  }

  // 4. Similarity: each plan post against every other post and every location
  // page (5-word shingles, Jaccard).
  const locationTexts = [];
  for (const file of htmlFiles) {
    const route = routeForFile(file);
    if (!LOCATION_PREFIXES.some((prefix) => route.startsWith(prefix))) continue;
    const set = shingles(tokens(mainText(fs.readFileSync(file, "utf8"))));
    if (set.size > 0) locationTexts.push({ id: route, shingles: set });
  }

  const pairs = [];
  const seen = new Set();
  const byId = new Map(postTexts.map((post) => [post.id, post]));
  for (const post of planPosts) {
    const current = byId.get(post.id);
    if (!current) continue;
    for (const other of postTexts) {
      if (other.id === post.id) continue;
      const key = [post.id, other.id].sort().join("|");
      if (seen.has(key)) continue;
      seen.add(key);
      pairs.push({ a: post.id, b: other.id, score: jaccard(current.shingles, other.shingles) });
    }
    for (const location of locationTexts) {
      pairs.push({
        a: post.id,
        b: location.id,
        score: jaccard(current.shingles, location.shingles),
      });
    }
  }
  pairs.sort((left, right) => right.score - left.score);
  if (pairs.length > 0) {
    console.log(`\n  closest text pairs (5-gram Jaccard, limit ${SIMILARITY_MAX.toFixed(2)}):`);
    for (const pair of pairs.slice(0, 8)) {
      console.log(`   ${pair.score.toFixed(3)}  ${pair.a}  <>  ${pair.b}`);
    }
    for (const pair of pairs) {
      if (pair.score > SIMILARITY_MAX) {
        errors.push(
          `${pair.a} and ${pair.b}: similarity ${pair.score.toFixed(3)} exceeds ${SIMILARITY_MAX.toFixed(2)}.`
        );
      }
    }
  }

  if (errors.length > 0) {
    console.error(`\nBlog gate FAILED — ${errors.length} error(s):`);
    for (const error of errors) console.error(` ✗ ${error}`);
    console.error("");
    process.exit(1);
  }

  console.log(`\nBlog gate passed — ${planPosts.length} content-plan post(s).\n`);
}

main();
