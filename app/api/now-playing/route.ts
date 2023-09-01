import { NextResponse } from "next/server";
import { getNowPlaying } from "@/hooks/Spotify";

export async function GET() {
    const res = await getNowPlaying();

    if (res.status === 204 || res.status > 400) {
        return NextResponse.json({ isPlaying: false });
    }

    const song = await res.json();

    if (song.item === null) {
        return NextResponse.json({ isPlaying: false });
    }

    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists
        .map((_artist: any) => _artist.name)
        .join(", ");
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    return NextResponse.json({
        albumImageUrl,
        artist,
        isPlaying,
        songUrl,
        title,
    });
}
