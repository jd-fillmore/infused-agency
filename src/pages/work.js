import React from "react";
import Head from "next/head";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Nav from "../../components/Nav/nav";
import InnerHero from "../../components/innerHero/innerHero";
import CTA from "../../components/CTA/cta";
import Footer from "../../components/Footer/footer";
import bgImage from "../img/inner-work.jpg";

import visca from "../img/portfolio-visca.png";
import cass from "../img/portfolio-cass.png";
import kd from "../img/portfolio-kd.png";
import cma from "../img/portfolio-cma.png";
import med from "../img/portfolio-med.png";
import jerry from "../img/portfolio-jerrys.png";
import prem from "../img/portfolio-prem.png";
import ggs from "../img/portfolio-ggs.png";
import plant from "../img/portfolio-plant.png";
import donor from "../img/portfolio-donor.png";

const OurWork = () => {
  return (
    <>
      <Head>
        <title>Infused Agency | Our Work</title>
        <meta
          name="description"
          content="We're passionate about putting in the work to deliver to our client's needs. Check out the results we've got for our clients"
        />
        <link rel="canonical" href="https://infused.agency/work" />
      </Head>
      <Nav />
      <InnerHero
        title="Featured Work"
        description="Our business solutions grow our client's businesses."
        bgImage={bgImage}
      />

      <section className="work">
        <section className="dark">
          <Container>
            <Row>
              <Col lg="5">
                <h2 className="title">Recent Project</h2>
                <h2>KD Flowers</h2>
                <hr />
                <p>
                  KD Flowers is a small, boutique wedding florist in the Niagara
                  Region. They provide custom, gorgeous wedding flower bouqets
                  and more to brides, grooms and alike.
                </p>
                <ul>
                  <li>Custom Web Design</li>
                  <li>Custom Website Development</li>
                  <li>On-Page SEO Optimization</li>
                  <li>Off-Page SEO Optimization</li>
                  <li>Local SEO</li>
                  <li>Responsive &amp; Mobile-Friendly</li>
                  <li>Portfolio Photo Gallery</li>
                  <li>Lead Forms</li>
                  <li>Website Animations</li>
                  <li>Web Hosting &amp; Ongoing Maintenance</li>
                </ul>
                <div class="card">
                  <h3>After working with us:</h3>
                  <ul>
                    <li>Website Page Speed Increased By 100%</li>
                    <li>Google Search Visibility Increased by 600%</li>
                    <li>Achieved first-page Google rankings within 3 months</li>
                    <li>
                      0 leads to massive growth in local leads from Google
                    </li>
                    <li>Page 1 Google Map Rankings for Multiple Keywords</li>
                    <li>Page 1 Google Rankings for Multiple Keywords</li>
                    <li>Increased User Experience</li>
                    <li>Increased Engagement and Conversions</li>
                    <li>Increased Brand Recognition</li>
                    <li>Faster Load Times</li>
                    <li>Streamlined collection of leads</li>
                  </ul>
                </div>
              </Col>
              <Col lg="7">
                <Image className="img-fluid" src={kd} alt="kd flowers" />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="light">
          <Container>
            <Row>
              <Col lg="5">
                <h2 className="title">Recent Project</h2>
                <h2>Jerry's Insulating</h2>
                <hr />
                <p>
                  Jerry's Insulating is a family owned and operated full service
                  insulation contractor. Jerry’s Insulating Co. was established
                  in 1975. Their service area includes the Niagara Region,
                  Hamilton/Burlington.
                </p>
                <ul>
                  <li>Custom Website Redesign</li>
                  <li>Custom Website Development</li>
                  <li>On-Page SEO Optimization</li>
                  <li>Responsive &amp; Mobile-Friendly</li>
                  <li>Portfolio Photo Gallery</li>
                  <li>Lead Forms</li>
                  <li>Website Animations</li>
                  <li>Web Hosting &amp; Ongoing Maintenance</li>
                </ul>
                <div class="card">
                  <h3>After working with us:</h3>
                  <ul>
                    <li>Page 1 Google Rankings</li>
                    <li>Website Page Speed Increased By 90%</li>
                    <li>Increased User Experience</li>
                    <li>Increased Engagement and Conversions</li>
                    <li>Increased Brand Recognition</li>
                    <li>Faster Load Times</li>
                    <li>Streamlined collection of leads</li>
                  </ul>
                </div>
              </Col>
              <Col lg="7">
                <Image
                  className="img-fluid"
                  src={jerry}
                  alt="jerrys insulating"
                />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="dark">
          <Container>
            <Row>
              <Col lg="5">
                <h2 className="title">Recent Project</h2>
                <h2>Premium Delivery</h2>
                <hr />
                <p>
                  Premium Delivery is a call-to-order grocery, food, and drink
                  delivery service. They serve Fort Erie proper, Stevensville,
                  Crystal Beach, and Ridgeway.
                </p>
                <ul>
                  <li>Custom Web Design</li>
                  <li>Custom Website Development</li>
                  <li>On-Page SEO Optimization</li>
                  <li>Off-Page SEO Optimization</li>
                  <li>Local SEO</li>
                  <li>Responsive &amp; Mobile-Friendly</li>
                  <li>Web Hosting &amp; Ongoing Maintenance</li>
                </ul>
                <div class="card">
                  <h3>After working with us:</h3>
                  <ul>
                    <li>Website Page Speed Increased By 95%</li>
                    <li>Google Search Visibility Increased by 200%</li>
                    <li>Page 1 Google Map Rankings for Multiple Keywords</li>
                    <li>Page 1 Google Rankings for Multiple Keywords</li>
                    <li>Increased User Experience</li>
                    <li>Increased Engagement and Conversions</li>
                    <li>Increased Brand Recognition</li>
                    <li>Faster Load Times</li>
                  </ul>
                </div>
              </Col>
              <Col lg="7">
                <Image
                  className="img-fluid"
                  src={prem}
                  alt="premium delivery"
                />
              </Col>
            </Row>
          </Container>
        </section>

        <section className="light">
          <Container>
            <Row>
              <Col lg="5">
                <h2 className="title">Recent Project</h2>
                <h2>VISCA electric</h2>
                <hr />
                <p>
                  VISCA electric is a premier electrician in Niagara. They offer
                  residential and commercial electrician services at a great
                  price point.
                </p>
                <ul>
                  <li>Custom Website Redesign</li>
                  <li>Custom Website Development</li>
                  <li>On-Page SEO Optimization</li>
                  <li>Responsive &amp; Mobile-Friendly</li>
                  <li>Portfolio Photo Gallery</li>
                  <li>Lead Forms</li>
                  <li>Website Animations</li>
                  <li>Web Hosting &amp; Ongoing Maintenance</li>
                </ul>
                <div class="card">
                  <h3>After working with us:</h3>
                  <ul>
                    <li>Website Page Speed Increased By 70%</li>
                    <li>Increased User Experience</li>
                    <li>Increased Engagement and Conversions</li>
                    <li>Increased Brand Recognition</li>
                    <li>Faster Load Times</li>
                    <li>Streamlined collection of leads</li>
                  </ul>
                </div>
              </Col>
              <Col lg="7">
                <Image
                  className="img-fluid"
                  src={visca}
                  alt="visca electric web design"
                />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="dark">
          <Container>
            <Row>
              <Col lg="5">
                <h2 className="title">Recent Project</h2>
                <h2>Lincoln Medical Centre</h2>
                <hr />
                <p>
                  Lincoln Medical Centre is comprised of a team of family
                  physicians, nurses and support staff that work together to
                  ensure that excellent quality patient care is provided in a
                  respectful and compassionate environment.
                </p>
                <ul>
                  <li>Custom Web Design</li>
                  <li>Custom Website Development</li>
                  <li>On-Page SEO Optimization</li>
                  <li>Off-Page SEO Optimization</li>
                  <li>Local SEO</li>
                  <li>Responsive &amp; Mobile-Friendly</li>
                  <li>Web Hosting &amp; Ongoing Maintenance</li>
                </ul>
                <div class="card">
                  <h3>After working with us:</h3>
                  <ul>
                    <li>Website Page Speed Increased By 85%</li>
                    <li>Google Search Visibility Increased by 90%</li>
                    <li>Page 1 Google Map Rankings for Multiple Keywords</li>
                    <li>Page 1 Google Rankings for Multiple Keywords</li>
                    <li>Increased User Experience</li>
                    <li>Increased Engagement and Conversions</li>
                    <li>Increased Brand Recognition</li>
                    <li>Faster Load Times</li>
                  </ul>
                </div>
              </Col>
              <Col lg="7">
                <Image
                  className="img-fluid"
                  src={med}
                  alt="lincoln medical centre"
                />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="light">
          <Container>
            <Row>
              <Col lg="5">
                <h2 className="title">Recent Project</h2>
                <h2>Cass-A-Bella Construction</h2>
                <hr />
                <p>
                  Cass-A-Bella Construction is a custom home builder based in
                  Toronto, serving areas beyond including Niagara. Specializing
                  in beautiful custom homes and additions.
                </p>
                <ul>
                  <li>Custom Web Design</li>
                  <li>Custom Website Development</li>
                  <li>On-Page SEO Optimization</li>
                  <li>Off-Page SEO Optimization</li>
                  <li>Local SEO</li>
                  <li>Responsive &amp; Mobile-Friendly</li>
                  <li>Portfolio Photo Gallery</li>
                  <li>Lead Forms</li>
                  <li>Website Animations</li>
                  <li>Web Hosting &amp; Ongoing Maintenance</li>
                </ul>
                <div class="card">
                  <h3>After working with us:</h3>
                  <ul>
                    <li>Website Page Speed Increased By 90%</li>
                    <li>Google Search Visibility Increased by 200%</li>
                    <li>Page 1 Google Map Rankings for Multiple Keywords</li>
                    <li>Page 1 Google Rankings for Multiple Keywords</li>
                    <li>Leads Increased From 2 to 10 per month in 3 months</li>
                    <li>Increased User Experience</li>
                    <li>Increased Engagement and Conversions</li>
                    <li>Increased Brand Recognition</li>
                    <li>Faster Load Times</li>
                    <li>Streamlined collection of leads</li>
                  </ul>
                </div>
              </Col>
              <Col lg="7">
                <Image
                  className="img-fluid"
                  src={cass}
                  alt="cass-a-bella web design"
                />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="dark">
          <Container>
            <Row>
              <Col lg="5">
                <h2 className="title">Recent Project</h2>
                <h2>Canadian Mortgage Authority</h2>
                <hr />
                <p>
                  The Canadian Mortgage Authority is a team of premier, local
                  mortgage brokers that serve the Niagara region and beyond.
                </p>
                <ul>
                  <li>Custom Web Design</li>
                  <li>Custom Website Development</li>
                  <li>WordPress Website Development</li>
                  <li>On-Page SEO Optimization</li>
                  <li>Off-Page SEO Optimization</li>
                  <li>Local SEO</li>
                  <li>Responsive &amp; Mobile-Friendly</li>
                  <li>Blog Functionality</li>
                  <li>Lead Forms</li>
                  <li>Website Animations</li>
                  <li>Web Hosting &amp; Ongoing Maintenance</li>
                </ul>
                <div class="card">
                  <h3>After working with us:</h3>
                  <ul>
                    <li>Website Page Speed Increased By 75%</li>
                    <li>Google Search Visibility Increased by 150%</li>
                    <li>Page 1 Google Map Rankings for Multiple Keywords</li>
                    <li>Page 1 Google Rankings for Multiple Keywords</li>
                    <li>Increased User Experience</li>
                    <li>Increased Engagement and Conversions</li>
                    <li>Increased Brand Recognition</li>
                    <li>Faster Load Times</li>
                    <li>Streamlined collection of leads</li>
                  </ul>
                </div>
              </Col>
              <Col lg="7">
                <Image className="img-fluid" src={cma} alt="cma web design" />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="light">
          <Container>
            <Row>
              <Col lg="5">
                <h2 className="title">Recent Project</h2>
                <h2>GGS Niagara Landscaping</h2>
                <hr />
                <p>
                  GGS Niagara Landscaping Inc. offers full service landscape
                  maintenance and garden design in the Niagara region.
                </p>
                <ul>
                  <li>Custom Web Design</li>
                  <li>Custom Website Development</li>
                  <li>On-Page SEO Optimization</li>
                  <li>Responsive &amp; Mobile-Friendly</li>
                  <li>Lead Forms</li>
                  <li>Website Animations</li>
                  <li>Web Hosting &amp; Ongoing Maintenance</li>
                </ul>
                <div class="card">
                  <h3>After working with us:</h3>
                  <ul>
                    <li>Website Page Speed Increased By 85%</li>
                    <li>Increased User Experience</li>
                    <li>Increased Engagement and Conversions</li>
                    <li>Increased Brand Recognition</li>
                    <li>Faster Load Times</li>
                    <li>Streamlined collection of leads</li>
                  </ul>
                </div>
              </Col>
              <Col lg="7">
                <Image
                  className="img-fluid"
                  src={ggs}
                  alt="ggs niagara landscaping web design"
                />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="dark">
          <Container>
            <Row>
              <Col lg="5">
                <h2 className="title">Recent Project</h2>
                <h2>Plant No.01</h2>
                <hr />
                <p>
                  Plant No.01 is a vegan food factory located in the Niagara
                  region providing entrees, baked goods and non-dairy cheeses
                  using sustainable practices.
                </p>
                <ul>
                  <li>Custom Web Design</li>
                  <li>Custom Website Development</li>
                  <li>On-Page SEO Optimization</li>
                  <li>Responsive &amp; Mobile-Friendly</li>
                  <li>Lead Forms</li>
                  <li>Web Hosting &amp; Ongoing Maintenance</li>
                </ul>
                <div class="card">
                  <h3>After working with us:</h3>
                  <ul>
                    <li>Website Page Speed Increased By 100%</li>
                    <li>Increased User Experience</li>
                    <li>Increased Engagement and Conversions</li>
                    <li>Increased Brand Recognition</li>
                    <li>Faster Load Times</li>
                    <li>Streamlined collection of leads</li>
                  </ul>
                </div>
              </Col>
              <Col lg="7">
                <Image
                  className="img-fluid"
                  src={plant}
                  alt="plant no.01 web design"
                />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="light">
          <Container>
            <Row>
              <Col lg="5">
                <h2 className="title">Recent Project</h2>
                <h2>Donor Compass</h2>
                <hr />
                <p>
                  They are the leaders in data-driven relationship building.
                  Donor Compass has partnered with over 250 nonprofits across
                  North America to foster meaningful relationships with their
                  top donors.
                </p>
                <ul>
                  <li>Custom Web Design</li>
                  <li>Custom Website Development</li>
                  <li>WordPress Website Development</li>
                  <li>On-Page SEO Optimization</li>
                  <li>Responsive &amp; Mobile-Friendly</li>
                  <li>Lead Forms</li>
                  <li>Blog</li>
                  <li>Web Hosting &amp; Ongoing Maintenance</li>
                </ul>
                <div class="card">
                  <h3>After working with us:</h3>
                  <ul>
                    <li>Website Page Speed Increased By 75%</li>
                    <li>30% increase in lead collection</li>
                    <li>Increased User Experience</li>
                    <li>Increased Engagement and Conversions</li>
                    <li>Increased Brand Recognition</li>
                    <li>Faster Load Times</li>
                    <li>Streamlined collection of leads</li>
                  </ul>
                </div>
              </Col>
              <Col lg="7">
                <Image
                  className="img-fluid"
                  src={donor}
                  alt="donor compass web design"
                />
              </Col>
            </Row>
          </Container>
        </section>
      </section>

      <CTA />
      <Footer />
    </>
  );
};

export default OurWork;
