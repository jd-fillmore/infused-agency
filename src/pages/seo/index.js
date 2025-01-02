import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "reactstrap";
import Head from "next/head";
import Nav from "../../../components/Nav/nav";
import InnerHero from "../../../components/innerHero/innerHero";
import InnerContent from "../../../components/innerContent/innerContent";
import CTA from "../../../components/CTA/cta";
import Footer from "../../../components/Footer/footer";
import bgImage from "../../img/inner-seo.jpg";
import ui from "../../img/ui-design.png";
import build from "../../img/build.png";
import grow from "../../img/grow.png";
import growth from "../../img/seo-results.webp";

const SEO = () => {
  return (
    <>
      <Head>
        <title>SEO Search Engine Optimization | Infused Agency</title>
        <meta
          name="description"
          content="Looking for SEO services? Check out Infused Agency's search engine optimization services today."
        />
        <link rel="canonical" href="https://infused.agency/seo" />
      </Head>
      <Nav />
      <InnerHero
        title="Search Engine Optimization (SEO)"
        description="We're ready to boost your rankings and drive results."
        bgImage={bgImage}
      />
      <InnerContent>
        <section>
          <Container>
            <Row>
              <Col md="6">
                <h2>
                  Rank better on Google for more <span>leads</span>,{" "}
                  <span>traffic</span> and <span>revenue</span>.
                </h2>
              </Col>
              <Col md="6">&nbsp;</Col>
            </Row>
            <br />
            <Row>
              <Col lg="12">
                <p>
                  Search Engine Optimization (SEO) done by our{" "}
                  <Link href="/seo/niagara">SEO Niagara</Link> team is your
                  local business’s secret weapon in today’s digital world.
                  Imagine your business appearing at the top of Google search
                  results whenever someone in your area searches for your
                  services. That’s the power of SEO.
                </p>

                <p>
                  Why is SEO crucial for local businesses? Visibility. Higher
                  search engine rankings mean more people see your business,
                  leading to increased foot traffic, calls, and inquiries.
                  Potential customers are searching for businesses like yours,
                  and SEO ensures they find you first.
                </p>

                <p>
                  <Link href="/posts/local-seo-tips-niagara">
                    Local SEO specifically attracts customers
                  </Link>{" "}
                  in your area. By using locally relevant keywords, creating
                  location-specific content, and keeping your business details
                  consistent online, you become the top choice for local
                  searches.
                </p>

                <p>
                  This is important because local searches often have high
                  purchase intent. If someone searches for “best Italian
                  restaurant near me,” they’re likely planning to dine out soon.
                  Showing up in these searches means capturing ready-to-buy
                  customers.
                </p>

                <p>
                  SEO also{" "}
                  <Link href="/posts/how-seo-upgrades-business">
                    builds trust and credibility
                  </Link>
                  . People trust search engines, and top-ranking businesses are
                  seen as more reliable. Managing online reviews and optimizing
                  your Google My Business listing further boosts your
                  trustworthiness.
                </p>

                <p>
                  The result? More customers and revenue. SEO drives targeted
                  traffic that converts into paying customers. Invest in SEO to
                  boost your visibility, build trust, and grow your business.
                </p>
              </Col>
            </Row>
            <Row className="pd-top-40">
              <Col lg="4">
                <div className="card">
                  <Image src={ui} alt="research" />
                  <h3>Research</h3>
                  <p>
                    We start with comprehensive research to identify your
                    industry trends, target audience, and effective keywords.
                    This data-driven approach ensures we tailor our SEO
                    strategies to meet your business goals.
                  </p>
                </div>
              </Col>
              <Col lg="4">
                <div className="card">
                  <Image src={build} alt="seo" />
                  <h3>Build</h3>
                  <p>
                    In the build phase, we optimize your website’s structure and
                    content for better visibility. Our focus is on user-friendly
                    design, mobile optimization, and engaging, keyword-rich
                    content that attracts and converts visitors.
                  </p>
                </div>
              </Col>
              <Col lg="4">
                <div className="card">
                  <Image src={grow} alt="web growth" />
                  <h3>Grow</h3>
                  <p>
                    SEO is an ongoing process. We monitor your site’s
                    performance and make adjustments while implementing off-page
                    strategies like link building. This ensures sustained
                    traffic growth and long-term success for your business.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="pd-top-120 d-flex align-items-center">
              <Col lg="6" className="d-none d-sm-block">
                <Image
                  className="img-fluid"
                  src={growth}
                  alt="seo kd flowers"
                />
              </Col>
              <Col lg="6" className="order-1 order-lg-2">
                <h2>
                  <span>Real &amp; Local</span> <br />
                  SEO Results
                </h2>
                <p>
                  At Infused Agency, we deliver real local SEO results for
                  Niagara businesses. Our expert strategies boost your online
                  visibility, ensuring your business ranks at the top of local
                  searches. We focus on driving targeted traffic, which converts
                  into genuine leads, sales, and increased revenue. By
                  optimizing your website with locally relevant keywords,
                  managing your online reviews, and enhancing your Google My
                  Business listing, we help build trust and attract ready-to-buy
                  customers. Let us help your Niagara business grow and thrive
                  with proven SEO techniques tailored to your local market.
                </p>

                <a
                  href="https://calendly.com/infused-agency/project-discovery/"
                  target="_blank"
                  rel="noreferrer"
                >
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
                </a>
              </Col>
              <Col lg="6" className="d-block d-sm-none">
                <Image
                  className="img-fluid"
                  src={growth}
                  alt="seo kd flowers"
                />
              </Col>
            </Row>
            <section className="services pd-top-120">
              <Row className="text-center">
                <Col lg="12">
                  <h2>SEO Services To Grow Your Business</h2>
                </Col>
              </Row>
              <div className="row">
                <div className="col-lg-4 d-flex">
                  <div className="card">
                    <h2>Keyword Research</h2>
                    <p>
                      Keyword research identifies the most effective words and
                      phrases your potential customers use to find your
                      services. By targeting these keywords, we ensure your
                      website appears in relevant searches, increasing traffic
                      and visibility. This helps attract more customers,
                      ultimately growing your business.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 d-flex">
                  <div className="card">
                    <h2>Link Building</h2>
                    <p>
                      Link building involves acquiring high-quality backlinks
                      from other websites to yours. These links enhance your
                      website’s authority and improve its search engine
                      rankings. Increased visibility leads to more traffic and
                      potential customers, helping your business grow and
                      establish a stronger online presence.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 d-flex">
                  <div className="card">
                    <h2>Content Writing</h2>
                    <p>
                      Content writing focuses on creating engaging, relevant,
                      and keyword-rich content for your website. Well-crafted
                      content attracts and retains visitors, informs and
                      educates your audience, and improves search engine
                      rankings. This drives more traffic, generates leads, and
                      boosts sales, fostering business growth.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 d-flex">
                  <div className="card">
                    <h2>On-Page SEO</h2>
                    <p>
                      On-page SEO optimizes individual web pages to rank higher
                      in search engines. This includes improving meta tags,
                      headers, images, and internal links. Enhanced on-page SEO
                      increases your site’s visibility, attracts more traffic,
                      and converts visitors into customers, driving business
                      growth.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 d-flex">
                  <div className="card">
                    <h2>Local SEO</h2>
                    <p>
                      Local SEO targets customers in your specific area by
                      optimizing your online presence for local searches. This
                      includes managing your Google My Business listing and
                      acquiring local citations. Effective local SEO ensures
                      your business appears in local searches, attracting nearby
                      customers and increasing sales.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 d-flex">
                  <div className="card">
                    <h2>Technical SEO</h2>
                    <p>
                      Technical SEO improves the backend of your website to
                      enhance its performance and search engine rankings. This
                      includes optimizing site speed, mobile-friendliness, and
                      security. A well-optimized site provides a better user
                      experience, increases visibility, and attracts more
                      visitors, driving business growth.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </Container>
        </section>
        <section className="home-areas pd-top-80">
          <Container>
            <Row>
              <Col lg="12">
                <h2>Cities We Service</h2>
                <Link href="/seo/beamsville">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="#ffffff"
                      d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    />
                  </svg>
                  SEO in Beamsville, ON
                </Link>{" "}
                <Link href="/seo/crystal-beach">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="#ffffff"
                      d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    />
                  </svg>
                  SEO in Crystal Beach, ON
                </Link>{" "}
                <Link href="/seo/fonthill">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="#ffffff"
                      d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    />
                  </svg>
                  SEO in Fonthill, ON
                </Link>{" "}
                <Link href="/seo/fort-erie">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="#ffffff"
                      d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    />
                  </svg>
                  SEO in Fort Erie, ON
                </Link>{" "}
                <Link href="/seo/grimsby">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="#ffffff"
                      d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    />
                  </svg>
                  SEO in Grimsby, ON
                </Link>{" "}
                <Link href="/seo/niagara">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="#ffffff"
                      d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    />
                  </svg>
                  SEO in Niagara Falls, ON
                </Link>{" "}
                <Link href="/seo/niagara">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="#ffffff"
                      d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    />
                  </svg>
                  SEO in Niagara-on-the-Lake, ON
                </Link>{" "}
                <Link href="/seo/port-colborne">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="#ffffff"
                      d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    />
                  </svg>
                  SEO in Port Colborne, ON
                </Link>{" "}
                <Link href="/seo/st-catharines">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="#ffffff"
                      d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    />
                  </svg>
                  SEO in St. Catharines, ON
                </Link>{" "}
                <Link href="/seo/thorold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="#ffffff"
                      d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    />
                  </svg>
                  SEO in Thorold, ON
                </Link>{" "}
                <Link href="/seo/wainfleet">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="#ffffff"
                      d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    />
                  </svg>
                  SEO in Wainfleet, ON
                </Link>{" "}
                <Link href="/seo/welland">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="#ffffff"
                      d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    />
                  </svg>
                  SEO in Welland, ON
                </Link>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <h2>Industries We Service</h2>
                <p>
                  <Link href="/seo/for-concrete-contractors">
                    SEO for Concrete Contractors in Canada
                  </Link>
                  ,{" "}
                  <Link href="/seo/for-therapists">
                    SEO for Therapists in Canada
                  </Link>
                  ,{" "}
                  <Link href="/seo/for-electricians">
                    SEO for Electricians in Canada
                  </Link>
                  ,{" "}
                  <Link href="/seo/for-medical-practices">
                    SEO for Medical Practices in Canada
                  </Link>
                </p>
                <p>(more coming soon!)</p>
              </Col>
            </Row>
          </Container>
        </section>
      </InnerContent>
      <CTA />
      <Footer />
    </>
  );
};

export default SEO;
