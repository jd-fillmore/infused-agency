import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

const pages = [
  {
    id: 1,
    name: "Services",
    link: "/services",
  },
  {
    id: 2,
    name: "Work",
    link: "/work",
  },
  {
    id: 3,
    name: "Reviews",
    link: "/reviews",
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
                Infused is a boutique web design &amp; SEO company. We help
                local and non-local businesses build their credibility online,
                as well as help bring in more sales.
              </p>
              Follow us on{" "}
              <a
                rel="noreferrer"
                href="https://www.instagram.com/infusedweb/"
                target="_blank"
              >
                Instagram
              </a>
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
                  <Link href="/website-conversion-optimization">
                    Website Conversion Optimization
                  </Link>
                </li>
                <li>
                  <Link href="/niagara-seo-company">
                    Search Engine Optimization
                  </Link>
                </li>
              </ul>
            </Col>
            <Col lg="3">
              <h3>Contact</h3>
              <a
                href="https://calendly.com/infused-agency/project-discovery/"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Get Free Quote</strong>
              </a>
              {/* <br />
              <a href="mailto:hello@infused.agency">hello@infused.agency</a>
              <br /> */}
              {/* <a class="phone" href="tel:(905) 933-3115">
                (905) 933-3115
              </a>
              <p>73 Alexandra Blvd, St. Catharines, ON L2P 1K2</p> */}
            </Col>
          </Row>
          <Row>
            <Col lg="8">
              <h3>Areas Served</h3>
              <Accordion>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>SEO</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <Link href="/alliston-seo">Alliston SEO</Link>,{" "}
                    <Link href="/ancaster-seo">Ancaster SEO</Link>,{" "}
                    <Link href="/attica-seo">Attica NY SEO</Link>,{" "}
                    <Link href="/avon-seo">Avon NY SEO</Link>,{" "}
                    <Link href="/batavia-seo">Batavia NY SEO</Link>,{" "}
                    <Link href="/beamsville-seo-company">Beamsville SEO</Link>,{" "}
                    <Link href="/caledonia-seo">Caledonia SEO</Link>,{" "}
                    <Link href="/crystal-beach-seo-company">
                      Crystal Beach SEO
                    </Link>
                    , <Link href="/depew-seo">Depew NY SEO</Link>,{" "}
                    <Link href="/dundas-seo">Dundas SEO</Link>,{" "}
                    <Link href="/east-aurora-seo">East Aurora NY SEO</Link>,{" "}
                    <Link href="/fonthill-seo-company">Fonthill SEO</Link>,{" "}
                    <Link href="/fort-erie-seo-company">Fort Erie SEO</Link>,{" "}
                    <Link href="/grimsby-seo-company">Grimsby SEO</Link>,{" "}
                    <Link href="/lancaster-seo">Lancaster NY SEO</Link>,{" "}
                    <Link href="/lockport-seo">Lockport NY SEO</Link>,{" "}
                    <Link href="/niagara-seo-company">Niagara SEO</Link>,{" "}
                    <Link href="/niagara-on-the-lake-seo">
                      Niagara-on-the-Lake SEO
                    </Link>
                    , <Link href="/port-colborne-seo">Port Colborne SEO</Link>,{" "}
                    <Link href="/stoney-creek-seo">Stoney Creek SEO</Link>,{" "}
                    <Link href="/seo-st-catharines">St. Catharines SEO</Link>,{" "}
                    <Link href="/thorold-seo-company">Thorold SEO</Link>,{" "}
                    <Link href="/wainfleet-seo">Wainfleet SEO</Link>,{" "}
                    <Link href="/warsaw-seo">Warsaw NY SEO</Link>,{" "}
                    <Link href="/waterdown-seo">Waterdown SEO</Link>,{" "}
                    <Link href="/welland-seo-company">Welland SEO</Link>.
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>Web Design</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <Link href="/alliston-web-design">Alliston Web Design</Link>
                    ,{" "}
                    <Link href="/ancaster-web-design">Ancaster Web Design</Link>
                    ,{" "}
                    <Link href="/attica-web-design">Attica NY Web Design</Link>,{" "}
                    <Link href="/avon-web-design">Avon NY Web Design</Link>,{" "}
                    <Link href="/batavia-web-design">
                      Batavia NY Web Design
                    </Link>
                    ,{" "}
                    <Link href="/beamsville-web-design">
                      Beamsville Web Design
                    </Link>
                    ,{" "}
                    <Link href="/caledonia-web-design">
                      Caledonia Web Design
                    </Link>
                    ,{" "}
                    <Link href="/crystal-beach-web-design">
                      Crystal Beach Web Design
                    </Link>
                    , <Link href="/depew-web-design">Depew NY Web Design</Link>,{" "}
                    <Link href="/east-aurora-web-design">
                      East Aurora NY Web Design
                    </Link>
                    ,{" "}
                    <Link href="/fonthill-web-design">Fonthill Web Design</Link>
                    ,{" "}
                    <Link href="/fort-erie-web-design">
                      Fort Erie Web Design
                    </Link>
                    , <Link href="/grimsby-web-design">Grimsby Web Design</Link>
                    ,{" "}
                    <Link href="/web-design-hamilton">Hamilton Web Design</Link>
                    ,{" "}
                    <Link href="/lancaster-web-design">
                      Lancaster NY Web Design
                    </Link>
                    ,{" "}
                    <Link href="/lockport-web-design">
                      Lockport NY Web Design
                    </Link>
                    ,{" "}
                    <Link href="/web-design-oakville">Web Design Oakville</Link>
                    ,{" "}
                    <Link href="/port-colborne-web-design">
                      Port Colborne Web Design
                    </Link>
                    ,{" "}
                    <Link href="/stoney-creek-web-design">
                      Stoney Creek Web Design
                    </Link>
                    , <Link href="/thorold-web-design">Thorold Web Design</Link>
                    ,{" "}
                    <Link href="/wainfleet-web-design">
                      Wainfleet Web Design
                    </Link>
                    ,{" "}
                    <Link href="/warsaw-web-design">Warsaw NY Web Design</Link>,{" "}
                    <Link href="/waterdown-web-design">
                      Waterdown Web Design
                    </Link>
                    , <Link href="/web-design-welland">Welland Web Design</Link>
                    ,{" "}
                    <Link href="/ontario-arborist-tree-removal-websites">
                      Ontario Arborist Tree Removal Websites
                    </Link>
                    ,{" "}
                    <Link href="/alberta-arborist-tree-removal-websites">
                      Alberta Arborist Tree Removal Websites
                    </Link>
                    ,{" "}
                    <Link href="/british-columbia-arborist-tree-removal-websites">
                      British Columbia Arborist Tree Removal Websites
                    </Link>
                    , {""}
                    <Link href="/los-angeles-arborist-tree-removal-websites">
                      Los Angeles Arborist Tree Removal Websites
                    </Link>
                    , {""}
                    <Link href="/new-york-arborist-tree-removal-websites">
                      New York Arborist Tree Removal Websites
                    </Link>
                    , {""}
                    <Link href="/ontario-dental-medical-clinic-websites">
                      Ontario Dental Medical Clinic Websites
                    </Link>
                    .
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </Col>
            <Col lg="4">
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
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Footer;
