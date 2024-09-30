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
import check from "../img/check-client.png";

const About = () => {
  return (
    <>
      <Head>
        <title>Galvez Design Inc. - Infused</title>
        <meta
          name="description"
          content="Learn more about the core values, the hardworking team and how we accomplish your business goals at Infused."
        />
        <link rel="canonical" href="https://infused.agency/about" />
      </Head>
      <Nav />
      <InnerHero
        title="Galvez Design Inc."
        description="Website &amp; Digital Marketing Project. Generating more leads &amp; online credibility a local, Oakville architecture residential design firm."
      />
      <InnerContent>
        <section>
          <Container>
            <Row>
              <Col lg="6">
                <h2>The Problem</h2>
                <p>
                  As it stands, outside of word-of-mouth referrals, you want
                  more local traffic, leads, consults and projects booked
                  directly through your website. While this is absolutely
                  possible when we work together, at the moment,{" "}
                  <span>this is not happening</span>.
                </p>
              </Col>
              <Col lg="6">
                <h2>The Solution</h2>
                <p>
                  The solution here is to get local traffic, leads, consults and
                  projects booked through your site.
                </p>
                <p>
                  You want potential clients to know that you're more hands on,
                  you believe in equality, you don't do cookie cutter and you're
                  with your clients from start to finish.
                </p>
              </Col>
            </Row>
            <Row className="pd-top-80">
              <Col lg="12">
                <h2>We'll Get It Done</h2>
                <p>
                  Within your budget of $5,000,{" "}
                  <span>
                    spread over 12 months to make it easier on you as a small
                    business
                  </span>
                  , we can do this for you by doing:
                </p>
              </Col>
            </Row>
            <Row className="pd-top-40">
              <Col lg="6" className="d-flex">
                <div className="card">
                  <h3>
                    Phase 1:
                    <br />
                    Conversion-Focused Website
                  </h3>
                  <p>
                    While other local companies 'build websites' (they don't,
                    they use drag and drop website builders{" "}
                    <span>
                      which are bad for SEO and charge thousands doing so
                    </span>
                    ), we <span>custom develop our websites</span> and they're{" "}
                    <span>specifically built</span> to rank well in Google.{" "}
                    <br />
                    <br />
                    It's better to have a solid, custom built foundational
                    website, than a drag-and-drop built website, that will not
                    rank well in the end. <br />
                    <br />
                    <span>
                      We're saving you the headache of having to spend money
                      twice.
                    </span>
                  </p>
                </div>
              </Col>
              <Col lg="6">
                <div className="card">
                  <h3>
                    Phase 2:
                    <br />
                    Proven Local SEO Strategies
                  </h3>
                  <p>
                    After your website is launched, we'll engage in local SEO
                    best practices for your website.
                    <br />
                    <br />
                    Specific to Infused, we use what's called "white hat SEO"
                    (in other words, ethical SEO practices) that{" "}
                    <span>
                      other local companies don't properly know how to do
                    </span>{" "}
                    in order drive local people to Galvez Design Inc.'s website.
                    <br />
                    <br />
                    Again - because we know what we're doing,{" "}
                    <span>we're saving you the headache </span> of spending
                    money with someone else{" "}
                    <span>that doesn't know what they're doing</span>.
                  </p>
                </div>
              </Col>
            </Row>

            <h2>The Result</h2>
            <p>
              You're getting an <span>affordable yet extremely valuable</span>{" "}
              local SEO and Google-friendly website solution, that can not only
              drive traffic but convert it into consults, within your budget.
            </p>
            <h2>What Makes Infused Different</h2>
            <p>
              Here are some reason we believe you'll find very compelling to
              work with us, versus our competitors:
            </p>
            <section className="different">
              <Row>
                <Col lg="4" className="d-flex">
                  <div className="card">
                    <Image
                      src={check}
                      alt="web design niagara generate leads"
                    />
                    <h3>We're Awesome At This</h3>
                    <p>
                      We've worked with local-based companies, creating modern
                      websites &amp; successful local SEO strategies for over a
                      decade, with <Link href="/work">tangible results</Link>.
                    </p>
                  </div>
                </Col>
                <Col lg="4" className="d-flex">
                  <div className="card">
                    <Image
                      src={check}
                      alt="web design niagara generate leads"
                    />
                    <h3>Local SEO Experts</h3>
                    <p>
                      Local SEO is our bread &amp; butter. We've helped{" "}
                      <Link href="/work">many local companies</Link> drive
                      traffic, increase their revenue and grow their businesses
                      directly because of our specific SEO efforts.
                    </p>
                  </div>
                </Col>
                <Col lg="4">
                  <div className="card">
                    <Image
                      src={check}
                      alt="web design niagara generate leads"
                    />
                    <h3>Conversion-Focused Websites</h3>
                    <p>
                      Our competitors simply slap websites together and call it
                      a day. Not us. We take the time to actually understand
                      your business needs, and with that, help convert customers
                      directly through your website.
                    </p>
                  </div>
                </Col>
              </Row>
            </section>
            <Row>
              <Col lg="12">
                <h2>Investment Breakdown</h2>
                <p>
                  To help you get more local, online visibility for your brand /
                  website, and to help convert those leads into consultations..
                </p>
                <p>
                  We're offering you a <span>25% off discount</span> as a
                  bundled package,{" "}
                  <span>only available until Monday, October 7th.</span>
                </p>
                <p>
                  If you decide thereafter that date to work together, the
                  discount will no longer be applied.
                </p>
              </Col>
            </Row>
            <section className="pricing">
              <Row>
                <Col lg="6">
                  <div className="card">
                    <h3>Conversion-Focused Website</h3>
                    <p>We build websites that are actually setup to convert.</p>
                    <div className="bg">
                      <ul>
                        <li className="check">4 Pages</li>
                        <li className="check">1 Round of Revisions</li>
                        <li className="check">Custom Design</li>
                        <li className="check">Mobile-Friendly Design</li>
                        <li className="check">SSL Certificate Included</li>
                        <li className="check">Photo Gallery</li>
                        <li className="check">
                          Third Party Booking Implementation
                        </li>
                        <li className="check">Lead Form</li>
                        <li className="check">
                          Social Media Icons Integration
                        </li>
                        <li className="check">SEO-Indexable Pages</li>
                        <li className="check">Google Search Console</li>
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col lg="6">
                  <div className="card">
                    <h3>Tailored Local SEO</h3>
                    <p>
                      We do specific SEO strategies to bring your business
                      visibility.
                    </p>
                    <div className="bg">
                      <ul>
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
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg="12">
                  <h2>Total Investment:</h2>
                  <h3>
                    <sup>$</sup>416/month over 1 year. A{" "}
                    <span>25% off discount</span> from <sup>$</sup>550/month
                    over 1 year.
                  </h3>
                  <p>
                    A manageable <sup>$</sup>416/month over a 1 year period for
                    your new Google-friendly website, alongside tailored local
                    SEO solutions. First and last month's deposits upfront to
                    kick-start the project.
                  </p>
                </Col>
              </Row>
            </section>
            <Row>
              <Col lg="12">
                <h2>Next Steps</h2>
                <ul>
                  <ol>
                    <li>
                      Pay deposit invoice of first and last month's investment
                      upfront
                    </li>
                    <li>Book kick-off call</li>
                  </ol>
                </ul>
              </Col>
            </Row>
            <h3>Extra Investment</h3>
            <p>
              Social media ads are effective. However,{" "}
              <span>this would go outside of the current $5,000 budget</span>,
              which the new website + local SEO strategies fall under.
            </p>
            <p>
              If you're curious, this would be the range you're looking at
              regarding social media ads ontop of the existing $5,000 budget
              below. You can spend whatever you'd like, however here are the
              ranges:
            </p>
            <ul>
              <li>
                <strong>$500 - $2000 Ad Spend:</strong>
                <ul>
                  <li>
                    Minimum Fee: $500 (design / creation / 1 round of revisions
                    for ads)
                  </li>
                  <li>
                    Percentage of Ad Spend : 20% (to ensure dedicated management
                    and optimization of your campaign for better results)
                  </li>
                  <li>Minimum Ad Spend: $500</li>
                </ul>
              </li>
              <li>
                <strong>$2001 - $5000 Ad Spend:</strong>
                <ul>
                  <li>
                    Minimum Fee: $750 (design / creation / 2 rounds of revisions
                    for ads)
                  </li>
                  <li>
                    Percentage of Ad Spend: 18% (to ensure dedicated management
                    and optimization of your campaign for better results)
                  </li>
                  <li>Minimum Ad Spend: $2001</li>
                </ul>
              </li>
              <li>
                <strong>$5001 - $10,000 Ad Spend:</strong>
                <ul>
                  <li>
                    Minimum Fee: $1000 (design / creation / 2 rounds of
                    revisions for ads)
                  </li>
                  <li>
                    Percentage of Ad Spend: 15% (to ensure dedicated management
                    and optimization of your campaign for better results)
                  </li>
                  <li>Minimum Ad Spend: $5001</li>
                </ul>
              </li>
              <li>
                <strong>$10,000+ Ad Spend:</strong>
                <ul>
                  <li>Custom Rates: Negotiate</li>
                  <li>Minimum Ad Spend: $10,000</li>
                </ul>
              </li>
            </ul>
          </Container>
        </section>
      </InnerContent>
      <Footer />
    </>
  );
};

export default About;
