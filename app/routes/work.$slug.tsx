import type{ Route } from "./+types/work.$slug"
import { projects } from "~/content/projects"; 
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { BrowserFrame } from "~/components/projects/BrowserFrame";
import { useFlip } from "~/lib/flip";


export default function ProjectDetails({params}: Route.ComponentProps) {
    const destinationProject = projects.find((project) => project.slug === params.slug)
    const titleRef = useFlip<HTMLHeadingElement>(`title-${params.slug}`)
    const frameRef = useFlip<HTMLDivElement>(`frame-${destinationProject?.slug}`)

    if(!destinationProject){
        return (
            <main className="max-w-5xl mx-auto px-6 sm:px-8 pt-16">
                <h1>Project does not exist</h1>
            </main>
        )
    }
    
    return (
        <main className="max-w-5xl mx-auto px-6 sm:px-8 pt-16">
            <Link 
                to="/#projects" 
                className="inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors hover:text-foreground">
                <ArrowLeft size={16} aria-hidden="true" /> All projects
            </Link>
            <div className="mt-12 flex flex-col items-center text-center">
                <p className="mb-5 flex flex-wrap justify-center gap-2">
                        <span className="chip">
                            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                            {destinationProject.status}
                        </span>
                        <span className="chip">v{destinationProject.version}</span>
                        <span className="chip">built solo</span>
                        
                    </p>
                <h1 
                    ref={titleRef}
                    data-flip={`title-${destinationProject.slug}`}
                    className="origin-top-left text-7xl sm:text-8xl font-semibold tracking-tighter leading-none text-gradient"
                >
                    {destinationProject.title}
                </h1>
                <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted">{destinationProject.summary}</p>
            </div>

            <div className="mt-16">
                <BrowserFrame 
                    ref={frameRef}
                    flipId={`frame-${destinationProject.slug}`}
                    url={destinationProject.liveUrl ?? destinationProject.repoUrl}
                >
                    <div className="aspect-16/10 grid place-items-center font-mono text-sm text-muted">
                        [ screenshot ]
                    </div>
                </BrowserFrame>
            </div>
        </main>
    )
}