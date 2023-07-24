import '@/styles/global.css';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        template: '%s · Akhamr.tech',
        default: "It's me, akha!",
    },
    description:
        'Trying my best to build a portfolio website with just curiosity and lot of stress.',
    openGraph: {
        type: 'website',
        images: [
            {
                url: '/og-default.png',
                width: 300,
            },
        ],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={nunito.className}>
            <body className="flex h-screen flex-col justify-between">
                <div id="main-content" className="mx-auto max-w-[85%] flex-1">
                    {children}
                </div>
            </body>
        </html>
    );
}
