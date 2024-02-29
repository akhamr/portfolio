"use client";
import { useState, useRef, ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { IconCopied, IconCopy } from "@/components/icons";

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
