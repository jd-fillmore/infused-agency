import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Head from "next/head";
import Image from "next/image";
import Nav from "../../components/Nav/nav";
import InnerContent from "../../components/innerContent/innerContent";
import CTA from "../../components/CTA/cta";
import Footer from "../../components/Footer/footer";

import intro from "../img/ottawa-web-design.webp";
import ui from "../img/ui-design.png";
import build from "../img/build.png";
import grow from "../img/grow.png";
import growth from "../img/lead-gen-website-design.webp";
import funnel from "../img/lead-gen-convert.jpg";
import convert from "../img/conversion-web.jpg";
import fast from "../img/design-fast.png";
import img1 from "../img/lead-capture.png";
import img2 from "../img/mb-friend.png";
import img3 from "../img/inc.png";
import img4 from "../img/easy.png";
import img5 from "../img/anal.png";
import img6 from "../img/sec.png";
import tree from "../img/feat-web-design.png";
import design from "../img/1-design.webp";
import discover from "../img/1-discover.webp";
import realdesign from "../img/3-design.webp";
import dev from "../img/4-develop.webp";
import launch from "../img/5-launch.webp";
import promote from "../img/5-promote.webp";
import CityHero from "../../components/Home/Hero/cities-hero";
import treeImg from "../img/tree-reports.png";
import kdImg from "../img/kd-flowers.webp";
import cassImg from "../img/featured-seo.png";
import speed from "../img/website-speed.webp";
import ux from "../img/ux.webp";
import opt from "../img/landing-page.webp";
import testing from "../img/testing.webp";
import social from "../img/social.webp";

const addJsonLd = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ServiceAreaBusiness",
    name: "Infused Agency",
    description:
      "Infused Agency provides expert web design services, including lead generation, development, and online marketing in Ottawa, Canada.",
    serviceArea: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ottawa",
        addressCountry: "Canada",
      },
    },
    url: "https://www.infused.agency",
    logo:
      "https://infused.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fniagara-web-design-infused-logo.446e8511.webp&w=256&q=75",
  };

  return {
    __html: JSON.stringify(schema),
  };
};

