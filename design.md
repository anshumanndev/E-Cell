# IlluminatE × E-Cell UIT --- Design System

## 1. Creative Direction

The visual identity is:

**BLACK × PURPLE × LIGHT × ENERGY × ENTREPRENEURSHIP**

The target feeling is a combination of:

-   Premium startup website.
-   National entrepreneurship event.
-   Futuristic editorial design.
-   College innovation ecosystem.

It must not look like a generic college society template.

## 2. Brand Rules

The original IlluminatE logo is the visual authority.

### Never

-   Redraw the dragon.
-   Modify the flame.
-   Change typography.
-   Change bulb symbol.
-   Stretch or compress.
-   Arbitrarily recolor.
-   Add effects that change the original appearance.
-   Replace with AI-generated artwork.
-   Separate dragon and wordmark.
-   Change orientation.

### Allowed

-   Slow entrance animation.
-   Mask reveal.
-   Very subtle ambient glow behind it.
-   Dark-background usage.
-   Responsive scaling.
-   Loading-screen use.

## 3. Color Palette

### Core

  Token              Value                     Use
  ------------------ ------------------------- ----------------------
  Background         `#050309`                 Main page
  Secondary          `#0A0612`                 Alternating sections
  Card               `#100A1C`                 Cards/panels
  Purple Primary     `#7C2CFF`                 Main accent
  Purple Bright      `#A855F7`                 Highlights
  Purple Accent      `#C084FC`                 Secondary glow
  Purple Highlight   `#E9D5FF`                 Bright details
  White              `#FFFFFF`                 Main text
  Secondary Text     `#B7AFC5`                 Supporting text
  Border             `rgba(168,85,247,0.35)`   Borders

Do not make every section purple. Purple should function as energy and
emphasis against darkness.

## 4. Typography

### Display

Preferred:

-   Space Grotesk
-   Sora
-   Manrope

### Body

-   Inter

### Numbers

-   Space Grotesk Bold

## 5. Type Scale

Suggested responsive scale:

``` text
Hero title:
clamp(4rem, 12vw, 12rem)

Section title:
clamp(3rem, 7vw, 7rem)

Large statement:
clamp(3.5rem, 9vw, 9rem)

Card title:
clamp(1.5rem, 3vw, 3rem)

Body:
1rem–1.125rem

Small labels:
0.7rem–0.85rem
```

Use tight line-height for display typography and comfortable line-height
for body copy.

## 6. Layout

### Global

-   Max content width around 1200--1400px.
-   Generous whitespace.
-   Large vertical section spacing.
-   Asymmetric compositions where appropriate.
-   Avoid dense grids everywhere.

### Hero

Full viewport.

``` text
E-CELL UIT PRESENTS

ILLUMINATE

Empowering the Next Generation
of Changemakers

[EXPLORE] [REGISTER]
```

Bottom micro-label:

`ENTREPRENEURSHIP • INNOVATION • LEADERSHIP`

## 7. Visual Background

Use a mostly black background with:

-   Purple atmospheric glow.
-   Slow gradients.
-   Fine particles.
-   Abstract curved energy trails.
-   Very subtle noise.

Energy trails should look like:

`flowing purple light → curved energy → disappearing particles`

They must never create another fake IlluminatE logo.

## 8. Loading Screen

Sequence:

``` text
Black
↓
Tiny purple light
↓
Light expands
↓
Original logo reveal
↓
Dragon reveal through soft mask
↓
Wordmark settles
↓
Tagline
↓
CTA/content transition
```

Loading screen:

``` text
[ ORIGINAL LOGO ]

E-CELL UIT

INITIALIZING EXPERIENCE...

──────── purple progress line
```

Keep the loading experience short.

## 9. Navbar

### Desktop

``` text
[LOGO]     Home About Experience Events Opportunities
           Speakers Community Team          [REGISTER →]
```

Style:

-   Transparent at top.
-   Glass/dark surface after scroll.
-   Blur.
-   Thin purple-tinted border.
-   Small logo.
-   Clear CTA.

### Mobile

``` text
[LOGO]                           [MENU]
```

Use a fullscreen menu.

## 10. Section Design Patterns

### Editorial section

Large heading on one side, text on the other.

### Full-screen statement

Large typography centered or offset.

### Cards

Dark surfaces with thin borders, subtle glow and small hover movement.

### Timeline

Large numbered stages connected by a glowing line.

### Gallery

Masonry layout with brightening hover.

### FAQ

Minimal accordion with strong typography.

## 11. Card Style

``` css
background: #100A1C;
border: 1px solid rgba(168,85,247,0.35);
border-radius: 20px;
```

Avoid excessive rounded "app UI" styling. Some sections can use sharp or
lightly rounded editorial panels.

Hover:

``` text
translateY(-3px to -6px)
slight border/glow increase
image brightness increase
```

