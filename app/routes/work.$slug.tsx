import type{ Route } from "./+types/work.$slug"
import { projects } from "~/content/projects"; 
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";


export default function ProjectDetails({params}: Route.ComponentProps) {
    const destinationProject = projects.find((project) => project.slug === params.slug)

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
                <ArrowLeft size={16} aria-hidden="true" /> All rojects
            </Link>
            <h1>{destinationProject.title}</h1>
        </main>
    )
}