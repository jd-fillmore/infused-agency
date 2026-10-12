import React from "react";
import Link from "next/link";

import Container from "../ui/Container";
import Icon from "../ui/Icon";
import { GROUPS } from "../Nav/navData";

const CITIES = [
  { name: "Beamsville", href: "/seo/beamsville" },
  { name: "Crystal Beach", href: "/seo/crystal-beach" },
  { name: "Fonthill", href: "/seo/fonthill" },
  { name: "Fort Erie", href: "/seo/fort-erie" },
  { name: "Grimsby", href: "/seo/grimsby" },
  { name: "Niagara Falls", href: "/seo/niagara-falls" },
  { name: "Niagara-on-the-Lake", href: "/seo/niagara-on-the-lake" },
  { name: "Port Colborne", href: "/seo/port-colborne" },
  { name: "St. Catharines", href: "/seo/st-catharines" },
  { name: "Thorold", href: "/seo/thorold" },
  { name: "Welland", href: "/seo/welland" },
];

const COMPANY = [
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Sitemap", href: "/sitemap" },
];

const SOCIAL_ICONS = {
  Facebook: "facebook",
  Instagram: "instagram",
  LinkedIn: "linkedin",
};

const SOCIAL = [
  { platform: "Instagram", url: "https://www.instagram.com/infusedweb/" },
  { platform: "Facebook", url: "https://www.facebook.com/infused.agency" },
  { platform: "LinkedIn", url: "https://linkedin.com/company/infused-agency" },
];

function ColumnHeading({ children }) {
  return (
    <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-contrast-ink/60">
      {children}
    </h3>
  );
}

function FooterLink({ href, children, onClick }) {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className="block py-1 text-sm text-contrast-ink/80 transition-colors hover:text-white"
      >
        {children}
      </Link>
    </li>
  );
}

export default function Footer() {
  return (
<footer className="border-t border-white/10 bg-contrast text-contrast-ink">
        <a
          href="tel:+19059333115"
          aria-hidden="true"
          tabIndex={-1}
          className="pointer-events-none absolute -left-[9999px] top-0 h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 text-transparent"
        >
          (905) 933-3115
        </a>
        <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-baseline" aria-label="Infused Agency home">
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                infused
                <span className="text-gold-bright">.</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-contrast-ink/70">
              Infused is a boutique local SEO &amp; AI search company helping
              Niagara businesses get found on Google and AI search tools like
              ChatGPT &amp; Gemini.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {SOCIAL.map((item) => (
                <a
                  key={item.platform}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.platform}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-contrast-ink/80 transition-colors hover:border-white/40 hover:text-white"
                >
                  <Icon
                    name={SOCIAL_ICONS[item.platform] || "globe"}
                    className="h-4 w-4"
                  />
                </a>
              ))}
            </div>
            <p className="mt-6 max-w-xs text-xs leading-relaxed text-contrast-ink/60">
              Recognised at: Google Partner · Three Best Rated · GoodFirms ·
              DesignRush
            </p>
          </div>

          <div className="lg:col-span-3">
            <ColumnHeading>Services</ColumnHeading>
            <div className="space-y-4">
              {GROUPS.map((group) => (
                <div key={group.heading}>
                  <p className="mb-1 text-xs font-medium text-contrast-ink/60">
                    {group.heading}
                  </p>
                  <ul>
                    {group.links.slice(0, 4).map((link) => (
                      <FooterLink key={link.url} href={link.url}>
                        {link.name}
                      </FooterLink>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <ColumnHeading>Niagara cities</ColumnHeading>
            <ul>
              {CITIES.map((city) => (
                <FooterLink key={city.href} href={city.href}>
                  {city.name}
                </FooterLink>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <ColumnHeading>Company</ColumnHeading>
            <ul>
              {COMPANY.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.name}
                </FooterLink>
              ))}
            </ul>

            <div className="mt-6">
              <ColumnHeading>Contact</ColumnHeading>
              <ul className="space-y-2 text-sm text-contrast-ink/70">
                <li>73 Alexandra Blvd, St. Catharines, ON L2P 1K2</li>
                <li>Mon&ndash;Fri, 9 a.m.&ndash;6 p.m.</li>
              </ul>
              <Link
                href="/get-a-quote"
                className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-bright transition-colors hover:text-white"
              >
                Get a free quote
                <Icon name="arrow-right" className="arrow-nudge h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-xs text-contrast-ink/60 sm:flex-row sm:items-center sm:justify-between">
          <p>Infused Agency &mdash; SEO in Niagara since 2013.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/get-a-quote" className="transition-colors hover:text-white">
              Get a Quote
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
