import React from "react";
import { getLatestPosts } from "../../lib/posts";
import { format } from "date-fns";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Nav from "../../../components/Nav/nav";
import InnerHeroCities from "../../../components/innerHero/innerHeroCIties";
import CTA from "../../../components/CTA/cta";
import Footer from "../../../components/Footer/footer";
import hero from "../../img/beamsville-web-design.webp";
import best from "../../img/awards.png";
import { Col, Container, Row } from "reactstrap";
import GoogleReviews from "../../../components/GoogleReviews/googleReviews";
import flatRock from "../../img/flat-rock-seo-results.png";
import kd from "../../img/kd-flowers-seo-results.png";

const SEO = ({ latestPosts }) => {
  return (
    <>
      <Head>
        <title>Web Design Beamsville</title>
        <meta
          name="description"
          content="Expert web design and development services in Beamsville. Boost your online presence with a custom website tailored to your business needs."
        />
        <link
          rel="canonical"
          href="https://infused.agency/web-design/beamsville"
        />
      </Head>
      <Nav />
      <InnerHeroCities
        title="Web Design Beamsville"
        subTitle="We're Infused Agency, a Beamsville web design company."
        image={hero}
        alt="web design Beamsville"
      />
      <section className="home-top-web">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <h2>
                Beamsville Web Design Services That{" "}
                <span>Get Great Results</span>
              </h2>
            </div>
          </div>
          <Row>
            <Col lg="12">
              <p>
                At Infused Agency, we create awesome websites that are easy to
                use and look great. Our web design services help make sure your
                site works well on any device, grabs attention, and gives your
                visitors a smooth experience. We build websites that help your
                business grow and stand out online.
              </p>
            </Col>
          </Row>
          <section className="work">
            <Row className="pd-top-40">
              <Col lg="12">
                <h2 className="title">Recent Project</h2>
                <h2>Flat Rock Cellars</h2>
                <hr />
              </Col>
            </Row>
            <div className="row">
              <div className="col-lg-6">
                <Image
                  className="img-fluid"
                  src={flatRock}
                  alt="Flat Rock Cellars web design Results"
                />
              </div>
              <div className="col-lg-6">
                <div class="card">
                  <h3>After hiring us:</h3>
                  <ul>
                    <li>Local Google Search Visibility Increased by 300%</li>
                    <li>Page 1 Google Map Rankings for Multiple Keywords</li>
                    <li>Page 1 Google Rankings for Multiple Keywords</li>
                  </ul>
                </div>
                <br />
                <Link href="/work">
                  <button>View More Results</button>
                </Link>
              </div>
            </div>
          </section>
        </div>

        {/* Container End*/}
        {/* Container Start*/}
        <div className="container">
          <div className="row pd-top-120">
            <div className="col-lg-7">
              <h2>Why Choose Infused As Your Beamsville Web Design Agency?</h2>
              <p>
                It's simple. Our Beamsville{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Web_design"
                  target="_blank"
                >
                  web designers
                </a>{" "}
                have years of experience creating stunning, high-performing
                websites for local businesses that include{" "}
                <Link href="/seo/beamsville">SEO</Link>. We understand what
                works best for companies in Beamsville, crafting websites that
                are not only visually appealing but also optimized for
                performance and user experience. Let us help you build a website
                that stands out and drives results in the local market.
              </p>

              <p>
                We provide services across Beamsville, ON, covering areas like{" "}
                <a href="https://www.google.com/maps/place/Kinsmen+Park/@43.1611284,-79.517786,13z/data=!4m15!1m8!3m7!1s0x882ca6a63bd9bd41:0x22e434fb6db3b5f!2sBeamsville,+Lincoln,+ON!3b1!8m2!3d43.1570948!4d-79.4760133!16zL20vMDZxdG5s!3m5!1s0x882cb1fbd5449701:0xd78126f70d79d742!8m2!3d43.14534!4d-79.47595!16s%2Fg%2F1tf4fp5r?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
                  Kinsmen Park
                </a>
                ,{" "}
                <a href="https://www.google.com/maps/place/Albright+Manor/@43.1507457,-79.4973951,13.93z/data=!4m15!1m8!3m7!1s0x882ca6a63bd9bd41:0x22e434fb6db3b5f!2sBeamsville,+Lincoln,+ON!3b1!8m2!3d43.1570948!4d-79.4760133!16zL20vMDZxdG5s!3m5!1s0x882cb1fdfaf02a1b:0x85601de8cf1e8306!8m2!3d43.1518682!4d-79.4765943!16s%2Fg%2F1t_wp_br?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
                  Albright Manor
                </a>
                , Vine Avenue, Mountainview, and Cherry Heights.
              </p>

              <p>
                <a href="https://www.lincoln.ca/" target="_blank">
                  Beamsville, ON
                </a>{" "}
                is a beautiful town located in the heart of the Niagara Region,
                known for its charming small-town atmosphere and rich
                agricultural roots. It is home to local attractions such as the
                Beamsville Heritage Trail, the beautiful vineyards, and the
                famous Beamsville Lions Park. With its close proximity to the
                Niagara Escarpment, Beamsville offers breathtaking views, hiking
                trails, and a friendly, vibrant community.
              </p>

              <Image
                className="img-fluid"
                src={best}
                alt="Beamsville web design company"
              />
            </div>
            <div className="col-lg-5">
              <div className="card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23282.936303750226!2d-79.49941746955109!3d43.15981920227602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ca6a63bd9bd41%3A0x22e434fb6db3b5f!2sBeamsville%2C%20Lincoln%2C%20ON!5e0!3m2!1sen!2sca!4v1735048861536!5m2!1sen!2sca"
                  width="100%"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-services">
        <div className="container">
          <div className="row pd-btm-40">
            <div className="col-lg-12 text-center">
              <h2>Beamsville Web Design Services</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row pd-top-40">
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Discovery & Planning</h2>
                <p>
                  We learn about your business, goals, and audience to create a
                  plan for your Beamsville web design.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Design & Mockups</h2>
                <p>
                  Our team creates website designs that match your brand and
                  style, ensuring a user-friendly experience.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Development</h2>
                <p>
                  We build the website, adding features and functionality, to
                  make sure it works smoothly.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Content Creation</h2>
                <p>
                  We help you add engaging text, images, and videos that connect
                  with your Beamsville audience.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Testing & Review</h2>
                <p>
                  We test your website on different devices to make sure it
                  looks and works great everywhere.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Launch & Support</h2>
                <p>
                  We launch your website and offer ongoing support to keep it
                  updated and running smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-faq">
        <Container>
          <Row className="text-center pd-btm-40">
            <Col lg="12">
              <h2>FAQs for Local Beamsville Web Design Clients</h2>
            </Col>
          </Row>

          <Row>
            <Col lg="12">
              <h3>
                What is web design, and why is it important for my business?
              </h3>
              <p>
                Web design is the process of creating the look and feel of your
                website. A well-designed website helps attract visitors, keep
                them engaged, and convert them into customers.
              </p>

              <h3>How long does it take to design a website?</h3>
              <p>
                The time it takes depends on the complexity of the site and your
                requirements. Typically, a website can take anywhere from a few
                weeks to a couple of months to complete.
              </p>

              <h3>What is responsive web design?</h3>
              <p>
                Responsive web design ensures your website looks great and
                functions well on any device, from phones to desktops.
              </p>

              <h3>How much does web design in Beamsville cost?</h3>
              <p>
                The cost of web design depends on the scope of the project.{" "}
                <Link href="/get-a-quote">Contact us today</Link> for a free
                consultation and quote based on your needs.
              </p>

              <h3>Do I need a custom website or a template-based design?</h3>
              <p>
                A custom website is tailored to your business, offering a unique
                design and functionality. Template designs are quicker and less
                expensive but can lack originality.
              </p>

              <h3>Will my website be easy to update after it's built?</h3>
              <p>
                Yes! We build websites that are easy to update, especially if
                you're using a content management system (CMS) like WordPress,
                so you can add or change content without hassle.
              </p>

              <h3>Can you redesign my current website?</h3>
              <p>
                Absolutely! We specialize in redesigning websites to make them
                more modern, user-friendly, and optimized for performance and
                search engines.
              </p>

              <h3>
                What are the benefits of a well-designed website for my
                Beamsville business?
              </h3>
              <p>
                A well-designed website helps build trust with visitors,
                improves user experience, and can lead to more conversions and
                business growth.
              </p>

              <h3>What happens after my website is launched?</h3>
              <p>
                After launch, we offer ongoing support, maintenance, and updates
                to keep your website running smoothly and up-to-date with the
                latest features.
              </p>

              <h3>Can you help with website content and images?</h3>
              <p>
                Yes, we assist with creating compelling content and selecting
                high-quality images that match your brand and resonate with your
                audience.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <CTA />
      <Footer />
    </>
  );
};

export default SEO;

export async function getStaticProps() {
  const latestPosts = getLatestPosts(3);
  return {
    props: {
      latestPosts,
    },
  };
}
