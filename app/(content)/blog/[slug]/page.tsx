import "katex/dist/katex.min.css";

import { getFiles, getPostBySlug } from "@/lib/hooks/use-postlib";
import type { Metadata } from "next";
import Link from "next/link";
const day = require("dayjs");

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { frontmatter } = await getPostBySlug(params.slug);

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      images: frontmatter.image,
    },
  };
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { body, frontmatter } = await getPostBySlug(params.slug);

  return (
    <section className="max-w-screen-md md:px-12">
      <h1 className="text-pretty text-4xl md:text-6xl">{frontmatter.title}</h1>
      <p className="my-4">{frontmatter.description}</p>
      <div className="flex items-center text-sm text-muted-foreground">
        <p>
          <Link href="/about" className="font-bold text-foreground">
            Akha
          </Link>
          {" / "}
          {day(frontmatter.date).format("MMM DD, YYYY")}
        </p>
        <p className="ml-auto">
          {`${frontmatter.readingTime.text} • ${frontmatter.readingTime.words} word(s)`}
        </p>
      </div>
      <hr className="my-4 border-t-2 border-dashed" />
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
