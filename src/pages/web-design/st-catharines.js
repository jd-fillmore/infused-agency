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
import Badge from "../../../components/ui/Badge";
import Breadcrumb from "../../../components/ui/Breadcrumb";
import HeroAtmosphere from "../../../components/ui/HeroAtmosphere";
import TestimonialCard from "../../../components/ui/TestimonialCard";
import Accordion from "../../../components/ui/Accordion";
import Icon from "../../../components/ui/Icon";
import PageJsonLd from "../../../components/seo/PageJsonLd";
import EmbeddedMap from "../../../components/maps/EmbeddedMap";
import {
  organizationNode,
  breadcrumbList,
  serviceNode,
  faqPageNode,
  graph,
} from "../../lib/verticalSeoSchema";
import { WEB_DESIGN_CROSS_LINKS } from "../../lib/niagaraWebDesignCities";

import hero from "../../img/web-design-st-catharines.jpg";
import visca from "../../img/st-catharines-web-design-visca-electric.png";
import flat from "../../img/st-catharines-website-design-flat-rock-cellars.png";
import jerrys from "../../img/web-design-company-st-catharines-jerrys-insulating.png";
import kd from "../../img/custom-website-design-st-catharines-kd-flowers.png";
import cass from "../../img/st-catharines-web-design-cass-a-bella-construction.png";
import cma from "../../img/website-design-st-catharines-canadian-mortgage-authority.png";
import donor from "../../img/web-design-st-catharines-donor-compass.png";
import ggs from "../../img/st-catharines-custom-web-design-ggs-niagara-landscaping.png";
import med from "../../img/website-design-st-catharines-lincoln-medical-centre.png";
import plant from "../../img/web-design-st-catharines-plant-no-01.png";
import test1 from "../../img/testimonial-lucas-folino-niagara.png";
import test2 from "../../img/testimonial-brandi-may-niagara.png";
import test3 from "../../img/testimonial-sandro-visca-niagara.png";

const URL_PATH = "/web-design/st-catharines";
const CANONICAL = "https://infused.agency/web-design/st-catharines";

const AFFILIATES = [
  { icon: "search", label: "Google Partner", note: "Certified agency" },
  { icon: "users", label: "Niagara Chamber", note: "Member" },
  { icon: "star", label: "Three Best Rated", note: "Top-rated local" },
  { icon: "check", label: "GoodFirms", note: "Verified reviews" },
  { icon: "spark", label: "DesignRush", note: "Listed agency" },
  { icon: "chat", label: "Google Reviews", note: "40+ five-star" },
];

const PROJECTS = [
  {
    src: visca,
    alt:
      "Website design for VISCA Electric, an electrical contractor serving St. Catharines and Niagara",
    caption: "VISCA Electric — website for a Niagara electrical contractor",
  },
  {
    src: flat,
    alt:
      "Website design for Flat Rock Cellars, a winery on Niagara's Twenty Mile Bench",
    caption: "Flat Rock Cellars — winery website for the Twenty Mile Bench",
  },
  {
    src: jerrys,
    alt:
      "Website design for Jerry's Insulating, an insulation contractor serving St. Catharines, Niagara and Hamilton-Burlington",
    caption: "Jerry's Insulating — website for an insulation contractor",
  },
  {
    src: kd,
    alt:
      "Website design for KD Flowers, a boutique wedding florist in the Niagara region",
    caption: "KD Flowers — website for a boutique wedding florist",
  },
  {
    src: cass,
    alt:
      "Website design for Cass-A-Bella Construction, a custom home builder working in St. Catharines and beyond",
    caption: "Cass-A-Bella Construction — website for a custom home builder",
  },
  {
    src: cma,
    alt:
      "Website design for Canadian Mortgage Authority, a team of mortgage brokers serving the Niagara region",
    caption:
      "Canadian Mortgage Authority — website for a Niagara mortgage brokerage",
  },
  {
    src: donor,
    alt:
      "Website design for Donor Compass, a donor-data platform for nonprofits across North America",
    caption: "Donor Compass — website for a nonprofit donor-data platform",
  },
  {
    src: ggs,
    alt:
      "Website design for GGS Niagara Landscaping, a landscape maintenance and garden design company",
    caption:
      "GGS Niagara Landscaping — website for a Niagara landscaping company",
  },
  {
    src: med,
    alt:
      "Website design for Lincoln Medical Centre, a family physician team in Niagara",
    caption: "Lincoln Medical Centre — website for a family medical practice",
  },
  {
    src: plant,
    alt:
      "Website design for Plant No.01, a vegan food factory located in the Niagara region",
    caption: "Plant No.01 — website for a Niagara vegan food factory",
  },
];

