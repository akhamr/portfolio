"use client";
import { useState, useRef, ComponentProps, Suspense } from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import { IconCopied, IconCopy } from "@/components/icons";
import Image, { ImageProps } from "next/image";
const ReactEmbedGist = dynamic(() => import("react-embed-gist"), {
    ssr: false,
});

interface QuoteProps {
    author: string;
    quote: string;
    books?: string;
}

export function Gist({ id, alt }: { id: `${string}/${string}`; alt: string }) {
    return (
        <div className="flex flex-col">
            <ReactEmbedGist
                gist={id}
                titleClass="hidden"
                loadingFallback={
                    <div className="h-[302px] animate-pulse rounded-md border-2 border-dashed border-gray-200 bg-zinc-100 dark:border-gray-800 dark:bg-zinc-800"></div>
                }
            />
            <p className="m-0 self-center text-sm italic">{alt}</p>
        </div>
    );
}

export function Img({ alt, ...props }: ImageProps) {
    return (
        <div className="flex flex-col items-center py-2">
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

export function Pre({ children, className, ...props }: ComponentProps<"pre">) {
    const textInput = useRef<HTMLDivElement>(null);
    const [copied, setCopied] = useState(false);

    const onCopy = () => {
        setCopied(true);
        if (
            textInput.current !== null &&
            textInput.current.textContent !== null
        )
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
