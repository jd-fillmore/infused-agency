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
                Infused is a boutique digital marketing &amp; SEO company with
                more than 10 years of experience in web design, web development,
                WordPress, SEO and digital marketing.
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
              <Link href="/sitemap">Sitemap</Link>

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
          <Row>
            <Col lg="12">
              <h3>Serving SEO to Businesses in Niagara since 2013</h3>
              <a href="/seo/beamsville">Beamsville, ON</a> <span>|</span>
              <a href="/seo/crystal-beach">Crystal Beach, ON</a> <span>|</span>
              <a href="/seo/fonthill">Fonthill, ON</a> <span>|</span>
              <a href="/seo/fort-erie">Fort Erie, ON</a> <span>|</span>
              <a href="/seo/grimsby">Grimsby, ON</a> <span>|</span>
              <a href="/seo/niagara-on-the-lake">
                Niagara-on-the-Lake, ON
              </a>{" "}
              <span>|</span>
              <a href="/seo/port-colborne">Port Colborne, ON</a> <span>|</span>
              <a href="/seo/thorold">Thorold, ON</a> <span>|</span>
              <a href="/seo/welland">Welland, ON</a>
            </Col>
            <Col lg="12" className="pd-top-40">
              <h3>Serving local businesses across Canada:</h3>
              <a href="/seo/for-therapists-ontario">
                SEO for Therapists Ontario
              </a>{" "}
              <span>|</span>
              <a href="/seo/for-therapists-alberta">
                SEO for Therapists Alberta
              </a>{" "}
              <span>|</span>
              <a href="/seo/for-therapists-british-columbia">
                SEO for Therapists British Columbia
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Footer;
