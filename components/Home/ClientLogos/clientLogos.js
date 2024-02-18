import React from "react";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import Image from "next/image";

const ClientLogos = ({
  title,
  logoOne,
  logoTwo,
  logoThree,
  logoFour,
  logoFive,
  logoSix,
  logoSeven,
  logoEight,
  logoOneAlt,
  logoTwoAlt,
  logoThreeAlt,
  logoFourAlt,
  logoFiveAlt,
  logoSixAlt,
  logoSevenAlt,
  logoEightAlt,
}) => {
  return (
    <>
      <section className="client-logos">
        <Container>
          <Fade bottom>
            <Row className="text-center">
              <Col lg="12">
                <h2>{title}</h2>
              </Col>
            </Row>
            <Row className="text-center logos align-items-center">
              <Col lg="3">
                <Image src={logoOne} alt={logoOneAlt} />
              </Col>
              <Col lg="3">
                <Image src={logoTwo} alt={logoTwoAlt} />
              </Col>
              <Col lg="3">
                <Image src={logoThree} alt={logoThreeAlt} />
              </Col>
              <Col lg="3">
                <Image src={logoFour} alt={logoFourAlt} />
              </Col>
            </Row>
            <Row className="text-center logos align-items-center">
              <Col lg="3">
                <Image src={logoFive} alt={logoFiveAlt} />
              </Col>
              <Col lg="3">
                <Image src={logoSix} alt={logoSixAlt} />
              </Col>
              <Col lg="3">
                <Image src={logoSeven} alt={logoSevenAlt} />
              </Col>
              <Col lg="3">
                <Image src={logoEight} alt={logoEightAlt} />
              </Col>
            </Row>
          </Fade>
        </Container>
      </section>
    </>
  );
};

export default ClientLogos;
