import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Head from "next/head";
import Image from "next/image";
import Nav from "../../components/Nav/nav";
import InnerContent from "../../components/innerContent/innerContent";
import CTA from "../../components/CTA/cta";
import Footer from "../../components/Footer/footer";

import intro from "../img/web-design-oakville.png";
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
    "@type": "LocalBusiness",
    name: "Infused Agency",
    description:
      "Infused Agency provides expert web design services, including lead generation, development, and online marketing in Oakville, ON.",
    serviceArea: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Oakville",
        addressRegion: "ON",
        addressCountry: "Canada",
      },
    },
    url: "https://www.infused.agency",
    logo:
      "https://infused.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fniagara-web-design-infused-logo.446e8511.webp&w=256&q=75",
    sameAs: [
      "https://www.instagram.com/infusedweb", 
      "https://www.facebook.com/infused.agency",
    ],
  };

  return {
    __html: JSON.stringify(schema),
  };
};

const WebDesign = () => {
  return (
    <>
      <Head>
        <title>Oakville Web Design 🥇 Best Web Design Company in Oakville, ON | Infused Agency</title>
        <meta
          name="description"
          content="Infused Agency in Oakville excels in lead generation web design, boosting sales and leads through custom web design, development, and online marketing."
        />
        <meta
          property="og:title"
          content="Web Design Oakville | Infused Agency"
        />
        <meta
          name="twitter:title"
          content="Web Design Oakville | Infused Agency"
        />
        <link
          rel="canonical"
          href="https://infused.agency/web-design-oakville"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addJsonLd()}
          key="item-jsonld"
        />
      </Head>
      <Nav />
      <CityHero
        city="Oakville"
        alt="web design oakville"
        desc="From driving traffic to generating leads and enhancing sales, we are your trusted digital partner for achieving success."
      />
      <InnerContent>
        <section className="web-design">
          <Container>
            {/* Websites */}
            <Row>
              <Col md="6">
                <h2>
                  Oakville website design made to <span>engage</span>,{" "}
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
                  alt="web design oakville conversion"
                />
              </Col>
              <Col lg="6">
                <p>
                  At Infused Agency, our Oakville website design services are
                  crafted to engage, capture, and convert. We specialize in
                  creating stunning, user-friendly websites tailored
                  specifically for businesses in Oakville. Our expert team of
                  website designers in Oakville focuses on developing
                  high-performing sites that not only attract visitors but also
                  drive meaningful interactions and conversions. Whether you
                  need a fresh design or a strategic overhaul, our goal is to
                  enhance your online presence and help your business thrive in
                  the competitive Oakville market. Choose Infused Agency for
                  innovative web design solutions that deliver results.
                </p>
              </Col>
            </Row>
            <div className="niche-services pd-top-40">
              <Row className="text-center w-80">
                <Col lg="12">
                  <h2>
                    Our Oakville Web Design Company Will
                    <br />
                    <span>Get You Results</span>.
                  </h2>
                  <br />
                  <h3>
                    Your website will be equipped with everything needed to
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
                      Utilize pre-built web forms to attract, capture, and
                      nurture leads from different areas of your site.
                    </p>
                  </div>
                </Col>
                <Col lg="4">
                  <div className="card">
                    <Image src={img2} alt="mobile friendly" />
                    <h3>Mobile-Friendly</h3>
                    <p>
                      Our sites are designed to be fully compatible with modern
                      browsers and mobile devices, ensuring you always present
                      your best.
                    </p>
                  </div>
                </Col>
                <Col lg="4" className="d-flex">
                  <div className="card">
                    <Image src={img3} alt="increase conversions" />
                    <h3>Increase Conversions</h3>
                    <p>
                      Establish trust and spark interest in your services. We
                      help you stand out from the competition.
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
                      Easily update your website content, add new pages, upload
                      images, adjust meta-tags, and add new team members, among
                      other tasks.
                    </p>
                  </div>
                </Col>
                <Col lg="4">
                  <div className="card">
                    <Image src={img5} alt="Website Analytics" />
                    <h3>Website Analytics</h3>
                    <p>
                      Monitor monthly website traffic, page visits, leads, and
                      more. Need Google Analytics? We can install it on your
                      website as well.
                    </p>
                  </div>
                </Col>
                <Col lg="4" className="d-flex">
                  <div className="card">
                    <Image src={img6} alt="security built in" />
                    <h3>Security Built In</h3>
                    <p>
                      From day one, we implement SSL on your website, ensuring
                      the green lock icon in browsers that your clients expect.
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
                  alt="web design oakville"
                />
              </Col>
              <Col lg="6" className="order-1 order-lg-2">
                <h2>
                  <span>Lead-Generating</span> <br />
                  Oakville Web Design
                </h2>
                <p>
                  At Infused Agency, we’re committed to driving business growth
                  in Oakville with our exceptional lead-generation design
                  services. From concept to launch, our Oakville web design
                  experts craft bespoke digital experiences that deliver
                  outstanding results. Leveraging cutting-edge platforms like
                  NextJS, WordPress, React, and Shopify, we ensure your
                  Oakville-based website not only looks stunning but also
                  performs optimally. Our team combines strategic design with
                  innovative technology to create high-converting websites that
                  captivate your audience and accelerate your business success.
                  Partner with Infused Agency for top-notch lead-generation
                  design and Oakville web design solutions, and see your online
                  presence thrive.
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
                  alt="website design company in oakville"
                />
              </Col>
            </Row>

            <Row className="pd-top-120 d-flex align-items-center">
              <Col lg="6" className="d-block d-lg-none">
                <Image
                  className="img-fluid pd-btm-40"
                  src={funnel}
                  alt="oakville web designers"
                />
              </Col>
              <Col lg="6">
                <h2>
                  <span>Sales Funnels</span> <br />
                  That Convert
                </h2>
                <p>
                  Ready to transform your website visitors into loyal customers?
                  At Infused Agency, our expertly designed sales funnels are
                  crafted to achieve just that. We create powerful,
                  conversion-focused funnels that guide your prospects smoothly
                  from initial interest to decisive action. With a strategic
                  blend of engaging design, persuasive copy, and effective
                  calls-to-action, we ensure your funnels not only capture leads
                  but also drive significant, measurable results.
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
                  alt="website design oakville"
                />
              </Col>
            </Row>
            <Row className="pd-top-120 d-flex align-items-center">
              <Col lg="6">
                <Image
                  className="img-fluid pd-btm-40"
                  src={convert}
                  alt="web designers oakville"
                />
              </Col>
              <Col lg="6">
                <h2>
                  <span>Conversion-Driven</span> <br />
                  Web Design
                </h2>
                <p>
                  Ready to transform your Oakville online presence into a
                  conversion powerhouse? Our expertly crafted Conversion-Driven
                  Web Design is designed to achieve just that. At Infused
                  Agency, we create stunning Oakville web design solutions that
                  not only captivate your audience but also deliver real,
                  measurable results. With a strategic focus on user experience,
                  engaging visuals, and optimized design elements, we ensure
                  your website isn’t just eye-catching—it’s a powerful tool for
                  converting visitors into loyal customers. From intuitive
                  navigation to compelling calls-to-action, our Oakville web
                  design experts craft designs that seamlessly guide your
                  prospects from interest to action.
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
                    alt="website design discovery oakville"
                  />
                  <h2>
                    1. <span>Discover</span>
                  </h2>
                  <p>
                    At Infused Agency, we believe that achieving your ultimate
                    goal starts with discovering the right path. Our process
                    begins with understanding every intricate detail about your
                    business, enabling us to build a road to success. Our team
                    at Infused Agency follows a meticulous methodology, ensuring
                    each step is executed with precision. We delve deep into
                    your business to understand the purpose behind creating the
                    website, your expectations, ultimate goals, and target
                    audience. Additionally, we analyze your competitors, their
                    websites, and your budget plan. These detailed insights
                    allow us to craft a fantastic strategy to guarantee your
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
                    alt="website design process oakville"
                  />
                  <h2>
                    2. <span>Plan</span>
                  </h2>
                  <p>
                    We are expert planners. At Infused Agency, our professional
                    team understands that a well-executed master plan is key to
                    success. We start by deeply researching your vision for the
                    website, ensuring we fully grasp your plan and value your
                    time. Our planning phase includes sketching wireframes,
                    drafting content layouts, creating the graphical structure
                    of the website, and designing detailed flowcharts. This
                    comprehensive approach provides us with the roadmap to
                    develop the website, manage its content, and implement
                    effective hyperlinking.
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
                    alt="website design agency oakville"
                  />
                  <h2>
                    3. <span>Design</span>
                  </h2>
                  <p>
                    We are innovative and adaptable. Our exceptional team of web
                    designers at Infused Agency has been internationally
                    recognized for their excellence and follows high-quality
                    steps to complete every project. After thoroughly
                    investigating current trends and conducting brainstorming
                    sessions with your team, we select the most captivating
                    color combinations, typography, videos, animations, images,
                    and content layout. We guarantee an outstanding UX design
                    that is easy to navigate, user-centered, and developed to
                    the highest standards.
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
                    alt="website development oakville"
                  />
                  <h2>
                    4. <span>Develop</span>
                  </h2>
                  <p>
                    We are both planners and designers. Our renowned team at
                    Infused Agency, with extensive experience in developing
                    top-tier websites, creates flawless dream projects for our
                    clients. They go above and beyond, utilizing their skills
                    efficiently. By leveraging cutting-edge technology and
                    innovative techniques, we ensure our tasks are completed
                    properly. Once the design phase is finished, our highly
                    skilled content writers fill the web pages with fresh
                    content and refine existing material. Adding new videos,
                    slideshows, and other media elements makes the website
                    captivating. We then develop a prototype, testing it across
                    major web browsers and getting your approval before the
                    official launch.
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
                    alt="website development launch oakville"
                  />
                  <h2>
                    5. <span>Launch</span>
                  </h2>
                  <p>
                    Your approval of the prototype is crucial to us. Once
                    approved, the website is ready for search engine
                    optimization. Our content development team ensures that all
                    content is unique and meticulously checked for grammar,
                    spelling, and punctuation errors. We also manage Google
                    Analytics and search engine rankings from day one. Our
                    top-notch experts thoroughly test the functionality of the
                    website. The Infused Agency team guarantees exceptional
                    websites that pave a direct path to your company's growth.
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
                    alt="website design promotion oakville"
                  />
                  <h2>
                    6. <span>Promote</span>
                  </h2>
                  <p>
                    Our industry-leading digital marketing experts ensure your
                    website is marketed effectively online. At Infused Agency,
                    our services extend beyond the launch of your website. Our
                    world-class team includes experts in SEO and digital
                    marketing, all with extensive experience. We have a
                    dedicated investigative team that thoroughly examines your
                    needs and implements top-tier digital strategies to help
                    your business thrive in today’s competitive market. We
                    firmly believe that your company’s success is our success
                    too.
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
                      alt="web designers oakville"
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
                      alt="website design oakville"
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
                  Our Oakville website designs are <span>fast</span>,{" "}
                  <span>optimized</span> and <span>drive leads</span>.
                </h2>
              </Col>
              <Col md="6">&nbsp;</Col>
            </Row>
            <Row className="pd-top-40">
              <Col lg="4" className="d-flex">
                <div className="card">
                  <Image src={fast} alt="fast website design oakville" />
                  <h3>Lightning-Fast Speed</h3>
                  <p>
                    Experience unmatched website speed with Infused Agency’s web
                    design services in Oakville. Our websites are engineered to
                    load almost instantly, ensuring a seamless user experience
                    and increased engagement.
                  </p>
                </div>
              </Col>
              <Col lg="4" className="d-flex">
                <div className="card">
                  <Image src={build} alt="web designers in oakville" />
                  <h3>Mobile Performance</h3>
                  <p>
                    Enjoy a website that excels on every device with Infused
                    Agency’s Oakville web development. We ensure your site is
                    flawlessly optimized for mobile, providing a smooth and
                    engaging experience that turns visitors into loyal
                    customers.
                  </p>
                </div>
              </Col>
              <Col lg="4">
                <div className="card">
                  <Image src={grow} alt="web design company in oakville" />
                  <h3>Rank On Google</h3>
                  <p>
                    Maximize your website’s potential with Infused Agency’s
                    top-notch SEO strategies. Our Oakville SEO services are
                    crafted to elevate your site’s position in Google rankings.
                    Attract more visitors and boost targeted traffic with a site
                    optimized for success in Oakville web design.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="pd-top-40">
              <Col md="6">
                <h2>
                  How to <span>increase conversions</span> through Oakville
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
                    alt="website design speed oakville"
                  />
                  <h2>
                    1. <span>Improve Website Speed</span>
                  </h2>
                  <p>
                    Website speed is a critical factor influencing user
                    experience and conversion rates. A slow-loading website can
                    frustrate visitors, leading to higher bounce rates and fewer
                    conversions. To enhance your website’s speed, start by
                    optimizing images, which are often the largest files on a
                    page. Use image compression tools to reduce file sizes
                    without compromising quality. Additionally, minimize HTTP
                    requests by reducing the number of elements on your page,
                    such as scripts and stylesheets. Implement browser caching
                    to store static resources, so they don’t have to be reloaded
                    with each visit. Tools like Google PageSpeed Insights can
                    provide valuable recommendations for improving page speed,
                    helping you create a smoother, faster experience for your
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
                    alt="website design user experience oakville"
                  />
                  <h2>
                    2. <span>Enhance User Experience (UX)</span>
                  </h2>
                  <p>
                    A well-designed user experience is crucial for converting
                    visitors into customers. Start by ensuring that your website
                    is mobile-friendly, as an increasing number of users browse
                    and shop on their smartphones. Simplify your website’s
                    navigation to make it easy for users to find information
                    quickly and intuitively. Clear, prominent call-to-action
                    (CTA) buttons are essential for guiding users toward desired
                    actions, such as making a purchase or signing up for a
                    newsletter. Use contrasting colors and compelling language
                    to make CTAs stand out. Additionally, focus on creating a
                    clean, visually appealing design that aligns with your brand
                    and meets the needs of your target audience. By prioritizing
                    user experience, you can create a more engaging and
                    effective website that encourages conversions.
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
                    alt="website design optimize landing page oakville"
                  />
                  <h2>
                    3. <span>Optimize Landing Pages</span>
                  </h2>
                  <p>
                    Landing pages play a vital role in converting visitors into
                    leads or customers. To optimize these pages, ensure that the
                    content is highly relevant to the traffic source, whether
                    it’s an ad, email, or social media post. The messaging and
                    offers should align with what users expect to find when they
                    arrive on the landing page. Minimize distractions by
                    removing unnecessary elements that might divert attention
                    from the primary goal, such as signing up for a service or
                    making a purchase. Use compelling headlines, persuasive
                    copy, and strong CTAs to drive action. Additionally,
                    consider adding trust signals, such as customer testimonials
                    or security badges, to reassure visitors and build
                    credibility. An optimized landing page can significantly
                    boost conversion rates by providing a focused and persuasive
                    user experience.
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
                    alt="website design a/b testing oakville"
                  />
                  <h2>
                    4. <span>Implement A/B Testing</span>
                  </h2>
                  <p>
                    A/B testing, or split testing, is a powerful method for
                    optimizing website elements to improve conversion rates.
                    This process involves creating two or more variations of a
                    webpage and comparing their performance to determine which
                    version produces the best results. You can test various
                    elements, such as headlines, images, CTAs, or overall
                    design, to see which changes resonate most with your
                    audience. By analyzing user behavior and engagement metrics,
                    you can identify which version of a page is more effective
                    in achieving your conversion goals. Tools like Google
                    Optimize or Optimizely can help you set up and manage A/B
                    tests, providing insights that enable you to make
                    data-driven decisions. Continuous A/B testing ensures that
                    your website evolves based on real user feedback, leading to
                    higher conversion rates over time.
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
                    alt="website design social proof oakville"
                  />
                  <h2>
                    5. <span>Leverage Social Proof</span>
                  </h2>
                  <p>
                    Social proof is a psychological phenomenon where people rely
                    on the actions and opinions of others to make decisions. By
                    incorporating social proof elements into your website, you
                    can build trust and credibility, which are crucial for
                    increasing conversions. Display customer testimonials
                    prominently on your site, showcasing positive experiences
                    and feedback from previous clients. Including case studies
                    with detailed success stories can further demonstrate the
                    value of your products or services. Reviews and ratings also
                    play a significant role in influencing potential customers,
                    as they provide evidence of your business’s reputation and
                    reliability. Additionally, highlight any awards or
                    certifications your company has received to reinforce your
                    credibility. By leveraging social proof, you can create a
                    more persuasive and trustworthy website that encourages
                    visitors to take action.
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              <Col lg="12">
                <div className="card">
                  <img
                    alt="oakville web design client"
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
