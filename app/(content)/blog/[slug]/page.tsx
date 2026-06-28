import "katex/dist/katex.min.css";

import { getFiles, getPostBySlug } from "@/lib/hooks/use-postlib";
import dayjs from "dayjs";
import type { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const { frontmatter } = await getPostBySlug(params.slug);

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      images: frontmatter.image,
    },
  };
}

export default async function Post(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const { body, frontmatter } = await getPostBySlug(params.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description: frontmatter.description,
    image: [frontmatter.image],
    datePublished: frontmatter.date,
    author: {
      "@type": "Person",
      name: "Akha",
    },
    url: process.env.BASE_URL! + "/blog/" + params.slug,
  };

  return (
    <section className="max-w-3xl space-y-4 md:mx-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="text-4xl text-pretty md:text-6xl">{frontmatter.title}</h1>
      <p>{frontmatter.description}</p>
      <div className="flex items-center text-sm text-muted-foreground">
        <p>
          <Link href="/about" className="font-bold text-foreground">
            Akha
          </Link>
          {" / "}
          {dayjs(frontmatter.date).format("MMM DD, YYYY")}
        </p>
        <p className="ml-auto">
          {`${frontmatter.readingTime.text} • ${frontmatter.readingTime.words} word(s)`}
        </p>
      </div>
      <hr className="border-t-2 border-dashed" />
      <div className="prose max-w-full dark:prose-invert">{body}</div>
    </section>
  );
}

export async function generateStaticParams() {
  const posts = await getFiles();
  return posts.map((post) => {
    const slug = post.replace(/\.mdx/, "");
    return {
      slug: slug,
    };
  });
}
