import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { GROUPS, INDUSTRIES } from "./navData";
import Container from "../ui/Container";
import Icon from "../ui/Icon";

const OPEN_DELAY = 60;
const CLOSE_DELAY = 160;
const VISIBLE_INDUSTRIES = 8;

const MegaMenu = () => {
  const [open, setOpen] = useState(false);
  const [industriesExpanded, setIndustriesExpanded] = useState(false);
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
    setIndustriesExpanded(false);
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
        className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-surface hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={onTriggerClick}
      >
        Solutions
        <Icon
          name="chevron"
          className={`h-4 w-4 transition-transform duration-200 ease-smooth ${
            open ? "rotate-180" : ""
          }`}
        />
      </Link>

      <div
        className={`absolute inset-x-0 top-full z-mega origin-top border-b border-border bg-surface shadow-[0_24px_60px_-24px_rgba(22,27,51,0.28)] backdrop-blur-md transition-[opacity,transform] duration-200 ease-smooth ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
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
                        className="block rounded-md px-2 py-1 text-[13px] font-medium text-ink transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
                {(industriesExpanded
                  ? INDUSTRIES
                  : INDUSTRIES.slice(0, VISIBLE_INDUSTRIES)
                ).map((link) => (
                  <li key={link.url}>
                    <Link
                      href={link.url}
                      className="block rounded-md px-2 py-1 text-[13px] font-medium text-ink transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              {INDUSTRIES.length > VISIBLE_INDUSTRIES && (
                <button
                  type="button"
                  onClick={() => setIndustriesExpanded((prev) => !prev)}
                  aria-expanded={industriesExpanded}
                  className="mt-1.5 inline-flex items-center gap-1 rounded-md px-2 py-1 text-[13px] font-semibold text-accent transition-colors hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {industriesExpanded
                    ? "Show less"
                    : `View all industries (${INDUSTRIES.length})`}
                  <Icon
                    name="chevron"
                    className={`h-3.5 w-3.5 transition-transform duration-200 ease-smooth ${
                      industriesExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>
              )}
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

export default MegaMenu;
