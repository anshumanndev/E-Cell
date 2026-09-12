# IlluminatE × E-Cell UIT --- Architecture

## 1. Purpose

This document defines the technical architecture for the IlluminatE ×
E-Cell UIT website. The architecture is based on the supplied website
master content and its direction: a premium, cinematic, black-and-purple
entrepreneurship experience rather than a generic college-event landing
page.

**Core principle:** the original IlluminatE logo is an immutable brand
asset. The website may animate its entrance, reveal it with a mask, use
a subtle ambient glow behind it, scale it responsively, and use it as a
loading visual, but it must not be redrawn, distorted, recolored
arbitrarily, separated, or replaced.

## 2. Architecture Goals

-   Premium, cinematic visual experience.
-   Responsive-first implementation.
-   Fast initial load despite animation.
-   Reusable React components.
-   Content separated from presentation.
-   Event information configurable without rewriting UI.
-   Registration flow ready for backend integration.
-   Admin dashboard ready for later implementation.
-   Accessibility and reduced-motion support.
-   SEO-ready production structure.

## 3. Recommended Stack

  Layer                       Technology
  --------------------------- ----------------------------------------
  Framework                   Next.js + React
  Language                    TypeScript
  Styling                     Tailwind CSS
  Standard animation          Framer Motion
  Scroll/advanced animation   GSAP + ScrollTrigger
  Optional 3D                 Three.js / React Three Fiber
  Backend                     Supabase
  Deployment                  Vercel
  Icons                       Lucide React
  Fonts                       Space Grotesk / Sora / Manrope + Inter

The master content explicitly proposes Next.js/React, Tailwind CSS,
Framer Motion, GSAP, optional Three.js/React Three Fiber, Supabase and
Vercel.

## 4. High-Level System

``` text
Browser
  |
  v
Next.js App
  |
  +-- Public Experience
  |     +-- Loading
  |     +-- Navbar
  |     +-- Hero
  |     +-- Story Sections
  |     +-- Event
  |     +-- Registration
  |     +-- Community
  |     +-- Gallery
  |     +-- FAQ
  |     +-- Contact
  |
  +-- Registration Routes
  |     +-- Details
  |     +-- Interest
  |     +-- Confirmation
  |     +-- Success / QR Pass
  |
  +-- Admin Route
        +-- Dashboard
        +-- Events
        +-- Registrations
        +-- Speakers
        +-- Team
        +-- Gallery
        +-- Export
              |
              v
          Supabase
```

## 5. Suggested Project Structure

``` text
src/
├── app/
│   ├── page.tsx
│   ├── register/
│   │   └── page.tsx
│   ├── success/
│   │   └── page.tsx
│   ├── admin/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── globals.css
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   ├── loading/
│   │   └── LoadingScreen.tsx
│   ├── effects/
│   │   ├── PurpleGlow.tsx
│   │   ├── EnergyTrail.tsx
│   │   ├── Particles.tsx
│   │   └── LightPulse.tsx
│   ├── hero/
│   │   └── Hero.tsx
│   ├── about/
│   │   ├── About.tsx
│   │   └── ECellConnection.tsx
│   ├── experience/
│   │   └── ExperienceTimeline.tsx
│   ├── events/
│   │   ├── FeaturedEvent.tsx
│   │   └── EventInfo.tsx
│   ├── speakers/
│   │   ├── Speakers.tsx
│   │   └── FounderSpotlight.tsx
│   ├── goodies/
│   │   └── Goodies.tsx
│   ├── workshops/
│   │   └── Workshops.tsx
│   ├── journey/
│   │   └── EntrepreneurJourney.tsx
│   ├── community/
│   │   ├── Community.tsx
│   │   ├── JoinECell.tsx
│   │   └── Ambassador.tsx
│   ├── team/
│   │   └── Team.tsx
│   ├── uit/
│   │   └── UITSection.tsx
│   ├── gallery/
│   │   └── Gallery.tsx
│   ├── testimonials/
│   │   └── Testimonials.tsx
│   ├── faq/
│   │   └── FAQ.tsx
│   └── registration/
│       ├── RegistrationStepper.tsx
│       ├── DetailsStep.tsx
│       ├── InterestStep.tsx
│       └── ConfirmationStep.tsx
│
├── data/
│   ├── site.ts
│   ├── events.ts
│   ├── workshops.ts
│   ├── benefits.ts
│   ├── team.ts
│   └── faq.ts
│
├── lib/
│   ├── utils.ts
│   ├── animations.ts
│   └── supabase.ts
│
└── types/
    └── index.ts

public/
├── logo/
│   └── illuminate-logo.*
├── images/
├── goodies/
└── gallery/
```

## 6. Rendering Strategy

### Server-rendered by default

Use Server Components for static content sections, event information,
FAQ data and SEO content.

### Client Components only where needed

Use `"use client"` for:

-   Navbar scroll state.
-   Mobile menu.
-   Loading screen.
-   GSAP animations.
-   Framer Motion interactions.
-   Horizontal scrolling.
-   Registration stepper.
-   Gallery filtering.
-   FAQ accordion.
-   Admin dashboard interactions.

