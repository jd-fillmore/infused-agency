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

import hero from "../../img/web-design-fort-erie-hero.webp";
import img1 from "../../img/fort-erie-web-design-company-kd-flowers.png";
import img2 from "../../img/custom-website-design-fort-erie-cass-a-bella-construction.png";
import img3 from "../../img/web-design-fort-erie-canadian-mortgage-authority.png";
import img4 from "../../img/fort-erie-web-design-donor-compass.png";
import img5 from "../../img/fort-erie-website-design-ggs-niagara-landscaping.png";
import img6 from "../../img/web-design-company-fort-erie-lincoln-medical-centre.png";
import test1 from "../../img/testimonial-lucas-folino-niagara.png";
import test2 from "../../img/testimonial-brandi-may-niagara.png";
import test3 from "../../img/testimonial-sandro-visca-niagara.png";

const URL_PATH = "/web-design/fort-erie";
const CANONICAL = "https://infused.agency/web-design/fort-erie";

const PROJECTS = [
  {
    src: img1,
    alt: "KD Flowers website by Infused Agency for a Niagara wedding florist",
    caption: "KD Flowers — wedding florist website",
  },
  {
    src: img2,
    alt: "Website for Cass-A-Bella Construction, a custom home builder working in Niagara",
    caption: "Cass-A-Bella Construction — custom builder website",
  },
  {
    src: img3,
    alt: "Canadian Mortgage Authority website designed by Infused Agency for Niagara mortgage brokers",
    caption: "Canadian Mortgage Authority — mortgage brokerage website",
  },
  {
    src: img4,
    alt: "Donor Compass website by Infused Agency for a nonprofit donor-data platform",
    caption: "Donor Compass — donor-data platform website",
  },
  {
    src: img5,
    alt: "GGS Niagara Landscaping site by Infused Agency showing landscape work for a Niagara company",
    caption: "GGS Niagara Landscaping — landscaping company website",
  },
  {
    src: img6,
    alt: "Lincoln Medical Centre website by Infused Agency for a family physician team in Niagara",
    caption: "Lincoln Medical Centre — family medical practice website",
  },
];

const SERVICES = [
  {
    title: "Built for a two-country audience",
    body: "A Fort Erie business can have customers arriving from Buffalo and from Niagara Falls in the same afternoon. Your site should work for both: clear about what you offer and where you are, easy to reach by phone, and fast enough that someone deciding at the border does not give up waiting.",
  },
  {
    title: "Custom design around your business",
    body: "We start from your brand and your customers, not from a template someone else designed for a different trade. Pages, layout and calls to action are planned for how the people you want actually search and decide.",
  },
  {
    title: "Pages for the communities you serve",
    body: "Fort Erie businesses often sell into the lakeshore communities and the wider region at once. We structure sites so every area you serve has a home on the site — the beach, the town, the region — without any of it feeling padded.",
  },
  {
    title: "WordPress you can maintain yourself",
    body: "Most of our content-managed sites are WordPress, and before launch we walk you through updating pages, posts and photos. Small changes stay in your hands instead of sitting in a developer&rsquo;s queue.",
  },
  {
    title: "Online stores on Shopify and WooCommerce",
    body: "For product businesses we design and build stores with product pages, carts and checkout that are quick for customers and straightforward for you to run — whether your goods are handed over locally or shipped out.",
  },
  {
    title: "Search groundwork on every launch",
    body: "Clean structure, fast load times, mobile optimization and schema markup come standard on everything we build. That is what helps your pages get found on Google — and what AI assistants draw from when people ask about your kind of business here.",
  },
];

