import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Akhamr!",
    description: "My personal blog and portfolio.",
    background_color: "#fff",
    theme_color: "#fff",
    display: "standalone",
    start_url: "/",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon1.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "icon2.png",
        sizes: "384x384",
        type: "image/png",
      },
    ],
  };
}
