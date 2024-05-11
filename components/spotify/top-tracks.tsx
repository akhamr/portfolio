"use client";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

const NO_COVER = "/default/no-cover.png";

export default function TopTracks() {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data, isLoading } = useSWR("/api/top-tracks", fetcher);

  return (
    <div className="flex flex-col gap-3.5">
      {!isLoading
        ? data?.map((track: any, idx: number) => (
            <Link
              target="_blank"
              key={idx}
              href={track.songUrl || "#"}
              className="font-normal no-underline"
            >
              <div className="content flex h-[100px] items-center gap-3 px-3 py-2">
                <strong>#{idx + 1}</strong>
                <Image
                  className="rounded-md"
                  src={track.cover || NO_COVER}
                  alt={track.title}
                  height={80}
                  width={80}
                  style={{ width: 80, height: 80 }}
                />
                <div className="flex flex-col justify-center gap-1">
                  <h5 className="m-0 line-clamp-1">{track.title}</h5>
                  <p className="m-0 line-clamp-1 text-sm text-muted-foreground md:text-base">
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
              <div className="flex animate-pulse items-center gap-3">
                <strong className="text-muted-foreground">#{i + 1}</strong>
                <div className="h-[80px] w-[80px] rounded-md bg-secondary"></div>
                <div className="flex flex-col justify-center gap-3">
                  <div className="h-6 w-40 rounded bg-secondary md:w-64"></div>
                  <div className="h-5 w-28 rounded bg-secondary md:w-48"></div>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
}
