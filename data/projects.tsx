type ProjectType = {
    title: string;
    description: string;
    createdAt: string;
    image: string | any;
    technology?: {
        name: string;
        url?: string;
    }[];
    source?: string;
    url?: string;
};

const js = {
    name: 'javascript',
};

const react = {
    name: 'react',
};

const nextjs = {
    name: 'nextjs',
    url: 'https://nextjs.org/',
};

const chakra = {
    name: 'chakra-ui',
    url: 'https://chakra-ui.com/',
};

const project: ProjectType[] = [
    {
        title: 'PkDx',
        image: '/projects/tes.png',
        description:
            'A simple pokedex opensource web apps built with react.js & typescript.',
        createdAt: '2021-12-02',
        technology: [js, react, { name: 'graphql' }, { name: 'emotion-css' }],
        url: 'https://pkdx.wisesa.dev/',
        source: 'https://github.com/kelilipan/pkdx',
    },
    {
        title: 'New Ketringan.com',
        image: '/projects/tes.png',
        description:
            'Next version ketringan.com build with Next.js & chakra-UI.',
        createdAt: '2021-01-01',
        technology: [js, react, nextjs, chakra],
        url: 'https://ketringan.com/',
    },
    {
        title: 'Artificial Intelligence Lab. Landing Page',
        image: '/projects/tes.png',
        description:
            'Next version of landing page for Artificial Intelligence Laboratory Telkom University. Made using static react & chakra-ui.',
        createdAt: '2020-08-19',
        technology: [js, react, nextjs, chakra],
        url: 'https://ailabtelkom.github.io/',
        source: 'https://github.com/ailabtelkom/ailabtelkom.github.io',
    },
    {
        title: '(OLD)Artificial Intelligence Lab. Landing Page',
        image: '/projects/tes.png',
        description:
            'First version of landing page for Artificial Intelligence Laboratory Telkom University. Made using static html and bootstrap.',
        createdAt: '2020-02-07',
        technology: [js, { name: 'jquery' }, { name: 'bootstrap' }],
        url: 'https://ailabtelkom.github.io/old-landing-page',
        source: 'https://github.com/ailabtelkom/old-landing-page',
    },
    {
        title: 'Kantin.ketringan.com App',
        image: '/projects/tes.png',
        description:
            'Kantin ketringan is a project collaboration with Assets&Logistic Telkom University and Sain Kitchen. You can order food from kantin ketringan via this app.',
        createdAt: '2020-07-09',
        technology: [js, react, chakra],
        url: 'http://kantin.ketringan.com/',
    },
    {
        title: 'ELIZA Line Chatbot',
        image: '/projects/tes.png',
        description:
            'ELIZA is an early natural language processing computer program created from 1964 to 1966 at the MIT Artificial Intelligence Laboratory by Joseph Weizenbaum and implemented using python by me.',
        createdAt: '2020-04-14',
        technology: [{ name: 'python' }, { name: 'line' }],
        url: 'https://line.me/R/ti/p/%40537amjdd',
        source: 'https://github.com/kelilipan/eliza-line-chatbot',
    },
    {
        title: 'Useful iGracias Script',
        image: '/projects/tes.png',
        description:
            'A collection of useful script to automate proccess in iGracias.',
        createdAt: '2020-01-03',
        technology: [js, { name: 'jquery' }],
        source: 'https://github.com/raisoturu/usefull-igracias-script',
    },
    {
        title: 'Quoteit! twitter bot',
        image: '/projects/tes.png',
        description:
            'Quoteitbot is a bot that generates an image based on a tweet that you mentioned using an image from unsplash.',
        createdAt: '2019-06-20',
        technology: [
            {
                name: 'python',
            },
            {
                name: 'twitter',
            },
            {
                name: 'bot',
            },
        ],
        source: 'https://github.com/svspcs/wedhus',
        url: 'https://twitter.com/Quoteitbot',
    },
    {
        title: 'Ketringan.com Web',
        image: '/projects/tes.png',
        description:
            "Ketringan is a startup based on Telkom University, focussed on how to make catering service easier and cheaper. This is the first time I become a software engineer in a startup company. In this company, I'm not only developing web apps but also helping to develop chatbot and other applications.",
        createdAt: '2019-11-12',
        technology: [js, react, { name: 'bootstrap' }, { name: 'laravel' }],
        url: 'https://ketringan.com',
    },
    {
        title: 'Inter-Fest 2019 Web',
        image: '/projects/tes.png',
        description:
            'Inter-Fest is an annual event of Telkom University School of Computing (FIF). Inter-Fest 2019 consists of several events: seminar, competition, and festival.',
        createdAt: '2019-07-11',
        technology: [js, react, { name: 'firebase' }, { name: 'bootstrap' }],
        url: 'https://interfest-client.vercel.app/',
        source: 'https://github.com/kelilipan/interfest-client',
    },
];

export default project;