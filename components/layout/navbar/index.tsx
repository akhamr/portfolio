'use client';

import Link from 'next/link';
import MobileMenu from './MobileMenu';
import ThemeSwitcher from './ThemeSwitcher';

const links = [
    {
        text: 'Blog',
        url: '/blog',
    },
    {
        text: 'Projects',
        url: '/projects',
    },
    {
        text: 'About',
        url: '/about',
    },
];

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b-2 border-dashed border-gray-200 bg-white dark:border-gray-800 dark:bg-dark">
            <div className="mx-auto flex max-w-[85%] items-center justify-between py-2">
                <Link
                    href="/"
                    className="rounded px-3 py-2 text-center font-doodle text-xl font-semibold transition duration-200 ease-in-out hover:bg-zinc-300 dark:hover:bg-zinc-700"
                >
                    Akhamr.tech
                </Link>
                <div className="flex">
                    <div className="hidden md:flex">
                        {links.map((link, i) => {
                            return (
                                <Link
                                    key={i}
                                    href={link.url}
                                    className="rounded px-5 py-3 text-center text-sm font-semibold transition duration-200 ease-in-out hover:bg-zinc-300 dark:hover:bg-zinc-700"
                                >
                                    {link.text}
                                </Link>
                            );
                        })}
                    </div>
                    <div className="flex items-center space-x-3 px-3">
                        <ThemeSwitcher />
                        <MobileMenu />
                    </div>
                </div>
            </div>
        </nav>
    );
}
