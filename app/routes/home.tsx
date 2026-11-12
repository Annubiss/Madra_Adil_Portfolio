import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main>
      <section className="max-w-5xl mx-auto px-6 sm:px-8 pt-24 pb-20">
        <p className={"mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 " 
          + "py-1.5 font-mono text-xs text-accent"}>
          <span 
            className="size-1.5 rounded-full bg-accent"
            aria-hidden="true"
          ></span>
            Open to work
        </p>
        <h1 className="text-5xl sm:text-7xl font-semibold tracking-light leading-[1.05]">Madra Adil, frontend developer.</h1>
        <span className="block text-muted">v1.0.0, looking for a team</span> 
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
          Ex-courier, one year into code. React/Angular and Java/TypeScript in Bucharest, looking for a junior fullstack role
        </p>
      </section>
    </main>
  )
}
