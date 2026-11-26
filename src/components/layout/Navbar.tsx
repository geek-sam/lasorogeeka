import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
];

const Navbar = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const closeMenu = () => setIsMenuOpen(false);

  // Homepage: transparent initially, brand background on scroll.
  // Inner pages: brand background from initial render.
  const isOpaque = !isHomePage || isScrolled;

  const textColor = "text-[var(--color-text-inverse)]";

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`
          fixed inset-x-0 top-0 z-[var(--z-header)]
          transition-all duration-[var(--duration-normal)]
          ease-[var(--ease-smooth)]
          ${
            isOpaque
              ? "bg-[var(--color-primary)] shadow-[var(--shadow-sm)]"
              : "bg-transparent"
          }
        `}
      >
        <nav
          aria-label="Main navigation"
          className="
            relative mx-auto grid h-[var(--header-height)]
            w-full max-w-[var(--container-width)]
            grid-cols-[1fr_auto]
            items-center px-[var(--page-gutter)]
            lg:grid-cols-[1fr_auto_1fr]
          "
        >
          {/* LOGO: LEFT ON MOBILE, CENTER ON DESKTOP */}
          <a
            href="/"
            onClick={closeMenu}
            aria-label="La Sorogeeka Interiors - Home"
            className="
              col-start-1 row-start-1
              flex w-fit items-center justify-start
              lg:col-start-2 lg:justify-center
            "
          >
            <img
              src="/images/logo.png"
              alt="La Sorogeeka Interiors"
              className="h-11 w-auto object-contain sm:h-12 lg:h-14"
            />
          </a>

          {/* DESKTOP NAVIGATION */}
          <div
            className="
            hidden items-center gap-5
            lg:col-start-1 lg:row-start-1
            lg:flex xl:gap-7
          "
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`
                  group relative py-2
                  font-[var(--font-body)]
                  text-[14px]
                  font-[var(--weight-medium)]
                  uppercase tracking-[var(--tracking-wide)]
                  transition-colors duration-[var(--duration-fast)]
                  ${textColor}
                `}
              >
                {link.label}

                <span
                  className="
                  absolute bottom-0 left-0 h-px w-0
                  bg-[var(--color-text-inverse)]
                  transition-all duration-[var(--duration-normal)]
                  ease-[var(--ease-smooth)]
                  group-hover:w-full
                "
                />
              </a>
            ))}
          </div>

          {/* RIGHT ACTIONS */}
          <div
            className="
            col-start-2 row-start-1
            flex items-center justify-end gap-3
            lg:col-start-3
          "
          >
            {/* CTA */}
            <a
              href="/contact"
              onClick={closeMenu}
              className={`
                group inline-flex items-center gap-2
                border border-[var(--color-primary)]
                px-3 py-3
                font-[var(--font-body)]
                text-[9px] font-[var(--weight-semibold)]
                uppercase tracking-[var(--tracking-wider)]
                transition-all duration-[var(--duration-normal)]
                sm:px-5 sm:text-[12px]
                ${
                  isOpaque
                    ? "border-[var(--color-warm-white)] text-[var(--color-text-inverse)] hover:bg-[var(--color-bg-primary)] hover:text-[var(--color-primary)]"
                    : "bg-[var(--color-primary)] text-[var(--color-text-inverse)] hover:bg-[var(--color-primary-dark)]"
                }
              `}
            >
              <span>Enquire Now</span>
              <span
                className="
                transition-transform duration-300
                group-hover:translate-x-1
              "
              >
                ↗
              </span>
            </a>

            {/* MOBILE MENU TOGGLE */}
            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className={`
                flex h-10 w-10 shrink-0
                items-center justify-center
                transition-colors duration-[var(--duration-normal)]
                lg:hidden ${textColor}
              `}
            >
              <span className="flex w-6 flex-col gap-[6px]">
                <span
                  className={`
                  h-px w-full bg-current
                  transition-transform duration-[var(--duration-normal)]
                  ${isMenuOpen ? "translate-y-[3.5px] rotate-45" : ""}
                `}
                />

                <span
                  className={`
                  h-px w-full bg-current
                  transition-transform duration-[var(--duration-normal)]
                  ${isMenuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}
                `}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE NAVIGATION */}
      <div
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
        className={`
          fixed inset-0 z-[calc(var(--z-header)-1)]
          bg-[var(--color-bg-primary)]
          transition-all duration-[var(--duration-slow)]
          ease-[var(--ease-smooth)]
          lg:hidden
          ${
            isMenuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-4 opacity-0"
          }
        `}
      >
        <div
          className="
          flex h-full flex-col justify-center
          px-[var(--page-gutter)] pb-8
          pt-[var(--header-height)]
        "
        >
          <p
            className="
            mb-8 font-[var(--font-body)]
            text-[var(--text-xs)] uppercase
            tracking-[var(--tracking-widest)]
            text-[var(--color-text-muted)]
          "
          >
            Explore LSI
          </p>

          <div className="flex flex-col">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={closeMenu}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 70}ms` : "0ms",
                }}
                className={`
                  border-b border-[var(--color-border-light)]
                  py-4 font-[var(--font-display)]
                  text-[var(--text-4xl)]
                  leading-tight
                  text-[var(--color-text-primary)]
                  transition-all duration-[var(--duration-normal)]
                  hover:pl-3 hover:text-[var(--color-primary)]
                  ${
                    isMenuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }
                `}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* <a
            href="/contact"
            onClick={closeMenu}
            tabIndex={isMenuOpen ? 0 : -1}
            className="
              mt-10 flex items-center justify-between
              bg-[var(--color-primary)]
              px-6 py-5
              font-[var(--font-body)]
              text-[var(--text-xs)]
              font-[var(--weight-semibold)]
              uppercase tracking-[var(--tracking-wider)]
              text-[var(--color-text-inverse)]
              transition-colors duration-[var(--duration-normal)]
              hover:bg-[var(--color-primary-dark)]
            "
          >
            <span>Start a Conversation</span>
            <span className="text-lg">↗</span>
          </a> */}

          <p
            className="
            mt-auto pt-10 font-[var(--font-body)]
            text-[10px] uppercase
            tracking-[var(--tracking-widest)]
            text-[var(--color-text-muted)]
          "
          >
            La Sorogeeka Interiors
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
