import React from "react";
import { getLatestPosts } from "../lib/posts";
import { format } from "date-fns";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Nav from "../../components/Nav/nav";
import InnerHeroCities from "../../components/innerHero/innerHeroCIties";
import CTA from "../../components/CTA/cta";
import Footer from "../../components/Footer/footer";
import hero from "../img/seo-fonthill.webp";
import best from "../img/awards.png";
import { Col, Container, Row } from "reactstrap";
import GoogleReviews from "../../components/GoogleReviews/googleReviews";
import flatRock from "../img/flat-rock-seo-results.png";

const SEO = ({ latestPosts }) => {
  return (
    <>
      <Head>
        <title>
          Fort Erie SEO & Digital Marketing Experts | Infused Agency
        </title>
        <meta
          name="description"
          content="Rank higher and attract more customers in Fort Erie with our expert SEO and digital marketing services. Customized strategies to fit your local business goals."
        />
        <link rel="canonical" href="https://infused.agency/fort-erie" />
      </Head>
      <Nav />
      <InnerHeroCities
        title="Boost Your Fort Erie Business with Expert SEO & Digital Marketing Services"
        subTitle="Tailored Digital Marketing and SEO Strategies for Fort Erie, ON"
        image={hero}
        alt="SEO Company in Fort Erie, Ontario"
      />
      <section className="home-top-web">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <h2>Helping Fort Erie Businesses Stand Out Online</h2>
            </div>
          </div>
          <Row>
            <Col lg="12">
              <p>
                Google rewards websites with quality content, strong structure,
                and local relevance. Infused Agency helps your Fort Erie
                business climb search rankings and connect with your target
                customers.
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
                  alt="Flat Rock Cellars SEO Results"
                />
              </div>
              <div className="col-lg-6">
                <div class="card">
                  <h3>After hiring us:</h3>
                  <ul>
                    <li>300% increase in local search visibility</li>
                    <li>Multiple first-page Google Map rankings</li>
                    <li>Page 1 organic placements for competitive keywords</li>
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
              <h2>Why Choose Infused As Your Fort Erie SEO Agency?</h2>
              <p>
                At Infused Agency, we specialize in digital marketing and SEO
                services crafted specifically for Fort Erie businesses. Whether
                you're a local retailer near Ridgeway or a service provider
                serving the wider Fort Erie community, our customized digital
                marketing solutions help you attract and convert more local
                customers.
              </p>

              <Image
                className="img-fluid"
                src={best}
                alt="search engine optimization company Fort Erie"
              />
            </div>
            <div className="col-lg-5">
              <div className="card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93570.77077157889!2d-79.16995685978634!3d42.87101655063847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d33e24e7337d03%3A0x885d5008ef9ad9d1!2sFort%20Erie%2C%20ON!5e0!3m2!1sen!2sca!4v1752292465031!5m2!1sen!2sca"
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
              <h2>
                Comprehensive SEO & Digital Marketing Services for Fort Erie
                Businesses
              </h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row pd-top-40">
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Fort Erie Local SEO Optimization</h2>
                <p>
                  Maximize your visibility in local searches and Google Maps
                  across Fort Erie.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Keyword Research and Strategy</h2>
                <p>
                  Target the most effective search terms your Fort Erie
                  customers use to find services like yours.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>SEO Content Creation</h2>
                <p>
                  Engaging, optimized content tailored to the Fort Erie market
                  to attract and convert visitors.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Link Building Services</h2>
                <p>
                  Earn quality backlinks from authoritative sites to boost your
                  domain authority and rankings.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Technical SEO & Website Performance</h2>
                <p>
                  Optimize site speed, mobile-friendliness, and other technical
                  factors essential for SEO success.
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
              <h2>FAQs</h2>
            </Col>
          </Row>

          <Row>
            <Col lg="12">
              <h3>
                What is local SEO and why is it important for Fort Erie
                businesses?
              </h3>
              <p>
                Local SEO helps your Fort Erie business appear in local search
                results and maps, driving nearby customers to your site and
                storefront.
              </p>

              <h3>How quickly will I see results from SEO in Fort Erie?</h3>
              <p>
                SEO results typically appear within 3 to 6 months, depending on
                your industry and competition.
              </p>

              <h3>What does SEO cost for Fort Erie companies?</h3>
              <p>
                SEO pricing depends on your business goals and needs. We offer
                tailored packages to suit Fort Erie businesses.
              </p>

              <h3>
                Can you guarantee #1 rankings on Google for my Fort Erie
                business?
              </h3>
              <p>
                No reputable agency guarantees #1 rankings, but we have a proven
                track record of moving Fort Erie businesses up in search
                results.
              </p>

              <h3>Why choose Infused Agency for SEO in Fort Erie?</h3>
              <p>
                We combine technical expertise with local market knowledge to
                deliver effective, transparent, and results-driven SEO and
                digital marketing services.
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
