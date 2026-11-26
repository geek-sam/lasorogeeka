import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const privacySections = [
  {
    number: "01",
    title: "Introduction",
    content: [
      "La Sorogeeka Interiors (LSI) respects your privacy and is committed to protecting the personal information you share through this website.",
      "This Privacy Policy explains what information may be collected when you visit our website, how it may be used, and the choices available to you regarding your information.",
    ],
  },
  {
    number: "02",
    title: "Information We Collect",
    content: [
      "When you submit an enquiry through our contact form, we may collect the following information:",
    ],
    bullets: [
      "Full name",
      "Email address",
      "Phone number",
      "Project location",
      "Service of interest",
      "Estimated project budget",
      "Project description and any other information you choose to provide",
    ],
    closing:
      "We may also receive technical information associated with your visit, such as browser type, device information and website usage data, where applicable.",
  },
  {
    number: "03",
    title: "How We Use Your Information",
    content: ["Information submitted through our website may be used to:"],
    bullets: [
      "Respond to your enquiries and requests.",
      "Understand your project requirements.",
      "Communicate with you about our services.",
      "Coordinate consultations and potential project discussions.",
      "Maintain and improve our website and services.",
      "Protect the website against spam, misuse and unauthorised activity.",
    ],
  },
  {
    number: "04",
    title: "How Your Information Is Processed",
    content: [
      "Enquiries submitted through our website contact form are processed using Web3Forms, a third-party form submission service.",
      "The information you provide may be transmitted through this service and delivered to the email address configured by LSI to receive website enquiries.",
      "Third-party services process information according to their own privacy policies and terms. We recommend reviewing the relevant provider's policies for further details.",
    ],
    links: [
      {
        label: "Web3Forms Privacy Policy",
        href: "https://web3forms.com/privacy",
      },
    ],
  },
  {
    number: "05",
    title: "Sharing of Information",
    content: [
      "LSI does not intend to sell or rent personal information collected through this website.",
      "Information may be shared with authorised service providers where necessary to operate the website, process enquiries or provide requested services. Information may also be disclosed where required by applicable law or a lawful request from an authorised authority.",
    ],
  },
  {
    number: "06",
    title: "Data Security",
    content: [
      "We take reasonable measures to protect information submitted through our website against unauthorised access, loss, misuse or disclosure.",
      "However, no method of transmission or electronic storage can be guaranteed to be completely secure. We cannot guarantee absolute security of information transmitted over the internet.",
    ],
  },
  {
    number: "07",
    title: "Data Retention",
    content: [
      "Personal information may be retained for as long as necessary to respond to enquiries, maintain relevant business communications, fulfil legitimate business requirements or comply with applicable legal obligations.",
      "Retention periods may vary depending on the nature of the information and the purpose for which it was collected.",
    ],
  },
  {
    number: "08",
    title: "Cookies and Website Technologies",
    content: [
      "Our website may use cookies or similar technologies to support website functionality, understand usage patterns and improve the browsing experience.",
      "You may be able to manage cookies through your browser settings. Disabling certain cookies may affect some website functionality.",
    ],
  },
  {
    number: "09",
    title: "External Links",
    content: [
      "Our website may contain links to third-party websites or services. These websites operate independently and have their own privacy policies and practices.",
      "LSI is not responsible for the privacy practices or content of external websites. We encourage visitors to review their policies before sharing personal information.",
    ],
  },
  {
    number: "10",
    title: "Your Privacy Rights",
    content: [
      "Depending on applicable data protection laws, you may have rights concerning your personal information, including the right to request access, correction or deletion of information, or to object to certain forms of processing.",
      "To make a privacy-related request, please contact us using the details provided below. We may need to verify your identity before responding.",
    ],
  },
  {
    number: "11",
    title: "Changes to This Policy",
    content: [
      "LSI may update this Privacy Policy from time to time to reflect changes in our website, services or applicable legal requirements.",
      "Any updates will be published on this page along with a revised effective date.",
    ],
  },
  {
    number: "12",
    title: "Contact Us",
    content: [
      "If you have questions about this Privacy Policy or how your personal information is handled, you can contact us using the details below.",
    ],
    contact: true,
  },
];

