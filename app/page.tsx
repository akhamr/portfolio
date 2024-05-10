import Canvas from "@/components/canvas";
import { Doodle1, Doodle2 } from "@/components/doodle";
import MeDark from "@/public/default/me-dark.svg";
import MeLight from "@/public/default/me-light.svg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section
      id="main-content"
      className="relative flex h-full cursor-pencil items-center justify-center pb-6 dark:cursor-pencil-dark md:w-screen md:pb-0 md:pr-2.5"
    >
      <Canvas />
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
        <div className="relative hidden w-[350px] place-items-center dark:grid md:w-[400px]">
          <Image alt="doodle" src={MeDark} priority />
          <Doodle1 className="absolute bottom-0 stroke-[#ffd55a]/60" />
        </div>
        <div className="relative grid w-[350px] place-items-center dark:hidden md:w-[400px]">
          <Image alt="doodle" src={MeLight} priority />
          <Doodle1 className="absolute bottom-0 stroke-[#9b9b9b]/60" />
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 md:ml-4 md:items-start">
          <h1 className="mt-1 font-doodle text-3xl md:text-4xl">
            It&apos;s me,
            <span className="relative">
              akha.
              <Doodle2 className="absolute -bottom-2 -right-4 hidden w-24 stroke-[#ffd55a]/60 dark:block md:w-28" />
              <Doodle2 className="absolute -bottom-2 -right-4 block w-24 stroke-[#9b9b9b]/60 dark:hidden md:w-28" />
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
