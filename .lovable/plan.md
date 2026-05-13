## Premium UI/UX Upgrade

A focused visual polish across the existing portfolio. Content stays identical; only styling, spacing, motion, and a few global UX touches change.

### 1. Global foundations (`src/index.css` + `tailwind.config.ts`)
- Refine type scale: tighter `tracking-tight` headings, larger `section-title` (`text-4xl md:text-6xl`), magazine-style `text-balance` on titles.
- Stronger `.glass-card`: increase blur to 24px, dual-layer gradient border (red→blue tint variant `.glass-card--np` for Nepal sections), inner highlight, hover glow uses red+blue mix.
- New utilities: `.glow-border`, `.glow-input`, `.text-shine`, `.parallax-slow`, `.noise` (SVG noise overlay), `.mouse-glow` target.
- Add keyframes: `text-shine`, `pulse-glow`, `particle-rise`, `aurora`.
- Smooth scrolling already on; add `scroll-margin-top: 6rem` to all section ids for clean anchor jumps.

### 2. New global UX components
- `src/components/MouseGlow.tsx` — fixed radial gradient that follows cursor (desktop only, disabled via `prefers-reduced-motion`).
- `src/components/Particles.tsx` — lightweight CSS-only floating dot field (no canvas), used as backdrop on Hero + Contact + Footer.
- `src/components/AuroraBackground.tsx` — animated red/blue gradient mesh layer for the page wrapper.
- Mount all three in `src/pages/Index.tsx` behind content (`-z-10`).

### 3. Navbar (`Navbar.tsx`)
- Convert to floating pill: rounded-full, glass background, subtle gradient border, sits 12px from top once scrolled.
- Active link underline indicator (animated via Framer Motion `layoutId`).
- Resume button → gradient (red→blue) with glow on hover.
- Mobile menu: full-screen glass sheet with staggered link reveal.

### 4. Hero (`HeroSection.tsx`)
- Cinematic headline: animated word-by-word reveal, shimmering gradient on "Aashish".
- Replace static tags with subtle marquee strip below subtitle.
- Profile photo: add second counter-rotating ring + soft red+blue dual glow.
- Floating mini-cards (years, role, location) around photo.
- Upgrade scroll indicator to animated mouse-wheel SVG.

### 5. Section headers (shared pattern)
- Centered eyebrow chip, oversized gradient heading with shine sweep, decorative dual-line divider with center dot.
- Update: `AboutSection`, `EducationSection`, `SkillsSection`, `ExperienceSection`, `PoliticalViewSection`, `ArticlesSection`, `CareerObjectiveSection`, `LanguagesInterestsSection`, `ContactSection`.

### 6. Cards & timelines
- `EducationSection` / `ExperienceSection`: vertical timeline with gradient rail, pulsing nodes, glass cards with red/blue left-border accent and hover lift + shine.
- `SkillsSection`: progress bars get glow trail + animated shimmer; level chip becomes gradient pill.
- `ArticlesSection`: image hover zoom already present — add gradient overlay reveal with "Read" chevron, magazine-style category label (uppercase, gradient underline), refined meta row.
- `LanguagesInterestsSection` / `CareerObjectiveSection`: glass tiles with icon halos.

### 7. Contact (`ContactSection.tsx`)
- Form: glass panel with animated gradient border ring, inputs get focus glow (red→blue), floating labels feel.
- Submit button: gradient with hover glow + arrow micro-animation.
- Social icons: circular glass with gradient ring on hover, scale + glow.
- Background: aurora + particles layer.

### 8. Footer (`Footer.tsx`)
- Three-column premium layout: brand + tagline | quick links | socials.
- Top edge: glowing gradient hairline divider.
- Back-to-top: floating glass circle with gradient ring, keeps existing behavior.
- Bottom row: subtle copyright with gradient dot separators.

### 9. Motion polish
- Wrap repeating reveal logic in a tiny `MotionReveal` helper to keep components clean (fade-up, stagger).
- Respect `prefers-reduced-motion` in MouseGlow, Particles, Aurora.

### 10. Files to touch
- Edit: `src/index.css`, `tailwind.config.ts`, `src/pages/Index.tsx`, `Navbar.tsx`, `HeroSection.tsx`, `AboutSection.tsx`, `EducationSection.tsx`, `SkillsSection.tsx`, `ExperienceSection.tsx`, `ArticlesSection.tsx`, `PoliticalViewSection.tsx`, `CareerObjectiveSection.tsx`, `LanguagesInterestsSection.tsx`, `ContactSection.tsx`, `Footer.tsx`.
- Create: `MouseGlow.tsx`, `Particles.tsx`, `AuroraBackground.tsx`, `MotionReveal.tsx`.

### Out of scope
- No content/text/link changes.
- No structural section reordering.
- No new dependencies (uses existing framer-motion, tailwind, lucide).
