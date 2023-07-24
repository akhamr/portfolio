import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Mamam',
};

export default function Blog() {
    return (
        <div className="flex h-full flex-col items-center justify-center">
            <p className="text-5xl font-bold tracking-tight">Coming Soon!</p>
        </div>
    );
}
