import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const Blob = dynamic(() => import('@/components/Blob'), { ssr: false });

const socials = [
    {
        name: 'Email',
        url: 'mailto:hi@wisesa.dev',
    },
    {
        name: 'Github',
        url: 'https://github.com/kelilipan',
    },
    {
        name: 'Instagram',
        url: 'https://instagram.com/anvaqta',
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/anvaqta/',
    },
    {
        name: 'Medium',
        url: 'https://svspicious.medium.com/',
    },
    {
        name: 'Polywork',
        url: 'https://timeline.wisesa.dev/',
    },
    {
        name: 'Spotify',
        url: 'https://open.spotify.com/user/21xnhzh4qf74t5t4lp2fammai',
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
                    <p>
                        Hello, my name is <b>Anvaqta Tangguh Wisesa</b>, you can
                        call me <b>Wisesa</b> or <b>Esa</b> for short. If
                        you&apos;re my school/college friend you maybe know me
                        as <b>Vaq</b> or <b>Anvaq</b>.
                    </p>
                    <p>
                        I grew up in a small village located in{' '}
                        <Link
                            className="underline"
                            href="https://www.google.com/search?q=grobogan+jawa+tengah"
                        >
                            Grobogan, Jawa Tengah
                        </Link>
                        . Graduated from{' '}
                        <Link
                            className="underline"
                            href="https://telkomuniversity.ac.id/"
                        >
                            Telkom University
                        </Link>{' '}
                        with a Bachelor&apos;s degree in Informatics (Computer
                        science) and currently working as a{' '}
                        <i>Software Engineer - Web Platform</i> (you maybe more
                        familiar with &quot;Front-end engineer&quot;) at{' '}
                        <Link
                            className="underline"
                            href="https://www.tokopedia.com"
                        >
                            Tokopedia
                        </Link>
                        . I was previously working as a Software engineer at a
                        start-up called{' '}
                        <Link
                            className="underline"
                            href="https://ketringan.com"
                        >
                            Ketringan Indonesia
                        </Link>
                        .
                    </p>
                    <p>
                        I love exploring everything related to technology. When
                        i was in college i join many community and orgs to
                        expand my knowledge, I&apos;m member of{' '}
                        <Link
                            className="underline"
                            href="https://www.instagram.com/cciunitel/?hl=en"
                        >
                            CCI-Unitel
                        </Link>
                        , part of{' '}
                        <Link
                            className="underline"
                            href="https://www.instagram.com/pramukatelu/?hl=en"
                        >
                            Pramuka Tel-U
                        </Link>
                        , and i&apos;m the (ex) lab.assistant of{' '}
                        <Link
                            className="underline"
                            href="http://ailabtelkom.github.io/"
                        >
                            Artificial Intelligence TelU
                        </Link>
                        . Also, I joined many competition such as Competitive
                        programming, UI/UX Design, and{' '}
                        <Link
                            className="underline"
                            href="https://youngster.id/news/ketringan-com-juara-di-brixgoogle-cloud-hackathon/"
                        >
                            Hackathon
                        </Link>
                        .
                    </p>
                    <p>
                        Outside of software developing thingy, I love playing
                        and{' '}
                        <Link
                            className="underline"
                            href="https://open.spotify.com/user/21xnhzh4qf74t5t4lp2fammai"
                        >
                            listening music
                        </Link>
                        .
                    </p>
                </section>
                <section>
                    <h2 id="contact">
                        <Link className="text-3xl" href="#contact">
                            Contact
                        </Link>
                    </h2>
                    <p>
                        I’m always excited to connect with everyone so please
                        don’t hesitate to{' '}
                        <Link className="underline" href="mailto:hi@wisesa.dev">
                            get in touch
                        </Link>{' '}
                        with me by following my social media bellow:
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
                        <Link className="underline" href="/resume">
                            read my resume here
                        </Link>
                        . Anyway, thanks for visiting my profile :)
                    </p>
                </section>
            </div>
        </section>
    );
}
