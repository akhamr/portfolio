import "@/styles/global.css";
import type { Metadata } from "next";
import { doodle, sans, footer, della } from "@/styles/fonts";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Providers from "@/components/providers";

export const metadata: Metadata = {
    metadataBase: new URL(`https://akhamr.me`),
    title: {
        template: "%s · Akhamr!",
        default: "It's me, akha!",
    },
    description:
        "My personal blog and portfolio website built with passion and a lot of stress.",
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
            className={`h-full ${doodle.variable} ${sans.variable} ${footer.variable} ${della.variable}`}
            suppressHydrationWarning
        >
            <body className="flex h-full select-none flex-col">
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
