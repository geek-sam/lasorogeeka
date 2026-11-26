import { Link } from "react-router-dom";
import Eyebrow from "../components/Eyebrow";

const services = [
  {
    id: "01",
    title: "Design",
    subtitle: "Architecture & Interiors",
    description:
      "Thoughtful spaces shaped by architecture, creativity and precision.",
    image: "/images/process-01.png",
    href: "/services/design",
  },
  {
    id: "02",
    title: "Build",
    subtitle: "Construction & Engineering",
    description:
      "Complete construction delivered through technical expertise and quality craftsmanship.",
    image: "/images/process-03.png",
    href: "/services/build",
  },
  {
    id: "03",
    title: "Fit-out",
    subtitle: "Interior Execution",
    description:
      "Refined interiors brought to life through meticulous execution and detailing.",
    image: "/images/service-fitout.png",
    href: "/services/fit-out",
  },
  {
    id: "04",
    title: "FF&E",
    subtitle: "Furniture, Fixtures & Styling",
    description:
      "Considered furniture, finishes and styling that complete the interior experience.",
    image: "/images/service-ffe.png",
    href: "/services/ffe",
  },
];

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
    <article className="group">
      {/* Image banner */}
      <Link
        to={service.href}
        aria-label={`Explore ${service.title} services`}
        className="relative block overflow-hidden rounded-[var(--radius-lg)]"
      >
        <div className="aspect-[16/7] min-h-[260px] max-h-[580px]">
          <img
            src={service.image}
            alt={`${service.title} - La Sorogeeka Interiors`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-1000 ease-[var(--ease-luxury)] group-hover:scale-[1.025]"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 md:p-9">
          <div>
            <span className="mb-3 block font-[var(--font-body)] text-[10px] uppercase tracking-[0.18em] text-white/80">
              {service.id} / LSI Services
            </span>

            <h2 className="font-[var(--font-display)] text-4xl leading-none text-white md:text-6xl">
              {service.title}
            </h2>
          </div>

          {/* <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/70 text-white transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[var(--color-primary)]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </span> */}
        </div>
      </Link>

      {/* Minimal metadata */}
      <div className="flex flex-col gap-4 border-b border-[var(--color-border)] py-5 sm:flex-row sm:items-center sm:justify-between md:py-6">
        <div>
          <span className="font-[var(--font-body)] text-[12px] uppercase tracking-[0.15em] text-[var(--color-primary)]">
            {service.subtitle}
          </span>

          <p className="mt-2 max-w-xl font-[var(--font-body)] text-[16px] leading-relaxed text-[var(--color-text-secondary)]">
            {service.description}
          </p>
        </div>

        <Link
          to={service.href}
          className="group/link inline-flex w-fit shrink-0 items-center gap-3 font-[var(--font-body)] text-[10px] uppercase tracking-[0.14em] text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-primary)]"
        >
          Explore Service
          <span className="text-base transition-transform duration-300 group-hover/link:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <main className="bg-[var(--color-bg-primary)]">
      {/* Page introduction */}
      <section className=" pb-14 pt-36 md:pb-20 md:pt-44">
        <div className="mx-auto max-w-[var(--container-width)] px-[var(--page-gutter)]">
          {/* Eyebrow */}
          <Eyebrow text="Our Expertise" variant="none" />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <h1 className="font-[var(--font-display)] text-[clamp(3rem,5vw,4.5rem)] leading-[0.98] tracking-[-0.04em] text-[var(--color-text-primary)]">
                An integrated approach
                <span className="block text-[var(--color-primary)]">
                  to exceptional living.
                </span>
              </h1>
            </div>

            <div className="md:col-span-4 md:pb-1">
              <p className="max-w-sm font-[var(--font-body)] text-sm leading-[1.8] text-[var(--color-text-secondary)] md:ml-auto md:text-right">
                From architectural vision to the final detail, every stage comes
                together under one considered approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="pb-[var(--section-space-xl)]">
        <div className="mx-auto max-w-[var(--container-width)] px-[var(--page-gutter)]">
          <div className="mb-7 flex items-center justify-between border-b border-[var(--color-border)] pb-4">
            <span className="font-[var(--font-body)] text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
              Our Services
            </span>

            <span className="font-[var(--font-body)] text-[10px] text-[var(--color-text-muted)]">
              04 Disciplines
            </span>
          </div>

          <div className="space-y-10 md:space-y-14">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
