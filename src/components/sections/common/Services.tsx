import { useEffect, useState } from "react";
import { services } from "../../../data/dataConfig";
import Eyebrow from "../../Eyebrow";

const Services = () => {
  const [activeService, setActiveService] = useState("01");
  const [isPaused, setIsPaused] = useState(false);

  // AUTO SWITCH SERVICES
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (prefersReducedMotion.matches || isPaused) return;

    const interval = window.setInterval(() => {
      setActiveService((current) => {
        const currentIndex = services.findIndex(
          (service) => service.id === current,
        );

        const nextIndex = (currentIndex + 1) % services.length;

        return services[nextIndex].id;
      });
    }, 4000);

    return () => window.clearInterval(interval);
  }, [isPaused, activeService]);

  const activeItem =
    services.find((service) => service.id === activeService) ?? services[0];

  return (
    <section
      id="services"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setIsPaused(false);
        }
      }}
      className="
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
              leading-[var(--leading-tight)]
              tracking-[var(--tracking-tight)]
              text-[var(--color-text-primary)]
            "
            >
              What We{" "}
              <span
                className="
                text-[var(--color-primary)]
              "
              >
                Do Best
              </span>
            </h2>
          </div>
          {/* DESCRIPTION */}
          <div className="max-w-sm lg:mb-2">
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
              design, engineering, craftsmanship and finishing together under
              one roof.
            </p>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div
          className="
            grid grid-cols-1 items-stretch
            gap-8 lg:grid-cols-[2.1fr_0.95fr]
            lg:gap-10 xl:gap-12
          "
        >
          {/* LEFT: FEATURED IMAGE */}
          <div
            className="
    relative aspect-[4/3] overflow-hidden
    bg-[var(--color-bg-tertiary)]
    lg:aspect-auto lg:min-h-[500px]
  "
          >
            <img
              key={activeItem.id}
              src={activeItem.image}
              alt={activeItem.alt}
              loading="lazy"
              className="
      absolute inset-0 h-full w-full
      object-cover
      animate-[serviceImageReveal_900ms_var(--ease-smooth)_both]
      will-change-transform
    "
            />

            {/* IMAGE OVERLAY */}
            <div
              className="
      pointer-events-none absolute inset-0
      bg-[var(--color-bg-dark)]
      opacity-[0.04]
    "
            />

            {/* IMAGE CATEGORY */}
            <div
              className="
      absolute bottom-5 left-5
      flex items-center gap-3
      bg-[var(--color-bg-primary)]
      px-4 py-3
      transition-all duration-[var(--duration-normal)]
    "
            >
              <span
                className="
        font-[var(--font-display)]
        text-lg italic
        text-[var(--color-primary)]
      "
              >
                {activeItem.id}
              </span>

              <span
                className="
      h-4 w-px bg-[var(--color-border)]
    "
              />

              <span
                className="
      font-[var(--font-body)]
      text-[10px] font-[var(--weight-medium)]
      uppercase tracking-[var(--tracking-wider)]
      text-[var(--color-text-primary)]
    "
              >
                {activeItem.title}
              </span>
            </div>
          </div>

          {/* RIGHT: SERVICE ACCORDION */}
          <div className="flex flex-col justify-end">
            {services.map((service) => {
              const isActive = activeService === service.id;

              return (
                <article
                  key={service.id}
                  className="
                    border-b border-[var(--color-border)]
                    first:border-t
                  "
                >
                  {/* SERVICE TRIGGER */}
                  <button
                    type="button"
                    aria-expanded={isActive}
                    aria-controls={`service-panel-${service.id}`}
                    onClick={() => setActiveService(isActive ? "" : service.id)}
                    className="
                      group flex w-full items-center
                      justify-between gap-4
                      py-5 text-left
                      transition-colors duration-[var(--duration-normal)]
                      sm:py-6
                    "
                  >
                    <span
                      className="
                        font-[var(--font-body)]
                        text-lg font-[var(--weight-medium)]
                        tracking-[-0.02em]
                        text-[var(--color-text-primary)]
                        transition-colors duration-300
                        group-hover:text-[var(--color-primary)]
                        sm:text-xl
                      "
                    >
                      {service.title}
                    </span>

                    {/* <span
                      className={`
                        flex h-8 w-8 shrink-0
                        items-center justify-center
                        rounded-full
                        border border-[var(--color-border)]
                        font-[var(--font-body)]
                        text-lg
                        transition-all duration-[var(--duration-normal)]
                        ${
                          isActive
                            ? "rotate-45 border-[var(--color-primary)] text-[var(--color-primary)]"
                            : "text-[var(--color-text-secondary)]"
                        }
                      `}
                      aria-hidden="true"
                    >
                      +
                    </span> */}
                  </button>

                  {/* EXPANDED CONTENT */}
                  <div
                    id={`service-panel-${service.id}`}
                    aria-hidden={!isActive}
                    className={`
    grid transition-[grid-template-rows,opacity]
    duration-[var(--duration-slow)]
    ease-[var(--ease-smooth)]
    ${isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
  `}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={`
        pb-6 transition-transform
        duration-[var(--duration-slow)]
        ease-[var(--ease-smooth)]
        ${isActive ? "translate-y-0" : "-translate-y-2"}
      `}
                      >
                        {/* DESCRIPTION */}
                        <p
                          className="
          max-w-md
          font-[var(--font-body)]
          text-sm leading-[var(--leading-relaxed)]
          text-[var(--color-text-secondary)]
          sm:text-base
        "
                        >
                          {service.description}
                        </p>

                        {/* CTA */}
                        <a
                          href={service.href}
                          tabIndex={isActive ? 0 : -1}
                          className="
          group/link mt-6 inline-flex
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
            transition-colors duration-300
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
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* AUTOPLAY PROGRESS INDICATOR */}
        <div
          className="
          mt-8 h-px w-full max-w-[400px] overflow-hidden
          bg-[var(--color-border)]
        "
        >
          <div
            key={`${activeService}-${isPaused}`}
            className={`
      h-full bg-[var(--color-primary)]
      ${isPaused ? "w-0" : "animate-[serviceProgress_6s_linear_forwards]"}
    `}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
