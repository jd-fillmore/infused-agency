import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Head from "next/head";
import Image from "next/image";
import Nav from "../../components/Nav/nav";
import InnerContent from "../../components/innerContent/innerContent";
import CTA from "../../components/CTA/cta";
import Footer from "../../components/Footer/footer";

import intro from "../img/web-design-hamilton.png";
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
      "Infused Agency provides expert web design services, including lead generation, development, and online marketing in Hamilton, ON.",
    serviceArea: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hamilton",
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
        <title>Hamilton Web Design | Powerful Sites for Local Businesses</title>
        <meta
          name="description"
          content="Top Hamilton web design by Infused Agency. Expert website design services to enhance your online presence. Get a free quote today!"
        />
        <meta
          property="og:title"
          content="Web Design Hamilton | Infused Agency"
        />
        <meta
          name="twitter:title"
          content="Web Design Hamilton | Infused Agency"
        />
        <link
          rel="canonical"
          href="https://infused.agency/web-design-hamilton"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addJsonLd()}
          key="item-jsonld"
        />
      </Head>
      <Nav />
      <CityHero
        city="Hamilton"
        alt="web design hamilton"
        desc="From drawing in visitors to converting leads and increasing sales, we are your trusted digital partner for achieving remarkable success."
      />
      <InnerContent>
        <section className="web-design">
          <Container>
            {/* Websites */}
            <Row>
              <Col md="6">
                <h2>
                  Hamilton website design crafted to <span>engage</span>,{" "}
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
                  alt="web design hamilton conversion"
                />
              </Col>
              <Col lg="6">
                <p>
                  At Infused Agency, our web design services in Hamilton are
                  crafted to engage users, capture interest, and drive
                  conversions. We specialize in creating visually appealing and
                  user-friendly websites tailored specifically for businesses in
                  Hamilton. Our team of skilled designers is committed to
                  developing high-performing websites that not only attract
                  visitors but also encourage meaningful interactions and
                  facilitate conversions. Whether you need a completely new
                  design or a strategic refresh, our mission is to enhance your
                  online presence and support your business's success in
                  Hamilton's competitive landscape. Choose Infused Agency for
                  innovative web design solutions that deliver tangible results.
                </p>
              </Col>
            </Row>
            <div className="niche-services pd-top-40">
              <Row className="text-center w-80">
                <Col lg="12">
                  <h2>
                    Our Hamilton web design agency is dedicated to delivering{" "}
                    <span>tangible results</span> for your business.
                  </h2>
                  <br />
                  <h3>
                    Your website will be fully equipped to capture attention and
                    drive increased lead generation.
                  </h3>
                </Col>
              </Row>
              <Row className="pd-top-40">
                <Col lg="4" className="d-flex">
                  <div className="card">
                    <Image src={img1} alt="lead capture" />
                    <h3>Lead Capture</h3>
                    <p>
                      Utilize pre-designed web forms to engage, capture, and
                      nurture leads from various areas of your website.
                    </p>
                  </div>
                </Col>
                <Col lg="4">
                  <div className="card">
                    <Image src={img2} alt="mobile friendly" />
                    <h3>Mobile-Friendly</h3>
                    <p>
                      Our websites are designed to be fully compatible with the
                      latest browsers and mobile devices, guaranteeing that you
                      consistently showcase a polished and professional look.
                    </p>
                  </div>
                </Col>
                <Col lg="4" className="d-flex">
                  <div className="card">
                    <Image src={img3} alt="increase conversions" />
                    <h3>Increase Conversions</h3>
                    <p>
                      Build trust and generate interest in your services. We
                      help you differentiate yourself from the competition.
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
                      images, modify meta tags, and integrate new team members,
                      along with various other tasks.
                    </p>
                  </div>
                </Col>
                <Col lg="4" className="d-flex">
                  <div className="card">
                    <Image src={img5} alt="Website Analytics" />
                    <h3>Website Analytics</h3>
                    <p>
                      Monitor your website's monthly traffic, page visits,
                      leads, and more. Need Google Analytics? We can also set
                      that up on your site.
                    </p>
                  </div>
                </Col>
                <Col lg="4" className="d-flex">
                  <div className="card">
                    <Image src={img6} alt="security built in" />
                    <h3>Security Built In</h3>
                    <p>
                      We implement SSL for your site from the very beginning,
                      providing the green lock icon in browsers that your
                      clients anticipate.
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
                  alt="web design hamilton"
                />
              </Col>
              <Col lg="6" className="order-1 order-lg-2">
                <h2>
                  <span>Lead-Generating</span> <br />
                  Hamilton Web Design
                </h2>
                <p>
                  At Infused Agency, we are committed to driving business growth
                  in Hamilton with our top-tier lead-generation web design
                  services. Our Hamilton web design specialists craft bespoke
                  digital experiences, guiding your project from concept to
                  launch with precision. Leveraging advanced tools like NextJS,
                  WordPress, React, and Shopify, we ensure your Hamilton website
                  is both aesthetically striking and exceptionally functional.
                  Our team seamlessly combines strategic design with innovative
                  technology to create high-converting websites that captivate
                  your audience and propel your business forward. Trust Infused
                  Agency for unparalleled lead-generation design and Hamilton
                  web design services, and elevate your online presence to new
                  heights.
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
                  alt="website design company in hamilton"
                />
              </Col>
            </Row>

            <Row className="pd-top-120 d-flex align-items-center">
              <Col lg="6" className="d-block d-lg-none">
                <Image
                  className="img-fluid pd-btm-40"
                  src={funnel}
                  alt="hamilton web designers"
                />
              </Col>
              <Col lg="6">
                <h2>
                  <span>Sales Funnels</span> <br />
                  That Convert
                </h2>
                <p>
                  Looking to transform your Hamilton web design visitors into
                  loyal customers? At Infused Agency, we specialize in crafting
                  sales funnels that accomplish just that. Our Hamilton web
                  design experts create finely-tuned funnels that guide your
                  prospects seamlessly from initial interest to decisive action.
                  By integrating engaging design, persuasive copy, and powerful
                  calls-to-action, we develop funnels that not only capture
                  leads but also deliver significant, measurable results. Choose
                  Infused Agency for Hamilton web design solutions that turn
                  visitors into customers and drive your business growth.
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
                  alt="website design hamilton"
                />
              </Col>
            </Row>
            <Row className="pd-top-120 d-flex align-items-center">
              <Col lg="6">
                <Image
                  className="img-fluid pd-btm-40"
                  src={convert}
                  alt="web designers hamilton"
                />
              </Col>
              <Col lg="6">
                <h2>
                  <span>Conversion-Driven</span> <br />
                  Web Design
                </h2>
                <p>
                  Looking to transform your Hamilton web design visitors into
                  loyal customers? At Infused Agency, we specialize in crafting
                  sales funnels that accomplish just that. Our Hamilton web
                  design experts create finely-tuned funnels that guide your
                  prospects seamlessly from initial interest to decisive action.
                  By integrating engaging design, persuasive copy, and powerful
                  calls-to-action, we develop funnels that not only capture
                  leads but also deliver significant, measurable results. Choose
                  Infused Agency for Hamilton web design solutions that turn
                  visitors into customers and drive your business growth.
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
                    alt="website design discovery hamilton"
                  />
                  <h2>
                    1. <span>Discover</span>
                  </h2>
                  <p>
                    At Infused Agency, we know that achieving your ultimate goal
                    starts with choosing the right path, especially when it
                    comes to Hamilton web design. Our process begins by
                    thoroughly understanding every intricate detail of your
                    business, helping us map out the road to success. The team
                    at Infused Agency follows a detailed approach to Hamilton
                    web design, ensuring each step is carried out with
                    precision. We delve deep into your business to understand
                    the purpose behind your website, your expectations, ultimate
                    goals, and target audience. Additionally, we analyze your
                    competitors, their Hamilton web design strategies, and your
                    budget. These detailed insights enable us to craft a robust
                    Hamilton web design strategy that ensures your business's
                    success.
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
                    alt="website design process hamilton"
                  />
                  <h2>
                    2. <span>Plan</span>
                  </h2>
                  <p>
                    We excel at planning, especially when it comes to our web
                    design services in Hamilton. At Infused Agency, our
                    professional team understands that a well-executed master
                    plan is crucial for success. We start by thoroughly
                    researching your vision for the website, ensuring we fully
                    grasp your plan and respect your time. During the planning
                    phase of your Hamilton web design project, we create
                    wireframe sketches, draft content layouts, design the
                    website's graphical structure, and develop detailed
                    flowcharts. This comprehensive approach provides us with a
                    clear roadmap to build the website, manage its content, and
                    implement effective hyperlinking, ensuring your Hamilton web
                    design project is a success from start to finish.
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
                    alt="website design agency hamilton"
                  />
                  <h2>
                    3. <span>Design</span>
                  </h2>
                  <p>
                    We are innovative and adaptable, especially when it comes to
                    web design in Hamilton. At Infused Agency, our exceptional
                    team of web designers has been internationally recognized
                    for their excellence, adhering to the highest quality
                    standards in every project. After thoroughly researching
                    current trends and collaborating with your team, we select
                    the most captivating color schemes, typography, videos,
                    animations, images, and content layouts. We ensure an
                    outstanding UX design that is user-centered, easy to
                    navigate, and developed to the highest standards, making
                    your Hamilton web design project truly exceptional.
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
                    alt="website development hamilton"
                  />
                  <h2>
                    4. <span>Develop</span>
                  </h2>
                  <p>
                    We excel in both planning and design, particularly for web
                    design in Hamilton. Our renowned team at Infused Agency,
                    with extensive experience in developing top-tier Hamilton
                    web design projects, delivers flawless results for our
                    clients. We go above and beyond, utilizing our skills
                    efficiently and leveraging cutting-edge technology and
                    innovative techniques to ensure every task is completed with
                    precision. Once the design phase is complete, our highly
                    skilled content writers populate the web pages with fresh
                    content and refine existing material. Adding new videos,
                    slideshows, and other media elements enhances the website's
                    appeal. We then develop a prototype, test it across major
                    web browsers, and obtain your approval before the official
                    launch.
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
                    alt="website development launch hamilton"
                  />
                  <h2>
                    5. <span>Launch</span>
                  </h2>
                  <p>
                    Your approval of the prototype is crucial to us. Once we
                    receive your go-ahead, we proceed with search engine
                    optimization tailored for web design in Hamilton. Our
                    content development team ensures that all content is unique
                    and meticulously proofread for grammar, spelling, and
                    punctuation errors. We also manage Google Analytics and
                    search engine rankings from the beginning. Our experts
                    rigorously test the website’s functionality, guaranteeing
                    that our Hamilton web design solutions create a direct path
                    to your company’s growth.
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
                    alt="website design promotion hamilton"
                  />
                  <h2>
                    6. <span>Promote</span>
                  </h2>
                  <p>
                    Our top-tier digital marketing experts ensure your website
                    is effectively promoted online. At Infused Agency, our
                    services extend beyond merely launching your Hamilton web
                    design project. Our world-class team includes seasoned
                    specialists in SEO and digital marketing. We have a
                    dedicated team that thoroughly assesses your needs and
                    implements premium digital strategies to help your business
                    excel in today's competitive landscape. We believe that your
                    success is our success as well, and we are committed to
                    elevating your online presence through expert Hamilton web
                    design and digital marketing solutions.
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
                      alt="web designers hamilton"
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
                      alt="website design hamilton"
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
                  Our Hamilton website designs are <span>fast</span>,{" "}
                  <span>optimized</span> and <span>drive leads</span>.
                </h2>
              </Col>
              <Col md="6">&nbsp;</Col>
            </Row>
            <Row className="pd-top-40">
              <Col lg="4" className="d-flex">
                <div className="card">
                  <Image src={fast} alt="fast website design hamilton" />
                  <h3>Lightning-Fast Speed</h3>
                  <p>
                    Experience unmatched website speed with Infused Agency’s web
                    design services in Hamilton. Our websites are meticulously
                    crafted to load almost instantly, ensuring a smooth user
                    experience and enhancing engagement.
                  </p>
                </div>
              </Col>
              <Col lg="4" className="d-flex">
                <div className="card">
                  <Image src={build} alt="web designers in hamilton" />
                  <h3>Mobile Performance</h3>
                  <p>
                    Experience a website that excels across all devices with
                    Infused Agency’s Hamilton web development. We ensure your
                    site is flawlessly optimized for mobile, providing a
                    seamless and engaging experience that turns visitors into
                    loyal customers.
                  </p>
                </div>
              </Col>
              <Col lg="4">
                <div className="card">
                  <Image src={grow} alt="web design company in hamilton" />
                  <h3>Rank On Google</h3>
                  <p>
                    Unlock your website's full potential with Infused Agency’s
                    premier SEO strategies. Our Hamilton SEO services are
                    designed to elevate your site’s position in Google rankings.
                    Attract more visitors and drive targeted traffic with a
                    website optimized for success in Hamilton web design.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="pd-top-40">
              <Col md="6">
                <h2>
                  How to <span>increase conversions</span> through Hamilton
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
                    alt="website design speed hamilton"
                  />
                  <h2>
                    1. <span>Improve Website Speed</span>
                  </h2>
                  <p>
                    Website speed greatly affects user experience and conversion
                    rates. A slow-loading site can frustrate visitors, leading
                    to higher bounce rates and fewer conversions. To enhance
                    your website’s speed, start by optimizing images, which are
                    often the largest files on a page. Use image compression
                    tools to reduce file sizes without compromising quality.
                    Additionally, minimize HTTP requests by cutting down on the
                    number of elements on your page, such as scripts and
                    stylesheets. Implement browser caching to store static
                    resources, so they don’t need to be reloaded with every
                    visit. Leverage tools like Google PageSpeed Insights for
                    valuable insights and recommendations to improve page speed,
                    ensuring a smoother and faster experience for your users.
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
                    alt="website design user experience hamilton"
                  />
                  <h2>
                    2. <span>Enhance User Experience (UX)</span>
                  </h2>
                  <p>
                    A well-crafted user experience is essential for converting
                    visitors into customers. Begin by ensuring your website is
                    mobile-friendly, as an increasing number of users browse and
                    shop on smartphones. Streamline your site’s navigation to
                    help users find information quickly and intuitively. Utilize
                    clear, prominent call-to-action (CTA) buttons to guide users
                    toward actions like making a purchase or subscribing to a
                    newsletter. Employ contrasting colors and engaging text to
                    make CTAs stand out. Additionally, focus on a clean,
                    visually appealing design that reflects your brand and
                    resonates with your target audience. By prioritizing user
                    experience, you'll create a more engaging and effective
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
                    alt="website design optimize landing page hamilton"
                  />
                  <h2>
                    3. <span>Optimize Landing Pages</span>
                  </h2>
                  <p>
                    Landing pages are essential for converting visitors into
                    leads or customers. To optimize these pages, ensure the
                    content is highly relevant to the traffic source, whether
                    it’s an ad, email, or social media post. The messaging and
                    offers should align with users' expectations upon arrival.
                    Minimize distractions by removing unnecessary elements that
                    could divert attention from the primary goal, such as
                    signing up for a service or making a purchase. Use
                    compelling headlines, persuasive copy, and strong CTAs to
                    drive action. Additionally, incorporate trust signals, like
                    customer testimonials or security badges, to build
                    credibility and reassure visitors. An optimized landing page
                    can significantly improve conversion rates by delivering a
                    focused and persuasive user experience.
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
                    alt="website design a/b testing hamilton"
                  />
                  <h2>
                    4. <span>Implement A/B Testing</span>
                  </h2>
                  <p>
                    A/B testing, also known as split testing, is a powerful
                    technique for optimizing website elements to enhance
                    conversion rates. This approach involves creating two or
                    more versions of a webpage and comparing their performance
                    to identify which version yields the best results. You can
                    test various elements, such as headlines, images, CTAs, or
                    overall design, to determine what resonates most with your
                    audience. By analyzing user behavior and engagement metrics,
                    you can pinpoint which version of a page is more effective
                    in achieving your conversion goals. Tools like Google
                    Optimize or Optimizely help set up and manage A/B tests,
                    providing insights that guide data-driven decisions.
                    Continuous A/B testing allows your website to evolve based
                    on real user feedback, leading to improved conversion rates
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
                    alt="website design social proof hamilton"
                  />
                  <h2>
                    5. <span>Leverage Social Proof</span>
                  </h2>
                  <p>
                    Social proof is a psychological principle where individuals
                    rely on others’ actions and opinions to guide their own
                    decisions. By incorporating social proof elements into your
                    website, you can build trust and credibility, which are
                    crucial for enhancing conversions. prominently feature
                    customer testimonials to highlight positive feedback and
                    experiences from past clients. Adding case studies with
                    detailed success stories can further demonstrate the value
                    of your products or services. Reviews and ratings play a
                    significant role in influencing potential customers by
                    providing proof of your business’s reputation and
                    reliability. Additionally, showcasing any awards or
                    certifications your company has received can further bolster
                    your credibility. Leveraging social proof creates a more
                    persuasive and trustworthy website, motivating visitors to
                    take action.
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              <Col lg="12">
                <div className="card">
                  <img
                    alt="hamilton web design client"
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
