# IlluminatE × E-Cell UIT --- Development Phases

## 1. Project Goal

Build a production-quality, responsive IlluminatE × E-Cell UIT website
that feels like a premium entrepreneurship experience and communicates
the event, its opportunities and E-Cell ecosystem clearly.

The implementation should progress from visual foundation → core
experience → event conversion → ecosystem → registration → backend/admin
→ production hardening.

## 2. Phase 0 --- Content & Asset Verification

### Objective

Freeze what is known and identify what must be verified.

### Tasks

-   [ ] Confirm original IlluminatE logo asset.
-   [ ] Confirm official event registration URL.
-   [ ] Confirm exact event date.
-   [ ] Confirm venue.
-   [ ] Confirm speaker names and photos.
-   [ ] Confirm IIT Bombay-related wording.
-   [ ] Confirm accommodation terms.
-   [ ] Confirm food/refreshment terms.
-   [ ] Confirm certificate conditions.
-   [ ] Confirm E-Cell contact details.
-   [ ] Confirm official team names.
-   [ ] Confirm E-Cell impact statistics.
-   [ ] Confirm partner logos and permissions.
-   [ ] Collect real testimonials.

### Important

The supplied content explicitly says not to invent speaker names, E-Cell
achievements, registration numbers, testimonials or unsupported
partnership claims.

### Deliverable

`verified-content.json` / content spreadsheet / approved asset folder.

------------------------------------------------------------------------

# Phase 1 --- Project Foundation

## Objective

Create the maintainable Next.js foundation.

### Tasks

-   [ ] Initialize Next.js + TypeScript.
-   [ ] Configure Tailwind CSS.
-   [ ] Add fonts.
-   [ ] Create global color tokens.
-   [ ] Create responsive container system.
-   [ ] Create typography utilities.
-   [ ] Add original logo.
-   [ ] Create base button components.
-   [ ] Create reusable section wrapper.
-   [ ] Create data folder.
-   [ ] Configure linting/formatting.

### Deliverable

A clean application shell with no major visual sections yet.

------------------------------------------------------------------------

# Phase 2 --- Navigation & Loading

## Objective

Create the first premium interaction.

### Tasks

-   [ ] Floating desktop navbar.
-   [ ] Mobile fullscreen menu.
-   [ ] Scroll-aware navbar.
-   [ ] Loading screen.
-   [ ] Logo reveal.
-   [ ] Progress line.
-   [ ] Reduced-motion fallback.
-   [ ] Route navigation.

### Acceptance

The first load should feel premium without making users wait
unnecessarily.

------------------------------------------------------------------------

# Phase 3 --- Hero & Visual Engine

## Objective

Establish the IlluminatE visual language.

### Tasks

-   [ ] Full-screen hero.
-   [ ] Black background.
-   [ ] Purple atmospheric glow.
-   [ ] Abstract energy trails.
-   [ ] Subtle particles.
-   [ ] Hero typography.
-   [ ] Primary CTA.
-   [ ] Secondary CTA.
-   [ ] Hero bottom label.
-   [ ] Initial Light Pulse prototype.

### Critical Rule

The original logo must remain untouched.

### Acceptance

At 1440px and mobile widths, the hero immediately communicates:

-   IlluminatE.
-   E-Cell UIT.
-   Entrepreneurship/innovation.
-   Changemaker positioning.
-   Register action.

------------------------------------------------------------------------

# Phase 4 --- Core Storytelling

## Objective

Turn the site into a narrative rather than a collection of cards.

### Sections

-   [ ] About IlluminatE.
-   [ ] E-Cell UIT connection.
-   [ ] Big Statement.
-   [ ] Why IlluminatE.
-   [ ] IlluminatE Experience.

### Animation

-   [ ] Scroll reveals.
-   [ ] Split text.
-   [ ] E-Cell flow animation.
-   [ ] Six interactive cards.
-   [ ] Desktop horizontal experience.
-   [ ] Mobile alternative.

### Acceptance

The visitor should understand why IlluminatE exists and what experience
it provides.

------------------------------------------------------------------------

# Phase 5 --- Featured Event & Conversion

