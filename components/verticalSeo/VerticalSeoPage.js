import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Nav from "../Nav/nav";
import Footer from "../Footer/footer";
import CTA from "../CTA/cta";
import { buildGraph } from "../../src/lib/verticalSeoSchema";

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

const VerticalSeoPage = ({ page }) => {
  const { content, vertical, province, city, geo } = page;
  const graph = buildGraph(page);
  const ruleRegulator = geo && geo.verified && geo.regulator;

  return (
    <>
      <Head>
        <title>{page.title}</title>
        <meta name="description" content={content.summary} />
        <link rel="canonical" href={page.canonical} />
        <meta property="og:site_name" content="Infused Agency" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={page.title} />
        <meta property="og:description" content={content.summary} />
        <meta property="og:url" content={page.canonical} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={page.title} />
        <meta name="twitter:description" content={content.summary} />
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
              <p>{content.directAnswer}</p>
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
              {content.intro ? <p>{content.intro}</p> : null}
            </Col>
          </Row>
        </Container>
      </section>

      {(page.kind === "pillar" || page.kind === "country") && (
        <>
          {vertical.serviceEmphasis.length ? (
            <section className="home-services pd-top-40">
              <Container>
                <Row className="pd-btm-40">
                  <Col lg="12" className="text-center">
                    <h2>Our approach for {vertical.displayName.toLowerCase()}</h2>
                  </Col>
                </Row>
                <Row>
                  {vertical.serviceEmphasis.map((s, i) => (
                    <Col lg="4" className="d-flex" key={i}>
                      <div className="card">
                        <p>{s}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Container>
            </section>
          ) : null}

          {content.localInsight ? (
            <section className="pd-top-40">
              <Container>
                <Row>
                  <Col lg="12">
                    <h2>The Canadian market</h2>
                    <p>{content.localInsight}</p>
                  </Col>
                </Row>
              </Container>
            </section>
          ) : null}

          {page.regulationRows.length ? (
            <section className="pd-top-40">
              <Container>
                <Row>
                  <Col lg="12">
                    <h2>Provincial regulation landscape</h2>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Province</th>
                          <th>Regulator</th>
                        </tr>
                      </thead>
                      <tbody>
                        {page.regulationRows.map((r, i) => (
                          <tr key={i}>
                            <td>{r.name}</td>
                            <td>
                              {r.regulator}
                              {r.note ? ` — ${r.note}` : ""}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Col>
                </Row>
              </Container>
            </section>
          ) : null}

          {page.quebecLanguageNote ? (
            <section className="pd-top-40">
              <Container>
                <Row>
                  <Col lg="12">
                    <h2>Quebec and French-language considerations</h2>
                    <p>{page.quebecLanguageNote}</p>
                  </Col>
                </Row>
              </Container>
            </section>
          ) : null}
        </>
      )}

      {page.kind === "province" && (
        <>
          {geo && geo.provinceSearchNotes ? (
            <section className="pd-top-40">
              <Container>
                <Row>
                  <Col lg="12">
                    <h2>
                      How {vertical.singular} SEO works in {province.name}
                    </h2>
                    <p>{geo.provinceSearchNotes}</p>
                  </Col>
                </Row>
              </Container>
            </section>
          ) : null}
          {content.localInsight ? (
            <section className="pd-top-40">
              <Container>
                <Row>
                  <Col lg="12">
                    <p>{content.localInsight}</p>
                  </Col>
                </Row>
              </Container>
            </section>
          ) : null}
          {ruleRegulator ? (
            <section className="pd-top-40">
              <Container>
                <Row>
                  <Col lg="12">
                    <h2>Provincial regulation</h2>
                    <p>
                      {geo.regulator}
                      {geo.advertisingRulesNote
                        ? ` — ${geo.advertisingRulesNote}`
                        : ""}
                    </p>
                  </Col>
                </Row>
              </Container>
            </section>
          ) : null}
        </>
      )}

      {page.kind === "city" && (
        <>
          {content.localInsight ? (
            <section className="pd-top-40">
              <Container>
                <Row>
                  <Col lg="12">
                    <h2>
                      How {vertical.singular} SEO works in {city.name}
                    </h2>
                    <p>{content.localInsight}</p>
                  </Col>
                </Row>
              </Container>
            </section>
          ) : null}
          {city.neighbourhoods ? (
            <section className="pd-top-40">
              <Container>
                <Row>
                  <Col lg="12">
                    <h2>Neighbourhoods and areas we cover</h2>
                    <ul>
                      {city.neighbourhoods.map((n, i) => (
                        <li key={i}>{n}</li>
                      ))}
                    </ul>
                  </Col>
                </Row>
              </Container>
            </section>
          ) : null}
          {city.majorIndustries ? (
            <section className="pd-top-40">
              <Container>
                <Row>
                  <Col lg="12">
                    <h2>Local economy</h2>
                    <p>
                      {city.name}&rsquo;s local economy leans on{" "}
                      {city.majorIndustries.join(", ")}.
                    </p>
                  </Col>
                </Row>
              </Container>
            </section>
          ) : null}
          {ruleRegulator ? (
            <section className="pd-top-40">
              <Container>
                <Row>
                  <Col lg="12">
                    <h2>Provincial rules</h2>
                    <p>
                      {geo.regulator}
                      {geo.advertisingRulesNote
                        ? ` — ${geo.advertisingRulesNote}`
                        : ""}
                    </p>
                  </Col>
                </Row>
              </Container>
            </section>
          ) : null}
          {vertical.serviceEmphasis.length ? (
            <section className="home-services pd-top-40">
              <Container>
                <Row className="pd-btm-40">
                  <Col lg="12" className="text-center">
                    <h2>What we do for {city.name} practices</h2>
                  </Col>
                </Row>
                <Row>
                  {vertical.serviceEmphasis.map((s, i) => (
                    <Col lg="4" className="d-flex" key={i}>
                      <div className="card">
                        <p>{s}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Container>
            </section>
          ) : null}
          {content.localChecklist ? (
            <section className="pd-top-40">
              <Container>
                <Row>
                  <Col lg="12">
                    <h2>Your local checklist</h2>
                    <ul>
                      {content.localChecklist.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </Col>
                </Row>
              </Container>
            </section>
          ) : null}
        </>
      )}

      {content.localChecklist && page.kind !== "city" ? (
        <section className="pd-top-40">
          <Container>
            <Row>
              <Col lg="12">
                <h2>What to get right</h2>
                <ul>
                  {content.localChecklist.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Container>
        </section>
      ) : null}

      {(page.kind === "pillar" || page.kind === "country") &&
      page.provincesIndex.length ? (
        <section className="pd-top-40">
          <Container>
            <Row>
              <Col lg="12">
                <h2>{vertical.displayName} SEO by province</h2>
                <ul>
                  {page.provincesIndex.map((p) =>
                    p.published ? (
                      <li key={p.slug}>
                        <Link href={p.href}>
                          {vertical.singular} SEO in {p.name}
                        </Link>
                      </li>
                    ) : null
                  )}
                </ul>
              </Col>
            </Row>
          </Container>
        </section>
      ) : null}

      {page.kind === "province" && page.citiesIndex.length ? (
        <section className="pd-top-40">
          <Container>
            <Row>
              <Col lg="12">
                <h2>
                  {vertical.singular} SEO in {province.name} cities
                </h2>
                <ul>
                  {page.citiesIndex.map((c) =>
                    c.published ? (
                      <li key={c.slug}>
                        <Link href={c.href}>
                          {vertical.singular} SEO in {c.name}
                        </Link>
                      </li>
                    ) : null
                  )}
                </ul>
              </Col>
            </Row>
          </Container>
        </section>
      ) : null}

      {page.legacyCities && page.legacyCities.length ? (
        <section className="pd-top-40">
          <Container>
            <Row>
              <Col lg="12">
                <h2>More cities</h2>
                <ul>
                  {page.legacyCities.map((l, i) => (
                    <li key={i}>
                      <Link href={l.href}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Container>
        </section>
      ) : null}

      <Proof items={page.proof} />
      <Faq faqs={content.faqs} />
      <LinkList title="Related services" links={page.serviceLinks} />
      <LinkList title="Related pages" links={page.links} />
      <CTA />
      <Footer />
    </>
  );
};

export default VerticalSeoPage;
