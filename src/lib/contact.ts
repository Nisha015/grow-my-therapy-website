import { site } from "@/content/site";

export type PrimaryContact = { href: string; label: string; external: boolean };

/**
 * Picks the best working contact action from whatever real details exist.
 * Falls back to directions to the office so the button is never dead.
 */
export function getPrimaryContact(): PrimaryContact {
  const { bookingUrl, email, phone } = site.contact;
  if (bookingUrl) return { href: bookingUrl, label: "Book an appointment", external: true };
  if (email) return { href: `mailto:${email}`, label: "Email Dr. Reynolds", external: false };
  if (phone) return { href: `tel:${phone.replace(/[^\d+]/g, "")}`, label: "Call to schedule", external: false };
  return { href: site.address.mapsUrl, label: "Get directions to the office", external: true };
}
