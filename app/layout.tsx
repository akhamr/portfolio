import "@/styles/global.css";
import type { Metadata } from "next";
import { doodle, sans, footer } from "@/styles/fonts";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Providers from "@/components/providers";

export const metadata: Metadata = {
    metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
    title: {
        template: "%s · Akhamr.me",
        default: "It's me, akha!",
    },
    description:
        "My [WIP] personal blog and portfolio website built with curiosity and lot of stress.",
};

// Motion page bugged 10.16.2

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`h-full ${doodle.variable} ${sans.variable} ${footer.variable}`}
            suppressHydrationWarning
        >
            <body className="flex h-full select-none flex-col justify-between">
                <Providers>
                    <Navbar />
                    <main className="mx-auto max-w-[85%] flex-1">
                        {children}
                    </main>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
