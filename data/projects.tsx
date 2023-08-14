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
};

const nextjs = {
    name: "nextjs",
    color: "bg-slate-400 dark:bg-slate-700",
    url: "https://nextjs.org/",
};

const mdx = {
    name: "mdx",
    color: "bg-[#fcb32c]",
    url: "https://mdxjs.com/",
};

const tw = {
    name: "tailwindcss",
    color: "bg-[#38bdf8]",
    url: "https://tailwindcss.com/",
};

const ts = {
    name: "typescript",
    color: "bg-[#3178c6]",
    url: "https://www.typescriptlang.org/",
};

const project: ProjectType[] = [
    {
        title: "Akhamr.tech",
        image: "/projects/akhamr.webp",
        description:
            "My WIP portfolio website. Built by me and only myself as part of my passion for webdev.",
        createdAt: "2023-08-10",
        technology: [nextjs, tw, mdx, ts],
        url: "https://akhamr.tech/",
        source: "https://github.com/akhamr/sinau-web",
    },
];

export default project;
