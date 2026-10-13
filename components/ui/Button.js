import React from "react";
import Link from "next/link";
import { cn } from "./cn";

const VARIANTS = {
  primary:
    "bg-accent text-accent-contrast shadow-card hover:bg-accent-hover hover:shadow-lift",
  secondary:
    "border border-border-strong bg-card text-ink hover:border-accent hover:text-accent",
  ghost: "bg-transparent text-ink hover:bg-surface",
};

const SIZES = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-smooth hover:-translate-y-0.5 active:translate-y-0 active:duration-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base disabled:opacity-60 disabled:hover:translate-y-0",
    VARIANTS[variant],
    SIZES[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
