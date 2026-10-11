import React from "react";
import { cn } from "./cn";
import Icon from "./Icon";

export default function Accordion({ items = [], className }) {
  return (
    <div
      className={cn(
        "divide-y divide-border overflow-hidden rounded-xl border border-border bg-card",
        className
      )}
    >
      {items.map((item, index) => (
        <details key={item.q || index} className="group px-5 py-4">
          <summary className="summary-none flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-ink">
            <span>{item.q}</span>
            <Icon
              name="chevron"
              className="h-5 w-5 shrink-0 text-accent transition-transform duration-200 group-open:rotate-180"
            />
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
