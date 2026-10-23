import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Nav from "../../../components/Nav/nav";
import Footer from "../../../components/Footer/footer";
import Container from "../../../components/ui/Container";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";
import Breadcrumb from "../../../components/ui/Breadcrumb";
import HeroAtmosphere from "../../../components/ui/HeroAtmosphere";
import TestimonialCard from "../../../components/ui/TestimonialCard";
import Accordion from "../../../components/ui/Accordion";
import Icon from "../../../components/ui/Icon";
import EmbeddedMap from "../../../components/maps/EmbeddedMap";
import PageJsonLd from "../../../components/seo/PageJsonLd";
import {
  organizationNode,
  breadcrumbList,
  serviceNode,
  faqPageNode,
  graph,
} from "../../lib/verticalSeoSchema";
import { WEB_DESIGN_CROSS_LINKS } from "../../lib/niagaraWebDesignCities";

import hero from "../../img/web-design-niagara-on-the-lake-hero.webp";
import img1 from "../../img/niagara-on-the-lake-website-design-flat-rock-cellars.png";
import img2 from "../../img/web-design-company-niagara-on-the-lake-jerrys-insulating.png";
import img3 from "../../img/niagara-on-the-lake-web-design-company-kd-flowers.png";
import img4 from "../../img/custom-website-design-niagara-on-the-lake-cass-a-bella-construction.png";
import img5 from "../../img/web-design-niagara-on-the-lake-canadian-mortgage-authority.png";
import img6 from "../../img/niagara-on-the-lake-web-design-donor-compass.png";
import test1 from "../../img/testimonial-lucas-folino-niagara.png";
import test2 from "../../img/testimonial-brandi-may-niagara.png";
import test3 from "../../img/testimonial-sandro-visca-niagara.png";

const URL_PATH = "/web-design/niagara-on-the-lake";
const CANONICAL = "https://infused.agency/web-design/niagara-on-the-lake";

const PROJECTS = [
  {
    src: img1,
    alt: "Website for Flat Rock Cellars, a winery estate on the Twenty Mile Bench in Niagara-on-the-Lake",
    caption: "Flat Rock Cellars — winery website for the Twenty Mile Bench",
  },
  {
    src: img2,
    alt: "Jerry's Insulating website by Infused Agency, for an insulation contractor in the Niagara region",
    caption: "Jerry's Insulating — home services website",
  },
  {
    src: img3,
    alt: "KD Flowers website for a boutique wedding florist in Niagara, designed by Infused Agency",
    caption: "KD Flowers — wedding florist website",
  },
  {
    src: img4,
    alt: "Cass-A-Bella Construction website presenting a Niagara custom home builder's projects",
    caption: "Cass-A-Bella Construction — builder website",
  },
  {
    src: img5,
    alt: "Canadian Mortgage Authority site by Infused Agency for Niagara mortgage brokers",
    caption: "Canadian Mortgage Authority — brokerage website",
  },
  {
    src: img6,
    alt: "Donor Compass website for a donor-data platform used by nonprofits across North America",
    caption: "Donor Compass — donor-data platform website",
  },
];

const SERVICES = [
  {
    title: "Designed around tasting-room and wedding traffic",
    body: "Winery and hospitality sites are judged on imagery and clarity: what you pour, when the tasting room is open, what a visit costs, and how to book — whether that is a table, a tour or a wedding. We plan pages so a guest planning a weekend finds all of that without digging.",
  },
  {
    title: "Heritage storefronts, modern websites",
    body: "A shop on Queen Street trades on character, and the website should carry the same impression. We design from scratch around your brand — no stock template — so the site feels like your business rather than a generic frame with your logo dropped in.",
  },
  {
    title: "Booking and enquiry flows",
    body: "Accommodations, tours and event venues get booking and enquiry flows that keep friction low. Trades and offices get short contact forms and one-tap phone numbers, so nobody has to hunt for how to reach you.",
  },
  {
    title: "WordPress you can update yourself",
    body: "When a site needs a content management system we usually build on WordPress, and we show you how to update pages, photos and seasonal details yourself. Tasting hours changed for the weekend? You should be able to fix that in minutes.",
  },
  {
    title: "Online stores for bottles and goods",
    body: "Product businesses — wine clubs, retail shops, anything you ship or hand over — get e-commerce stores on Shopify or WooCommerce with carts and checkout set up properly and easy for you to manage.",
  },
  {
    title: "Built for search from the first page",
    body: "Every build includes the search groundwork: fast load times, mobile optimization, clean structure and schema markup. That foundation is what lets your pages appear in Google and what AI search tools draw from when someone asks about wineries, lodging or shops in Niagara-on-the-Lake.",
  },
];

