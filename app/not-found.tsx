"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const path = usePathname();
  return (
    <div className="prose flex h-full flex-col items-center justify-center space-y-2 dark:prose-invert">
      <h1 className="mb-2 text-8xl">4😢4</h1>
      <h5 className="font-semibold">
        The page <code>{path}</code> does not exist.
      </h5>
      <Link href="/">Back to home.</Link>
    </div>
  );
}
