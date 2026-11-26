import Eyebrow from "../../Eyebrow";

const services = [
  {
    number: "01",
    title: "Design",
    description:
      "Architectural design, interior concepts, space planning and detailing.",
    image: "/images/service-design.jpg",
    alt: "Architectural interior design and planning",
    href: "/services/design",
  },
  {
    number: "02",
    title: "Build",
    description: "Construction, engineering and integrated project delivery.",
    image: "/images/service-build.png",
    alt: "Luxury residential construction and engineering",
    href: "/services/build",
  },
  {
    number: "03",
    title: "Fit-out",
    description: "Detailed execution, bespoke joinery, marble and finishes.",
    image: "/images/service-fitout.png",
    alt: "Bespoke interior joinery and marble craftsmanship",
    href: "/services/fit-out",
  },
  {
    number: "04",
    title: "FF&E",
    description: "Curated furniture, fixtures, equipment and styling.",
    image: "/images/service-ffe.png",
    alt: "Curated luxury furniture and interior styling",
    href: "/services/ffe",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="
        relative overflow-hidden
        bg-[var(--color-bg-secondary)]
        py-[var(--section-space-lg)]
        lg:py-[var(--section-space-xl)]
      "
    >
      <div
        className="
          mx-auto w-full max-w-[var(--container-width)]
          px-[var(--page-gutter)]
        "
      >
        {/* SECTION HEADER */}
        <div
          className="
            mb-14 flex flex-col justify-between gap-8
            lg:mb-20 lg:flex-row lg:items-end
          "
        >
          <div className="max-w-2xl">
            {/* EYEBROW */}
            <Eyebrow text="Our Services" variant="services" />

            {/* HEADING */}
            <h2
              className="
              font-[var(--font-display)]
              text-[clamp(3rem,5.5vw,4.5rem)]
              font-[var(--weight-regular)]
              leading-[0.95]
              tracking-[var(--tracking-tight)]
              text-[var(--color-text-primary)]
            "
            >
              From vision
              <br />
              <span
                className="
                italic text-[var(--color-primary)]
              "
              >
                to living.
              </span>
            </h2>
          </div>

          {/* DESCRIPTION */}
          <p
            className="
            max-w-md
            font-[var(--font-body)]
            text-sm leading-[var(--leading-relaxed)]
            text-[var(--color-text-secondary)]
            lg:mb-2 lg:text-base
          "
          >
            An integrated approach to creating exceptional spaces, bringing
            design, engineering, craftsmanship and finishing together under one
            roof.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div
          className="
          grid grid-cols-1 gap-x-6 gap-y-12
          sm:grid-cols-2
          lg:grid-cols-4 lg:gap-x-5 lg:gap-y-0
        "
        >
          {services.map((service) => (
            <article key={service.number} className="group flex flex-col">
              {/* IMAGE */}
              <a
                href={service.href}
                aria-label={`Explore ${service.title} service`}
                className="
                  relative block aspect-[4/5]
                  overflow-hidden
                  bg-[var(--color-bg-tertiary)]
                "
              >
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  className="
                    h-full w-full object-cover
                    transition-transform
                    duration-[var(--duration-reveal)]
                    ease-[var(--ease-smooth)]
                    group-hover:scale-[1.06]
                  "
                />

                {/* IMAGE OVERLAY */}
                <div
                  className="
                  absolute inset-0
                  bg-[var(--color-bg-dark)]
                  opacity-0
                  transition-opacity duration-[var(--duration-normal)]
                  group-hover:opacity-20
                "
                />

                {/* IMAGE NUMBER */}
                <span
                  className="
                  absolute left-5 top-5
                  font-[var(--font-display)]
                  text-2xl italic
                  text-[var(--color-text-inverse)]
                  drop-shadow-md
                "
                >
                  {service.number}
                </span>

                {/* HOVER INDICATOR */}
                <span
                  className="
                  absolute bottom-5 right-5
                  flex h-11 w-11 items-center justify-center
                  rounded-full
                  bg-[var(--color-bg-primary)]
                  text-[var(--color-primary)]
                  opacity-0 translate-y-3
                  transition-all duration-[var(--duration-normal)]
                  group-hover:translate-y-0
                  group-hover:opacity-100
                "
                >
                  ↗
                </span>
              </a>

              {/* SERVICE CONTENT */}
              <div
                className="
                flex flex-1 flex-col
                pb-6 pt-6
              "
              >
                {/* NUMBER */}
                <span
                  className="
                  font-[var(--font-body)]
                  text-[10px] font-[var(--weight-medium)]
                  tracking-[var(--tracking-widest)]
                  text-[var(--color-primary)]
                "
                >
                  SERVICE / {service.number}
                </span>

                {/* TITLE */}
                <h3
                  className="
                  mt-3
                  font-[var(--font-display)]
                  text-4xl font-[var(--weight-regular)]
                  leading-none
                  text-[var(--color-text-primary)]
                  transition-colors duration-300
                  group-hover:text-[var(--color-primary)]
                "
                >
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                  mt-4 min-h-[72px]
                  font-[var(--font-body)]
                  text-sm leading-[var(--leading-relaxed)]
                  text-[var(--color-text-secondary)]
                "
                >
                  {service.description}
                </p>

                {/* SERVICE LINK */}
                {/* <a
                  href={service.href}
                  className="
                    group/link mt-6 inline-flex w-fit
                    items-center gap-3
                    font-[var(--font-body)]
                    text-[10px] font-[var(--weight-semibold)]
                    uppercase tracking-[var(--tracking-wider)]
                    text-[var(--color-primary)]
                  "
                >
                  <span
                    className="
                    border-b border-transparent pb-1
                    transition-all duration-300
                    group-hover/link:border-[var(--color-primary)]
                  "
                  >
                    Explore Service
                  </span>

                  <span
                    className="
                    transition-transform duration-300
                    group-hover/link:translate-x-1
                    group-hover/link:-translate-y-1
                  "
                  >
                    ↗
                  </span>
                </a> */}
              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM STATEMENT */}
        <div
          className="
          mt-16 flex flex-col justify-between gap-5
          border-t border-[var(--color-border)]
          pt-7 sm:flex-row sm:items-center
        "
        >
          <p
            className="
            font-[var(--font-display)]
            text-xl italic
            text-[var(--color-text-secondary)]
          "
          >
            One vision. Every detail. Complete execution.
          </p>

          <a
            href="/services"
            className="
              group inline-flex items-center gap-4
              font-[var(--font-body)]
              text-[10px] font-[var(--weight-semibold)]
              uppercase tracking-[var(--tracking-wider)]
              text-[var(--color-primary)]
            "
          >
            View All Services
            <span
              className="
              transition-transform duration-300
              group-hover:translate-x-2
            "
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
