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
import hero from "../../img/seo-for-therapists-ontario-toronto-mississauga-ottawa.jpg";
import { Col, Container, Row } from "reactstrap";
import results from "../../img/pursue-you-seo.jpg";

const SEO = ({ latestPosts }) => {
  return (
    <>
      <Head>
        <title>SEO for Therapists Ontario | Toronto, Ottawa, Mississauga</title>
        <meta
          name="description"
          content="Boost visibility with SEO for Therapists Ontario. Trusted SEO services in Toronto, Ottawa & Mississauga. Rank higher, attract clients, and grow your practice."
        />
        <link
          rel="canonical"
          href="https://infused.agency/seo/for-therapists-ontario"
        />
      </Head>
      <Nav />
      <InnerHeroCities
        title="SEO for Therapists in Ontario"
        subTitle="Top SEO for Therapists in Toronto, Ottawa, Mississauga and across Ontario."
        image={hero}
        alt="SEO for therapists Ontario, toronto, mississauga, ottawa"
        description="Infused Agency provides expert SEO services for therapists across Ontario, including Toronto, Ottawa, Mississauga, Brampton, Hamilton, London, Markham, Vaughan, Kitchener, and Windsor. Our SEO specialists help therapy practices improve online visibility, attract new clients, and rank higher on Google. Whether you’re searching for a trusted SEO company, local SEO agency, or the best SEO services in Ontario, we’ve got you covered."
      />
      <section className="home-top-web">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>About Us</h2>
              <p>
                Welcome to Infused Agency, your trusted SEO Ontario company for
                therapists and mental health professionals. With years of
                experience delivering results for businesses across Toronto,
                Ottawa, and Mississauga, we specialize in helping therapy
                practices increase online visibility, generate leads, and
                attract clients through powerful SEO strategies.
              </p>

              <h2>Our Mission</h2>
              <p>
                At Infused Agency, our mission is to transform your therapy
                website into your best sales manager. We believe that with the
                right SEO services in Ontario, your practice can consistently
                rank higher on Google, build trust, and become the go-to choice
                for clients seeking therapy in Toronto, Ottawa, Mississauga, and
                beyond.
              </p>

              <h2>Who We Are</h2>
              <p>
                We’re a passionate SEO agency dedicated to helping therapists
                grow. Our expertise spans search engine optimization, local SEO,
                and digital marketing. Whether you need SEO copywriting,
                technical optimization, or link building, our Ontario SEO team
                blends creativity with strategy to deliver measurable results.
              </p>

              <h2>Why Choose Infused Agency?</h2>
              <p>
                <strong>Proven Results:</strong> We’ve helped local businesses
                achieve thousands of new visitors and leads.
              </p>
              <p>
                <strong>Local Expertise:</strong> As an Ontario SEO company, we
                understand your market.
              </p>
              <p>
                <strong>Full-Service Approach:</strong> From SEO audits to
                ongoing campaigns, we cover it all.
              </p>
              <p>
                <strong>Client-Centric:</strong> Your success drives ours—we
                treat every client like a partner.
              </p>
              <p>
                <strong>Cutting-Edge:</strong> We use the latest SEO tools and
                strategies to keep you ahead of competitors.
              </p>
            </div>
          </div>
          <section className="work">
            <Row className="pd-top-40">
              <Col lg="12">
                <h2 className="title">Recent Project</h2>
                <h2>Pursue You Psychotherapy</h2>
                <hr />
              </Col>
            </Row>
            <div className="row">
              <div className="col-lg-6">
                <Image
                  className="img-fluid"
                  src={results}
                  alt="SEO Results for therapists in ontario - Toronto, Ottawa, Mississauga, Brampton, Hamilton, London, Markham, Vaughan, Kitchener, Windsor"
                />
              </div>
              <div className="col-lg-6">
                <div class="card">
                  <h3>After hiring us:</h3>
                  <ul>
                    <li>Ranking for over 600 keywords on page 1 of Google</li>
                    <li>Multiple first-page Google Map placements</li>
                    <li>Steady stream of client inquiries</li>
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
      </section>
      <section className="home-services">
        <div className="container">
          <div className="row pd-btm-40">
            <div className="col-lg-12 text-center">
              <h2>SEO Services for Therapists in Ontario</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row pd-top-40">
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Keyword Research</h2>
                <p>
                  We start by understanding what your potential clients are
                  searching for. We ensure your practice appears in the searches
                  that matter most. This strategic approach helps your therapy
                  practice attract the right clients and grow steadily.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>On-Page SEO</h2>
                <p>
                  Our Ontario Therapist SEO experts optimize your website’s
                  structure, headers, meta tags, and content to make your
                  therapy practice highly visible on Google. Every page is
                  tailored to appeal to potential clients searching for therapy
                  services in Toronto, Ottawa, Mississauga and all over Ontario,
                  ensuring your website ranks well and converts visitors into
                  patients.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Content Writing & SEO Copywriting</h2>
                <p>
                  We craft engaging, professional content specifically for
                  therapists. From blog posts to service pages, our SEO
                  copywriting naturally incorporates relevant keywords while
                  clearly communicating your expertise and services. This helps
                  your practice build trust, authority, and client confidence
                  online.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Link Building</h2>
                <p>
                  We enhance your website’s authority by acquiring high-quality
                  backlinks from reputable sources. Strong backlinks signal
                  credibility to Google, improving your rankings so more clients
                  can find your therapy services in Ontario.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Local SEO</h2>
                <p>
                  Local SEO ensures your therapy practice appears at the top of
                  searches like “therapist near me” or other relevant keywords.
                  We optimize your Google Business Profile, manage local
                  citations, and create location-specific content to attract
                  clients in Toronto, Ottawa, Mississauga, and across Ontario.
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
              <h3>How can SEO for therapists in Ontario help my practice?</h3>{" "}
              <p>
                SEO for therapists in Ontario improves your Google rankings,
                making it easier for people in whichever city you're in -
                whether it's Toronto, Ottawa, Mississauga or anywhere else in
                Ontario - to find and contact your practice.
              </p>{" "}
              <h3>
                What makes Infused Agency the best SEO company in Ontario?
              </h3>{" "}
              <p>
                We specialize in SEO for therapists, combining proven strategies
                with local expertise to deliver results for practices across
                Ontario. We've helped over 30 therapist clients for SEO in
                Ontario alone. We know what we're doing!
              </p>{" "}
              <h3>Do you offer SEO audits for therapists in Ontario?</h3>{" "}
              <p>
                Yes, our SEO audit services in Ontario identify opportunities to
                improve your rankings and help therapists attract more clients
                locally.
              </p>{" "}
              <h3>How much does SEO cost in Ontario for therapists?</h3>{" "}
              <p>
                SEO pricing in Ontario varies depending on your needs. We
                provide customized packages to fit your therapy practice’s
                goals.
              </p>{" "}
              <h3>
                Can local SEO help therapists in Toronto, Ottawa, and
                Mississauga?
              </h3>{" "}
              <p>
                Absolutely. Local SEO in Ontario ensures that when someone
                searches for therapy services in your city, your practice shows
                up first.
              </p>{" "}
              <h3>
                What cities in Ontario do you serve for therapist SEO services?
              </h3>{" "}
              <p>
                We provide professional SEO services for therapists across
                Ontario, including major cities like Toronto, Ottawa, Brampton,
                Mississauga, Hamilton, London, Markham, Vaughan, Kitchener, and
                Windsor. We also serve Richmond Hill, Oakville, Burlington,
                Greater Sudbury, St. Catharines, Barrie, Cambridge, Guelph,
                Kingston, and Thunder Bay. In addition, our services extend to
                Chatham-Kent, Sarnia, Peterborough, Niagara Falls, North Bay,
                Belleville, Cornwall, Stratford, Orangeville, Midland,
                Collingwood, Gravenhurst, Bracebridge, Wasaga Beach, Orillia,
                Newmarket, Ajax, Aurora, Amherstburg, Arnprior, Aylmer,
                Bancroft, Brockville, Caledon, Carleton Place, Clarington,
                Cobourg, and Cochrane.
              </p>{" "}
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
