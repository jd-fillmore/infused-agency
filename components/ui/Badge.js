import React from "react";
import { cn } from "./cn";

const TONES = {
  accent: "border-accent/30 bg-accent/10 text-accent",
  muted: "border-border bg-surface text-muted",
  gold: "border-gold/30 bg-gold/10 text-gold",
};

export default function Badge({
  as: Tag = "span",
  tone = "accent",
  className,
  children,
  ...rest
}) {
  return (
    <Tag
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold",
        TONES[tone],
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
