import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import Image from "next/image";

import awards from "../../src/img/awards.png";

const pages = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Solutions",
    link: "/services",
  },
  {
    id: 3,
    name: "Work",
    link: "/work",
  },
  {
    id: 6,
    name: "About",
    link: "/about",
  },
  {
    id: 7,
    name: "Blog",
    link: "/blog",
  },
  {
    id: 8,
    name: "Get A Quote",
    link: "/get-a-quote",
  },
  {
    id: 9,
    name: "Areas We Serve",
    link: "/areas-we-serve",
  },
];

const Footer = () => {
  return (
    <>
      <section className="footer">
        <Container>
          <Row>
            <Col lg="4">
              <h3>Infused Agency</h3>
              <p>
                Infused is a boutique digital marketing &amp; SEO company in St.
                Catharines, Niagara with more than 10 years of experience in web
                design, web development, WordPress, SEO and digital marketing.
              </p>
              <p>
                Follow us on{" "}
                <a
                  rel="noreferrer"
                  href="https://www.instagram.com/infusedweb/"
                  target="_blank"
                >
                  Instagram
                </a>
              </p>
              <Image
                className="img-fluid"
                src={awards}
                alt="infused agency awards"
              />
            </Col>
            <Col lg="2">
              <h3>Pages</h3>
              <ul>
                {pages.map((page) => (
                  <li key={page.id}>
                    <Link href={page.link}>{page.name}</Link>
                  </li>
                ))}
              </ul>
            </Col>
            <Col lg="3">
              <h3>Services</h3>
              <ul>
                <li>
                  <Link href="/web-design">Lead-Generating Web Design</Link>
                </li>
                <li>
                  <Link href="/seo">Search Engine Optimization</Link>
                </li>
              </ul>
            </Col>
            <Col lg="3">
              <h3>Contact</h3>
              <Link href="/get-a-quote">
                <strong>Get Free Quote</strong>
              </Link>

              <br />
              <br />
              <h3>Hours</h3>
              <ul>
                <li>Monday - 9a.m.-6p.m.</li>
                <li>Tuesday - 9a.m.-6p.m.</li>
                <li>Wednesday - 9a.m.-6p.m.</li>
                <li>Thursday - 9a.m.-6p.m.</li>
                <li>Friday - 9a.m.-6p.m.</li>
                <li>Saturday - Closed</li>
                <li>Sunday - Closed</li>
              </ul>
              <p>73 Alexandra Blvd, St. Catharines, ON L2P 1K2</p>
              <a className="phone" href="tel:(905) 933-3115">
                (905) 933-3115
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Footer;
