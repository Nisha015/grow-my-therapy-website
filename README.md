# Dr. Maya Reynolds, PsyD — Therapy Website

A responsive, accessible one-page website for a (fictional) licensed clinical psychologist in Santa Monica, CA.
Built with **Next.js (App Router) + TypeScript + Tailwind CSS**. The section order follows the reference homepage
(conejovalleycounseling.com/home); all copy comes from Dr. Reynolds' provided profile.

## Quick start

Requires Node.js 18.18+ (Node 20 or 22 recommended).

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
npm run lint
npm run typecheck
```

## Page structure

Header → Hero → Intro → Services (3) → Areas of focus → About → Evidence-based methods → **Our Office** → FAQs → Contact → Footer

```
src/
  app/            layout (fonts, SEO metadata), page, sitemap, robots, icon
  components/
    ui/           Button, Container, Section, SectionHeading, Icons, Illustrations
    sections/     Hero, Intro, Services, Expertise, About, Approach, Office, Faq, Contact
    Header.tsx    sticky header + accessible mobile menu
    Footer.tsx
  content/
    site.ts       ALL copy lives here (edit text in one place)
    images.ts     image paths, alt text, dimensions, blur placeholders
  lib/contact.ts  picks the best working contact action
public/images/    optimized profile + office photos, Open Graph image
```

## Contact details (not in the profile)

The profile had no email, phone, or booking link, so none is invented. Contact buttons currently open Google Maps
directions to the office. To enable real contact actions, copy `.env.example` to `.env.local` and set any of:

```
NEXT_PUBLIC_CONTACT_EMAIL=
NEXT_PUBLIC_CONTACT_PHONE=
NEXT_PUBLIC_BOOKING_URL=
NEXT_PUBLIC_SITE_URL=
```

The Contact section and footer update automatically (booking URL > email > phone > directions).
On Vercel, add the same variables under Project → Settings → Environment Variables.

## Publish to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Dr. Maya Reynolds website"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Create the repository as **Public** on GitHub first (without a README, to avoid merge conflicts).

## Deploy to Vercel

1. Go to vercel.com/new and import the GitHub repository.
2. Framework preset: **Next.js** (auto-detected). Leave build settings at defaults.
3. Optionally add the environment variables above, then click **Deploy**.
4. Open the deployed URL and run the checklist below.

## Verify the final build (run in order)

```powershell
npm install
npm audit
npm run lint
npm run typecheck
npm run build
npm start
```

`npm audit` needs network access and was not run by the author. If it reports issues, run `npm audit fix`
(avoid `--force`) and rebuild. Deprecation warnings for ESLint 8 during install are expected.

## Notes

- Images: Maya's portrait and the two office photos are the ones supplied with the profile. Service-card and
  decorative artwork are original SVG illustrations, not photos. Next/Image serves AVIF/WebP with responsive sizes.
- The footer states that this is a fictional therapist / design exercise. Remove `footer.disclaimer` in
  `src/content/site.ts` if your reviewer does not want it.
- The address "123th Street 45 W" is kept exactly as written in the profile.

## Final testing checklist

- [ ] `npm install && npm run build` completes with no errors or warnings
- [ ] `npm run lint` and `npm run typecheck` pass
- [ ] No console errors on first load (DevTools → Console)
- [ ] Check widths 320, 390, 768, 1024, 1440: no horizontal scroll, no overlapping elements
- [ ] Mobile menu opens/closes (button, link click, Escape); desktop nav shows at ≥1024px
- [ ] Every nav link scrolls to its section and stops below the sticky header
- [ ] CTA buttons and "Get directions" links work; Tab through the page shows visible focus
- [ ] FAQ items expand/collapse with mouse and keyboard
- [ ] Our Office section shows both photos, balanced crops, no distortion
- [ ] View source: title, meta description, Open Graph tags, JSON-LD present
- [ ] Lighthouse (mobile): Performance, Accessibility, Best Practices, SEO all 90+
- [ ] Compare side by side with the reference homepage for section order and spacing
- [ ] Public GitHub repo opens without login; Vercel URL loads over HTTPS
- [ ] Submit: GitHub repo URL + live Vercel URL
