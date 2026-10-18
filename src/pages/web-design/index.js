import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Nav from "../../../components/Nav/nav";
import Footer from "../../../components/Footer/footer";
import CTA from "../../../components/CTA/cta";
import Container from "../../../components/ui/Container";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";
import ServiceCard from "../../../components/ui/ServiceCard";
import Button from "../../../components/ui/Button";
import Breadcrumb from "../../../components/ui/Breadcrumb";
import HeroAtmosphere from "../../../components/ui/HeroAtmosphere";
import TestimonialCard from "../../../components/ui/TestimonialCard";
import PageJsonLd from "../../../components/seo/PageJsonLd";
import { webPageGraph } from "../../lib/verticalSeoSchema";
import ui from "../../img/ui-design.png";
import build from "../../img/build.png";
import grow from "../../img/grow.png";
import growth from "../../img/lead-generating-websites-niagara.png";
import funnel from "../../img/lead-gen-convert.jpg";
import convert from "../../img/conversion-web.jpg";
import fast from "../../img/design-fast.png";
import bgImage from "../../img/inner-web-design.jpg";

const DISCOVERY_URL =
  "https://calendly.com/infused-agency/project-discovery/";

const WebDesign = ({ childServices = [] }) => {
  return (
    <>
      <Head>
        <title>
          Infused Web Design - Niagara, St. Catharines, Grimsby - Responsive
          Website Design
        </title>
        <meta
          name="description"
          content="Infused Agency offers lead-generating web design and development services for companies in St. Catharines, Grimsby, Niagara. Click here to get your free quote."
        />
        <link rel="canonical" href="https://infused.agency/web-design" />
        <PageJsonLd
          graph={webPageGraph({
            url: "/web-design",
            name: "Infused Web Design - Niagara, St. Catharines, Grimsby - Responsive Website Design",
            pageType: "WebPage",
            description:
              "Infused Agency offers lead-generating web design and development services for companies in St. Catharines, Grimsby, Niagara. Click here to get your free quote.",
            breadcrumbs: [
              { name: "Home", href: "/" },
              { name: "Web Design", href: "/web-design" },
            ],
          })}
        />
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
                    { name: "Web Design" },
                  ]}
                  className="mb-8"
                />
                <h1 className="max-w-3xl text-balance font-display text-h1 font-bold leading-[1.08] tracking-[-0.02em] text-ink">
                  Lead-Generating Web Design
                </h1>
                <p className="mt-6 max-w-2xl text-lead text-muted">
                  Our websites are not &lsquo;just websites&rsquo;. They&rsquo;re
                  your best 24/7 sales manager.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="/get-a-quote" size="lg">
                    Book a free consultation
                  </Button>
                  <Button href="/work" variant="secondary" size="lg">
                    See our work
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-5">
                <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                  <Image
                    src={bgImage}
                    alt="Lead-generating website design by Infused Agency for Niagara businesses"
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

        <Section heading="Niagara Web Design &amp; Website Development Agency">
          <div className="max-w-3xl space-y-4 text-lead text-muted">
            <p>
              At Infused Agency, we craft responsive websites that deliver a
              seamless user experience across desktop, laptop, tablet, and
              smartphone devices. Our expertise lies in web design, leveraging
              the latest development standards, content management systems, and
              search engine optimization (SEO) to create impactful online
              solutions.
            </p>
            <p>
              Based in Niagara, we proudly serve businesses in the Niagara
              Region and beyond, including St. Catharines, Niagara Falls,
              Welland, Grimsby, Fort Erie, Fonthill, Pelham,
              Niagara-on-the-Lake, Beamsville, Port Colborne, Crystal Beach,
              Thorold, Wainfleet, as well as across Ontario, Canada, and
              internationally.
            </p>
            <p>
              Website creation or redesign is a collaborative process with us.
              We ensure your vision is reflected in every design and that your
              input guides the project from start to finish. As a valued client
              of Infused Agency, you can trust you&rsquo;re in capable and
              supportive hands.
            </p>
          </div>
        </Section>

        <Section
          className="border-t border-border"
          heading="Websites made to engage, capture and convert."
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="flex h-full flex-col">
              <Image src={ui} alt="ui design" className="mb-5 rounded-lg" />
              <h3 className="font-display text-lg font-bold text-ink">
                Design
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                By adopting a human-first design approach, we create interfaces
                tailored to your target demographic, effectively showcasing your
                services, products, and capabilities.
              </p>
            </Card>
            <Card className="flex h-full flex-col">
              <Image
                src={build}
                alt="web development"
                className="mb-5 rounded-lg"
              />
              <h3 className="font-display text-lg font-bold text-ink">Build</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                We&rsquo;ve engineered lead-generating websites for a wide
                range of industries. Our pride lies in delivering high-ROI,
                cost-effective solutions through streamlined development.
              </p>
            </Card>
            <Card className="flex h-full flex-col">
              <Image src={grow} alt="web growth" className="mb-5 rounded-lg" />
              <h3 className="font-display text-lg font-bold text-ink">Grow</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                After launching your lead-generating website, we drive growth
                through targeted{" "}
                <Link
                  className="font-semibold text-accent transition-colors hover:text-accent-hover"
                  href="/"
                >
                  SEO Niagara
                </Link>{" "}
                services. Our approach ensures sustained traffic, higher
                conversions, and ongoing business success.
              </p>
            </Card>
          </div>
        </Section>

        <Section
          className="border-y border-border bg-surface/40"
          heading="High-Impact Lead-Generation Design"
        >
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <figure className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
              <Image
                src={growth}
                alt="lead generating websites niagara"
                className="h-auto w-full"
              />
            </figure>
            <div>
              <p className="text-base leading-relaxed text-muted">
                At Infused Agency, we&rsquo;re dedicated to fueling your
                business growth through exceptional lead-generation for our{" "}
                <Link
                  className="font-semibold text-accent transition-colors hover:text-accent-hover"
                  href="/"
                >
                  website design Niagara
                </Link>{" "}
                clients &amp; beyond. From the initial concept to the final
                launch, we craft bespoke digital experiences that drive results.
                Leveraging cutting-edge platforms like NextJS, WordPress,
                React, and Shopify, we ensure your website not only looks
                stunning but also performs optimally. Our expert team combines
                strategic design with innovative technology to create
                high-converting websites that captivate your audience and
                accelerate your business success. Partner with us to transform
                your online presence and watch your business thrive.
              </p>
              <Button href={DISCOVERY_URL} className="mt-7">
                Get Started
              </Button>
            </div>
          </div>
        </Section>

        <Section heading="Sales Funnels That Convert">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="lg:order-2">
              <figure className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
                <Image
                  src={funnel}
                  alt="sales funnel website niagara"
                  className="h-auto w-full"
                />
              </figure>
            </div>
            <div className="lg:order-1">
              <p className="text-base leading-relaxed text-muted">
                Ready to turn your website visitors into loyal customers? Our
                expertly crafted sales funnels are designed to do just that. At
                Infused Agency, we build powerful, conversion-focused sales
                funnels that guide your prospects seamlessly from interest to
                action. With a strategic approach that includes captivating
                design, compelling copy, and persuasive calls-to-action, we
                ensure your funnels don&rsquo;t just capture leads&mdash;they
                drive real, measurable results.
              </p>
              <Button href={DISCOVERY_URL} className="mt-7">
                Get Started
              </Button>
            </div>
          </div>
        </Section>

        <Section
          className="border-y border-border bg-surface/40"
          heading="Conversion-Driven Web Design"
        >
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <figure className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
              <Image
                src={convert}
                alt="conversion optimization websites niagara"
                className="h-auto w-full"
              />
            </figure>
            <div>
              <p className="text-base leading-relaxed text-muted">
                Ready to transform your online presence into a conversion
                powerhouse? Our expertly crafted Conversion-Driven Web Design is
                designed to do just that. At Infused Agency, we create stunning
                websites that not only captivate your audience but also drive
                real, measurable results. With a strategic focus on user
                experience, engaging visuals, and optimized design elements, we
                ensure your website isn&rsquo;t just eye-catching&mdash;it&rsquo;s
                a powerful tool for converting visitors into loyal customers.
                From intuitive navigation to compelling calls-to-action, our
                designs are crafted to guide your prospects seamlessly from
                interest to action.
              </p>
              <Button href={DISCOVERY_URL} className="mt-7">
                Get Started
              </Button>
            </div>
          </div>
        </Section>

        <Section heading="Our websites are fast, optimized and drive leads.">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="flex h-full flex-col">
              <Image src={fast} alt="fast website design niagara" className="mb-5 rounded-lg" />
              <h3 className="font-display text-lg font-bold text-ink">
                Lightning-Fast Speed
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Experience unparalleled website speed with Infused Agency. Our
                websites load in the blink of an eye, ensuring a smooth user
                experience and higher engagement. Don&rsquo;t let slow load
                times hold you back&mdash;contact us for a website that
                delivers lightning-fast performance.
              </p>
            </Card>
            <Card className="flex h-full flex-col">
              <Image
                src={build}
                alt="web development"
                className="mb-5 rounded-lg"
              />
              <h3 className="font-display text-lg font-bold text-ink">
                Mobile Performance
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Get a website that looks and performs flawlessly on any device.
                Infused Agency ensures your site is perfectly optimized for
                mobile, delivering a seamless experience that keeps users
                engaged and converts visitors into customers.
              </p>
            </Card>
            <Card className="flex h-full flex-col">
              <Image src={grow} alt="web growth" className="mb-5 rounded-lg" />
              <h3 className="font-display text-lg font-bold text-ink">
                Rank On Google
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Unlock your website&rsquo;s potential with Infused Agency&rsquo;s
                expert SEO strategies. Our team designs and optimizes your site
                to climb the Google rankings, ensuring you stand out in search
                results. Attract more visitors and drive targeted traffic with a
                site built for success.
              </p>
            </Card>
          </div>
        </Section>

        <Section className="border-t border-border">
          <div className="mx-auto max-w-3xl">
            <TestimonialCard
              showStars
              quote="Working with JD was a pleasure. He was extremely responsive and informative from start to finish. JD is creative, efficient, and very knowledgeable in his field. He helped me and my team create a new website for my business. The design and development process was smooth and easy. I would absolutely recommend JD to anyone looking for a new or updated website for their business!"
              person="VISCA Electric"
            />
          </div>
        </Section>

        {childServices.length ? (
          <Section
            className="border-t border-border bg-surface/40"
            heading="Web design services"
          >
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {childServices.map((s) => (
                <ServiceCard key={s.url} title={s.name} href={s.url} />
              ))}
            </div>
          </Section>
        ) : null}
      </main>
      <CTA />
      <Footer />
    </>
  );
};

export default WebDesign;

export async function getStaticProps() {
  const services = require("../../lib/services");
  const { published } = services.computePublishedServices();
  const childServices = published
    .filter((r) => r.service.parentUrl === "/web-design")
    .map((r) => ({ name: r.service.name, url: r.service.url }))
    .sort((a, b) => a.name.localeCompare(b.name));
  return { props: { childServices } };
}