## Objective

Move visitors from interest to registration.

### Sections

-   [ ] Featured Event.
-   [ ] Event Information.
-   [ ] Speakers.
-   [ ] Founder Spotlight.
-   [ ] Registration CTA.
-   [ ] Benefits.
-   [ ] Goodies.

### Tasks

-   [ ] Premium event card.
-   [ ] Price display.
-   [ ] Ambassador code display.
-   [ ] Deadline display.
-   [ ] Speaker placeholders until verified.
-   [ ] Goodies scroll animation.
-   [ ] Strong registration CTA.

### Current supplied promotional values

-   Original price: ₹799.
-   Special price: ₹699.
-   Ambassador code: `CA26ZTBUW`.
-   Reference: Arpita Mishra.
-   Deadline: 30 September.

These values must be treated as supplied promotional content and
revalidated before production launch.

------------------------------------------------------------------------

# Phase 6 --- Learning & Ecosystem

## Objective

Show that the event connects to the larger E-Cell ecosystem.

### Sections

-   [ ] Workshops.
-   [ ] Entrepreneur Journey.
-   [ ] Community.
-   [ ] Join E-Cell.
-   [ ] Campus Ambassador.
-   [ ] Team.
-   [ ] UIT.
-   [ ] UIT × E-Cell Philosophy.

### Tasks

-   [ ] Workshop cards.
-   [ ] Interactive entrepreneur timeline.
-   [ ] Community category cards.
-   [ ] Recruitment CTA.
-   [ ] Ambassador CTA.
-   [ ] Team category placeholders.
-   [ ] UIT institutional statistics with correct attribution.

### Acceptance

The website should sell both the event experience and the broader
entrepreneurial community.

------------------------------------------------------------------------

# Phase 7 --- Trust & Content Completion

## Objective

Add social proof and information completeness.

### Sections

-   [ ] Gallery.
-   [ ] Impact counters.
-   [ ] Partners.
-   [ ] Testimonials.
-   [ ] FAQ.
-   [ ] Contact.

### Tasks

-   [ ] Gallery filters.
-   [ ] Masonry layout.
-   [ ] Dynamic counters.
-   [ ] Partner permissions.
-   [ ] Real testimonials.
-   [ ] FAQ accordion.
-   [ ] Contact information.

### Rule

Do not publish placeholder testimonials or invented statistics as real
information.

------------------------------------------------------------------------

# Phase 8 --- Registration Experience

## Objective

Build the complete registration UI.

### Step 1

-   Full name.
-   Email.
-   Phone.
-   College.
-   Course.
-   Year.
-   City.

### Step 2

Interest:

-   Entrepreneurship.
-   Startup.
-   Innovation.
-   Technology.
-   Design.
-   Marketing.
-   Networking.
-   Leadership.

### Step 3

Confirmation:

-   Registration amount.
-   Discount.
-   Ambassador code.
-   Final amount.
-   Confirm registration.

### Success Page

-   Registration ID.
-   Event.
-   Date.
-   Venue.
-   Participant name.
-   QR code.
-   Download pass.
-   Add to calendar.
-   Share.

------------------------------------------------------------------------

# Phase 9 --- Backend & Database

## Objective

Make the system data-driven.

### Tasks

-   [ ] Create Supabase project.
-   [ ] Create events table.
-   [ ] Create speakers table.
-   [ ] Create registrations table.
-   [ ] Create team table.
-   [ ] Create gallery table.
-   [ ] Add server-side validation.
-   [ ] Connect registration flow.
-   [ ] Add payment-status model if payment integration is confirmed.
-   [ ] Add protected admin authentication.

------------------------------------------------------------------------

# Phase 10 --- Admin Dashboard

## Objective

Allow E-Cell administrators to manage the website.

### Dashboard

-   Total registrations.
-   Today's registrations.
-   Event registrations.
-   Ambassador registrations.
-   Payment status.
-   Pending registrations.

### Event Manager

-   Create event.
-   Edit event.
-   Add speaker.
-   Remove speaker.
-   Change deadline.
-   Change price.
-   Activate/deactivate registration.

### Registration Manager

Search:

