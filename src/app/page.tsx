import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { About } from "@/components/sections/About";
import { Approach } from "@/components/sections/Approach";
import { Contact } from "@/components/sections/Contact";
import { Expertise } from "@/components/sections/Expertise";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Office } from "@/components/sections/Office";
import { Services } from "@/components/sections/Services";
import { faqs, site } from "@/content/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${site.url}/#practice`,
      name: site.name,
      description: site.description,
      url: site.url,
      image: `${site.url}/images/og-image.jpg`,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressRegion: site.address.region,
        postalCode: site.address.postalCode,
        addressCountry: "US",
      },
      areaServed: { "@type": "State", name: "California" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.items.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-sage-900 focus:px-5 focus:py-3 focus:text-ivory"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Intro />
        <Services />
        <Expertise />
        <About />
        <Approach />
        <Office />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </>
  );
}
