import { useState } from "react";
import Eyebrow from "../../Eyebrow";

const processSteps = [
  {
    number: "01",
    title: "Vision & Design",
    subtitle: "Understanding & Concept",
    description:
      "Every project begins with understanding the client's aspirations, lifestyle and expectations. Our design team translates this vision into considered concepts, spatial planning, material palettes and detailed design development.",
    deliverables: [
      "Client consultation",
      "Project brief and vision",
      "Concept and space planning",
      "Materials and design detailing",
    ],
    image: "/images/process-01.png",
  },
  {
    number: "02",
    title: "Planning & Coordination",
    subtitle: "Project Management",
    description:
      "A dedicated project management approach brings every discipline together. We coordinate technical requirements, project planning, timelines and team responsibilities to maintain alignment throughout the project.",
    deliverables: [
      "Project planning",
      "Technical coordination",
      "Timeline management",
      "Team coordination",
    ],
    image: "/images/process-02.png",
  },
  {
    number: "03",
    title: "Procurement & Craftsmanship",
    subtitle: "Sourcing & Manufacturing",
    description:
      "Materials, finishes and furnishings are carefully sourced to meet the design vision. Our joinery and marble manufacturing facilities support bespoke craftsmanship and greater control over detailing and quality.",
    deliverables: [
      "Material procurement",
      "Furniture and fixture sourcing",
      "Bespoke joinery",
      "Marble manufacturing",
    ],
    image: "/images/process-03.png",
  },
  {
    number: "04",
    title: "Execution & Completion",
    subtitle: "Bringing It to Life",
    description:
      "The approved design moves into execution through coordinated on-site activities. Our teams oversee delivery, workmanship, installation and finishing, maintaining attention to quality and the intended design outcome through completion.",
    deliverables: [
      "On-site execution",
      "Workmanship and quality control",
      "Installation and finishing",
      "Project completion",
    ],
    image: "/images/process-04.png",
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="our-process"
      className="bg-[var(--color-bg-primary)] py-[var(--section-space-lg)]"
    >
      <div className="mx-auto max-w-[var(--container-width)] px-[var(--page-gutter)]">
        {/* Section heading */}
        <div className="mb-14 grid grid-cols-1 gap-7 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            {/* Eyebrow */}
            <Eyebrow text="Our Process" variant="other" />

            <h2 className="font-[var(--font-display)] text-[clamp(3rem,5.5vw,4.5rem)] leading-[0.98] tracking-[-0.04em] text-[var(--color-text-primary)]">
              From vision
              <br />
              <span className="text-[var(--color-primary)]">to reality.</span>
            </h2>
          </div>

          <div className="md:col-span-5 md:pb-2">
            <p className="max-w-md font-[var(--font-body)] text-base leading-relaxed text-[var(--color-text-secondary)] md:ml-auto md:text-right">
              An integrated approach where design, planning, procurement and
              execution come together under one coordinated vision.
            </p>
          </div>
        </div>

        {/* Process progress */}
        <div className="mb-6 flex items-center justify-between">
          <span className="font-[var(--font-body)] text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
            Our Process
          </span>

          <span className="font-[var(--font-body)] text-xs tabular-nums text-[var(--color-text-secondary)]">
            {String(activeStep + 1).padStart(2, "0")} / 04
          </span>
        </div>

        {/* Process cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => {
            const isActive = activeStep === index;

            return (
              <button
                type="button"
                key={step.number}
                onClick={() => setActiveStep(index)}
                aria-pressed={isActive}
                className={`group flex flex-col text-left transition-all duration-500 ${
                  isActive
                    ? "bg-[var(--color-bg-card)]"
                    : "bg-[var(--color-bg-primary)] hover:bg-[var(--color-bg-card)]"
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className={`h-full w-full object-cover transition-transform duration-700 ${
                      isActive ? "scale-100" : "scale-100 group-hover:scale-105"
                    }`}
                  />

                  <div className="absolute inset-0 bg-[var(--color-charcoal)]/15 transition-opacity duration-500 group-hover:opacity-0" />

                  <span className="absolute left-5 top-5 font-[var(--font-display)] text-3xl text-white">
                    {step.number}
                  </span>
                </div>

                {/* Card content */}
                <div className="flex flex-1 flex-col p-5 md:p-5">
                  <span className="mb-3 font-[var(--font-body)] text-[10px] uppercase tracking-[0.14em] text-[var(--color-primary)]">
                    {step.subtitle}
                  </span>

                  <h3 className="min-h-[3.5rem] font-[var(--font-display)] text-2xl leading-tight text-[var(--color-text-primary)]">
                    {step.title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active process details */}
        <div
          key={activeStep}
          className="mt-8 grid grid-cols-1 gap-8 border-t border-[var(--color-border)] pt-8 md:grid-cols-12 md:gap-12"
        >
          <div className="md:col-span-5">
            <span className="font-[var(--font-body)] text-xs uppercase tracking-[0.16em] text-[var(--color-primary)]">
              Step {processSteps[activeStep].number}
            </span>

            <h3 className="mt-4 font-[var(--font-display)] text-3xl leading-tight text-[var(--color-text-primary)] md:text-4xl">
              {processSteps[activeStep].title}
            </h3>
          </div>

          <div className="md:col-span-7">
            <p className="max-w-2xl font-[var(--font-body)] text-sm leading-[1.85] text-[var(--color-text-secondary)] md:text-base">
              {processSteps[activeStep].description}
            </p>

            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-4">
              {processSteps[activeStep].deliverables.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 font-[var(--font-body)] text-xs text-[var(--color-text-primary)]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
