import { getNowPlaying } from "@/lib/hooks/use-spotify";

export const revalidate = 30;

interface SpotifyArtist {
  name: string;
}

interface SpotifyAlbumImage {
  url: string;
}

interface SpotifyAlbum {
  images: SpotifyAlbumImage[];
}

interface SpotifyItem {
  name: string;
  artists: SpotifyArtist[];
  album: SpotifyAlbum;
  external_urls: { spotify: string };
}

interface SpotifyResponse {
  is_playing: boolean;
  item: SpotifyItem | null;
}

export async function GET() {
  const res = await getNowPlaying();

  if (res.status === 204 || res.status > 400) {
    return Response.json({ isPlaying: false });
  }

  const song: SpotifyResponse = await res.json();

  if (song.item === null) {
    return Response.json({ isPlaying: false });
  }

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((a: SpotifyArtist) => a.name).join(", ");
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  return Response.json({
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  });
}
