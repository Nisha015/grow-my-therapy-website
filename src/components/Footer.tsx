import { footer, navLinks, site } from "@/content/site";
import { Logo } from "./Logo";
import { Container } from "./ui/Container";

export function Footer() {
  const { email, phone } = site.contact;
  return (
    <footer className="bg-sage-900 text-ivory/80">
      <Container className="grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Logo tone="dark" />
          <p className="mt-6 max-w-sm text-[1.0625rem] leading-relaxed">{footer.tagline}</p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <h2 className="eyebrow !text-sage-300">Navigate</h2>
          <ul className="mt-5 space-y-3">
            <li>
              <a href="#top" className="inline-block py-1 hover:text-white">
                Home
              </a>
            </li>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="inline-block py-1 hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="eyebrow !text-sage-300">Contact</h2>
          <address className="mt-5 space-y-3 not-italic">
            <p>
              {site.address.street}
              <br />
              {site.address.city}, {site.address.region} {site.address.postalCode}
            </p>
            {email && (
              <p>
                <a href={`mailto:${email}`} className="hover:text-white">
                  {email}
                </a>
              </p>
            )}
            {phone && (
              <p>
                <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="hover:text-white">
                  {phone}
                </a>
              </p>
            )}
            <p>
              <a href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-block py-1 underline underline-offset-4 hover:text-white">
                Get directions<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </p>
          </address>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-sm md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="md:max-w-md md:text-right">{footer.disclaimer}</p>
        </Container>
      </div>
    </footer>
  );
}
