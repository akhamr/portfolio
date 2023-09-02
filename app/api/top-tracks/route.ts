import { getTopTracks } from "@/hooks/Spotify";

export async function GET() {
    const response = await getTopTracks();
    const { items } = await response.json();

    const tracks = items.map((track: any) => ({
        artist: track.artists.map((_artist: any) => _artist.name).join(", "),
        cover: track.album.images[0].url,
        songUrl: track.external_urls.spotify,
        title: track.name,
    }));

    return new Response(JSON.stringify({ tracks }), {
        status: 200,
        headers: {
            "content-type": "application/json",
            "cache-control":
                "public, s-maxage=86400, stale-while-revalidate=43200",
        },
    });
}
