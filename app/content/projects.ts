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
        stack: ["React", "TypeScript", "Tailwind v4", "React Router", "Vitest", "Testing Library"],
        liveUrl: "https://musiccrate-adil.netlify.app",
        repoUrl: "https://github.com/Annubiss/Music-Crate",

    },

    {
        slug: "gametrack",
        title: "GameTrack",
        version: "1.0.0",
        year: "2026",
        status: "live",
        summary: "Browse top-rated game deals from the CheapShark API and save the ones you like to a personal collection. My first React app.",
        stack: ["React", "Vite", "Tailwind v4", "React Router", "Vitest"],
        liveUrl: "https://gametrack-adil.netlify.app",
        repoUrl: "https://github.com/Annubiss/gametrack",
    },
    
]