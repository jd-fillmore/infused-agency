import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "reactstrap";
import clients from "../../../src/img/seo-niagara.search-engine-optimization-agency-st-catharines.png";

const Hero = () => {
  return (
    <>
      <section className="main-hero">
        <Container>
          <Row className="align-items-center">
            <Col lg="12">
              <h1 className="intro">
                Search Engine Optimization | Niagara, St. Catharines, Niagara
                Falls
              </h1>
              <h2>
                <span>Grow Your Business</span> With The Best Local SEO Agency
                in Niagara
              </h2>
              <Link href="/work">
                <button>Check Out Our Results</button>
              </Link>
              <div className="trusted pd-top-80">
                <h3>We're Trusted By</h3>
                <Image
                  className="img-fluid"
                  src={clients}
                  alt="seo niagara, best seo agency niagara, seo st catharines, search engine optimization niagara,local seo company niagara
"
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
