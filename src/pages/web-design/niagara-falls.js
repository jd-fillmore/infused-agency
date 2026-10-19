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

import hero from "../../img/web-design-niagara-falls-hero.webp";
import img1 from "../../img/niagara-falls-web-design-visca-electric.png";
import img2 from "../../img/niagara-falls-website-design-flat-rock-cellars.png";
import img3 from "../../img/web-design-company-niagara-falls-jerrys-insulating.png";
import img4 from "../../img/niagara-falls-web-design-company-kd-flowers.png";
import img5 from "../../img/custom-website-design-niagara-falls-cass-a-bella-construction.png";
import img6 from "../../img/web-design-niagara-falls-canadian-mortgage-authority.png";
import test1 from "../../img/testimonial-lucas-folino-niagara.png";
import test2 from "../../img/testimonial-brandi-may-niagara.png";
import test3 from "../../img/testimonial-sandro-visca-niagara.png";

const URL_PATH = "/web-design/niagara-falls";
const CANONICAL = "https://infused.agency/web-design/niagara-falls";

const PROJECTS = [
  {
    src: img1,
    alt: "VISCA Electric website by Infused Agency, built for an electrical contractor in Niagara",
    caption: "VISCA Electric — electrical contractor website",
  },
  {
    src: img2,
    alt: "Flat Rock Cellars winery website on the Twenty Mile Bench, designed by Infused Agency",
    caption: "Flat Rock Cellars — winery estate website",
  },
  {
    src: img3,
    alt: "Website for Jerry's Insulating, an insulation contractor serving Niagara and Hamilton-Burlington",
    caption: "Jerry's Insulating — insulation contractor website",
  },
  {
    src: img4,
    alt: "KD Flowers wedding florist website, a boutique Niagara florist's site by Infused Agency",
    caption: "KD Flowers — wedding florist website",
  },
  {
    src: img5,
    alt: "Cass-A-Bella Construction website, showing past work for a Niagara custom home builder",
    caption: "Cass-A-Bella Construction — custom builder website",
  },
  {
    src: img6,
    alt: "Canadian Mortgage Authority website for a team of mortgage brokers serving the Niagara region",
    caption: "Canadian Mortgage Authority — mortgage brokerage website",
  },
];

const SERVICES = [
  {
    title: "Sites that work for visitors on their phones",
    body: "Most people planning a trip to Niagara Falls are already in town when they search, phone in hand. Your site needs to answer what you offer, when you are open, what it costs and how to book or buy — in seconds, on a small screen, often while someone is walking.",
  },
  {
    title: "Custom design, not a stock template",
    body: "Every site is designed from scratch around your brand and the customers you want. Layout, pages and calls to action are planned for how a Falls-area visitor or local actually decides, rather than poured into a theme built for someone else.",
  },
  {
    title: "Booking and enquiry flows that do not lose people",
    body: "Hospitality and attraction businesses get reservation and booking flows that keep friction low. Trades and offices get short contact forms and phone numbers that are one tap away, so an interested visitor never has to hunt for how to reach you.",
  },
  {
    title: "WordPress you can update yourself",
    body: "WordPress is our usual choice when a site needs a content management system, and we walk you through updating pages, photos and seasonal details yourself. When hours or packages change, you should not have to wait on a developer.",
  },
  {
    title: "Online stores for shops that sell goods",
    body: "Product businesses get e-commerce stores on Shopify or WooCommerce, with product pages, carts and checkout set up to be quick to use and straightforward for you to run.",
  },
  {
    title: "Search foundations on every build",
    body: "Fast load times, mobile optimization, clean structure and schema markup come standard. That groundwork is what lets your pages show up on Google — and what AI search tools draw from when visitors ask about your kind of business here.",
  },
];

