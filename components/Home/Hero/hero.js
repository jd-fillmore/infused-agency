import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "reactstrap";
import clients from "../../../src/img/digital-marketing-seo-niagara-agency-clients.png";

const Hero = () => {
  return (
    <>
      <section className="main-hero">
        <Container>
          <Row className="align-items-center">
            <Col lg="12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <h1 className="intro">
                  Digital Marketing Niagara | SEO Niagara Agency | Web Design
                  Niagara
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h2>
                  <span>Grow Your Business</span> With Our Digital Marketing,
                  SEO &amp; Website Solutions
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <p>
                  Get More Leads, Better Your Credibility &amp; Get More Sales
                  with our Niagara Digital Marketing, SEO &amp; Lead-Generating
                  Website Design Firm.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <Link href="/work">
                  <button>Check Out Our Work</button>
                </Link>
              </motion.div>
              <div className="trusted pd-top-80">
                <h3>We're Trusted By</h3>
                <Image
                  className="img-fluid"
                  src={clients}
                  alt="digital marketing agency niagara, seo niagara"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Hero;