## 12. Buttons

Primary:

``` text
[ REGISTER NOW → ]
```

Characteristics:

-   Strong typography.
-   Dark/bright contrast.
-   Thin border.
-   Subtle purple glow.
-   Magnetic cursor effect on desktop.
-   Large touch target on mobile.

Secondary:

``` text
[ EXPLORE ILLUMINATE ]
```

Do not make every button neon.

## 13. Signature Motion

### Light Pulse

A purple light travels across the page.

When it passes behind a heading:

``` text
ILLUMINATE
```

the text briefly becomes brighter.

This should be recognizable as the website's signature motion.

### Logo

Slow reveal only.

### Text

Split-text or word/line reveal.

### Cards

3--6px movement.

### Images

Subtle parallax.

### Numbers

Count-up.

### Event Cards

Very slight tilt.

## 14. Hero Composition

The logo should have breathing room.

Do not place particles directly over important logo details.

Recommended layering:

``` text
Black
  +
Purple glow
  +
Energy trails
  +
Particles
  +
Original logo
  +
Hero text
  +
CTA
```

## 15. About Design

Headline:

`AN IDEA IS ONLY THE BEGINNING.`

Use oversized typography.

Supporting copy should be comparatively small, creating editorial
contrast.

## 16. Big Statement Design

Full-screen:

``` text
WHAT IF YOUR
NEXT IDEA
CHANGES
EVERYTHING?
```

Then:

``` text
Don't wait until you're ready.

Start learning.
Start building.
Start connecting.
Start now.
```

## 17. Why IlluminatE

Six interactive cards:

1.  LEARN
2.  CONNECT
3.  DISCOVER
4.  BUILD
5.  PITCH
6.  LEAD

Each card should feel like a chapter rather than a generic feature box.

## 18. Experience Design

Use horizontal scrolling on desktop:

``` text
THE SPARK
→ THE IDEA
→ THE BUILD
→ THE PITCH
→ THE CONNECTION
→ THE IMPACT
```

Mobile should use natural vertical or swipe behavior.

## 19. Event Design

The Featured Event section is a conversion section.

Prioritize:

1.  Event identity.
2.  IIT Bombay speaker opportunity as supported by verified event
    information.
3.  Founder insight.
4.  Benefits.
5.  Price.
6.  Deadline.
7.  Registration CTA.

Do not display unverified speaker names, exact venue/date or unsupported
partnership claims.

## 20. Goodies Design

Visual sequence:

``` text
Backpack
↓
Notebook
↓
Diary
↓
Pen
↓
Keychain
↓
Posters
```

Each object should appear independently during scroll.

## 21. Entrepreneur Journey

Use a giant vertical timeline:

``` text
01 OBSERVE
02 QUESTION
03 IDEATE
04 VALIDATE
05 BUILD
06 TEST
07 PITCH
08 ITERATE
09 LAUNCH
```

The active stage should illuminate as the visitor scrolls.

## 22. Community

Six areas:

-   Tech
-   Design
-   Business
-   Marketing
-   Operations
-   Leadership

Make them visually distinct but part of the same system.

## 23. Team

Do not populate unverified names.

Use placeholders:

`COMING SOON`

Once verified, use portrait + name + role + department + approved social
links.

## 24. Gallery

Filters:

`ALL / EVENTS / WORKSHOPS / TEAM / SPEAKERS / COMPETITIONS / CAMPUS`

Hover:

-   Image brightens.
-   Caption appears.
-   `ILLUMINATE 2026`
-   `Explore moment →`

## 25. Mobile Design

Mobile is a separate composition, not a squeezed desktop.

Requirements:

-   Large readable hero.
-   Touch-friendly CTAs.
-   Fullscreen navigation.
-   One card per width where appropriate.
-   Natural horizontal swipe.
-   Sticky Register bar.
-   Reduced particle/animation intensity.

## 26. Accessibility Design

-   Never rely on purple alone to communicate state.
-   Maintain readable contrast.
-   Keyboard navigation.
-   Visible focus.
-   Reduced-motion support.
-   Descriptive form errors.
-   Proper alt text.

## 27. Design Do / Don't

### Do

-   Use black as the dominant canvas.
-   Use purple selectively.
-   Give typography room.
-   Create visual hierarchy.
-   Use animation to explain progression.
-   Keep the logo untouched.
-   Make registration obvious.

### Don't

-   Turn the whole website purple.
-   Add fake dragons.
-   Overuse glow.
-   Put animations on everything.
-   Use generic college templates.
-   Invent speakers or statistics.
-   Use fake testimonials.
-   Claim unsupported partnerships.

## 28. Design North Star

Every design decision should reinforce:

**UNPLUG. INNOVATE. BREAK.**

and:

**EMPOWER THE NEXT GENERATION OF CHANGEMAKERS.**
