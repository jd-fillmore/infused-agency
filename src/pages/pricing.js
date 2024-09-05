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

const Pricing = () => {
  return (
    <>
      <Head>
        <title>Website Design Pricing for Ontario Businesses | Infused</title>
        <meta
          name="description"
          content="Check out the premium pricing for Infused Ageny's web design, SEO and digital marketing services."
        />
      </Head>
      <Nav />
      <InnerHero title="Pricing" description="Our Website & SEO Pricing" />
      <InnerContent>
        <section className="pricing">
          <Container>
            <Row>
              <Col lg="12">
                <p>
                  High-quality web design shouldn't be reserved for large
                  companies.
                  <br />
                  <br />
                  We help small to medium businesses and alike build a strong
                  online presence at an affordable price.
                </p>
                <h3 className="pd-top-40">
                  <strong>
                    <span>These prices are a general guideline only.</span>{" "}
                    <br />
                    <br />
                    Depending on your specific project scope, whether it's
                    reducing or adding to the scope, the prices may fluctuate.
                  </strong>
                </h3>
              </Col>
            </Row>
            {/* Websites */}
            <Row className="pd-top-40 pd-btm-40">
              <Col lg="12">
                <h2>
                  <span>Website Design &amp; Development</span> Pricing
                </h2>
              </Col>
            </Row>
            <Row>
              <Col lg="4" className="d-flex">
                <div className="card">
                  <h3>Starter</h3>
                  <h4>
                    Starting at <span>$3,499</span>
                  </h4>
                  <p>
                    For small businesses and startups seeking to build or
                    refresh their online presence.
                  </p>
                  <div className="bg">
                    <li className="check">5 Pages</li>
                    <li className="check">1 Round of Revisions</li>
                    <li className="check">Custom, Template-Free Design</li>
                    <li className="check">Mobile-Friendly Design</li>
                    <li className="check">SSL Certificate Included</li>
                    <li className="xmark">Edit Content On Your Own</li>
                    <li className="xmark">Blog</li>
                    <li className="xmark">Photo Galleries</li>
                    <li className="xmark">Memberships</li>
                    <li className="xmark">Appointment Booking</li>
                    <li className="xmark">Lead Form</li>
                    <li className="xmark">Social Media Integration</li>
                    <li className="xmark">Quote/Fee Calculator</li>
                    <li className="xmark">SEO-Indexable Pages</li>
                    <li className="xmark">Google Analytics Setup</li>
                    <li className="xmark">Google Search Console Setup</li>
                    <li className="xmark">Product Purchase (E-Commerce)</li>
                    <li className="xmark">Payment Integration</li>
                  </div>
                  <Link href="/get-a-quote">
                    <button>
                      Choose Package
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        className="absolute left-1/2 top-1/2 translate-centered group-hover:ml-1 transition-250"
                        height="20px"
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                      </svg>
                    </button>
                  </Link>
                </div>
              </Col>
              <Col lg="4" className="d-flex">
                <div className="card">
                  <div className="d-flex align-items-center">
                    <h3>Business</h3>
                    <p className="popular">Popular</p>
                  </div>
                  <h4>
                    Starting at <span>$6,999</span>
                  </h4>
                  <p>
                    For small businesses seeking to upgrade and improve their
                    online presence.
                  </p>
                  <div className="bg">
                    <li className="check">10 Pages</li>
                    <li className="check">1 Round of Revisions</li>
                    <li className="check">Custom, Template-Free Design</li>
                    <li className="check">Mobile-Friendly Design</li>
                    <li className="check">SSL Certificate Included</li>
                    <li className="check">Edit Content On Your Own</li>
                    <li className="check">Blog</li>
                    <li className="check">Photo Galleries</li>
                    <li className="check">Memberships</li>
                    <li className="check">Appointment Booking</li>
                    <li className="check">Lead Form</li>
                    <li className="check">Social Media Integration</li>
                    <li className="check">Quote/Fee Calculator</li>
                    <li className="check">SEO-Indexable Pages</li>
                    <li className="check">Google Analytics Setup</li>
                    <li className="check">Google Search Console Setup</li>
                    <li className="xmark">Product Purchase (E-Commerce)</li>
                    <li className="xmark">Payment Integration</li>
                  </div>
                  <Link href="/get-a-quote">
                    <button>
                      Choose Package
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        className="absolute left-1/2 top-1/2 translate-centered group-hover:ml-1 transition-250"
                        height="20px"
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                      </svg>
                    </button>
                  </Link>
                </div>
              </Col>
              <Col lg="4" className="d-flex">
                <div className="card">
                  <h3>Commerce</h3>
                  <h4>
                    Starting at <span>$12,999</span>
                  </h4>
                  <p>
                    For growing businesses seeking to sell products and expand
                    their brand online.
                  </p>
                  <div className="bg">
                    <li className="check">15 Pages</li>
                    <li className="check">1 Round of Revisions</li>
                    <li className="check">Custom, Template-Free Design</li>
                    <li className="check">Mobile-Friendly Design</li>
                    <li className="check">SSL Certificate Included</li>
                    <li className="check">Edit Content On Your Own</li>
                    <li className="check">Blog</li>
                    <li className="check">Photo Galleries</li>
                    <li className="check">Memberships</li>
                    <li className="check">Appointment Booking</li>
                    <li className="check">Lead Form</li>
                    <li className="check">Social Media Integration</li>
                    <li className="check">Quote/Fee Calculator</li>
                    <li className="check">SEO-Indexable Pages</li>
                    <li className="check">Google Analytics Setup</li>
                    <li className="check">Google Search Console Setup</li>
                    <li className="check">Product Purchase (E-Commerce)</li>
                    <li className="check">Payment Integration</li>
                  </div>
                  <Link href="/get-a-quote">
                    <button>
                      Choose Package
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        className="absolute left-1/2 top-1/2 translate-centered group-hover:ml-1 transition-250"
                        height="20px"
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                      </svg>
                    </button>
                  </Link>
                </div>
              </Col>
            </Row>
            {/* SEO*/}
            <Row className="pd-top-40">
              <Col lg="12">
                <h2>
                  <span>SEO (Search Engine Optimization)</span> Pricing
                </h2>
              </Col>
            </Row>

            {/* SEO */}
            <Row className="pd-top-40 pd-btm-120">
              <Col lg="4" className="d-flex">
                <div className="card">
                  <h3>SEO Audit</h3>
                  <h4>
                    One time fee of <span>$999</span>
                  </h4>
                  <p>
                    Detailed analysis of your website’s SEO, highlighting areas
                    for improvement.
                  </p>
                  <div className="bg">
                    <li className="check">SEO Website Audit</li>
                    <li className="check">SEO Audit Report</li>
                    <li className="xmark">3 month SEO Campaign</li>
                    <li className="xmark">Custom SEO Strategy</li>
                    <li className="xmark">In-Depth Keyword Research</li>
                    <li className="xmark">SEO Content Optimization</li>
                    <li className="xmark">Optimize Image Alt Tags</li>
                    <li className="xmark">Optimize Google Sitemap</li>
                    <li className="xmark">Optimize Meta Descriptions</li>
                    <li className="xmark">Optimize Meta Titles</li>
                    <li className="xmark">On-page SEO Optimization</li>
                    <li className="xmark">Optimize Google Map Listing</li>
                    <li className="xmark">Link Building</li>
                    <li className="xmark">2 SEO Blog Posts / Month</li>
                  </div>
                  <Link href="/get-a-quote">
                    <button>
                      Choose Package
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        className="absolute left-1/2 top-1/2 translate-centered group-hover:ml-1 transition-250"
                        height="20px"
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                      </svg>
                    </button>
                  </Link>
                </div>
              </Col>
              <Col lg="4">
                <div className="card">
                  <div className="d-flex align-items-center">
                    <h3>SEO Boost</h3>
                    <p className="popular">Popular</p>
                  </div>
                  <h4>
                    <span>$1,499</span> / month for 3 months
                  </h4>
                  <p>
                    Accelerated SEO package for enhanced rankings and traffic
                    over four months.
                  </p>
                  <div className="bg">
                    <li className="check">SEO Website Audit</li>
                    <li className="check">SEO Audit Report</li>
                    <li className="check">3 month SEO Campaign</li>
                    <li className="check">Custom SEO Strategy</li>
                    <li className="check">In-Depth Keyword Research</li>
                    <li className="check">SEO Content Optimization</li>
                    <li className="check">Optimize Image Alt Tags</li>
                    <li className="check">Optimize Google Sitemap</li>
                    <li className="check">Optimize Meta Descriptions</li>
                    <li className="check">Optimize Meta Titles</li>
                    <li className="check">On-page SEO Optimization</li>
                    <li className="check">Optimize Google Map Listing</li>
                    <li className="check">Link Building</li>
                    <li className="xmark">2 SEO Blog Posts / Month</li>
                  </div>
                  <Link href="/get-a-quote">
                    <button>
                      Choose Package
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        className="absolute left-1/2 top-1/2 translate-centered group-hover:ml-1 transition-250"
                        height="20px"
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                      </svg>
                    </button>
                  </Link>
                </div>
              </Col>
              <Col lg="4">
                <div className="card">
                  <h3>SEO Elite</h3>
                  <h4>
                    <span>$2,499</span> per month for 6 months
                  </h4>
                  <p>
                    Premium SEO service with comprehensive optimization over six
                    months.
                  </p>
                  <div className="bg">
                    <li className="check">SEO Website Audit</li>
                    <li className="check">SEO Audit Report</li>
                    <li className="check">6 month SEO Campaign</li>
                    <li className="check">Custom SEO Strategy</li>
                    <li className="check">In-Depth Keyword Research</li>
                    <li className="check">SEO Content Optimization</li>
                    <li className="check">Optimize Image Alt Tags</li>
                    <li className="check">Optimize Google Sitemap</li>
                    <li className="check">Optimize Meta Descriptions</li>
                    <li className="check">Optimize Meta Titles</li>
                    <li className="check">On-page SEO Optimization</li>
                    <li className="check">Optimize Google Map Listing</li>
                    <li className="check">Link Building</li>
                    <li className="check">2 SEO Blog Posts / Month</li>
                  </div>
                  <Link href="/get-a-quote">
                    <button>
                      Choose Package
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        className="absolute left-1/2 top-1/2 translate-centered group-hover:ml-1 transition-250"
                        height="20px"
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                      </svg>
                    </button>
                  </Link>
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

export default Pricing;
