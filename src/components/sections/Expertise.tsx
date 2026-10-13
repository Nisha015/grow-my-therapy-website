import { expertise } from "@/content/site";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

export function Expertise() {
  return (
    <Section tone="dark" labelledBy="expertise-title">
      <Container>
        <SectionHeading
          id="expertise-title"
          eyebrow={expertise.eyebrow}
          title={expertise.title}
          tone="dark"
          align="center"
          className="mx-auto max-w-3xl"
        />
        <ul className="mx-auto mt-14 grid max-w-4xl gap-x-16 md:grid-cols-2">
          {expertise.items.map((item) => (
            <li key={item} className="border-b border-ivory/15 py-4 font-display text-[1.75rem] italic leading-tight text-ivory sm:text-3xl">
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