-   Name.
-   Email.
-   Phone.
-   College.
-   Registration ID.
-   Ambassador code.

Export:

-   CSV.

------------------------------------------------------------------------

# Phase 11 --- SEO & Social Sharing

## Tasks

-   [ ] Page title.
-   [ ] Meta description.
-   [ ] Keywords where appropriate.
-   [ ] Open Graph image.
-   [ ] Social preview.
-   [ ] Favicon.
-   [ ] Canonical URL.
-   [ ] Sitemap.
-   [ ] Robots.
-   [ ] Structured metadata.

Supplied title:

`E-Cell UIT | IlluminatE — Entrepreneurship, Innovation & Leadership`

------------------------------------------------------------------------

# Phase 12 --- Error & Edge States

### 404

`Looks like your idea took a wrong turn.`

`Even great founders get lost sometimes.`

CTA:

`BACK TO HOME →`

### Offline/Error

`SOMETHING WENT OFF-SCRIPT.`

`The experience is temporarily unavailable.`

CTA:

`TRY AGAIN →`

### Registration states

-   Loading.
-   Validation error.
-   Submission error.
-   Payment pending if applicable.
-   Successful registration.
-   Already registered.
-   Registration closed.

------------------------------------------------------------------------

# Phase 13 --- Responsive & Accessibility QA

### Desktop

Test:

-   1440px.
-   1280px.
-   1024px.

### Tablet

Test:

-   768px.
-   834px.

### Mobile

Test:

-   360px.
-   390px.
-   430px.

### QA

-   [ ] Keyboard navigation.
-   [ ] Screen-reader labels.
-   [ ] Focus states.
-   [ ] Reduced motion.
-   [ ] Touch targets.
-   [ ] No horizontal overflow.
-   [ ] Form errors.
-   [ ] Image alt text.

------------------------------------------------------------------------

# Phase 14 --- Performance

### Tasks

-   [ ] Compress all images.
-   [ ] Use AVIF/WebP.
-   [ ] Lazy-load below-the-fold media.
-   [ ] Dynamic import heavy animation modules.
-   [ ] Avoid unnecessary 3D.
-   [ ] Reduce particle count on mobile.
-   [ ] Check Core Web Vitals.
-   [ ] Test on mid-range Android hardware.

### Target

The site should feel fast even though the visual experience is
cinematic.

------------------------------------------------------------------------

# Phase 15 --- Production Deployment

### Tasks

-   [ ] Configure production environment variables.
-   [ ] Deploy to Vercel.
-   [ ] Connect domain.
-   [ ] Configure HTTPS.
-   [ ] Configure Supabase production project.
-   [ ] Test registration.
-   [ ] Test admin.
-   [ ] Test social sharing.
-   [ ] Test analytics if approved.
-   [ ] Final content verification.
-   [ ] Final stakeholder approval.

------------------------------------------------------------------------

# Final Release Checklist

## Brand

-   [ ] Original logo used.
-   [ ] Logo not modified.
-   [ ] Purple/black design consistent.
-   [ ] No fake dragon.

## Content

-   [ ] Event information verified.
-   [ ] Speaker information verified.
-   [ ] Team information verified.
-   [ ] Statistics verified.
-   [ ] Testimonials verified.
-   [ ] Partner claims verified.

## UX

-   [ ] Registration always easy to find.
-   [ ] Mobile navigation works.
-   [ ] Forms work.
-   [ ] Success page works.
-   [ ] FAQ works.
-   [ ] Gallery works.

## Technical

-   [ ] Production build passes.
-   [ ] No console errors.
-   [ ] Responsive.
-   [ ] Accessible.
-   [ ] Fast.
-   [ ] SEO configured.
-   [ ] Deployment tested.

## Recommended Build Order

``` text
Foundation
    ↓
Navbar + Loading
    ↓
Hero + Visual Engine
    ↓
Core Storytelling
    ↓
Featured Event
    ↓
Registration CTA
    ↓
Ecosystem
    ↓
Trust Sections
    ↓
Registration Flow
    ↓
Backend
    ↓
Admin
    ↓
QA
    ↓
Production
```
