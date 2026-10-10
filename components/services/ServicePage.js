import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Nav from "../Nav/nav";
import Footer from "../Footer/footer";
import CTA from "../CTA/cta";
import { servicePageGraph } from "../../src/lib/verticalSeoSchema";

function Proof({ items }) {
  if (!items || !items.length) return null;
  return (
    <section className="home-top-web pd-top-40">
      <Container>
        <Row className="text-center">
          <Col lg="12">
            <h2>
              Proof from <span>our work</span>
            </h2>
          </Col>
        </Row>
        <Row className="pd-top-40">
          {items.map((item) => (
            <Col lg="6" key={item.id}>
              <div className="card">
                <h3>{item.namedEntity}</h3>
                {item.metric ? <p className="stats">{item.metric}</p> : null}
                {item.quote ? <p>&ldquo;{item.quote}&rdquo;</p> : null}
                {item.person ? <p className="owner">- {item.person}</p> : null}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

function Faq({ faqs }) {
  if (!faqs || !faqs.length) return null;
  return (
    <section className="home-faq pd-top-80">
      <Container>
        <Row className="text-center pd-btm-40">
          <Col lg="12">
            <h2>Frequently Asked Questions</h2>
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            {faqs.map((f, i) => (
              <div key={i}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

function LinkList({ title, links }) {
  if (!links || !links.length) return null;
  return (
    <section className="pd-top-40">
      <Container>
        <Row>
          <Col lg="12">
            <h2>{title}</h2>
            <ul>
              {links.map((l, i) => (
                <li key={i}>
                  {l.internal && l.href.startsWith("/") ? (
                    <Link href={l.href}>{l.label}</Link>
                  ) : (
                    <a href={l.href}>{l.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

function Breadcrumbs({ crumbs }) {
  return (
    <Container>
      <Row>
        <Col lg="12">
          <nav aria-label="Breadcrumb" className="pd-top-20">
            <ol className="breadcrumbs">
              {crumbs.map((c, i) => {
                const last = i === crumbs.length - 1;
                return (
                  <li key={i}>
                    {last ? (
                      <span aria-current="page">{c.name}</span>
                    ) : (
                      <Link href={c.href}>{c.name}</Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        </Col>
      </Row>
    </Container>
  );
}

function Process({ steps }) {
  if (!steps || !steps.length) return null;
  return (
    <section className="pd-top-40">
      <Container>
        <Row className="text-center pd-btm-40">
          <Col lg="12">
            <h2>What we do</h2>
          </Col>
        </Row>
        <Row>
          {steps.map((s, i) => (
            <Col lg="6" className="d-flex" key={i}>
              <div className="card">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

function ListSection({ title, items }) {
  if (!items || !items.length) return null;
  return (
    <section className="pd-top-40">
      <Container>
        <Row>
          <Col lg="12">
            <h2>{title}</h2>
            <ul>
              {items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

function Sections({ sections }) {
  if (!sections || !sections.length) return null;
  return (
    <section className="pd-top-40">
      <Container>
        <Row>
          <Col lg="12">
            {sections.map((s, i) => (
              <div key={i}>
                <h2>{s.heading}</h2>
                {s.paragraphs &&
                  s.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

const ServicePage = ({ page }) => {
  const c = page.content;
  const graph = servicePageGraph({
    breadcrumbs: page.breadcrumbs,
    name: page.name,
    serviceType: page.group,
    url: page.canonical,
    faqs: c.faqs,
  });

  return (
    <>
      <Head>
        <title>{page.title}</title>
        <meta name="description" content={page.summary} />
        <link rel="canonical" href={page.canonical} />
        <meta property="og:site_name" content="Infused Agency" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={page.title} />
        <meta property="og:description" content={page.summary} />
        <meta property="og:url" content={page.canonical} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={page.title} />
        <meta name="twitter:description" content={page.summary} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
      </Head>
      <Nav />
      <section className="seo-city-hero text-center">
        <Container>
          <Row className="align-items-center">
            <Col lg="12">
              <h1 className="intro">{page.h1}</h1>
              <p>{c.directAnswer}</p>
              <Link href="/get-a-quote">
                <button>Get Free Quote</button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <Breadcrumbs crumbs={page.breadcrumbs} />

      <section className="pd-top-40">
        <Container>
          <Row>
            <Col lg="12">
              <h2>What it is</h2>
              <p>{c.intro}</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pd-top-40">
        <Container>
          <Row>
            <Col lg="12">
              <h2>Who it&rsquo;s for</h2>
              <p>{c.forWho}</p>
            </Col>
          </Row>
        </Container>
      </section>

      <Process steps={c.process} />
      <ListSection title="What you get" items={c.deliverables} />
      <ListSection title="How we measure results" items={c.metrics} />
      <Sections sections={c.sections} />

      <Proof items={page.proof} />
      <LinkList title={page.relatedSectionTitle} links={page.related} />
      <LinkList title={page.industrySectionTitle} links={page.industries} />
      <Faq faqs={c.faqs} />
      <CTA />
      <Footer />
    </>
  );
};

export default ServicePage;