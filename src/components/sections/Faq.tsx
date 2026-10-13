import { faqs } from "@/content/site";
import { Container } from "../ui/Container";
import { Plus } from "../ui/Icons";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

export function Faq() {
  return (
    <Section id="faqs" tone="sand" labelledBy="faqs-title">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <SectionHeading id="faqs-title" eyebrow={faqs.eyebrow} title={faqs.title} className="lg:col-span-4" />
        <div className="lg:col-span-8">
          {faqs.items.map((item) => (
            <details key={item.q} className="group border-b border-sage-200 first:border-t">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-[1.375rem] font-medium leading-snug text-sage-900 marker:hidden [&::-webkit-details-marker]:hidden sm:text-2xl">
                {item.q}
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-sage-300 text-sage-700 transition-transform duration-200 group-open:rotate-45">
                  <Plus className="h-4 w-4" />
                </span>
              </summary>
              <p className="copy max-w-2xl pb-7 pr-12">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
