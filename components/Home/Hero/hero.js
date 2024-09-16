import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import video from "../../../public/img/video.mp4";

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
                  Niagara Web Design | Web Design Niagara | Website Developer
                  St. Catharines
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h2>
                  <span>Improve Your Sales</span> With Our Web Design Niagara
                  Solutions
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <p>
                  Get More Leads, Better Your Credibility &amp; Get More Sales
                  with our Niagara Web Design and SEO Firm.
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
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Hero;
