import React from "react";
import { Container, Row, Col } from "reactstrap";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Nav from "../../components/Nav/nav";
import InnerHero from "../../components/innerHero/innerHero";
import InnerContent from "../../components/innerContent/innerContent";
import CTA from "../../components/CTA/cta";
import Footer from "../../components/Footer/footer";
import about from "../img/about.jpeg";
import leadGenImg from "../img/lead-generating-web-design-niagara.png";
import webConvImg from "../img/website-conversion-optimization-niagara.png";
import seoImg from "../img/search-engine-optimization-niagara.png";

const About = () => {
  return (
    <>
      <Head>
        <title>About - Infused</title>
        <meta
          name="description"
          content="Learn more about the core values, the hardworking team and how we accomplish your business goals at Infused."
        />
      </Head>
      <Nav />
      <InnerHero title="About Us" description="A bit about our company." />
      <InnerContent>
        <section className="about">
          <Container>
            <Row className="d-flex align-items-center">
              <Col lg="6">
                <p>
                  Welcome to Infused Agency, the leading{" "}
                  <Link href="/">web design company</Link> in the Niagara
                  region. With over a decade of experience, we've established
                  ourselves as the go-to digital partner for businesses looking
                  to boost their online presence, generate leads, and drive
                  sales through their websites.
                </p>
              </Col>
              <Col lg="6">
                <Image
                  className="img-fluid card"
                  src={about}
                  alt="business needs"
                />

                <p className="text-center">
                  <em>
                    JD (Owner) and his daughter (side-kick) hiking in Banff
                  </em>
                </p>
              </Col>
            </Row>

            <Row>
              <Col lg="12">
                <h2>Our Mission</h2>

                <p>
                  At Infused Agency, our mission is simple yet powerful: to
                  transform your website into your best sales manager. We
                  believe that a well-designed, strategically crafted website is
                  more than just a digital brochure - it's a powerful tool that
                  can significantly impact your bottom line.
                </p>
                <h2>Who We Are</h2>

                <p>
                  We are a team of seasoned experts passionate about blending
                  creativity with functionality. Our diverse skill set spans
                  across <Link href="/web-design">web design</Link>,{" "}
                  <Link href="/niagara-seo-company">
                    search engine optimization (SEO)
                  </Link>
                  , and digital marketing. This comprehensive approach allows us
                  to deliver holistic solutions that address all aspects of your
                  online presence.
                </p>
                <h2>What We Do</h2>
                <div className="row services">
                  <div className="col-lg-4 d-flex">
                    <div className="card">
                      <Image src={leadGenImg} alt="web designer niagara" />
                      <h2>Lead-Generating Web Design</h2>
                      <p>
                        We create visually stunning, user-friendly websites that
                        are engineered to convert visitors into customers.
                      </p>
                      <Link href="/web-design">
                        <button>
                          Boost Your Leads
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
                  <div className="col-lg-4 d-flex">
                    <div className="card">
                      <Image
                        src={webConvImg}
                        alt="website conversion optimization niagara"
                      />
                      <h2>Website Conversion Optimization</h2>
                      <p>
                        We analyze and optimize your existing website to remove
                        conversion barriers and increase lead generation.
                      </p>
                      <Link href="/website-conversion-optimization">
                        <button>
                          Increase Conversions
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
                  <div className="col-lg-4 d-flex">
                    <div className="card">
                      <Image
                        className="img-fluid"
                        src={seoImg}
                        alt="best web designer niagara"
                      />
                      <h2>Search Engine Optimization</h2>
                      <p>
                        We employ proven strategies to improve your website's
                        visibility on search engines, driving more organic
                        traffic to your site.
                      </p>
                      <Link href="/niagara-seo-company">
                        <button>
                          Drive Sales
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

                <h2>Our Approach</h2>

                <p>
                  Our process is rooted in a deep understanding of your business
                  goals and target audience. We begin with a thorough
                  consultation, followed by meticulous planning and design. Our
                  development phase leverages cutting-edge technologies like
                  Next.js for static sites and WordPress for dynamic,
                  content-rich websites. We prioritize responsive design to
                  ensure your site performs flawlessly across all devices.
                </p>
                <br />
                <br />
                <div className="card">
                  <h2>Why Choose Infused Agency?</h2>

                  <ol>
                    <li>
                      <strong>Proven Results:</strong> Our portfolio showcases
                      numerous success stories from businesses across St.
                      Catharines, Niagara Falls, Welland, Fort Erie, Thorold,
                      and Niagara-on-the-Lake. We've helped clients achieve
                      remarkable results, including a 20,000% increase in leads
                      over 6 months and 5,800 new monthly visitors.
                    </li>
                    <li>
                      <strong>Local Expertise:</strong> As a Niagara-based
                      company, we understand the unique needs and challenges of
                      businesses in our region. Our local knowledge, combined
                      with our digital expertise, gives you a competitive edge.
                    </li>
                    <li>
                      <strong>Comprehensive Solutions:</strong> From{" "}
                      <Link href="/web-design">web design</Link> to{" "}
                      <Link href="/niagara-seo-company">SEO</Link> and digital
                      marketing, we offer end-to-end solutions to elevate your
                      online presence.
                    </li>
                    <li>
                      <strong>Client-Centric Approach:</strong> We view our
                      clients as partners. Your success is our success, and
                      we're committed to delivering solutions that drive real
                      business growth.
                    </li>
                    <li>
                      <strong>Cutting-Edge Technology:</strong> We stay ahead of
                      the curve by employing the latest web technologies and
                      best practices in our work.
                    </li>
                  </ol>
                </div>
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

export default About;
