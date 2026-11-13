import { projects } from "~/content/projects";
import type { Route } from "./+types/home";
import { Link } from "react-router";
import { ProjectEntry } from "~/components/projects/ProjectEntry";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main>
      <section className="max-w-5xl mx-auto px-6 sm:px-8 pt-24 pb-20">
        <p className={"mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 " 
          + "py-1.5 font-mono text-xs text-accent"}>
          <span 
            className="size-1.5 rounded-full bg-accent"
            aria-hidden="true"
          ></span>
            Open to work
        </p>
        <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight leading-[1.05]">
          Madra Adil, frontend developer.
          <span className="block text-muted">v1.0.0, looking for a team</span>
        </h1>
         
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
          Ex-courier, one year into code. React and TypeScript in Bucharest, now learning Angular and Java. Looking for my first developer role.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#projects" 
          className={"btn btn-primary"}>
            See my work <span>→</span>
          </a>
          <a>Get in touch</a>
        </div>
        <div className={"mt-10 max-w-xl overflow-x-auto rounded-lg border border-line bg-surface px-5 py-4 " + 
          "font-mono text-xs leading-loose sm:text-sm"}>
          <p>
            <span className="text-accent">
              ${" "}
            </span>
            lfg --role frontend --city bucharest
          </p>
          <p className="text-muted">
            → party: 0/1 · status: searching
            <span aria-hidden="true" className="animate-blink motion-reduce:animate-none"> ▍</span>
          </p>
        </div>
      </section>
      <section id="projects" className="max-w-5xl mx-auto px-6 sm:px-8 pb-24">
          <h2 className="text-sm font-medium text-muted">
            Projects
          </h2>
          <ol className="mt-4 border-t border-line">
            {projects.map((project) => {
              return(
                <ProjectEntry 
                  key={project.slug}
                  project={project}
                />
              )
            })}
          </ol>
      </section>
    </main>
  )
}
