import React from "react";
import Link from "next/link";
import { cn } from "./cn";
import Icon from "./Icon";

export default function ServiceCard({
  href,
  number,
  title,
  description,
  className,
}) {
  const body = (
    <>
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-brand-gradient opacity-80"
      />
      <div className="flex items-center justify-between">
        {number != null && (
          <span className="font-display text-2xl font-bold text-brand-gradient">
            {number}
          </span>
        )}
        {href && (
          <Icon
            name="arrow-right"
            className="h-5 w-5 text-muted transition-colors group-hover:translate-x-0.5 group-hover:text-accent"
          />
        )}
      </div>
      <h3 className="mt-3 text-lg font-semibold text-ink">{title}</h3>
      {description && (
        <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      )}
    </>
  );

  const classes = cn(
    "group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card p-6 shadow-card card-lift",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {body}
      </Link>
    );
  }
  return <div className={classes}>{body}</div>;
}
