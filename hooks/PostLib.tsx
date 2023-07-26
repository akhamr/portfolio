import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import Image, { ImageProps } from 'next/image';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';
const root = process.cwd();

interface QuoteProps {
    author: string;
    quote: string;
    books?: string;
}

const articlesPath = path.join(root, 'data/blog');

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
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                    rehypeSlug,
                    [rehypeAutolinkHeadings, { behavior: 'wrap' }],
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
            ...data,
        },
    };
}

export async function getAllPost() {
    const articles = fs.readdirSync(articlesPath);

    return articles.reduce((allArticles: any[], articleSlug: string) => {
        const source = fs.readFileSync(
            path.join(articlesPath, articleSlug),
            'utf-8'
        );
        const { data, content } = matter(source);

        return [
            {
                ...data,
                slug: articleSlug.replace('.mdx', ''),
                readingTime: readingTime(content),
            },
            ...allArticles,
        ];
    }, []);
}

const CustomImage = ({ alt, ...props }: ImageProps) => {
    return (
        <div className="mb-4 mt-2 text-center">
            <Image
                {...props}
                width="0"
                height="0"
                sizes="100vw"
                className="h-auto w-full"
                alt={alt}
            />
            <p className="text-sm italic">{alt}</p>
        </div>
    );
};

const CustomQuote = ({ author, quote, books }: QuoteProps) => {
    return (
        <blockquote>
            <p className="m-0 p-0">{quote}</p>
            <div>
                {` — ${author}`}
                {books ? `, ${books}` : null}
            </div>
        </blockquote>
    );
};

const MdxComponent = {
    Img: CustomImage,
    Quote: CustomQuote,
};
