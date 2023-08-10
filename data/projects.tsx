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
    color: "bg-yellow-300 dark:bg-yellow-800",
    url: "https://nextjs.org/",
};

const project: ProjectType[] = [
    {
        title: "Akhamr.tech",
        image: "/projects/akhamr.webp",
        description:
            "My WIP portfolio website. Built by me and only myself as part of my passion for webdev.",
        createdAt: "2023-08-10",
        technology: [
            nextjs,
            { name: "tailwindcss" },
            { name: "mdx" },
            { name: "typescript" },
        ],
        url: "https://akhamr.tech/",
        source: "https://github.com/akhamr/sinau-web",
    },
];

export default project;
