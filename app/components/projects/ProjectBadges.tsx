import type { Project } from "~/content/projects";

export function ProjectBadges({ project, className, ref, flipId } :
    { project :Project,
      className?: string, 
      ref?: React.Ref<HTMLParagraphElement>,
      flipId?: string, 
    } ) {
    return (
        <p 
            ref={ref}
            data-flip={flipId}
            className={"origin-top-left flex flex-wrap gap-2 " + `${className ?? ""}`}
        >
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