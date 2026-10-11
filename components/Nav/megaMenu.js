import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { GROUPS, INDUSTRIES } from "./navData";
import Container from "../ui/Container";
import Icon from "../ui/Icon";

const OPEN_DELAY = 60;
const CLOSE_DELAY = 160;

const MegaMenu = () => {
  const [open, setOpen] = useState(false);
  const openTimer = useRef(null);
  const closeTimer = useRef(null);
  const rootRef = useRef(null);
  const triggerRef = useRef(null);

  const clearTimers = useCallback(() => {
    if (openTimer.current) clearTimeout(openTimer.current);
    if (closeTimer.current) clearTimeout(closeTimer.current);
    openTimer.current = null;
    closeTimer.current = null;
  }, []);

  useEffect(() => clearTimers, [clearTimers]);

  const openSoon = useCallback(() => {
    clearTimers();
    openTimer.current = setTimeout(() => setOpen(true), OPEN_DELAY);
  }, [clearTimers]);

  const openNow = useCallback(() => {
    clearTimers();
    setOpen(true);
  }, [clearTimers]);

  const closeSoon = useCallback(() => {
    clearTimers();
    closeTimer.current = setTimeout(() => setOpen(false), CLOSE_DELAY);
  }, [clearTimers]);

  const closeNow = useCallback(() => {
    clearTimers();
    setOpen(false);
  }, [clearTimers]);

  const onKeyDown = (event) => {
    if (event.key === "Escape" && open) {
      event.stopPropagation();
      closeNow();
      if (triggerRef.current) triggerRef.current.focus();
    }
  };

  const onBlur = (event) => {
    if (!rootRef.current || !rootRef.current.contains(event.relatedTarget)) {
      closeNow();
    }
  };

  const onTriggerClick = (event) => {
    const touch =
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(hover: none)").matches;
    if (touch && !open) {
      event.preventDefault();
      clearTimers();
      setOpen(true);
    }
  };

  return (
    <div
      ref={rootRef}
      className="static"
      onMouseEnter={openSoon}
      onMouseLeave={closeSoon}
      onFocus={openNow}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
    >
      <Link
        ref={triggerRef}
        href="/services"
        className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-white/5 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={onTriggerClick}
      >
        Solutions
        <Icon
          name="chevron"
          className={`h-4 w-4 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </Link>

      <div
        className={`absolute inset-x-0 top-full z-mega origin-top border-b border-border bg-surface/98 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)] backdrop-blur-md transition opacity-0 ${
          open ? "visible opacity-100" : "invisible"
        }`}
      >
        <Container className="py-5">
          <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
            {GROUPS.map((group) => (
              <div key={group.heading}>
                <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                  {group.heading}
                </p>
                <ul className="space-y-0.5">
                  {group.links.map((link) => (
                    <li key={link.url}>
                      <Link
                        href={link.url}
                        className="block rounded-md px-2 py-1 text-[13px] font-medium text-ink transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {INDUSTRIES.length > 0 && (
            <div className="mt-3 border-t border-border pt-3">
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                SEO by industry
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-0.5">
                {INDUSTRIES.map((link) => (
                  <li key={link.url}>
                    <Link
                      href={link.url}
                      className="block rounded-md px-2 py-1 text-[13px] font-medium text-ink transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

export default MegaMenu;
