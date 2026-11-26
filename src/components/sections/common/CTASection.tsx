import { Link } from "react-router-dom";
import Eyebrow from "../../Eyebrow";

export default function CTASection() {
  return (
    <>
      {/* Closing CTA */}
      <section className="bg-[var(--color-bg-dark)] py-[var(--section-space-lg)]">
        <div className="mx-auto max-w-[var(--container-width)] px-[var(--page-gutter)]">
          <Eyebrow text="Begin a Conversation" variant="hero" />

          <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-3xl font-[var(--font-display)] text-4xl leading-tight text-[var(--color-text-inverse)] md:text-6xl">
              Let’s shape something{" "}
              <span
                className="
                text-[var(--color-accent-light)]
              "
              >
                exceptional.
              </span>
            </h2>

            <Link
              to="/contact"
              className="group inline-flex w-fit shrink-0 items-center gap-4 border-b border-[var(--color-text-inverse)] pb-3 font-[var(--font-body)] text-[10px] uppercase tracking-[0.15em] text-[var(--color-text-inverse)] transition-colors hover:text-[var(--color-burgundy-muted)]"
            >
              Discuss Your Project
              <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
