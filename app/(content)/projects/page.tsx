import { IconArrow, IconCode } from "@/components/ui/icons";
import projects from "@/data/projects";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
const day = require("dayjs");

export const metadata: Metadata = {
  title: "Projects",
  description: "Some collection of my past works.",
};

export default async function Projects() {
  const filteredProject = projects.sort(
    (a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt))
  );
  return (
    <section>
      <div className="space-y-2 md:space-y-4">
        <h1 className="text-4xl md:text-6xl">Projects</h1>
        <p>Some collection of my past works.</p>
      </div>
      {filteredProject.length ? (
        <div className="mt-4 space-y-6">
          {filteredProject.map((project, i) => (
            <div
              className="flex w-full flex-col rounded-lg border-2 bg-muted lg:flex-row"
              key={i}
            >
              <Image
                className="rounded-lg"
                width="489"
                height="256"
                src={project.image}
                alt={project.title}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNMqwcAAVEA58giG6IAAAAASUVORK5CYII="
              />
              <div className="flex max-w-md flex-col justify-between p-4 md:p-6">
                <div>
                  <h1 className={project.font}>{project.title}</h1>
                  <p className="py-2 text-xs text-muted-foreground md:text-sm">
                    Created at {day(project.createdAt).format("MMMM YYYY")}
                  </p>
                  <p className="text-sm md:text-base">{project.description}</p>
                  <div className="flex space-x-2 pt-3">
                    {project.technology?.map((tech, idx) => (
                      <div
                        className={cn(
                          tech.color || "bg-neutral-400",
                          "rounded-sm px-1 py-0.5 text-[10px] font-bold uppercase text-neutral-100 hover:opacity-80 md:text-xs"
                        )}
                        key={idx}
                      >
                        {tech.url ? (
                          <Link target="_blank" href={tech.url}>
                            {tech.name}
                          </Link>
                        ) : (
                          tech.name
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex space-x-4 font-bold md:text-lg">
                  {project.url && (
                    <>
                      <Link
                        target="_blank"
                        className="inline-flex items-center hover:underline"
                        href={project.url}
                      >
                        <IconArrow className="md:size-5" />
                        <p className="pl-2">Visit Project</p>
                      </Link>
                    </>
                  )}
                  {project.source && (
                    <>
                      <Link
                        target="_blank"
                        className="inline-flex items-center hover:underline"
                        href={project.source}
                      >
                        <IconCode className="md:size-5" />
                        <p className="pl-2">Source Code</p>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No project.</p>
      )}
    </section>
  );
}
