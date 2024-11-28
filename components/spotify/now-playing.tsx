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
      target={data.isPlaying ? "_blank" : undefined}
      href={data.isPlaying ? data.songUrl : "#playlist"}
      className="font-normal no-underline"
    >
      <div className="content flex h-[100px] justify-between space-x-3 p-2">
        <div className="flex space-x-3">
          {data.isPlaying ? (
            <Image
              className="rounded-md"
              src={data.albumImageUrl}
              alt={data.title}
              height={80}
              width={80}
            />
          ) : (
            <div className="grid size-20 place-items-center rounded-md bg-border">
              <span className="p-4 text-center text-sm text-muted-foreground">
                No Cover
              </span>
            </div>
          )}
          <div className="flex flex-col justify-center space-y-1">
            {data.isPlaying ? (
              <>
                <h5 className="line-clamp-1">{data.title}</h5>
                <p className="line-clamp-1 text-sm text-muted-foreground md:text-base">
                  {data.artist}
                </p>
              </>
            ) : (
              <h5>Not listening to anything</h5>
            )}
          </div>
        </div>
        {data.isPlaying && <Lottie animationData={ripple} />}
      </div>
    </Link>
  ) : (
    <div className="h-[100px] rounded-lg border-2 bg-muted p-2">
      <div className="flex animate-pulse items-center space-x-3">
        <div className="size-20 rounded-md bg-secondary" />
        <div className="flex flex-col justify-center space-y-3">
          <div className="h-6 w-40 rounded bg-secondary md:w-64" />
          <div className="h-5 w-28 rounded bg-secondary md:w-48" />
        </div>
      </div>
    </div>
  );
}
