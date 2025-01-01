import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Head from "next/head";
import Image from "next/image";
import Example from "../../../components/Nav/nav";
import InnerHero from "../../../components/innerHero/innerHero";
import InnerContent from "../../../components/innerContent/innerContent";
import CTA from "../../../components/CTA/cta";
import Footer from "../../../components/Footer/footer";
import website from "../../img/responsive.svg";
import bgImage from "../../img/inner-web-design.jpg";

import ui from "../../img/ui-design.png";
import build from "../../img/build.png";
import grow from "../../img/grow.png";
import growth from "../../img/lead-generating-websites-niagara.png";
import funnel from "../../img/lead-gen-convert.jpg";
import convert from "../../img/conversion-web.jpg";
import fast from "../../img/design-fast.png";

const WebDesign = () => {
  return (
    <>
      <Head>
        <title>Lead-Generating Web Design &amp; Development | Infused</title>
        <meta
          name="description"
          content="Infused Agency offers lead-generating web design and development services for companies in St. Catharines and Niagara. Click here to get your free quote."
        />
        <link rel="canonical" href="https://infused.agency/web-design" />
      </Head>
      <Example />
      <InnerHero
        title="Lead-Generating Web Design"
        description="Our websites are not 'just websites'. They're your best 24/7 sales manager."
        bgImage={bgImage}
      />
      <InnerContent>
        <section className="web-design">
          <Container>
            {/* Websites */}
            <Row>
              <Col md="6">
                <h2>
                  Websites made to <span>engage</span>, <span>capture</span> and{" "}
                  <span>convert</span>.
                </h2>
              </Col>
              <Col md="6">&nbsp;</Col>
            </Row>
            <Row className="pd-top-40">
              <Col lg="4">
                <div className="card">
                  <Image src={ui} alt="ui design" />
                  <h3>Design</h3>
                  <p>
                    By adopting a human-first design approach, we create
                    interfaces tailored to your target demographic, effectively
                    showcasing your services, products, and capabilities.
                  </p>
                </div>
              </Col>
              <Col lg="4">
                <div className="card">
                  <Image src={build} alt="web development" />
                  <h3>Build</h3>
                  <p>
                    We've engineered lead-generating websites for a wide range
                    of industries. Our pride lies in delivering high-ROI,
                    cost-effective solutions through streamlined development.
                  </p>
                </div>
              </Col>
              <Col lg="4">
                <div className="card">
                  <Image src={grow} alt="web growth" />
                  <h3>Grow</h3>
                  <p>
                    After launching your lead-generating website, we drive
                    growth through targeted <Link href="/">SEO Niagara</Link>{" "}
                    services. Our approach ensures sustained traffic, higher
                    conversions, and ongoing business success.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="pd-top-120 d-flex align-items-center">
              <Col lg="6" className="d-none d-sm-block">
                <Image
                  className="img-fluid"
                  src={growth}
                  alt="lead generating websites niagara"
                />
              </Col>
              <Col lg="6" className="order-1 order-lg-2">
                <h2>
                  <span>High-Impact</span> <br />
                  Lead-Generation Design
                </h2>
                <p>
                  At Infused Agency, we’re dedicated to fueling your business
                  growth through exceptional lead-generation for our{" "}
                  <Link href="/">website design Niagara</Link> clients &amp;
                  beyond. From the initial concept to the final launch, we craft
                  bespoke digital experiences that drive results. Leveraging
                  cutting-edge platforms like NextJS, WordPress, React, and
                  Shopify, we ensure your website not only looks stunning but
                  also performs optimally. Our expert team combines strategic
                  design with innovative technology to create high-converting
                  websites that captivate your audience and accelerate your
                  business success. Partner with us to transform your online
                  presence and watch your business thrive.
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
                  alt="lead generating websites niagara"
                />
              </Col>
            </Row>

            <Row className="pd-top-120 d-flex align-items-center">
              <Col lg="6" className="d-block d-lg-none">
                <Image
                  className="img-fluid pd-btm-40"
                  src={funnel}
                  alt="sales funnel website niagara"
                />
              </Col>
              <Col lg="6">
                <h2>
                  <span>Sales Funnels</span> <br />
                  That Convert
                </h2>
                <p>
                  Ready to turn your website visitors into loyal customers? Our
                  expertly crafted sales funnels are designed to do just that.
                  At Infused Agency, we build powerful, conversion-focused sales
                  funnels that guide your prospects seamlessly from interest to
                  action. With a strategic approach that includes captivating
                  design, compelling copy, and persuasive calls-to-action, we
                  ensure your funnels don’t just capture leads—they drive real,
                  measurable results.
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
              <Col lg="6" className="d-none d-lg-block">
                <Image
                  className="img-fluid"
                  src={funnel}
                  alt="lead generating websites niagara"
                />
              </Col>
            </Row>
            <Row className="pd-top-120 d-flex align-items-center">
              <Col lg="6">
                <Image
                  className="img-fluid pd-btm-40"
                  src={convert}
                  alt="conversion optimization websites niagara"
                />
              </Col>
              <Col lg="6">
                <h2>
                  <span>Conversion-Driven</span> <br />
                  Web Design
                </h2>
                <p>
                  Ready to transform your online presence into a conversion
                  powerhouse? Our expertly crafted Conversion-Driven Web Design
                  is designed to do just that. At Infused Agency, we create
                  stunning websites that not only captivate your audience but
                  also drive real, measurable results. With a strategic focus on
                  user experience, engaging visuals, and optimized design
                  elements, we ensure your website isn’t just eye-catching—it’s
                  a powerful tool for converting visitors into loyal customers.
                  From intuitive navigation to compelling calls-to-action, our
                  designs are crafted to guide your prospects seamlessly from
                  interest to action.
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
            </Row>
            <Row className="pd-top-80">
              <Col md="6">
                <h2>
                  Our websites are <span>fast</span>, <span>optimized</span> and{" "}
                  <span>drive leads</span>.
                </h2>
              </Col>
              <Col md="6">&nbsp;</Col>
            </Row>
            <Row className="pd-top-40">
              <Col lg="4">
                <div className="card">
                  <Image src={fast} alt="fast website design niagara" />
                  <h3>Lightning-Fast Speed</h3>
                  <p>
                    Experience unparalleled website speed with Infused Agency.
                    Our websites load in the blink of an eye, ensuring a smooth
                    user experience and higher engagement. Don't let slow load
                    times hold you back—contact us for a website that delivers
                    lightning-fast performance.
                  </p>
                </div>
              </Col>
              <Col lg="4" className="d-flex">
                <div className="card">
                  <Image src={build} alt="web development" />
                  <h3>Mobile Performance</h3>
                  <p>
                    Get a website that looks and performs flawlessly on any
                    device. Infused Agency ensures your site is perfectly
                    optimized for mobile, delivering a seamless experience that
                    keeps users engaged and converts visitors into customers.
                  </p>
                </div>
              </Col>
              <Col lg="4">
                <div className="card">
                  <Image src={grow} alt="web growth" />
                  <h3>Rank On Google</h3>
                  <p>
                    Unlock your website’s potential with Infused Agency’s expert
                    SEO strategies. Our team designs and optimizes your site to
                    climb the Google rankings, ensuring you stand out in search
                    results. Attract more visitors and drive targeted traffic
                    with a site built for success.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <div className="card">
                  <img
                    width="48"
                    height="48"
                    src="https://lh3.googleusercontent.com/a-/ALV-UjXrE-pCVt85f0WVdkwxJavD--mFf6VwkCGbIVkEjYt98Qt5ukDYqw=w48-h48-p-rp-mo-ba3-br100"
                  />
                  <p className="author">VISCA Electric</p>
                  <div className="d-flex">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z"
                        fill="#FFD700"
                      />
                    </svg>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z"
                        fill="#FFD700"
                      />
                    </svg>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z"
                        fill="#FFD700"
                      />
                    </svg>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z"
                        fill="#FFD700"
                      />
                    </svg>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z"
                        fill="#FFD700"
                      />
                    </svg>
                  </div>
                  <p className="desc">
                    Working with JD was a pleasure. He was extremely responsive
                    and informative from start to finish. JD is creative,
                    efficient, and very knowledgeable in his field. He helped me
                    and my team create a new website for my business. The design
                    and development process was smooth and easy. I would
                    absolutely recommend JD to anyone looking for a new or
                    updated website for their business!
                  </p>
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

export default WebDesign;
