import Image from 'next/image';

export default function Home() {
    return (
        <div className="flex h-full flex-col items-center justify-center">
            <Image
                alt="doodle"
                src="/me.svg"
                priority
                width={400}
                height={400}
            />
        </div>
    );
}
