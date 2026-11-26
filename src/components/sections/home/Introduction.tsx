const metrics = [
  {
    value: "38+",
    label: "Years of Legacy",
    description: "Decades of experience in luxury interiors.",
  },
  {
    value: "01",
    label: "Unified Vision",
    description: "Design, engineering and execution together.",
  },
  {
    value: "360°",
    label: "Design Approach",
    description: "A comprehensive approach to every detail.",
  },
  {
    value: "∞",
    label: "Lasting Impressions",
    description: "Spaces designed to transcend trends.",
  },
];

const Introduction = () => {
  return (
    <section
      id="about"
      className="
        relative overflow-hidden
        bg-[var(--color-bg-primary)]
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
        {/* INTRODUCTION GRID */}
        <div
          className="
            grid grid-cols-1 items-top
            gap-12 lg:grid-cols-2
            lg:gap-20 xl:gap-28
          "
        >
          {/* LEFT: CONTENT */}
          <div className="flex flex-col items-start">
            {/* EYEBROW */}
            <div className="mb-7 flex items-center gap-4">
              <span
                className="
                h-px w-5
                bg-[var(--color-primary)]
              "
              />

              <span
                className="
                font-[var(--font-body)]
                text-[var(--text-xs)]
                font-[var(--weight-medium)]
                uppercase tracking-[var(--tracking-widest)]
                text-[var(--color-primary)]
              "
              >
                Our Legacy
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                max-w-xl
                font-[var(--font-display)]
                text-[clamp(3rem,5.5vw,4.5rem)]
                font-[var(--weight-regular)]
                leading-[0.98]
                tracking-[var(--tracking-tight)]
                text-[var(--color-text-primary)]
              "
            >
              A legacy of
              <br />
              exceptional
              <br />
              <span
                className="
                text-[var(--color-primary)]
              "
              >
                living.
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-8 max-w-lg
                font-[var(--font-body)]
                text-[var(--text-base)]
                font-[var(--weight-regular)]
                leading-[var(--leading-relaxed)]
                text-[var(--color-text-secondary)]
                sm:text-[var(--text-lg)]
              "
            >
              Nearly four decades of experience in crafting bespoke luxury
              residences through design, engineering and execution.
            </p>

            {/* CTA */}
            <a
              href="/about"
              className="
                group mt-10 inline-flex
                items-center gap-5
                border-b border-[var(--color-primary)]
                pb-3
                font-[var(--font-body)]
                text-[var(--text-xs)]
                font-[var(--weight-semibold)]
                uppercase tracking-[var(--tracking-wider)]
                text-[var(--color-primary)]
                transition-all duration-[var(--duration-normal)]
                hover:gap-8
              "
            >
              <span>Discover Our Story</span>

              <span
                className="
                text-base
                transition-transform duration-300
                group-hover:translate-x-1
              "
              >
                →
              </span>
            </a>
          </div>

          {/* RIGHT: IMAGE COMPOSITION */}
          <div className="relative">
            {/* MAIN IMAGE */}
            <div
              className="
                relative aspect-[5/4]
                w-full overflow-hidden
                bg-[var(--color-bg-tertiary)]
              "
            >
              <img
                src="/images/intro-interior.png"
                alt="Elegant bespoke luxury residential interior"
                loading="lazy"
                className="
                  h-full w-full object-cover
                  transition-transform duration-[var(--duration-reveal)]
                  ease-[var(--ease-smooth)]
                  hover:scale-[1.04]
                "
              />

              {/* IMAGE OVERLAY */}
              <div
                className="
                absolute inset-0
                bg-[var(--color-bg-dark)]
                opacity-[0.04]
                pointer-events-none
              "
              />
            </div>

            {/* IMAGE CAPTION */}
            <div
              className="
              mt-4 flex items-center justify-between
              gap-4
            "
            >
              <span
                className="
                font-[var(--font-body)]
                text-[10px] uppercase
                tracking-[var(--tracking-wider)]
                text-[var(--color-text-muted)]
              "
              >
                Thoughtfully designed. Timelessly lived.
              </span>

              <span
                className="
                font-[var(--font-display)]
                text-lg italic
                text-[var(--color-primary)]
              "
              >
                LSI.
              </span>
            </div>
          </div>
        </div>

        {/* METRICS STRIP */}
        <div
          className="
            mt-24 border-y
            border-[var(--color-border)]
            lg:mt-32
          "
        >
          <div
            className="
            grid grid-cols-2
            divide-x divide-y
            divide-[var(--color-border)]
            lg:grid-cols-4 lg:divide-y-0
          "
          >
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="
                  flex flex-col items-start
                  px-5 py-8
                  sm:px-8 sm:py-10
                  lg:px-8 lg:py-12
                  xl:px-10
                "
              >
                {/* METRIC NUMBER */}
                <span
                  className="
                  font-[var(--font-display)]
                  text-4xl font-[var(--weight-regular)]
                  leading-none tracking-tight
                  text-[var(--color-primary)]
                  sm:text-5xl
                "
                >
                  {metric.value}
                </span>

                {/* METRIC LABEL */}
                <h3
                  className="
                  mt-5
                  font-[var(--font-body)]
                  text-[10px] font-[var(--weight-semibold)]
                  uppercase tracking-[var(--tracking-wider)]
                  text-[var(--color-text-primary)]
                  sm:text-xs
                "
                >
                  {metric.label}
                </h3>

                {/* METRIC DESCRIPTION */}
                <p
                  className="
                  mt-2 max-w-[220px]
                  font-[var(--font-body)]
                  text-xs leading-[var(--leading-relaxed)]
                  text-[var(--color-text-secondary)]
                "
                >
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
