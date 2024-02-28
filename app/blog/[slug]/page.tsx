import type { Metadata } from "next";
import { getFiles, getPostBySlug } from "@/lib/hooks/use-postlib";
import Link from "next/link";
const day = require("dayjs");

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
        <section
            id="post-content"
            className="mx-auto mb-6 h-full max-w-3xl pt-4 md:pt-11"
        >
            <h1 className="mt-3 text-pretty text-4xl md:text-6xl">
                {frontmatter.title}
            </h1>
            <p className="my-4">{frontmatter.description}</p>
            <div className="flex items-center text-sm">
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
            <hr className="my-4 border-dashed border-gray-300 dark:border-gray-700" />
            <div className="prose max-w-full dark:prose-dark">{body}</div>
        </section>
    );
}

// export async function generateStaticParams() {
//     const posts = await getFiles();
//     return posts.map((post) => {
//         const slug = post.replace(/\.mdx/, "");
//         return {
//             slug: slug,
//         };
//     });
// }
