"use client";
import { Button } from "@/components/ui/button";
import { IconCopied, IconCopy } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { ComponentProps, useEffect, useRef, useState } from "react";

interface GistProps {
  gist: string;
  alt: string;
  file?: string;
}

export function Gist({ gist, alt, file }: GistProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [username, gistId] = gist.split("/");
  const scriptSrc = `https://gist.github.com/${username}/${gistId}.js${file ? `?file=${encodeURIComponent(file)}` : ""}`;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, [scriptSrc]);

  return (
    <div className="my-5 flex flex-col">
      <div
        ref={containerRef}
        className="h-73 overflow-auto rounded-md border-2 border-dashed"
      />
      <p className="m-0 self-center pt-4 text-sm italic">{alt}</p>
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
      <Button
        size="icon"
        variant="secondary"
        className="absolute right-3 bottom-3"
        onClick={onCopy}
      >
        {copied ? <IconCopied /> : <IconCopy />}
      </Button>
    </div>
  );
}
