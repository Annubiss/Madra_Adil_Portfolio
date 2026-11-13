import type { Project } from "~/content/projects";
import { Link } from "react-router";

export function ProjectEntry({ project } : { project: Project }) {
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
                          <li key={stack} className="rounded-md border border-line px-2 py-1 font-mono text-xs text-muted">{stack}</li>
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
}