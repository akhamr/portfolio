import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Providers from "@/components/providers";
import { cn } from "@/lib/utils";
import { bimbo, della, doodle, nunito } from "@/styles/font";
import "@/styles/global.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { SocialProfileJsonLd } from "next-seo";

export const metadata: Metadata = {
  metadataBase: new URL("https://akhamr.dev"),
  title: {
    template: "%s · Akhamr!",
    default: "It's me, akha!",
  },
  description:
    "My personal blog and portfolio website built with passion and a lot of stress.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          nunito.className,
          della.variable,
          doodle.variable,
          bimbo.variable
        )}
      >
        <SocialProfileJsonLd
          useAppDir={true}
          type="Person"
          name="Akha"
          url={process.env.BASE_URL!}
          sameAs={[
            "https://linkedin.com/in/akhamr/",
            "https://instagram.com/akhamrr",
          ]}
        />
        <SpeedInsights />
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
