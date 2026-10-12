import React from "react";
import { cn } from "./cn";

export default function Card({
  as: Tag = "div",
  glow = false,
  gradient = false,
  interactive = false,
  className,
  children,
  ...rest
}) {
  return (
    <Tag
      className={cn(
        "rounded-xl border border-border bg-card p-6 shadow-card",
        gradient && "border-gradient",
        interactive &&
          "transition-transform duration-200 hover:-translate-y-1 hover:border-border-strong",
        glow && "ring-1 ring-accent/30 shadow-glow",
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
