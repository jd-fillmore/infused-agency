import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import { marked } from "marked";

export interface PostMeta {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
  canonical?: string;
  robots?: string;
}

export interface Post extends PostMeta {
  html: string;
}

function postsDirectory(): string {
  const fromRoot = path.resolve(process.cwd(), "posts");
  if (fs.existsSync(fromRoot)) return fromRoot;
  const fromProject = path.resolve(process.cwd(), "..", "posts");
  if (fs.existsSync(fromProject)) return fromProject;
  throw new Error("Could not locate the posts/ directory at build time.");
}

function normalizeMarkdown(markdown: string): string {
  // The legacy template renders the PageHero H1 and the Markdown body H1,
  // producing two H1s on five posts. Astro's ArticleLayout supplies the single
  // H1, so drop only the duplicate leading heading without losing its text.
  return markdown.replace(/^\s*#\s+.+\r?\n/, "");
}

function normalizeLinks(html: string): string {
  return html
    .replace(/https?:\/\/infused\.agency/gi, "")
    .replace(/https?:\/\/localhost:3000/gi, "")
    .replace(/href="(\/posts\/[^"#?]+)\/"/g, 'href="$1"');
}

export function renderMarkdown(markdown: string): string {
  const html = marked.parse(normalizeMarkdown(markdown), { async: false }) as string;
  return normalizeLinks(html);
}

export function getAllPosts(): Post[] {
  const directory = postsDirectory();
  const files = fs.readdirSync(directory).filter((file) => file.endsWith(".md"));

  return files
    .map((file) => {
      const id = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(directory, file), "utf8");
      const { data, content } = matter(raw);

      return {
        id,
        title: String(data.title ?? ""),
        date: data.date ? new Date(data.date).toISOString() : "",
        excerpt: String(data.excerpt ?? ""),
        image: data.image ? String(data.image) : undefined,
        canonical: data.canonical ? String(data.canonical) : undefined,
        robots: data.robots ? String(data.robots) : undefined,
        html: renderMarkdown(content),
      } satisfies Post;
    })
    .filter((post) => post.date)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPost(id: string): Post | undefined {
  return getAllPosts().find((post) => post.id === id);
}

export function formatPostDate(date: string): string {
  return new Intl.DateTimeFormat("en-CA", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}
