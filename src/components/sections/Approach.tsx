import { approach } from "@/content/site";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

export function Approach() {
  return (
    <Section tone="sand" labelledBy="approach-title">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading id="approach-title" eyebrow={approach.eyebrow} title={approach.title} />
          <p className="copy mt-6 max-w-md">{approach.text}</p>
        </div>

        <ol className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
          {approach.items.map((item, i) => (
            <li key={item.title} className="rounded-3xl border border-sage-100 bg-white p-7 shadow-soft md:p-8">
              <span className="font-display text-3xl italic text-clay" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="heading-md mt-3 text-sage-900">{item.title}</h3>
              <p className="copy mt-3">{item.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
