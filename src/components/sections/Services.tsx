import { services } from "@/content/site";
import { Container } from "../ui/Container";
import { ServiceArt } from "../ui/Illustrations";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

export function Services() {
  return (
    <Section id="services" labelledBy="services-title">
      <Container>
        <SectionHeading id="services-title" eyebrow={services.eyebrow} title={services.title} align="center" className="mx-auto max-w-3xl" />

        <ul className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {services.items.map((item) => (
            <li key={item.title}>
              <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-sage-100 bg-white shadow-soft md:flex-row lg:flex-col">
                <ServiceArt variant={item.art} className="aspect-[16/10] w-full shrink-0 md:aspect-auto md:w-2/5 lg:aspect-[16/10] lg:w-full" />
                <div className="flex flex-1 flex-col p-7 md:p-9 lg:p-8">
                  <h3 className="heading-md text-sage-900">{item.title}</h3>
                  <p className="copy mt-4">{item.text}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
