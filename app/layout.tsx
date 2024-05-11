import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Providers from "@/components/providers";
import { cn } from "@/lib/utils";
import { della, doodle, nunito } from "@/styles/font";
import "@/styles/global.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(`https://akhamr.me`),
  title: {
    template: "%s · Akhamr!",
    default: "It's me, akha!",
  },
  description:
    "My personal blog and portfolio website built with passion and a lot of stress.",
};

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(nunito.className, della.variable, doodle.variable)}>
        <Providers>
          <Navbar />
          <SpeedInsights />
          {children}
          <Analytics />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
