import { getAllPost } from "@/lib/hooks/use-postlib";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
const day = require("dayjs");

export const metadata: Metadata = {
  title: "Blog",
  description: "Some tech stuff and my life updates.",
};

export default async function Blog() {
  const posts = await getAllPost();
  const filteredBlogPosts = posts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return (
    <section id="blog-content">
      <h1 className="mt-4 pt-3 text-4xl md:mt-11 md:text-6xl">Blog</h1>
      <p className="mt-2">Some tech stuff and my life updates.</p>
      {filteredBlogPosts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 py-4 md:grid-cols-2">
          {filteredBlogPosts.map((frontMatter, i) => {
            return (
              <Link
                key={i}
                className="rounded"
                href={`/blog/${frontMatter.slug}`}
              >
                <div className="content">
                  <Image
                    src={frontMatter.image}
                    alt={frontMatter.title}
                    className="rounded-t"
                    width="540"
                    height="270"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNMqwcAAVEA58giG6IAAAAASUVORK5CYII="
                  />
                  <div className="rounded-b p-2">
                    <h4 className="line-clamp-1 leading-snug">
                      {frontMatter.title}
                    </h4>
                    <div className="my-1 text-xs text-muted-foreground md:text-sm">
                      {day(frontMatter.date).format("MMMM DD, YYYY")}
                      {` • ${frontMatter.readingTime.text}`}
                      {` • ${frontMatter.readingTime.words} word(s)`}
                    </div>
                    <p className="line-clamp-2 text-sm md:text-base">
                      {frontMatter.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <p className="pt-4">No blog post.</p>
      )}
    </section>
  );
}
