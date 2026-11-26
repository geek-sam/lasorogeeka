import { Link, useParams } from "react-router-dom";
import { projects } from "../data/dataConfig";

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();

  const projectIndex = projects.findIndex((project) => project.slug === slug);

  const project = projects[projectIndex];

  if (!project) {
    return (
      <main className="flex min-h-[70vh] flex-col items-center justify-center bg-[var(--color-bg-primary)] px-6 text-center">
        <span className="font-[var(--font-body)] text-xs uppercase tracking-[0.18em] text-[var(--color-primary)]">
          Project not found
        </span>

        <h1 className="mt-5 font-[var(--font-display)] text-5xl text-[var(--color-text-primary)]">
          This project is unavailable.
        </h1>

        <Link
          to="/projects"
          className="mt-8 border-b border-[var(--color-primary)] pb-2 font-[var(--font-body)] text-sm text-[var(--color-primary)]"
        >
          Back to projects
        </Link>
      </main>
    );
  }

  const previousProject =
    projects[(projectIndex - 1 + projects.length) % projects.length];

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main className="overflow-hidden bg-[var(--color-bg-primary)]">
      {/* Project Hero */}
      <section className="px-[var(--page-gutter)] pb-12 pt-32 md:pb-16 md:pt-40">
        <div className="mx-auto max-w-[var(--container-width)]">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 font-[var(--font-body)] text-xs uppercase tracking-[0.14em] text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]"
            >
              <span className="transition-transform group-hover:-translate-x-1">
                ←
              </span>
              All Projects
            </Link>

            <span className="font-[var(--font-body)] text-xs uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
              {project.category} Collection
            </span>
          </div>

          <div className="mb-8">
            <span className="mb-4 block font-[var(--font-body)] text-xs uppercase tracking-[0.16em] text-[var(--color-primary)]">
              Selected Work / {String(project.id).padStart(2, "0")}
            </span>

            <h1 className="max-w-5xl font-[var(--font-display)] text-[clamp(3rem,7vw,6.5rem)] leading-[0.96] tracking-[-0.04em] text-[var(--color-text-primary)]">
              {project.name}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-[var(--font-body)] text-xs uppercase tracking-[0.12em] text-[var(--color-text-secondary)]">
              <span>{project.location}</span>
              <span className="h-1 w-1 rounded-full bg-[var(--color-primary)]" />
              <span>{project.type}</span>
              <span className="h-1 w-1 rounded-full bg-[var(--color-primary)]" />
              <span>{project.year}</span>
            </div>
          </div>

          {/* Hero image */}
          <div className="overflow-hidden rounded-[var(--radius-xl)]">
            <div className="aspect-[16/8] md:aspect-[16/7]">
              <img
                src={project.heroImage}
                alt={project.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Introduction */}
      <section className="px-[var(--page-gutter)] py-[var(--section-space-md)]">
        <div className="mx-auto grid max-w-[var(--container-width)] grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <span className="font-[var(--font-body)] text-xs uppercase tracking-[0.18em] text-[var(--color-primary)]">
              The Project
            </span>

            <h2 className="mt-5 font-[var(--font-display)] text-4xl leading-tight text-[var(--color-text-primary)] md:text-5xl">
              A vision shaped into reality.
            </h2>
          </div>

          <div className="md:col-span-8">
            <p className="max-w-3xl font-[var(--font-display)] text-2xl leading-relaxed text-[var(--color-text-primary)] md:text-3xl">
              {project.introduction}
            </p>

            <p className="mt-7 max-w-2xl font-[var(--font-body)] text-sm leading-[1.9] text-[var(--color-text-secondary)] md:text-base">
              {project.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Project Information */}
      <section className="px-[var(--page-gutter)]">
        <div className="mx-auto max-w-[var(--container-width)] border-y border-[var(--color-border)] py-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { label: "Project", value: project.name },
              { label: "Location", value: project.location },
              { label: "Typology", value: project.type },
              { label: "Year", value: project.year },
            ].map((item) => (
              <div key={item.label}>
                <span className="block font-[var(--font-body)] text-[10px] uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                  {item.label}
                </span>

                <p className="mt-3 font-[var(--font-display)] text-xl text-[var(--color-text-primary)] md:text-2xl">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Approach */}
      <section className="px-[var(--page-gutter)] py-[var(--section-space-lg)]">
        <div className="mx-auto grid max-w-[var(--container-width)] grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <span className="font-[var(--font-body)] text-xs uppercase tracking-[0.18em] text-[var(--color-primary)]">
              Design Philosophy
            </span>

            <h2 className="mt-5 font-[var(--font-display)] text-4xl leading-tight text-[var(--color-text-primary)] md:text-5xl">
              Thoughtful design. Exceptional detail.
            </h2>
          </div>

          <div className="md:col-span-7">
            <p className="font-[var(--font-body)] text-sm leading-[1.9] text-[var(--color-text-secondary)] md:text-base">
              {project.designApproach}
            </p>

            <div className="mt-10 border-t border-[var(--color-border)] pt-6">
              <span className="mb-6 block font-[var(--font-body)] text-xs uppercase tracking-[0.16em] text-[var(--color-primary)]">
                Project Highlights
              </span>

              <div className="grid grid-cols-1 gap-y-5 sm:grid-cols-2">
                {project.highlights.map((highlight, index) => (
                  <div key={highlight} className="flex items-center gap-4">
                    <span className="font-[var(--font-display)] text-lg text-[var(--color-primary)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="font-[var(--font-body)] text-sm text-[var(--color-text-primary)]">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="px-[var(--page-gutter)] pb-[var(--section-space-lg)]">
        <div className="mx-auto max-w-[var(--container-width)]">
          <div className="mb-9 flex items-end justify-between">
            <div>
              <span className="font-[var(--font-body)] text-xs uppercase tracking-[0.18em] text-[var(--color-primary)]">
                Visual Story
              </span>

              <h2 className="mt-4 font-[var(--font-display)] text-4xl text-[var(--color-text-primary)] md:text-5xl">
                A closer look.
              </h2>
            </div>

            <span className="hidden font-[var(--font-body)] text-xs text-[var(--color-text-muted)] sm:block">
              {project.gallery.length} Images
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {project.gallery.map((image, index) => (
              <div
                key={image}
                className={`overflow-hidden rounded-[var(--radius-xl)] ${
                  index === 0 || index === 3 ? "md:col-span-2" : ""
                }`}
              >
                <div
                  className={
                    index === 0 || index === 3
                      ? "aspect-[16/8]"
                      : "aspect-[4/5]"
                  }
                >
                  <img
                    src={image}
                    alt={`${project.name} - Gallery image ${index + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.025]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[var(--color-bg-dark)] px-[var(--page-gutter)] py-[var(--section-space-lg)]">
        <div className="mx-auto max-w-[var(--container-width)]">
          <span className="font-[var(--font-body)] text-xs uppercase tracking-[0.18em] text-[var(--color-burgundy-muted)]">
            Your Vision, Our Expertise
          </span>

          <div className="mt-6 flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <h2 className="max-w-3xl font-[var(--font-display)] text-4xl leading-tight text-[var(--color-text-inverse)] md:text-6xl">
              Have a vision for your next residence?
            </h2>

            <Link
              to="/contact"
              className="group inline-flex w-fit shrink-0 items-center gap-5 border-b border-[var(--color-text-inverse)] pb-3 font-[var(--font-body)] text-xs uppercase tracking-[0.15em] text-[var(--color-text-inverse)] transition-colors hover:text-[var(--color-burgundy-muted)]"
            >
              Start a Conversation
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Previous / Next Project */}
      <section className="px-[var(--page-gutter)] py-12 md:py-16">
        <div className="mx-auto max-w-[var(--container-width)]">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Link
              to={`/projects/${previousProject.slug}`}
              className="group border-t border-[var(--color-border)] pt-6"
            >
              <span className="font-[var(--font-body)] text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                ← Previous Project
              </span>

              <h3 className="mt-4 font-[var(--font-display)] text-2xl text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-primary)] md:text-3xl">
                {previousProject.name}
              </h3>

              <span className="mt-2 block font-[var(--font-body)] text-xs text-[var(--color-text-secondary)]">
                {previousProject.category} · {previousProject.location}
              </span>
            </Link>

            <Link
              to={`/projects/${nextProject.slug}`}
              className="group border-t border-[var(--color-border)] pt-6 md:text-right"
            >
              <span className="font-[var(--font-body)] text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                Next Project →
              </span>

              <h3 className="mt-4 font-[var(--font-display)] text-2xl text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-primary)] md:text-3xl">
                {nextProject.name}
              </h3>

              <span className="mt-2 block font-[var(--font-body)] text-xs text-[var(--color-text-secondary)]">
                {nextProject.category} · {nextProject.location}
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
