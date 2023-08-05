import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Mamam',
};

export default function Project() {
    return (
        <div className="flex h-full flex-col items-center justify-center">
            <p className="text-5xl font-bold tracking-tight">Ini Projects!</p>
        </div>
    );
}
