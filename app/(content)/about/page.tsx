import Blob from "@/components/blob";
import Spotify from "@/components/spotify";
import type { Metadata } from "next";
import Link from "next/link";

const socials = [
  {
    name: "Email",
    url: "mailto:hello@akhamr.me",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/akhamr/",
  },
  {
    name: "Github",
    url: "https://github.com/akhamr",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/akhamrr",
  },
];

export const metadata: Metadata = {
  title: "About",
  description: "Hello everyone, my name is Akha.",
};

export default function About() {
  return (
    <section className="-mt-6 max-w-screen-md md:mx-12">
      <Blob />
      <div className="prose mt-4 max-w-full space-y-8 dark:prose-invert">
        <div>
          <h1 id="about">
            <Link href="#about">About</Link>
          </h1>
          <p>
            Hello, my name is <b>Khamid Muhammad Arrazaq</b> (<b>Akha</b>), an
            enthusiastic fresh graduate with a strong passion for{" "}
            <i>data analytics</i> and <i>full-stack development</i>.
          </p>
          <p>
            I recently completed my studies in Mathematics at{" "}
            <Link
              target="_blank"
              className="underline"
              href="https://uns.ac.id/"
            >
              Sebelas Maret University
            </Link>
            , where I gained a solid foundation in analytical and programming
            abilities. Throughout my academic journey, I gained hands-on
            experience in data manipulation, statistical analysis, and data
            visualization using tools like <b>Python</b>, <b>SQL</b>, and{" "}
            <b>Tableau</b>.
          </p>
          <p>
            On the other hand, my love for technology and programming led me to
            delve into the world of full-stack development. I am skilled in
            front-end technologies such as <b>Next.js</b> and <b>TailwindCSS</b>
            , as well as back-end technologies like <b>Laravel</b>.
          </p>
          <p>
            During my time as a student, I had the opportunity to join
            internship and intensive bootcamp as part of Ministry of Education{" "}
            <Link
              target="_blank"
              className="underline"
              href="https://kampusmerdeka.kemdikbud.go.id/"
            >
              program
            </Link>
            , such as junior web developer intern at{" "}
            <Link
              target="_blank"
              className="underline"
              href="https://www.tigaserangkai.com/"
            >
              PT. Tiga Serangkai
            </Link>
            , and data analysis participant at{" "}
            <Link
              target="_blank"
              className="underline"
              href="https://www.anakbangsabisa.org/generasi-gigih/"
            >
              Generasi Gigih 2.0
            </Link>
            . These experiences allowed me to expand my knowledge, and gained
            proficiency in data analytics and web development.
          </p>
          <p>
            Outside of programming thingy, I love playing games and listening
            music.
          </p>
        </div>
        <Spotify />
        <div>
          <h1 id="contact">
            <Link href="#contact">Contact</Link>
          </h1>
          <p>
            I’m always excited to connect with everyone so please don’t hesitate
            to reach out by following my social media below:
          </p>
          <ul>
            {socials.map((data, idx) => (
              <li key={idx}>
                <p className="my-2 truncate">
                  {data.name} -{" "}
                  <Link target="_blank" className="underline" href={data.url}>
                    {data.url.replace("mailto:", "")}
                  </Link>
                </p>
              </li>
            ))}
          </ul>
          <p>
            Also, you can read my resume{" "}
            <Link
              target="_blank"
              className="underline"
              href="https://drive.google.com/file/d/1j57WTKkaJFEucTQEhl7qb5ZH2zPcwsT9/view?usp=sharing"
            >
              here
            </Link>
            . Anyway, thanks for visiting my profile &#128591;
          </p>
        </div>
      </div>
    </section>
  );
}
