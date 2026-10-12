import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Image from "next/image";
import { format } from "date-fns";
import Head from "next/head";
import Link from "next/link";
import Nav from "../../../components/Nav/nav";
import PageHero from "../../../components/ui/PageHero";
import Section from "../../../components/ui/Section";
import Icon from "../../../components/ui/Icon";
import CTA from "../../../components/CTA/cta";
import Footer from "../../../components/Footer/footer";
import PageJsonLd from "../../../components/seo/PageJsonLd";
import { blogGraph } from "../../lib/verticalSeoSchema";

const postsDirectory = path.join(process.cwd(), "posts");

export default function Post({ postData }) {
  const formattedDate = format(new Date(postData.date), "eeee, MMMM d, yyyy");
  return (
    <>
      <Head>
        <title>{postData.title} | Infused Agency</title>
        <meta name="description" content={postData.excerpt} />
        <link
          rel="canonical"
          href={`https://infused.agency/posts/${postData.id}`}
        />
        <PageJsonLd
          graph={blogGraph({
            url: `/posts/${postData.id}`,
            headline: postData.title,
            description: postData.excerpt,
            datePublished: postData.date,
            image: postData.image,
          })}
        />
      </Head>
      <Nav />
      <main className="redesign-root">
        <PageHero
          title={postData.title}
          description={formattedDate}
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: postData.title },
          ]}
        />

        <Section>
          <article className="blog mx-auto max-w-3xl">
            {postData.image && (
              <div className="relative mb-10 aspect-[2/1] overflow-hidden rounded-2xl border border-border shadow-card">
                <Image
                  src={postData.image}
                  alt={postData.title}
                  fill
                  sizes="(min-width: 768px) 768px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
              >
                <Icon name="arrow-left" className="h-4 w-4" />
                Back to all articles
              </Link>
              <Link
                href="/get-a-quote"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
              >
                Get a free quote
                <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
            </div>
          </article>
        </Section>
      </main>
      <CTA />
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const fileNames = fs.readdirSync(postsDirectory);
  const paths = fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.md$/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const fullPath = path.join(postsDirectory, `${params.id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  // Convert date to string for serialization
  const date = matterResult.data.date ? matterResult.data.date.toString() : "";

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      postData: {
        id: params.id,
        contentHtml,
        ...matterResult.data,
        date, // Ensure date is a string
      },
    },
  };
}
