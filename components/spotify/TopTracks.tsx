import Image from "next/image";
import Link from "next/link";

const NO_COVER = "/default/no-cover.png";

type TopTracksProps = {
    tracks: {
        artist: string;
        cover: string;
        songUrl: string;
        title: string;
    }[];
};

export default function TopTracks({ tracks }: TopTracksProps) {
    return tracks.length ? (
        <div className="flex flex-col gap-3">
            {tracks.map(({ songUrl, cover, title, artist }, idx) => (
                <Link
                    key={"tracks-" + idx}
                    href={songUrl || "#"}
                    style={{ textDecoration: "none" }}
                >
                    <div className="flex h-[100px] items-center gap-3 rounded-md border-2 border-dashed border-gray-200 p-2 hover:bg-zinc-300 dark:border-gray-800 dark:hover:bg-zinc-700">
                        <strong className="ml-1 whitespace-nowrap">
                            {idx + 1}.
                        </strong>
                        <Image
                            className="rounded-md"
                            src={cover || NO_COVER}
                            alt={title}
                            height={80}
                            width={80}
                        />
                        <div className="flex flex-col justify-center gap-1">
                            <h5 className="m-0 line-clamp-1 font-bold">
                                {title}
                            </h5>
                            <p className="m-0 line-clamp-1 text-sm font-normal md:text-base">
                                {artist}
                            </p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    ) : null;
}