const FAQS = [
  {
    q: "How much does a website cost for a Fort Erie business?",
    a: "Pricing depends on the project, not on a menu. The factors that move it: the size of the site, the features you need — stores, booking, forms, galleries — how much content is ready, and whether you want us to write that content. After a free consultation we send a written quote covering exactly what your project involves. No charge for the consultation, no obligation to proceed.",
  },
  {
    q: "Can you serve Fort Erie in person, or only remotely?",
    a: "In person is easy — our office is in St. Catharines, about half an hour up the highway, and we are glad to meet at your business. Remote works too, and many projects run entirely by phone, email and video call. Either way you get the same written quote and the same involvement in the design.",
  },
  {
    q: "Do you handle SEO for Fort Erie businesses as well as web design?",
    a: "Yes. Every website we build carries on-page search foundations — fast pages, clean structure, schema markup and mobile optimization. If you want ongoing work on rankings, map results and AI search visibility, we offer dedicated SEO services after launch. Plenty of clients begin with the website alone and add search work later.",
  },
  {
    q: "Can my current Fort Erie site be redesigned without losing its rankings?",
    a: "In most cases, yes. We start by documenting what your existing site ranks for and why, keep the web addresses of pages that work, and use redirects for any that must move. No company can promise specific rankings, but a redesign planned this way protects the visibility you have while fixing the weaknesses the old site carried.",
  },
];

const RELATED = [
  { label: "Web design services", href: "/web-design" },
  { label: "Niagara web design", href: "/web-design/niagara" },
  { label: "Our work", href: "/work" },
  { label: "Get a quote", href: "/get-a-quote" },
  { label: "SEO in Fort Erie", href: "/seo/fort-erie" },
  { label: "Infused Agency home", href: "/" },
];

const schema = graph([
  organizationNode(),
  breadcrumbList([
    { name: "Home", href: "/" },
    { name: "Web Design", href: "/web-design" },
    { name: "Niagara", href: "/web-design/niagara" },
    { name: "Fort Erie", href: URL_PATH },
  ]),
  serviceNode({
    name: "Web Design in Fort Erie",
    serviceType: "Web Design",
    url: CANONICAL,
    areaServed: [
      { "@type": "City", name: "Fort Erie" },
      { "@type": "AdministrativeArea", name: "Niagara Region, Ontario" },
      { "@type": "Country", name: "Canada" },
    ],
    hasMap: "https://www.google.com/maps/search/?api=1&query=Fort%20Erie%2C%20Ontario%2C%20Canada",
  }),
  faqPageNode(FAQS, `${CANONICAL}#faq`),
]);

