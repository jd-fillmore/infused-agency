import React from "react";
import { cn } from "./cn";

export default function StatBlock({ value, label, className }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card p-6 text-center shadow-card",
        className
      )}
    >
      <div className="font-display text-4xl font-bold text-gold">{value}</div>
      {label && <div className="mt-2 text-sm text-muted">{label}</div>}
    </div>
  );
}
