import type { Project } from "~/content/projects";
import { useSiteText } from "~/lib/language";

export function ProjectBadges({ project, className, ref, flipId } :
    { project :Project,
      className?: string, 
      ref?: React.Ref<HTMLParagraphElement>,
      flipId?: string, 
    } ) {
        const text = useSiteText();
        const statusText = {
            live: text.statusLive,
            wip: text.statusWip,
            archived: text.statusArchived,
        };
    return (
        <p 
            ref={ref}
            data-flip={flipId}
            className={"origin-top-left flex flex-wrap gap-2 " + `${className ?? ""}`}
        >
            <span className="chip">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                {statusText[project.status]}
            </span>
            <span className="chip">
                
                v{project.version}
            </span>
            <span className="chip">{text.builtSolo}</span>
        </p>
    )

}