const FAQS = [
  {
    q: "What does a website cost for a Niagara-on-the-Lake business?",
    a: "Every project is quoted individually, because no two businesses need the same site. The cost moves with the size of the site, the features involved — a store, bookings, forms, galleries — how ready your content is, and whether you want us to write the words as well. A free consultation comes first, then a written quote that spells out what you are paying for. Nothing starts until you approve it, and the consultation itself costs nothing.",
  },
  {
    q: "How does a project work if I am in Niagara-on-the-Lake and you are in St. Catharines?",
    a: "Easily — we are a short drive apart. We can meet at your winery, shop or office, or at our St. Catharines office, and continue from there by phone, email and video call. Plenty of our projects run entirely remotely; the process, the written quote and the design reviews work the same either way.",
  },
  {
    q: "Do you handle search optimization too, or just the design?",
    a: "We handle both. Every website we build carries on-page search foundations — fast pages, mobile optimization, clean structure and schema markup. After launch, businesses that want to keep growing in Google, the map results and AI search tools can continue with our dedicated SEO services. Some clients stop at the website, and that is a perfectly good outcome.",
  },
  {
    q: "Can you rebuild my current site without losing what it has earned in search?",
    a: "Usually yes, and protecting it is part of how we plan the work. We begin by studying what your existing pages rank for and why, keep their purpose and web addresses where we can, and set up redirects for any address that must change. No one can promise a specific position in search results, but a redesign handled carefully keeps your hard-won visibility while fixing the problems the old site carried.",
  },
];

const RELATED = [
  { label: "Web design services", href: "/web-design" },
  { label: "Our work", href: "/work" },
  { label: "Get a quote", href: "/get-a-quote" },
  { label: "SEO in Niagara-on-the-Lake", href: "/seo/niagara-on-the-lake" },
  { label: "Infused Agency home", href: "/" },
];

const schema = graph([
  organizationNode(),
  breadcrumbList([
    { name: "Home", href: "/" },
    { name: "Web Design", href: "/web-design" },
    { name: "Niagara-on-the-Lake", href: URL_PATH },
  ]),
  serviceNode({
    name: "Web Design in Niagara-on-the-Lake",
    serviceType: "Web Design",
    url: CANONICAL,
    areaServed: [
      { "@type": "City", name: "Niagara-on-the-Lake" },
      { "@type": "AdministrativeArea", name: "Niagara Region, Ontario" },
      { "@type": "Country", name: "Canada" },
    ],
    hasMap:
      "https://www.google.com/maps/search/?api=1&query=Niagara-on-the-Lake%2C%20Ontario%2C%20Canada",
  }),
  faqPageNode(FAQS, `${CANONICAL}#faq`),
]);

