type ProjectType = {
    title: string;
    description: string;
    createdAt: string;
    image: string | any;
    technology?: {
        name: string;
        color?: string;
        url?: string;
    }[];
    source?: string;
    url?: string;
    font: string;
};

const nextjs = {
    name: "nextjs",
    color: "bg-slate-300 dark:bg-slate-600",
    url: "https://nextjs.org/",
};

const mdx = {
    name: "mdx",
    color: "bg-amber-300 dark:bg-amber-600",
    url: "https://mdxjs.com/",
};

const tw = {
    name: "tailwindcss",
    color: "bg-sky-300 dark:bg-sky-600",
    url: "https://tailwindcss.com/",
};

const vc = {
    name: "vercel",
    color: "bg-indigo-300 dark:bg-indigo-600",
    url: "https://sdk.vercel.ai/",
};

const ai = {
    name: "openai",
    color: "bg-emerald-300 dark:bg-emerald-600",
    url: "https://platform.openai.com/",
};

const spt = {
    name: "spotify",
    color: "bg-green-300 dark:bg-green-600",
    url: "https://developer.spotify.com/",
};

const project: ProjectType[] = [
    {
        title: "Akhamr.me",
        image: "/projects/akhamr.webp",
        description:
            "My personal blog and portfolio website built with Spotify API and a lot of stress...",
        createdAt: "2023-08-10",
        technology: [nextjs, tw, mdx, spt],
        url: "https://akhamr.me/",
        source: "https://github.com/akhamr/portfolio",
        font: "font-doodle",
    },
    {
        title: "Bot-I.",
        image: "/projects/boti.webp",
        description:
            "An AI-based chatbot built with Next.js, Vercel KV, and OpenAI API.",
        createdAt: "2024-02-14",
        technology: [nextjs, tw, vc, ai],
        url: "https://boti.akhamr.me/",
        source: "https://github.com/akhamr/boti",
        font: "font-della",
    },
];

export default project;
