import { projects } from "~/content/projects";
import type { Route } from "./+types/home";
import { Link } from "react-router";

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
                <li
                  key={project.slug}
                  className="border-b border-line py-10 grid gap-4 sm:grid-cols-[10rem_1fr] sm:gap-8"
                >
                  <div className="text-accent font-mono">
                    <p>v{project.version}</p>
                    <p className="mt-1 text-muted">{project.year}</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-xl leading-relaxed text-muted">
                      {project.summary}
                    </p>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((stack) => {
                        return (
                          <li className="rounded-md border border-line px-2 py-1 font-mono text-xs text-muted">{stack}</li>
                        )
                      })}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
                      <Link to={`/work/${project.slug}`} className="transition-colors hover:text-accent">Case study →</Link>
                      {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-accent"
                      >
                        Live <span aria-hidden="true">↗</span>
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                      )}
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-accent"
                      >
                        Source <span aria-hidden="true">↗</span>
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
      </section>
    </main>
  )
}
