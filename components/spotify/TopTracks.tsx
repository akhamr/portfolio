"use client";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

const NO_COVER = "/default/no-cover.png";

export default function TopTracks() {
    const fetcher = (url: string) => fetch(url).then((r) => r.json());
    const { data, isLoading } = useSWR("/api/top-tracks", fetcher);

    return !isLoading ? (
        <div className="flex flex-col gap-3">
            {data.map((track: any, idx: number) => (
                <Link
                    key={"tracks-" + idx}
                    href={track.songUrl || "#"}
                    className="font-normal no-underline"
                >
                    <div className="flex h-[100px] items-center gap-3 rounded-md border-2 border-dashed border-gray-200 p-2 hover:bg-zinc-300 dark:border-gray-800 dark:hover:bg-zinc-700">
                        <strong>#{idx + 1}</strong>
                        <Image
                            className="rounded-md"
                            src={track.cover || NO_COVER}
                            alt={track.title}
                            height={80}
                            width={80}
                            style={{ width: 80, height: 80 }}
                        />
                        <div className="flex flex-col justify-center gap-1 text-[#202020] dark:text-gray-300">
                            <h5 className="m-0 line-clamp-1">{track.title}</h5>
                            <p className="m-0 line-clamp-1 text-sm dark:text-gray-300 md:text-base">
                                {track.artist}
                            </p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    ) : (
        <div className="flex flex-col gap-3">
            {[...Array(5)].map((x, i) => (
                <div
                    key={x}
                    className="h-[100px] rounded-md border-2 border-dashed border-gray-200 p-2 dark:border-gray-800"
                >
                    <div className="flex animate-pulse items-center gap-3">
                        <strong>#{i + 1}</strong>
                        <div className="h-[80px] w-[80px] rounded-md bg-zinc-300 dark:bg-zinc-700"></div>
                        <div className="flex flex-col justify-center gap-3">
                            <div className="h-6 w-40 rounded bg-zinc-300 dark:bg-zinc-700 md:w-64"></div>
                            <div className="h-5 w-28 rounded bg-zinc-300 dark:bg-zinc-700 md:w-48"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
