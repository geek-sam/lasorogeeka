import { useState } from "react";
import { awards, publications } from "../../../data/dataConfig";

// const publications = [
//   { name: "DESIGN JOURNAL", subtitle: "Architecture & Interiors" },
//   { name: "ARCHITECTURE TODAY", subtitle: "Design & Architecture" },
//   { name: "DESIGN ANTHOLOGY", subtitle: "The Art of Living" },
//   { name: "PROPERTY MAGAZINE", subtitle: "Property & Lifestyle" },
//   { name: "INTERIORS REVIEW", subtitle: "Interior Perspectives" },
//   { name: "GLOBAL DESIGN", subtitle: "Design & Innovation" },
// ];

const Recognition = () => {
  const [activeAward, setActiveAward] = useState<number | null>(null);
  console.log(activeAward);

  const marqueePublications = [
    ...publications,
    ...publications,
    ...publications,
  ];

  return (
    <section
      id="recognition"
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
                Awards and recognitions
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
              font-[var(--font-display)]
              text-[clamp(3rem,5.5vw,5.5rem)]
              font-[var(--weight-regular)]
              leading-[0.95]
              tracking-[var(--tracking-tight)]
              text-[var(--color-text-primary)]
            "
            >
              Excellence,
              <br />
              <span
                className="
                text-[var(--color-primary)]
              "
              >
                recognised.
              </span>
            </h2>
          </div>

          {/* DESCRIPTION */}
          <div className="max-w-sm lg:mb-2">
            <p
              className="
              font-[var(--font-body)]
              text-sm leading-[var(--leading-relaxed)]
              text-[var(--color-text-secondary)]
              sm:text-base
            "
            >
              A reflection of our pursuit of exceptional design, thoughtful
              craftsmanship and uncompromising standards across every project.
            </p>
          </div>
        </div>

        {/* AWARDS LIST */}
        <div className="w-full">
          {/* TABLE HEADER */}
          <div
            className="
            hidden grid-cols-12 gap-4
            border-y border-[var(--color-border)]
            py-4 lg:grid
          "
          >
            <span
              className="
              col-span-4 font-[var(--font-body)]
              text-[10px] uppercase
              tracking-[var(--tracking-wider)]
              text-[var(--color-text-muted)]
            "
            >
              Award / Recognition
            </span>

            <span
              className="
              col-span-1 font-[var(--font-body)]
              text-[10px] uppercase
              tracking-[var(--tracking-wider)]
              text-[var(--color-text-muted)]
            "
            >
              Year
            </span>

            <span
              className="
              col-span-2 font-[var(--font-body)]
              text-[10px] uppercase
              tracking-[var(--tracking-wider)]
              text-[var(--color-text-muted)]
            "
            >
              Category
            </span>

            <span
              className="
              col-span-3 font-[var(--font-body)]
              text-[10px] uppercase
              tracking-[var(--tracking-wider)]
              text-[var(--color-text-muted)]
            "
            >
              Awarding Organization
            </span>

            <span
              className="
              col-span-2 text-right
              font-[var(--font-body)]
              text-[10px] uppercase
              tracking-[var(--tracking-wider)]
              text-[var(--color-text-muted)]
            "
            >
              Publication
            </span>
          </div>

          {/* AWARD ITEMS */}
          {awards.map((award, index) => (
            <article
              key={award.id}
              onMouseEnter={() => setActiveAward(award.id)}
              onMouseLeave={() => setActiveAward(null)}
              className="
                group grid grid-cols-1 gap-4
                border-b border-[var(--color-border)]
                py-6
                transition-all duration-[var(--duration-normal)]
                hover:bg-[var(--color-bg-primary)]
                lg:grid-cols-12 lg:items-center
                lg:gap-4 lg:px-4
              "
            >
              {/* AWARD NAME */}
              <div className="lg:col-span-4">
                <div className="flex items-start gap-4">
                  <span
                    className="
                    mt-1 font-[var(--font-display)]
                    text-lg 
                    text-[var(--color-primary)]
                  "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3
                    className="
                    font-[var(--font-display)]
                    text-xl font-[var(--weight-medium)]
                    
                    text-[var(--color-text-primary)]
                    transition-colors duration-300
                    group-hover:text-[var(--color-primary)]
                    sm:text-xl
                  "
                  >
                    {award.name}
                  </h3>
                </div>
              </div>

              {/* MOBILE METADATA */}
              <div
                className="
                flex flex-wrap items-center gap-x-5 gap-y-3
                pl-8 lg:contents
              "
              >
                {/* YEAR */}
                <div
                  className="
                  lg:col-span-1 lg:pl-0
                "
                >
                  <span
                    className="
                    font-[var(--font-display)]
                    text-xl text-[var(--color-text-primary)]
                  "
                  >
                    {award.year}
                  </span>
                </div>

                {/* CATEGORY */}
                <div className="lg:col-span-2">
                  <span
                    className="
                    inline-flex w-fit
                    border border-[var(--color-border)]
                    px-3 py-2
                    font-[var(--font-body)]
                    text-[10px] uppercase
                    tracking-[var(--tracking-wide)]
                    text-[var(--color-text-secondary)]
                  "
                  >
                    {award.category}
                  </span>
                </div>

                {/* ORGANIZATION */}
                <div
                  className="
                  lg:col-span-3
                "
                >
                  <span
                    className="
                    font-[var(--font-body)]
                    text-xs leading-relaxed
                    text-[var(--color-text-secondary)]
                  "
                  >
                    {award.organization}
                  </span>
                </div>

                {/* PUBLICATION LINK */}
                <div
                  className="
                  flex items-center justify-between gap-4
                  lg:col-span-2 lg:justify-end
                "
                >
                  <span
                    className="
                    font-[var(--font-body)]
                    text-xs text-[var(--color-text-muted)]
                    lg:hidden
                  "
                  >
                    Featured in
                  </span>

                  <a
                    href={award.link}
                    aria-label={`Read ${award.name} publication`}
                    className="
                      group/link inline-flex items-center gap-2
                      font-[var(--font-body)]
                      text-xs font-[var(--weight-medium)]
                      text-[var(--color-text-primary)]
                      transition-colors duration-300
                      hover:text-[var(--color-primary)]
                    "
                  >
                    {award.publication}

                    <span
                      className="
                      text-[var(--color-primary)]
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
            </article>
          ))}
        </div>

        {/* FEATURED PUBLICATIONS */}
        <div className="mt-20 lg:mt-28">
          {/* SECTION LABEL */}
          <div className="mb-9 flex items-center gap-5">
            <span
              className="
      shrink-0 font-[var(--font-body)]
      text-[10px] font-[var(--weight-medium)]
      uppercase tracking-[var(--tracking-widest)]
      text-[var(--color-text-muted)]
    "
            >
              Featured Publications
            </span>

            <span
              className="
      h-px flex-1 bg-[var(--color-border)]
    "
            />
          </div>

          {/* INFINITE LOGO MARQUEE */}
          <div
            className="
      group relative w-full overflow-hidden
      [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]
    "
          >
            <div
              className="
        flex w-max
        animate-[recognitionMarquee_75s_linear_infinite]
        group-hover:[animation-play-state:paused]
        motion-reduce:animate-none
      "
            >
              {/* LOGO GROUP 01 */}
              <div
                className="
          flex shrink-0 items-center
          gap-12 pr-12
          sm:gap-16 sm:pr-16
          lg:gap-20 lg:pr-20
        "
              >
                {marqueePublications.map((publication, index) => (
                  <a
                    key={`logo-primary-${index}`}
                    href={publication.link || undefined}
                    target={publication.link ? "_blank" : undefined}
                    rel={publication.link ? "noopener noreferrer" : undefined}
                    aria-label={publication.name}
                    className="
              flex h-20 w-36 shrink-0
              items-center justify-center
              sm:w-44
            "
                  >
                    <img
                      src={publication.logo}
                      alt={publication.name}
                      loading="lazy"
                      className="
                max-h-30 max-w-full
                object-contain
                grayscale opacity-50
                transition-all duration-[var(--duration-normal)]
                hover:grayscale-0 hover:opacity-100
              "
                    />
                  </a>
                ))}
              </div>

              {/* LOGO GROUP 02 - EXACT DUPLICATE */}
              <div
                aria-hidden="true"
                className="
          flex shrink-0 items-center
          gap-12 pr-12
          sm:gap-16 sm:pr-16
          lg:gap-20 lg:pr-20
        "
              >
                {marqueePublications.map((publication, index) => (
                  <div
                    key={`logo-duplicate-${index}`}
                    className="
              flex h-20 w-36 shrink-0
              items-center justify-center
              sm:w-44
            "
                  >
                    <img
                      src={publication.logo}
                      alt=""
                      loading="lazy"
                      className="
                max-h-30 max-w-full
                object-contain
                grayscale opacity-50
              "
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recognition;
