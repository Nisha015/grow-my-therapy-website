/**
 * Single source of truth for all website copy.
 * Every statement below is drawn from Dr. Maya Reynolds' provided profile.
 * Use *asterisks* to mark the italic accent word(s) inside a heading.
 */

const address = {
  street: "123th Street 45 W",
  city: "Santa Monica",
  region: "CA",
  postalCode: "90401",
} as const;

const fullAddress = `${address.street}, ${address.city}, ${address.region} ${address.postalCode}`;

export const site = {
  name: "Dr. Maya Reynolds, PsyD",
  shortName: "Dr. Maya Reynolds",
  credential: "Licensed Clinical Psychologist",
  title: "Therapist in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
  description:
    "Licensed clinical psychologist in Santa Monica offering in-person therapy and secure telehealth for California adults with anxiety, panic, trauma, and burnout.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  address: {
    ...address,
    full: fullAddress,
    mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`,
  },
  // Optional — nothing is rendered unless a real value is supplied (see .env.example).
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || undefined,
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || undefined,
    bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || undefined,
  },
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Office", href: "#office" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  eyebrow: "In-person in Santa Monica & telehealth across California",
  title: "Feel steady on the inside, not just *functional* on the outside.",
  text: "Therapy for adults navigating anxiety, trauma, and burnout — with practical tools and room for real depth.",
  cta: { label: "Get in touch", href: "#contact" },
} as const;

export const intro = {
  title: "You may look like you have it all together. *Inside, it feels different.*",
  lead: "Constant worry, a tense body, nights that won’t quiet down — you don’t have to keep bracing alone.",
  paragraphs: [
    "I’m a licensed clinical psychologist in Santa Monica working with adults who are thoughtful, high-achieving, and self-aware, yet feel exhausted, stuck in overthinking, or emotionally on edge.",
    "My approach is warm, collaborative, and grounded. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth.",
  ],
} as const;

export type ServiceArtVariant = "calm" | "grounded" | "renew";

export const services = {
  eyebrow: "How I can help",
  title: "Support for what’s *weighing on you*",
  items: [
    {
      title: "Anxiety & Panic",
      art: "calm" as ServiceArtVariant,
      text: "Many clients seem “functional” on the outside while quietly dealing with constant worry, tension in the body, difficulty sleeping, and the feeling of always bracing for something to go wrong. Together we’ll look at both the emotional and physiological sides of anxiety and panic.",
    },
    {
      title: "Trauma",
      art: "grounded" as ServiceArtVariant,
      text: "I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns that may stem from childhood, relationships, or chronic stress. The pace is careful, with an emphasis on safety, stabilization, and feeling more regulated in daily life — not just during sessions.",
    },
    {
      title: "Burnout & Perfectionism",
      art: "renew" as ServiceArtVariant,
      text: "For entrepreneurs, creatives, and professionals who feel disconnected from themselves after years of pushing through stress. Therapy becomes a space to slow down, reconnect, and develop more sustainable ways of living and working.",
    },
  ],
} as const;

export const expertise = {
  eyebrow: "Areas of focus",
  title: "A place to slow down, reconnect, and *feel like yourself again.*",
  items: [
    "Anxiety",
    "Panic",
    "Trauma",
    "Complex trauma",
    "Burnout",
    "Perfectionism",
    "Stress",
    "Overthinking",
    "Difficulty sleeping",
    "Tension in the body",
    "Confidence",
    "Sense of safety",
  ],
} as const;

export const about = {
  eyebrow: "About me",
  title: "A warm, collaborative, and *grounded* approach to therapy.",
  lead: "Many of the people I work with are quietly carrying more than anyone can see.",
  paragraphs: [
    "I believe therapy works best when you feel respected, understood, and actively involved in the process. My goal is not just symptom relief, but helping you develop insight, resilience, and a stronger relationship with yourself over time.",
    "If you’re looking for a therapist who combines practical tools with depth-oriented work — and who understands the realities of living and working in a fast-paced environment — I may be a good fit.",
  ],
  cta: { label: "Get in touch", href: "#contact" },
} as const;

export const approach = {
  eyebrow: "Evidence-based methods",
  title: "Understanding both the emotional and *physiological* sides of what you’re feeling.",
  text: "I integrate evidence-based methods to help you make sense of your experience and feel more regulated in your daily life.",
  items: [
    {
      title: "Cognitive-behavioral therapy (CBT)",
      text: "A practical, structured way to understand the patterns of thought and behavior behind worry, stress, and internal pressure.",
    },
    {
      title: "EMDR",
      text: "A trauma-focused method that supports processing difficult experiences carefully, with safety and stabilization first.",
    },
    {
      title: "Mindfulness-based practices",
      text: "Tools for slowing down, noticing what’s happening in the moment, and meeting it with more steadiness.",
    },
    {
      title: "Body-oriented techniques",
      text: "Approaches that attend to the physical side of stress and anxiety — tension, sleep, and the sense of always being on edge.",
    },
  ],
} as const;

export const office = {
  eyebrow: "Our Office",
  title: "A quiet, private space *designed to feel calm*",
  paragraphs: [
    "My Santa Monica office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment.",
    "Clients often share that the space itself helps them feel more at ease when they arrive.",
  ],
  note: "In-person sessions take place at the Santa Monica office. Secure telehealth is available for clients located in California.",
  directionsLabel: "Get directions",
} as const;

export const faqs = {
  eyebrow: "FAQs",
  title: "Questions you *may have*",
  items: [
    {
      q: "Who do you work with?",
      a: "I work with adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many are high-achieving, thoughtful, and self-aware, yet internally exhausted, stuck in overthinking, or emotionally on edge — including entrepreneurs, creatives, and professionals.",
    },
    {
      q: "Do you offer in-person and online sessions?",
      a: "Yes. I offer in-person therapy from my Santa Monica office and secure telehealth sessions for clients located in California.",
    },
    {
      q: "What approaches do you use?",
      a: "I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques, so we can work with both the emotional and physiological sides of what you’re experiencing.",
    },
    {
      q: "How do you approach trauma work?",
      a: "I work with single-incident trauma as well as more complex, long-standing patterns. The work is paced carefully, with an emphasis on safety, stabilization, and helping you feel more regulated in your daily life — not just during sessions.",
    },
    {
      q: "What can I expect from our sessions?",
      a: "Sessions are warm, collaborative, and grounded — structured enough to feel supportive, while still leaving space for reflection and depth. You’ll be an active part of the process, with the goal of building insight, resilience, and a stronger relationship with yourself over time.",
    },
  ],
} as const;

export const contactSection = {
  eyebrow: "Get started",
  title: "Find out if we’re a *good fit.*",
  text: "Reaching out is a meaningful first step. I offer in-person therapy from my Santa Monica office and secure telehealth sessions for clients located in California — choose what works best for you.",
} as const;

export const footer = {
  tagline: "Therapy for adults navigating anxiety, trauma, and burnout.",
  disclaimer:
    "Dr. Maya Reynolds is a fictional therapist; this website is a design exercise and not a real practice.",
} as const;
