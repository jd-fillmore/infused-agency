import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Nav from "../../components/Nav/nav";
import InnerHero from "../../components/innerHero/innerHero";
import InnerContent from "../../components/innerContent/innerContent";
import CTA from "../../components/CTA/cta";
import Footer from "../../components/Footer/footer";

import leadGenImg from "../../src/img/lead-generating-web-design-niagara.png";
import webConvImg from "../../src/img/website-conversion-optimization-niagara.png";
import seoImg from "../../src/img/search-engine-optimization-niagara.png";

const Services = () => {
  return (
    <>
      <Head>
        <title>Areas We Serve | Infused Agency</title>
        <meta
          name="description"
          content="Check out the cities, areas and specific industries that Infused Agency serves."
        />
        <link rel="canonical" href="https://infused.agency/areas-we-serve" />
      </Head>
      <Nav />
      <InnerHero
        title="Areas We Serve"
        description=""
      />
      <InnerContent>
        <Container>
        <section className="home-areas ">
        <Container>
          <Row>
            <Col lg="12">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h2>Delivering SEO Services in Niagara:</h2>
                <Link href="/seo/beamsville">Beamsville, ON</Link> |{" "}
                <Link href="/seo/crystal-beach">Crystal Beach, ON</Link> |{" "}
                <Link href="/seo/fonthill">Fonthill, ON</Link> |{" "}
                <Link href="/seo/fort-erie">Fort Erie, ON</Link> |{" "}
                <Link href="/seo/grimsby">Grimsby, ON</Link> |{" "}
                <Link href="/">Niagara Falls, ON</Link> |{" "}
                <Link href="/">Niagara-on-the-Lake, ON</Link> |{" "}
                <Link href="/seo/port-colborne">Port Colborne, ON</Link> |{" "}
                <Link href="/">St. Catharines, ON</Link> |{" "}
                <Link href="/seo/thorold">Thorold, ON</Link> |{" "}
                <Link href="/seo/wainfleet">Wainfleet, ON</Link> |{" "}
                <Link href="/seo/welland">Welland, ON</Link>
              </motion.div>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h2>Delivering Web Design Services in Niagara To:</h2>
                <Link href="/beamsville-web-design">Beamsville, ON</Link>{" "}
                <span>|</span>{" "}
                <Link href="/crystal-beach-web-design">Crystal Beach, ON</Link>{" "}
                <span>|</span>{" "}
                <Link href="/fonthill-web-design">Fonthill, ON</Link>{" "}
                <span>|</span>{" "}
                <Link href="/fort-erie-web-design">Fort Erie, ON</Link>{" "}
                <span>|</span>{" "}
                <Link href="/grimsby-web-design">Grimsby, ON</Link>{" "}
                <span>|</span> <Link href="/">Niagara Falls, ON</Link>{" "}
                <span>|</span> <Link href="/">Niagara-on-the-Lake, ON</Link>{" "}
                <span>|</span>{" "}
                <Link href="/port-colborne-web-design">Port Colborne, ON</Link>{" "}
                <span>|</span> <Link href="/">St. Catharines, ON</Link>{" "}
                <span>|</span>{" "}
                <Link href="/thorold-web-design">Thorold, ON</Link>{" "}
                <span>|</span>{" "}
                <Link href="/wainfleet-web-design">Wainfleet, ON</Link>{" "}
                <span>|</span>{" "}
                <Link href="/web-design-welland">Welland, ON</Link>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
        </Container>
      </InnerContent>
      <CTA />
      <Footer />
    </>
  );
};

export default Services;
