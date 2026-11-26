import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const termsSections = [
  {
    number: "01",
    title: "Acceptance of Terms",
    content: [
      "By accessing or using the La Sorogeeka Interiors (LSI) website, you acknowledge that you have read and understood these Terms & Conditions and agree to comply with them.",
      "If you do not agree with these terms, please discontinue your use of the website.",
    ],
  },
  {
    number: "02",
    title: "About Our Website",
    content: [
      "This website provides information about La Sorogeeka Interiors, its design philosophy, services, projects and related activities.",
      "The website is intended for general information and enquiry purposes. Access to the website does not establish a client, professional or contractual relationship with LSI.",
    ],
  },
  {
    number: "03",
    title: "Use of Website",
    content: [
      "You agree to use this website responsibly and only for lawful purposes.",
      "You must not:",
    ],
    bullets: [
      "Use the website in a way that violates applicable laws or regulations.",
      "Attempt to gain unauthorised access to the website, its systems or related services.",
      "Interfere with the operation, security or availability of the website.",
      "Introduce malicious software, harmful code or automated activity intended to disrupt the website.",
      "Copy, reproduce or misuse website content without appropriate authorisation.",
    ],
  },
  {
    number: "04",
    title: "Intellectual Property",
    content: [
      "Unless otherwise stated, the content published on this website, including text, photographs, project imagery, graphics, visual designs, logos, branding and other materials, is owned by or used under licence by La Sorogeeka Interiors.",
      "These materials are protected by applicable intellectual property laws.",
      "You may view and access the content for personal, non-commercial and informational purposes. You may not reproduce, distribute, modify, republish or commercially exploit any website material without prior written permission from the relevant rights holder.",
    ],
  },
  {
    number: "05",
    title: "Project Images and Information",
    content: [
      "Images, renderings, descriptions and other project-related materials are presented to communicate design concepts, completed work and the capabilities of LSI.",
      "Visual representations may include photography, architectural visualisations, conceptual designs or illustrative material. Actual project outcomes, specifications, materials and finishes may vary.",
      "Website content should not be treated as a substitute for approved project drawings, specifications, quotations or formal contractual documents.",
    ],
  },
  {
    number: "06",
    title: "Enquiries and Communications",
    content: [
      "Visitors may use the website contact form or the contact details provided to submit enquiries about LSI's services.",
      "Submitting an enquiry does not constitute an offer, acceptance, appointment, quotation or agreement to undertake a project.",
      "Any project engagement, scope of work, fees, deliverables, responsibilities, timelines and other commercial terms will be subject to separate discussions and, where applicable, a written agreement between the relevant parties.",
    ],
  },
  {
    number: "07",
    title: "Accuracy of Information",
    content: [
      "We make reasonable efforts to maintain accurate and current information on this website. However, content may contain omissions, inaccuracies or information that becomes outdated.",
      "LSI reserves the right to update, correct or remove website content at any time without prior notice.",
      "Information published on this website should not be relied upon as a final representation of project availability, pricing, specifications or contractual commitments.",
    ],
  },
  {
    number: "08",
    title: "Third-Party Websites",
    content: [
      "This website may contain links to external websites, platforms or services operated by third parties.",
      "These links are provided for convenience and informational purposes. LSI does not control or assume responsibility for the content, availability, security or practices of external websites.",
      "Accessing third-party websites is at your own discretion and subject to their respective terms and policies.",
    ],
  },
  {
    number: "09",
    title: "Website Availability",
    content: [
      "We aim to keep the website accessible and functioning properly. However, uninterrupted availability cannot be guaranteed.",
      "Access may occasionally be restricted, suspended or interrupted due to maintenance, technical issues, security requirements or circumstances beyond our reasonable control.",
    ],
  },
  {
    number: "10",
    title: "Limitation of Liability",
    content: [
      "To the extent permitted by applicable law, LSI shall not be responsible for losses or damages arising from the use of, or inability to use, this website or reliance on information published on it.",
      "This includes, where legally permissible, indirect or consequential losses, loss of data, business interruption and losses arising from third-party websites or services.",
      "Nothing in these terms excludes or limits liability where such exclusion or limitation is prohibited by applicable law.",
    ],
  },
  {
    number: "11",
    title: "Privacy",
    content: [
      "Personal information submitted through this website is handled in accordance with our Privacy Policy.",
      "Please review the Privacy Policy to understand how information may be collected, processed and used.",
    ],
    privacyLink: true,
  },
  {
    number: "12",
    title: "Changes to These Terms",
    content: [
      "LSI may revise these Terms & Conditions from time to time to reflect changes in the website, business operations or applicable requirements.",
      "Updated terms will be published on this page with a revised effective date. Continued use of the website after changes are published constitutes use subject to the updated terms, to the extent permitted by applicable law.",
    ],
  },
  {
    number: "13",
    title: "Governing Law",
    content: [
      "These Terms & Conditions are subject to the laws and regulations applicable to the legal entity responsible for operating this website.",
      "The governing jurisdiction and competent courts must be confirmed by LSI before publication of this policy.",
    ],
  },
  {
    number: "14",
    title: "Contact Information",
    content: [
      "For questions or concerns regarding these Terms & Conditions, please contact La Sorogeeka Interiors using the details below.",
    ],
    contact: true,
  },
];

const Terms = () => {
  return (
    <main
      id="top"
      className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]"
    >
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
              Legal / Terms
            </p>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.98] tracking-tight mt-6">
              Clear terms.
              <span className="block italic text-[var(--color-primary)]">
                Transparent engagement.
              </span>
            </h1>

            <p className="max-w-xl mt-8 text-sm md:text-base leading-[1.9] text-[var(--color-text-secondary)]">
              These terms explain the conditions that apply when you access and
              use the La Sorogeeka Interiors website.
            </p>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-10 pt-6 border-t border-[var(--color-border)]">
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                  Document
                </p>
                <p className="text-xs mt-2">Terms & Conditions</p>
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

      {/* TERMS CONTENT */}
      <section className="px-[var(--page-gutter)] pb-24 md:pb-32">
        <div className="max-w-[var(--container-width)] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* TABLE OF CONTENTS */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-32">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-text-muted)] mb-6">
                On this page
              </p>

              <nav className="flex flex-col gap-4">
                {termsSections.map((section) => (
                  <a
                    key={section.number}
                    href={`#terms-${section.number}`}
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

          {/* TERMS BODY */}
          <div className="lg:col-span-8 lg:col-start-5">
            <div className="border-t border-[var(--color-border)]">
              {termsSections.map((section) => (
                <section
                  key={section.number}
                  id={`terms-${section.number}`}
                  className="scroll-mt-32 py-9 md:py-11 border-b border-[var(--color-border)]"
                >
                  <div className="grid grid-cols-12 gap-4 md:gap-8">
                    <div className="col-span-1">
                      <span className="text-xs text-[var(--color-primary)]">
                        {section.number}
                      </span>
                    </div>

                    <div className="col-span-11">
                      <h2 className="font-display text-2xl md:text-3xl leading-tight">
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

                        {section.privacyLink && (
                          <Link
                            to="/privacy-policy"
                            className="inline-flex items-center gap-2 text-xs text-[var(--color-primary)] hover:underline"
                          >
                            Read our Privacy Policy
                            <ArrowUpRight size={14} />
                          </Link>
                        )}

                        {section.contact && (
                          <div className="mt-7 p-6 md:p-8 bg-[var(--color-bg-secondary)]">
                            <p className="font-display text-2xl">
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

export default Terms;
