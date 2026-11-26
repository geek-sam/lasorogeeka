import { useState } from "react";

type Project = {
  id: number;
  name: string;
  location: string;
  type: string;
  year: string;
  image: string;
  href: string;
};

const modernProjects: Project[] = [
  {
    id: 1,
    name: "The Contemporary Residence",
    location: "Dubai, UAE",
    type: "Private Residence",
    year: "2025",
    image: "/images/projects/modern-01.jpg",
    href: "/projects/contemporary-residence",
  },
  {
    id: 2,
    name: "The Art of Modern Living",
    location: "Abu Dhabi, UAE",
    type: "Luxury Villa",
    year: "2024",
    image: "/images/projects/modern-02.jpg",
    href: "/projects/modern-living",
  },
  {
    id: 3,
    name: "A Study in Serenity",
    location: "Doha, Qatar",
    type: "Private Residence",
    year: "2024",
    image: "/images/projects/modern-03.jpg",
    href: "/projects/study-in-serenity",
  },
];

const classicalProjects: Project[] = [
  {
    id: 4,
    name: "The Grand Residence",
    location: "Dubai, UAE",
    type: "Private Palace",
    year: "2025",
    image: "/images/projects/classical-01.jpg",
    href: "/projects/grand-residence",
  },
  {
    id: 5,
    name: "Timeless Grandeur",
    location: "Abu Dhabi, UAE",
    type: "Luxury Villa",
    year: "2024",
    image: "/images/projects/classical-02.jpg",
    href: "/projects/timeless-grandeur",
  },
  {
    id: 6,
    name: "The Heritage Estate",
    location: "Riyadh, Saudi Arabia",
    type: "Private Residence",
    year: "2023",
    image: "/images/projects/classical-03.jpg",
    href: "/projects/heritage-estate",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="group">
      {/* Project image */}
      <a
        href={project.href}
        aria-label={`View ${project.name}`}
        className="relative block overflow-hidden rounded-[var(--radius-xl)] bg-[var(--color-bg-tertiary)]"
      >
        <div className="aspect-[16/8] w-full overflow-hidden md:aspect-[16/7]">
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-1000 ease-[var(--ease-luxury)] group-hover:scale-[1.035]"
          />
        </div>

        {/* Subtle image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-30" />

        {/* Project number */}
        <span className="absolute bottom-6 left-6 font-[var(--font-body)] text-xs tracking-[0.15em] text-white md:bottom-8 md:left-8">
          PROJECT / {String(project.id).padStart(2, "0")}
        </span>
      </a>

      {/* Project metadata */}
      <div className="flex flex-col gap-5 border-b border-[var(--color-border)] py-6 md:flex-row md:items-center md:justify-between md:py-7">
        <div className="min-w-0">
          <h3 className="font-[var(--font-display)] text-2xl leading-tight text-[var(--color-text-primary)] transition-colors duration-300 group-hover:text-[var(--color-primary)] md:text-3xl">
            {project.name}
          </h3>

          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 font-[var(--font-body)] text-[10px] uppercase tracking-[0.12em] text-[var(--color-text-muted)] md:text-xs">
            <span>{project.location}</span>
            <span className="h-1 w-1 rounded-full bg-[var(--color-primary)]" />
            <span>{project.type}</span>
            <span className="h-1 w-1 rounded-full bg-[var(--color-primary)]" />
            <span>{project.year}</span>
          </div>
        </div>

        {/* CTA */}
        <a
          href={project.href}
          className="group/link inline-flex w-fit shrink-0 items-center gap-4 border-b border-[var(--color-primary)] pb-2 font-[var(--font-body)] text-xs uppercase tracking-[0.12em] text-[var(--color-text-primary)] transition-colors duration-300 hover:text-[var(--color-primary)] md:ml-auto"
        >
          Explore Project
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </article>
  );
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "modern" | "classical"
  >("all");

  const showModern = activeCategory === "all" || activeCategory === "modern";

  const showClassical =
    activeCategory === "all" || activeCategory === "classical";

  return (
    <main className="bg-[var(--color-bg-primary)]">
      {/* Page introduction */}
      <section className="pb-16 pt-36 md:pb-20 md:pt-44">
        <div className="mx-auto max-w-[var(--container-width)] px-[var(--page-gutter)]">
          <span className="mb-5 flex items-center gap-3 font-[var(--font-body)] text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            <span className="h-px w-7 bg-[var(--color-primary)]" />
            Selected Works
          </span>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <h1 className="font-[var(--font-display)] text-[clamp(3.5rem,7vw,6.5rem)] leading-[0.95] tracking-[-0.045em] text-[var(--color-text-primary)]">
                Spaces made
                <span className="block text-[var(--color-primary)]">
                  extraordinary.
                </span>
              </h1>
            </div>

            <div className="md:col-span-4 md:pb-2">
              <p className="max-w-sm font-[var(--font-body)] text-sm leading-relaxed text-[var(--color-text-secondary)] md:ml-auto md:text-right md:text-base">
                A collection of residences shaped by distinctive architecture,
                thoughtful design and exceptional craftsmanship.
              </p>
            </div>
          </div>

          {/* Category selector */}
          <div className="mt-12 flex flex-wrap items-center gap-3 border-b border-[var(--color-border)] pb-5">
            {[
              { label: "All Projects", value: "all" },
              { label: "Modern", value: "modern" },
              { label: "Classical", value: "classical" },
            ].map((category) => (
              <button
                key={category.value}
                type="button"
                onClick={() =>
                  setActiveCategory(
                    category.value as "all" | "modern" | "classical",
                  )
                }
                className={`px-5 py-2.5 font-[var(--font-body)] text-xs uppercase tracking-[0.12em] transition-all duration-300 ${
                  activeCategory === category.value
                    ? "bg-[var(--color-primary)] text-[var(--color-text-inverse)]"
                    : "border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modern collection */}
      {showModern && (
        <section id="modern-projects" className="pb-[var(--section-space-lg)]">
          <div className="mx-auto max-w-[var(--container-width)] px-[var(--page-gutter)]">
            <div className="mb-9 flex items-end justify-between">
              <div>
                <span className="mb-3 block font-[var(--font-body)] text-xs uppercase tracking-[0.16em] text-[var(--color-primary)]">
                  Collection 01
                </span>

                <h2 className="font-[var(--font-display)] text-4xl text-[var(--color-text-primary)] md:text-5xl">
                  Modern
                </h2>
              </div>

              <span className="font-[var(--font-body)] text-xs text-[var(--color-text-muted)]">
                01 — 03
              </span>
            </div>

            <div className="space-y-10 md:space-y-14">
              {modernProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Classical collection */}
      {showClassical && (
        <section
          id="classical-projects"
          className="pb-[var(--section-space-xl)]"
        >
          <div className="mx-auto max-w-[var(--container-width)] px-[var(--page-gutter)]">
            <div className="mb-9 flex items-end justify-between">
              <div>
                <span className="mb-3 block font-[var(--font-body)] text-xs uppercase tracking-[0.16em] text-[var(--color-primary)]">
                  Collection 02
                </span>

                <h2 className="font-[var(--font-display)] text-4xl text-[var(--color-text-primary)] md:text-5xl">
                  Classical
                </h2>
              </div>

              <span className="font-[var(--font-body)] text-xs text-[var(--color-text-muted)]">
                01 — 03
              </span>
            </div>

            <div className="space-y-10 md:space-y-14">
              {classicalProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
