import React from "react";
import Image from "next/image";
import { cn } from "./cn";
import Icon from "./Icon";

function Stars() {
  return (
    <div className="mb-4 flex gap-0.5 text-gold" aria-label="5 out of 5 stars">
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
  avatar,
  avatarAlt,
  showStars = false,
  className,
}) {
  const hasMeta = person || role || company;
  return (
    <figure
      className={cn(
        "flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-card card-lift",
        className
      )}
    >
      {showStars && <Stars />}
      <blockquote className="flex-1 text-sm leading-relaxed text-ink">
        {quote}
      </blockquote>
      {hasMeta && (
        <figcaption className="mt-5 flex items-center gap-3">
          {avatar && (
            <Image
              src={avatar}
              alt={avatarAlt || person || ""}
              width={48}
              height={48}
              className="h-12 w-12 shrink-0 rounded-full border border-border object-cover"
            />
          )}
          <span className="text-sm text-muted">
            {person && <span className="font-semibold text-ink">{person}</span>}
            {role ? `, ${role}` : ""}
            {company ? ` — ${company}` : ""}
          </span>
        </figcaption>
      )}
    </figure>
  );
}
