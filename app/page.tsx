import Canvas from "@/components/canvas";
import { Doodle1, Doodle2 } from "@/components/doodle";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section
      id="main-content"
      className="cursor-pencil dark:cursor-pencil-dark relative flex h-full items-center justify-center pb-6 md:w-screen md:pb-0 md:pr-2.5"
    >
      <Canvas />
      <div className="flex flex-col justify-center md:flex-row md:justify-between">
        <div className="relative mb-6 hidden dark:block md:mb-0">
          <Image
            alt="doodle"
            src="default/me-dark.svg"
            priority
            width={350}
            height={350}
            className="md:w-[400px]"
          />
          <div className="absolute inset-x-0 bottom-0 stroke-[#ffd55a]/60">
            <Doodle1 />
          </div>
        </div>
        <div className="relative mb-6 dark:hidden md:mb-0">
          <Image
            alt="doodle"
            src="default/me-light.svg"
            priority
            width={350}
            height={350}
            className="md:w-[400px]"
          />
          <div className="absolute inset-x-0 bottom-0 stroke-[#9b9b9b]/60">
            <Doodle1 />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 md:ml-4 md:items-start">
          <h1 className="font-doodle mt-1 text-3xl md:text-4xl">
            It&apos;s me,
            <span className="relative">
              akha.
              <div className="absolute -left-2.5 top-4 hidden w-[6.5rem] stroke-[#ffd55a]/60 dark:block md:top-5 md:w-[7.5rem]">
                <Doodle2 />
              </div>
              <div className="absolute -left-2.5 top-4 w-[6.5rem] stroke-[#9b9b9b]/60 dark:hidden md:top-5 md:w-[7.5rem]">
                <Doodle2 />
              </div>
            </span>
            &#129300;
          </h1>
          <p className="text-md max-w-[500px] text-center md:text-left md:text-lg">
            A self-taught programmer based in Semarang. Love to explore anything
            about data analytics, and web development.
          </p>
          <p className="text-md max-w-[500px] text-center md:text-left md:text-lg">
            {"Checkout my "}
            <Link
              className="relative z-10 font-semibold underline"
              href="/projects"
            >
              past works
            </Link>
            {", or learn more "}
            <Link
              href="/about"
              className="relative z-10 font-semibold underline"
            >
              about me
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
