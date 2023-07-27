import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="flex h-full flex-col justify-center">
            <div className="flex w-full flex-col items-center md:flex-row md:justify-between">
                <Image
                    alt="doodle"
                    src="/me.svg"
                    priority
                    width={300}
                    height={400}
                    className="hidden dark:block md:w-[400px]"
                />
                <Image
                    alt="doodle"
                    src="/me-light.svg"
                    priority
                    width={300}
                    height={400}
                    className="dark:hidden md:w-[400px]"
                />
                <div className="flex flex-col items-center justify-center space-y-4 md:ml-4 md:items-start">
                    <h1 className="noselect mt-1 font-doodle text-3xl md:text-4xl">
                        It&apos;s me, akha. 🤔
                    </h1>
                    <p className="noselect text-md max-w-[500px] text-center md:text-left md:text-lg">
                        A data enthusiast based in Semarang, Indonesia. Love to
                        explore anything about web developing and data
                        analytics.
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
        </div>
    );
}
