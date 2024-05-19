import Link from "next/link";
import NowPlaying from "./now-playing";
import TopTracks from "./top-tracks";

export default function Spotify() {
  return (
    <div>
      <h1 id="playlist">
        <Link href="#playlist">Playlist</Link>
      </h1>
      <p> This is what I&apos;m currently listening on Spotify.</p>
      <NowPlaying />
      <p>
        Most streamed songs of mine in the past 4 weeks. Here&apos;s my 5 top
        tracks on Spotify, updated daily.
      </p>
      <TopTracks />
    </div>
  );
}
