import { publications } from "../../../data/dataConfig";
import Eyebrow from "../../Eyebrow";

export default function TrustedClients() {
  return (
    <>
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
          className="mx-auto w-full max-w-[var(--container-width)]
          px-[var(--page-gutter)]"
        >
          <div className="mb-10 border-b border-white/10 pb-8 sm:mb-14 sm:pb-10">
            {/* Eyebrow */}
            <Eyebrow text="Trusted By" variant="other" />

            {/* Main Title */}

            <h2 className="font-[var(--font-display)] text-[clamp(3rem,5.5vw,4.5rem)] leading-[0.98] tracking-[-0.04em] text-[var(--color-text-primary)]">
              Global
              <span className="text-[var(--color-primary)]"> brands.</span>
            </h2>
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
                {publications.map((publication, index) => (
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
                {publications.map((publication, index) => (
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
      </section>
    </>
  );
}
