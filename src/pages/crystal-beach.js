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
import hero from "../img/seo-crystal-beach.webp";
import best from "../img/awards.png";
import { Col, Container, Row } from "reactstrap";
import flatRock from "../img/flat-rock-seo-results.png";

const SEO = ({ latestPosts }) => {
  return (
    <>
      <Head>
        <title>
          Crystal Beach SEO & Digital Marketing Services | Infused Agency
        </title>
        <meta
          name="description"
          content="Looking for top SEO and digital marketing in Crystal Beach? Our local experts drive targeted traffic and grow your business online with proven, customized campaigns."
        />
        <link rel="canonical" href="https://infused.agency/crystal-beach" />
      </Head>
      <Nav />
      <InnerHeroCities
        title="Crystal Beach SEO Services – Helping Your Business Get Found Online"
        subTitle="Strategic SEO Solutions to Grow Your Presence in Crystal Beach, ON"
        image={hero}
        alt="SEO Company in Crystal Beach, Ontario"
      />
      <section className="home-top-web">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <h2>Helping Crystal Beach Companies Get Found Online</h2>
            </div>
          </div>
          <Row>
            <Col lg="12">
              <p>
                Google uses complex algorithms to rank websites, focusing on
                quality content, site structure, and local relevance. At Infused
                Agency, we help your Crystal Beach business climb those rankings
                and connect with your ideal customers.
                <br />
                <br />
                Want to learn more about SEO? Learn more{" "}
                <Link href="/posts/how-does-seo-help-your-business-grow">
                  here.
                </Link>
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
                    <li>300% growth in local search visibility</li>
                    <li>Multiple first-page Google Map placements</li>
                    <li>Page 1 organic rankings for key industry keywords</li>
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
              <h2>Why Choose Infused As Your Crystal Beach SEO Agency?</h2>
              <p>
                At Infused Agency, we believe your website should be more than
                just an online presence — it should actively bring you
                customers. As a Crystal Beach SEO company with over a decade of
                experience, we blend creative web design, technical SEO, and
                digital marketing strategies to help local businesses thrive.
                <br />
                <br />
                Our team specializes in Crystal Beach SEO services, including
                keyword research, content creation, and website optimization.
                From small shops to service-based companies along Lake Erie, we
                know how to position Crystal Beach businesses for success. Our
                proven track record includes helping local businesses in Niagara
                Falls, Fort Erie, and surrounding areas improve their lead
                generation and search rankings.
                <br />
                <br />
                By focusing on Crystal Beach’s unique market and combining it
                with our technical expertise, we ensure your business stays
                ahead of the competition.
              </p>
              <Image
                className="img-fluid"
                src={best}
                alt="search engine optimization company Crystal Beach"
              />
            </div>
            <div className="col-lg-5">
              <div className="card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23393.8634638668!2d-79.07496907053216!3d42.867927453582695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d33dc989b4ccc5%3A0xb57a249d19dfde0b!2sCrystal%20Beach%2C%20Fort%20Erie%2C%20ON!5e0!3m2!1sen!2sca!4v1735667298595!5m2!1sen!2sca"
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
              <h2>Comprehensive SEO Services in Crystal Beach</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row pd-top-40">
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Keyword Research for Crystal Beach Businesses</h2>
                <p>
                  We identify search terms that your local customers are
                  actually using, helping you connect with the right audience in
                  Crystal Beach and beyond.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Local SEO in Crystal Beach</h2>
                <p>
                  We optimize your business for Crystal Beach-related search
                  queries, including map listings, Google Business Profile
                  optimization, and local content creation.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Content Writing & SEO Copywriting</h2>
                <p>
                  We create engaging, optimized content tailored specifically
                  for Crystal Beach audiences, ensuring your website speaks
                  directly to local clients.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Link Building Services</h2>
                <p>
                  We build high-quality backlinks that help improve your site
                  authority and rankings in Crystal Beach-related search
                  results.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>On-Page SEO & Technical SEO</h2>
                <p>
                  From fixing page speed issues to optimizing meta tags and
                  images, we cover everything your Crystal Beach website needs
                  to perform its best.
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
              <h3>What does local SEO in Crystal Beach involve?</h3>
              <p>
                Local SEO for Crystal Beach businesses means optimizing your
                website and online profiles to appear prominently in local
                search results, especially on Google M
              </p>

              <h3>
                How long does it take to see SEO results for my Crystal Beach
                company?
              </h3>
              <p>
                Most Crystal Beach SEO campaigns show noticeable results within
                3–6 months, depending on competition and the type of business.
              </p>

              <h3>How much do Crystal Beach SEO services cost?</h3>
              <p>
                Crystal Beach SEO pricing depends on the scope of work, but we
                offer flexible packages. Contact us for a free consultation and
                quote.
              </p>

              <h3>
                Do you guarantee my Crystal Beach business will rank #1 on
                Google?
              </h3>
              <p>
                No ethical SEO agency can guarantee top rankings, but we have a
                proven track record of getting Crystal Beach companies onto the
                first page of search results.
              </p>

              <h3>
                What makes Infused Agency different from other Crystal Beach SEO
                companies?
              </h3>
              <p>
                We combine local knowledge of the Niagara region with years of
                technical SEO expertise. Our transparent approach and real
                client results set us apart.
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
