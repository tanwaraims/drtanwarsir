# Progress — Dr. Tanwar Sir Maths Website

## Project: drtanwarsirmaths.com Redesign
**Stack:** Next.js 16 + TypeScript + Tailwind CSS v4 + Lucide React Icons

---

## Completed

### ✅ Project Initialization
- [x] Created Next.js project with App Router, TypeScript, Tailwind CSS, ESLint
- [x] Installed `lucide-react` for consistent SVG icon set
- [x] Project root: `d:\Projects\tomar_sir_coaching\drtanwarsir`

### ✅ Global Design Tokens & Styling (`src/app/globals.css`)
- [x] Primary color: `#0f2044` (deep navy blue)
- [x] Accent color: `#f5a623` (gold/amber)
- [x] Background: `#ffffff` / Alt: `#f7f9fc`
- [x] Heading font: Poppins (400–800)
- [x] Body font: Inter (400–700)
- [x] Button styles: `.btn-primary`, `.btn-secondary`, `.btn-accent`
- [x] Section padding: 80px desktop / 48px mobile
- [x] Card component styles with hover effects
- [x] Section label, title, subtitle utility classes

### ✅ Global Layout (`src/app/layout.tsx`)
- [x] Poppins + Inter Google Fonts with `display: swap`
- [x] Site-wide metadata: title template, description, keywords, OpenGraph, robots
- [x] JSON-LD schema: EducationalOrganization + LocalBusiness
- [x] Integrated Header, Footer, WhatsApp button, Mobile bottom bar

### ✅ Sticky Header (`src/components/Header.tsx`)
- [x] Logo (DT monogram + text)
- [x] Desktop nav with dropdown for Courses
- [x] Phone number + "Book Free Demo" CTA
- [x] Mobile hamburger menu with full nav + CTAs

### ✅ Footer (`src/components/Footer.tsx`)
- [x] 4-column layout: Brand, Courses, Quick Links, Contact
- [x] Social media icon links
- [x] Copyright + Privacy/Terms links

### ✅ Floating WhatsApp Button (`src/components/WhatsAppButton.tsx`)
- [x] Bottom-right, z-50, green WhatsApp bubble
- [x] Links to `wa.me/918118853033` with pre-filled message
- [x] Hover tooltip "Chat with us"

### ✅ Mobile Bottom Bar (`src/components/MobileBottomBar.tsx`)
- [x] Fixed bottom bar on mobile (hidden on lg+)
- [x] "Call Now" + "Book Free Demo" buttons

### ✅ Reusable CTA Banner (`src/components/CTABanner.tsx`)
- [x] Dark/light variant support
- [x] Configurable title, subtitle, primary & secondary buttons

### ✅ Demo Booking Form (`src/components/DemoForm.tsx`)
- [x] Fields: Name, Phone, Email, Course, Mode, Message
- [x] Course options: IIT-JEE, NEET, Foundation, Olympiad
- [x] Mode options: Online, Offline, Hybrid
- [x] Submits via WhatsApp with pre-filled message
- [x] Success state with confirmation message

### ✅ JSON-LD Component (`src/components/JsonLd.tsx`)
- [x] Reusable component for injecting structured data

### ✅ Home Page (`src/app/page.tsx`)
- [x] Hero section with gradient background, stats, CTAs
- [x] Stats bar (500+ students, Top 100 rankers, 1L+ questions, 12+ years)
- [x] Courses/Batches section (Online, Offline, Hybrid pricing cards)
- [x] 3-Layer Logic Framework™ section
- [x] Why Choose Us (8 feature cards)
- [x] About Dr. Tanwar section (bio, 3 pillars, tags)
- [x] Testimonials (6 student reviews with star ratings)
- [x] FAQ section (6 expandable questions with schema)
- [x] CTA Banner
- [x] Contact section with info + DemoForm
- [x] Schema markup: Course, FAQPage, AggregateRating

### ✅ About Page (`src/app/about/page.tsx`)
- [x] Hero with gradient
- [x] Bio section with visual card
- [x] Three Pillars of Learning
- [x] Milestones timeline (2012–2025)
- [x] Stats section (dark)
- [x] Quote block
- [x] CTA banner

