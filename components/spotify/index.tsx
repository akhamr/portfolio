"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import NowPlaying, { NowPlayingProps } from "./NowPlaying";
import TopTracks from "./TopTracks";

export default function Spotify() {
    const [nowPlaying, setNowPlaying] = useState<NowPlayingProps>({
        isPlaying: false,
    });

    const [topTracks, setTopTracks] = useState({ tracks: [] });

    useEffect(() => {
        fetch("/api/now-playing").then(async (res) => {
            setNowPlaying(await res.json());
        });
        fetch("/api/top-tracks").then(async (res) => {
            setTopTracks(await res.json());
        });
    }, []);

    return (
        <section>
            <h2 id="playlist">
                <Link className="text-3xl" href="#playlist">
                    Playlist
                </Link>
            </h2>
            <p> See what I&apos;m currently listening on Spotify</p>
            <NowPlaying {...nowPlaying} />
            <p>
                Most streamed songs of mine in the past 4 weeks. Here&apos;s my
                5 top tracks on Spotify update daily.
            </p>
            <TopTracks tracks={topTracks.tracks} />
        </section>
    );
}
