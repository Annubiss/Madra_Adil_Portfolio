import type { Project } from "~/content/projects";
import { Link } from "react-router";
import { StackChip } from "./StackChip";
import { useLanguage, useLocalizedPath, useSiteText } from "~/lib/language";

export function ProjectEntry({ project } : { project: Project }) {
    const text = useSiteText();
    const language = useLanguage()
    const localizedPath = useLocalizedPath()
    
    return(
    <li
                  key={project.slug}
                  className="relative pb-11 pl-12 last:pb-8"
        >
          <span
            aria-hidden="true"
            className="size-4 rounded-full border-2 border-accent bg-background absolute left-0 ring-4 ring-accent/20"
          />      
                <div className="card px-7 py-6">
                  <p className="flex flex-wrap items-center gap-2 mb-3">
                    <span className={"text-accent font-mono text-xs bg-accent/10 border border-accent/30 " + 
                    "rounded-full px-2.5 py-1"}
                    >
                      v{project.version}
                    </span>
                    <span className="text-muted font-mono text-sm">{project.year}</span>
                  </p>

                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-xl leading-relaxed text-muted">
                      {project.summary[language]}
                    </p>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((stack) => {
                        return (
                          <StackChip key={stack} name={stack}/>
                        )
                      })}
                    </ul>
                    
                    <div className="flex flex-wrap items-center justify-between gap-4 mt-5">
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
                      <Link to={localizedPath(`/work/${project.slug}`)} className="transition-colors hover:text-accent">{text.details} →</Link>
                      {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-accent"
                      >
                        {text.live} <span aria-hidden="true">↗</span>
                        <span className="sr-only">{text.opensInNewTab}</span>
                      </a>
                      )}
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-accent"
                      >
                        {text.source} <span aria-hidden="true">↗</span>
                        <span className="sr-only">{text.opensInNewTab}</span>
                      </a>
                    </div>
                    </div>
                  </div>
                  </div>
                </li>
    )
}