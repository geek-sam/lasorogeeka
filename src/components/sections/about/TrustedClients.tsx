import { publications } from "../../../data/dataConfig";

export default function TrustedClients() {
  return (
    <div className="bg-[var(--color-bg-primary)] py-12">
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
  );
}
