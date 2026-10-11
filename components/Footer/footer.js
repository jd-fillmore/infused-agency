import React from "react";
import Link from "next/link";
import Image from "next/image";

import awards from "../../src/img/awards.png";
import Container from "../ui/Container";
import Icon from "../ui/Icon";
import { GROUPS, INDUSTRIES } from "../Nav/navData";

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
    <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
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
        className="block py-1 text-sm text-muted transition-colors hover:text-ink"
      >
        {children}
      </Link>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center" aria-label="Infused Agency home">
              <span className="font-display text-2xl font-bold text-ink">
                Infused Agency
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
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
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-accent/40 hover:text-accent"
                >
                  <Icon
                    name={SOCIAL_ICONS[item.platform] || "globe"}
                    className="h-4 w-4"
                  />
                </a>
              ))}
            </div>
            <Image
              className="mt-6 h-auto w-40"
              src={awards}
              alt="Infused Agency awards and affiliations"
            />
          </div>

          <div className="lg:col-span-3">
            <ColumnHeading>Services</ColumnHeading>
            <div className="space-y-4">
              {GROUPS.map((group) => (
                <div key={group.heading}>
                  <p className="mb-1 text-xs font-medium text-ink/70">
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
            <ColumnHeading>Industries</ColumnHeading>
            <ul>
              {INDUSTRIES.map((link) => (
                <FooterLink key={link.url} href={link.url}>
                  {link.name}
                </FooterLink>
              ))}
            </ul>

            <div className="mt-6">
              <ColumnHeading>Niagara cities</ColumnHeading>
              <ul>
                {CITIES.map((city) => (
                  <FooterLink key={city.href} href={city.href}>
                    {city.name}
                  </FooterLink>
                ))}
              </ul>
            </div>
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
              <ul className="space-y-2 text-sm text-muted">
                <li>73 Alexandra Blvd, St. Catharines, ON L2P 1K2</li>
                <li>
                  <a
                    href="tel:+19059333115"
                    className="transition-colors hover:text-ink"
                  >
                    (905) 933-3115
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@infused.agency"
                    className="transition-colors hover:text-ink"
                  >
                    info@infused.agency
                  </a>
                </li>
                <li>Mon&ndash;Fri, 9 a.m.&ndash;6 p.m.</li>
              </ul>
              <Link
                href="/get-a-quote"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
              >
                Get a free quote
                <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col gap-3 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>Infused Agency &mdash; SEO in Niagara since 2013.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="transition-colors hover:text-ink">
              Privacy Policy
            </Link>
            <Link href="/get-a-quote" className="transition-colors hover:text-ink">
              Get a Quote
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
