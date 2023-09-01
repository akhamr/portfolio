import Image from "next/image";
import Link from "next/link";

const NO_COVER = "/default/no-cover.png";

export type NowPlayingProps = {
    albumImageUrl?: string;
    artist?: string;
    isPlaying: boolean | null;
    songUrl?: string;
    title?: string;
};

export default function NowPlaying({
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
}: NowPlayingProps) {
    return (
        (isPlaying != null && (
            <Link
                href={songUrl || "#playlist"}
                className="font-normal no-underline"
            >
                <div className="flex h-[100px] gap-3 rounded-md border-2 border-dashed border-gray-200 p-2 hover:bg-zinc-300 dark:border-gray-800 dark:hover:bg-zinc-700">
                    <Image
                        className="rounded-md"
                        src={albumImageUrl || NO_COVER}
                        alt={title || "Not listening to anything"}
                        height={80}
                        width={80}
                        style={{ width: 80, height: 80 }}
                    />
                    <div className="flex flex-col justify-center gap-1 text-[#202020] dark:text-gray-300">
                        {(
                            <>
                                <h5 className="m-0 line-clamp-1">{title}</h5>
                                <p className="m-0 line-clamp-1 text-sm md:text-base">
                                    {artist}
                                </p>
                            </>
                        ) || <h5 className="m-0">Not listening to anything</h5>}
                    </div>
                </div>
            </Link>
        )) || (
            <div className="h-[100px] rounded-md border-2 border-dashed border-gray-200 p-2 dark:border-gray-800">
                <div className="flex animate-pulse items-center gap-3">
                    <div className="h-[80px] w-[80px] rounded-md bg-zinc-300 dark:bg-zinc-700"></div>
                    <div className="flex flex-col justify-center gap-3">
                        <div className="h-6 w-40 rounded bg-zinc-300 dark:bg-zinc-700 md:w-64"></div>
                        <div className="h-5 w-28 rounded bg-zinc-300 dark:bg-zinc-700 md:w-48"></div>
                    </div>
                </div>
            </div>
        )
    );
}
