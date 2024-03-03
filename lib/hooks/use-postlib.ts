import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { compileMDX } from "next-mdx-remote/rsc";
import codeTitle from "remark-code-title";
import remarkMath from "remark-math";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "@mapbox/rehype-prism";
import rehypeKatex from "rehype-katex";
import { Pre, Gist, Img, Quote, Hr } from "@/components/mdx-components";
const root = process.cwd();

const articlesPath = path.join(root, "data/blog");

export async function getFiles() {
    return fs.readdirSync(articlesPath);
}

export async function getPostBySlug(slug: string) {
    const articleDir = path.join(articlesPath, `${slug}.mdx`);
    const source = fs.readFileSync(articleDir);
    const { content, data } = matter(source);

    const a = await compileMDX({
        source: content,
        options: {
            mdxOptions: {
                remarkPlugins: [codeTitle, remarkMath],
                rehypePlugins: [
                    rehypePrism,
                    rehypeSlug,
                    [rehypeAutolinkHeadings, { behavior: "wrap" }],
                    [rehypeKatex, { output: "html" }],
                ],
            },
        },
        components: MdxComponent,
    });

    const body = a.content;

    return {
        body,
        frontmatter: {
            slug,
            title: data.title,
            description: data.description,
            date: data.date,
            image: data.image,
            readingTime: readingTime(content),
        },
    };
}

export async function getAllPost() {
    const articles = fs.readdirSync(articlesPath);

    return articles.reduce((allArticles: any[], articleSlug: string) => {
        const source = fs.readFileSync(
            path.join(articlesPath, articleSlug),
            "utf-8"
        );
        const { data, content } = matter(source);

        return [
            {
                ...data,
                slug: articleSlug.replace(".mdx", ""),
                readingTime: readingTime(content),
            },
            ...allArticles,
        ];
    }, []);
}

const MdxComponent = {
    hr: Hr,
    pre: Pre,
    Img,
    Gist,
    Quote,
};
