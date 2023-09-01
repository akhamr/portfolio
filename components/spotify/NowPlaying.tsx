import Image from "next/image";
import Link from "next/link";

const NO_COVER = "/default/no-cover.png";

export type NowPlayingProps = {
    albumImageUrl?: string;
    artist?: string;
    isPlaying: boolean;
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
        <Link href={songUrl || "#"} style={{ textDecoration: "none" }}>
            <div className="relative flex gap-3 rounded-md border-2 border-dashed border-gray-200 p-2 hover:bg-zinc-300 dark:border-gray-800 dark:hover:bg-zinc-700">
                <Image
                    className="rounded-md"
                    src={albumImageUrl || NO_COVER}
                    alt={title || "Not listening to anything"}
                    height={80}
                    width={80}
                />
                <div className="z-10 flex flex-col justify-center gap-1">
                    {isPlaying ? (
                        <>
                            <h5 className="m-0 line-clamp-1 font-bold">
                                {title}
                            </h5>
                            <p className="m-0 line-clamp-1 text-sm font-normal md:text-base">
                                {artist}
                            </p>
                        </>
                    ) : (
                        "Not listening to anything"
                    )}
                </div>
            </div>
        </Link>
    );
}
