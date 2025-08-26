import React from "react";
import { useState } from "react";
import { InlineWidget } from "react-calendly";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "reactstrap";
import clients from "../../../src/img/seo-niagara.search-engine-optimization-agency-st-catharines.png";

const Hero = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <section className="main-hero">
        <Container>
          <Row className="align-items-center">
            <Col lg="6">
              <h1 className="intro">
                Niagara SEO Company - St. Catharines SEO Agency
              </h1>
              <h2>
                Get <span>More Visibility</span> & Generate{" "}
                <span>More Leads</span> For Your Niagara Business
              </h2>
              <p>
                Infused Agency is a trusted SEO company in Niagara, helping
                local businesses in St. Catharines, Niagara Falls and across the
                region grow their online presence. Our team creates customized
                SEO strategies designed to improve visibility in search engines,
                attract the right customers, and generate quality leads. With a
                focus on conversion-driven results, we don’t just bring traffic
                — we help turn that traffic into real sales for your business.
              </p>
              <Link href="/work">
                <button>Check Out Our Results</button>
              </Link>
              <div className="max-w-xl mx-auto">
                {isExpanded && (
                  <p className="mt-2">
                    <h2>
                      Infused Agency: SEO Niagara Experts Helping Businesses
                      Grow
                    </h2>
                    <p>
                      Infused Agency provides customized SEO services in Niagara
                      for startups, small businesses, and established
                      organizations across multiple industries. Whether you’re
                      based in St. Catharines, Niagara Falls, or anywhere else
                      in the Niagara Region, our focus is on delivering
                      measurable results that generate leads and a strong return
                      on investment (ROI). This is what sets us apart from other
                      local SEO companies.
                    </p>
                    <h2>About Niagara</h2>
                    <p>
                      Niagara is one of Ontario’s most recognized regions,
                      famous for its world-renowned waterfalls, rich history,
                      and thriving wine country. Beyond its natural beauty,
                      Niagara has a diverse economy that spans tourism,
                      healthcare, construction, technology, and professional
                      services.
                    </p>
                    <p>
                      With its strategic location close to major Canadian and
                      U.S. markets, businesses in Niagara have an incredible
                      opportunity to expand their reach. At Infused Agency, we
                      help you capture that opportunity with Niagara SEO
                      strategies designed to outperform competitors and build
                      long-term visibility.
                    </p>
                    <h2>
                      SEO Services Tailored for Niagara, St. Catharines &
                      Niagara Falls
                    </h2>
                    <p>
                      Our team of experienced SEO Niagara specialists provides a
                      full range of services, including website audits, keyword
                      research, content optimization, and link-building. Each
                      strategy is tailored to your unique business goals,
                      ensuring you attract the right customers and drive
                      qualified leads.
                    </p>
                    <p>
                      Whether you need local SEO in St. Catharines, want to grow
                      your reach in Niagara Falls, or are looking to expand
                      across the entire Niagara Region, Infused Agency delivers
                      solutions that put your business in front of the right
                      audience.
                    </p>
                    <h2>Why Hiring a Niagara SEO Agency Matters</h2>
                    <p>
                      Trying to manage search engine optimization on your own
                      can cost more than time — it can cost your business real
                      opportunities. SEO requires technical precision, ongoing
                      content creation, and constant adaptation to Google’s
                      changing algorithms.
                    </p>
                    <p>
                      A professional SEO company like Infused Agency helps you
                      avoid wasted effort by applying proven frameworks,
                      advanced keyword research, and data-driven strategies.
                      Unlike generic DIY tools, we understand the local market
                      and the nuances of how people search for businesses in
                      Niagara Falls and St. Catharines.
                    </p>
                    <p>
                      Effective SEO isn’t just about rankings. It’s about
                      creating content that builds trust with your audience,
                      increases engagement, and ultimately drives revenue.
                      That’s why expert SEO copywriting for Niagara businesses
                      is a core part of our approach — it ensures your website
                      speaks to both search engines and real customers.
                    </p>
                    <h2>
                      Why Infused Agency Is the Best Choice for SEO in Niagara
                    </h2>
                    <p>
                      At Infused Agency, we’re not just another marketing
                      company. We’re a dedicated SEO agency in Niagara focused
                      on helping local businesses succeed. Every campaign we
                      build is custom — no cookie-cutter templates, no
                      guesswork.
                    </p>
                    <p>
                      We combine technical SEO improvements, white-hat link
                      strategies, optimized content, and local targeting to help
                      your business rise in search results. From fine-tuning
                      your Google Business Profile to creating city-specific
                      landing pages for St. Catharines and Niagara Falls, our
                      strategies are designed for long-term growth and
                      sustainable visibility.
                    </p>
                    <p>
                      When you work with Infused Agency, you get a trusted
                      partner invested in your success. We’ll help you generate
                      more leads, improve conversions, and grow your brand
                      through data-driven SEO Niagara strategies.
                    </p>
                    <h3>Industries We Serve</h3>
                    <Link href="/seo/for-therapists-alberta">
                      Therapist SEO Alberta
                    </Link>
                    -
                    <Link href="/seo/for-therapists-british-columbia">
                      Therapist SEO British Columbia
                    </Link>
                    -
                    <Link href="/seo/for-therapists-ontario">
                      Therapist SEO Ontario
                    </Link>
                    -
                    <Link href="/seo/for-therapists-quebec">
                      Therapist SEO Quebec
                    </Link>
                  </p>
                )}
                <br />
                <a
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </a>
              </div>
            </Col>
            <Col lg="6">
              <div className="trusted pd-top-80">
                <InlineWidget url="https://calendly.com/infused-agency/project-discovery" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Hero;
