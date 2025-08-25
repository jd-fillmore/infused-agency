import React from "react";
import { useState } from "react";
import { InlineWidget } from "react-calendly";
import { getLatestPosts } from "../../lib/posts";
import { Col, Container, Row } from "reactstrap";
import { format } from "date-fns";
import "react-accessible-accordion/dist/fancy-example.css";
import Head from "next/head";
import Nav from "../../../components/Nav/nav";
import Hero from "../../../components/Home/Hero/hero";
import Footer from "../../../components/Footer/footer";

import Link from "next/link";
import Image from "next/image";
import flatRock from "../../../src/img/st-catharines-seo-results.jpg";
import test1 from "../../../src/img/seo-company-niagara.png";
import test2 from "../../../src/img/seo-niagara-experts.png";
import test3 from "../../../src/img/seo-niagara-services.png";
import delta from "../../../src/img/niagara-seo-company-results.jpg";
import infused from "../../../src/img/infused-agency-seo-niagara.png";
import check from "../../../src/img/check.png";
import results from "../../../src/img/seo-agency-st-catharines.png";
import reviews from "../../../src/img/seo-niagara-reviews.png";
import clients from "../../../src/img/seo-niagara.search-engine-optimization-agency-st-catharines.png";

const Home = ({ latestPosts }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <Head>
        <title>
          SEO For Therapists Alberta - Calgary, Edmonton, Red Deer, Banff,
          Canmore - Local SEO Agency, Search Engine Optimization Expert, SEO
          Services Therapy Practices
        </title>
        <meta
          name="description"
          content="Top-rated SEO For Therapists in Alberta. Expert search engine optimization, local SEO, and digital marketing services. Boost your practice today!"
        />
        <meta
          name="google-site-verification"
          content="VK8okfPDhG2ziQHXaOAh2Nerc_pVe6vR9pcCp1WtSW8"
        />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Niagara" />
        <meta name="geo.position" content="43.0896;-79.0849" />
        <meta name="ICBM" content="43.0896, -79.0849" />

        <meta property="og:site_name" content="Infused Agency" />
        <link
          rel="canonical"
          href="https://infused.agency/seo/for-therapists-alberta"
        />
      </Head>
      <Nav />
      <section className="main-hero alberta">
        <Container>
          <Row className="align-items-center">
            <Col lg="6">
              <h1 className="intro">Alberta SEO Company for Therapists</h1>
              <h2>Get More Clients & Build Your Practice Across Alberta</h2>
              <p>
                Infused Agency is a trusted SEO company in Alberta, helping
                therapists and mental health professionals in Calgary, Edmonton,
                Red Deer and across the province grow their online presence. Our
                team creates custom SEO strategies designed to improve
                visibility in search engines, attract the right clients, and
                generate quality leads. With a focus on conversion-driven
                results, we don't just bring traffic — we help turn that traffic
                into real appointments for your practice.
              </p>
              <Link href="/work">
                <button>Check Out Our Results</button>
              </Link>
              <div className="max-w-xl mx-auto">
                {isExpanded && (
                  <p className="mt-2">
                    <h2>
                      Infused Agency: SEO Alberta Experts Helping Therapists
                      Grow
                    </h2>
                    <p>
                      Infused Agency provides custom SEO services in Alberta for
                      new practices, established therapists, and mental health
                      organizations across multiple specialties. Whether you're
                      based in Calgary, Edmonton, Red Deer, Banff, Canmore, or
                      anywhere else in Alberta, our focus is on delivering
                      measurable results that generate clients and a strong
                      return on investment (ROI). This is what sets us apart
                      from other local SEO companies.
                    </p>

                    <h2>About Alberta</h2>
                    <p>
                      Alberta is home to some of Canada's most vibrant
                      communities, from the bustling urban centers of Calgary
                      and Edmonton to the stunning mountain towns of Banff and
                      Canmore. The province has a diverse population that values
                      mental health and wellness services, creating significant
                      opportunities for therapists to connect with clients who
                      need their expertise.
                    </p>
                    <p>
                      With Alberta's growing awareness of mental health
                      importance and the increasing acceptance of therapy
                      services, mental health professionals have an incredible
                      opportunity to expand their reach. At Infused Agency, we
                      help you capture that opportunity with Alberta SEO
                      strategies designed to outperform competitors and build
                      long-term visibility for your therapy practice.
                    </p>

                    <h2>
                      SEO Services Tailored for Alberta Therapists in Calgary,
                      Edmonton & Beyond
                    </h2>
                    <p>
                      Our team of experienced SEO Alberta specialists provides a
                      full range of services, including website audits, keyword
                      research, content optimization, and link-building. Each
                      strategy is tailored to your unique practice goals,
                      ensuring you attract the right clients and drive qualified
                      inquiries.
                    </p>
                    <p>
                      Whether you need local SEO in Calgary, want to grow your
                      reach in Edmonton, or are looking to expand across Alberta
                      including Red Deer, Banff, and Canmore, Infused Agency
                      delivers solutions that put your therapy practice in front
                      of the right audience.
                    </p>

                    <h2>
                      Why Hiring an Alberta SEO Agency Matters for Therapists
                    </h2>
                    <p>
                      Trying to manage search engine optimization on your own
                      can cost more than time — it can cost your practice real
                      opportunities. SEO requires technical precision, ongoing
                      content creation, and constant adaptation to Google's
                      changing algorithms.
                    </p>
                    <p>
                      A professional SEO company like Infused Agency helps you
                      avoid wasted effort by applying proven frameworks,
                      advanced keyword research, and data-driven strategies.
                      Unlike generic DIY tools, we understand the mental health
                      market and the nuances of how people search for therapists
                      in Calgary and Edmonton.
                    </p>
                    <p>
                      Effective SEO isn't just about rankings. It's about
                      creating content that builds trust with potential clients,
                      increases engagement, and ultimately drives bookings.
                      That's why expert SEO copywriting for Alberta therapists
                      is a core part of our approach — it ensures your website
                      speaks to both search engines and real people seeking
                      help.
                    </p>

                    <h2>
                      Why Infused Agency Is the Best Choice for Therapist SEO in
                      Alberta
                    </h2>
                    <p>
                      At Infused Agency, we're not just another marketing
                      company. We're a dedicated SEO agency in Alberta focused
                      on helping local therapists succeed. Every campaign we
                      build is custom — no cookie-cutter templates, no
                      guesswork.
                    </p>
                    <p>
                      We combine technical SEO improvements, white-hat link
                      strategies, optimized content, and local targeting to help
                      your practice rise in search results. From fine-tuning
                      your Google Business Profile to creating city-specific
                      landing pages for Calgary and Edmonton, our strategies are
                      designed for long-term growth and sustainable visibility.
                    </p>
                    <p>
                      When you work with Infused Agency, you get a trusted
                      partner invested in your success. We'll help you generate
                      more client inquiries, improve conversions, and grow your
                      practice through data-driven SEO Alberta strategies.
                    </p>
                  </p>
                )}

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

      <section className="home-top-web">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <h2>
                Our Alberta SEO Clients <span>Get Results</span>
              </h2>
            </div>
          </div>
          <section className="work">
            <Row className="pd-top-40">
              <Col lg="6">
                <h3>Dr. Mila Psychotherapy</h3>
                <hr />
                <Image
                  className="img-fluid"
                  src={flatRock}
                  alt="SEO Alberta Therapist Results"
                />
                <div className="card">
                  <div className="text-center stats">
                    <h3>+550%</h3>
                    <p>Local Visibility</p>
                  </div>
                </div>
              </Col>
              <Col lg="6">
                <h3>CHM Therapy</h3>
                <hr />
                <Image
                  className="img-fluid"
                  src={delta}
                  alt="Alberta Therapy Practice SEO Results"
                />
                <div className="card">
                  <div className="text-center stats">
                    <h3>+670%</h3>
                    <p>Local Visibility</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="pd-top-40 text-center">
              <Col lg="12">
                <h2>
                  But Don't Take <span>Our Word For It</span>
                </h2>
              </Col>
            </Row>
            <Row className="pd-top-40 text-center testimonials">
              <Col lg="4">
                <Image
                  src={test1}
                  alt="seo for therapist alberta, canmore, banff, red deer, edmonton, calgary"
                />
                <p className="owner">Lucas Folino</p>
                <em>Owner - Fred's Concrete</em>
                <p className="desc">
                  "Infused Agency got me a lot more visibility through Google in
                  a short period of time. Which has led to a ton of leads for my
                  business. Very knowledgeable and they walk you through every
                  detail. Would definitely recommend!""
                </p>
              </Col>
              <Col lg="4">
                <Image src={test2} alt="seo niagara experts" />
                <p className="owner">Brandi May</p>
                <em>Owner - Brandi May Psychotherapy</em>
                <p className="desc">
                  "Infused Agency are not only clear professionals and expert in
                  their fields, but are extremely personable to work with. I
                  would definitely recommend Infused Agency to anyone looking to
                  optimize SEO!"
                </p>
              </Col>
              <Col lg="4">
                <Image src={test3} alt="seo niagara services" />
                <p className="owner">Sandro Visca</p>
                <em>Owner - VISCA Electric</em>
                <p className="desc">
                  "Working with Infused Agency was a pleasure. They were
                  extremely responsive and informative from start to finish.
                  Infused Agency is creative, efficient, and very knowledgeable
                  in their field. "
                </p>
              </Col>
            </Row>
            <Row className="pd-top-40 text-center">
              <Col lg="12">
                <Link href="/work">
                  <button>View More SEO Results</button>
                </Link>
              </Col>
            </Row>
          </section>
        </div>
      </section>

      <section className="pd-top-80 text-center">
        <Container>
          <Row>
            <Col lg="12">
              <h2>
                Ready to <span>Grow Your Business</span> With SEO in Niagara?
              </h2>
              <p>
                Take the first step toward more leads, higher rankings, and real
                growth. Whether you’re in St. Catharines, Niagara Falls, or
                anywhere across Niagara, our SEO services are built to deliver
                results.
              </p>
              <Link href="/get-a-quote">
                <button>Get Free Quote</button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="home-services">
        <div className="container">
          <div className="row pd-btm-40">
            <div className="col-lg-12 text-center">
              <h2>Niagara SEO Services</h2>
              <p>Get More Visibility</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row pd-top-40">
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Keyword Research & Strategy</h2>
                <p>
                  At Infused Agency, our SEO Niagara specialists begin every
                  campaign with detailed keyword research. We identify the most
                  relevant and profitable search terms your customers are using
                  in St. Catharines, Niagara Falls, and across the Niagara
                  Region. By analyzing your website and competitors, we craft a
                  data-driven SEO strategy designed to capture qualified traffic
                  and deliver measurable results.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Link Building</h2>
                <p>
                  A strong backlink profile is essential for higher rankings.
                  Our Niagara SEO services include ethical link-building
                  strategies that earn high-quality links from reputable
                  websites. These authoritative backlinks boost your domain
                  authority, build trust with search engines, and strengthen
                  your overall online credibility.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Content Writing</h2>
                <p>
                  Content is the foundation of effective SEO. Our Niagara
                  content writing team creates engaging, SEO-friendly copy
                  tailored to your business and industry. From optimized blog
                  posts to landing pages, we develop content that reflects your
                  brand’s voice, establishes thought leadership, and improves
                  rankings for keywords like SEO St. Catharines and SEO Niagara
                  Falls.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>On-Page SEO</h2>
                <p>
                  Our SEO Niagara experts optimize your website’s structure,
                  code, and content to ensure it performs at its best. We
                  conduct in-depth audits, refine metadata, improve internal
                  linking, and enhance site usability — all while aligning with
                  Google’s ranking factors. The result is a website that
                  attracts both search engines and users.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Local SEO</h2>
                <p>
                  For businesses in St. Catharines and Niagara Falls, local
                  visibility is key. Infused Agency ensures your business is
                  optimized for local searches by improving your Google Business
                  Profile, building local citations, and creating
                  location-specific content. These strategies help you appear in
                  Google’s Local Pack, maps, and other high-visibility areas
                  where potential customers are searching.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Technical SEO</h2>
                <p>
                  Behind every successful SEO campaign is a strong technical
                  foundation. Our technical SEO Niagara specialists enhance your
                  site’s speed, mobile performance, indexing, and security. From
                  fixing crawl errors to optimizing site architecture, we make
                  sure search engines can easily navigate and rank your website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-lighter-blue pd-top-80 pd-btm-80 text-center">
        <Container>
          <Row>
            <Col lg="12">
              <h2>
                Get <span>More Visibility In Niagara</span> Now!
              </h2>
              <p>
                Take the first step toward more leads, higher rankings, and real
                growth. Whether you’re in St. Catharines, Niagara Falls, or
                anywhere across Niagara, our SEO services are built to deliver
                results.
              </p>
              <Link href="/get-a-quote">
                <button>Get Free Quote</button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="why pd-top-80">
        <Container>
          <Row className="text-center">
            <Col lg="12">
              <h2>Choosing Infused Agency as Your SEO Niagara Partner</h2>
            </Col>
          </Row>
          <Row className="align-items-center pd-top-40 pd-btm-40">
            <Col lg="6">
              <p>
                In today’s competitive market, you can’t afford to partner with
                just any digital marketing firm. You need a team that takes the
                time to understand your business goals, your brand’s message,
                and the customers you want to reach. At Infused Agency, we go
                beyond surface-level strategies — our focus is on delivering
                real results that generate the highest possible return on your
                investment.
              </p>
            </Col>
            <Col lg="6">
              <Image src={infused} alt="infused agency seo niagara" />
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <h3>Our Approach</h3>

              <p>
                Our comprehensive SEO process — Discover, Analyze, Strategize,
                Execute, Measure, Report, and Refine — ensures that your
                campaign is continuously optimized for growth. This agile
                methodology allows us to adapt to industry changes quickly while
                keeping your business ahead of competitors in local search
                results.
              </p>

              <h3>Supporting Local Businesses in Niagara</h3>

              <p>
                We understand the challenges local businesses face when trying
                to stand out online. That’s why we specialize in small business
                SEO in Niagara, St. Catharines, and Niagara Falls — giving
                entrepreneurs the tools and strategies needed to gain traction
                in local search, attract qualified leads, and compete
                effectively in their markets.
              </p>

              <p>
                With Infused Agency, you get more than just an SEO provider. You
                get a partner who’s invested in your long-term success with
                tailored SEO Niagara services that build credibility,
                visibility, and growth.
              </p>
            </Col>
          </Row>
          <Row className="text-center pd-top-40">
            <Col lg="4">
              <Image height="50" src={check} alt="client focused seo" />
              <h3 className="pd-top-20">Client-Focused SEO Services</h3>
              <p>
                At Infused Agency, we treat your business like it’s our own.
                Your success is the measure of our success, which is why we take
                the time to understand your goals and challenges. Each client
                works with a dedicated SEO Niagara specialist who provides
                personalized attention and ongoing monitoring to deliver the
                best possible results.
              </p>
            </Col>
            <Col lg="4">
              <Image height="50" src={check} alt="seo optimization niagara" />
              <h3 className="pd-top-20">Continuous Optimization</h3>
              <p>
                SEO isn’t a one-time project — it’s an ongoing process. Our team
                of Niagara SEO experts constantly tracks your website’s
                performance, adapting strategies to keep pace with Google’s
                updates and industry changes. This ensures your business stays
                competitive in St. Catharines, Niagara Falls, and across
                Niagara.
              </p>
            </Col>
            <Col lg="4">
              <Image height="50" src={check} alt="affordable seo niagara" />
              <h3 className="pd-top-20">Affordable SEO Solutions</h3>
              <p>
                We believe in delivering exceptional value without unexpected
                costs. Infused Agency offers affordable SEO Niagara services
                with transparent pricing and no hidden fees. Whether you’re a
                small business or a growing company, our solutions are designed
                to fit your budget while generating long-term results.
              </p>
            </Col>
          </Row>
          <Row className="text-center pd-top-40">
            <Col lg="4">
              <Image height="50" src={check} alt="seo niagara reporting" />
              <h3 className="pd-top-20">Transparent Reporting</h3>
              <p>
                You’ll never be left in the dark about your SEO campaign. Our
                clear, detailed reports give you full visibility into how your
                website is performing and the steps we’re taking to improve it.
                With Infused Agency, you can expect consistent updates and
                honest communication every step of the way.
              </p>
            </Col>
            <Col lg="4">
              <Image
                height="50"
                src={check}
                alt="seo optimization st. catharines"
              />
              <h3 className="pd-top-20">Backed by Google Expertise</h3>
              <p>
                Our Niagara SEO specialists stay ahead of the curve with deep
                knowledge of Google’s latest updates, best practices, and
                ethical SEO strategies. By following proven, white-hat methods,
                we help your website achieve sustainable rankings and long-term
                growth.
              </p>
            </Col>
            <Col lg="4">
              <Image height="50" src={check} alt="seo niagara audit" />
              <h3 className="pd-top-20">Free SEO Audit</h3>
              <p>
                Not sure how your website is performing? Infused Agency offers a
                complimentary SEO audit for Niagara businesses. We’ll review
                your website’s current performance, highlight opportunities for
                improvement, and provide recommendations tailored to your
                business goals — with no obligation.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="reviews">
        <Container>
          <Row className="text-center pd-top-40">
            <Col lg="12">
              <h2>Trusted SEO Niagara Experts with Proven Results</h2>
            </Col>
          </Row>
          <Row className="align-items-center pd-top-20">
            <Col lg="6">
              <p>
                At Infused Agency, results speak for themselves. With over{" "}
                <span>
                  50 SEO clients served and 40+ five-star Google reviews
                </span>
                , we’ve built a reputation as a leading SEO agency in Niagara,
                St. Catharines, and Niagara Falls. Our clients consistently see
                measurable improvements in search rankings, website traffic, and
                lead generation.
                <br />
                <br />
                We’re proud to have helped businesses of all sizes — from small
                startups to established companies — achieve stronger online
                visibility and higher conversions. Every strategy we implement
                is backed by data, tailored to your goals, and focused on
                delivering a real return on investment. When you work with
                Infused Agency, you’re partnering with a trusted team that
                combines local market expertise, technical SEO skills, and
                creative content strategies to help your business dominate
                search results across Niagara.
              </p>
            </Col>
            <Col lg="6">
              <Image
                className="img-fluid"
                src={reviews}
                alt="seo niagara reviews"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="home-faq">
        <Container>
          <Row className="text-center pd-btm-40">
            <Col lg="12">
              <h2>Frequently Asked Questions For Niagara SEO Services</h2>
            </Col>
          </Row>

          <Row>
            <Col lg="12">
              <h3>
                What makes SEO Niagara services different from general SEO?
              </h3>
              <p>
                SEO Niagara services are specifically tailored to help local
                businesses in St. Catharines, Niagara Falls, and across the
                Niagara Region rank higher in local search results. We
                understand the unique market dynamics, local competition, and
                search patterns specific to the Niagara area. Our SEO strategies
                include local citation building, Google Business Profile
                optimization, and location-specific content that helps your
                business appear when customers search for services in your area.
              </p>

              <h3>
                How long does it take to see results from SEO St. Catharines
                campaigns?
              </h3>
              <p>
                Most SEO St. Catharines clients start seeing initial
                improvements in search visibility within 3-6 months, with
                significant results typically appearing by 6-12 months. The
                timeline depends on factors like your current website
                performance, competition level, and the keywords you're
                targeting. Our proven SEO process includes continuous
                optimization and transparent reporting, so you'll see steady
                progress as we work to improve your rankings in St. Catharines
                and surrounding areas.
              </p>

              <h3>
                Can small businesses in Niagara Falls compete with larger
                companies through SEO?
              </h3>
              <p>
                Absolutely! SEO Niagara Falls strategies are particularly
                effective for small businesses because they focus on local
                search optimization where you can outrank larger competitors. By
                targeting location-specific keywords like "services near Niagara
                Falls" and optimizing for local search intent, small businesses
                often achieve better visibility than big corporations. Our
                affordable SEO solutions are designed specifically to help small
                businesses compete effectively in their local markets.
              </p>

              <h3>
                What's included in your SEO Niagara audit and strategy
                development?
              </h3>
              <p>
                Our comprehensive SEO Niagara audit includes technical website
                analysis, keyword research for St. Catharines and Niagara Falls
                markets, competitor analysis, content evaluation, and local SEO
                assessment. We examine your current Google Business Profile,
                local citations, backlink profile, and site performance. Based
                on these findings, we develop a customized SEO strategy that
                addresses your specific challenges and opportunities in the
                Niagara Region.
              </p>

              <h3>
                How do you measure the success of SEO St. Catharines campaigns?
              </h3>
              <p>
                We track multiple metrics to measure SEO St. Catharines success,
                including search rankings for targeted keywords, organic website
                traffic growth, local visibility improvements, and most
                importantly, lead generation and conversions. Our transparent
                reporting shows you exactly how your website is performing,
                which keywords are driving traffic, and how many potential
                customers are finding your business through search. We provide
                detailed monthly reports with clear ROI measurements.
              </p>

              <h3>
                Do you guarantee first-page rankings for SEO Niagara Falls
                keywords?
              </h3>
              <p>
                While we can't guarantee specific rankings (as search engines
                constantly update their algorithms), we do guarantee our
                commitment to improving your visibility through proven SEO
                Niagara Falls strategies. Our track record shows consistent
                success helping businesses achieve first-page rankings for their
                target keywords. We focus on sustainable, white-hat SEO
                techniques that build long-term visibility rather than quick
                fixes that might get penalized by Google.
              </p>

              <h3>
                What's the difference between SEO and local SEO for Niagara
                businesses?
              </h3>
              <p>
                Traditional SEO focuses on ranking for broad keywords nationally
                or globally, while local SEO Niagara targets location-specific
                searches like "SEO company near me" or "St. Catharines SEO
                services." Local SEO includes optimizing your Google Business
                Profile, building local citations, managing online reviews, and
                creating location-based content. For Niagara businesses serving
                local customers, local SEO is typically more valuable as it
                helps you appear in Google's Local Pack and Maps results.
              </p>

              <h3>
                How much do SEO services cost for businesses in St. Catharines
                and Niagara Falls?
              </h3>
              <p>
                SEO St. Catharines and SEO Niagara Falls pricing varies based on
                your business size, competition level, and specific goals. We
                offer affordable SEO packages starting from basic local
                optimization to comprehensive enterprise solutions. Our
                transparent pricing includes no hidden fees, and we provide
                customized quotes based on your specific needs. We believe in
                delivering exceptional value, and many of our clients see a
                positive ROI within the first year of their SEO investment.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="home-blog">
        <Container>
          <Row>
            <Col lg="12">
              <h2 className="title">Latest Blog Posts</h2>

              <Row>
                {latestPosts.map(({ id, date, title, excerpt, image }) => (
                  <Col lg="4" md="6" sm="12" key={id} className="mb-4">
                    <Link href={`/posts/${id}`}>
                      {image && (
                        <Image
                          src={image}
                          className="img-fluid"
                          alt={`Preview image for ${title}`}
                          width={600}
                          height={400}
                        />
                      )}
                    </Link>
                    <div className="post-card card">
                      <h3>
                        <Link href={`/posts/${id}`}>{title}</Link>
                      </h3>
                      <small>
                        {format(new Date(date), "eeee, MMMM d, yyyy")}
                      </small>
                      <p>{excerpt}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="cta home-cta">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <h2>
                Ready to <span>Grow Your Business</span>?
              </h2>
              <p>Get your free quote below!</p>

              <Link href="/get-a-quote" rel="noreferrer">
                <button>
                  Get Started
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    class="absolute left-1/2 top-1/2 translate-centered group-hover:ml-1 transition-250"
                    height="20px"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="map-cta">
        <Container>
          <Row>
            <Col lg="12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2910.712155785956!2d-79.21034682429627!3d43.152573384666596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d3507111975161%3A0x18a1198be6280a70!2s%F0%9F%9A%80%20Infused%20Agency%20%7C%20Niagara%20Web%20Design%20%26%20SEO%20Company!5e0!3m2!1sen!2sca!4v1725932520162!5m2!1sen!2sca"
                width="100%"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="infused agency"
              ></iframe>
              <p>
                <a
                  href="https://maps.google.com/maps?ll=43.15257,-79.207772&z=15&t=m&hl=en&gl=CA&mapclient=embed&cid=1774727816813218416"
                  target="_blank"
                >
                  73 Alexandra Blvd, St. Catharines, ON L2P 1K2
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const latestPosts = getLatestPosts(3);
  return {
    props: {
      latestPosts,
    },
  };
}
