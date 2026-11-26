import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import ProjectCard from "../../ProjectCard";
import { projects } from "../../../data/dataConfig";
import Eyebrow from "../../Eyebrow";

const featuredProjectSlugs = ["villa-solace", "villa-elysia", "the-opus"];

const FeaturedProjects = () => {
  const featuredProjects = featuredProjectSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project) => project !== undefined);

  return (
    <section className="py-24 md:py-32 px-[var(--page-gutter)] bg-[var(--color-bg-primary)]">
      <div className="max-w-[var(--container-width)] mx-auto">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14 md:mb-16">
          <div>
            <Eyebrow text="Selected work" />

            <h2
              className="font-[var(--font-display)]
              text-[clamp(3rem,5.5vw,4.5rem)]
              font-[var(--weight-regular)]
              leading-[var(--leading-tight)]
              tracking-[var(--tracking-tight)]
              text-[var(--color-text-primary)]"
            >
              Spaces that leave
              <span className="text-[var(--color-primary)]">
                {" "}
                an impression.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-[1.9] text-[var(--color-text-secondary)]">
            A selection of residences shaped by individuality, thoughtful design
            and exceptional craftsmanship.
          </p>
        </div>

        {/* FEATURED PROJECTS */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* VIEW ALL */}
        <div className="flex justify-center mt-16 md:mt-20">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-4 border-b border-[var(--color-primary)] pb-3 text-xs uppercase tracking-[0.16em] text-[var(--color-primary)] transition-colors duration-300 hover:text-[var(--color-primary-dark)]"
          >
            Explore all projects
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
