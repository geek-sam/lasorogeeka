const storyParagraphs = [
  "At LSI, we design and build some of the finest homes in the world — spaces defined by craftsmanship, precision, and timeless luxury.",

  "Over nearly four decades, we have grown into a trusted name in ultra-luxury residential interiors, delivering private palaces, signature villas, and bespoke residences across the region.",

  "What truly sets us apart is complete vertical integration. From initial concept to final handover, every phase is executed in-house by dedicated design, procurement, project management, and build teams—supported by our own state-of-the-art joinery and marble manufacturing facilities.",

  "This unified control over quality, timelines, and detailing enables us to create tailor-made environments that reflect each client’s individuality—homes that stand as lasting expressions of art, comfort, and identity.",
];

export default function OurStory() {
  return (
    <section
      id="our-story"
      className="relative overflow-hidden bg-[var(--color-bg-secondary)] py-[var(--section-space-lg)]"
    >
      <div className="mx-auto max-w-[var(--container-width)] px-[var(--page-gutter)]">
        {/* Section introduction */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <span className="mb-5 flex items-center gap-3 font-[var(--font-body)] text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
              <span className="h-px w-7 bg-[var(--color-primary)]" />
              The LSI Philosophy
            </span>

            <h2 className="max-w-3xl font-[var(--font-display)] text-[clamp(3rem,5.5vw,4.5rem)] leading-[0.98] tracking-[-0.04em] text-[var(--color-text-primary)]">
              A legacy built on
              <span className="block text-[var(--color-primary)]">
                craftsmanship.
              </span>
            </h2>
          </div>

          <div className="md:col-span-5 md:pb-2">
            <p className="max-w-md font-[var(--font-body)] text-base leading-relaxed text-[var(--color-text-secondary)] md:ml-auto md:text-right">
              Nearly four decades of shaping exceptional residences through
              design, precision and an uncompromising pursuit of excellence.
            </p>
          </div>
        </div>

        {/* Main story layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Story content */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <span className="mb-8 font-[var(--font-body)] text-xs uppercase tracking-[0.18em] text-[var(--color-primary)]">
              Our Story
            </span>

            <div className="space-y-6">
              {storyParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`font-[var(--font-body)] leading-[1.85] ${
                    index === 0
                      ? "text-lg font-medium text-[var(--color-text-primary)] md:text-xl"
                      : "text-sm text-[var(--color-text-secondary)] md:text-lg"
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Closing statement */}
            {/* <div className="mt-10 border-l-2 border-[var(--color-primary)] py-2 pl-6">
              <p className="font-[var(--font-display)] text-2xl leading-snug text-[var(--color-text-primary)] md:text-3xl">
                We don’t just create interiors — we build homes that stand as
                enduring expressions of art, comfort, and identity.
              </p>
            </div> */}
          </div>

          {/* Image composition */}
          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="/images/our-story-main.png"
                alt="A bespoke luxury residence designed by LSI"
                className="h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.04]"
              />
            </div>

            {/* <div className="absolute -bottom-7 right-0 hidden w-[48%] border-[8px] border-[var(--color-bg-primary)] md:block">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/images/about/our-story-detail.jpg"
                  alt="Detail of refined interior craftsmanship"
                  className="h-full w-full object-cover"
                />
              </div>
            </div> */}

            <span className="mt-5 block font-[var(--font-body)] text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
              Thoughtfully designed. Meticulously crafted.
            </span>
          </div>
        </div>

        {/* Capability strip */}
        <div className="mt-24 grid grid-cols-2 border-y border-[var(--color-border)] md:grid-cols-4">
          {["Design", "Project Management", "Procurement", "Execution"].map(
            (item, index) => (
              <div
                key={item}
                className={`flex min-h-24 items-center gap-4 py-6 ${
                  index % 2 === 0 ? "pr-4" : "pl-4"
                } md:justify-center md:px-5 ${
                  index < 2
                    ? "border-b border-[var(--color-border)] md:border-b-0"
                    : ""
                } ${
                  index % 2 === 0
                    ? "md:border-r md:border-[var(--color-border)]"
                    : ""
                }`}
              >
                <span className="font-[var(--font-display)] text-lg text-[var(--color-primary)]">
                  0{index + 1}
                </span>
                <span className="font-[var(--font-body)] text-xs text-[var(--color-text-primary)] md:text-sm">
                  {item}
                </span>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
