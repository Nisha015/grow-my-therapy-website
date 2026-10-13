import Image from "next/image";
import { hero, site } from "@/content/site";
import { images } from "@/content/images";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Emphasis } from "../ui/Emphasis";
import { Botanical } from "../ui/Illustrations";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="overflow-x-clip bg-ivory pb-20 pt-10 md:pb-28 md:pt-16 lg:pt-20">
      <Container className="grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <p className="eyebrow mb-6">{hero.eyebrow}</p>
          <h1 id="hero-title" className="heading-xl [&_em]:text-clay-dark">
            <Emphasis text={hero.title} />
          </h1>
          <p className="copy mt-6 max-w-xl sm:text-lg">{hero.text}</p>
          <div className="mt-9">
            <Button href={hero.cta.href}>{hero.cta.label}</Button>
          </div>
        </div>

        <div className="lg:col-span-6">
          <figure className="relative mx-auto w-full max-w-[420px] lg:ml-auto lg:mr-0 lg:max-w-[460px]">
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 h-full w-full rounded-b-3xl rounded-t-[999px] bg-sage-100 sm:-bottom-5 sm:-right-5"
            />
            <Botanical className="absolute -left-3 top-12 z-10 hidden h-44 w-auto opacity-90 sm:block lg:-left-10" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-b-3xl rounded-t-[999px] bg-sage-100">
              <Image
                src={images.portrait.src}
                alt={images.portrait.alt}
                fill
                priority
                sizes="(min-width: 1024px) 460px, (min-width: 640px) 420px, 90vw"
                placeholder="blur"
                blurDataURL={images.portrait.blurDataURL}
                className="object-cover object-[50%_22%]"
              />
            </div>
            <figcaption className="absolute -bottom-6 left-4 z-10 rounded-2xl bg-white px-5 py-3.5 shadow-soft sm:-left-6">
              <span className="block font-display text-lg font-semibold leading-tight text-sage-900">{site.name}</span>
              <span className="text-sm text-muted">{site.credential}</span>
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
