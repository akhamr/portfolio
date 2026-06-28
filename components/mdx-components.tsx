import { getImage } from "@/lib/hooks/use-placeholder";
import Image, { ImageProps } from "next/image";

interface ImgProps extends ImageProps {
  src: string;
}

interface QuoteProps {
  author: string;
  quote: string;
  books?: string;
}

export async function Img({ alt, src, width, height, ...props }: ImgProps) {
  const base64 = await getImage(src);
  const w = typeof width === "string" ? Number(width) : width;
  const h = typeof height === "string" ? Number(height) : height;
  return (
    <div className="my-5 flex flex-col items-center">
      <Image
        src={src}
        alt={alt}
        width={w ?? 768}
        height={h ?? 576}
        placeholder="blur"
        blurDataURL={base64}
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
