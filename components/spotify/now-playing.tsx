"use client";
import ripple from "@/public/default/ripple.json";
import Lottie from "lottie-react";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

export default function NowPlaying() {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data, isLoading } = useSWR("/api/now-playing", fetcher);

  return !isLoading ? (
    <Link
      target={data?.isPlaying ? "_blank" : undefined}
      href={data?.isPlaying ? data?.songUrl : "#playlist"}
      className="font-normal no-underline"
    >
      <div className="content flex h-[100px] justify-between gap-3 p-2">
        <div className="flex gap-3">
          {data?.isPlaying ? (
            <Image
              className="rounded-md"
              src={data?.albumImageUrl}
              alt={data?.title}
              height={80}
              width={80}
            />
          ) : (
            <div className="grid h-[80px] w-[80px] place-items-center rounded-md bg-border">
              <span className="p-4 text-center text-sm text-muted-foreground">
                No Cover
              </span>
            </div>
          )}
          <div className="flex flex-col justify-center gap-1">
            {data?.isPlaying ? (
              <>
                <h5 className="m-0 line-clamp-1">{data?.title}</h5>
                <p className="m-0 line-clamp-1 text-sm text-muted-foreground md:text-base">
                  {data?.artist}
                </p>
              </>
            ) : (
              <h5 className="m-0">Not listening to anything</h5>
            )}
          </div>
        </div>
        {data?.isPlaying && <Lottie animationData={ripple} />}
      </div>
    </Link>
  ) : (
    <div className="h-[100px] rounded-lg border-2 bg-muted p-2">
      <div className="flex animate-pulse items-center gap-3">
        <div className="h-[80px] w-[80px] rounded-md bg-secondary"></div>
        <div className="flex flex-col justify-center gap-3">
          <div className="h-6 w-40 rounded bg-secondary md:w-64"></div>
          <div className="h-5 w-28 rounded bg-secondary md:w-48"></div>
        </div>
      </div>
    </div>
  );
}
