import React from "react";
import { getLatestPosts } from "../lib/posts";
import { HOME_FAQS } from "../lib/homeFaqs";
import { homeGraph } from "../lib/verticalSeoSchema";
import { Col, Container, Row } from "reactstrap";
import { format } from "date-fns";
import "react-accessible-accordion/dist/fancy-example.css";
import Head from "next/head";
import Nav from "../../components/Nav/nav";
import Hero from "../../components/Home/Hero/hero";
import Footer from "../../components/Footer/footer";

import Link from "next/link";
import Image from "next/image";
import best from "../../src/img/awards.png";
import flatRock from "../../src/img/st-catharines-seo-results.jpg";
import test1 from "../../src/img/seo-company-niagara.png";
import test2 from "../../src/img/seo-niagara-experts.png";
import test3 from "../../src/img/seo-niagara-services.png";
import delta from "../../src/img/niagara-seo-company-results.jpg";
import infused from "../../src/img/infused-agency-seo-niagara.png";
import check from "../../src/img/check.png";
import results from "../../src/img/seo-agency-st-catharines.png";
import reviews from "../../src/img/seo-niagara-reviews.png";
import affiliate1 from "../../src/img/aff-google-partner.jpg";
import affiliate2 from "../../src/img/aff-niagara-chamber.jpg";
import affiliate3 from "../../src/img/aff-three-best-rated.jpg";
import affiliate4 from "../../src/img/aff-good-firms.jpg";
import affiliate5 from "../../src/img/aff-design-rush.png";
import affiliate6 from "../../src/img/aff-google-reviews.jpg";
import feat1 from "../../src/img/feat-suk-law.png";
import feat2 from "../../src/img/feat-flat-rock.png";
import feat3 from "../../src/img/feat-fred.png";
import feat4 from "../../src/img/feat-north.png";
import feat5 from "../../src/img/feat-kd.png";
import feat6 from "../../src/img/feat-delta.png";
import feat7 from "../../src/img/feat-brandi.png";
import feat8 from "../../src/img/feat-jerry.png";
import data1 from "../../src/img/gsc-flat.png";
import data2 from "../../src/img/gsc-freds.png";
import step1 from "../../src/img/seo-research.jpg";
import step2 from "../../src/img/on-page-seo.jpg";
import step3 from "../../src/img/off-page-seo.jpg";
import step4 from "../../src/img/seo-reporting.jpg";
import port1 from "../../src/img/port-brandi.jpg";
import port2 from "../../src/img/port-delta.jpg";
import port3 from "../../src/img/port-flat-rock.jpg";
import port4 from "../../src/img/port-freds.jpg";
import port5 from "../../src/img/port-jerrys.jpg";
import port6 from "../../src/img/port-kd-flowers.jpg";
import port7 from "../../src/img/port-suk-law.jpg";
import port8 from "../../src/img/port-uphi.jpg";

