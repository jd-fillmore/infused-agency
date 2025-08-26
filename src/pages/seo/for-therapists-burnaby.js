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
import results1 from "../../../src/img/seo-for-therapists-burnaby-results.jpg";
import test1 from "../../../src/img/seo-for-counsellors-burnaby.png";
import test2 from "../../../src/img/seo-for-burnaby-psychotherapists.png";
import test3 from "../../../src/img/seo-for-burnaby-therapists.png";
import results2 from "../../../src/img/seo-for-psychotherapists-burnaby-results.jpg";
import infused from "../../../src/img/seo-for-therapists-agency-burnaby.png";
import check from "../../../src/img/check.png";
import reviews from "../../../src/img/seo-for-therapists-burnaby-reviews.png";

const Home = ({ latestPosts }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <Head>
        <title>
          #1 SEO for Burnaby Therapists | Counsellor & Therapy SEO Company
          Helping Psychologists, Counsellors & Mental Health Professionals Grow
          Their Practice with Local SEO in Burnaby
        </title>
        <meta
          name="description"
          content="Looking for SEO for therapists in Burnaby? Our proven strategies help counsellors and psychologists rank higher, attract ideal clients, and grow their practice."
        />
        <meta
          name="google-site-verification"
          content="VK8okfPDhG2ziQHXaOAh2Nerc_pVe6vR9pcCp1WtSW8"
        />

        <meta property="og:site_name" content="Infused Agency" />
        <link
          rel="canonical"
          href="https://infused.agency/seo/for-therapists-burnaby"
        />
      </Head>
      <Nav />
      <section className="main-hero alberta">
        <Container>
          <Row className="align-items-center">
            <Col lg="12">
              <h1 className="intro">
                Burnaby SEO Company for Therapists - Burnaby Counsellor SEO
                Agency
              </h1>
              <h2>Get More Clients & Build Your Practice Across Burnaby</h2>
              <p>
                Infused Agency is a trusted SEO company in Burnaby, helping
                therapists, counsellors, psychologists, and mental health
                professionals across the province grow their online presence.
                Our team creates custom SEO strategies designed to improve
                visibility in search engines, attract the right clients, and
                generate quality leads. With a focus on conversion-driven
                results, we don't just bring traffic — we help turn that traffic
                into real appointments for your practice. Whether you're a
                therapist in{" "}
                <Link href="/seo/for-therapists-vancouver">Vancouver</Link>,{" "}
                <Link href="/seo/for-therapists-surrey">Surrey</Link>,{" "}
                <Link href="/seo/for-therapists-burnaby">Burnaby</Link>,{" "}
                <Link href="/seo/for-therapists-richmond">Richmond</Link>,{" "}
                <Link href="/seo/for-therapists-abbotsford">Abbotsford</Link> or
                anywhere else in{" "}
                <Link href="/seo/for-therapists-british-columbia">
                  British Columbia
                </Link>
                , we'll help your therapy practice get more visibility.
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
                      Infused Agency: SEO Burnaby Experts Helping Therapists &
                      Counsellors Grow
                    </h2>
                    <p>
                      Infused Agency provides custom SEO services in Burnaby for
                      new practices, established therapists, psychologists,
                      counsellors, and mental health organizations across
                      multiple specialties. Whether you're anywhere in Burnaby,
                      our focus is on delivering measurable results that
                      generate clients and a strong return on investment (ROI).
                      This is what sets us apart from other local SEO companies.
                    </p>

                    <h2>About Burnaby</h2>
                    <p>
                      Burnaby is one of Metro Vancouver’s most dynamic cities,
                      offering a unique mix of urban convenience and natural
                      beauty. From the busy Metrotown area and Brentwood Town
                      Centre to family-friendly neighbourhoods like Deer Lake,
                      South Slope, and Lochdale, Burnaby continues to grow as a
                      vibrant community. With outdoor destinations such as
                      Burnaby Mountain, Central Park, and Deer Lake Park,
                      residents enjoy spaces that support both recreation and
                      wellness. Across areas like Capitol Hill, Edmonds, Forest
                      Grove, and Government Road, more people are prioritizing
                      their mental health and seeking therapy, counselling, and
                      psychology services to enhance their well-being. Whether
                      it’s students at Simon Fraser University, professionals in
                      high-rise developments around Brentwood, or families in
                      established neighbourhoods like Burnaby Heights and
                      Westridge, therapists have strong opportunities to connect
                      with individuals in need of support.
                    </p>
                    <p>
                      As mental health awareness grows in Burnaby, the demand
                      for therapy and counselling services is stronger than
                      ever. At Infused Agency, we help you capture that demand
                      with Burnaby SEO strategies designed to expand your
                      visibility, attract more clients, and position your
                      practice for long-term success.
                    </p>

                    <h2>
                      SEO Services Tailored for Burnaby Mental Health
                      Professionals
                    </h2>
                    <p>
                      Our team of experienced SEO Burnaby specialists provides a
                      full range of services, including website audits, keyword
                      research, content optimization, and link-building. Each
                      strategy is tailored to your unique practice goals,
                      ensuring you attract the right clients and drive qualified
                      inquiries.
                    </p>
                    <p>
                      Whether you're a therapist, psychologist, counsellor, or
                      psychotherapist looking for local SEO or wanting to expand
                      across Burnaby, Infused Agency delivers solutions that put
                      your practice in front of the right audience.
                    </p>

                    <h2>
                      Why Hiring an Burnaby SEO Agency Matters for Mental Health
                      Professionals
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
                      market and the nuances of how people search for
                      therapists, psychologists, and counsellors in Burnaby.
                    </p>
                    <p>
                      Effective SEO isn't just about rankings. It's about
                      creating content that builds trust with potential clients,
                      increases engagement, and ultimately drives bookings.
                      That's why expert SEO copywriting for Burnaby mental
                      health professionals is a core part of our approach — it
                      ensures your website speaks to both search engines and
                      real people seeking help.
                    </p>

                    <h2>
                      Why Infused Agency Is the Best Choice for SEO in Burnaby?
                    </h2>
                    <p>
                      At Infused Agency, we're not just another marketing
                      company. We're a dedicated SEO agency in Burnaby focused
                      on helping local mental health professionals succeed.
                      Every campaign we build is custom — no cookie-cutter
                      templates, no guesswork.
                    </p>
                    <p>
                      We combine technical SEO improvements, white-hat link
                      strategies, optimized content, and local targeting to help
                      your practice rise in search results. From fine-tuning
                      your Google Business Profile to creating location-specific
                      content for Burnaby, our strategies are designed for
                      long-term growth and sustainable visibility.
                    </p>
                    <p>
                      When you work with Infused Agency, you get a trusted
                      partner invested in your success. We'll help you generate
                      more client inquiries, improve conversions, and grow your
                      practice through data-driven SEO Burnaby strategies.
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
                Our Burnaby Therapy SEO Clients <span>Get Results</span>
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
                  src={results1}
                  alt="SEO Burnaby Therapist Results"
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
                  src={results2}
                  alt="Burnaby Therapy Practice SEO Results"
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
                <Image src={test1} alt="seo for counsellors Burnaby" />
                <p className="owner">Nicole P.</p>
                <em>Owner - Purse You Psychotherapy</em>
                <p className="desc">
                  "I just completed a three month project with Infused Agency
                  and my experience has been great. They are extremely
                  knowledgeable in their field and very personable and easy to
                  work with. I'm looking forward to seeing how their work
                  continues to benefit my therapist practice."
                </p>
              </Col>
              <Col lg="4">
                <Image src={test2} alt="seo for psychotherapists Burnaby" />
                <p className="owner">Brandi M.</p>
                <em>Owner - Brandi May Psychotherapy</em>
                <p className="desc">
                  "Infused Agency are not only clear professionals and expert in
                  their fields, but are extremely personable to work with. I
                  would definitely recommend Infused Agency to anyone looking to
                  optimize SEO!"
                </p>
              </Col>
              <Col lg="4">
                <Image src={test3} alt="seo for therapist Burnaby" />
                <p className="owner">Courtney V.</p>
                <em>Owner - Consciously Collected</em>
                <p className="desc">
                  "I had a great experience working with Infused agency! They
                  optimized my website, and I saw a significant increase in
                  traffic and rankings. Thanks to their expertise, my business
                  is now reaching more potential clients than ever. Highly
                  recommend for anyone looking for real SEO results!"
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
                Ready to <span>Grow Your Practice</span> With Therapy SEO in
                Burnaby?
              </h2>
              <p>
                Take the first step toward more clients, higher rankings, and
                real growth. Whether you're a therapist, psychologist,
                counsellor, or psychotherapist anywhere in Burnaby, our SEO
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
              <h2>Burnaby SEO Services for Therapists</h2>
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
                  At Infused Agency, our SEO Burnaby specialists begin every
                  campaign with detailed keyword research. We identify the most
                  relevant and profitable search terms your potential clients
                  are using across Burnaby. By analyzing your website and
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
                  Our Burnaby SEO services include ethical link-building
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
                  Content is the foundation of effective SEO. Our Burnaby
                  content writing team creates engaging, SEO-friendly copy
                  tailored to your mental health practice and specialties. From
                  optimized blog posts to landing pages, we develop content that
                  reflects your practice's voice, establishes expertise, and
                  improves rankings for keywords like SEO Burnaby psychologists
                  and SEO Burnaby counsellors.
                </p>
              </div>
            </div>
          </div>
          <div className="row pd-btm-80">
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>On-Page SEO</h2>
                <p>
                  Our SEO Burnaby experts optimize your website's structure,
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
                  For mental health professionals in Burnaby, local visibility
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
                  foundation. Our technical SEO Burnaby specialists enhance your
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
                Get <span>More Visibility</span> In Burnaby Now!
              </h2>
              <p>
                Take the first step toward more clients, higher rankings, and
                real growth. Whether you're a therapist, psychologist,
                counsellor, or psychotherapist anywhere in Burnaby, our SEO
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
                Choosing Infused Agency as Your Therapist SEO Burnaby Partner
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
                alt="infused agency seo for therapists Burnaby"
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

              <h3>Supporting Local Mental Health Professionals in Burnaby</h3>

              <p>
                We understand the challenges therapy practices face when trying
                to stand out online. That's why we specialize in small practice
                SEO in Burnaby — giving therapists, psychologists, counsellors,
                and psychotherapists the tools and strategies needed to gain
                traction in local search, attract qualified clients, and compete
                effectively in their markets.
              </p>

              <p>
                With Infused Agency, you get more than just an SEO provider. You
                get a partner who's invested in your long-term success with
                tailored SEO Burnaby services that build credibility,
                visibility, and growth.
              </p>
            </Col>
          </Row>
          <Row className="text-center pd-top-40">
            <Col lg="4">
              <Image
                height="50"
                src={check}
                alt="seo expert for therapists Burnaby"
              />
              <h3 className="pd-top-20">Client-Focused SEO Services</h3>
              <p>
                At Infused Agency, we treat your practice like it's our own.
                Your success is the measure of our success, which is why we take
                the time to understand your goals and challenges. Each client
                works with a dedicated SEO Burnaby specialist who provides
                personalized attention and ongoing monitoring to deliver the
                best possible results.
              </p>
            </Col>
            <Col lg="4">
              <Image
                height="50"
                src={check}
                alt="seo optimization for counsellors Burnaby"
              />
              <h3 className="pd-top-20">Continuous Optimization</h3>
              <p>
                SEO isn't a one-time project — it's an ongoing process. Our team
                of Burnaby SEO experts constantly tracks your website's
                performance, adapting strategies to keep pace with Google's
                updates and industry changes. This ensures your practice stays
                competitive across Burnaby.
              </p>
            </Col>
            <Col lg="4">
              <Image
                height="50"
                src={check}
                alt="affordable seo for therapists Burnaby"
              />
              <h3 className="pd-top-20">Affordable SEO Solutions</h3>
              <p>
                We believe in delivering exceptional value without unexpected
                costs. Infused Agency offers affordable SEO Burnaby services
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
                alt="seo reporting for therapy practices Burnaby"
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
                alt="seo optimization for psychotherapists Burnaby"
              />
              <h3 className="pd-top-20">Backed by Google Expertise</h3>
              <p>
                Our Burnaby SEO specialists stay ahead of the curve with deep
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
                alt="seo audit for therapists Burnaby"
              />
              <h3 className="pd-top-20">Free SEO Audit</h3>
              <p>
                Not sure how your website is performing? Infused Agency offers a
                complimentary SEO audit for Burnaby mental health professionals.
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
              <h2>Trusted SEO Burnaby Experts with Proven Results</h2>
            </Col>
          </Row>
          <Row className="align-items-center pd-top-20">
            <Col lg="6">
              <p>
                At Infused Agency, results speak for themselves. With over 50
                SEO clients served and 40+ five-star Google reviews, we've built
                a reputation as a leading SEO agency in Burnaby. Our clients
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
                search results across Burnaby.
              </p>
            </Col>
            <Col lg="6">
              <Image
                className="img-fluid"
                src={reviews}
                alt="seo therapy practice Burnaby reviews"
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
                Frequently Asked Questions For Burnaby Therapy SEO Services
              </h2>
            </Col>
          </Row>

          <Row>
            <Col lg="12">
              <h3>
                What makes Therapy SEO Burnaby services different from general
                SEO?
              </h3>
              <p>
                Our SEO Therapy Burnaby services are specifically tailored to
                help local mental health professionals across Burnaby rank
                higher in local search results. We understand the unique market
                dynamics, local competition, and search patterns specific to
                Burnaby. Our SEO strategies include local citation building,
                Google Business Profile optimization, and location-specific
                content that helps your practice appear when clients search for
                therapy, counselling, or psychology services in your area.
              </p>

              <h3>
                How long does it take to see results from SEO Burnaby
                Psychotherapist campaigns?
              </h3>
              <p>
                Most SEO Psychotherapist Burnaby clients start seeing initial
                improvements in search visibility within 3-6 months, with
                significant results typically appearing by 6-12 months. The
                timeline depends on factors like your current website
                performance, competition level, and the keywords you're
                targeting. Our proven SEO process includes continuous
                optimization and transparent reporting, so you'll see steady
                progress as we work to improve your rankings across Burnaby.
              </p>

              <h3>
                Can small mental health practices in Burnaby compete with larger
                clinics through SEO?
              </h3>
              <p>
                Absolutely! SEO for Therapist in Burnaby strategies are
                particularly effective for small practices because they focus on
                local search optimization where you can outrank larger
                competitors. By targeting location-specific keywords like
                "psychologist near me Burnaby" and optimizing for local search
                intent, small practices often achieve better visibility than big
                clinics. Our affordable SEO solutions are designed specifically
                to help small practices compete effectively in their local
                markets.
              </p>

              <h3>
                What's included in your SEO Counsellor Burnaby audit and
                strategy development?
              </h3>
              <p>
                Our comprehensive Therapy SEO Burnaby audit includes technical
                website analysis, keyword research for Burnaby markets,
                competitor analysis, content evaluation, and local SEO
                assessment. We examine your current Google Business Profile,
                local citations, backlink profile, and site performance. Based
                on these findings, we develop a customized SEO strategy that
                addresses your specific challenges and opportunities in Burnaby.
              </p>

              <h3>
                How do you measure the success of SEO Burnaby campaigns for
                therapists?
              </h3>
              <p>
                We track multiple metrics to measure SEO success for Burnaby
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
                Do you guarantee first-page rankings for SEO Burnaby keywords
                for therapists?
              </h3>
              <p>
                While we can't guarantee specific rankings (as search engines
                constantly update their algorithms), we do guarantee our
                commitment to improving your visibility through proven SEO
                Therapist Burnaby strategies. Our track record shows consistent
                success helping practices achieve first-page rankings for their
                target keywords. We focus on sustainable, white-hat SEO
                techniques that build long-term visibility rather than quick
                fixes that might get penalized by Google.
              </p>

              <h3>
                What's the difference between SEO and local SEO for Burnaby
                mental health professionals?
              </h3>
              <p>
                Traditional SEO focuses on ranking for broad keywords nationally
                or globally, while local SEO Burnaby targets location-specific
                searches like "counsellor near me" or "Burnaby psychology
                services." Local SEO includes optimizing your Google Business
                Profile, building local citations, managing online reviews, and
                creating location-based content. For Burnaby mental health
                professionals serving local clients, local SEO is typically more
                valuable as it helps you appear in Google's Local Pack and Maps
                results.
              </p>

              <h3>
                How much do SEO services cost for mental health practices in
                Burnaby?
              </h3>
              <p>
                SEO Burnaby pricing varies based on your practice size,
                competition level, and specific goals. We offer affordable SEO
                packages starting from basic local optimization to comprehensive
                practice solutions. Our transparent pricing includes no hidden
                fees, and we provide customized quotes based on your specific
                needs. We believe in delivering exceptional value, and many of
                our clients see a positive ROI within the first year of their
                SEO investment.
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41678.743079264204!2d-122.9991264342419!3d49.239978594239375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548677a8219c8373%3A0xdd0a72738752b169!2sBurnaby%2C%20BC!5e0!3m2!1sen!2sca!4v1756170685616!5m2!1sen!2sca"
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
