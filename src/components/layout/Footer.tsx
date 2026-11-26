const footerLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About us", href: "/about" },
  { label: "Contact us", href: "/contact" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 10v7M8 7v.01M12 17v-7h3v1.2c.5-.9 1.2-1.4 2.2-1.4 1.5 0 2.8 1 2.8 3.2V17" />
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "https://www.pinterest.com/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M10 20c1-2 1.5-4 2-6m-1-2c0-2 1-3 2.5-3 1.3 0 2 1 2 2.2 0 1.8-1 3.5-2.5 3.5-1 0-1.5-.7-1.5-1.5" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <div className="mx-auto max-w-[var(--container-width)] px-[var(--page-gutter)]">
        {/* Main footer */}
        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-2 md:items-end md:py-16">
          {/* Brand and address */}
          <div className="flex flex-col items-start">
            <a href="/" aria-label="La Sorogeeka Interiors home">
              <img
                src="/images/logo.png"
                alt="La Sorogeeka Interiors"
                className="h-12 w-auto object-contain"
              />
            </a>

            <address className="mt-7 max-w-xs not-italic font-[var(--font-body)] text-sm leading-[1.65] text-[var(--color-text-secondary)]">
              <span>La Sorogeeka Interiors</span>
              <br />
              <span>Dubai, UAE</span>
              <br />
              <a
                href="mailto:info@lasorogeeka.com"
                className="transition-colors duration-300 hover:text-[var(--color-primary)]"
              >
                info@lasorogeeka.com
              </a>
            </address>
          </div>

          {/* Social and navigation */}
          <div className="flex flex-col items-start gap-10 md:items-end">
            <div className="flex items-center gap-5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="h-5 w-5 text-[var(--color-text-secondary)] transition-colors duration-300 hover:text-[var(--color-primary)]"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap gap-x-7 gap-y-4 md:gap-x-8"
            >
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-[var(--font-body)] text-sm text-[var(--color-text-primary)] transition-colors duration-300 hover:text-[var(--color-primary)]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-[var(--color-border)] py-7 font-[var(--font-body)] text-xs text-[var(--color-text-secondary)] sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p>
            © {new Date().getFullYear()} La Sorogeeka Interiors. All rights
            reserved.
          </p>

          <a
            href="/"
            className="transition-colors duration-300 hover:text-[var(--color-primary)]"
          >
            Designed with intention.
          </a>
        </div>
      </div>
    </footer>
  );
}