### ✅ Courses Page (`src/app/courses/page.tsx`)
- [x] Hero with gradient
- [x] IIT-JEE Mathematics section (3 batches with pricing)
- [x] NEET Mathematics section (1 batch)
- [x] Foundation Maths section (2 batches)
- [x] Maths Olympiad section (1 batch)
- [x] 1-on-1 Mentorship premium section
- [x] Mode comparison: Online / Offline / Hybrid
- [x] CTA banner

### ✅ Contact Page (`src/app/contact/page.tsx`)
- [x] Hero with gradient
- [x] Contact info (phone, email, location, hours)
- [x] WhatsApp quick chat CTA
- [x] "What to Expect" sidebar
- [x] DemoForm embedded
- [x] Quick Answers grid

### ✅ SEO & Schema
- [x] Unique meta title + description per page
- [x] OpenGraph tags
- [x] Single H1 per page
- [x] JSON-LD: EducationalOrganization, LocalBusiness, Course, FAQPage, AggregateRating
- [x] Robots meta: index, follow

### ✅ Build & Test
- [x] `npm run build` passes — all pages statically generated
- [x] Dev server running on `http://localhost:3000`

### ✅ Central Data File (`src/lib/data.ts`) — 2026-06-17
- [x] `SITE_CONFIG` — name, phone, email, address, WhatsApp URLs, hours, social links
- [x] `INSTRUCTOR` — name, title, short/long bio, credentials, quote, image path
- [x] `STATS` — 500+ students, Top 100 rankers, 1L+ questions, 12+ years
- [x] `FRAMEWORK_LAYERS` — 3-Layer Logic Framework (Foundation, Application, Optimization)
- [x] `WHY_CHOOSE` — 8 feature cards with icon names and descriptions
- [x] `TEACHING_PILLARS` — Clarity of Thought, Speed of Execution, Control Under Pressure
- [x] `MILESTONES` — Timeline from 2012 to 2025
- [x] `COURSES` — 6 courses with real batch names: Neev Udaan, Lakshya, Vijay, Shikhar JEE, Dropper, One-on-One
- [x] Each course has: pricing (online/offline/hybrid), features, schedule, WhatsApp enroll links
- [x] `MODES` — Online/Offline/Hybrid comparison data
- [x] `TESTIMONIALS` — 6 student reviews with ratings
- [x] `FAQS` — 6 frequently asked questions
- [x] `CONTACT_QUICK_ANSWERS` — 4 quick Q&A cards for contact page
- [x] `DEMO_EXPECTATIONS` — 6 items for "What to Expect" sidebar
- [x] `FORM_COURSE_OPTIONS` — Updated dropdown with real batch names
- [x] `FORM_MODE_OPTIONS` — Online/Offline/Hybrid
- [x] `NAV_ITEMS` — Header navigation with updated course dropdown links
- [x] `FOOTER_COURSE_LINKS` — Updated to real batch names/anchors
- [x] `FOOTER_QUICK_LINKS` — Footer quick links
- [x] `CONTACT_HIGHLIGHTS` — 5 bullet points for home page contact section
- [x] Build passes with `npm run build` ✓

---

## Pending / Future Enhancements
- [x] **Wire pages to import from `src/lib/data.ts`** — all hardcoded strings replaced with data.ts imports
- [x] **Logo & Image Infrastructure** — Logo component, placeholder SVG, directory structure
- [x] **Add real instructor photo** (`public/images/tanwar-sir.png`) — integrated in Home page Hero + About section, and About page Bio section
- [ ] Replace Logo.tsx DT monogram with actual logo PNGs when available
- [ ] Add real student photos/video testimonials
- [ ] Add blog section for SEO content
- [ ] Implement analytics (Google Analytics / Plausible)
- [ ] Add sitemap.xml and robots.txt
- [ ] Image optimization (WebP conversion, lazy loading)
- [ ] Add privacy policy and terms of service pages
- [ ] Performance audit (Lighthouse 90+ target)
- [ ] Deploy to Vercel / hosting platform

