import { Emphasis } from "./Emphasis";

type SectionHeadingProps = {
  id: string;
  eyebrow?: string;
  title: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
};

const accent = {
  light: "[&_em]:text-clay-dark",
  dark: "[&_em]:text-clay-soft",
} as const;

export function SectionHeading({ id, eyebrow, title, tone = "light", align = "left", className = "" }: SectionHeadingProps) {
  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className}`}>
      {eyebrow && <p className={`eyebrow mb-4 ${tone === "dark" ? "!text-sage-300" : ""}`}>{eyebrow}</p>}
      <h2 id={id} className={`heading-lg ${accent[tone]}`}>
        <Emphasis text={title} />
      </h2>
    </div>
  );
}
