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
    featured?: boolean;
    highlights?: string[];
    group?: string;
}

export const projects: Project[] = [
    {
        slug: "crate",
        title: "Crate",
        version: "1.0.0",
        year: "2026",
        status: "live",
        summary: "Search, filter and collect music from the open MusicBrainz database.",
        stack: ["React", "TypeScript", "Tailwind v4", "React Router", "Vitest", "Testing Library"],
        liveUrl: "https://musiccrate-adil.netlify.app",
        repoUrl: "https://github.com/Annubiss/Music-Crate",
        featured: true,
        highlights: ["Search albums and songs with 4 combinable filters",
                    "Save a personal collection and build playlists",
                    "Written fully in TypeScript, tested before every deploy"],
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

    {
    slug: "fantastic-beings",
    title: "Fantastic Beings",
    version: "1.0.0",
    year: "2025",
    status: "live",
    summary: "Harry Potter-themed match-3 on a 5×5 grid, with scoring, win and lose conditions and sound effects.",
    stack: ["JavaScript", "HTML", "CSS"],
    repoUrl: "https://github.com/Annubiss/Portfolio/tree/main/Projects/fantastic-beings-and-how-to-match-them-Annubiss",
    group: "vanilla",
},
{
    slug: "random-user-generator",
    title: "Random User Generator",
    version: "1.0.0",
    year: "2025",
    status: "live",
    summary: "Pulls random profiles from the randomuser.me API. Pick which fields to show and save users that stay after a refresh.",
    stack: ["JavaScript", "HTML", "CSS"],
    repoUrl: "https://github.com/Annubiss/Portfolio/tree/main/Projects/random-user-generator-Annubiss",
    group: "vanilla",
},
{
    slug: "dog-glossary",
    title: "Dog Glossary",
    version: "1.0.0",
    year: "2025",
    status: "live",
    summary: "Search dog breeds and sub-breeds from the Dog CEO API, or get a random dog.",
    stack: ["JavaScript", "HTML", "CSS"],
    repoUrl: "https://github.com/Annubiss/Portfolio/tree/main/Projects/dog-glossary-Annubiss",
    group: "vanilla",
},
{
    slug: "accessibility-panel",
    title: "Website for the Visually Impaired",
    version: "1.0.0",
    year: "2025",
    status: "live",
    summary: "A control panel that changes text size and color theme across the whole page.",
    stack: ["JavaScript", "HTML", "CSS"],
    repoUrl: "https://github.com/Annubiss/Portfolio/tree/main/Projects/website-for-the-visually-impaired-Annubiss",
    group: "vanilla",
},
{
    slug: "url-shortener",
    title: "URL Shortener",
    version: "1.0.0",
    year: "2025",
    status: "live",
    summary: "Turns long links into short codes you can edit, and counts the clicks on each one.",
    stack: ["JavaScript", "HTML", "CSS"],
    repoUrl: "https://github.com/Annubiss/Portfolio/tree/main/Projects/url-shortener-Annubiss",
    group: "vanilla",
},
{
    slug: "virtual-piano",
    title: "Virtual Piano",
    version: "1.0.0",
    year: "2025",
    status: "live",
    summary: "Play the piano from your keyboard, with real sounds for the white and black keys.",
    stack: ["JavaScript", "HTML", "CSS"],
    repoUrl: "https://github.com/Annubiss/Portfolio/tree/main/Projects/virtual-piano-Annubiss",
    group: "vanilla",
},
    
]