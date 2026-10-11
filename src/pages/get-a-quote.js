import React from "react";
import Head from "next/head";
import Nav from "../../components/Nav/nav";
import PageHero from "../../components/ui/PageHero";
import Section from "../../components/ui/Section";
import CTA from "../../components/CTA/cta";
import Footer from "../../components/Footer/footer";
import PageJsonLd from "../../components/seo/PageJsonLd";
import { contactPageGraph } from "../lib/verticalSeoSchema";

import { InlineWidget } from "react-calendly";

const Quote = () => {
  return (
    <>
      <Head>
        <title>Infused Agency | Get A Custom Quote</title>
        <meta
          name="description"
          content="Get a free, no-obligation quote for expert web design and SEO services in Niagara. Boost your online presence with Infused Agency's tailored solutions for local businesses. Request your custom quote today!"
        />
        <link rel="canonical" href="https://infused.agency/get-a-quote" />
        <PageJsonLd
          graph={contactPageGraph({
            url: "/get-a-quote",
            name: "Infused Agency | Get A Custom Quote",
            description:
              "Get a free, no-obligation quote for expert web design and SEO services in Niagara. Boost your online presence with Infused Agency's tailored solutions for local businesses. Request your custom quote today!",
          })}
        />
      </Head>
      <Nav />
      <main className="redesign-root">
        <PageHero
          title="Get Your Free Quote"
          description="Transform your online presence with a tailored web and SEO solution."
          breadcrumbs={[{ name: "Home", href: "/" }, { name: "Get a Quote" }]}
        />

        <Section>
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-display text-h2 font-bold leading-[1.12] tracking-[-0.02em] text-ink">
                Let's Elevate Your Brand!
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
                Our team is ready to start your next web design, SEO or digital
                marketing project.
                <br />
                <br />
                The first step is to get in touch with us to book your free
                project consultation.
                <br />
                <br />
                Fill out the form to get your project started!
              </p>
            </div>
            <div className="overflow-hidden rounded-xl border border-border bg-card p-2 shadow-card sm:p-3">
              <InlineWidget url="https://calendly.com/infused-agency/project-discovery" />
            </div>
          </div>
        </Section>
      </main>
      <CTA />
      <Footer />
    </>
  );
};

export default Quote;
