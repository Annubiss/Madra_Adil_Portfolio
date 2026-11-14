import type { Project } from "~/content/projects";

export function ProjectBadges({ project, className } : {project :Project, className?: string } ) {
    return (
        <p className={"flex flex-wrap gap-2 " + `${className ?? ""}`}>
            <span className="chip">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                {project.status}
            </span>
            <span className="chip">
                
                v{project.version}
            </span>
            <span className="chip">built solo</span>
        </p>
    )

}