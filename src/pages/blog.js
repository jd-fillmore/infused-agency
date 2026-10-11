import { format } from "date-fns";
import { getPaginatedPostsData } from "../lib/posts";
import Link from "next/link";
import Head from "next/head";
import Nav from "../../components/Nav/nav";
import PageHero from "../../components/ui/PageHero";
import Section from "../../components/ui/Section";
import Card from "../../components/ui/Card";
import Icon from "../../components/ui/Icon";
import CTA from "../../components/CTA/cta";
import Footer from "../../components/Footer/footer";

export default function Blog({ posts, currentPage, totalPages }) {
  return (
    <>
      <Head>
        <title>Infused Agency | Our Educational Blog</title>
        <meta
          name="description"
          content="Explore expert insights on web design and SEO, tailored to educate and empower clients. Discover strategies and tips to enhance your online presence and drive business growth."
        />
        <link rel="canonical" href="https://infused.agency/blog" />
      </Head>
      <Nav />
      <main className="redesign-root">
        <PageHero
          title="Blog"
          description="Educating clients on digital marketing, SEO & web design best practices."
          breadcrumbs={[{ name: "Home", href: "/" }, { name: "Blog" }]}
          cta={false}
        />

        <Section>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map(({ id, date, title, excerpt }) => (
              <Card key={id} interactive className="flex h-full flex-col">
                <small className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  {format(new Date(date), "eeee, MMMM d, yyyy")}
                </small>
                <h2 className="mt-3 font-display text-lg font-bold leading-snug text-ink">
                  <Link className="transition-colors hover:text-accent" href={`/posts/${id}`}>
                    {title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {excerpt}
                </p>
                <Link
                  href={`/posts/${id}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
                >
                  Read article
                  <Icon name="arrow-right" className="h-4 w-4" />
                </Link>
              </Card>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-center gap-3">
            {currentPage > 1 && (
              <Link
                className="inline-flex items-center rounded-lg border border-border bg-white/5 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-border-strong"
                href={`/blog?page=${currentPage - 1}`}
              >
                Previous
              </Link>
            )}
            {currentPage < totalPages && (
              <Link
                className="inline-flex items-center rounded-lg border border-border bg-white/5 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-border-strong"
                href={`/blog?page=${currentPage + 1}`}
              >
                Next
              </Link>
            )}
          </div>
        </Section>
      </main>
      <CTA />
      <Footer />
    </>
  );
}

export async function getServerSideProps({ query }) {
  const page = parseInt(query.page) || 1;
  const limit = 9;
  const { posts, total } = getPaginatedPostsData(page, limit);

  return {
    props: {
      posts,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
    },
  };
}