const FortErieWebDesign = () => {
  return (
    <>
      <Head>
        <title>Web Design Company in Fort Erie | Infused Agency</title>
        <meta
          name="description"
          content="Fort Erie web design company building fast, mobile-friendly websites for border-community businesses. Book a free consultation."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:site_name" content="Infused Agency" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Web Design Company in Fort Erie | Infused Agency"
        />
        <meta
          property="og:description"
          content="Fort Erie web design company building fast, mobile-friendly websites for border-community businesses. Book a free consultation."
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
                    { name: "Niagara", href: "/web-design/niagara" },
                    { name: "Fort Erie" },
                  ]}
                  className="mb-8"
                />
                <h1 className="max-w-3xl text-balance font-display text-h1 font-bold leading-[1.08] tracking-[-0.02em] text-ink">
                  Fort Erie Web Design Company
                </h1>
                <p className="mt-6 max-w-2xl text-lead text-muted">
                  Infused Agency builds websites for Fort Erie businesses —
                  the trades, shops and services that serve a border town,
                  where your next customer may be coming from across the
                  bridge as easily as from down the road. Fast,
                  mobile-friendly sites that make your business easy to find
                  and easy to contact.
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
                    alt="Web design services for Fort Erie, Ontario by Infused Agency"
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
          eyebrow="Fort Erie"
          heading="Web design for Fort Erie businesses"
        >
          <div className="max-w-3xl space-y-4 text-lead text-muted">
            <p>
              Sitting on the Niagara River across from Buffalo, Fort Erie
              lives with one foot in two markets. A contractor here may work
              for homeowners on both sides of the border; a shop or restaurant
              may serve locals all winter and cross-border visitors all
              summer. That mix changes what a website has to do: say plainly
              where you are and what you offer, work in either currency of
              attention — the five-minute browse or the long-haul search —
              and load quickly enough that nobody abandons it at the bridge.
            </p>
            <p>
              Underneath the border economy sits the ordinary, essential
              business of a town: the electricians, builders and medical
              offices that residents rely on, and the small family operations
              that have served Fort Erie for years. For those businesses, a
              website is a credibility test as much as a directory listing.
              Real photos, clear service lists and contact details within
              thumb&rsquo;s reach do more than any slogan.
            </p>
          </div>
        </Section>

        <Section
          className="border-y border-border bg-surface/40"
          eyebrow="Where we work"
          heading="Where we work in Fort Erie"
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted">
              <p>
                We are based in St. Catharines and work with businesses across
                Fort Erie, meeting in person when that suits you or running
                the entire project remotely by phone, email and video call.
                Crystal Beach, at the eastern end of the town, is part of Fort
                Erie — and part of the same conversation about how your site
                welcomes people from the lakeshore.
              </p>
            </div>
            <EmbeddedMap
              place="Fort Erie, Ontario, Canada"
              zoom={13}
              title="Map of Fort Erie, Ontario"
              className="shadow-card"
            />
          </div>
        </Section>

        <Section
          eyebrow="Recent projects"
          heading="Websites we have designed and built"
          subhead="Sites for Niagara businesses and organizations. Each image links to our work page, where the projects are described in more detail."
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
          heading="What a Fort Erie website includes"
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
              A project starts with a free consultation, in person or over a
              call, where we learn what you sell and who buys it. We follow
              with a written quote built around your actual needs, and from
              there design and build with your feedback in the loop at every
              stage. You see the design&rsquo;s direction before it is
              finished; content is normally yours to supply, with writing
              available at an additional cost. Everything is checked across
              phones, tablets and desktops before launch, and the full process
              is described on our{" "}
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
          heading="Redesigning a Fort Erie website without losing rankings"
        >
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted">
            <p>
              Businesses that have served this town for years often have
              websites that quietly pull in steady search traffic — and the
              fear of losing that traffic is usually what stops a redesign
              from happening at all. The important thing to know is that a
              new design and your existing rankings are not enemies. Search
              engines care about what your pages say, how they are structured
              and how they connect — and all of that can be carried into a
              new design with care.
            </p>
            <p>
              Before rebuilding anything, we study what your current site is
              found for and why, keep the web addresses of pages doing their
              job, and set up redirects for any that must change. That
              protects the visitors and search engines already finding you.
              We also fix what was working against the old site along the way
              — slow pages, hard-to-find services, contact details buried out
              of thumb&rsquo;s reach — which tends to help rather than hurt
              your visibility.
            </p>
            <p>
              If you want to understand what a redesign would mean for your
              Fort Erie site before deciding anything, book a free
              consultation. We will look at what you have and tell you, in
              plain terms, what we see.
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
            Fort Erie sits at the eastern edge of a region we build for
            throughout. The lakeshore community of{" "}
            <Link
              href="/web-design/crystal-beach"
              className="font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              Crystal Beach
            </Link>{" "}
            is part of Fort Erie and has its own page below, alongside every
            other Niagara web design page we keep.
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
                Tell us what your Fort Erie business sells and what the
                website should be doing, and we will map out what the project
                needs. No obligation, no jargon.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/get-a-quote" size="lg">
                  Get your free quote
                  <Icon name="arrow-right" className="h-4 w-4" />
                </Button>
              </div>
              <p className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-contrast-ink/80">
                <a
                  href="tel:+19059333115"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Icon name="phone" className="h-4 w-4" />
                  (905) 933-3115
                </a>
                <a
                  href="mailto:info@infused.agency"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Icon name="mail" className="h-4 w-4" />
                  info@infused.agency
                </a>
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default FortErieWebDesign;
