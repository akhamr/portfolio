import Link from "next/link";
import MobileMenu from "./mobile-menu";
import ThemeToggler from "./theme-toggler";

const links = [
    {
        text: "Blog",
        url: "/blog",
    },
    {
        text: "Projects",
        url: "/projects",
    },
    {
        text: "About",
        url: "/about",
    },
];

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b-2 border-dashed border-gray-200 bg-white dark:border-gray-800 dark:bg-zinc-950">
            <div className="mx-auto flex max-w-[85%] items-center justify-between py-2">
                <Link
                    href="/"
                    className="rounded px-2.5 py-1.5 font-doodle text-xl font-semibold transition duration-200 ease-in-out md:hover:bg-zinc-100 dark:md:hover:bg-zinc-800"
                >
                    Akhamr!
                </Link>
                <div className="flex">
                    <div className="hidden space-x-3 md:flex">
                        {links.map((link, i) => (
                            <Link
                                key={i}
                                href={link.url}
                                className="rounded px-3 py-2.5 text-sm font-semibold transition duration-200 ease-in-out hover:bg-zinc-100 dark:hover:bg-zinc-800"
                            >
                                {link.text}
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center space-x-3 pl-5 pr-2.5">
                        <ThemeToggler />
                        <MobileMenu />
                    </div>
                </div>
            </div>
        </nav>
    );
}
