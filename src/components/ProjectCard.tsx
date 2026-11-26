import type { Project } from "../data/dataConfig";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group">
      {/* Project image */}
      <a
        href={`/projects/${project.slug}`}
        aria-label={`View ${project.name}`}
        className="relative block overflow-hidden rounded-[var(--radius-xl)] bg-[var(--color-bg-tertiary)]"
      >
        <div className="aspect-[16/8] w-full overflow-hidden md:aspect-[16/7]">
          <img
            src={project.heroImage}
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
          href={`/projects/${project.slug}`}
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
}
