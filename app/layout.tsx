import '@/styles/global.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

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
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
