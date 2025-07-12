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
import hero from "../img/seo-beamsville.webp";
import best from "../img/awards.png";
import { Col, Container, Row } from "reactstrap";
import GoogleReviews from "../../components/GoogleReviews/googleReviews";
import flatRock from "../img/flat-rock-seo-results.png";

const SEO = ({ latestPosts }) => {
  return (
    <>
      <Head>
        <title>
          SEO & Digital Marketing for Niagara-on-the-Lake Businesses | Infused
          Agency
        </title>
        <meta
          name="description"
          content="Increase your Niagara-on-the-Lake business’s online presence with our expert SEO and digital marketing services. Customized campaigns that drive real results locally."
        />
        <link
          rel="canonical"
          href="https://infused.agency/niagara-on-the-lake"
        />
      </Head>
      <Nav />
      <InnerHeroCities
        title="Search Engine Optimization Beamsville"
        subTitle="Grow Your Business With Our SEO Services in Beamsville, ON"
        image={hero}
        alt="SEO Company in Beamsville, Ontario"
      />
      <section className="home-top-web">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <h2>
                Our Beamsville SEO Partners <span>Achieve Great Results</span>
              </h2>
            </div>
          </div>
          <Row>
            <Col lg="12">
              <p>
                Google and other search engines use complicated formulas to
                decide which websites show up first in search results. How your
                website is made, what information it shows, and where it's
                listed online are important factors. At Infused Agency, our SEO
                services help your website be seen and trusted by Google for
                better rankings.
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
              <h2>Why Choose Infused As Your Beamsville SEO Agency?</h2>
              <p>
                It's simple. Our <strong>SEO Beamsville</strong> agency has been
                helping businesses with their search engine optimization for
                over ten years. This means our local{" "}
                <strong>SEO Beamsville</strong> expert consultants know what
                works best for local companies when it comes to creating local{" "}
                <a href="https://en.wikipedia.org/wiki/Search_engine_optimization">
                  SEO
                </a>{" "}
                strategies.
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
                alt="search engine optimization company Beamsville"
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
              <h2>
                Beamsville SEO Company That <span>Makes An Impact</span>
              </h2>
              <p>
                Our <strong>SEO Beamsville</strong> services and lead-generating
                website designs help grow your business.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row pd-top-40">
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Keyword Research</h2>
                <p>
                  Our Beamsville SEO experts start by looking at your website
                  and finding the best words to help people find you.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Link Building</h2>
                <p>
                  We help improve your brand’s presence on big search engines
                  like Google by creating quality links and adding your business
                  to the right online listings.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Content Writing</h2>
                <p>
                  Infused Agency’s SEO team in Beamsville has a creative content
                  team. We create smart marketing strategies for your online
                  campaigns, including SEO-friendly content.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>On-Page SEO</h2>
                <p>
                  Bring more people to your website and get better leads with
                  our proven on-page SEO methods.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Local SEO</h2>
                <p>
                  Our Beamsville local SEO services help your business get
                  noticed by the right people online.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Technical SEO</h2>
                <p>
                  Our Beamsville SEO company takes care of your technical web
                  design to make sure it’s ready for SEO and works properly.
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
              <h2>FAQs for local Beamsville SEO Clients</h2>
            </Col>
          </Row>

          <Row>
            <Col lg="12">
              <h3>
                What is search engine optimization, and why is it important for
                my website?
              </h3>
              <p>
                Local <strong>SEO Beamsville</strong> services means making your
                website better so it appears higher in local search engine
                results. This helps more people find your site.
              </p>

              <h3>
                What are the main factors that influence Local search engine
                optimization rankings?
              </h3>
              <p>
                Important factors include using the right keywords, having a
                fast website, and getting other websites to link to yours.
              </p>

              <h3>How much does Local search engine optimization cost?</h3>
              <p>
                This entirely depends on both the length of the local{" "}
                <strong>SEO Beamsville</strong> campaign, and the work involved.{" "}
                <Link href="/get-a-quote">Contact us today</Link> for a free
                consult and free quote.
              </p>

              <h3>
                How do you perform keyword research, and how do you determine
                which keywords to target?
              </h3>
              <p>
                We find words people use to search for your type of business and
                choose ones that can bring you more visitors.
              </p>

              <h3>
                What is on-page local search engine optimization, and how does
                it differ from off-page local search engine optimization?
              </h3>
              <p>
                On-page local search engine optimization means improving things
                on your website, like text and images. Off-page local search
                engine optimization means getting other websites to link to
                yours.
              </p>

              <h3>
                How do you handle technical search engine optimization issues on
                a website?
              </h3>
              <p>
                We fix problems like slow loading times, broken links, and
                mobile-friendliness to improve your site’s performance.
              </p>

              <h3>Can you guarantee my website will rank #1 on Google?</h3>
              <p>
                No one can promise a #1 spot, but we can improve your chances
                with good <strong>SEO Beamsville</strong> practices, as we have
                for all of our clients.
              </p>

              <h3>
                How do backlinks impact my website’s local search engine
                optimization?
              </h3>
              <p>
                Backlinks are links from other websites to yours. They show
                Google your site is trusted.
              </p>

              <h3>
                What tools or software do you use for analysis and reporting?
              </h3>
              <p>
                We use tools like Google Analytics and software to check your
                website’s performance and give you reports.
              </p>

              <h3>
                What are the potential risks of search engine optimization, and
                how do you mitigate them?
              </h3>
              <p>
                Risks include using bad practices that can get your site
                penalized by Google. Our <strong>SEO Beamsville</strong> experts
                use safe, proven methods to avoid this.
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
