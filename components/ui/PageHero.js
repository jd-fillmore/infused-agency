import React from "react";
import { cn } from "./cn";
import Container from "./Container";
import Breadcrumb from "./Breadcrumb";
import Button from "./Button";

export default function PageHero({
  title,
  description,
  breadcrumbs,
  cta = true,
  ctaHref = "/get-a-quote",
  ctaLabel = "Get Free Quote",
  className,
  children,
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border bg-surface pb-16 pt-28 sm:pt-32 lg:pt-36",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 glow-radial"
        aria-hidden="true"
      />
      <Container className="relative">
        {breadcrumbs && breadcrumbs.length ? (
          <Breadcrumb items={breadcrumbs} className="mb-8" />
        ) : null}
        <h1 className="max-w-4xl text-balance font-display text-h1 font-bold leading-[1.08] tracking-[-0.02em] text-ink">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-lead text-muted">{description}</p>
        ) : null}
        {children}
        {cta ? (
          <Button href={ctaHref} size="lg" className="mt-8">
            {ctaLabel}
          </Button>
        ) : null}
      </Container>
    </section>
  );
}
