import React from "react";
import Link from "next/link";
import { cn } from "./cn";
import Icon from "./Icon";

export default function Breadcrumb({ items = [], className }) {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm", className)}>
      <ol className="flex flex-wrap items-center gap-2 text-muted">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li
              key={item.href || item.name}
              className="flex items-center gap-2"
            >
              {index > 0 && (
                <Icon
                  name="chevron"
                  className="h-4 w-4 -rotate-90 text-border-strong"
                />
              )}
              {last || !item.href ? (
                <span aria-current="page" className="text-ink">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-accent">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
