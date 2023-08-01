import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

const Doodle1 = dynamic(() => import('@/components/doodle/Doodle1'));
const Doodle2 = dynamic(() => import('@/components/doodle/Doodle2'));

export default function Home() {
    return (
        <div className="flex h-full flex-col items-center justify-center pb-12 md:flex-row md:justify-between md:pb-0">
            <div className="relative mb-6 hidden dark:block md:mb-0">
                <Image
                    alt="doodle"
                    src="default/me-dark.svg"
                    priority
                    width={350}
                    height={350}
                    className="md:w-[400px]"
                />
                <div className="absolute inset-x-12 bottom-2 z-10">
                    <Doodle1 />
                </div>
            </div>
            <div className="relative mb-6 dark:hidden md:mb-0">
                <Image
                    alt="doodle"
                    src="default/me-light.svg"
                    priority
                    width={350}
                    height={350}
                    className="md:w-[400px]"
                />
                <div className="absolute inset-x-12 bottom-2 z-10">
                    <Doodle2 />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 md:ml-4 md:items-start">
                <h1 className="noselect mt-1 font-doodle text-3xl md:text-4xl">
                    It&apos;s me, akha. 🤔
                </h1>
                <p className="noselect text-md max-w-[500px] text-center md:text-left md:text-lg">
                    A data enthusiast based in Semarang, Indonesia. Love to
                    explore anything about data analytics and web development.
                </p>
                <p className="max-w-[500px] text-center md:text-left">
                    Checkout my{' '}
                    <Link
                        className="relative z-10 font-semibold underline"
                        href="/projects"
                    >
                        past works
                    </Link>{' '}
                    or learn more{' '}
                    <Link
                        href="/about"
                        className="relative z-10 font-semibold underline"
                    >
                        about me
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
}
