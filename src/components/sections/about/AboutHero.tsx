import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Eyebrow from "../../Eyebrow";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  {
    src: "/images/about/about-01.png",
    alt: "Interior design plans and material selections",
    className: "about-image-one",
  },
  {
    src: "/images/about/about-02.png",
    alt: "Interior design studio and creative collaboration",
    className: "about-image-two",
  },
  {
    src: "/images/about/about-03.png",
    alt: "Architectural silhouette in a contemporary interior",
    className: "about-image-three",
  },
  {
    src: "/images/about/about-04.png",
    alt: "Sunlit contemporary interior space",
    className: "about-image-four",
  },
  {
    src: "/images/about/about-05.png",
    alt: "Sunlit contemporary interior space",
    className: "about-image-five",
  },
  {
    src: "/images/about/about-06.png",
    alt: "Sunlit contemporary interior space",
    className: "about-image-six",
  },
];

export default function AboutHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!section || !viewport || !track) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        // Measure the content overflow beyond the visible gallery.
        const getScrollDistance = () =>
          Math.max(0, track.scrollWidth - viewport.clientWidth);

        gsap.to(track, {
          x: () => -getScrollDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${getScrollDistance()}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      });

      mm.add("(max-width: 767px)", () => {
        gsap.fromTo(
          track.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: viewport,
              start: "top 85%",
              once: true,
            },
          },
        );
      });

      return () => mm.revert();
    }, section);

    // Recalculate scroll measurements after gallery images load.
    const refresh = () => ScrollTrigger.refresh();

    const images = Array.from(track.querySelectorAll("img"));

    images.forEach((img) => {
      if (!img.complete) {
        img.addEventListener("load", refresh);
        img.addEventListener("error", refresh);
      }
    });

    refresh();

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", refresh);
        img.removeEventListener("error", refresh);
      });

      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[var(--color-bg-primary)] md:min-h-[100svh]"
    >
      <div className="mx-auto flex min-h-[100svh] max-w-[var(--container-width)] flex-col justify-center px-[var(--page-gutter)] py-16 md:py-32">
        {/* Heading and description */}
        <div className="grid grid-cols-1 gap-8 pb-10 md:grid-cols-12 md:items-end md:pb-8">
          <div className="md:col-span-8">
            {/* Eyebrow */}
            <Eyebrow text="La Sorogeeka Interiors" variant="other" />

            <h1 className="font-[var(--font-display)] text-[clamp(3rem,5.5vw,4.5rem)] leading-[0.95] tracking-[-0.045em] text-[var(--color-text-primary)]">
              The Studio Behind
              <br />
              The Spaces
            </h1>
          </div>

          <div className="md:col-span-4 md:pb-2">
            <p className="ml-auto max-w-sm font-[var(--font-body)] text-base leading-relaxed text-[var(--color-text-secondary)] md:text-right md:text-lg">
              We approach every space with intention, balancing function,
              atmosphere, and timeless character.
            </p>
          </div>
        </div>

        {/* Gallery viewport */}
        <div className="border-t border-[var(--color-border-light)] pt-6">
          <div ref={viewportRef} className="overflow-hidden">
            <div
              ref={trackRef}
              className="about-gallery-track grid grid-cols-1 gap-4 sm:grid-cols-2 md:flex md:w-max md:gap-4"
            >
              {galleryImages.map((image, index) => (
                <div
                  key={image.src}
                  className="about-gallery-item relative shrink-0 overflow-hidden"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading={index < 4 ? "eager" : "lazy"}
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
