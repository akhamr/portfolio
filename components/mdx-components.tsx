"use client";
import { IconCopied, IconCopy } from "@/components/icons";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import Image, { ImageProps } from "next/image";
import { ComponentProps, useRef, useState } from "react";
import { Props } from "react-embed-gist";
const ReactEmbedGist = dynamic(() => import("react-embed-gist"), {
  ssr: false,
});

interface QuoteProps {
  author: string;
  quote: string;
  books?: string;
}

interface GistProps extends Props {
  alt: string;
}

// Hanya untuk tabel dengan ukuran 10 baris dan 1 keterangan

export function Gist({ gist, alt, file }: GistProps) {
  return (
    <div className="my-5 flex flex-col">
      <div className="h-[292px]">
        <ReactEmbedGist
          gist={gist}
          titleClass="hidden"
          loadingClass="h-full animate-pulse rounded-md border-2 border-dashed border-gray-200 bg-zinc-100 text-transparent dark:border-gray-800 dark:bg-zinc-800"
          file={file}
        />
      </div>
      <p className="m-0 self-center pt-4 text-sm italic">{alt}</p>
    </div>
  );
}

export function Img({ alt, ...props }: ImageProps) {
  return (
    <div className="my-5 flex flex-col items-center">
      <Image
        alt={alt}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNMqwcAAVEA58giG6IAAAAASUVORK5CYII="
        {...props}
      />
      <p className="m-0 pt-4 text-sm italic">{alt}</p>
    </div>
  );
}

export function Quote({ author, quote, books }: QuoteProps) {
  return (
    <blockquote>
      <p className="m-0 p-0">{quote}</p>
      <div>
        {` — ${author}`}
        {books && `, ${books}`}
      </div>
    </blockquote>
  );
}

export function Hr() {
  return (
    <div className="flex h-2 items-center justify-center">
      <span className="pb-0.5 pl-4 text-4xl tracking-[16px]">·····</span>
    </div>
  );
}

export function Pre({ children, className, ...props }: ComponentProps<"pre">) {
  const textInput = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    setCopied(true);
    if (textInput.current !== null && textInput.current.textContent !== null)
      navigator.clipboard.writeText(textInput.current.textContent);
    setTimeout(() => {
      setCopied(false);
    }, 800);
  };

  return (
    <div ref={textInput} className="relative">
      <pre className={cn("max-h-64", className)} {...props}>
        {children}
      </pre>
      <button
        aria-label="Copy code"
        type="button"
        className="absolute bottom-2 right-2 rounded bg-gray-300 p-2 dark:bg-gray-700"
        onClick={onCopy}
      >
        {copied ? <IconCopied /> : <IconCopy />}
      </button>
    </div>
  );
}
