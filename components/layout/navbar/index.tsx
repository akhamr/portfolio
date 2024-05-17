"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-50 w-full border-b-2 bg-background">
      <div className="mx-auto flex max-w-[85%] items-center justify-between py-2">
        <Button asChild>
          <Link href="/" className="font-doodle text-xl font-semibold">
            Akhamr!
          </Link>
        </Button>
        <div className="flex">
          <div className="hidden space-x-2 md:flex">
            {links.map((link, i) => (
              <Button
                key={i}
                className={pathname.startsWith(link.url) ? "bg-secondary" : ""}
                asChild
              >
                <Link href={link.url} className="px-3 py-2.5">
                  {link.text}
                </Link>
              </Button>
            ))}
          </div>
          <div className="flex items-center space-x-3 pl-4 pr-2.5">
            <ThemeToggler />
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
