import React from "react";
import { cn } from "./cn";
import Container from "./Container";

export default function Section({
  as: Tag = "section",
  id,
  eyebrow,
  heading,
  headingAs: HeadingTag = "h2",
  headingId,
  subhead,
  align = "left",
  className,
  headerClassName,
  bodyClassName,
  children,
  ...rest
}) {
  const hasHeader = Boolean(eyebrow || heading || subhead);
  return (
    <Tag id={id} className={cn("py-16 sm:py-20 lg:py-24", className)} {...rest}>
      <Container>
        {hasHeader && (
          <header
            className={cn(
              "max-w-3xl",
              align === "center" && "mx-auto text-center",
              headerClassName
            )}
          >
            {eyebrow && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                {eyebrow}
              </p>
            )}
            {heading && (
              <HeadingTag
                id={headingId}
                className="text-balance font-display text-h2 font-bold text-ink"
              >
                {heading}
              </HeadingTag>
            )}
            {subhead && (
              <p className="mt-4 text-lead text-muted">{subhead}</p>
            )}
          </header>
        )}
        {children && (
          <div className={cn(hasHeader && "mt-10", bodyClassName)}>
            {children}
          </div>
        )}
      </Container>
    </Tag>
  );
}
