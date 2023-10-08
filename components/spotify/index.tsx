"use client";
import Link from "next/link";
import NowPlaying from "./NowPlaying";
import TopTracks from "./TopTracks";

export default function Spotify() {
    return (
        <section>
            <h2 id="playlist">
                <Link className="text-3xl" href="#playlist">
                    Playlist
                </Link>
            </h2>
            <p> This is what I&apos;m currently listening on Spotify.</p>
            <NowPlaying />
            <p>
                Most streamed songs of mine in the past 4 weeks. Here&apos;s my
                5 top tracks on Spotify, updated daily.
            </p>
            <TopTracks />
        </section>
    );
}
