import React from "react";
import { cn } from "./cn";
import Icon from "./Icon";

function Stars() {
  return (
    <div className="mb-4 flex gap-0.5 text-gold" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <Icon key={i} name="star" className="h-4 w-4" />
      ))}
    </div>
  );
}

export default function TestimonialCard({
  quote,
  person,
  role,
  company,
  showStars = false,
  className,
}) {
  return (
    <figure
      className={cn(
        "flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-card",
        className
      )}
    >
      {showStars && <Stars />}
      <blockquote className="flex-1 text-sm leading-relaxed text-ink">
        {quote}
      </blockquote>
      <figcaption className="mt-4 text-sm text-muted">
        {person && <span className="font-semibold text-ink">{person}</span>}
        {role ? `, ${role}` : ""}
        {company ? ` — ${company}` : ""}
      </figcaption>
    </figure>
  );
}