const FAQS = [
  {
    q: "How much does a website cost for a Niagara Falls business?",
    a: "There is no single price for a website. What drives the cost is the size of the site, the features you need — an online store, booking, forms, galleries — how much of the content is ready to go, and whether you would like us to write the copy as well. After a free consultation we work out what your project actually needs and send a clear written quote, so you know what you are paying for before anything begins. There is no charge for the consultation and no obligation.",
  },
  {
    q: "Can you work with a business in Niagara Falls in person, or does it have to be remote?",
    a: "Either. Our office is in St. Catharines, a short drive from Niagara Falls, and we are happy to meet at your place of business or ours. Plenty of projects also run entirely by phone, email and video call, so if remote is easier for how you work, distance is not a barrier.",
  },
  {
    q: "Do you also handle SEO, or only build the website?",
    a: "Both. Every site we build includes on-page search foundations — fast pages, mobile optimization, clean structure and schema markup. For ongoing work, meaning rankings, map results and the growing share of searches AI assistants answer directly, we offer dedicated SEO services after launch. Some businesses only need the site; many continue with search work once it is live.",
  },
  {
    q: "Can you redesign my existing Niagara Falls website without hurting its rankings?",
    a: "In most cases, yes — a redesign and keeping your rankings are not a trade-off. Before rebuilding we look at what your current site ranks for and why, keep the purpose and web addresses of your working pages wherever possible, and set up redirects for any address that has to change. No one can promise a specific ranking, but a careful redesign protects what you have and usually repairs what was holding the old site back.",
  },
];

const RELATED = [
  { label: "Web design services", href: "/web-design" },
  { label: "Niagara web design", href: "/web-design/niagara" },
  { label: "Our work", href: "/work" },
  { label: "Get a quote", href: "/get-a-quote" },
  { label: "Local SEO services", href: "/seo/local-seo" },
  { label: "Infused Agency home", href: "/" },
];

const schema = graph([
  organizationNode(),
  breadcrumbList([
    { name: "Home", href: "/" },
    { name: "Web Design", href: "/web-design" },
    { name: "Niagara", href: "/web-design/niagara" },
    { name: "Niagara Falls", href: URL_PATH },
  ]),
  serviceNode({
    name: "Web Design in Niagara Falls, Ontario",
    serviceType: "Web Design",
    url: CANONICAL,
    areaServed: [
      { "@type": "City", name: "Niagara Falls" },
      { "@type": "AdministrativeArea", name: "Niagara Region, Ontario" },
      { "@type": "Country", name: "Canada" },
    ],
    hasMap: "https://www.google.com/maps/search/?api=1&query=Niagara%20Falls%2C%20Ontario%2C%20Canada",
  }),
  faqPageNode(FAQS, `${CANONICAL}#faq`),
]);

