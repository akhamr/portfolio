import { getTopTracks } from "@/hooks/Spotify";

export async function GET() {
    const res = await getTopTracks();

    if (res.status > 400) {
        return Response.json(null);
    }

    const { items } = await res.json();

    const tracks = items.map((track: any) => ({
        artist: track.artists.map((_artist: any) => _artist.name).join(", "),
        cover: track.album.images[0].url,
        songUrl: track.external_urls.spotify,
        title: track.name,
    }));

    return Response.json(tracks);
}