### ✅ Wiring Pages to data.ts — 2026-06-17
- [x] `src/app/page.tsx` — imports STATS, WHY_CHOOSE, FRAMEWORK_LAYERS, COURSES, TESTIMONIALS, FAQS, CONTACT_HIGHLIGHTS, TEACHING_PILLARS, INSTRUCTOR, SITE_CONFIG
- [x] `src/app/about/page.tsx` — imports MILESTONES, TEACHING_PILLARS, STATS, INSTRUCTOR
- [x] `src/app/courses/page.tsx` — imports COURSES, MODES, SITE_CONFIG (complete restructure to real batch data)
- [x] `src/app/contact/page.tsx` — imports SITE_CONFIG, CONTACT_QUICK_ANSWERS, DEMO_EXPECTATIONS
- [x] `src/components/Header.tsx` — imports NAV_ITEMS, SITE_CONFIG; uses `<Logo />` component
- [x] `src/components/Footer.tsx` — imports FOOTER_COURSE_LINKS, FOOTER_QUICK_LINKS, SITE_CONFIG; uses `<Logo />`
- [x] `src/components/DemoForm.tsx` — imports FORM_COURSE_OPTIONS, FORM_MODE_OPTIONS, SITE_CONFIG
- [x] Icon name→component map pattern used for string-based icons in data.ts
- [x] Build passes with `npm run build` ✓

### ✅ Logo & Image Infrastructure — 2026-06-17
- [x] `src/components/Logo.tsx` — reusable Logo component with dark/light variants, sm/md/lg sizes
- [x] `public/images/tanwar-sir-placeholder.svg` — SVG placeholder for instructor photo
- [x] `public/images/toppers/` — directory for topper photos
- [x] `public/images/testimonials/` — directory for testimonial thumbs
- [x] `public/images/videos/` — directory for testimonial videos
- [x] Logo comments show how to swap in real logo PNGs later
- [x] Header uses `<Logo variant="dark" size="md" />`
- [x] Footer uses `<Logo variant="light" size="md" />`

### ✅ Instructor Photo Integration — 2026-06-17
- [x] `public/images/tanwar-sir.png` — real instructor photo added
- [x] Home page Hero section — circular photo with gradient border and badge overlays
- [x] Home page About section — rounded rectangle photo with "Admissions Open" badge
- [x] About page Bio section — rounded rectangle photo with priority loading
- [x] All images use Next.js `<Image>` component with proper alt text and sizing
- [x] Build passes with `npm run build` ✓

---

## Session — 2026-06-18

### ✅ Project Familiarization
- [x] Reviewed full project structure: Next.js 16 + TypeScript + Tailwind CSS v4 + Lucide React
- [x] Read all pages: Home (`page.tsx`), About, Courses, Contact
- [x] Read all components: Header, Footer, WhatsApp Button, MobileBottomBar, CTABanner, DemoForm, JsonLd, Logo
- [x] Read central data file `src/lib/data.ts` (614 lines — SITE_CONFIG, INSTRUCTOR, STATS, COURSES, TESTIMONIALS, FAQs, nav/footer links)
- [x] Read `src/app/layout.tsx` — fonts, metadata, JSON-LD schemas
- [x] Read `src/app/globals.css` — design tokens, button/card/section utility classes
- [x] Verified `public/images/`: tanwar-sir.png present, toppers/testimonials/videos dirs exist (empty)
- [x] Confirmed build configuration: `next.config.ts`, `postcss.config.mjs`, `tsconfig.json`, `eslint.config.mjs`

### ✅ Bug Fix — `globals.css` Duplicate Block — 2026-06-18
- [x] **Found:** A stale default Next.js CSS block (`@import "tailwindcss"`, `:root`, `@theme inline`, `body`) was accidentally duplicated at lines 190–215 of `globals.css`
- [x] **Impact:** The second `body { font-family: Arial... }` would override the custom Poppins/Inter fonts; the second `:root` would partially override `--background` and `--foreground` design tokens
- [x] **Fixed:** Removed the entire duplicate block — file now ends cleanly after the `.card:hover` rule

---

## Current State Snapshot (2026-06-18)

