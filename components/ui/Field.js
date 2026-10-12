import React from "react";
import { cn } from "./cn";

export const inputClasses =
  "w-full rounded-lg border border-border-strong bg-white/5 px-4 py-2.5 text-sm text-ink placeholder:text-muted/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40";

export const labelClasses = "mb-1.5 block text-sm font-medium text-ink";

export function Field({ label, id, hint, error, className, children }) {
  return (
    <div className={cn("w-full", className)}>
      {label && (
        <label htmlFor={id} className={labelClasses}>
          {label}
        </label>
      )}
      {children}
      {hint && !error && <p className="mt-1.5 text-xs text-muted">{hint}</p>}
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}

export default Field;