const NiagaraOnTheLakeWebDesign = () => {
  return (
    <>
      <Head>
        <title>
          Web Design Company in Niagara-on-the-Lake | Infused Agency
        </title>
        <meta
          name="description"
          content="Niagara-on-the-Lake web design company creating fast, mobile-friendly websites for wineries, inns, shops and trades. Book a free consultation."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:site_name" content="Infused Agency" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Web Design Company in Niagara-on-the-Lake | Infused Agency"
        />
        <meta
          property="og:description"
          content="Niagara-on-the-Lake web design company creating fast, mobile-friendly websites for wineries, inns, shops and trades. Book a free consultation."
        />
        <meta property="og:url" content={CANONICAL} />
        <meta name="twitter:card" content="summary" />
        <PageJsonLd graph={schema} />
      </Head>
      <Nav />
      <main className="redesign-root">
        <section className="relative overflow-hidden border-b border-border bg-surface pb-16 pt-28 sm:pt-32 lg:pt-36">
          <HeroAtmosphere />
          <Container className="relative">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <Breadcrumb
                  items={[
                    { name: "Home", href: "/" },
                    { name: "Web Design", href: "/web-design" },
                    { name: "Niagara-on-the-Lake" },
                  ]}
                  className="mb-8"
                />
                <h1 className="max-w-3xl text-balance font-display text-h1 font-bold leading-[1.08] tracking-[-0.02em] text-ink">
                  Niagara-on-the-Lake Web Design Company
                </h1>
                <p className="mt-6 max-w-2xl text-lead text-muted">
                  Infused Agency builds websites for the wineries, inns,
                  heritage storefronts and trades of Niagara-on-the-Lake.
                  Sites that look like the businesses behind them, load
                  quickly on a phone, and make it simple for a visitor
                  planning a trip — or a neighbour down the road — to book,
                  buy or get in touch.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="/get-a-quote" size="lg">
                    Book a free consultation
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </Button>
                  <Button href="/work" variant="secondary" size="lg">
                    See our work
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-5">
                <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                  <Image
                    src={hero}
                    alt="Web design services in Niagara-on-the-Lake by Infused Agency"
                    fill
                    priority
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover"
                  />
                </figure>
              </div>
            </div>
          </Container>
        </section>

        <Section
          eyebrow="Niagara-on-the-Lake"
          heading="Web design for Niagara-on-the-Lake businesses"
        >
          <div className="max-w-3xl space-y-4 text-lead text-muted">
            <p>
              This town sells itself on atmosphere, and the website is usually
              where that atmosphere meets someone for the first time. A couple
              planning a tasting weekend, a family choosing a bed and breakfast,
              a bride comparing venues for a winery wedding — they arrive with
              questions about what is open, what it costs and how to book, and
              they often have a browser tab open beside yours. The businesses
              that win here answer those questions beautifully, on a phone,
              before the visitor moves on.
            </p>
            <p>
              Behind the tourism economy sits a quieter one: the trades and
              services that keep heritage houses, storefronts and properties
              in this town working. Those businesses need their own kind of
              site — plain descriptions of the work, areas served, and a way
              to reach a real person quickly. Whatever side of
              Niagara-on-the-Lake you are on, the website has one job: turn
              the people already looking for you into conversations.
            </p>
          </div>
        </Section>

        <Section
          className="border-y border-border bg-surface/40"
          eyebrow="Where we work"
          heading="Where we work in Niagara-on-the-Lake"
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted">
              <p>
                We are based in St. Catharines and work with businesses across
                Niagara-on-the-Lake — from the wineries along the benches to
                the shops and offices in town. We can meet at your place or
                ours in person, or run the entire project by phone, email and
                video call if that suits your season better.
              </p>
            </div>
            <EmbeddedMap
              place="Niagara-on-the-Lake, Ontario, Canada"
              zoom={13}
              title="Map of Niagara-on-the-Lake, Ontario"
              className="shadow-card"
            />
          </div>
        </Section>

        <Section
          eyebrow="Recent projects"
          heading="Websites we have designed and built"
          subhead="Sites for Niagara businesses and organizations, including a winery on the Twenty Mile Bench. Each image links to our work page."
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <Link
                key={project.caption}
                href="/work"
                className="group overflow-hidden rounded-xl border border-border bg-card shadow-card card-lift"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-300 ease-smooth group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <p className="border-t border-border px-5 py-4 text-sm text-muted">
                  {project.caption}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/work" variant="secondary">
              See more of our work
              <Icon name="arrow-right" className="h-4 w-4" />
            </Button>
          </div>
        </Section>

        <Section
          className="border-t border-border"
          eyebrow="What you get"
          heading="What a Niagara-on-the-Lake website includes"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {SERVICES.map((service) => (
              <Card key={service.title} className="flex h-full flex-col">
                <h3 className="font-display text-lg font-bold text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.body}
                </p>
              </Card>
            ))}
          </div>
          <div className="max-w-3xl space-y-4 pt-10 text-base leading-relaxed text-muted">
            <p>
              Every project starts with a free consultation — a conversation
              about what you sell, who visits and what the site has to
              accomplish. We follow it with a written quote built around your
              actual needs, then design and build with you in the loop at each
              stage. You see the design&rsquo;s direction early, your feedback
              shapes it, and if you would rather not write the content
              yourself, we can do that for you at an additional cost.
            </p>
            <p>
              The whole path, from first call to launch day, is laid out on
              our{" "}
              <Link
                href="/web-design"
                className="font-semibold text-accent transition-colors hover:text-accent-hover"
              >
                web design services
              </Link>{" "}
              page.
            </p>
          </div>
        </Section>

        <Section
          className="border-y border-border bg-surface/40"
          eyebrow="Keeping your rankings"
          heading="Redesigning a Niagara-on-the-Lake website without losing rankings"
        >
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted">
            <p>
              Long-established businesses here often have websites that have
              quietly accumulated something valuable: rankings for the searches
              that matter to them. The fear behind every redesign conversation
              is losing that. The reassuring part is that a redesign does not
              require it — search engines care about what your pages say and
              how they are structured, and both travel into a new design
              on purpose.
            </p>
            <p>
              We map what your current site is found for before we change
              anything, keep the web addresses of working pages wherever
              possible, and use redirects when an address genuinely has to
              move. That combination is what protects the traffic that already
              pays for itself. For businesses whose busiest months are fixed
              by the seasons, the work can also be planned so the site never
              changes during the weeks you can least afford disruption.
            </p>
            <p>
              Redesigns are also when the slow pages, buried details and
              hard-to-find contact information of an old site get repaired —
              and those repairs tend to help your visibility rather than hurt
              it. If you want a straight answer about what a rebuild would
              mean for your current rankings before committing, book a
              consultation; we will look at your existing site and tell you
              what we see.
            </p>
          </div>
        </Section>

        <Section
          heading="What it is like to work with us"
          subhead="A few words from businesses we have worked with, in their own words."
        >
          <div className="grid gap-6 md:grid-cols-3">
            <TestimonialCard
              showStars
              avatar={test1}
              avatarAlt="Lucas Folino, owner of Fred's Concrete, a Niagara client of Infused Agency"
              quote="Infused Agency got me a lot more visibility through Google in a short period of time. Which has led to a ton of leads for my business. Very knowledgeable and they walk you through every detail. Would definitely recommend!"
              person="Lucas Folino"
              role="Owner"
              company="Fred's Concrete"
            />
            <TestimonialCard
              showStars
              avatar={test2}
              avatarAlt="Brandi May, owner of Brandi May Psychotherapy, a Niagara client of Infused Agency"
              quote="Infused Agency are not only clear professionals and expert in their fields, but are extremely personable to work with. I would definitely recommend Infused Agency to anyone looking to optimize SEO!"
              person="Brandi May"
              role="Owner"
              company="Brandi May Psychotherapy"
            />
            <TestimonialCard
              showStars
              avatar={test3}
              avatarAlt="Sandro Visca, owner of VISCA Electric, a Niagara client of Infused Agency"
              quote="Working with Infused Agency was a pleasure. They were extremely responsive and informative from start to finish. Infused Agency is creative, efficient, and very knowledgeable in their field."
              person="Sandro Visca"
              role="Owner"
              company="VISCA Electric"
            />
          </div>
        </Section>

        <Section
          className="border-t border-border"
          heading="Frequently asked questions"
        >
          <Accordion items={FAQS} className="max-w-3xl" />
        </Section>

        <Section
          className="border-y border-border bg-surface/40"
          eyebrow="Across the region"
          heading="Web design across Niagara"
        >
          <p className="max-w-3xl text-base leading-relaxed text-muted">
            Niagara-on-the-Lake is one corner of a region we build for
            throughout — including neighbouring{" "}
            <Link
              href="/web-design/niagara-falls"
              className="font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              Niagara Falls
            </Link>{" "}
            and the wine-country community of{" "}
            <Link
              href="/web-design/beamsville"
              className="font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              Beamsville
            </Link>
            . The full list of our Niagara web design pages is below.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {WEB_DESIGN_CROSS_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent/40 hover:text-ink"
                >
                  <Icon name="map-pin" className="h-4 w-4 text-accent" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        <Section eyebrow="Keep exploring" heading="Related pages">
          <ul className="flex flex-wrap gap-3">
            {RELATED.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent/40 hover:text-ink"
                >
                  {link.label}
                  <Icon name="arrow-right" className="h-4 w-4" />
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-warm-gradient px-6 py-14 text-center shadow-lift sm:px-12 sm:py-16">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-grid opacity-20"
            />
            <div className="relative flex flex-col items-center">
              <h2 className="text-balance font-display text-h2 font-bold leading-[1.12] tracking-[-0.02em] text-white">
                Let&rsquo;s build something for{" "}
                <span className="text-gold-bright">your business</span>
              </h2>
              <p className="mt-4 text-lead text-contrast-ink/90">
                Tell us about your winery, inn, shop or trade, and what your
                website should be doing for it. We will map out what the
                project needs — no obligation, no jargon.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/get-a-quote" size="lg">
                  Get your free quote
                  <Icon name="arrow-right" className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default NiagaraOnTheLakeWebDesign;