const COMPARE_POINTS = [
  "Who designs and builds the site, and will you ever speak to them?",
  "What is included: content, search optimization, hosting, training?",
  "Will you be able to update the website yourself once it is live?",
  "Recent, real projects — ideally in a business similar to yours",
  "How quotes, changes along the way, and payment are handled",
  "What kind of support exists after the site launches",
];

const SERVICES = [
  {
    title: "Custom design for your business",
    body:
      "Every website we build is designed from scratch around your brand, your customers and your goals. Your pages, your layout and your calls to action are planned for the people you want to reach, not poured into a stock template.",
  },
  {
    title: "Responsive, mobile-friendly builds",
    body:
      "Most local searches happen on a phone, so every site we deliver adapts to smartphones, tablets, laptops and desktops. Your visitors get a site that is easy to read and easy to contact on whatever device they are holding.",
  },
  {
    title: "WordPress websites you can update",
    body:
      "WordPress is our go-to when a site needs a content management system, because it is straightforward to develop with and straightforward for you to use. We walk you through updating pages, posts and photos so you are not dependent on a developer for every small change.",
  },
  {
    title: "Online stores on Shopify and WordPress",
    body:
      "For product-based businesses we design and build e-commerce stores on Shopify and WooCommerce. Product pages, carts and checkout are set up to be quick to use and easy for you to manage.",
  },
  {
    title: "Layouts built to turn visitors into enquiries",
    body:
      "A website has a job to do. We plan the layout around clear calls to action, short contact forms and phone numbers that are one tap away, so a interested visitor does not have to hunt for how to reach you.",
  },
  {
    title: "Websites built with search in mind",
    body:
      "Every build includes on-page search optimization: fast load times, mobile optimization, clean site structure and schema markup. That groundwork is what lets your pages show up on Google and get picked up by AI search tools later.",
  },
  {
    title: "Hosting and ongoing maintenance",
    body:
      "We offer website hosting and ongoing maintenance so your site stays current and looked after after launch. During your consultation we can talk through the hosting options we typically work with.",
  },
  {
    title: "SEO and AI search after launch",
    body:
      "A new website is a strong start, but rankings are built over time. If you want to keep growing in Google, the map results and AI assistants, our SEO and AI search services continue the work after launch.",
  },
];

const AUDIENCES = [
  {
    title: "Small businesses and storefronts",
    body:
      "From a shop on St. Paul Street to a service run out of a home workshop, small businesses usually need the same things from a website: look credible, load quickly, and make it obvious how to get in touch. That is the core of most projects we take on.",
    links: [],
  },
  {
    title: "Trades and home services",
    body:
      "Electricians, insulators and other contractors live and die by the phone. When a homeowner in Thorold or a property manager in Welland searches for the work you do, your site needs to show what you offer, where you work, and how to reach you in seconds.",
    links: [
      {
        label: "SEO for electricians in Niagara",
        href: "/seo/for-electricians-niagara",
      },
      {
        label: "SEO for insulation contractors",
        href: "/seo/for-insulation-niagara",
      },
    ],
  },
  {
    title: "Wineries and food businesses",
    body:
      "Niagara's wineries, food makers and specialty producers sell to locals and visitors alike. We have built sites for winery estates on the Twenty Mile Bench and food producers working in the region, showing off what is made here and making it easy to order or plan a visit.",
    links: [
      {
        label: "SEO for wineries in Niagara",
        href: "/seo/for-wineries-niagara",
      },
    ],
  },
  {
    title: "Medical and health practices",
    body:
      "Practices need a site that answers practical questions — services, hours, how to book — without friction, and that gives patients a sense of the care behind the name. We built the website for Lincoln Medical Centre and work with other practices across Niagara.",
    links: [
      { label: "SEO for dentists", href: "/seo/for-dentists-niagara" },
      {
        label: "SEO for chiropractors",
        href: "/seo/for-chiropractors-niagara",
      },
    ],
  },
  {
    title: "Landscapers and outdoor services",
    body:
      "Landscaping is a visual trade, and a website full of real gardens and finished yards does the selling before anyone calls. When a family in Grimsby searches for landscape maintenance or garden design, your work should be what they find.",
    links: [
      {
        label: "SEO for landscapers in Niagara",
        href: "/seo/for-landscapers-niagara",
      },
    ],
  },
  {
    title: "Builders and construction companies",
    body:
      "Custom builders and contractors sell on trust and craft. A website that presents past projects clearly, explains your process and makes enquiries simple helps the right clients decide to start a conversation.",
    links: [
      {
        label: "SEO for general contractors",
        href: "/seo/for-general-contractors-niagara",
      },
    ],
  },
  {
    title: "Professional practices",
    body:
      "Mortgage brokers, accountants and similar practices compete on reputation as much as service. A professional website that explains what you do in plain language and makes booking or calling easy is often the difference between a referral that lands and one that drifts.",
    links: [
      { label: "SEO for accountants", href: "/seo/for-accountants-niagara" },
    ],
  },
];

