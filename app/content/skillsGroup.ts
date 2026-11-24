export type SkillsGroup = {
    title: { en: string; ro: string };
    skills: string[];
}

export const skillsGroup: SkillsGroup[] = [
    {
        title: { en: "Build", ro: "Construiesc cu" },
        skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind v4", "React Router", "Node.js"],
    },
    {
        title: { en: "Test & ship", ro: "Testez si livrez" },
        skills: ["Vitest", "Testing Library", "Vite", "Git", "Netlify"],
    },
    {
        title: { en: "Learning now", ro: "Invat acum" },
        skills: ["Angular", "Java"],
    },
]