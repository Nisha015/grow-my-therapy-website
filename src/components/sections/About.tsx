import Image from "next/image";
import { about, site } from "@/content/site";
import { images } from "@/content/images";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Botanical } from "../ui/Illustrations";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

export function About() {
  return (
    <Section id="about" labelledBy="about-title">
      <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-[520px] overflow-hidden rounded-3xl bg-sage-100 sm:aspect-[5/4] lg:aspect-[4/5] lg:max-w-none">
            <div aria-hidden="true" className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-clay-soft/80" />
            <Botanical className="absolute bottom-0 left-1/2 h-[82%] w-auto -translate-x-1/2" />
            <div className="absolute inset-x-4 bottom-4 flex items-center gap-4 rounded-2xl bg-white p-4 shadow-soft sm:inset-x-6 sm:bottom-6">
              <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-sage-100">
                <Image
                  src={images.portrait.src}
                  alt={images.portrait.alt}
                  fill
                  sizes="64px"
                  placeholder="blur"
                  blurDataURL={images.portrait.blurDataURL}
                  className="object-cover object-[50%_20%]"
                />
              </span>
              <p className="leading-tight">
                <span className="block font-display text-lg font-semibold text-sage-900">{site.name}</span>
                <span className="text-sm text-muted">{site.credential}</span>
                <span className="block text-sm text-muted">Santa Monica, California</span>
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <SectionHeading id="about-title" eyebrow={about.eyebrow} title={about.title} />
          <p className="lead mt-6 max-w-2xl">{about.lead}</p>
          <div className="mt-8 max-w-2xl space-y-5">
            {about.paragraphs.map((p) => (
              <p key={p} className="copy">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-9">
            <Button href={about.cta.href}>{about.cta.label}</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
