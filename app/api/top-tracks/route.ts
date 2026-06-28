import { getTopTracks } from "@/lib/hooks/use-spotify";

export const revalidate = 28800;

interface SpotifyArtist {
  name: string;
}

interface SpotifyAlbumImage {
  url: string;
}

interface SpotifyAlbum {
  images: SpotifyAlbumImage[];
}

interface SpotifyTrack {
  name: string;
  artists: SpotifyArtist[];
  album: SpotifyAlbum;
  external_urls: { spotify: string };
}

interface SpotifyTopTracksResponse {
  items: SpotifyTrack[];
}

interface Track {
  artist: string;
  cover: string;
  songUrl: string;
  title: string;
}

export async function GET() {
  const res = await getTopTracks();
  const { items }: SpotifyTopTracksResponse = await res.json();

  const tracks: Track[] = items.map((track: SpotifyTrack) => ({
    artist: track.artists.map((a: SpotifyArtist) => a.name).join(", "),
    cover: track.album.images[0].url,
    songUrl: track.external_urls.spotify,
    title: track.name,
  }));

  return Response.json(tracks);
}
