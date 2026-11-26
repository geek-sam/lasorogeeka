import { useState } from "react";
import Eyebrow from "../components/Eyebrow";
import { projects } from "../data/dataConfig";
import ProjectCard from "../components/ProjectCard";

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
          {/* Eyebrow */}
          <Eyebrow text="Selected Works" variant="none" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <h1 className="font-[var(--font-display)] text-[clamp(3.5rem,5.5vw,4.5rem)] leading-[0.95] tracking-[-0.045em] text-[var(--color-text-primary)]">
                Spaces made{" "}
                <span className="text-[var(--color-primary)]">
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
              {projects
                .filter((project) => project.category === "Modern")
                .map((project) => (
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
              {projects
                .filter((project) => project.category === "Classical")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