const FAQS = [
  {
    q: "How much does a website cost for a St. Catharines business?",
    a:
      "There is no single price for a website. What drives the cost is the size of the site, the features you need (an online store, booking, forms, galleries), how much content is ready to go, and whether you want us to write the copy as well. After a free consultation we assess what your project actually needs and give you a clear written quote, so you know exactly what you are paying for before anything begins.",
  },
  {
    q: "Do you actually work with businesses in St. Catharines?",
    a:
      'Yes — this is our home base. Our office is at St. Catharines, Ontario · Serving the Niagara Region "web design company St. Catherines" — a spelling that gets used often — and by every variation of "web design St. Catharines" you can imagine. Whatever brought you here, we are down the road.',
  },
  {
    q: "Do you also handle SEO, or just the website?",
    a:
      "Both. Every site we build comes with on-page SEO foundations — fast pages, mobile optimization, clean structure and schema markup. For ongoing work, meaning rankings, map results and visibility in AI search tools, we offer dedicated SEO services after launch. Many clients start with a website and continue with SEO; some only need the site.",
  },
  {
    q: "What happens after my website goes live?",
    a:
      "If it is a WordPress site, we show you how to update it yourself. You are welcome to contact us any time after launch — we are only an email away for changes and questions. We also offer hosting and ongoing maintenance, and our SEO services are there if you want to keep growing in search after the site is live.",
  },
  {
    q: "Can you redesign my existing site without hurting my rankings?",
    a:
      "In most cases, yes — a redesign and keeping your rankings are not a trade-off. Before rebuilding we study what your current site ranks for, keep the purpose and addresses of your working pages intact where possible, and set up redirects for any address that has to change. No one can promise a specific ranking, but a redesign done carefully protects what you already have and usually fixes the problems that were holding the old site back.",
  },
];

const RELATED = [
  { label: "Web design services", href: "/web-design" },
  { label: "Niagara web design company", href: "/web-design/niagara" },
  { label: "Our work", href: "/work" },
  { label: "Get a quote", href: "/get-a-quote" },
  { label: "SEO services", href: "/seo" },
  { label: "Local SEO", href: "/seo/local-seo" },
];

const schema = graph([
  organizationNode(),
  breadcrumbList([
    { name: "Home", href: "/" },
    { name: "Web Design", href: "/web-design" },
    { name: "St. Catharines", href: URL_PATH },
  ]),
  serviceNode({
    name: "Web Design in St. Catharines",
    serviceType: "Web Design",
    url: CANONICAL,
    areaServed: [
      { "@type": "City", name: "St. Catharines" },
      { "@type": "AdministrativeArea", name: "Niagara Region, Ontario" },
      { "@type": "Country", name: "Canada" },
    ],
  }),
  faqPageNode(FAQS, `${CANONICAL}#faq`),
]);

