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
    demoPath?: string;
    whatItDoes?: string[],
    howItsBuilt?: string[];
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
        whatItDoes: [
    "Search albums and songs, then narrow them down by genre, type, decade and length",
    "Save albums to your collection and sort them by date, title or artist",
    "Build playlists from anywhere in the app, kept after a refresh",
    "Light and dark theme that follows your system until you pick one",
        ],
        howItsBuilt: [
            "The search lives in the URL. Refresh, share the link or hit Back and you land on the same results.",
            "Every MusicBrainz request waits its turn in a small queue, so the app stays under the API's limit of one request per second.",
            "One pure function turns the filters into the search query. It knows nothing about React and has the most tests in the project.",
            "Modals keep focus inside and hand it back on close, icon buttons say what they do, and every animation respects reduced motion.",
            "Tests run before every deploy. If one fails, the live site stays on the last working version.",
],
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
        whatItDoes: [
    "The 12 best-rated game deals right now, pulled live from CheapShark",
    "A page for each deal with retail and sale price, publisher and Steam rating",
    "Save games to your collection, kept after a refresh",
    "A “Must play” badge on games with 90% or more positive reviews",
        ],
        howItsBuilt: [
            "Every request has its own loading and error state, so a failed call shows a message instead of a blank page.",
            "The deal ID lives in the URL, so every game page has its own link.",
            "The collection is saved in localStorage and checked by deal ID, so the same game can't be saved twice.",
            "Component tests check the game card, including when the “Must play” badge shows up.",
        ],
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
    demoPath: "/demos/fantastyc-beings/index.html",
    whatItDoes: [
    "Swap creatures to line up three or more of a kind",
    "15 moves to catch the creatures you need, or you lose",
    "Sound effects on every click and every match",
],
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
    demoPath: "/demos/random-user-generator/index.html",
    whatItDoes: [
    "A new random profile with one click",
    "Choose what each card shows: name, email, photo, location, phone, birthday and more",
    "Saved users stay after a refresh",
],
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
    demoPath: "/demos/dog-glossary/index.html",
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
    demoPath: "/demos/website-for-the-visually-impaired/index.html",
    whatItDoes: [
    "Four text sizes, from small to larger",
    "Three high-contrast color themes",
    "Hide every image and show its alt text instead",
],
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
    demoPath: "/demos/url-shortener/index.html",
    whatItDoes: [
    "Turn any link into a random 5-character code",
    "Edit the code by hand and save it with Enter",
    "Count the clicks on each short link",
],
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
    demoPath: "/demos/virtual-piano/index.html",
    whatItDoes: [
    "7 white and 5 black keys, played with A to J and W to U on your keyboard",
    "A real recorded note for every key",
],
},
    
]