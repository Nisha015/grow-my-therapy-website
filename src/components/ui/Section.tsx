import type { ReactNode } from "react";

const tones = {
  ivory: "bg-ivory text-ink",
  sand: "bg-sand text-ink",
  dark: "bg-sage-900 text-ivory",
} as const;

type SectionProps = {
  id?: string;
  labelledBy?: string;
  tone?: keyof typeof tones;
  className?: string;
  children: ReactNode;
};

/** Full-width band with consistent vertical rhythm and anchor offset for the sticky header. */
export function Section({ id, labelledBy, tone = "ivory", className = "", children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`scroll-mt-20 overflow-x-clip py-20 md:py-28 ${tones[tone]} ${className}`}
    >
      {children}
    </section>
  );
}
