import { projects } from "~/content/projects";
import type { Route } from "./+types/home";
import { Link, useParams } from "react-router";
import { ProjectEntry } from "~/components/projects/ProjectEntry";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import ProjectDetails from "./work.$slug";
import { BrowserFrame } from "~/components/projects/BrowserFrame";
import { ProjectBadges } from "~/components/projects/ProjectBadges";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const stats = [
  {value: "2", label: "years of experience" },
  {value: "2", label: "React apps in production"},
  {value: "25", label: "projects shipped"}
]

export default function Home() {
  const featuredProject = projects.find((project) => project.featured)
  
  

  return (
    <main>
      
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 hero-dots"/>
        <div 
          aria-hidden="true"
          className="hero-glow absolute left-1/2 -top-64 h-140 w-250 -translate-x-1/2"
        />
        <div  className="max-w-5xl mx-auto px-6 sm:px-8 pt-24 pb-20 relative">
        <p className={"mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 " 
          + "py-1.5 font-mono text-sm text-accent"}>
          <span 
            className="relative flex size-2"
            aria-hidden="true"
          >
            <span className="absolute inset-0 rounded-full bg-accent opacity-75 animate-ping motion-reduce:animate-none" />
            <span className="relative size-2 rounded-full bg-accent" />
          </span>
            Open to work · Bucharest
        </p>
        <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight leading-[1.05]">
          <span className="text-gradient">
            Madra Adil, frontend developer.
          </span>
          <span className="block text-muted">v1.0.0, looking for a team</span>
        </h1>
         
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
          Ex-courier, one year into code. React and TypeScript in Bucharest, now learning Angular and Java. Looking for my first developer role.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#projects" 
          className="btn btn-primary">
            See my work <span aria-hidden="true">→</span>
          </a>
          <a href="#contact" className="btn btn-secondary">Get in touch</a>
        </div>

          <dl className={"mt-20 grid sm:grid-cols-3 gap-3"
          }>
            {stats.map((stat) => {
              return (
                <div
                key={stat.label}
                className={"flex flex-col-reverse justify-end gap-1.5 px-7 py-6 rounded-xl border border-line " 
                  + "bg-linear-to-b from-foreground/3 to-transparent"}
                >
                  <dt className="font-mono text-sm text-muted">
                    {stat.label}
                  </dt>
                  <dd className="text-4xl font-semibold tracking-tight tabular-nums">
                    {stat.value}
                  </dd>
                  
                  
                </div>
              )
            })}
          </dl>

        <div className={"mt-10 max-w-xl overflow-x-auto rounded-lg border border-line bg-surface px-5 py-4 " + 
          "font-mono text-sm leading-loose sm:text-sm"}>
          <p>
            <span className="text-accent">
              ${" "}
            </span>
            lfg --role frontend --city bucharest
          </p>
          <p className="text-muted">
            → party: 0/1 · status: searching
            <span aria-hidden="true" className="animate-blink motion-reduce:animate-none"> ▍</span>
          </p>
        </div>
        </div>
      </section>

{/* featured section begin */}

      {featuredProject && (
  <section id="projects" className="max-w-5xl mx-auto px-6 sm:px-8 pt-16 pb-8">
    <p className="mb-9 flex items-center gap-3 font-mono text-sm text-muted">
      <span className="text-accent">01 </span>
      Featured project
      <span aria-hidden="true" className="h-px flex-1 bg-linear-to-r from-line to-transparent" />
    </p>

    <div className="grid items-center gap-14 lg:grid-cols-2">
      <div>
        <ProjectBadges project={featuredProject} className="mb-4" />

        <h2 className="text-5xl font-semibold tracking-tight">
          {featuredProject.title}
        </h2>

        <p className="mt-4 max-w-xl text-xl leading-relaxed text-muted">
          {featuredProject.summary}
        </p>

        {featuredProject.highlights && (
          <ul className="mt-7 flex flex-col gap-3">
            {featuredProject.highlights.map((highlight) => {
              return (
                <li key={highlight} className="flex items-start gap-3">
                  <Check size={16} strokeWidth={2.25} aria-hidden="true" className="mt-1 shrink-0 text-accent" />
                  {highlight}
                </li>
              );
            })}
          </ul>
        )}

        <div className="mt-9 flex flex-wrap gap-3">
          <Link to={`/work/${featuredProject.slug}`}  className="btn btn-primary">
            View details <ArrowRight size={16} aria-hidden="true" />
          </Link>

          {featuredProject.liveUrl && (
            <a
              href={featuredProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Live <ArrowUpRight size={16} aria-hidden="true" className="text-muted" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          )}

          <a
            href={featuredProject.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Source <ArrowUpRight size={16} aria-hidden="true" className="text-muted" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>

      <BrowserFrame
      url={featuredProject.liveUrl ?? featuredProject.repoUrl}
      >
       <div className="aspect-16/10 grid place-items-center font-mono text-sm text-muted">
          [ screenshot ]
       </div>   
      </BrowserFrame>
    </div>
  </section>
)}

{/* featured section end */}

      <section className="max-w-5xl mx-auto px-6 sm:px-8 pb-24">
          <h2 className="text-sm font-medium text-muted">
            Projects
          </h2>
          <ol className="mt-4 border-t border-line">
            {projects.map((project) => {
              return(
                <ProjectEntry 
                  key={project.slug}
                  project={project}
                />
              )
            })}
          </ol>
      </section>
    </main>
  )
}
