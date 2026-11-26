import { useState } from "react";

const faqs = [
  {
    question: "What does your interior design process look like?",
    answer:
      "Our process begins with understanding your vision, lifestyle and requirements. We then move through concept development, space planning, design detailing, material selection and execution — ensuring every stage is thoughtfully coordinated.",
  },
  {
    question: "Do you provide 3D renders before execution?",
    answer:
      "Yes. We develop detailed 3D visualisations to help you understand the proposed spaces, materials, finishes, furniture and lighting before execution begins.",
  },
  {
    question: "Do you handle sourcing materials and furniture?",
    answer:
      "Yes. We assist with sourcing and selecting materials, furniture, lighting, fixtures and finishes, working with trusted vendors to maintain the design vision and quality.",
  },
  {
    question: "Can you work with the furniture I already own?",
    answer:
      "Absolutely. We can incorporate existing furniture and meaningful pieces into the design wherever they complement the overall concept, layout and functionality.",
  },
  {
    question: "How many design revisions do we get?",
    answer:
      "Revision rounds and approval stages are discussed at the beginning of the project and outlined in the scope of work. Our aim is to refine the design collaboratively while keeping the project on track.",
  },
  {
    question: "Do you also manage on-site execution and contractors?",
    answer:
      "Yes. Our integrated approach can include project coordination, site supervision, contractor management and execution oversight to help ensure the design is delivered as intended.",
  },
  {
    question: "What spaces do you design — only homes or commercial too?",
    answer:
      "We work across residential and commercial environments, creating considered spaces that respond to their purpose, architecture and the people who use them.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="bg-[var(--color-bg-primary)] py-[var(--section-space-lg)]"
    >
      <div className="mx-auto max-w-[var(--container-width)] px-[var(--page-gutter)]">
        {/* Section heading */}
        <div className="border-b border-[var(--color-border)] pb-7 md:pb-8">
          <h2 className="font-[var(--font-display)] text-[clamp(3rem,5.5vw,4.5rem)] leading-[1.05] tracking-[-0.04em] text-[var(--color-text-primary)]">
            Questions worth asking
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 gap-12 pt-10 lg:grid-cols-[0.9fr_1.6fr] lg:gap-20 lg:pt-12">
          {/* Contact card */}
          <div className="flex h-fit min-h-[350px] flex-col items-start rounded-[var(--radius-xl)] bg-[var(--color-bg-tertiary)] p-7 md:p-9">
            <img
              src="/images/team/miryam-goel.png"
              alt="La Sorogeeka Interiors consultant"
              className="mb-8 h-14 w-14 rounded-[var(--radius-md)] object-cover"
            />

            <h3 className="max-w-sm font-[var(--font-body)] text-xl font-medium leading-snug text-[var(--color-text-primary)] md:text-2xl">
              Can't find what you're looking for?
            </h3>

            <p className="mt-4 max-w-sm font-[var(--font-body)] text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg">
              We're just a message away — real answers from real people, no
              bots, no waiting.
            </p>

            <a
              href="/contact"
              className="group mt-auto inline-flex items-center gap-5 border border-[var(--color-border-dark)] px-4 py-3 font-[var(--font-body)] text-sm text-[var(--color-text-primary)] transition-all duration-300 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-text-inverse)]"
            >
              Let's talk
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </a>
          </div>

          {/* FAQ accordion */}
          <div className="w-full">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              const answerId = `faq-answer-${index}`;

              return (
                <div
                  key={faq.question}
                  className="border-b border-[var(--color-border)]"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setActiveIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left md:py-7"
                  >
                    <span className="font-[var(--font-body)] text-base font-medium leading-snug text-[var(--color-text-primary)] transition-colors duration-300 group-hover:text-[var(--color-primary)] md:text-lg">
                      {faq.question}
                    </span>

                    <span
                      className={`relative flex h-6 w-6 shrink-0 items-center justify-center text-[var(--color-text-primary)] transition-transform duration-500 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <span className="absolute h-px w-4 bg-current" />
                      <span
                        className={`absolute h-4 w-px bg-current transition-transform duration-300 ${
                          isOpen ? "scale-y-0" : "scale-y-100"
                        }`}
                      />
                    </span>
                  </button>

                  <div
                    id={answerId}
                    aria-hidden={!isOpen}
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[var(--ease-smooth)] ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-7 pr-10 font-[var(--font-body)] text-sm leading-[1.8] text-[var(--color-text-secondary)] md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
