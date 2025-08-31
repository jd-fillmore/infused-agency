import React from "react";
import { useState } from "react";
import { getLatestPosts } from "../../lib/posts";
import { Col, Container, Row } from "reactstrap";
import { format } from "date-fns";
import "react-accessible-accordion/dist/fancy-example.css";
import Head from "next/head";
import Nav from "../../../components/Nav/nav";
import Hero from "../../../components/Home/Hero/hero";
import Footer from "../../../components/Footer/footer";

import Link from "next/link";
import Image from "next/image";
import infused from "../../../src/img/solar-seo-services-chandler.png";
import check from "../../../src/img/check.png";
import reviews from "../../../src/img/seo-for-solar-business-chandler.png";
import delta from "../../../src/img/solar-seo-agency-chandler.jpg";
import data1 from "../../../src/img/seo-services-for-solar-companies-chandler.png";

const Home = ({ latestPosts }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <Head>
        <title>
          #1 SEO for Chandler, AZ Solar Companies | Solar SEO Agency & Services
        </title>
        <meta
          name="description"
          content="Helping solar installers, renewable energy businesses, and solar companies in Chandler grow their leads and sales with expert local SEO services."
        />
        <meta
          name="google-site-verification"
          content="VK8okfPDhG2ziQHXaOAh2Nerc_pVe6vR9pcCp1WtSW8"
        />

        <meta property="og:site_name" content="Infused Agency" />
        <link
          rel="canonical"
          href="https://infused.agency/seo/for-solar-companies-chandler"
        />
      </Head>
      <Nav />
      <section className="chandler-solar seo-city-hero">
        <Container>
          <Row className="align-items-center">
            <Col lg="12">
              <h1 className="intro">
                Chandler SEO for Solar Companies – Your Local Solar SEO Agency
              </h1>
              <h2>
                Grow Your Solar Business and Attract More Leads Across Chandler
              </h2>
              <p>
                Infused Agency is a trusted solar SEO agency in Chandler,
                helping solar companies, installers, and renewable energy
                businesses increase their online visibility and generate more
                qualified leads. Our team develops custom SEO strategies for
                solar companies in Chandler, designed to improve search engine
                rankings, drive targeted traffic, and convert visitors into real
                inquiries. Whether you’re a solar business in{" "}
                <Link href="/seo/for-solar-companies-chandler">Chandler</Link>{" "}
                or surrounding areas, we'll help your solar company get more
                visibility.
              </p>

              <Link href="/get-a-quote">
                <button>Get A Free Quote</button>
              </Link>
              <br />
              <br />
              <div className="max-w-xl mx-auto">
                {isExpanded && (
                  <p className="mt-2">
                    <h2>
                      Infused Agency: Expert SEO Services for Solar Companies in
                      Chandler
                    </h2>
                    <p>
                      We provide tailored solar SEO services in Chandler for new
                      and established solar businesses, installers, and energy
                      providers. Our focus is on delivering measurable results
                      that generate leads and maximize ROI. This is what sets us
                      apart from other local SEO agencies.
                    </p>

                    <h2>About Chandler, Arizona</h2>
                    <p>
                      Chandler, Arizona, is a thriving city in the Phoenix
                      metropolitan area and a hotspot for solar energy adoption.
                      From the vibrant downtown district and Price Corridor tech
                      hub to family-friendly neighborhoods like Ocotillo, Fulton
                      Ranch, Andersen Springs, and Sun Groves, homeowners and
                      businesses are turning to solar as a way to cut energy
                      costs and embrace renewable living. With more than 300
                      days of sunshine each year, Chandler provides the perfect
                      setting for solar companies to connect with customers
                      eager to invest in sustainable energy solutions. Across
                      communities such as Cooper Commons, Arden Park, Clemente
                      Ranch, and Provinces, demand for solar panel installation,
                      battery backup systems, and long-term maintenance
                      continues to grow. Whether it’s residential solar projects
                      for new housing developments or large-scale commercial
                      installations for local businesses, Chandler offers solar
                      companies tremendous opportunities to expand their reach.
                      At Infused Agency, we help you seize that opportunity with
                      Chandler SEO strategies built for solar businesses. Our
                      proven approach increases your visibility in local
                      searches, attracts qualified leads, and ensures your
                      company stands out as a trusted solar provider in one of
                      Arizona’s most competitive renewable energy markets.
                    </p>

                    <h2>
                      SEO Services Tailored for Solar Companies in Chandler
                    </h2>
                    <p>
                      Our team of experienced Chandler solar SEO specialists
                      offers a full range of services, including website audits,
                      keyword research, content optimization, and link-building.
                      Every strategy is custom-built for your business goals,
                      ensuring you attract high-intent leads and drive qualified
                      inquiries.
                    </p>
                    <p>
                      Whether you’re a small solar installer or a large
                      renewable energy company, our SEO services for solar
                      companies in Chandler put your business in front of the
                      right audience.
                    </p>

                    <h2>Why Hiring a Chandler Solar SEO Agency Matters</h2>
                    <p>
                      Managing SEO on your own can waste time and cost
                      opportunities. Effective SEO requires technical know-how,
                      ongoing content creation, and staying up to date with
                      Google’s evolving algorithms.
                    </p>
                    <p>
                      A professional SEO agency for solar companies in Chandler
                      like Infused Agency applies proven frameworks, advanced
                      keyword research, and data-driven strategies. Unlike
                      generic tools, we understand the solar industry and how
                      potential customers search for solar installers and solar
                      services in Chandler.
                    </p>
                    <p>
                      Effective SEO goes beyond rankings. It’s about creating
                      content that builds trust, engages visitors, and drives
                      conversions. That’s why our approach emphasizes expert SEO
                      copywriting for solar companies, ensuring your website
                      speaks both to search engines and the homeowners or
                      businesses seeking solar solutions.
                    </p>

                    <h2>
                      Why Infused Agency Is the Best Choice for Solar SEO in
                      Chandler
                    </h2>
                    <p>
                      We’re not just another marketing company. Infused Agency
                      is a dedicated Chandler solar SEO agency focused on
                      helping local solar businesses succeed. Every campaign is
                      custom-built — no cookie-cutter templates, no guesswork.
                    </p>
                    <p>
                      We combine technical SEO, white-hat link strategies,
                      optimized content, and local targeting to help your solar
                      company rise in search results. From refining your Google
                      Business Profile to creating location-specific content for
                      Chandler neighborhoods, our strategies are designed for
                      sustainable growth and long-term visibility.
                    </p>
                    <p>
                      Partnering with Infused Agency means working with a team
                      invested in your success. We help solar companies generate
                      more inquiries, improve conversions, and grow their
                      business with data-driven SEO for solar companies in
                      Chandler.
                    </p>
                  </p>
                )}

                <a
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="home-top-web">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <h2>
                Our Chandler Solar Company SEO Clients <span>Get Results</span>
              </h2>
            </div>
          </div>
          <section className="work">
            <Row className="pd-top-40">
              <Col lg="12">
                <h3>Delta Energy Solutions</h3>
                <hr />
                <Image
                  className="img-fluid"
                  style={{ width: "100%", height: "auto" }}
                  src={delta}
                  alt="SEO Solar Agency Chandler, solar seo services Chandler, seo for solar businesses Chandler, seo services for solar companies Chandler, seo for solar company Chandler"
                />
                <div className="card">
                  <div className="text-center pd-btm-20">
                    <svg
                      width="125"
                      height="25"
                      viewBox="0 0 125 25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <symbol id="star" viewBox="0 0 100 100">
                          <polygon
                            fill="#e2c044"
                            points="50,8 61,38 94,38 66,58 76,90 50,71 24,90 34,58 6,38 39,38"
                          />
                        </symbol>
                      </defs>

                      <use href="#star" x="0" y="0" width="25" height="25" />
                      <use href="#star" x="25" y="0" width="25" height="25" />
                      <use href="#star" x="50" y="0" width="25" height="25" />
                      <use href="#star" x="75" y="0" width="25" height="25" />
                      <use href="#star" x="100" y="0" width="25" height="25" />
                    </svg>
                  </div>
                  <p className="w-75 text-center">
                    <em>
                      "Infused Agency completely transformed our online
                      presence. Their solar SEO services in Chandler helped our
                      company show up for the right searches, and we’ve seen a
                      steady increase in leads. If you’re looking for expert SEO
                      for solar companies in Chandler, they’re the team to
                      trust!"
                    </em>
                  </p>
                  <br />
                  <h3 class="text-center">After working with us:</h3>
                  <div className="text-center stats">
                    <h3>+670%</h3>
                    <p>Local Visibility</p>
                  </div>
                  <Image
                    className="img-fluid"
                    unoptimized
                    src={data1}
                    alt="delta energy solutions niagara seo"
                  />
                </div>
              </Col>
            </Row>
          </section>
        </div>
      </section>

      <section className="pd-top-80 text-center">
        <Container>
          <Row>
            <Col lg="12">
              <h2>
                Ready to <span>Grow Your Solar Business</span> Solar SEO in
                Chandler?
              </h2>
              <p>
                Take the first step toward more leads, higher rankings, and
                sustainable growth. Whether you’re a solar installer, renewable
                energy provider, or established solar company in Chandler, our
                tailored Chandler solar SEO services are designed to deliver
                real results for businesses in the solar industry.
              </p>
              <Link href="/get-a-quote">
                <button>Get Free Quote</button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="home-services">
        <div className="container">
          <div className="row pd-top-40">
            <div className="col-lg-12 text-center">
              <h2>Chandler SEO Services for Solar Companies</h2>
              <p>Get More Visibility</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row pd-top-40">
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Keyword Research & Strategy</h2>
                <p>
                  At Infused Agency, our Chandler solar SEO specialists start
                  every campaign with in-depth keyword research. We identify the
                  most relevant and profitable search terms that homeowners and
                  businesses use when looking for solar solutions in Chandler.
                  By analyzing your website and your competitors, we create a
                  data-driven SEO strategy designed to capture qualified traffic
                  and deliver measurable results for your solar company.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Link Building</h2>
                <p>
                  A strong backlink profile is essential for higher rankings and
                  authority. Our SEO services for solar companies in Chandler
                  include ethical, white-hat link-building strategies that earn
                  high-quality links from trusted websites. These authoritative
                  backlinks boost your domain authority, improve search engine
                  trust, and strengthen your overall online visibility.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Content Writing</h2>
                <p>
                  Content is the cornerstone of effective SEO. Our Chandler
                  content team creates engaging, SEO-friendly copy tailored
                  specifically for solar companies. From optimized landing pages
                  to educational blog posts, we develop content that reflects
                  your company’s expertise, attracts potential customers, and
                  improves rankings for targeted keywords like SEO for solar
                  companies in Chandler and solar SEO services Chandler.
                </p>
              </div>
            </div>
          </div>
          <div className="row pd-btm-80">
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>On-Page SEO</h2>
                <p>
                  Our Chandler solar SEO experts optimize your website’s
                  structure, code, and content to ensure maximum performance. We
                  conduct comprehensive audits, refine metadata, improve
                  internal linking, and enhance site usability — all while
                  aligning with Google’s ranking factors. The result is a
                  website that appeals to both search engines and your ideal
                  solar customers.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Local SEO</h2>
                <p>
                  For solar businesses in Chandler, local visibility is
                  everything. Infused Agency ensures your company is optimized
                  for local searches by improving your Google Business Profile,
                  building local citations, and creating location-specific
                  content. These strategies help you appear in Google’s Local
                  Pack, Maps, and other high-visibility areas where Chandler
                  homeowners and businesses are actively searching for solar
                  services.
                </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card">
                <h2>Technical SEO</h2>
                <p>
                  Behind every successful campaign is a strong technical
                  foundation. Our technical solar SEO specialists in Chandler
                  improve your site speed, mobile responsiveness, indexing, and
                  security. From fixing crawl errors to optimizing site
                  architecture, we make sure search engines can easily access
                  and rank your website — giving you the edge over competitors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-lighter-blue pd-top-80 pd-btm-80 text-center">
        <Container>
          <Row>
            <Col lg="12">
              <h2>
                Get <span>More Visibility</span> In Chandler With Solar SEO
                Services
              </h2>
              <p>
                Take the first step toward more leads, higher rankings, and real
                growth. Whether you’re a solar installer, renewable energy
                provider, or established solar company in Chandler, our SEO
                services are built to deliver measurable results for businesses
                in the solar industry.
              </p>
              <Link href="/get-a-quote">
                <button>Get Free Quote</button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="why pd-top-80">
        <Container>
          <Row className="text-center">
            <Col lg="12">
              <h2>
                Choosing Infused Agency as Your Chandler Solar SEO Partner
              </h2>
            </Col>
          </Row>
          <Row className="align-items-center pd-top-40 pd-btm-40">
            <Col lg="6">
              <p>
                In today’s competitive solar market, you can’t afford to work
                with just any digital marketing company. You need a team that
                understands your business goals, your unique solar services, and
                the customers you want to reach. At Infused Agency, we go beyond
                surface-level strategies — our focus is on delivering measurable
                results that generate the highest possible return on your
                investment.
              </p>
            </Col>
            <Col lg="6">
              <Image
                className="img-fluid"
                src={infused}
                alt="infused agency seo for solar businesses Chandler"
              />
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <h3>Our Approach</h3>

              <p>
                Our comprehensive SEO process — Discover, Analyze, Strategize,
                Execute, Measure, Report, and Refine — ensures that your
                campaign is continuously optimized for growth. This agile
                methodology allows us to adapt quickly to industry changes while
                keeping your solar business ahead of competitors in Chandler
                search results.
              </p>

              <h3>Supporting Solar Companies in Chandler</h3>

              <p>
                We understand the challenges solar companies face when trying to
                stand out online. That’s why we specialize in SEO for solar
                companies in Chandler — giving solar installers, renewable
                energy providers, and solar businesses the tools and strategies
                needed to gain traction in local search, attract qualified
                leads, and compete effectively in their market.
              </p>

              <p>
                With Infused Agency, you get more than just an SEO provider. You
                get a partner invested in your long-term success with tailored
                Chandler solar SEO services that build credibility, visibility,
                and sustainable growth.
              </p>
            </Col>
          </Row>
          <Row className="text-center pd-top-40">
            <Col lg="4">
              <Image
                height="50"
                src={check}
                alt="seo expert for solar companies Chandler"
              />
              <h3 className="pd-top-20">Client-Focused SEO Services</h3>
              <p>
                At Infused Agency, we treat your solar business as if it were
                our own. We focus on understanding your goals, your target
                customers, and your unique solar offerings so that every
                strategy we implement drives meaningful growth. Each client
                works with a dedicated Chandler solar SEO strategist who
                provides ongoing guidance and hands-on support to ensure your
                business attracts the right leads.
              </p>
            </Col>
            <Col lg="4">
              <Image
                height="50"
                src={check}
                alt="seo agency for solar companies Chandler"
              />
              <h3 className="pd-top-20">Continuous Optimization</h3>
              <p>
                SEO isn’t a one-off task — it’s a continuous effort. Our team
                monitors your site’s performance, tracks search trends in the
                Chandler solar market, and adapts strategies as needed. This
                approach keeps your business competitive, ensures consistent
                lead flow, and positions your solar company ahead of local
                competitors.
              </p>
            </Col>
            <Col lg="4">
              <Image
                height="50"
                src={check}
                alt="affordable seo for solar businesses Chandler"
              />
              <h3 className="pd-top-20">Affordable SEO Solutions</h3>
              <p>
                We know solar businesses of all sizes need results without
                overspending. Infused Agency offers affordable solar SEO
                services in Chandler with clear, upfront pricing. Whether you’re
                a small installer or a large solar provider, we create
                strategies that maximize ROI while staying within your budget.
              </p>
            </Col>
          </Row>
          <Row className="text-center pd-top-40">
            <Col lg="4">
              <Image
                height="50"
                src={check}
                alt="seo reporting for solar companies Chandler"
              />
              <h3 className="pd-top-20">Transparent Reporting</h3>
              <p>
                You’ll always know how your SEO efforts are performing. We
                provide easy-to-understand reports showing traffic, leads,
                rankings, and growth opportunities. Our team ensures you’re
                informed at every step, with actionable insights that make a
                real difference for your business.
              </p>
            </Col>
            <Col lg="4">
              <Image
                height="50"
                src={check}
                alt="seo optimization for solar companies Chandler"
              />
              <h3 className="pd-top-20">Backed by Google Expertise</h3>
              <p>
                Our specialists stay up to date on Google’s latest algorithms
                and best practices, specifically tuned to the solar industry in
                Chandler. By using ethical, results-driven methods, we help your
                website rank higher, attract qualified leads, and grow
                sustainably over time.
              </p>
            </Col>
            <Col lg="4">
              <Image
                height="50"
                src={check}
                alt="seo audit for solar businesses Chandler"
              />
              <h3 className="pd-top-20">Free SEO Audit</h3>
              <p>
                Curious about how your website is performing? Infused Agency
                offers a free, no-obligation SEO audit for Chandler solar
                companies. We analyze your site, uncover opportunities to
                improve visibility, and provide tailored recommendations to help
                your business generate more leads and dominate local search
                results.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="reviews">
        <Container>
          <Row className="text-center pd-top-40">
            <Col lg="12">
              <h2>Trusted Chandler Solar SEO Experts with Real Results</h2>
            </Col>
          </Row>
          <Row className="align-items-center pd-top-20">
            <Col lg="6">
              <p>
                At Infused Agency, our track record speaks for itself. We’ve
                helped numerous solar companies in Chandler boost their online
                visibility, attract qualified leads, and grow their businesses.
                Our clients consistently see measurable improvements in search
                rankings, website traffic, and customer inquiries.
                <br />
                <br />
                From small solar installers to larger renewable energy
                providers, we’ve supported businesses of all sizes in achieving
                stronger online presence and higher conversions. Every strategy
                we implement is driven by data, customized to your company’s
                goals, and focused on delivering tangible returns on investment.
                When you partner with Infused Agency, you get a trusted team
                with deep knowledge of the Chandler solar market. We combine
                technical SEO expertise, creative content strategies, and local
                market insights to help your solar business rank higher, capture
                more leads, and outperform competitors across Chandler.
              </p>
            </Col>
            <Col lg="6">
              <Image
                className="img-fluid"
                src={reviews}
                alt="seo solar companies Chandler reviews"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="home-faq">
        <Container>
          <Row className="text-center pd-btm-40">
            <Col lg="12">
              <h2>
                Frequently Asked Questions for Chandler Solar SEO Services
              </h2>
            </Col>
          </Row>

          <Row>
            <Col lg="12">
              <h3>
                What makes Chandler solar SEO services different from general
                SEO?
              </h3>
              <p>
                Our solar SEO services in Chandler are specifically designed for
                solar companies and renewable energy businesses. We understand
                the local market, homeowner search patterns, and the competitive
                landscape in Chandler. Our strategies include local citation
                building, Google Business Profile optimization, and
                location-specific content that ensures your business shows up
                when potential customers search for solar installers, solar
                panels, or renewable energy solutions in the Chandler area.
              </p>

              <h3>
                How long does it take to see results from Chandler solar SEO
                campaigns?
              </h3>
              <p>
                Most solar businesses start noticing improvements in search
                visibility within 3–6 months, with more significant results
                typically appearing between 6–12 months. Timelines depend on
                your current website performance, competition, and target
                keywords. Our proven SEO process includes continuous
                optimization and transparent reporting, so you can see
                measurable progress as we improve your rankings and lead
                generation in Chandler.
              </p>

              <h3>
                Can small solar companies compete with larger installers through
                SEO?
              </h3>
              <p>
                Absolutely! SEO for solar companies in Chandler is highly
                effective for smaller businesses because it focuses on local
                search, where even a small installer can outrank larger
                competitors. By targeting location-specific keywords like “solar
                panels Chandler” or “solar installer near me,” small businesses
                can gain visibility and attract local leads efficiently. Our
                affordable SEO solutions are designed to help solar companies of
                all sizes compete successfully in their market.
              </p>

              <h3>
                What’s included in your Chandler solar SEO audit and strategy
                development?
              </h3>
              <p>
                Our comprehensive solar SEO audit includes technical website
                analysis, keyword research focused on Chandler solar searches,
                competitor analysis, content evaluation, and local SEO
                assessment. We review your Google Business Profile, local
                citations, backlink profile, and site performance. Based on
                these insights, we create a tailored strategy that addresses
                your business’s specific challenges and opportunities in
                Chandler.
              </p>

              <h3>
                How do you measure the success of Chandler solar SEO campaigns?
              </h3>
              <p>
                We track a range of metrics to measure success for solar
                companies, including keyword rankings, organic website traffic
                growth, local visibility improvements, and, most importantly,
                lead generation and customer inquiries. Our transparent
                reporting shows you exactly which keywords are driving traffic,
                how many leads your website is attracting, and your overall ROI
                from SEO efforts.
              </p>

              <h3>
                Do you guarantee first-page rankings for Chandler solar SEO
                keywords?
              </h3>
              <p>
                While we cannot guarantee specific rankings—since search engines
                continually update their algorithms—we do guarantee a committed,
                data-driven approach to improving your visibility. Our track
                record shows consistent success helping solar companies achieve
                higher search rankings. We focus on sustainable, white-hat SEO
                strategies that build long-term visibility and lead generation.
              </p>

              <h3>
                What’s the difference between SEO and local SEO for Chandler
                solar companies?
              </h3>
              <p>
                Traditional SEO targets broad keywords and aims for national or
                global reach. Local SEO for solar companies in Chandler focuses
                on location-specific searches like “solar installer Chandler” or
                “Chandler solar panels.” This includes optimizing your Google
                Business Profile, managing local citations, generating customer
                reviews, and creating localized content. Local SEO is especially
                valuable for solar businesses looking to attract nearby
                homeowners and businesses.
              </p>

              <h3>How much do Chandler solar SEO services cost?</h3>
              <p>
                Pricing depends on your business size, competition level, and
                goals. We offer packages ranging from basic local SEO
                optimization to full-scale solar SEO strategies. Our pricing is
                transparent with no hidden fees, and each proposal is tailored
                to your business needs. Many Chandler solar companies see
                measurable ROI within the first year of investing in
                professional SEO services.
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106732.26415361956!2d-111.94639525523837!3d33.28263510466142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872a55595c22b693%3A0x386ce373138cfdf0!2sChandler%2C%20AZ%2C%20USA!5e0!3m2!1sen!2sca!4v1756649724107!5m2!1sen!2sca"
                width="100%"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="home-blog">
        <Container>
          <Row>
            <Col lg="12">
              <h2 className="title">Latest Blog Posts</h2>

              <Row>
                {latestPosts.map(({ id, date, title, excerpt, image }) => (
                  <Col lg="4" md="6" sm="12" key={id} className="mb-4">
                    <Link href={`/posts/${id}`}>
                      {image && (
                        <Image
                          src={image}
                          className="img-fluid"
                          alt={`Preview image for ${title}`}
                          width={600}
                          height={400}
                        />
                      )}
                    </Link>
                    <div className="post-card card">
                      <h3>
                        <Link href={`/posts/${id}`}>{title}</Link>
                      </h3>
                      <small>
                        {format(new Date(date), "eeee, MMMM d, yyyy")}
                      </small>
                      <p>{excerpt}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="cta home-cta">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <h2>
                Ready to <span>Grow Your Business</span>?
              </h2>
              <p>Get your free quote below!</p>

              <Link href="/get-a-quote" rel="noreferrer">
                <button>
                  Get Started
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    class="absolute left-1/2 top-1/2 translate-centered group-hover:ml-1 transition-250"
                    height="20px"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const latestPosts = getLatestPosts(3);
  return {
    props: {
      latestPosts,
    },
  };
}
