import type{ Route } from "./+types/work.$slug"
import { projects } from "~/content/projects"; 
import { Link } from "react-router";
import { ArrowLeft, Check } from "lucide-react";
import { BrowserFrame } from "~/components/projects/BrowserFrame";
import { useFlip } from "~/lib/flip";
import { ProjectBadges } from "~/components/projects/ProjectBadges";
import { StackChip } from "~/components/projects/StackChip";


export default function ProjectDetails({params}: Route.ComponentProps) {
    const destinationProject = projects.find((project) => project.slug === params.slug)
    const titleRef = useFlip<HTMLHeadingElement>(`title-${params.slug}`)
    const frameRef = useFlip<HTMLDivElement>(`frame-${destinationProject?.slug}`)
    const badgesRef = useFlip<HTMLParagraphElement>(`badges-${destinationProject?.slug}`)

    if(!destinationProject){
        return (
            <main className="max-w-5xl mx-auto px-6 sm:px-8 pt-16">
                <h1>Project does not exist</h1>
            </main>
        )
    }
    
    return (
        <main className="max-w-5xl mx-auto px-6 sm:px-8 pt-16 pb-24">
            <Link 
                to="/#projects" 
                className="inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors hover:text-foreground">
                <ArrowLeft size={16} aria-hidden="true" /> All projects
            </Link>
            <div className="mt-12 flex flex-col items-center text-center">
                <ProjectBadges
                    ref={badgesRef}
                    flipId={`badges-${destinationProject.slug}`}
                    project={destinationProject}
                    className="mb-5 w-fit"
                />

                <h1 
                    ref={titleRef}
                    data-flip={`title-${destinationProject.slug}`}
                    className="origin-top-left text-7xl sm:text-8xl font-semibold tracking-tighter leading-none text-gradient"
                >
                    {destinationProject.title}
                </h1>
                <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted">{destinationProject.summary}</p>

                <ul className="mt-8 flex flex-wrap justify-center gap-2">
                    {destinationProject.stack.map((technology) => 
                        <StackChip key={technology} name={technology}/>
                    )}
                </ul>

                
            </div>

            <div className="mt-16 mb-5">
                <BrowserFrame 
                    ref={frameRef}
                    flipId={`frame-${destinationProject.slug}`}
                    url={destinationProject.liveUrl ?? destinationProject.repoUrl}
                >
                    {destinationProject.demoPath || destinationProject.liveUrl && (
                        <iframe
                            src={destinationProject.demoPath ? destinationProject.demoPath : destinationProject.liveUrl}
                            title={`${destinationProject.title} live demo`}
                            loading="lazy"
                            className="w-full aspect-16/10 bg-background block"
                        ></iframe>
                    )}

                    {!destinationProject.demoPath && !destinationProject.liveUrl  && (
                        <div className="aspect-16/10 grid place-items-center font-mono text-sm text-muted">
                        [ screenshot ]
                    </div>
                    )}
                    
                </BrowserFrame>
            </div>
            <div className="mt-20 grid gap-12 md:grid-cols-2">
                {destinationProject.whatItDoes && (
                    <section>
                        <h2 className="font-mono text-accent mb-6">What it does:</h2>
                        <ul className="flex flex-col gap-4">
                            {destinationProject.whatItDoes.map((feature) =>(
                                <li key={feature} className="leading-relaxed flex items-start gap-3">
                                    <Check 
                                        size={16} 
                                        strokeWidth={2.25} 
                                        aria-hidden="true"
                                        className="text-accent shrink-0 mt-1"
                                    />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {destinationProject.howItsBuilt && (
                    <section>
                        <h2 className="font-mono text-accent mb-6">How it's built:</h2>
                        <ul className="flex flex-col gap-4">
                            {destinationProject.howItsBuilt.map((point, index) => (
                                <li key={point} className="leading-relaxed flex items-start gap-4">
                                    <span aria-hidden="true" className="font-mono text-accent mt-0.5 shrink-0" >
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}
            </div>
        </main>
    )
}