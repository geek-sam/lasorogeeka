export default function Eyebrow({
  text,
  variant,
}: {
  text: string;
  variant?: string;
}) {
  return (
    <div
      className={`
              mb-8 flex items-center gap-4
              animate-[heroReveal_1s_var(--ease-smooth)_both]
              ${variant === "hero" ? "text-[var(--color-accent-light)]" : "text-[var(--color-text-primary)]"}`}
    >
      <span
        className={`h-px w-5 ${variant === "hero" ? "bg-[var(--color-accent-light)]" : "bg-[var(--color-text-primary)]"}`}
      />

      <span
        className={`
                font-[var(--font-body)]
                text-[10px] font-[var(--weight-medium)]
                uppercase tracking-[var(--tracking-widest)]
                sm:text-xs`}
      >
        {text}
      </span>
    </div>
  );
}
