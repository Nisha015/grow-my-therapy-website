import Image from "next/image";
import { office, site } from "@/content/site";
import { images } from "@/content/images";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { MapPin } from "../ui/Icons";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

export function Office() {
  return (
    <Section id="office" labelledBy="office-title">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
          <SectionHeading id="office-title" eyebrow={office.eyebrow} title={office.title} className="lg:col-span-6" />
          <div className="space-y-4 lg:col-span-6">
            {office.paragraphs.map((p) => (
              <p key={p} className="copy">
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:h-[420px] md:grid-cols-12 md:gap-8 lg:h-[520px]">
          <figure className="md:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-sage-100 shadow-soft md:aspect-auto md:h-full">
              <Image
                src={images.officeOne.src}
                alt={images.officeOne.alt}
                fill
                sizes="(min-width: 1200px) 650px, (min-width: 768px) 58vw, 100vw"
                placeholder="blur"
                blurDataURL={images.officeOne.blurDataURL}
                className="object-cover"
              />
            </div>
          </figure>
          <figure className="md:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-sage-100 shadow-soft md:aspect-auto md:h-full">
              <Image
                src={images.officeTwo.src}
                alt={images.officeTwo.alt}
                fill
                sizes="(min-width: 1200px) 460px, (min-width: 768px) 42vw, 100vw"
                placeholder="blur"
                blurDataURL={images.officeTwo.blurDataURL}
                className="object-cover object-[35%_50%]"
              />
            </div>
          </figure>
        </div>

        <div className="mt-12 flex flex-col gap-6 rounded-3xl bg-sage-50 p-7 sm:flex-row sm:items-center sm:justify-between md:p-9">
          <div className="flex items-start gap-4">
            <MapPin className="mt-1 h-6 w-6 shrink-0 text-clay-dark" />
            <div>
              <p className="font-display text-xl font-semibold text-sage-900">
                {site.address.street}, {site.address.city}, {site.address.region} {site.address.postalCode}
              </p>
              <p className="copy mt-1 max-w-xl">{office.note}</p>
            </div>
          </div>
          <Button href={site.address.mapsUrl} external variant="outline" className="shrink-0">
            {office.directionsLabel}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
