export type ProjectStatus = "live" | "wip" | "archived"

export type Project = {
    slug: string;
    title: string;
    version: string;
    year: string;
    status: ProjectStatus;
    summary: string;
    stack: string[];
    liveUrl?: string;
    repoUrl: string;
}

export const projects: Project[] = [
    {
        slug: "crate",
        title: "Crate",
        version: "1.0.0",
        year: "2026",
        status: "live",
        summary: "A music discovery app built on a real public API, typed end to end with TypeScript. My main project so far.",
        stack: ["React", "TypeScript", "Tailwind v4", "React Router v7"],
        liveUrl: "https://musiccrate-adil.netlify.app",
        repoUrl: "https://github.com/Annubiss/Music-Crate",

    },
    
]