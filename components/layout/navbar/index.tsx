"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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
    <nav className="fixed top-0 z-10 w-full">
      <div className="border-b-2 bg-background">
        <div className="mx-auto flex max-w-[85%] items-center justify-between py-2 md:max-w-screen-xl md:px-12">
          <Link
            href="/"
            className={cn(
              buttonVariants(),
              "font-doodle text-xl font-semibold"
            )}
          >
            Akhamr!
          </Link>
          <div className="flex">
            <div className="hidden space-x-2 md:flex">
              {links.map((link, i) => (
                <Link
                  key={i}
                  className={cn(
                    buttonVariants(),
                    pathname.startsWith(link.url) ? "bg-secondary" : "",
                    "px-3 py-2.5 font-bold"
                  )}
                  href={link.url}
                >
                  {link.text}
                </Link>
              ))}
            </div>
            <div className="ml-4 flex items-center space-x-3 pr-2.5">
              <ThemeToggler />
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
      <div className="z-10 h-8 from-background dark:bg-gradient-to-b md:h-12" />
    </nav>
  );
}
