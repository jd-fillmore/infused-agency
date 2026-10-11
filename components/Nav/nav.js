import React, { useEffect, useState } from "react";
import Link from "next/link";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import TopBar from "./topBar";
import MegaMenu from "./megaMenu";
import { GROUPS, INDUSTRIES } from "./navData";

const LINKS = [
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const closeMobile = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-header w-full border-b transition-colors ${
        scrolled
          ? "border-border bg-base/90 backdrop-blur-md"
          : "border-transparent bg-base/70 backdrop-blur-sm"
      }`}
    >
      <TopBar />
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            aria-label="Infused Agency home"
            className="flex items-baseline font-display text-2xl font-bold tracking-tight text-ink transition-opacity hover:opacity-80"
          >
            infused
            <span className="text-accent">.</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            <MegaMenu />
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-white/5 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {link.name}
              </Link>
            ))}
            <Button href="/get-a-quote" className="ml-2">
              Get a quote
            </Button>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </Container>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-base/98 backdrop-blur-md lg:hidden"
        >
          <Container className="max-h-[calc(100vh-8rem)] overflow-y-auto py-5">
            <nav aria-label="Mobile" className="flex flex-col gap-5">
              {GROUPS.map((group) => (
                <div key={group.heading}>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                    {group.heading}
                  </p>
                  <ul className="space-y-0.5">
                    {group.links.map((link) => (
                      <li key={link.url}>
                        <Link
                          href={link.url}
                          onClick={closeMobile}
                          className="block rounded-md px-2 py-2 text-sm font-medium text-ink hover:bg-white/5"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {INDUSTRIES.length > 0 && (
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                    SEO by industry
                  </p>
                  <ul className="space-y-0.5">
                    {INDUSTRIES.map((link) => (
                      <li key={link.url}>
                        <Link
                          href={link.url}
                          onClick={closeMobile}
                          className="block rounded-md px-2 py-2 text-sm font-medium text-ink hover:bg-white/5"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-col gap-0.5 border-t border-border pt-4">
                {LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobile}
                    className="rounded-md px-2 py-2 text-sm font-medium text-ink hover:bg-white/5"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <Button
                href="/get-a-quote"
                onClick={closeMobile}
                className="w-full"
              >
                Get a quote
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
