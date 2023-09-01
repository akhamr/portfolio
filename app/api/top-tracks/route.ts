import { NextResponse } from "next/server";
import { getTopTracks } from "@/hooks/Spotify";

export async function GET() {
    const res = await getTopTracks();
    const { items } = await res.json();

    const tracks = items.slice(0, 10).map((track: any) => ({
        artist: track.artists.map((_artist: any) => _artist.name).join(", "),
        cover: track.album.images[0].url,
        songUrl: track.external_urls.spotify,
        title: track.name,
    }));

    return NextResponse.json({ tracks });
}