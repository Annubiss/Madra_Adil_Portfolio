import { useLayoutEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, SlidersHorizontal } from "lucide-react";

import type { Route } from "./+types/home";
import { projects, type Project } from "~/content/projects";
import { useFlip } from "~/lib/flip";
import { SectionLabel } from "~/components/layout/SectionLabel";
import { BrowserFrame } from "~/components/projects/BrowserFrame";
import { ProjectBadges } from "~/components/projects/ProjectBadges";
import { ProjectEntry } from "~/components/projects/ProjectEntry";
import { StackChip } from "~/components/projects/StackChip";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const stats = [
  { value: "2", label: "years of experience" },
  { value: "2", label: "React apps in production" },
  { value: "25", label: "projects shipped" },
];

export default function Home() {
  const location = useLocation();
  const featuredProject = projects.find((project) => project.featured);

  useLayoutEffect(() => {
    if (!location.hash) return;
    const target = document.getElementById(location.hash.slice(1));
    target?.scrollIntoView();
  }, [location.hash]);

  return (
    <main>
      <HeroSection />
      {featuredProject && <FeaturedProjectSection project={featuredProject} />}
      <ProjectHistorySection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="hero-dots absolute inset-0" />
      <div
        aria-hidden="true"
        className="hero-glow absolute left-1/2 -top-64 h-140 w-250 -translate-x-1/2"
      />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 pt-24 pb-20">
        <p className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 font-mono text-sm text-accent">
          <span aria-hidden="true" className="relative flex size-2">
            <span className="absolute inset-0 rounded-full bg-accent opacity-75 animate-ping motion-reduce:animate-none" />
            <span className="relative size-2 rounded-full bg-accent" />
          </span>
          Open to work · Bucharest
        </p>

        <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight leading-[1.05]">
          <span className="text-gradient">Madra Adil, frontend developer.</span>
          <span className="block text-muted">v1.0.0, looking for a team</span>
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
          Ex-courier, one year into code. React and TypeScript in Bucharest, now learning Angular
          and Java. Looking for my first developer role.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#projects" className="btn btn-primary">
            See my work <span aria-hidden="true">→</span>
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get in touch
          </a>
        </div>

        <dl className="mt-20 grid sm:grid-cols-3 gap-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col-reverse justify-end gap-1.5 px-7 py-6 rounded-xl border border-line bg-linear-to-b from-foreground/3 to-transparent"
            >
              <dt className="font-mono text-sm text-muted">{stat.label}</dt>
              <dd className="text-4xl font-semibold tracking-tight tabular-nums">{stat.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 max-w-xl overflow-x-auto px-5 py-4 rounded-lg border border-line bg-surface font-mono text-sm leading-loose">
          <p>
            <span className="text-accent">$ </span>
            lfg --role frontend --city bucharest
          </p>
          <p className="text-muted">
            → party: 0/1 · status: searching
            <span aria-hidden="true" className="animate-blink motion-reduce:animate-none"> ▍</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function FeaturedProjectSection({ project }: { project: Project }) {
  const badgesRef = useFlip<HTMLParagraphElement>(`badges-${project.slug}`);
  const titleRef = useFlip<HTMLHeadingElement>(`title-${project.slug}`);
  const frameRef = useFlip<HTMLDivElement>(`frame-${project.slug}`);

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 sm:px-8 pt-16 pb-8">
      <SectionLabel number="01" label="Featured project" />

      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <ProjectBadges
            ref={badgesRef}
            flipId={`badges-${project.slug}`}
            project={project}
            className="mb-4 w-fit"
          />

          <h3
            ref={titleRef}
            data-flip={`title-${project.slug}`}
            className="w-fit origin-top-left text-5xl font-semibold tracking-tight"
          >
            {project.title}
          </h3>

          <p className="mt-4 max-w-xl text-xl leading-relaxed text-muted">{project.summary}</p>

          {project.highlights && (
            <ul className="mt-7 flex flex-col gap-3">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <Check
                    size={16}
                    strokeWidth={2.25}
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-accent"
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          )}

          <ul className="mt-7 flex flex-wrap gap-2">
            {project.stack.map((technology) => (
              <StackChip key={technology} name={technology} />
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link to={`/work/${project.slug}`} className="btn btn-primary">
              View details <ArrowRight size={16} aria-hidden="true" />
            </Link>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Live <ArrowUpRight size={16} aria-hidden="true" className="text-muted" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            )}

            <a
              href={project.repoUrl}
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
          ref={frameRef}
          flipId={`frame-${project.slug}`}
          url={project.liveUrl ?? project.repoUrl}
        >
          <div className="aspect-16/10 grid place-items-center font-mono text-sm text-muted">
            [ screenshot ]
          </div>
        </BrowserFrame>
      </div>
    </section>
  );
}

function ProjectHistorySection() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const historyProjects = projects.filter((project) => !project.featured)
  const allTechnologies = [...new Set(historyProjects.flatMap((project) => project.stack))]
  return (
    <section className="max-w-5xl mx-auto px-6 sm:px-8 pb-24 pt-24">
      <SectionLabel number="02" label="Project history" />

      <div className="relative mb-8">
        <button
          type="button"
          aria-expanded={isFilterOpen}
          aria-controls="technology-filter"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="btn btn-secondary"
        >
          <SlidersHorizontal size={18} strokeWidth={2} aria-hidden="true"/>
          Filter by technology
          <ChevronDown 
            size={15}
            aria-hidden="true"
            className={`text-muted transition-transform ${isFilterOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isFilterOpen && (
          <div
            id="technology-filter"
            className="w-64 p-4 bg-surface border border-line rounded-xl left-0 top-full mt-2 z-10 shadow-2xl shadow-black/40"
          >
            <ul className="flex flex-col gap-2 font-mono text-sm">
              {allTechnologies.map((technology) => (
                <li>{technology}</li>
              ))}
            </ul>
          </div>
        )}

      </div>

      <ol className="relative before:absolute before:left-1.75 before:top-2.5 before:bottom-2.5 before:w-0.5 before:bg-linear-to-b before:from-accent before:via-line before:to-transparent">
        {historyProjects.map((project) => (
          <ProjectEntry key={project.slug} project={project} />
        ))}
      </ol>
    </section>
  );
}