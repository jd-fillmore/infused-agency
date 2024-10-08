import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { Container, Row, Col } from "reactstrap";
import Nav from "../../components/Nav/nav";
import InnerHero from "../../components/innerHero/innerHero";
import InnerContent from "../../components/innerContent/innerContent";
import CTA from "../../components/CTA/cta";
import Footer from "../../components/Footer/footer";
import bgImage from "../img/inner-about.jpg";
import portImg from "../img/work-kd.png";

const KDFlowers = () => {
  return (
    <>
      <Head>
        <title>KD Flowers - Infused</title>
        <meta
          name="description"
          content="Check out how Infused help KD Flowers with a new website, and bring in more local clients through Google than she ever had before."
        />
      </Head>
      <Nav />
      <InnerHero
        title="KD Flowers"
        description="How we helped a local floral business skyrocket their revenue."
        bgImage={bgImage}
      />
      <InnerContent>
        <section className="work-specific">
          <Container>
            <Row>
              <Col lg="6">
                <h2>Challenge</h2>
                <p>
                  KD Flowers came to us seeking our expertise for two main
                  reason. They wanted a modern{" "}
                  <Link href="/">web design for their Niagara business</Link> to
                  professionally reflect their brand, and they wanted local
                  customers that were interested in wedding flowers and bridal
                  boutiques, to find them in Google when they searched for those
                  specific terms.
                </p>
                <h2>Solution</h2>
                <p>
                  We sat down with KD Flowers and discussed her business vision,
                  goals, design, among other items regarding her new online
                  presence. They wanted a website that was not only modern, but
                  brought in new local customers.
                </p>
              </Col>
              <Col lg="6">
                <Image className="img-fluid" src={portImg} alt="kd flowers" />
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <h2>Result</h2>
                <p>
                  We designed, built and launched KD Flowers' new modern
                  website. We also helped them with ranking locally for keywords
                  in their area, that people Google for.
                </p>
                <div className="card">
                  <ul>
                    <li>10,700 website views per month</li>
                    <li>20,000% increase in new leads in the first 6 months</li>
                    <li>5,800 new people discovering website per month</li>
                  </ul>
                </div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://kdflowers.ca"
                >
                  Click here to view website
                </a>
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

export default KDFlowers;
