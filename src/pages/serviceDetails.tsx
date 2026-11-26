import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { servicesData, projects } from "../data/dataConfig";

const ServiceDetails = () => {
  const { slug } = useParams<{ slug: string }>();

  const service = servicesData.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!service) {
    return (
      <main className="min-h-screen bg-[var(--color-bg-primary)] flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
            Service not found
          </p>
          <h1 className="mt-4 font-[var(--font-display)] text-4xl text-[var(--color-text-primary)]">
            This page is unavailable.
          </h1>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 mt-8 text-sm text-[var(--color-primary)]"
          >
            <ArrowLeft size={16} />
            Back to services
          </Link>
        </div>
      </main>
    );
  }

  const currentIndex = servicesData.findIndex(
    (item) => item.slug === service.slug,
  );

  const nextService = servicesData[(currentIndex + 1) % servicesData.length];
  const previousService =
    servicesData[
      (currentIndex - 1 + servicesData.length) % servicesData.length
    ];

  // Map over the related project slugs to find the corresponding project data
  const relatedProjects = service.relatedProjects.map((slug) =>
    projects.find((project) => project.slug === slug),
  );

  return (
    <main className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      {/* HERO */}
      <section className="pt-32 md:pt-40 ">
        <div className="max-w-[var(--container-width)] mx-auto px-[var(--page-gutter)]">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            <Link
              to="/services"
              className="hover:text-[var(--color-primary)] transition-colors"
            >
              Services
            </Link>
            <span>/</span>
            <span>{service.category}</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mt-12 mb-12 md:mb-16">
            <div className="lg:col-span-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-primary)] mb-5">
                {service.number} / {service.category}
              </p>

              <h1 className="font-[var(--font-display)] text-5xl md:text-6xl lg:text-6xl leading-[0.98] tracking-tight max-w-4xl">
                {service.title}
              </h1>
            </div>

            <div className="lg:col-span-4 lg:pb-2">
              <p className="text-sm md:text-base leading-relaxed text-[var(--color-text-secondary)] max-w-md">
                {service.introduction}
              </p>
            </div>
          </div>

          <div className="relative aspect-[16/8] md:aspect-[16/6.5] overflow-hidden rounded-[var(--radius-xl)]">
            <img
              src={service.heroImage}
              alt={service.category}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-24 md:py-32 ">
        <div className="max-w-[var(--container-width)] px-[var(--page-gutter)] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-primary)]">
              The service
            </p>
            <h2 className="font-[var(--font-display)] text-4xl md:text-5xl leading-tight mt-5">
              {service.overviewTitle}
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 space-y-6">
            {service.overview.map((paragraph, index) => (
              <p
                key={index}
                className="text-sm md:text-base leading-[1.9] text-[var(--color-text-secondary)]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-24 md:py-32 bg-[var(--color-bg-secondary)] ">
        <div className="max-w-[var(--container-width)] px-[var(--page-gutter)] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-primary)]">
                What we do
              </p>
              <h2 className="font-[var(--font-display)] text-4xl md:text-5xl mt-5">
                Our capabilities.
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] max-w-sm">
              A considered range of capabilities, brought together to deliver
              every aspect of the service.
            </p>
          </div>

          <div className="border-t border-[var(--color-border)]">
            {service.capabilities.map((capability, index) => (
              <div
                key={capability.title}
                className="grid md:grid-cols-12 gap-6 md:gap-12 py-9 md:py-12 border-b border-[var(--color-border)]"
              >
                <div className="md:col-span-1">
                  <span className="text-xs text-[var(--color-text-muted)]">
                    0{index + 1}
                  </span>
                </div>

                <div className="md:col-span-4">
                  <h3 className="font-[var(--font-display)] text-2xl md:text-3xl">
                    {capability.title}
                  </h3>
                </div>

                <div className="md:col-span-6 md:col-start-7">
                  <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] mb-6">
                    {capability.description}
                  </p>

                  <ul className="space-y-3">
                    {capability.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-relaxed text-[var(--color-text-secondary)]"
                      >
                        <span className="w-1 h-1 rounded-full bg-[var(--color-primary)] mt-[9px] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="py-24 md:py-32">
        <div className="max-w-[var(--container-width)] px-[var(--page-gutter)] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="aspect-[5/4] overflow-hidden rounded-[var(--radius-xl)]">
            <img
              src={service.approachImage}
              alt={`${service.category} in practice`}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:pl-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-primary)]">
              The LSI approach
            </p>

            <h2 className="font-[var(--font-display)] text-4xl md:text-5xl leading-tight mt-6">
              {service.approachTitle}
            </h2>

            <p className="mt-7 text-sm md:text-base leading-[1.9] text-[var(--color-text-secondary)] max-w-lg">
              {service.approach}
            </p>

            <Link
              to="/about"
              className="inline-flex items-center gap-3 mt-9 text-xs uppercase tracking-[0.16em] text-[var(--color-primary)] group"
            >
              Discover our approach
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* RELATED PROJECTS */}
      {relatedProjects.length > 0 && (
        <section className="py-24 md:py-32 bg-[var(--color-bg-secondary)]">
          <div className="max-w-[var(--container-width)] mx-auto px-[var(--page-gutter)]">
            <div className="flex items-end justify-between mb-12">
              <div>
                {/* <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-primary)]">
                  Selected work
                </p> */}
                <h2 className="font-[var(--font-display)] text-4xl md:text-5xl mt-5">
                  Related projects.
                </h2>
              </div>

              <Link
                to="/projects"
                className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[var(--color-primary)]"
              >
                View all projects
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {relatedProjects.map((project) => (
                <Link
                  key={project!.id}
                  to={`/projects/${project!.slug}`}
                  className="group"
                >
                  <div className="aspect-[16/10] overflow-hidden rounded-[var(--radius-lg)]">
                    <img
                      src={project!.heroImage}
                      alt={project!.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>

                  <div className="flex items-center justify-between mt-5">
                    <div>
                      <h3 className="font-[var(--font-display)] text-2xl">
                        {project!.name}
                      </h3>
                      <p className="text-xs text-[var(--color-text-muted)] mt-2">
                        {project!.location}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="text-[var(--color-primary)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CONTACT CTA */}
      <section className="py-28 md:py-36 ">
        <div className="max-w-[var(--container-width)] mx-auto px-[var(--page-gutter)] text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Begin a conversation
          </p>

          <h2 className="font-[var(--font-display)] text-5xl md:text-7xl leading-[1.05] mt-6 max-w-4xl mx-auto">
            Let’s create something
            <span className="text-[var(--color-primary)]"> exceptional. </span>
          </h2>

          <p className="text-sm text-[var(--color-text-secondary)] mt-7 max-w-md mx-auto leading-relaxed">
            Tell us about your vision and let’s explore how we can bring it to
            life.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-4 mt-10 px-7 py-4 bg-[var(--color-primary)] text-[var(--color-text-inverse)] text-xs uppercase tracking-[0.15em] hover:bg-[var(--color-primary-dark)] transition-colors"
          >
            Discuss your project
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* SERVICE NAVIGATION */}
      <section className="border-t border-[var(--color-border)]">
        <div className="max-w-[var(--container-width)] mx-auto px-[var(--page-gutter)] grid grid-cols-2">
          <Link
            to={`/services/${previousService.slug}`}
            className="py-8 md:py-10 flex flex-col items-start gap-3 group"
          >
            <span className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
              Previous service
            </span>
            <span className="flex items-center gap-3 font-[var(--font-display)] text-xl md:text-2xl">
              <ArrowLeft size={18} />
              {previousService.category}
            </span>
          </Link>

          <Link
            to={`/services/${nextService.slug}`}
            className="py-8 md:py-10 flex flex-col items-end gap-3 text-right group"
          >
            <span className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
              Next service
            </span>
            <span className="flex items-center gap-3 font-[var(--font-display)] text-xl md:text-2xl">
              {nextService.category}
              <ArrowRight size={18} />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetails;
