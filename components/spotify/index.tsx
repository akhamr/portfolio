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
            <h2 id="now-playing">
                <Link className="text-3xl" href="#now-playing">
                    Now Playing
                </Link>
            </h2>
            <p> See what I&apos;m currently listening on spotify</p>
            <NowPlaying {...nowPlaying} />
            <p>
                Top 5 Songs I&apos;m currently listening to over the past month
            </p>
            <TopTracks tracks={topTracks.tracks} />
        </section>
    );
}
