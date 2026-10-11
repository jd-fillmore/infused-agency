import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { GROUPS, INDUSTRIES, DESCRIPTIONS } from "./navData";
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
        <Container className="grid gap-x-8 gap-y-6 py-8 sm:grid-cols-2 lg:grid-cols-5">
          {GROUPS.map((group) => (
            <div key={group.heading}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                {group.heading}
              </p>
              <ul className="space-y-1">
                {group.links.map((link) => (
                  <li key={link.url}>
                    <Link
                      href={link.url}
                      className="block rounded-md px-2 py-1.5 transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <span className="text-sm font-medium text-ink">
                        {link.name}
                      </span>
                      {DESCRIPTIONS[link.url] && (
                        <span className="mt-0.5 block text-xs leading-snug text-muted">
                          {DESCRIPTIONS[link.url]}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {INDUSTRIES.length > 0 && (
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                SEO by industry
              </p>
              <ul className="space-y-1">
                {INDUSTRIES.map((link) => (
                  <li key={link.url}>
                    <Link
                      href={link.url}
                      className="block rounded-md px-2 py-1.5 text-sm font-medium text-ink transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="border-gradient rounded-xl p-5 sm:col-span-2 lg:col-span-1">
            <p className="font-display text-lg font-bold text-ink">
              Not sure where to start?
            </p>
            <p className="mt-2 text-sm leading-snug text-muted">
              Tell us your goals and we&rsquo;ll map the right mix of SEO,
              content and web work.
            </p>
            <Link
              href="/get-a-quote"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              Get a free quote
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MegaMenu;