const WebDesign = () => {
  return (
    <>
      <Head>
        <title>Ottawa Web Design | Infused Agency</title>
        <meta
          name="description"
          content="Top Ottawa web design by Infused Agency. Expert website design services to enhance your online presence. Get a free quote today!"
        />
        <meta
          property="og:title"
          content="Web Design Ottawa | Infused Agency"
        />
        <meta
          name="twitter:title"
          content="Web Design Ottawa | Infused Agency"
        />
        <link
          rel="canonical"
          href="https://infused.agency/ottawa-web-design"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addJsonLd()}
          key="item-jsonld"
        />
      </Head>
      <Nav />
      <CityHero
        city="Ottawa"
        alt="web design Ottawa"
        desc="From attracting visitors to converting leads and boosting sales, we are your go-to digital partner for achieving outstanding success."
      />
      <InnerContent>
        <section className="web-design">
          <Container>
            {/* Websites */}
            <Row>
              <Col md="6">
                <h2>
                  Ottawa website design crafted to <span>engage</span>,{" "}
                  <span>capture</span> and <span>convert</span>.
                </h2>
              </Col>
              <Col md="6">&nbsp;</Col>
            </Row>
            <Row className="pd-top-80 pd-btm-80">
              <Col lg="6">
                <Image
                  className="img-fluid"
                  src={intro}
                  alt="web design Ottawa conversion"
                />
              </Col>
              <Col lg="6">
                <p>
                  At Infused Agency, our Ottawa web design services are
                  designed to <span>engage</span>, <span>capture</span>, and{" "}
                  <span>convert</span>. We excel in crafting visually stunning,
                  user-friendly websites that are specifically tailored for
                  Ottawa-based businesses. Our team of expert web designers is
                  dedicated to creating high-performing sites that not only
                  attract visitors but also foster meaningful interactions and
                  drive conversions. Whether you’re seeking a brand-new web design
                  or a strategic update, our goal is to elevate your online
                  presence and help your business thrive in the competitive
                  Ottawa market. Choose Infused Agency for cutting-edge web
                  design solutions that truly deliver results
                </p>
              </Col>
            </Row>
            <div className="niche-services pd-top-40">
              <Row className="text-center w-80">
                <Col lg="12">
                  <h2>
                    Our Ottawa Web Design Company Will
                    <br />
                    <span>Get You Results</span>.
                  </h2>
                  <br />
                  <h3>
                    Your web design will be equipped with everything needed to
                    attract attention and generate more leads.
                  </h3>
                </Col>
              </Row>
              <Row className="pd-top-40">
                <Col lg="4" className="d-flex">
                  <div className="card">
                    <Image src={img1} alt="lead capture" />
                    <h3>Lead Capture</h3>
                    <p>
                      Leverage pre-built web forms to attract, capture, and
                      nurture leads from different sections of your site.
                    </p>
                  </div>
                </Col>
                <Col lg="4">
                  <div className="card">
                    <Image src={img2} alt="mobile friendly" />
                    <h3>Mobile-Friendly</h3>
                    <p>
                      Our web designs are built to be fully compatible with the latest
                      browsers and mobile devices, ensuring you always present a
                      polished and professional appearance.
                    </p>
                  </div>
                </Col>
                <Col lg="4" className="d-flex">
                  <div className="card">
                    <Image src={img3} alt="increase conversions" />
                    <h3>Increase Conversions</h3>
                    <p>
                      Foster trust and create interest in your services. We
                      assist in setting you apart from the competition.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg="4">
                  <div className="card">
                    <Image src={img4} alt="Easily Update Content" />
                    <h3>Easily Update Content</h3>
                    <p>
                      Effortlessly update your web design's content, add new pages,
                      upload images, adjust meta-tags, and incorporate new team
                      members, among other tasks
                    </p>
                  </div>
                </Col>
                <Col lg="4" className="d-flex">
                  <div className="card">
                    <Image src={img5} alt="Website Analytics" />
                    <h3>Website Analytics</h3>
                    <p>
                      Track monthly website traffic, page visits, leads, and
                      more. Need Google Analytics? We can install that on your
                      web design too.
                    </p>
                  </div>
                </Col>
                <Col lg="4" className="d-flex">
                  <div className="card">
                    <Image src={img6} alt="security built in" />
                    <h3>Security Built In</h3>
                    <p>
                      We set up SSL for your site from day one, ensuring the
                      green lock icon in browsers that your clients expect.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="niche-featured pd-top-80">
              <Container>
                <Row>
                  <Col lg="6">
                    <h2 className="pd-btm-40">
                      Featured Website Design <span>Case Study</span>
                    </h2>
                    <div className="card">
                      <img
                        width="48"
                        height="48"
                        src="https://lh3.googleusercontent.com/a/ACg8ocIKt9X9LSKomYMvAkQn_0673Xwg0EBOP-QigGk1AaAVHdVIvA=w48-h48-p-rp-mo-ba3-br100"
                      />
                      <p className="author">KD Flowers</p>
                      <div className="d-flex">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
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
                            fillRule="evenodd"
                            clipRule="evenodd"
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
                            fillRule="evenodd"
                            clipRule="evenodd"
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
                            fillRule="evenodd"
                            clipRule="evenodd"
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
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z"
                            fill="#FFD700"
                          />
                        </svg>
                      </div>
                      <p className="desc">
                        Infused Agency has helped my business immensely! Their
                        eye for design met mine through and through and their
                        SEO skills have increased my clientele so much that I
                        was able to quit my other part time job. I am very
                        thankful for all the work Infused Agency has done for me
                        and I would recommend them to anyone looking to elevate
                        their business!
                      </p>
                    </div>
                  </Col>
                  <Col lg="6">
                    <Image
                      className="img-fluid"
                      src={tree}
                      alt="Featured Arborist & Tree Removal Service Website Design Case Study"
                    />{" "}
                  </Col>
                </Row>
                <Row>
                  <Col lg="4">
                    <div className="card">
                      <h3>385%</h3>
                      <p>increase in being found online</p>
                    </div>
                  </Col>
                  <Col lg="4">
                    <div className="card">
                      <h3>4,000%</h3>
                      <p>increase in new website visits</p>
                    </div>
                  </Col>
                  <Col lg="4">
                    <div className="card">
                      <h3>1,500%</h3>
                      <p>increase in Google rankings</p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <Row className="pd-top-120 d-flex align-items-center">
              <Col lg="6" className="d-none d-sm-block">
                <Image
                  className="img-fluid"
                  src={growth}
                  alt="web design Ottawa"
                />
              </Col>
              <Col lg="6" className="order-1 order-lg-2">
                <h2>
                  <span>Lead-Generating</span> <br />
                  Ottawa Web Design
                </h2>
                <p>
                  At Infused Agency, we're dedicated to fueling business growth
                  in Ottawa through our outstanding lead-generation web design
                  services. From initial concept to final launch, our Ottawa
                  web design experts create custom digital experiences that
                  yield remarkable results. Utilizing advanced web design platforms such as
                  NextJS, WordPress, React, and Shopify, we ensure your
                  Ottawa-based website is not only visually appealing but also
                  highly functional. Our team blends strategic web design with
                  cutting-edge technology to develop high-converting websites
                  that engage your audience and drive your business forward.
                  Choose Infused Agency for superior lead-generation web design and
                  Ottawa web design solutions, and watch your online presence
                  flourish.
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
                  alt="website design company in Ottawa"
                />
              </Col>
            </Row>

            <Row className="pd-top-120 d-flex align-items-center">
              <Col lg="6" className="d-block d-lg-none">
                <Image
                  className="img-fluid pd-btm-40"
                  src={funnel}
                  alt="Ottawa web designers"
                />
              </Col>
              <Col lg="6">
                <h2>
                  <span>Sales Funnels</span> <br />
                  That Convert
                </h2>
                <p>
                  Ready to convert your website design
                  visitors into loyal customers? At Infused Agency, we
                  specialize in designing web design sales funnels that achieve this goal.
                  Our expertly crafted funnels guide your prospects seamlessly
                  from initial interest to decisive action. By combining
                  engaging website design, persuasive copy, and effective
                  calls-to-action, we create funnels that not only capture leads
                  but also deliver significant, measurable results.
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
                  alt="website design Ottawa"
                />
              </Col>
            </Row>
            <Row className="pd-top-120 d-flex align-items-center">
              <Col lg="6">
                <Image
                  className="img-fluid pd-btm-40"
                  src={convert}
                  alt="web designers Ottawa"
                />
              </Col>
              <Col lg="6">
                <h2>
                  <span>Conversion-Driven</span> <br />
                  Web Design
                </h2>
                <p>
                  Ready to transform your Ottawa web design into a
                  conversion powerhouse? Our Conversion-Driven Web Design is
                  expertly crafted to do just that. At Infused Agency, we
                  develop stunning Ottawa web design solutions that not only
                  captivate your audience but also deliver real, measurable
                  results. By strategically focusing on user experience,
                  engaging visuals, and optimized design elements, we ensure
                  your website design becomes a powerful tool for converting visitors
                  into loyal customers. From intuitive navigation to compelling
                  calls-to-action, our Ottawa web design experts create
                  designs that smoothly guide your prospects from interest to
                  action.
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
                  Our <span>Creative</span> &amp; <span>Reliable</span> Web
                  Design Process.
                </h2>
                <h3>
                  Our web design process is designed to be smooth, fast and
                  reliable.
                </h3>
              </Col>
              <Col md="6">&nbsp;</Col>
            </Row>
            <Row className="pd-top-40">
              <Col lg="12">
                <div className="card">
                  <Image
                    className="img-fluid"
                    src={discover}
                    alt="website design discovery Ottawa"
                  />
                  <h2>
                    1. <span>Discover</span>
                  </h2>
                  <p>
                    At Infused Agency, we believe that achieving your ultimate
                    goal starts with finding the right path. Our process begins
                    by thoroughly understanding every intricate detail about
                    your business, allowing us to pave the way to success. Our
                    team at Infused Agency follows a meticulous methodology,
                    ensuring each step is executed with precision. We dive deep
                    into your business to comprehend the purpose behind your
                    web design, your expectations, ultimate goals, and target
                    audience. Additionally, we analyze your competitors, their
                    websites, and your budget plan. These detailed insights
                    enable us to craft a robust strategy that ensures your
                    business's success.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="pd-top-20">
              <Col lg="12">
                <div className="card">
                  <Image
                    className="img-fluid"
                    src={design}
                    alt="website design process Ottawa"
                  />
                  <h2>
                    2. <span>Plan</span>
                  </h2>
                  <p>
                    We excel at planning. At Infused Agency, our professional
                    team knows that a well-executed master plan is essential for
                    success. We begin by thoroughly researching your vision for
                    the web design, ensuring we fully understand your plan and
                    respect your time. During the planning phase, we create
                    wireframe sketches, draft content layouts, design the
                    website's graphical structure, and develop detailed
                    flowcharts. This comprehensive approach gives us a clear
                    roadmap to build the website, manage its content, and
                    implement effective hyperlinking.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="pd-top-20">
              <Col lg="12">
                <div className="card">
                  <Image
                    className="img-fluid"
                    src={realdesign}
                    alt="website design agency Ottawa"
                  />
                  <h2>
                    3. <span>Design</span>
                  </h2>
                  <p>
                    We are innovative and adaptable. Our exceptional team of web
                    designers at Infused Agency has been internationally
                    recognized for their excellence and adheres to high-quality
                    standards in every project. After thoroughly investigating
                    current trends and conducting brainstorming sessions with
                    your team, we select the most captivating color
                    combinations, typography, videos, animations, images, and
                    content layouts. We guarantee an outstanding UX design that
                    is user-centered, easy to navigate, and developed to the
                    highest standards.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="pd-top-20">
              <Col lg="12">
                <div className="card">
                  <Image
                    className="img-fluid"
                    src={dev}
                    alt="website development Ottawa"
                  />
                  <h2>
                    4. <span>Develop</span>
                  </h2>
                  <p>
                    We excel in both planning and web design. Our renowned team at
                    Infused Agency, with extensive experience in developing
                    top-tier websites, creates flawless projects for our
                    clients. They go above and beyond, utilizing their skills
                    efficiently. By leveraging cutting-edge technology and
                    innovative techniques, we ensure our tasks are completed
                    with precision. Once the design phase is finished, our
                    highly skilled content writers populate the web design pages with
                    fresh content and refine existing material. Adding new
                    videos, slideshows, and other media elements makes the
                    website captivating. We then develop a prototype, testing it
                    across major web browsers and obtaining your approval before
                    the official launch.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="pd-top-20">
              <Col lg="12">
                <div className="card">
                  <Image
                    className="img-fluid"
                    src={launch}
                    alt="website development launch Ottawa"
                  />
                  <h2>
                    5. <span>Launch</span>
                  </h2>
                  <p>
                    Your approval of the prototype is essential to us. Once we
                    have your go-ahead, we move forward with search engine
                    optimization. Our content development team ensures that all
                    content is unique and meticulously proofread for grammar,
                    spelling, and punctuation errors. We also handle Google
                    Analytics and search engine rankings from the outset. Our
                    experts rigorously test the website’s functionality. The
                    Infused Agency team guarantees exceptional web designs that
                    create a direct path to your company’s growth.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="pd-top-20">
              <Col lg="12">
                <div className="card">
                  <Image
                    className="img-fluid"
                    src={promote}
                    alt="website design promotion Ottawa"
                  />
                  <h2>
                    6. <span>Promote</span>
                  </h2>
                  <p>
                    Our top-tier web design experts ensure your website
                    is effectively promoted online. At Infused Agency, our
                    services go beyond just launching your website. Our
                    world-class team includes seasoned specialists in SEO and
                    digital marketing. We have a dedicated team that thoroughly
                    assesses your needs and implements premium digital
                    strategies to help your business excel in today's
                    competitive landscape. We believe that your success is our
                    success as well.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>

          <section className="home-client-results">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2>
                    Our Local Clients <span>Get Results</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card">
                    <Image
                      className="img-fluid"
                      src={treeImg}
                      alt="website design st catharines"
                    />
                    <h3>TreeReports</h3>
                    <p className="testimonial">
                      "Fantastic experience from start to end."
                    </p>
                    <div className="highlight">
                      <h3>385%</h3>
                      <p>increase in being found online</p>
                    </div>
                    <Link href="/tree-reports">
                      <button>
                        Case Study
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
                </div>

                <div className="col-lg-4">
                  <div className="card">
                    <Image
                      className="img-fluid"
                      src={kdImg}
                      alt="web designers ottawa"
                    />
                    <h3>KD Flowers</h3>
                    <p className="testimonial">
                      "My business has grown so much!"
                    </p>
                    <div className="highlight">
                      <h3>5,800</h3>
                      <p>new people discovering website per month</p>
                    </div>
                    <Link href="/kd-florist">
                      <button>
                        Case Study
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
                </div>
                <div className="col-lg-4 d-flex">
                  <div className="card">
                    <Image
                      className="img-fluid"
                      src={cassImg}
                      alt="website design ottawa"
                    />
                    <h3>Cass-A-Bella Construction</h3>
                    <p className="testimonial">"Great job, WELL DONE!"</p>
                    <div className="highlight">
                      <h3>13,000%</h3>
                      <p>increase in new leads in first 6 months</p>
                    </div>
                    <Link href="/cass-a-bella-construction">
                      <button>
                        Case Study
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
                </div>
              </div>
            </div>
          </section>

          <Container>
            <Row className="pd-top-80 text-center">
              <Col lg="12">
                <h2>Want to work with us?</h2>
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
                  Our Ottawa website designs are <span>fast</span>,{" "}
                  <span>optimized</span> and <span>drive leads</span>.
                </h2>
              </Col>
              <Col md="6">&nbsp;</Col>
            </Row>
            <Row className="pd-top-40">
              <Col lg="4" className="d-flex">
                <div className="card">
                  <Image src={fast} alt="fast website design Ottawa" />
                  <h3>Lightning-Fast Speed</h3>
                  <p>
                    Enjoy unparalleled website speed with Infused Agency’s web
                    design services in Ottawa. Our websites are crafted to
                    load almost instantly, providing a smooth user experience
                    and boosting engagement.
                  </p>
                </div>
              </Col>
              <Col lg="4" className="d-flex">
                <div className="card">
                  <Image src={build} alt="web designers in Ottawa" />
                  <h3>Mobile Performance</h3>
                  <p>
                    Experience a website that performs exceptionally across all
                    devices with Infused Agency’s Ottawa web development. We
                    ensure your site is perfectly optimized for mobile,
                    delivering a seamless and engaging experience that converts
                    visitors into loyal customers.
                  </p>
                </div>
              </Col>
              <Col lg="4">
                <div className="card">
                  <Image src={grow} alt="web design company in Ottawa" />
                  <h3>Rank On Google</h3>
                  <p>
                    Unlock your website's full potential with Infused Agency’s
                    premier SEO strategies. Our Ottawa SEO services are
                    designed to boost your site’s position in Google rankings.
                    Draw in more visitors and increase targeted traffic with a
                    site optimized for success in Ottawa web design.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="pd-top-40">
              <Col md="6">
                <h2>
                  How to <span>increase conversions</span> through Ottawa
                  website design.
                </h2>
              </Col>
              <Col md="6">&nbsp;</Col>
            </Row>

            <Row className="pd-top-40">
              <Col lg="12">
                <div className="card">
                  <Image
                    className="img-fluid"
                    src={speed}
                    alt="website design speed Ottawa"
                  />
                  <h2>
                    1. <span>Improve Website Speed</span>
                  </h2>
                  <p>
                    Website speed significantly impacts user experience and
                    conversion rates. A slow-loading site can frustrate
                    visitors, leading to higher bounce rates and fewer
                    conversions. To boost your website’s speed, start by
                    optimizing images, which are often the largest files on a
                    page. Use image compression tools to reduce file sizes
                    without sacrificing quality. Also, cut down on HTTP requests
                    by minimizing the number of elements on your page, such as
                    scripts and stylesheets. Implement browser caching to store
                    static resources, so they don’t need to be reloaded with
                    every visit. Utilize tools like Google PageSpeed Insights to
                    gain valuable insights and recommendations for enhancing
                    page speed, ensuring a smoother, faster experience for your
                    users.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="pd-top-20">
              <Col lg="12">
                <div className="card">
                  <Image
                    className="img-fluid"
                    src={ux}
                    alt="website design user experience Ottawa"
                  />
                  <h2>
                    2. <span>Enhance User Experience (UX)</span>
                  </h2>
                  <p>
                    A well-crafted user experience is key to converting visitors
                    into customers. Start by ensuring your website is
                    mobile-friendly, as more users browse and shop on
                    smartphones. Simplify your site’s navigation to help users
                    find information quickly and intuitively. Use clear,
                    prominent call-to-action (CTA) buttons to direct users
                    toward actions like making a purchase or subscribing to a
                    newsletter. Employ contrasting colors and compelling text to
                    make CTAs stand out. Additionally, focus on a clean,
                    visually appealing design that reflects your brand and
                    caters to your target audience. By prioritizing user
                    experience, you’ll create a more engaging and effective
                    website that drives conversions.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="pd-top-20">
              <Col lg="12">
                <div className="card">
                  <Image
                    className="img-fluid"
                    src={opt}
                    alt="website design optimize landing page Ottawa"
                  />
                  <h2>
                    3. <span>Optimize Landing Pages</span>
                  </h2>
                  <p>
                    Landing pages are crucial for converting visitors into leads
                    or customers. To optimize these pages, ensure the content is
                    highly relevant to the traffic source, whether it's an ad,
                    email, or social media post. The messaging and offers should
                    match users' expectations when they arrive. Reduce
                    distractions by eliminating unnecessary elements that could
                    divert attention from the main objective, such as signing up
                    for a service or making a purchase. Employ compelling
                    headlines, persuasive copy, and strong CTAs to encourage
                    action. Also, incorporate trust signals, like customer
                    testimonials or security badges, to build credibility and
                    reassure visitors. An optimized landing page can greatly
                    enhance conversion rates by delivering a focused and
                    convincing user experience.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="pd-top-20">
              <Col lg="12">
                <div className="card">
                  <Image
                    className="img-fluid"
                    src={testing}
                    alt="website design a/b testing Ottawa"
                  />
                  <h2>
                    4. <span>Implement A/B Testing</span>
                  </h2>
                  <p>
                    A/B testing, also known as split testing, is a powerful
                    technique for enhancing website elements to boost conversion
                    rates. This method involves creating two or more versions of
                    a webpage and comparing their performance to determine which
                    one delivers the best results. You can test various
                    elements, such as headlines, images, CTAs, or overall
                    design, to see what resonates most with your audience. By
                    analyzing user behavior and engagement metrics, you can
                    pinpoint which version of a page is more effective in
                    meeting your conversion goals. Tools like Google Optimize or
                    Optimizely assist in setting up and managing A/B tests,
                    offering insights that drive data-informed decisions.
                    Ongoing A/B testing allows your website to adapt based on
                    real user feedback, leading to improved conversion rates
                    over time.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="pd-top-20">
              <Col lg="12">
                <div className="card">
                  <Image
                    className="img-fluid"
                    src={social}
                    alt="website design social proof Ottawa"
                  />
                  <h2>
                    5. <span>Leverage Social Proof</span>
                  </h2>
                  <p>
                    Social proof is a psychological concept where individuals
                    look to others’ actions and opinions to guide their own
                    decisions. By integrating social proof elements into your
                    website, you can build trust and credibility, which are
                    essential for boosting conversions. Feature customer
                    testimonials prominently, showcasing positive feedback and
                    experiences from past clients. Adding case studies with
                    detailed success stories can further illustrate the value of
                    your products or services. Reviews and ratings significantly
                    influence potential customers by providing evidence of your
                    business’s reputation and reliability. Additionally,
                    highlight any awards or certifications your company has
                    received to strengthen your credibility. Leveraging social
                    proof helps create a more persuasive and trustworthy website
                    that motivates visitors to take action.
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              <Col lg="12">
                <div className="card">
                  <img
                    alt="Ottawa web design client"
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
                    Working with Infused Agency was a pleasure. They were
                    extremely responsive and informative from start to finish.
                    Infused Agency is creative, efficient, and very
                    knowledgeable in their field. They helped me and my team
                    create a new website for my business. The design and
                    development process was smooth and easy. I would absolutely
                    recommend Infused Agency to anyone looking for a new or
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
