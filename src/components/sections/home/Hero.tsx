import { useEffect, useRef, useState } from "react";
import Eyebrow from "../../Eyebrow";

interface HeroProps {
  videoSrc?: string;
  posterSrc?: string;
}

const Hero = ({
  videoSrc = "/lsi-interior-hero.mp4",
  posterSrc = "/images/lsi-hero-poster.jpg",
}: HeroProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const handleLoaded = () => setVideoReady(true);

    video.addEventListener("playing", handleLoaded);

    return () => {
      video.removeEventListener("playing", handleLoaded);
    };
  }, []);

  return (
    <section
      className="
        relative isolate flex min-h-[100svh]
        w-full flex-col overflow-hidden
        bg-[var(--color-bg-dark)]
      "
    >
      {/* BACKGROUND VIDEO */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={posterSrc}
          className={`
            h-full w-full object-cover
            transition-opacity duration-[var(--duration-reveal)]
            ${videoReady ? "opacity-100" : "opacity-0"}
          `}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* Poster fallback */}
        <div
          className="
            absolute inset-0 -z-10
            bg-[var(--color-bg-dark)]
          "
        />
      </div>

      {/* CINEMATIC OVERLAY */}
      <div
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-[linear-gradient(90deg,rgba(23,19,18,0.72)_0%,rgba(23,19,18,0.38)_48%,rgba(23,19,18,0.12)_100%)]
        "
      />

      <div
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-[linear-gradient(0deg,rgba(23,19,18,0.62)_0%,transparent_35%,rgba(23,19,18,0.16)_100%)]
        "
      />

      {/* HERO CONTENT */}
      <div
        className="
          relative mx-auto flex w-full max-w-[var(--container-width)]
          flex-1 flex-col justify-center
          px-[var(--page-gutter)]
          pb-12 pt-[calc(var(--header-height)+4rem)]
          sm:pb-6
        "
      >
        <div className="max-w-4xl">
          {/* EYEBROW */}
          <Eyebrow text="La Sorogeeka Interiors" variant="hero" />

          {/* MAIN HEADING */}
          <h1
            className="
              max-w-4xl
              font-[var(--font-display)]
              text-[clamp(3.5rem,6.5vw,5.5rem)]
              font-[var(--weight-regular)]
              leading-[1]
              tracking-[-0.045em]
              text-[var(--color-text-inverse)]
              animate-[heroReveal_1.2s_var(--ease-smooth)_both]
            "
          >
            Spaces That
            <br />
            <span className="text-[var(--color-accent-light)]">
              Speak of You.
            </span>
          </h1>

          {/* SUPPORTING COPY */}
          <p
            className="
              mt-8 max-w-md
              font-[var(--font-body)]
              text-sm font-[var(--weight-light)]
              leading-[var(--leading-relaxed)]
              text-[var(--color-text-inverse)]
              opacity-85
              animate-[heroReveal_1.4s_var(--ease-smooth)_both]
              sm:mt-10 sm:text-base
            "
          >
            We create exceptional interiors that bring architecture,
            craftsmanship and individuality together - shaping spaces that
            transcend trends and stand the test of time.
          </p>

          {/* CTA ACTIONS */}
          <div
            className="
              mt-10 flex flex-wrap items-center gap-7
              animate-[heroReveal_1.6s_var(--ease-smooth)_both]
              sm:mt-12 sm:gap-10
            "
          >
            {/* PRIMARY CTA */}
            <a
              href="/projects"
              className="
                group inline-flex min-h-14
                items-center gap-8
                bg-[var(--color-primary)]
                px-7 py-4
                font-[var(--font-body)]
                text-[12px] font-[var(--weight-semibold)]
                uppercase tracking-[var(--tracking-wider)]
                text-[var(--color-text-inverse)]
                transition-all duration-[var(--duration-normal)]
                hover:bg-[var(--color-primary-dark)]
                sm:px-8
              "
            >
              <span>Explore Our Work</span>

              <span
                className="
                  text-base transition-transform
                  duration-[var(--duration-normal)]
                  group-hover:translate-x-1
                "
              >
                ↗
              </span>
            </a>

            {/* SECONDARY CTA */}
            <a
              href="/about"
              className="
                group inline-flex items-center gap-3
                py-3 font-[var(--font-body)]
                text-[12px] font-[var(--weight-medium)]
                uppercase tracking-[var(--tracking-wider)]
                text-[var(--color-text-inverse)]
              "
            >
              <span
                className="
                border-b border-[var(--color-text-inverse)]
                pb-1 transition-colors duration-300
                group-hover:border-[var(--color-accent-light)]
                group-hover:text-[var(--color-accent-light)]
              "
              >
                Discover Our Approach
              </span>

              <span
                className="
                transition-transform duration-300
                group-hover:translate-x-1
              "
              >
                →
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM INFORMATION */}
      <div
        className="
          relative mx-auto flex w-full max-w-[var(--container-width)]
          items-end justify-between gap-6
          px-[var(--page-gutter)] pb-8 sm:pb-10
        "
      >
        {/* LEFT: BRAND POSITIONING */}
        {/* <div className="hidden flex-col gap-2 sm:flex">
          <span
            className="
              font-[var(--font-body)] text-[9px]
              uppercase tracking-[var(--tracking-widest)]
              text-[var(--color-text-inverse)] opacity-70
            "
          >
            Beyond Interiors
          </span>

          <span
            className="
              font-[var(--font-display)]
              text-xl italic
              text-[var(--color-text-inverse)]
            "
          >
            A signature of timeless living.
          </span>
        </div> */}

        {/* RIGHT: SCROLL INDICATOR */}
        <a
          href="#about"
          className="
            group mx-auto flex flex-col items-center gap-4
            font-[var(--font-body)]
            text-[9px] font-[var(--weight-medium)]
            uppercase tracking-[var(--tracking-widest)]
            text-[var(--color-text-inverse)]
          "
        >
          {/* <span>Scroll to Explore</span> */}

          <span
            className="
              flex h-10 w-10 items-center justify-center
              rounded-full border border-[var(--color-text-inverse)]
              border-opacity-50
              transition-all duration-[var(--duration-normal)]
              group-hover:bg-[var(--color-primary)]
              group-hover:border-[var(--color-primary)]
            "
          >
            ↓
          </span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
