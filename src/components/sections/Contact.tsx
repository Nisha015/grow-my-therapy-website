import { contactSection, site } from "@/content/site";
import { getPrimaryContact } from "@/lib/contact";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Emphasis } from "../ui/Emphasis";
import { Mail, MapPin, Phone } from "../ui/Icons";
import { Section } from "../ui/Section";

export function Contact() {
  const primary = getPrimaryContact();
  const { email, phone } = site.contact;

  return (
    <Section id="contact" labelledBy="contact-title">
      <Container>
        <div className="grid gap-10 rounded-[2rem] bg-sage-700 p-8 text-ivory sm:p-12 lg:grid-cols-12 lg:gap-16 lg:p-16">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-4 !text-sage-200">{contactSection.eyebrow}</p>
            <h2 id="contact-title" className="heading-lg [&_em]:text-clay-soft">
              <Emphasis text={contactSection.title} />
            </h2>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-[1.75] text-ivory/85">{contactSection.text}</p>
            <div className="mt-9">
              <Button href={primary.href} external={primary.external} variant="light">
                {primary.label}
              </Button>
            </div>
          </div>

          <address className="space-y-6 not-italic lg:col-span-5 lg:border-l lg:border-ivory/20 lg:pl-12">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-clay-soft" />
              <p className="leading-relaxed">
                {site.address.street}
                <br />
                {site.address.city}, {site.address.region} {site.address.postalCode}
              </p>
            </div>
            {email && (
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-clay-soft" />
                <a href={`mailto:${email}`} className="break-all underline underline-offset-4 hover:text-white">
                  {email}
                </a>
              </div>
            )}
            {phone && (
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-clay-soft" />
                <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="underline underline-offset-4 hover:text-white">
                  {phone}
                </a>
              </div>
            )}
            <p className="border-t border-ivory/20 pt-6 text-sm leading-relaxed text-ivory/80">
              In-person in Santa Monica, or secure telehealth for clients located in California.
            </p>
          </address>
        </div>
      </Container>
    </Section>
  );
}
