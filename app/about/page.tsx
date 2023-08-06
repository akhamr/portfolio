import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const Blob = dynamic(() => import('@/components/Blob'), { ssr: false });

const socials = [
    {
        name: 'Email',
        url: 'mailto:hello@akhamr.tech',
    },
    {
        name: 'Github',
        url: 'https://github.com/akhamr',
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/akhamr_/',
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/akhamr/',
    },
    {
        name: 'Medium',
        url: 'https://akhamr.medium.com/',
    },
    {
        name: 'Spotify',
        url: 'https://open.spotify.com/user/21zvaib7nglwuveksfzrdvngi',
    },
];

export const metadata: Metadata = {
    title: 'About',
    description: 'Mamam',
};

export default function About() {
    return (
        <section
            id="main-content"
            className="mx-auto mb-6 flex h-full w-full max-w-3xl flex-1 flex-col pt-2"
        >
            <div className="mx-auto flex h-80 w-80 md:h-96 md:w-96">
                <Blob />
            </div>
            <div className="prose max-w-full dark:prose-dark">
                <section>
                    <h2 id="about" className="mt-4">
                        <Link className="text-3xl" href="#about">
                            About
                        </Link>
                    </h2>
                    <p className="indent-5">
                        Hello, my name is <b>Khamid Muhammad Arrazaq</b> (
                        <b>Akha</b>), an enthusiastic fresh graduate with a
                        strong passion for <i>data analytics</i> and{' '}
                        <i>full-stack development</i>.
                    </p>
                    <p className="indent-5">
                        I recently completed my studies in Mathematics at{' '}
                        <Link className="underline" href="https://uns.ac.id/">
                            Sebelas Maret University
                        </Link>
                        , where I gained a solid foundation in analytical and
                        programming abilities. Throughout my academic journey, I
                        gained hands-on experience in data manipulation,
                        statistical analysis, and data visualization using tools
                        like <b>Python</b>, <b>SQL</b>, and <b>Tableau</b>.
                    </p>
                    <p className="indent-5">
                        On the other hand, my love for technology and
                        programming led me to delve into the world of full-stack
                        development. I am skilled in front-end technologies such
                        as <b>Next.js</b> and <b>TailwindCSS</b>, as well as
                        back-end technologies like <b>Laravel</b>.
                    </p>
                    <p className="indent-5">
                        During my time as a student, I had the opportunity to
                        join internship and intensive bootcamp as part of
                        Ministry of Education{' '}
                        <Link
                            className="underline"
                            href="https://kampusmerdeka.kemdikbud.go.id/"
                        >
                            program
                        </Link>
                        , such as junior web developer intern at{' '}
                        <Link
                            className="underline"
                            href="https://www.tigaserangkai.com/"
                        >
                            PT. Tiga Serangkai
                        </Link>
                        , and data analysis participant at{' '}
                        <Link
                            className="underline"
                            href="https://www.anakbangsabisa.org/generasi-gigih/"
                        >
                            Generasi Gigih 2.0
                        </Link>
                        . These experiences allowed me to expand my knowledge,
                        and gained proficiency in data analytics and web
                        development.
                    </p>
                    <p className="indent-5">
                        Outside of programming thingy, I love playing games and
                        listening music.
                    </p>
                </section>
                <section>
                    <h2 id="contact">
                        <Link className="text-3xl" href="#contact">
                            Contact
                        </Link>
                    </h2>
                    <p className="indent-5">
                        I’m always excited to connect with everyone so please
                        don’t hesitate to reach out by following my social media
                        below:
                    </p>
                    <ul>
                        {socials.map((data, idx) => (
                            <li key={idx}>
                                <p className="my-2 truncate">
                                    {data.name} -{' '}
                                    <Link className="underline" href={data.url}>
                                        {data.url.replace('mailto:', '')}
                                    </Link>
                                </p>
                            </li>
                        ))}
                    </ul>
                    <p>
                        Also, you can{' '}
                        <Link className="underline" href="/resume.pdf">
                            read my resume here
                        </Link>
                        . Anyway, thanks for visiting my profile &#128591;
                    </p>
                </section>
            </div>
        </section>
    );
}