| Layer | Status |
|-------|--------|
| Pages (Home, About, Courses, Contact) | ✅ Complete |
| Components (Header, Footer, etc.) | ✅ Complete |
| Central data file (`src/lib/data.ts`) | ✅ Complete |
| Design tokens & global CSS | ✅ Fixed (duplicate removed) |
| Real instructor photo | ✅ Integrated |
| Logo component | ✅ (DT monogram placeholder) |
| Social URLs (YouTube, Instagram, Facebook) | ⚠️ Need confirmation |
| Google Maps embed URL | ⚠️ Placeholder — needs real embed URL |
| Real logo PNG | ❌ Pending |
| Student / testimonial photos | ❌ Pending |
| Blog section | ❌ Not started |
| Analytics | ❌ Not started |
| sitemap.xml / robots.txt | ❌ Not started |
| Vercel deployment | ❌ Not started |

---

## Session — 2026-06-18 (Layout Fixes)

### ✅ Layout & Text Visibility Fixes

#### Root causes identified:
1. **`@theme inline` tokens used `var()` references** — Tailwind v4's `@theme` resolves at build time, so `var(--font-poppins)` inside `@theme` did not resolve correctly, making `font-heading` / `font-body` utility classes produce no output. Fixed by inlining static values with CSS variable fallbacks.
2. **Global `h1/h2/h3` `font-size: clamp(...)` overrides** — Conflicted with Tailwind utility classes like `text-3xl`, `text-5xl`, causing headings to render at wrong/unexpected sizes. Removed.
3. **`section-title` class had no font-size** — After removing the h2 global override, `.section-title` (used on `<h2>`) had no size. Added `font-size: clamp(1.75rem, 4vw, 2.5rem)` directly to the class.
4. **Tailwind `!important` overrides (`!p-6`, `!p-5`, `!py-2.5`, `!px-5`, `!text-sm`, `!py-3.5`)** — Used on custom CSS classes like `.card` and `.btn-accent`. In Tailwind v4, `!` modifier on custom CSS class properties is unreliable. Replaced all with proper CSS variant classes: `.card-sm`, `.btn-sm`.
5. **Hero math symbols (∫, ∑, dy/dx, ∞) causing horizontal overflow** — Absolute-positioned decorative elements had no overflow constraint. Added `overflow-hidden` to the wrapper `div` and `pointer-events-none` to symbols.
6. **`overflow-x` not set on html/body** — Allowed any overflowing element to create horizontal scrollbar. Added `overflow-x: hidden` to both `html` and `body`.
7. **Mobile content hidden behind fixed bottom bar** — `MobileBottomBar` is fixed at bottom; `main` had no bottom padding on mobile. Added `padding-bottom: 68px` to `main` at `max-width: 1024px`.

#### Files changed:
- [x] `src/app/globals.css` — Fixed `@theme inline` tokens, removed h1-h3 global sizes, added `.card-sm`, `.btn-sm`, `overflow-x: hidden`, mobile bottom padding, `section-title` font-size
- [x] `src/app/page.tsx` — Fixed hero overflow wrapper, replaced `card !p-6` with `card card-sm` (Why Choose + Testimonials)
- [x] `src/components/Header.tsx` — Replaced `btn-accent !py-2.5 !px-5 !text-sm` with `btn-accent btn-sm`
- [x] `src/components/DemoForm.tsx` — Replaced `!py-3.5` with inline style on submit button
- [x] `src/app/courses/page.tsx` — Replaced all `card !p-5` with `card card-sm`, fixed `btn-primary !text-sm` with `btn-primary btn-sm`
- [x] `src/app/contact/page.tsx` — Replaced `card !p-5` with `card card-sm`
- [x] Build passes with `npm run build` ✓

---

## Session — 2026-06-19 (Address & Maps Update)

### ✅ Updated in `src/lib/data.ts`
- `googleMapsUrl` → `https://maps.app.goo.gl/NgikcFx1ZiHpbpvbA` (real short link provided by user)
- `googleMapsEmbed` → Real embed URL constructed from coordinates extracted from the Maps page (`25.1346574, 75.8483249`) and the place ID (`0x396f85cfe225e585:0xe302f464b331c794`)
- `address` → Updated to `"Kota, Rajasthan – 324005"` (short form; exact street address pending from user)

> **Pending:** Confirm the exact street address text (e.g. building name, locality, street) to display in the footer and contact page.

