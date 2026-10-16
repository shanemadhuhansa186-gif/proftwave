import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`px-4 py-16 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-6xl">
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-pw-cyan">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-pw-text sm:text-4xl">
          {title}
        </h2>
        {intro ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-pw-muted sm:text-lg">
            {intro}
          </p>
        ) : null}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