const NiagaraFallsWebDesign = () => {
  return (
    <>
      <Head>
        <title>Web Design Company in Niagara Falls, Ontario | Infused Agency</title>
        <meta
          name="description"
          content="Niagara Falls, Ontario web design company building fast, mobile-friendly websites for local businesses. Book a free consultation."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:site_name" content="Infused Agency" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Web Design Company in Niagara Falls, Ontario | Infused Agency"
        />
        <meta
          property="og:description"
          content="Niagara Falls, Ontario web design company building fast, mobile-friendly websites for local businesses. Book a free consultation."
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
                    { name: "Niagara Falls" },
                  ]}
                  className="mb-8"
                />
                <h1 className="max-w-3xl text-balance font-display text-h1 font-bold leading-[1.08] tracking-[-0.02em] text-ink">
                  Niagara Falls, Ontario Web Design Company
                </h1>
                <p className="mt-6 max-w-2xl text-lead text-muted">
                  Infused Agency designs and builds websites for businesses in
                  Niagara Falls, Ontario — from hotels, attractions and
                  restaurants near the Falls to the trades and professional
                  offices that serve the people who live here. The sites load
                  quickly, work on any device, and make it easy for a visitor
                  or a neighbour to get in touch.
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
                    alt="Web design company in Niagara Falls, Ontario by Infused Agency"
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
          eyebrow="Niagara Falls, Ontario"
          heading="Web design for Niagara Falls businesses"
        >
          <div className="max-w-3xl space-y-4 text-lead text-muted">
            <p>
              Niagara Falls runs on visitors. Millions of people pass through
              the city each year, and most of them start planning on a phone:
              where to eat tonight, what is worth booking, whether you are open
              today. If your site is slow to load or awkward to use on a small
              screen, that decision quietly goes to the next name on the list.
              For hotels, restaurants, attractions and the shops along the
              tourist strip, a website is not a brochure — it is a front desk
              that never closes.
            </p>
            <p>
              The city is more than the Falls, though. Behind the visitor
              economy sit the electricians, builders and insulators who keep
              local houses and properties working, along with the professional
              offices people choose from their couches at home. Those
              businesses need something different from a hotel site: services
              described in plain language, honest hours, and a phone number
              within thumb&rsquo;s reach. Both halves of this market arrive
              through search — usually on a phone, usually deciding in seconds.
            </p>
          </div>
        </Section>

        <Section
          className="border-y border-border bg-surface/40"
          eyebrow="Where we work"
          heading="Where we work in Niagara Falls"
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted">
              <p>
                Our office is in St. Catharines, a short drive from Niagara
                Falls, and we work with businesses across the city — meeting in
                person when that suits you, or running the whole project by
                phone, email and video call. The map centres on Niagara Falls;
                if your business is here or in one of the towns around it, a
                free consultation is the simplest way to begin.
              </p>
            </div>
            <EmbeddedMap
              place="Niagara Falls, Ontario, Canada"
              zoom={13}
              title="Map of Niagara Falls, Ontario"
              className="shadow-card"
            />
          </div>
        </Section>

        <Section
          eyebrow="Recent projects"
          heading="Websites we have designed and built"
          subhead="A sample of sites for Niagara businesses and organizations. Each one links to our work page, where the projects are described in more detail."
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
          heading="What a Niagara Falls website includes"
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
              A project opens with a free consultation, in person or over a
              call, where we learn what your business sells and who buys it.
              From there we prepare a written quote built around what your
              site actually needs. You see the direction of the design before
              it is finished, your feedback shapes it, and content is normally
              yours to supply — with writing available at an additional cost if
              you would rather not.
            </p>
            <p>
              Before launch, every page is checked across phones, tablets and
              desktops. The full process, from first conversation to the day
              the site goes live, is written out on our{" "}
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
          heading="Redesigning a Niagara Falls website without losing rankings"
        >
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted">
            <p>
              If your current website already brings in calls and bookings, the
              word &ldquo;redesign&rdquo; can sound like a risk you did not ask
              for. It does not have to be. Search engines care about what your
              pages say, how they are structured and what other sites say about
              you — all of which a new design carries forward deliberately.
            </p>
            <p>
              Before anything is rebuilt we study what your existing site ranks
              for and why, keep the purpose of your working pages intact, and
              hold web addresses the same wherever we can. Where an address has
              to change we set up redirects, so a visitor or a search engine
              following an old link still lands where it should. For a
              seasonal business, this work can be scheduled around your quiet
              months, so the busy season is never the moment the site changes
              under your feet.
            </p>
            <p>
              A redesign is also the chance to fix what the old site got
              wrong — pages that load slowly on a phone, service descriptions
              nobody could find, contact details buried at the bottom. Those
              repairs tend to help rather than hurt. If you would like a second
              opinion on what a rebuild would mean for your current rankings,
              ask us — looking at existing sites is something we do gladly.
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
            We build for businesses throughout the Niagara Region — including
            the neighbouring communities of{" "}
            <Link
              href="/web-design/niagara-on-the-lake"
              className="font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              Niagara-on-the-Lake
            </Link>{" "}
            and{" "}
            <Link
              href="/web-design/thorold"
              className="font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              Thorold
            </Link>
            . Every web design page we keep for the region is linked below.
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
                Ready to talk about your{" "}
                <span className="text-gold-bright">website?</span>
              </h2>
              <p className="mt-4 text-lead text-contrast-ink/90">
                Tell us what you sell and what your website should be doing,
                and we will map out what the project needs. No obligation, no
                jargon.
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

export default NiagaraFallsWebDesign;