This keeps JavaScript smaller and improves performance.

## 7. Visual Layer Architecture

The visual system should be layered:

``` text
Layer 0 — #050309 background
Layer 1 — atmospheric purple glow
Layer 2 — abstract energy trails
Layer 3 — subtle particles/noise
Layer 4 — original logo
Layer 5 — typography/content
Layer 6 — CTA/interactions
```

Background effects must never modify or visually corrupt the original
logo.

## 8. Design Tokens

``` css
--background: #050309;
--background-secondary: #0A0612;
--card: #100A1C;

--purple-primary: #7C2CFF;
--purple-bright: #A855F7;
--purple-accent: #C084FC;
--purple-highlight: #E9D5FF;

--text-primary: #FFFFFF;
--text-secondary: #B7AFC5;
--border: rgba(168,85,247,0.35);
```

## 9. Animation Architecture

Create reusable animation utilities instead of writing one-off
animations in every section.

``` text
animations.ts
├── fadeUp
├── splitTextReveal
├── staggerReveal
├── cardHover
├── parallax
├── countUp
├── magneticButton
└── reducedMotionFallback
```

### Signature effects

**Light Pulse:** a small purple light travels across the page and
briefly brightens headings as it passes behind them.

**Dragon Energy:** independent purple energy trails inspired by the
logo's motion language. They must never form another version of the
logo.

## 10. Responsive Architecture

### Desktop

-   Full viewport hero.
-   Two-column About.
-   Large asymmetric event cards.
-   Horizontal Experience section.
-   Three-column Speakers.
-   Four-column Team.
-   Masonry Gallery.

### Mobile

-   Logo + hamburger.
-   Fullscreen navigation.
-   Vertical storytelling.
-   One card per viewport width where appropriate.
-   Natural horizontal swipe for horizontal sections.
-   Sticky Register CTA.
-   Reduced animation intensity.

## 11. Data Architecture

Keep content in typed data objects.

Example:

``` ts
export type Event = {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  date: string | null;
  startTime: string | null;
  endTime: string | null;
  venue: string | null;
  price: number;
  discountPrice: number | null;
  registrationDeadline: string | null;
  registrationUrl: string | null;
  status: "draft" | "active" | "closed";
  featured: boolean;
  coverImage: string | null;
};
```

This prevents event-specific information from being hardcoded into
components.

## 12. Database Architecture

The supplied master content proposes these entities:

### events

-   id
-   title
-   slug
-   description
-   short_description
-   date
-   start_time
-   end_time
-   venue
-   price
-   discount_price
-   registration_deadline
-   registration_url
-   status
-   featured
-   cover_image
-   created_at

### speakers

-   id
-   name
-   designation
-   company
-   bio
-   photo
-   linkedin
-   instagram
-   event_id

### registrations

-   id
-   registration_id
-   name
-   email
-   phone
-   college
-   course
-   year
-   city
-   event_id
-   ambassador_code
-   amount
-   payment_status
-   created_at

### team

-   id
-   name
-   role
-   department
-   photo
-   linkedin
-   instagram
-   display_order

### gallery

-   id
-   title
-   image
-   category
-   event_id
-   display_order

## 13. Route Architecture

``` text
/
    Public IlluminatE experience

/register
    Three-step registration

/success
    Registration confirmation and QR pass

/admin
    Protected management dashboard

/404
    Custom error page
```

## 14. Security

For production:

-   Protect `/admin` with authentication.
-   Never expose Supabase service-role keys in browser code.
-   Validate registration data server-side.
-   Sanitize user-provided fields.
-   Rate-limit registration/contact endpoints.
-   Keep payment status controlled by trusted backend logic.
-   Do not expose unnecessary participant information.

## 15. Performance

-   Use Next/Image.
-   Prefer WebP/AVIF assets.
-   Lazy-load gallery and heavy sections.
-   Dynamically import optional 3D.
-   Keep particle count modest.
-   Animate transform/opacity where possible.
-   Avoid unnecessary continuous JavaScript loops.
-   Respect `prefers-reduced-motion`.
-   Test mobile performance before launch.

## 16. Accessibility

-   Semantic HTML.
-   Keyboard-accessible navigation.
-   Visible focus states.
-   Proper button/link labels.
-   Alt text for meaningful images.
-   Decorative effects marked appropriately.
-   Sufficient text contrast.
-   Reduced-motion mode.
-   Form validation with readable error messages.

## 17. SEO Architecture

Use:

-   Page title:
    `E-Cell UIT | IlluminatE — Entrepreneurship, Innovation & Leadership`
-   Meta description from the supplied content.
-   Open Graph image using the original IlluminatE branding.
-   Canonical URL.
-   Sitemap.
-   Robots configuration.
-   Structured metadata where appropriate.

## 18. Architecture Principle

The website should be **data-driven, componentized, responsive,
animation-aware and backend-ready**, while preserving the original
IlluminatE visual identity.
