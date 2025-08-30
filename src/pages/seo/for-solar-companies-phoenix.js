import React from "react";
import { useState } from "react";
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
import results1 from "../../../src/img/seo-for-therapists-alberta-results.jpg";
import test1 from "../../../src/img/seo-for-counsellors-alberta.png";
import test2 from "../../../src/img/seo-for-alberta-psychotherapists.png";
import test3 from "../../../src/img/seo-for-alberta-therapists.png";
import results2 from "../../../src/img/seo-for-psychotherapists-alberta-results.jpg";
import infused from "../../../src/img/seo-for-therapists-agency-alberta.png";
import check from "../../../src/img/check.png";
import reviews from "../../../src/img/seo-for-therapists-alberta-reviews.png";
import delta from "../../../src/img/niagara-seo-company-results.jpg";
import data1 from "../../../src/img/gsc-flat.png";

const Home = ({ latestPosts }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <Head>
        <title>
          #1 SEO for Phoenix Solar Companies | Solar SEO Agency & Services
        </title>
        <meta
          name="description"
          content="Helping solar installers, renewable energy businesses, and solar companies in Phoenix grow their leads and sales with expert local SEO services."
        />
        <meta
          name="google-site-verification"
          content="VK8okfPDhG2ziQHXaOAh2Nerc_pVe6vR9pcCp1WtSW8"
        />

        <meta property="og:site_name" content="Infused Agency" />
        <link
          rel="canonical"
          href="https://infused.agency/seo/for-solar-companies-phoenix"
        />
      </Head>
      <Nav />
      <section className="phoenix-solar seo-city-hero">
        <Container>
          <Row className="align-items-center">
            <Col lg="12">
              <h1 className="intro">
                Phoenix SEO for Solar Companies – Your Local Solar SEO Agency
              </h1>
              <h2>
                Grow Your Solar Business and Attract More Leads Across Phoenix
              </h2>
              <p>
                Infused Agency is a trusted solar SEO agency in Phoenix, helping
                solar companies, installers, and renewable energy businesses
                increase their online visibility and generate more qualified
                leads. Our team develops custom SEO strategies for solar
                companies in Phoenix, designed to improve search engine
                rankings, drive targeted traffic, and convert visitors into real
                inquiries. Whether you’re a solar business in{" "}
                <Link href="/seo/for-solar-companies-phoenix">Phoenix</Link>,{" "}
                <Link href="/seo/for-solar-companies-tucson">Tucson</Link>,{" "}
                <Link href="/seo/for-solar-companies-mesa">Mesa</Link>,{" "}
                <Link href="/seo/for-solar-companies-gilbert">Gilbert</Link>,{" "}
                <Link href="/seo/for-solar-companies-chandler">Chandler</Link>,{" "}
                <Link href="/seo/for-solar-companies-glendale">Glendale</Link>,{" "}
                <Link href="/seo/for-solar-companies-scottsdale">
                  Scottsdale
                </Link>
                , <Link href="/seo/for-solar-companies-peoria">Peoria</Link>,{" "}
                <Link href="/seo/for-solar-companies-tempe">Tempe</Link>,{" "}
                <Link href="/seo/for-solar-companies-surprise">Surprise</Link>{" "}
                or anywhere else in{" "}
                <Link href="/seo/for-solar-companies-arizona">Arizona</Link>,
                we'll help your solar company get more visibility.
              </p>

              <Link href="/work">
                <button>Check Out Our Results</button>
              </Link>
              <br />
              <br />
              <div className="max-w-xl mx-auto">
                {isExpanded && (
                  <p className="mt-2">
                    <h2>
                      Infused Agency: Expert SEO Services for Solar Companies in
                      Phoenix
                    </h2>
                    <p>
                      We provide tailored solar SEO services in Phoenix for new
                      and established solar businesses, installers, and energy
                      providers. Our focus is on delivering measurable results
                      that generate leads and maximize ROI. This is what sets us
                      apart from other local SEO agencies.
                    </p>

                    <h2>About Phoenix, Arizona</h2>
                    <p>
                      Phoenix is home to one of the fastest-growing metropolitan
                      areas in the U.S., with vibrant communities across
                      Scottsdale, Tempe, Mesa, Glendale, and Chandler. With
                      abundant sunshine year-round and an increasing push toward
                      renewable energy, homeowners and businesses are actively
                      seeking solar solutions. This creates a unique opportunity
                      for solar companies to connect with potential customers in
                      both urban centers and surrounding neighborhoods
                      throughout Phoenix.
                    </p>
                    <p>
                      As Arizona continues to expand its solar adoption, solar
                      companies have a massive opportunity to dominate local
                      search results. At Infused Agency, we help you capture
                      this opportunity with SEO strategies for solar businesses
                      in Phoenix designed to outperform competitors and build
                      long-term visibility for your company.
                    </p>

                    <h2>
                      SEO Services Tailored for Solar Companies in Phoenix
                    </h2>
                    <p>
                      Our team of experienced Phoenix solar SEO specialists
                      offers a full range of services, including website audits,
                      keyword research, content optimization, and link-building.
                      Every strategy is custom-built for your business goals,
                      ensuring you attract high-intent leads and drive qualified
                      inquiries.
                    </p>
                    <p>
                      Whether you’re a small solar installer or a large
                      renewable energy company, our SEO services for solar
                      companies in Phoenix put your business in front of the
                      right audience.
                    </p>

                    <h2>Why Hiring a Phoenix Solar SEO Agency Matters</h2>
                    <p>
                      Managing SEO on your own can waste time and cost
                      opportunities. Effective SEO requires technical know-how,
                      ongoing content creation, and staying up to date with
                      Google’s evolving algorithms.
                    </p>
                    <p>
                      A professional SEO agency for solar companies in Phoenix
                      like Infused Agency applies proven frameworks, advanced
                      keyword research, and data-driven strategies. Unlike
                      generic tools, we understand the solar industry and how
                      potential customers search for solar installers and solar
                      services in Phoenix.
                    </p>
                    <p>
                      Effective SEO goes beyond rankings. It’s about creating
                      content that builds trust, engages visitors, and drives
                      conversions. That’s why our approach emphasizes expert SEO
                      copywriting for solar companies, ensuring your website
                      speaks both to search engines and the homeowners or
                      businesses seeking solar solutions.
                    </p>

                    <h2>
                      Why Infused Agency Is the Best Choice for Solar SEO in
                      Phoenix
                    </h2>
                    <p>
                      We’re not just another marketing company. Infused Agency
                      is a dedicated Phoenix solar SEO agency focused on helping
                      local solar businesses succeed. Every campaign is
                      custom-built — no cookie-cutter templates, no guesswork.
                    </p>
                    <p>
                      We combine technical SEO, white-hat link strategies,
                      optimized content, and local targeting to help your solar
                      company rise in search results. From refining your Google
                      Business Profile to creating location-specific content for
                      Phoenix neighborhoods, our strategies are designed for
                      sustainable growth and long-term visibility.
                    </p>
                    <p>
                      Partnering with Infused Agency means working with a team
                      invested in your success. We help solar companies generate
                      more inquiries, improve conversions, and grow their
                      business with data-driven SEO for solar companies in
                      Phoenix.
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
          </Row>
        </Container>
      </section>

      <section className="home-top-web">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <h2>
                Our Phoenix Solar Company SEO Clients <span>Get Results</span>
              </h2>
            </div>
          </div>
          <section className="work">
            <Row className="pd-top-40">
              <Col lg="12">
                <h3>Delta Energy Solutions</h3>
                <hr />
                <Image
                  className="img-fluid"
                  src={delta}
                  alt="SEO Solar Agency phoenix, solar seo services phoenix, seo for solar businesses phoenix, seo services for solar companies phoenix, seo for solar company phoenix"
                />
                <div className="card">
                  <div className="text-center pd-btm-20">
                    <svg
                      width="125"
                      height="25"
                      viewBox="0 0 125 25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <symbol id="star" viewBox="0 0 100 100">
                          <polygon
                            fill="#e2c044"
                            points="50,8 61,38 94,38 66,58 76,90 50,71 24,90 34,58 6,38 39,38"
                          />
                        </symbol>
                      </defs>

                      <use href="#star" x="0" y="0" width="25" height="25" />
                      <use href="#star" x="25" y="0" width="25" height="25" />
                      <use href="#star" x="50" y="0" width="25" height="25" />
                      <use href="#star" x="75" y="0" width="25" height="25" />
                      <use href="#star" x="100" y="0" width="25" height="25" />
                    </svg>
                  </div>
                  <p className="w-75 text-center">
                    <em>
                      "Infused Agency completely transformed our online
                      presence. Their solar SEO services in Phoenix helped our
                      company show up for the right searches, and we’ve seen a
                      steady increase in leads. If you’re looking for expert SEO
                      for solar companies in Phoenix, they’re the team to
                      trust!"
                    </em>
                  </p>
                  <br />
                  <h3 class="text-center">After working with us:</h3>
                  <div className="text-center stats">
                    <h3>+670%</h3>
                    <p>Local Visibility</p>
                  </div>
                  <Image
                    className="img-fluid"
                    unoptimized
                    src={data1}
                    alt="delta energy solutions niagara seo"
                  />
                </div>
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
                Ready to <span>Grow Your Practice</span> With Therapy SEO in
                Alberta?
              </h2>
              <p>
                Take the first step toward more clients, higher rankings, and
                real growth. Whether you're a therapist, psychologist,
                counsellor, or psychotherapist anywhere in Alberta, our SEO
                services are built to deliver results for mental health
                professionals.
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
              <h2>Alberta SEO Services for Therapists</h2>
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
                  At Infused Agency, our SEO Alberta specialists begin every
                  campaign with detailed keyword research. We identify the most
                  relevant and profitable search terms your potential clients
                  are using across Alberta. By analyzing your website and
                  competitors, we craft a data-driven SEO strategy designed to
                  capture qualified traffic and deliver measurable results.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Link Building</h2>
                <p>
                  A strong backlink profile is essential for higher rankings.
                  Our Alberta SEO services include ethical link-building
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
                  Content is the foundation of effective SEO. Our Alberta
                  content writing team creates engaging, SEO-friendly copy
                  tailored to your mental health practice and specialties. From
                  optimized blog posts to landing pages, we develop content that
                  reflects your practice's voice, establishes expertise, and
                  improves rankings for keywords like SEO Alberta psychologists
                  and SEO Alberta counsellors.
                </p>
              </div>
            </div>
          </div>
          <div className="row pd-btm-80">
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>On-Page SEO</h2>
                <p>
                  Our SEO Alberta experts optimize your website's structure,
                  code, and content to ensure it performs at its best. We
                  conduct in-depth audits, refine metadata, improve internal
                  linking, and enhance site usability — all while aligning with
                  Google's ranking factors. The result is a website that
                  attracts both search engines and potential clients.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Local SEO</h2>
                <p>
                  For mental health professionals in Alberta, local visibility
                  is key. Infused Agency ensures your practice is optimized for
                  local searches by improving your Google Business Profile,
                  building local citations, and creating location-specific
                  content. These strategies help you appear in Google's Local
                  Pack, maps, and other high-visibility areas where potential
                  clients are searching.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Technical SEO</h2>
                <p>
                  Behind every successful SEO campaign is a strong technical
                  foundation. Our technical SEO Alberta specialists enhance your
                  site's speed, mobile performance, indexing, and security. From
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
                Get <span>More Visibility</span> In Alberta Now!
              </h2>
              <p>
                Take the first step toward more clients, higher rankings, and
                real growth. Whether you're a therapist, psychologist,
                counsellor, or psychotherapist anywhere in Alberta, our SEO
                services are built to deliver results for mental health
                professionals.
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
              <h2>
                Choosing Infused Agency as Your Therapist SEO Alberta Partner
              </h2>
            </Col>
          </Row>
          <Row className="align-items-center pd-top-40 pd-btm-40">
            <Col lg="6">
              <p>
                In today's competitive market, you can't afford to partner with
                just any digital marketing firm. You need a team that takes the
                time to understand your practice goals, your therapeutic
                approach, and the clients you want to reach. At Infused Agency,
                we go beyond surface-level strategies — our focus is on
                delivering real results that generate the highest possible
                return on your investment.
              </p>
            </Col>
            <Col lg="6">
              <Image
                className="img-fluid"
                src={infused}
                alt="infused agency seo for therapists alberta"
              />
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
                keeping your practice ahead of competitors in local search
                results.
              </p>

              <h3>Supporting Local Mental Health Professionals in Alberta</h3>

              <p>
                We understand the challenges therapy practices face when trying
                to stand out online. That's why we specialize in small practice
                SEO in Alberta — giving therapists, psychologists, counsellors,
                and psychotherapists the tools and strategies needed to gain
                traction in local search, attract qualified clients, and compete
                effectively in their markets.
              </p>

              <p>
                With Infused Agency, you get more than just an SEO provider. You
                get a partner who's invested in your long-term success with
                tailored SEO Alberta services that build credibility,
                visibility, and growth.
              </p>
            </Col>
          </Row>
          <Row className="text-center pd-top-40">
            <Col lg="4">
              <Image
                height="50"
                src={check}
                alt="seo expert for therapists alberta"
              />
              <h3 className="pd-top-20">Client-Focused SEO Services</h3>
              <p>
                At Infused Agency, we treat your practice like it's our own.
                Your success is the measure of our success, which is why we take
                the time to understand your goals and challenges. Each client
                works with a dedicated SEO Alberta specialist who provides
                personalized attention and ongoing monitoring to deliver the
                best possible results.
              </p>
            </Col>
            <Col lg="4">
              <Image
                height="50"
                src={check}
                alt="seo optimization for counsellors alberta"
              />
              <h3 className="pd-top-20">Continuous Optimization</h3>
              <p>
                SEO isn't a one-time project — it's an ongoing process. Our team
                of Alberta SEO experts constantly tracks your website's
                performance, adapting strategies to keep pace with Google's
                updates and industry changes. This ensures your practice stays
                competitive across Alberta.
              </p>
            </Col>
            <Col lg="4">
              <Image
                height="50"
                src={check}
                alt="affordable seo for therapists alberta"
              />
              <h3 className="pd-top-20">Affordable SEO Solutions</h3>
              <p>
                We believe in delivering exceptional value without unexpected
                costs. Infused Agency offers affordable SEO Alberta services
                with transparent pricing and no hidden fees. Whether you're a
                new psychologist, established counsellor, or growing
                psychotherapy practice, our solutions are designed to fit your
                budget while generating long-term results.
              </p>
            </Col>
          </Row>
          <Row className="text-center pd-top-40">
            <Col lg="4">
              <Image
                height="50"
                src={check}
                alt="seo reporting for therapy practices alberta"
              />
              <h3 className="pd-top-20">Transparent Reporting</h3>
              <p>
                You'll never be left in the dark about your SEO campaign. Our
                clear, detailed reports give you full visibility into how your
                website is performing and the steps we're taking to improve it.
                With Infused Agency, you can expect consistent updates and
                honest communication every step of the way.
              </p>
            </Col>
            <Col lg="4">
              <Image
                height="50"
                src={check}
                alt="seo optimization for psychotherapists alberta"
              />
              <h3 className="pd-top-20">Backed by Google Expertise</h3>
              <p>
                Our Alberta SEO specialists stay ahead of the curve with deep
                knowledge of Google's latest updates, best practices, and
                ethical SEO strategies. By following proven, white-hat methods,
                we help your website achieve sustainable rankings and long-term
                growth.
              </p>
            </Col>
            <Col lg="4">
              <Image
                height="50"
                src={check}
                alt="seo audit for therapists alberta"
              />
              <h3 className="pd-top-20">Free SEO Audit</h3>
              <p>
                Not sure how your website is performing? Infused Agency offers a
                complimentary SEO audit for Alberta mental health professionals.
                We'll review your website's current performance, highlight
                opportunities for improvement, and provide recommendations
                tailored to your practice goals — with no obligation.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="reviews">
        <Container>
          <Row className="text-center pd-top-40">
            <Col lg="12">
              <h2>Trusted SEO Alberta Experts with Proven Results</h2>
            </Col>
          </Row>
          <Row className="align-items-center pd-top-20">
            <Col lg="6">
              <p>
                At Infused Agency, results speak for themselves. With over 50
                SEO clients served and 40+ five-star Google reviews, we've built
                a reputation as a leading SEO agency in Alberta. Our clients
                consistently see measurable improvements in search rankings,
                website traffic, and client inquiries.
                <br />
                <br />
                We're proud to have helped mental health practices of all sizes
                — from solo practitioners to established psychology clinics —
                achieve stronger online visibility and higher conversions. Every
                strategy we implement is backed by data, tailored to your goals,
                and focused on delivering a real return on investment. When you
                work with Infused Agency, you're partnering with a trusted team
                that combines local market expertise, technical SEO skills, and
                creative content strategies to help your practice dominate
                search results across Alberta.
              </p>
            </Col>
            <Col lg="6">
              <Image
                className="img-fluid"
                src={reviews}
                alt="seo therapy practice alberta reviews"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="home-faq">
        <Container>
          <Row className="text-center pd-btm-40">
            <Col lg="12">
              <h2>
                Frequently Asked Questions For Alberta Therapy SEO Services
              </h2>
            </Col>
          </Row>

          <Row>
            <Col lg="12">
              <h3>
                What makes Therapy SEO Alberta services different from general
                SEO?
              </h3>
              <p>
                Our SEO Therapy Alberta services are specifically tailored to
                help local mental health professionals across Alberta rank
                higher in local search results. We understand the unique market
                dynamics, local competition, and search patterns specific to
                Alberta. Our SEO strategies include local citation building,
                Google Business Profile optimization, and location-specific
                content that helps your practice appear when clients search for
                therapy, counselling, or psychology services in your area.
              </p>

              <h3>
                How long does it take to see results from SEO Alberta
                Psychotherapist campaigns?
              </h3>
              <p>
                Most SEO Psychotherapist Alberta clients start seeing initial
                improvements in search visibility within 3-6 months, with
                significant results typically appearing by 6-12 months. The
                timeline depends on factors like your current website
                performance, competition level, and the keywords you're
                targeting. Our proven SEO process includes continuous
                optimization and transparent reporting, so you'll see steady
                progress as we work to improve your rankings across Alberta.
              </p>

              <h3>
                Can small mental health practices in Alberta compete with larger
                clinics through SEO?
              </h3>
              <p>
                Absolutely! SEO for Therapist in Alberta strategies are
                particularly effective for small practices because they focus on
                local search optimization where you can outrank larger
                competitors. By targeting location-specific keywords like
                "psychologist near me Alberta" and optimizing for local search
                intent, small practices often achieve better visibility than big
                clinics. Our affordable SEO solutions are designed specifically
                to help small practices compete effectively in their local
                markets.
              </p>

              <h3>
                What's included in your SEO Counsellor Alberta audit and
                strategy development?
              </h3>
              <p>
                Our comprehensive Therapy SEO Alberta audit includes technical
                website analysis, keyword research for Alberta markets,
                competitor analysis, content evaluation, and local SEO
                assessment. We examine your current Google Business Profile,
                local citations, backlink profile, and site performance. Based
                on these findings, we develop a customized SEO strategy that
                addresses your specific challenges and opportunities in Alberta.
              </p>

              <h3>
                How do you measure the success of SEO Alberta campaigns for
                therapists?
              </h3>
              <p>
                We track multiple metrics to measure SEO success for Alberta
                counsellors, therapists and mental health professionals,
                including search rankings for targeted keywords, organic website
                traffic growth, local visibility improvements, and most
                importantly, client inquiries and conversions. Our transparent
                reporting shows you exactly how your website is performing,
                which keywords are driving traffic, and how many potential
                clients are finding your practice through search. We provide
                detailed monthly reports with clear ROI measurements.
              </p>

              <h3>
                Do you guarantee first-page rankings for SEO Alberta keywords
                for therapists?
              </h3>
              <p>
                While we can't guarantee specific rankings (as search engines
                constantly update their algorithms), we do guarantee our
                commitment to improving your visibility through proven SEO
                Therapist Alberta strategies. Our track record shows consistent
                success helping practices achieve first-page rankings for their
                target keywords. We focus on sustainable, white-hat SEO
                techniques that build long-term visibility rather than quick
                fixes that might get penalized by Google.
              </p>

              <h3>
                What's the difference between SEO and local SEO for Alberta
                mental health professionals?
              </h3>
              <p>
                Traditional SEO focuses on ranking for broad keywords nationally
                or globally, while local SEO Alberta targets location-specific
                searches like "counsellor near me" or "Alberta psychology
                services." Local SEO includes optimizing your Google Business
                Profile, building local citations, managing online reviews, and
                creating location-based content. For Alberta mental health
                professionals serving local clients, local SEO is typically more
                valuable as it helps you appear in Google's Local Pack and Maps
                results.
              </p>

              <h3>
                How much do SEO services cost for mental health practices in
                Alberta?
              </h3>
              <p>
                SEO Alberta pricing varies based on your practice size,
                competition level, and specific goals. We offer affordable SEO
                packages starting from basic local optimization to comprehensive
                practice solutions. Our transparent pricing includes no hidden
                fees, and we provide customized quotes based on your specific
                needs. We believe in delivering exceptional value, and many of
                our clients see a positive ROI within the first year of their
                SEO investment.
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9597234.543309616!2d-125.532507303393!3d54.03693962859796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5309b282a82419b5%3A0xb0a9479a409b8e9e!2sAlberta!5e0!3m2!1sen!2sca!4v1756147418003!5m2!1sen!2sca"
                width="100%"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
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
