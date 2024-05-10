"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IconBars, IconX } from "@/components/ui/icons";
import Link from "next/link";
import { useState } from "react";

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

export default function MobileMenu() {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <DropdownMenu modal={false} open={menu} onOpenChange={setMenu}>
      <DropdownMenuTrigger className="md:hidden">
        {menu ? <IconX className="size-7" /> : <IconBars className="size-7" />}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" alignOffset={-10} sideOffset={30}>
        {links.map((link, i) => (
          <DropdownMenuItem key={i} asChild>
            <Link href={link.url}>{link.text}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
