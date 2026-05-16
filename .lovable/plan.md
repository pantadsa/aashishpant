## Goal

Restore the site to a single scrolling page containing every existing section, then push the visual/interaction quality to "ultra-premium": cinematic dark theme, glassmorphism, Nepal red/blue glow accents, rotating hero titles, mouse-glow, particles, and scroll-reveal animations. All textual content stays exactly as-is.

## 1. Routing → single page

- `src/App.tsx`: collapse routes. Keep `Layout` wrapping a single `/` → `Index`, plus `*` → `NotFound`. Drop `/about`, `/skills`, `/political-view`, `/articles`, `/contact` route entries.
- Delete: `src/pages/AboutPage.tsx`, `SkillsExperiencePage.tsx`, `PoliticalViewPage.tsx`, `ArticlesPage.tsx`, `ContactPage.tsx`, `Home.tsx` (consolidate into `Index.tsx`).
- `src/pages/Index.tsx`: render every section in order with anchor ids:
  `#hero → #about → #education → #skills → #experience → #political-view → #articles → #career-objective → #languages-interests → #contact`.
- `Layout.tsx`: keep `AuroraBackground`, `MouseGlow`, `Particles`, `ScrollProgress`, `Navbar`, `Footer`, but remove the `AnimatePresence` per-route wrapper (no longer needed).

## 2. Navigation → anchor links

- `src/components/Navbar.tsx`: switch `NavLink`/`Link` items to hash anchors (`#about`, `#skills`, …). Add IntersectionObserver-based active-section highlight with animated underline (Framer Motion `layoutId`). Mobile sheet uses the same anchors and closes on click. Keep the floating glass pill style.
- `src/components/Footer.tsx`: replace route links with the same anchor hrefs. Keep the three-column premium layout and add the tagline `"Building bridges between technology and society. Amplifying youth voices through code and words."` (already part of content goals).
- `src/components/HeroSection.tsx` CTAs: `View My Work → #articles`, `Contact Me → #contact`, scroll indicator → `#about`. Use plain `<a href="#…">` with smooth scroll (already enabled in `index.css`).

## 3. Hero upgrade

- Replace the three static chip tags with a **rotating title** component cycling every ~2.6s through:
  `Computer Engineering Student`, `Political Observer`, `Social Writer`, `Youth Voice Advocate` (Framer Motion `AnimatePresence` with y-fade).
- Tagline stays: "Amplifying Youth Voices through Technology and Digital Media."
- Add a faint SVG Nepal map outline behind the profile column (absolute, low opacity, masked with radial gradient).
- Keep dual rotating rings + red/blue glow on the photo; add a soft particle cluster localized to the hero.
- Animated word-by-word reveal on the H1 (stagger children).

## 4. Section-wide polish (apply consistently)

- Standard section header pattern: eyebrow chip + oversized `gradient-text` heading + dual-line divider with center dot.
- Wrap each section's main content in a small `MotionReveal` helper (`whileInView` fade-up, `once: true`).
- Cards adopt `.glass-card` / `.glass-card--np` with hover lift + shine.

Section-specific touches (visual only — no content changes):

- **About**: two-column premium card; floating animated stat tiles (counters animate on view).
- **Education**: vertical timeline with gradient rail, pulsing nodes, glass cards.
- **Skills**: animated progress bars (width animates on scroll into view) inside futuristic cards with icon halos.
- **Experience**: glass icon cards with hover elevation and red→blue gradient accent border.
- **Political View**: keep existing; tighten with animated quote mark, glowing border, subtle Nepal-map backdrop.
- **Articles**: featured-first magazine layout (1 large + grid), category tags, hover image zoom.
- **Career Objective**: centered cinematic quote with glowing divider and aurora backdrop.
- **Languages & Interests**: interactive chip/card grid with glow on hover.
- **Contact**: already glass + glow inputs; add animated gradient ring around panel and circular glass social icons with gradient ring on hover.
- **Footer**: glowing top hairline, floating logo circle, animated divider, premium typography.

## 5. Global UX

- Smooth scrolling already on (`html { scroll-behavior: smooth }`); add JS offset compensation already handled via `scroll-margin-top: 6rem`.
- `ScrollProgress` stays at top.
- `MouseGlow` desktop-only (already gated).
- Add a one-time loading splash: fixed overlay with logo + gradient ring that fades after `window.load` (≤800ms).
- Respect `prefers-reduced-motion` (already partially in CSS) — extend to disable rotating titles and parallax.

## 6. Files touched

- Edit: `src/App.tsx`, `src/pages/Index.tsx`, `src/components/Layout.tsx`, `Navbar.tsx`, `Footer.tsx`, `HeroSection.tsx`, `AboutSection.tsx`, `EducationSection.tsx`, `SkillsSection.tsx`, `ExperienceSection.tsx`, `PoliticalViewSection.tsx`, `ArticlesSection.tsx`, `CareerObjectiveSection.tsx`, `LanguagesInterestsSection.tsx`, `ContactSection.tsx`, `src/index.css` (small additions: nepal-map utility, splash fade).
- Create: `src/components/RotatingTitle.tsx`, `src/components/MotionReveal.tsx`, `src/components/NepalMapBg.tsx`, `src/components/LoadingSplash.tsx`.
- Delete: `src/pages/Home.tsx`, `AboutPage.tsx`, `SkillsExperiencePage.tsx`, `PoliticalViewPage.tsx`, `ArticlesPage.tsx`, `ContactPage.tsx`.

## Out of scope

- No text/content edits, no new dependencies, no backend, no theme toggle changes.
