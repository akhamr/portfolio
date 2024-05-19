"use client";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

const NO_COVER = "/default/no-cover.png";

export default function TopTracks() {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data, isLoading } = useSWR("/api/top-tracks", fetcher);

  return (
    <div className="flex flex-col space-y-3.5">
      {!isLoading
        ? data?.map((track: any, idx: number) => (
            <Link
              target="_blank"
              key={idx}
              href={track.songUrl}
              className="font-normal no-underline"
            >
              <div className="content flex h-[100px] items-center gap-3 px-3 py-2">
                <strong>#{idx + 1}</strong>
                <Image
                  className="rounded-md"
                  src={track.cover}
                  alt={track.title}
                  height={80}
                  width={80}
                />
                <div className="flex flex-col justify-center space-y-1">
                  <h5 className="line-clamp-1">{track.title}</h5>
                  <p className="line-clamp-1 text-sm text-muted-foreground md:text-base">
                    {track.artist}
                  </p>
                </div>
              </div>
            </Link>
          ))
        : [...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-[100px] rounded-lg border-2 bg-muted px-3 py-2"
            >
              <div className="flex animate-pulse items-center space-x-3">
                <strong className="text-muted-foreground">#{i + 1}</strong>
                <div className="size-20 rounded-md bg-secondary" />
                <div className="flex flex-col justify-center space-y-3">
                  <div className="h-6 w-40 rounded bg-secondary md:w-64" />
                  <div className="h-5 w-28 rounded bg-secondary md:w-48" />
                </div>
              </div>
            </div>
          ))}
    </div>
  );
}