const Home = ({ latestPosts }) => {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(homeGraph({ faqs: HOME_FAQS })),
          }}
        />

        <title>SEO Niagara | Grow Traffic & Local Leads</title>
        <meta
          name="description"
          content="SEO Niagara by Infused Agency. Grow your traffic and generate more local leads with proven SEO strategies. Serving St. Catharines, Niagara Falls and the Niagara region."
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
        <link rel="canonical" href="https://infused.agency" />
      </Head>
      <Nav />
      <Hero />
      <section className="affilliates text-center pd-top-40 pd-btm-40">
        <Container>
          <Row>
            <Col lg="2">
              <Image unoptimized src={affiliate1} alt="google partner" />
            </Col>
            <Col lg="2">
              <Image
                unoptimized
                src={affiliate2}
                alt="niagara chamber of commerce"
              />
            </Col>
            <Col lg="2">
              <Image unoptimized src={affiliate3} alt="three best rated" />
            </Col>
            <Col lg="2">
              <Image unoptimized src={affiliate4} alt="good firms" />
            </Col>
            <Col lg="2">
              <a
                href="https://www.designrush.com/agency/profile/infused-agency"
                target="_blank"
              >
                <Image
                  unoptimized
                  src={affiliate5}
                  alt="Infused Agency's rating on SEO Agency Listing by DesignRush, the industry-leading B2B Marketplace connecting brands with agencies"
                />
              </a>
            </Col>
            <Col lg="2">
              <Image unoptimized src={affiliate6} alt="google reviews" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="trusted pd-top-80 pd-btm-80">
        <Container>
          <Row className="text-center pd-btm-20">
            <Col lg="12">
              <h2>
                SEO Services Trusted By <span>Niagara Businesses</span>
              </h2>
              <p>For over 10 years</p>
            </Col>
          </Row>
          <Row className="text-center">
            <Col lg="3">
              <Image unoptimized src={feat1} alt="suk law" />
            </Col>
            <Col lg="3">
              <Image unoptimized src={feat2} alt="flat rock" />
            </Col>
            <Col lg="3">
              <Image unoptimized src={feat3} alt="fred's concrete" />
            </Col>
            <Col lg="3">
              <Image unoptimized src={feat4} alt="uphi cannabis" />
            </Col>
          </Row>
          <Row className="text-center pd-top-40">
            <Col lg="3">
              <Image unoptimized src={feat5} alt="kd flowers" />
            </Col>
            <Col lg="3">
              <Image unoptimized src={feat6} alt="delta energy solutions" />
            </Col>
            <Col lg="3">
              <Image unoptimized src={feat7} alt="brandi may psychotherapy" />
            </Col>
            <Col lg="3">
              <Image unoptimized src={feat8} alt="jerry's insulating" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="home-top-web">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <h2>
                Our Niagara SEO Clients <span>Get Results</span>
              </h2>
            </div>
          </div>
          <section className="work">
            <Row className="pd-top-40">
              <Col lg="6">
                <h3>Flat Rock Cellars</h3>
                <hr />
                <Image
                  className="img-fluid"
                  src={flatRock}
                  alt="Flat Rock Cellars SEO Results"
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
                  <h3 class="text-center">After working with us:</h3>
                  <div className="text-center stats">
                    <h3>+550%</h3>
                    <p>Local Visibility</p>
                  </div>
                  <Image
                    className="img-fluid"
                    unoptimized
                    src={data1}
                    alt="flat rock cellars niagara seo"
                  />
                </div>
              </Col>
              <Col lg="6">
                <h3>Delta Energy Solutions</h3>
                <hr />
                <Image
                  className="img-fluid"
                  src={delta}
                  alt="Delta Energy Solutions SEO Results"
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
            <Row className="pd-top-40 text-center">
              <Col lg="12">
                <h2>
                  But Don't Take <span>Our Word For It</span>
                </h2>
              </Col>
            </Row>
            <Row className="pd-top-40 text-center testimonials">
              <Col lg="4">
                <Image src={test1} alt="seo company niagara" />
                <p className="owner">Lucas Folino</p>
                <em>Owner - Fred's Concrete</em>
                <br />
                <br />
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
                <br />
                <br />
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
                <br />
                <br />
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

      <section className="home-process pd-top-80">
        <Container>
          <Row className="text-center">
            <Col lg="12">
              <h2>
                How Search Engine Optimization & AI Search Work <br />
                At Infused Agency
              </h2>
              <p className="w-75">
                When you work with us, your search engine optimization project
                is custom, yet streamlined. Over the last 12 years, and working
                with many different businesses in Niagara, we've crafted local
                SEO and AI search strategies that not only work, but have made
                it through every major algorithm update. From Google rankings
                to AI tools like ChatGPT and Gemini, here's a look into our
                process.
              </p>
            </Col>
          </Row>
          <Row className="pd-top-40">
            <Col lg="6">
              <div className="card">
                <Image className="img-fluid" src={step1} alt="seo research" />
                <h2>1. SEO Research & Competitive Analysis</h2>
                <p>
                  Every successful campaign starts with thorough research. Our
                  search engine optimization experts begin by conducting a
                  comprehensive audit of your current website performance,
                  analyzing your local market competition, and identifying the
                  most valuable keywords for your business.
                </p>
                <br />
                <p>
                  During this phase, we examine your competitors' strategies,
                  uncover content gaps in your industry, and research local
                  search patterns to understand exactly how potential customers
                  are looking for your services. We also perform technical
                  search engine optimization analysis to identify any issues
                  that might be holding your website back from ranking higher.
                </p>
                <br />
                <p>
                  This research forms the foundation of your custom strategy,
                  ensuring we target the right keywords and opportunities that
                  will drive qualified traffic to your business.
                </p>
              </div>
            </Col>
            <Col lg="6">
              <div className="card">
                <Image className="img-fluid" src={step2} alt="on-page seo" />
                <h2>2. On-Page SEO</h2>
                <p>
                  Once we understand your market landscape, we optimize every
                  element of your website to help search engines understand and
                  rank your content. Our on-page optimization includes:
                </p>
                <br />
                <ul>
                  <li>
                    Optimizing title tags, meta descriptions, and header
                    structures for target keywords
                  </li>
                  <li>Improving website speed and mobile responsiveness</li>
                  <li>
                    Creating and optimizing location-specific landing pages
                  </li>
                  <li>
                    Enhancing internal linking structure and site navigation
                  </li>
                  <li>
                    Optimizing images with proper alt text and file compression
                  </li>
                  <li>
                    Implementing schema markup to help search engines understand
                    your business
                  </li>
                </ul>

                <p>
                  We also focus heavily on content optimization, ensuring your
                  existing pages are fully optimized while identifying
                  opportunities for new, valuable content that addresses your
                  customers' questions and needs.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <div className="card">
                <Image className="img-fluid" src={step3} alt="off-page seo" />
                <h2>3. Off-Page SEO</h2>
                <p>
                  Building authority and trust is crucial for long-term search
                  engine optimization success. Our off-page optimization
                  strategy focuses on establishing your business as a trusted
                  local authority through:
                </p>
                <br />
                <ul>
                  <li>Google Business Profile optimization and management</li>
                  <li>
                    Local citation building across relevant directories and
                    platforms
                  </li>
                  <li>
                    Strategic link building from high-quality, local websites
                  </li>
                  <li>Online review management and reputation building</li>
                  <li>Local content marketing and community engagement</li>
                  <li>
                    Social media optimization to support your search engine
                    optimization efforts
                  </li>
                </ul>

                <p>
                  We use only white-hat techniques that comply with Google's
                  guidelines, ensuring your website builds sustainable authority
                  that won't be affected by algorithm updates. Every link and
                  citation we build is relevant to your business and local
                  market.
                </p>
              </div>
            </Col>
            <Col lg="6">
              <div className="card">
                <Image className="img-fluid" src={step4} alt="seo reporting" />
                <h2>4. Campaign Report</h2>
                <p>
                  Transparency and continuous improvement are core to our
                  approach. You'll receive detailed monthly reports that clearly
                  show your website's progress, including:
                </p>

                <ul>
                  <li>
                    Keyword ranking improvements and search visibility metrics
                  </li>
                  <li>Organic traffic growth and user behavior analytics</li>
                  <li>
                    Local search performance and Google Business Profile
                    insights
                  </li>
                  <li>Lead generation and conversion tracking</li>
                  <li>Competitor analysis and market position updates</li>
                  <li>
                    Technical search engine optimization health monitoring
                  </li>
                </ul>

                <p>
                  This ongoing optimization ensures your investment continues to
                  deliver improved results month after month, keeping your
                  business competitive in an ever-evolving digital landscape.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="home-portfolio">
        <Container>
          <Row className="text-center pd-btm-40">
            <Col lg="12">
              <h2>Featured SEO Projects in Niagara</h2>
            </Col>
          </Row>
          <Row>
            <Col lg="3">
              <Image
                className="img-fluid"
                src={port1}
                alt="brandi may seo project"
              />
            </Col>
            <Col lg="3">
              <Image
                className="img-fluid"
                src={port2}
                alt="delta seo project"
              />
            </Col>
            <Col lg="3">
              <Image
                className="img-fluid"
                src={port3}
                alt="flat rock cellars seo project"
              />
            </Col>
            <Col lg="3">
              <Image
                className="img-fluid"
                src={port4}
                alt="freds concrete seo project"
              />
            </Col>
          </Row>
          <Row className="pd-top-20 pd-btm-80">
            <Col lg="3">
              <Image
                className="img-fluid"
                src={port5}
                alt="jerry's seo project"
              />
            </Col>
            <Col lg="3">
              <Image
                className="img-fluid"
                src={port6}
                alt="kd flowers seo project"
              />
            </Col>
            <Col lg="3">
              <Image
                className="img-fluid"
                src={port7}
                alt="suk law seo project"
              />
            </Col>
            <Col lg="3">
              <Image
                className="img-fluid"
                src={port8}
                alt="uphi cannabis seo project"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="home-services">
        <div className="container">
          <div className="row pd-btm-40">
            <div className="col-lg-12 text-center">
              <h2>Niagara SEO & AI Search Services</h2>
              <p>Get More Visibility in Google and AI Search</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row pd-top-40">
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Keyword Research & Strategy</h2>
                <p>
                  At Infused Agency, our search engine optimization specialists
                  begin every campaign with detailed keyword research. We
                  identify the most relevant and profitable search terms your
                  customers are using in your local market and beyond. By
                  analyzing your website, competitors, and industry trends, we
                  craft a data-driven search engine optimization strategy
                  designed to capture qualified traffic and deliver measurable
                  results.
                </p>
                <p>
                  Our research goes beyond basic keyword tools — we analyze
                  search intent, seasonal trends, and local search patterns to
                  ensure we're targeting terms that actually convert into
                  customers for your business.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Link Building</h2>
                <p>
                  A strong backlink profile is essential for higher rankings.
                  Our search engine optimization services include ethical
                  link-building strategies that earn high-quality links from
                  reputable websites. These authoritative backlinks boost your
                  domain authority, build trust with search engines, and
                  strengthen your overall online credibility.
                </p>
                <p>
                  We focus on earning links from relevant industry publications,
                  local business directories, community organizations, and other
                  high-authority websites that genuinely add value to your link
                  profile. Every link we pursue follows Google's guidelines and
                  contributes to long-term success.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Content Writing</h2>
                <p>
                  Content is the foundation of effective search engine
                  optimization. Our content writing team creates engaging copy
                  tailored to your business and industry. From optimized blog
                  posts to service pages and landing pages, we develop content
                  that reflects your brand's voice, establishes thought
                  leadership, and improves rankings for your target keywords.
                </p>
                <p>
                  Every piece of content we create serves dual purposes:
                  providing genuine value to your website visitors while
                  strategically targeting the search terms your potential
                  customers use. We balance search optimization with readability
                  to ensure your content performs well in search results and
                  converts visitors into customers. We also structure content
                  for AI search optimization, helping your business get named
                  and cited by ChatGPT, Gemini, and Google's AI Overviews.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>On-Page SEO</h2>
                <p>
                  Our search engine optimization experts optimize your website's
                  structure, code, and content to ensure it performs at its
                  best. We conduct in-depth audits, refine metadata, improve
                  internal linking, and enhance site usability — all while
                  aligning with Google's ranking factors. The result is a
                  website that attracts both search engines and users.
                </p>
                <p>
                  Our on-page optimization covers every detail, from title tags
                  and meta descriptions to header structures, image
                  optimization, and page loading speeds. We ensure each page on
                  your website is fully optimized for both your target keywords
                  and user experience.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Local SEO</h2>
                <p>
                  For local businesses, regional visibility is crucial. Infused
                  Agency ensures your business is optimized for local searches
                  by improving your Google Business Profile, building local
                  citations, and creating location-specific content. These
                  strategies help you appear in Google's Local Pack, maps, and
                  other high-visibility areas where potential customers are
                  searching.
                </p>
                <p>
                  Our local search engine optimization approach includes
                  managing online reviews, optimizing for "near me" searches,
                  and ensuring your business information is consistent across
                  all online directories. We help you dominate local search
                  results, show up in AI search answers, and attract customers
                  in your immediate service area.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Technical SEO</h2>
                <p>
                  Behind every successful campaign is a strong technical
                  foundation. Our technical search engine optimization
                  specialists enhance your site's speed, mobile performance,
                  indexing, and security. From fixing crawl errors to optimizing
                  site architecture, we make sure search engines can easily
                  navigate and rank your website.
                </p>
                <p>
                  We address issues like site speed optimization, mobile
                  responsiveness, SSL certificates, structured data markup, and
                  XML sitemaps. Our technical audits identify and resolve
                  problems that could be preventing your website from reaching
                  its full ranking potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why pd-top-80">
        <Container>
          <Row className="text-center">
            <Col lg="12">
              <h2>Choosing Infused Agency as Your Local SEO Partner</h2>
            </Col>
          </Row>
          <Row className="align-items-center pd-top-40 pd-btm-40">
            <Col lg="6">
              <p>
                In today's competitive market, you can't afford to partner with
                just any digital marketing firm. You need a team that takes the
                time to understand your business goals, your brand's message,
                and the customers you want to reach. At Infused Agency, we go
                beyond surface-level strategies — our focus is on delivering
                real results that generate the highest possible return on your
                investment, across Google search, local results, and AI search
                tools like ChatGPT and Gemini.
              </p>
            </Col>
            <Col lg="6">
              <Image
                className="img-fluid"
                src={infused}
                alt="infused agency seo niagara"
              />
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <h3>Our Approach</h3>

              <p>
                Our comprehensive search engine optimization process — Discover,
                Analyze, Strategize, Execute, Measure, Report, and Refine —
                ensures that your campaign is continuously optimized for growth.
                This agile methodology allows us to adapt to industry changes
                quickly while keeping your business ahead of competitors in
                local search results.
              </p>

              <h3>Supporting Local Businesses in Niagara</h3>

              <p>
                We understand the challenges local businesses face when trying
                to stand out online. That's why we specialize in helping
                regional entrepreneurs gain the tools and strategies needed to
                attract qualified leads, improve their local search presence,
                and compete effectively in their markets.
              </p>

              <p>
                With Infused Agency, you get more than just an search engine
                optimization provider. You get a partner who's invested in your
                long-term success with tailored local search engine optimization
                services that build credibility, visibility, and sustainable
                growth.
              </p>
            </Col>
          </Row>
          <Row className="text-center pd-top-40">
            <Col lg="4">
              <Image height="50" src={check} alt="client focused seo" />
              <h3 className="pd-top-20">Client-Focused Services</h3>
              <p>
                At Infused Agency, we treat your business like it's our own.
                Your success is the measure of our success, which is why we take
                the time to understand your goals and challenges. Each client
                works with a dedicated search engine optimization specialist who
                provides personalized attention and ongoing monitoring to
                deliver the best possible results.
              </p>
            </Col>
            <Col lg="4">
              <Image height="50" src={check} alt="seo optimization niagara" />
              <h3 className="pd-top-20">Continuous Optimization</h3>
              <p>
                search engine optimizationisn't a one-time project — it's an
                ongoing process. Our team of local search engine optimization
                experts constantly tracks your website's performance, adapting
                strategies to keep pace with Google's updates and industry
                changes. This ensures your business stays competitive and
                visible in local search results.
              </p>
            </Col>
            <Col lg="4">
              <Image height="50" src={check} alt="affordable seo niagara" />
              <h3 className="pd-top-20">Affordable SEO Solutions</h3>
              <p>
                We believe in delivering exceptional value without unexpected
                costs. Infused Agency offers affordable local search engine
                optimization services with transparent pricing and no hidden
                fees. Whether you're a small business or a growing company, our
                solutions are designed to fit your budget while generating
                long-term results.
              </p>
            </Col>
          </Row>
          <Row className="text-center pd-top-40">
            <Col lg="4">
              <Image height="50" src={check} alt="seo niagara reporting" />
              <h3 className="pd-top-20">Transparent Reporting</h3>
              <p>
                You'll never be left in the dark about your search engine
                optimization campaign. Our clear, detailed reports give you full
                visibility into how your website is performing and the steps
                we're taking to improve it. With Infused Agency, you can expect
                consistent updates and honest communication every step of the
                way.
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
                Our SEO specialists stay ahead of the curve with deep knowledge
                of Google's latest updates, AI-driven search changes, and
                ethical search engine optimization strategies. By following
                proven, white-hat methods, we help your website achieve
                sustainable rankings and long-term growth across both
                traditional and AI search.
              </p>
            </Col>
            <Col lg="4">
              <Image height="50" src={check} alt="seo niagara audit" />
              <h3 className="pd-top-20">Free SEO Audit</h3>
              <p>
                Not sure how your website is performing? Infused Agency offers a
                complimentary audit for local businesses. We'll review your
                website's current performance, highlight opportunities for
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
              <h2>Trusted Local SEO Experts with Proven Results</h2>
            </Col>
          </Row>
          <Row className="align-items-center pd-top-20">
            <Col lg="6">
              <p>
                At Infused Agency, results speak for themselves. With over{" "}
                <span>
                  50 SEO clients served and 40+ five-star Google reviews
                </span>
                , we've built a reputation as a leading local search engine
                optimization agency in the region. Our clients consistently see
                measurable improvements in search rankings, website traffic, and
                lead generation.
                <br />
                <br />
                We're proud to have helped businesses of all sizes — from small
                startups to established companies — achieve stronger online
                visibility and higher conversions. Every strategy we implement
                is backed by data, tailored to your goals, and focused on
                delivering a real return on investment. Our most requested
                services are local SEO for Niagara businesses,{" "}
                <Link href="/therapist-seo">
                  SEO for Therapists in Canada
                </Link>
                ,{" "}
                <Link href="/therapist-seo/usa">
                  SEO for Therapists in the USA
                </Link>{" "}
                , and many more.
                <br />
                <br />
                When you work with Infused Agency, you're partnering with a
                trusted team that combines local market expertise, technical SEO
                skills, and AI search optimization to help your business
                dominate local search results and get recommended by AI tools
                like ChatGPT and Gemini.
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
              <h2>FAQs</h2>
              <p>Learn more about search engine optimization and AI search!</p>
            </Col>
          </Row>

          <Row>
            <Col lg="12">
              {HOME_FAQS.map(({ q, a }) => (
                <React.Fragment key={q}>
                  <h3>{q}</h3>
                  <p>{a}</p>
                </React.Fragment>
              ))}
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
