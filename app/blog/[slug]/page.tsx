import type { Metadata, ResolvingMetadata } from "next";
import { getFiles, getPostBySlug } from "@/hooks/PostLib";
import Link from "next/link";
const day = require("dayjs");
import Section from "@/components/Section";

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const { frontmatter } = await getPostBySlug(params?.slug);

    return {
        title: `${frontmatter.title}`,
        description: `${frontmatter.description}`,
        openGraph: {
            images: [`${frontmatter.image}`],
        },
    };
}

export default async function Post({ params }: { params: { slug: string } }) {
    const { body, frontmatter } = await getPostBySlug(params.slug);

    return (
        <Section
            id="post-content"
            className="mx-auto mb-6 flex h-full w-full max-w-3xl flex-1 flex-col pt-4 md:pt-11"
        >
            <div className="flex flex-col">
                <h1 className="mt-3 text-4xl hover:underline md:text-6xl">
                    <Link href={`/blog/${frontmatter.slug}`}>
                        {frontmatter.title}
                    </Link>
                </h1>
                <p className="mt-2">{frontmatter.description}</p>
                <div className="mt-4 flex items-center text-sm">
                    <p>
                        <Link href="/about" className="font-semibold">
                            Akha
                        </Link>{" "}
                        / {day(frontmatter.date).format("MMMM DD, YYYY")}
                    </p>
                    <p className="ml-auto">
                        {`${frontmatter.readingTime.text}`}
                        {` • ${frontmatter.readingTime.words} word(s)`}
                    </p>
                </div>
                <hr className="mb-2 mt-2 border-dashed border-gray-200 dark:border-gray-800" />
            </div>
            <div className="prose max-w-full dark:prose-dark">{body}</div>
        </Section>
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
