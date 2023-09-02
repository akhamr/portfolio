import "@/styles/global.css";
import type { Metadata } from "next";
import { doodle, sans, footer } from "@/styles/fonts";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/Footer";
import Providers from "@/components/layout/Provider";

export const metadata: Metadata = {
    title: {
        template: "%s · Akhamr.tech",
        default: "It's me, akha!",
    },
    description:
        "Trying my best to build a portfolio website with just curiosity and lot of stress.",
    openGraph: {
        type: "website",
        images: [
            {
                url: "default/og.png",
                width: 300,
            },
        ],
    },
};

// Motion page bugged

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
            <body className="flex h-full flex-col justify-between">
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
