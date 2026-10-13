import { intro } from "@/content/site";
import { Container } from "../ui/Container";
import { Emphasis } from "../ui/Emphasis";
import { Botanical } from "../ui/Illustrations";
import { Section } from "../ui/Section";

export function Intro() {
  return (
    <Section tone="sand" labelledBy="intro-title">
      <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div
            aria-hidden="true"
            className="relative mx-auto flex aspect-[4/5] w-full max-w-[380px] items-end justify-center overflow-hidden rounded-t-[999px] rounded-b-3xl bg-sage-100 lg:max-w-none"
          >
            <div className="absolute -top-16 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-clay-soft/70" />
            <Botanical className="relative h-[88%] w-auto" />
          </div>
        </div>

        <div className="lg:col-span-7">
          <h2 id="intro-title" className="heading-lg [&_em]:text-clay-dark">
            <Emphasis text={intro.title} />
          </h2>
          <p className="lead mt-6 max-w-2xl">{intro.lead}</p>
          <div className="mt-8 max-w-2xl space-y-5">
            {intro.paragraphs.map((p) => (
              <p key={p} className="copy">
                {p}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
