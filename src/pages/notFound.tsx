import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const NotFound = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] flex flex-col">
      {/* MAIN CONTENT */}
      <section className="flex-1 flex items-center px-[var(--page-gutter)] py-28 md:py-32">
        <div className="max-w-[var(--container-width)] w-full mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* TEXT */}
          <div className="lg:col-span-6 relative z-10">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Error / 404
            </p>

            <h1 className="text-[clamp(7rem,18vw,15rem)] leading-[0.78] tracking-[-0.06em] text-[var(--color-primary)] mt-8">
              404
            </h1>

            <h2 className=" text-4xl md:text-5xl leading-tight mt-10 max-w-lg">
              This space hasn't
              <span className="block text-[var(--color-text-secondary)]">
                been found.
              </span>
            </h2>

            <p className="text-sm leading-[1.9] text-[var(--color-text-secondary)] max-w-md mt-6">
              It seems the page you're looking for has moved, no longer exists
              or may have been entered incorrectly.
            </p>

            {/* ACTIONS */}
            <div className="flex flex-wrap items-center gap-6 mt-10">
              <Link
                to="/"
                className="group inline-flex items-center gap-5 px-7 py-4 bg-[var(--color-primary)] text-[var(--color-text-inverse)] text-xs uppercase tracking-[0.15em] transition-colors duration-300 hover:bg-[var(--color-primary-dark)]"
              >
                <ArrowLeft size={16} />
                Back to homepage
              </Link>

              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[var(--color-primary)]"
              >
                Explore projects
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>

          {/* VISUAL */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] max-h-[650px] overflow-hidden rounded-[var(--radius-xl)]">
              <img
                src="/images/intro-interior.png"
                alt="Sculptural architectural interior"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-[var(--color-charcoal)]/10" />

              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between text-[var(--color-text-inverse)]">
                <p className=" text-2xl">Beyond the expected.</p>

                <span className="text-[10px] uppercase tracking-[0.18em]">
                  LSI / 001
                </span>
              </div>
            </div>

            {/* DECORATIVE DETAIL */}
            <div className="absolute -top-5 -right-5 w-24 h-24 border border-[var(--color-primary)]/20 rounded-full hidden md:block" />
          </div>
        </div>
      </section>

      {/* BOTTOM BAR */}
      <footer className="px-[var(--page-gutter)]">
        <div className="max-w-[var(--container-width)] mx-auto border-t border-[var(--color-border)] py-7 flex flex-col sm:flex-row justify-between gap-4">
          <p className="text-xs text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} La Sorogeeka Interiors. All rights
            reserved.
          </p>

          <Link
            to="/contact"
            className="text-xs uppercase tracking-[0.15em] text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </footer>
    </main>
  );
};

export default NotFound;
