"use client";
import { Button } from "@/components/ui/button";
import { IconCopied, IconCopy } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { ComponentProps, useRef, useState } from "react";
import { Props } from "react-embed-gist";
const ReactEmbedGist = dynamic(() => import("react-embed-gist"), {
  ssr: false,
});

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
          loadingClass="h-full animate-pulse rounded-md bg-accent text-transparent"
          file={file}
        />
      </div>
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
        className="absolute bottom-3 right-3"
        onClick={onCopy}
      >
        {copied ? <IconCopied /> : <IconCopy />}
      </Button>
    </div>
  );
}