const StCatharinesWebDesign = () => {
  return (
    <>
      <Head>
        <title>Web Design Company in St. Catharines | Infused Agency</title>
        <meta
          name="description"
          content="St. Catharines web design company building fast, mobile-friendly websites for local businesses. See our recent work and book a free consultation."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:site_name" content="Infused Agency" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Web Design Company in St. Catharines | Infused Agency"
        />
        <meta
          property="og:description"
          content="St. Catharines web design company building fast, mobile-friendly websites for local businesses. See our recent work and book a free consultation."
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
                    { name: "St. Catharines" },
                  ]}
                  className="mb-8"
                />
                <h1 className="max-w-3xl text-balance font-display text-h1 font-bold leading-[1.08] tracking-[-0.02em] text-ink">
                  St. Catharines Web Design Company
                </h1>
                <p className="mt-6 max-w-2xl text-lead text-muted">
                  Infused Agency builds fast, mobile-friendly websites for
                  businesses in St. Catharines and across Niagara. This page
                  explains how we design and build, what a project with us looks
                  like from the first conversation to launch day, and how to
                  weigh us against the other companies on your list.
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
                    alt="Web design in St. Catharines by Infused Agency"
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

        <section className="border-y border-border bg-surface/60 py-12">
          <Container>
            <p className="mb-7 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Recognised and affiliated
            </p>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {AFFILIATES.map((affiliate) => (
                <li key={affiliate.label}>
                  <div className="flex h-full flex-col items-center gap-3 rounded-xl border border-border bg-card px-4 py-5 text-center shadow-card card-lift">
                    <span className="icon-tile h-10 w-10">
                      <Icon name={affiliate.icon} className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-semibold leading-snug text-ink">
                      {affiliate.label}
                    </span>
                    <span className="text-xs leading-snug text-muted">
                      {affiliate.note}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <Section
          eyebrow="Based in St. Catharines"
          heading="Web design for St. Catharines businesses"
        >
          <div className="max-w-3xl space-y-4 text-lead text-muted">
            <p>
              We design and build websites for businesses right here in St.
              Catharines — storefronts and shops, medical and professional
              practices, contractors and trades who work the city and the towns
              around it. Every project is custom: we plan the pages around what
              you sell and what your customers need to find, design the
              interface for the people who will actually use it, and build it so
              it loads quickly and works on any device. If you would rather talk
              it through than read, book a free consultation and we will walk
              through your options with no obligation.
            </p>
            <p>
              A website is usually the first impression someone has of your
              business. A neighbour asking friends who they recommend, a
              homeowner in Thorold searching for an electrician on their phone,
              a patient checking a practice&rsquo;s hours before a visit — they
              all end up on your website, and what they find there decides
              whether they call you or the next name on the list. That is why we
              treat a site as a working part of your business rather than a
              brochure: clear services, contact details within reach on mobile,
              and a structure search engines can understand.
            </p>
          </div>
        </Section>

        <Section
          className="border-y border-border bg-surface/40"
          eyebrow="Where we work"
          heading="Web design in St. Catharines, Ontario"
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted">
              <p>
                Our office is in St. Catharines, and we work with businesses
                across the city — from the downtown core to the neighbourhoods
                along the Welland Canal and out toward the towns on either side.
                Most projects run entirely by phone, email and video call, while
                meetings in person are always an option for anyone who prefers
                to sit down together.
              </p>
              <p>
                The map gives a sense of the ground we cover. If your business
                is based in St. Catharines or nearby, the quickest way to start
                is a free consultation — we will talk through what you need and
                send a written quote, with no charge for the conversation.
              </p>
            </div>
            <EmbeddedMap
              place="St. Catharines, Ontario, Canada"
              zoom={13}
              title="Map of St. Catharines, Ontario"
              className="shadow-card"
            />
          </div>
        </Section>

        <Section
          className="border-t border-border"
          eyebrow="Across the region"
          heading="Web design across Niagara"
        >
          <p className="max-w-3xl text-base leading-relaxed text-muted">
            St. Catharines is our home base, and we build for businesses across
            the whole region — from{" "}
            <Link
              href="/web-design/thorold"
              className="font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              Thorold
            </Link>{" "}
            and{" "}
            <Link
              href="/web-design/welland"
              className="font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              Welland
            </Link>{" "}
            down the lakeshore to Fort Erie, and along the escarpment to the
            wine country. Every web design page we keep for Niagara is linked
            below.
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

        <Section
          className="border-t border-border"
          eyebrow="How to compare"
          heading="Choosing a web design company in St. Catharines"
          subhead="The same questions, put to every company on your shortlist, make proposals much easier to compare."
        >
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted">
            <p>
              Search for a web design company in St. Catharines and you will
              find a wide mix: freelancers, off-the-shelf template services,
              agencies in other cities, and local firms like ours. Every quote
              lists something different, so slow down at this stage and ask the
              same questions of each company. It also helps to see recent work
              in businesses like yours — a site for a winery tells you little
              about what your dental practice needs, and vice versa.
            </p>
            <p>
              Ask who will actually do the work. On our projects you deal with
              the people designing and building your site, not an account
              manager relaying messages. Ask what is included once the design is
              done: whether search optimization is part of the build, who writes
              the content, whether you will be able to update the site yourself,
              and what support looks like after it is live. And ask how changes
              are handled mid-project, because a website takes shape through
              conversation and you want to know that feedback is welcome rather
              than a disruption.
            </p>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {COMPARE_POINTS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-relaxed text-muted"
              >
                <Icon
                  name="check"
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section
          className="border-y border-border bg-surface/40"
          eyebrow="The process"
          heading="What a St. Catharines web design project looks like"
        >
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted">
            <p>
              Every project starts with a conversation. In a free consultation
              we ask about your business, the customers you want more of, what
              your current site (if you have one) does well and where it falls
              short, and what a successful website would change for you. There
              is no charge and no obligation, and you will not get a hard sell.
            </p>
            <p>
              From there we put together a written quote based on what your
              project actually needs, because every build is different. Once you
              approve it, planning and design move ahead together with you
              rather than behind a curtain. You see the direction of the design
              early, your feedback shapes it, and because the process stays
              collaborative from start to finish, there should be no surprises
              about how the finished site looks or works.
            </p>
            <p>
              During the build, pages are developed and checked across screens
              of every size — phones, tablets, laptops and desktops — because so
              many local searches happen on a phone. Content is normally
              something you provide, since you know your business inside out; if
              you would rather not write it, we can write it for you at an
              additional cost. WordPress projects include a walkthrough so you
              can update pages, posts and photos yourself.
            </p>
            <p>
              When everything is approved the site goes live, and launch is not
              the end of the relationship. Anything you need afterwards, we are
              only an email away. Businesses that want to keep growing in
              Google, the map results and AI assistants can continue with our
              SEO services; businesses that only needed a new site are free to
              take it from there.
            </p>
          </div>
        </Section>

        <Section
          eyebrow="Recent projects"
          heading="Websites we have designed and built"
          subhead="A sample of sites for businesses in and around Niagara. Each one links to our work page, where the projects are described in more detail."
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
          heading="Our web design services, in plain terms"
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
        </Section>

        <Section
          className="border-y border-border bg-surface/40"
          eyebrow="Who we work with"
          heading="Who we build for around St. Catharines"
          subhead="These are the kinds of businesses in our actual portfolio and on our industry pages — not a list of everyone with a wallet."
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {AUDIENCES.map((audience) => (
              <Card key={audience.title} className="flex h-full flex-col">
                <h3 className="font-display text-lg font-bold text-ink">
                  {audience.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {audience.body}
                </p>
                {audience.links.length ? (
                  <ul className="mt-4 space-y-2 border-t border-border pt-4">
                    {audience.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
                        >
                          {link.label}
                          <Icon name="arrow-right" className="h-4 w-4" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </Card>
            ))}
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
          eyebrow="Keeping your rankings"
          heading="Redesigning your St. Catharines website without losing rankings"
        >
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted">
            <p>
              If your current website already brings in calls, the idea of a
              redesign can be genuinely stressful — you are not only spending
              money, you are risking the traffic that helps pay for it. The good
              news is that a redesign does not have to cost you your rankings.
              Search engines care about what your pages say, how they are
              structured, and what other sites say about you; a new visual
              design can carry all of that forward.
            </p>
            <p>
              Before anything is rebuilt, we look at what your current site
              ranks for and why: which pages pull in traffic, which words people
              use to find them, and where you appear in the local map results.
              Those pages keep their purpose in the new build, their web
              addresses stay the same wherever possible, and where an address
              does have to change we set up redirects so visitors and search
              engines still land in the right place. After launch we watch how
              the site performs and fix anything that slipped.
            </p>
            <p>
              A redesign is also the right moment to repair what was holding the
              old site back — slow pages, thin descriptions of your services,
              contact details that are hard to find on a phone. Those repairs
              generally help rather than hurt. If you would like a second
              opinion on what a redesign would mean for your current rankings
              before you commit to anything, ask us — looking at existing sites
              is something we do gladly.
            </p>
          </div>
        </Section>

        <Section
          className="border-y border-border bg-surface/40"
          heading="Frequently asked questions"
        >
          <Accordion items={FAQS} className="max-w-3xl" />
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
                Tell us where your business is today and where you want it to
                be, and we will map out what your project needs. No obligation,
                no jargon.
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
      </main>
      <Footer />
    </>
  );
};

export default StCatharinesWebDesign;
