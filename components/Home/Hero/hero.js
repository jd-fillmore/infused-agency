import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import video from "../../../public/img/video.mp4";

const Hero = () => {
  return (
    <>
      <section className="main-hero">
        <video className="background-video" src={video} autoPlay loop muted />
        <Container>
          <Row className="align-items-center">
            <Col lg="12">
              <h1 className="intro">
                Niagara Web Design | Web Design Niagara | Website Developer St. Catharines
              </h1>
              <h2>Creating Web Design Niagara Solutions That Get More Customers <span>For Your Business</span></h2>
              <p>
                Infused Agency is an award-winning web design Niagara company that makes websites that bring in more customers.
              </p>
              <Link href="/work">
                <button>Check Out Our Work</button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Hero;
