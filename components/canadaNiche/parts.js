import React from "react";
import Link from "next/link";
import Icon from "../ui/Icon";

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

// Inline-link renderer shared by the Canada niche components: paragraphs may
// embed `[label](/href)` tokens (internal links). Everything else renders as
// plain text.
export function RichText({ text }) {
  const nodes = [];
  let last = 0;
  let match;
  const re = new RegExp(LINK_RE);
  while ((match = re.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    const [, label, href] = match;
    if (href.startsWith("/")) {
      nodes.push(
        <Link
          key={`${match.index}-${href}`}
          href={href}
          className="font-semibold text-accent transition-colors hover:text-accent-hover"
        >
          {label}
        </Link>
      );
    } else {
      nodes.push(
        <a
          key={`${match.index}-${href}`}
          href={href}
          className="font-semibold text-accent transition-colors hover:text-accent-hover"
        >
          {label}
        </a>
      );
    }
    last = re.lastIndex;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes}</>;
}

export function Prose({ paragraphs }) {
  if (!paragraphs || !paragraphs.length) return null;
  return (
    <div className="max-w-3xl">
      {paragraphs.map((p, i) => (
        <p key={i} className="mt-4 text-base leading-relaxed text-muted">
          <RichText text={p} />
        </p>
      ))}
    </div>
  );
}

export function CheckList({ items }) {
  if (!items || !items.length) return null;
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-3 text-sm leading-relaxed text-muted"
        >
          <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