const PrivacyPolicy = () => {
  return (
    <main className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      {/* PAGE HEADER */}
      <section className="pt-36 md:pt-44 pb-16 md:pb-20 px-[var(--page-gutter)]">
        <div className="max-w-[var(--container-width)] mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
          >
            <ArrowLeft size={15} />
            Back to home
          </Link>

          <div className="mt-16 md:mt-20 max-w-4xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Legal / Privacy
            </p>

            <h1 className="font-[var(--font-display)] text-5xl md:text-5xl lg:text-6xl leading-[0.98] tracking-tight mt-6">
              Your privacy,
              <span className="block text-[var(--color-primary)]">
                our responsibility.
              </span>
            </h1>

            <p className="max-w-xl mt-8 text-sm md:text-base leading-[1.9] text-[var(--color-text-secondary)]">
              We value the trust you place in us. This policy explains how
              information shared through the La Sorogeeka Interiors website is
              handled.
            </p>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-10 pt-6 border-t border-[var(--color-border)]">
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                  Document
                </p>
                <p className="text-xs mt-2">Privacy Policy</p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                  Effective date
                </p>
                <p className="text-xs mt-2">[Insert publication date]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POLICY CONTENT */}
      <section className="px-[var(--page-gutter)] pb-24 md:pb-32">
        <div className="max-w-[var(--container-width)] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* CONTENTS */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-32">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-text-muted)] mb-6">
                On this page
              </p>

              <nav className="flex flex-col gap-4">
                {privacySections.map((section) => (
                  <a
                    key={section.number}
                    href={`#privacy-${section.number}`}
                    className="flex items-baseline gap-3 text-xs text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]"
                  >
                    <span className="text-[var(--color-text-muted)]">
                      {section.number}
                    </span>
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* POLICY BODY */}
          <div className="lg:col-span-8 lg:col-start-5">
            <div className="border-t border-[var(--color-border)]">
              {privacySections.map((section) => (
                <section
                  key={section.number}
                  id={`privacy-${section.number}`}
                  className="scroll-mt-32 py-9 md:py-11 border-b border-[var(--color-border)]"
                >
                  <div className="grid grid-cols-12 gap-4 md:gap-8">
                    <div className="col-span-1">
                      <span className="text-xs text-[var(--color-primary)]">
                        {section.number}
                      </span>
                    </div>

                    <div className="col-span-11">
                      <h2 className="font-[var(--font-display)] text-2xl md:text-3xl leading-tight">
                        {section.title}
                      </h2>

                      <div className="mt-6 space-y-5">
                        {section.content.map((paragraph, index) => (
                          <p
                            key={index}
                            className="text-sm leading-[1.9] text-[var(--color-text-secondary)]"
                          >
                            {paragraph}
                          </p>
                        ))}

                        {section.bullets && (
                          <ul className="space-y-3 pl-1">
                            {section.bullets.map((item) => (
                              <li
                                key={item}
                                className="flex gap-3 text-sm leading-[1.8] text-[var(--color-text-secondary)]"
                              >
                                <span className="mt-[9px] w-1 h-1 rounded-full bg-[var(--color-primary)] shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}

                        {section.closing && (
                          <p className="text-sm leading-[1.9] text-[var(--color-text-secondary)]">
                            {section.closing}
                          </p>
                        )}

                        {section.links?.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs text-[var(--color-primary)] hover:underline"
                          >
                            {link.label}
                            <ArrowUpRight size={14} />
                          </a>
                        ))}

                        {section.contact && (
                          <div className="mt-7 p-6 md:p-8 bg-[var(--color-bg-secondary)]">
                            <p className="font-[var(--font-display)] text-2xl">
                              La Sorogeeka Interiors
                            </p>

                            <a
                              href="mailto:info@lasorogeeka.com"
                              className="inline-flex items-center gap-2 mt-4 text-sm text-[var(--color-primary)] hover:underline"
                            >
                              info@lasorogeeka.com
                              <ArrowUpRight size={15} />
                            </a>

                            <p className="text-xs leading-relaxed text-[var(--color-text-muted)] mt-5">
                              Dubai, UAE
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>

            {/* BACK TO TOP */}
            <div className="flex justify-end mt-10">
              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
              >
                Back to top ↑
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
