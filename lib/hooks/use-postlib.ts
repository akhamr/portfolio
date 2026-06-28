import { Gist, Pre } from "@/components/code-block";
import { Hr, Img, Quote } from "@/components/mdx-components";
import rehypeCodeTitle from "@/lib/rehype-code-title";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import fs from "node:fs";
import path from "path";
import type { ReactElement } from "react";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkMath from "remark-math";
import type { PluggableList } from "unified";

const root = process.cwd();
const articlesPath = path.join(root, "data/blog");

export async function getFiles(): Promise<string[]> {
  return fs.readdirSync(articlesPath);
}

interface Frontmatter {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
  readingTime: { text: string; words: number };
}

interface PostResult {
  body: ReactElement;
  frontmatter: Frontmatter;
}

const MdxComponent = {
  hr: Hr,
  pre: Pre,
  Img,
  Gist,
  Quote,
};

const remarkPlugins = [remarkMath] as unknown as PluggableList;
const rehypePlugins = [
  rehypeKatex,
  rehypePrism,
  rehypeCodeTitle,
  rehypeSlug,
  [rehypeAutolinkHeadings, { behavior: "wrap" }],
] as unknown as PluggableList;

export async function getPostBySlug(slug: string): Promise<PostResult> {
  const articleDir = path.join(articlesPath, `${slug}.mdx`);
  const source = fs.readFileSync(articleDir, "utf-8");
  const { content, data } = matter(source);

  const { content: body } = await compileMDX<Record<string, unknown>>({
    source: content,
    options: {
      mdxOptions: {
        remarkPlugins,
        rehypePlugins,
      },
      parseFrontmatter: false,
    },
    components: MdxComponent,
  });

  return {
    body,
    frontmatter: {
      slug,
      title: data.title as string,
      description: data.description as string,
      date: data.date as string,
      image: data.image as string,
      readingTime: readingTime(content),
    },
  };
}

interface ArticleData {
  title: string;
  description: string;
  date: string;
  image: string;
  slug: string;
  readingTime: { text: string; words: number };
}

export async function getAllPost(): Promise<ArticleData[]> {
  const articles = fs.readdirSync(articlesPath);

  const allArticles: ArticleData[] = [];
  for (const articleSlug of articles) {
    const source = fs.readFileSync(
      path.join(articlesPath, articleSlug),
      "utf-8"
    );
    const { data, content } = matter(source);

    allArticles.push({
      title: data.title as string,
      description: data.description as string,
      date: data.date as string,
      image: data.image as string,
      slug: articleSlug.replace(".mdx", ""),
      readingTime: readingTime(content),
    });
  }

  return allArticles;
}
