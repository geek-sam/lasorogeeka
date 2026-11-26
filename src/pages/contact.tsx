import { useState } from "react";
import { ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";
import Eyebrow from "../components/Eyebrow";

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [statusMessage, setStatusMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiry: "",
    location: "",
    budget: "",
    message: "",
    botcheck: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus(null);
    setStatusMessage("");

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      setStatusMessage(
        "The contact form is not configured yet. Please contact us directly.",
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New LSI Website Enquiry — ${formData.enquiry || "General Enquiry"}`,
        from_name: "LSI Website Contact Form",
        ...formData,
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setStatusMessage(
          "Thank you for reaching out. Your enquiry has been submitted successfully.",
        );

        setFormData({
          name: "",
          email: "",
          phone: "",
          enquiry: "",
          location: "",
          budget: "",
          message: "",
          botcheck: "",
        });
      } else {
        throw new Error(result.message || "Unable to submit your enquiry.");
      }
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      {/* HERO */}
      <section className="pt-36 md:pt-44 ">
        <div className="max-w-[var(--container-width)] mx-auto px-[var(--page-gutter)]">
          <div className="max-w-4xl">
            <Eyebrow text="Contact LSI" variant="work" />

            <h1 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl leading-[0.98] tracking-tight mt-7">
              Every remarkable
              <span className="block text-[var(--color-primary)]">
                space starts
              </span>
              with a conversation.
            </h1>

            <p className="text-sm md:text-base leading-[1.9] text-[var(--color-text-secondary)] max-w-lg mt-8">
              Whether you are planning a private residence or exploring a
              bespoke interior project, we would be pleased to hear about your
              vision.
            </p>
          </div>

          <div className="mt-16 md:mt-20 aspect-[16/8] md:aspect-[16/6] overflow-hidden rounded-[var(--radius-xl)]">
            <img
              src="/images/hills-view-04.jpg"
              alt="Luxury residential interior by La Sorogeeka Interiors"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-24 md:py-32">
        <div className="max-w-[var(--container-width)] mx-auto px-[var(--page-gutter)] grid lg:grid-cols-12 gap-14 lg:gap-20">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Your enquiry
            </p>

            <h2 className="font-[var(--font-display)] text-4xl md:text-5xl leading-tight mt-5">
              Tell us about your project.
            </h2>

            <p className="text-sm leading-[1.9] text-[var(--color-text-secondary)] mt-6 max-w-sm">
              Share a little about what you have in mind. Our team will review
              your enquiry and get in touch.
            </p>

            <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                Looking to collaborate?
              </p>

              <p className="font-[var(--font-display)] text-2xl mt-4">
                Let's create something meaningful.
              </p>
            </div>
          </div>

          {/* FORM */}

          <div className="lg:col-span-7 lg:col-start-6">
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* FORM HEADER */}
              <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-5">
                <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-text-primary)]">
                  Project enquiry
                </p>
                <span className="text-xs text-[var(--color-text-muted)]">
                  * Required fields
                </span>
              </div>

              {/* PERSONAL DETAILS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                <div className="form-field">
                  <label htmlFor="name">Full name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    minLength={2}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email address *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="phone">Phone number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="location">Project location</label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="City / Country"
                  />
                </div>
              </div>

              {/* PROJECT DETAILS */}
              <div className="pt-9 space-y-8">
                <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                  About your project
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                  <div className="form-field">
                    <label htmlFor="enquiry">Service of interest *</label>
                    <select
                      id="enquiry"
                      name="enquiry"
                      required
                      value={formData.enquiry}
                      onChange={handleChange}
                    >
                      <option value="">Select a service</option>
                      <option value="Architectural Design">
                        Architectural Design
                      </option>
                      <option value="Interior Design">Interior Design</option>
                      <option value="Build">Build</option>
                      <option value="Fit-out">Fit-out</option>
                      <option value="FF&E">FF&E</option>
                      <option value="Complete Turnkey Project">
                        Complete Turnkey Project
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="budget">Estimated budget</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="">Select a budget range</option>
                      <option value="To be discussed">To be discussed</option>
                      <option value="Under 500K">Under 500K</option>
                      <option value="500K - 1M">500K - 1M</option>
                      <option value="1M - 3M">1M - 3M</option>
                      <option value="3M - 5M">3M - 5M</option>
                      <option value="Above 5M">Above 5M</option>
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Tell us about your project *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share your vision, requirements or anything we should know..."
                  />
                </div>
              </div>

              {/* HONEYPOT */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="botcheck">Leave this field empty</label>
                <input
                  id="botcheck"
                  type="checkbox"
                  name="botcheck"
                  checked={Boolean(formData.botcheck)}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      botcheck: e.target.checked ? "true" : "",
                    }))
                  }
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* FORM FEEDBACK */}
              {status && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`flex items-start gap-3 text-sm ${
                    status === "success"
                      ? "text-[var(--color-success)]"
                      : "text-[var(--color-error)]"
                  }`}
                >
                  {status === "success" ? (
                    <CheckCircle2 size={17} className="shrink-0" />
                  ) : (
                    <AlertCircle size={17} className="shrink-0" />
                  )}
                  <p>{statusMessage}</p>
                </div>
              )}

              {/* SUBMIT */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-2">
                <p className="max-w-xs text-[11px] leading-relaxed text-[var(--color-text-muted)]">
                  Your information will only be used to respond to your enquiry.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center justify-between gap-12 min-w-[190px] px-6 py-4 bg-[var(--color-primary)] text-[var(--color-text-inverse)] text-xs uppercase tracking-[0.14em] transition-colors duration-300 hover:bg-[var(--color-primary-dark)] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? "Submitting..." : "Send enquiry"}</span>
                  {!isSubmitting && (
                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="bg-[var(--color-bg-secondary)] py-20 md:py-24 ">
        <div className="max-w-[var(--container-width)] mx-auto px-[var(--page-gutter)]">
          <div className="mb-14">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Get in touch
            </p>
            <h2 className="font-[var(--font-display)] text-4xl md:text-5xl mt-5">
              We would like to hear from you.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10 border-t border-[var(--color-border)] pt-9">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                Visit us
              </p>
              <p className="font-[var(--font-display)] text-2xl mt-4">
                Our Office
              </p>
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] mt-3">
                Add the verified LSI office address here.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                Email
              </p>
              <p className="font-[var(--font-display)] text-2xl mt-4">
                Write to us
              </p>
              <p className="text-sm text-[var(--color-text-secondary)] mt-3">
                Add the verified company email here.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                Telephone
              </p>
              <p className="font-[var(--font-display)] text-2xl mt-4">
                Speak with us
              </p>
              <p className="text-sm text-[var(--color-text-secondary)] mt-3">
                Add the verified company phone number here.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
