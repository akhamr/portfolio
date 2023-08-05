import dynamic from 'next/dynamic';

const Blob = dynamic(() => import('@/components/Blob'));

export default function About() {
    return (
        <div className="flex h-full flex-col items-center justify-center">
            <div className="w-96">
                <Blob />
            </div>
        </div>
    );
}
