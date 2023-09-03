import { NextResponse } from "next/server";
import { getNowPlaying } from "@/hooks/Spotify";

export async function GET() {
    const res = await getNowPlaying();

    if (res.status === 204 || res.status > 400) {
        return NextResponse.json(
            { isPlaying: false },
            {
                headers: {
                    "content-type": "application/json",
                    "cache-control":
                        "public, s-maxage=60, stale-while-revalidate=30",
                },
            }
        );
    }

    const song = await res.json();

    if (song.item === null) {
        return NextResponse.json(
            { isPlaying: false },
            {
                headers: {
                    "content-type": "application/json",
                    "cache-control":
                        "public, s-maxage=60, stale-while-revalidate=30",
                },
            }
        );
    }

    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists
        .map((_artist: any) => _artist.name)
        .join(", ");
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    return NextResponse.json(
        {
            albumImageUrl,
            artist,
            isPlaying,
            songUrl,
            title,
        },
        {
            status: 200,
            headers: {
                "content-type": "application/json",
                "cache-control":
                    "public, s-maxage=60, stale-while-revalidate=30",
            },
        }
    );
}
