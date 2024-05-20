import { Gist, Pre } from "@/components/code-block";
import { Hr, Img, Quote } from "@/components/mdx-components";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import fs from "node:fs";
import path from "path";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import codeTitle from "remark-code-title";
import remarkMath from "remark-math";
const root = process.cwd();

const articlesPath = path.join(root, "data/blog");

export async function getFiles() {
  return fs.readdirSync(articlesPath);
}

export async function getPostBySlug(slug: string) {
  const articleDir = path.join(articlesPath, `${slug}.mdx`);
  const source = fs.readFileSync(articleDir);
  const { content, data } = matter(source);

  // TODO : fix ts-error
  const a = await compileMDX({
    source: content,
    options: {
      mdxOptions: {
        // @ts-ignore
        remarkPlugins: [codeTitle, remarkMath],
        rehypePlugins: [
          // @ts-ignore
          rehypePrism,
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "wrap" }],
          // @ts-ignore
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
