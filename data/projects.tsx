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

const next = {
  name: "nextjs",
  color: "bg-slate-600",
  url: "https://nextjs.org/",
};

const mdx = {
  name: "mdx",
  color: "bg-amber-600",
  url: "https://mdxjs.com/",
};

const tw = {
  name: "tailwindcss",
  color: "bg-sky-600",
  url: "https://tailwindcss.com/",
};

const shadcn = {
  name: "shadcn/ui",
  url: "https://ui.shadcn.com/",
};

const framer = {
  name: "framer",
  color: "bg-pink-600",
  url: "https://www.framer.com/motion/",
};

const kv = {
  name: "KV",
  color: "bg-indigo-600",
  url: "https://vercel.com/docs/storage/vercel-kv",
};

const ai = {
  name: "openai",
  color: "bg-teal-600",
  url: "https://platform.openai.com/",
};

const spt = {
  name: "spotify",
  color: "bg-green-600",
  url: "https://developer.spotify.com/",
};

const auth = {
  name: "authjs",
  color: "bg-red-600",
  url: "https://authjs.dev/",
};

const drizzle = {
  name: "drizzle",
  color: "bg-yellow-600",
  url: "https://orm.drizzle.team/",
};

const postgre = {
  name: "postgresql",
  url: "https://vercel.com/docs/storage/vercel-postgres",
};

const blob = {
  name: "blob",
  color: "bg-lime-600",
  url: "https://vercel.com/docs/storage/vercel-blob",
};

const project: ProjectType[] = [
  {
    title: "Akhamr!",
    image: "/projects/akhamr.webp",
    description:
      "My personal blog and portfolio website built with Framer Motion, and Spotify API.",
    createdAt: "2023-08-10",
    technology: [next, tw, mdx, framer, spt],
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
    technology: [next, shadcn, mdx, auth, kv, ai],
    url: "https://boti.akhamr.me/",
    source: "https://github.com/akhamr/boti",
    font: "font-della",
  },
  // {
  //   title: "Lungsur",
  //   image: "/projects/lungsur.webp",
  //   description:
  //     "Simple OLX-inspired commerce built with PostgreSQL, and Vercel Blob.",
  //   createdAt: "2024-05-23",
  //   technology: [next, auth, drizzle, postgre, blob],
  //   url: "https://lungsur.akhamr.me/",
  //   source: "https://github.com/akhamr/lungsur",
  //   font: "font-ojuju uppercase",
  // },
];

export default project;
