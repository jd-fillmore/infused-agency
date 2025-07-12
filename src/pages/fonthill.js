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
          SEO & Digital Marketing in Fonthill, ON | Results-Driven Strategies
        </title>
        <meta
          name="description"
          content="Grow your Fonthill business with Infused Agency’s SEO and digital marketing services. We specialize in local campaigns that generate leads and improve online presence.

"
        />
        <link rel="canonical" href="https://infused.agency/fonthill" />
      </Head>
      <Nav />
      <InnerHeroCities
        title="Elevate Your Fonthill Business with Expert SEO & Digital Marketing Services"
        subTitle="Comprehensive Digital Marketing and SEO Solutions for Fonthill, ON"
        image={hero}
        alt="SEO Company in Fonthill, Ontario"
      />
      <section className="home-top-web">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <h2>
                Helping Fonthill Companies Grow Online with Proven SEO Results
              </h2>
            </div>
          </div>
          <Row>
            <Col lg="12">
              <p>
                Search engines reward strong content, structured websites, and
                local authority. That’s why Fonthill businesses turn to Infused
                Agency to boost their online visibility.
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
                    <li>Multiple top 3 placements in Google Maps</li>
                    <li>
                      Page 1 organic rankings for competitive, high-intent
                      keywords
                    </li>
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
              <h2>Why Choose Infused As Your Fonthill SEO Agency?</h2>
              <p>
                At Infused Agency, we provide tailored SEO and digital marketing
                services designed to help Fonthill businesses attract more local
                customers. Whether you're a retail store near Pelham Street or a
                service provider serving the greater Fonthill area, our
                data-driven digital marketing strategies will put your business
                in front of the right audience.
              </p>

              <Image
                className="img-fluid"
                src={best}
                alt="search engine optimization company Fonthill"
              />
            </div>
            <div className="col-lg-5">
              <div className="card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23329.80817169622!2d-79.30626191996562!3d43.03667575280389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d3495b85ab330f%3A0xa66b7f6644047a01!2sFonthill%2C%20Pelham%2C%20ON!5e0!3m2!1sen!2sca!4v1752292029991!5m2!1sen!2sca"
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
                Proven SEO & Digital Marketing Services for Businesses in
                Fonthill
              </h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row pd-top-40">
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Fonthill Local SEO Optimization</h2>
                <p>
                  We ensure your business appears prominently on Google Maps and
                  in “near me” searches across Fonthill.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Keyword Strategy & Research</h2>
                <p>
                  We find and target keywords that local customers in Fonthill
                  are actively searching for, helping your business connect with
                  them at the right moment.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Content Creation & On-Site Optimization</h2>
                <p>
                  Our content writers craft SEO-friendly content that ranks well
                  and engages users. From service pages to blogs, we help you
                  speak your customers’ language.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Link Building for Fonthill Businesses</h2>
                <p>
                  Build domain authority and rank higher with backlinks from
                  reputable, relevant websites in your industry.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Technical SEO & Website Health</h2>
                <p>
                  We address site speed, mobile usability, indexability, and
                  other behind-the-scenes elements that affect your SEO
                  performance.
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
                What is local SEO, and how does it help my Fonthill business?
              </h3>
              <p>
                Local SEO in Fonthill focuses on optimizing your business to
                appear in Google’s local results — especially map packs —
                helping you reach nearby customers.
              </p>

              <h3>
                How long will it take for SEO to show results in Fonthill?
              </h3>
              <p>
                Most Fonthill SEO clients begin seeing improvements in 3 to 6
                months, depending on competition and how established your
                website is.
              </p>

              <h3>What does SEO cost for a business in Fonthill?</h3>
              <p>
                Pricing varies depending on your business size and goals. We
                offer flexible SEO packages customized for Fonthill companies —
                reach out for a free quote.
              </p>

              <h3>Can you get my Fonthill business to #1 on Google?</h3>
              <p>
                We don’t make empty promises — but we can show you our track
                record of getting clients into the top results through
                sustainable, white-hat SEO.
              </p>

              <h3>Why choose Infused Agency for SEO in Fonthill?</h3>
              <p>
                We're not just SEO experts — we’re Niagara-based, with deep
                knowledge of local markets like Fonthill. We combine technical
                skill with local insight to get real results.
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
