## Goal

Refine the existing single-page portfolio into a cleaner, modern SaaS-inspired look (Stripe/Notion vibe) while preserving all current content. Add what's missing: a **Projects** section, a **dark/light mode toggle**, and a stronger **Hire Me** CTA. Hero gets a small layout fix (the red annotation in the screenshot shows the badge/headline area feels cramped/misaligned on this viewport).

## 1. Theme system (dark + light)

- Extend `src/index.css` with a complete `:root` light palette mirroring the existing `.dark` tokens (background, foreground, card, glass, gradients, np-red/np-blue accents tuned for light bg).
- Add a `ThemeProvider` (`src/components/ThemeProvider.tsx`) that toggles `.dark` on `<html>`, persists to `localStorage`, defaults to system preference.
- Add a `ThemeToggle` button (sun/moon icon, glass pill) inside `Navbar.tsx` next to the mobile menu trigger — visible on all breakpoints.
- Audit `HeroSection`, `Navbar`, `Footer`, `ContactSection` for hardcoded `text-white` / `bg-white/x` and replace with semantic tokens (`text-foreground`, `bg-card/60`, `border-border`, etc.) so light mode actually reads.

## 2. Hero polish (fix the annotated area)

- Tighten the left column: reduce the gap between the "Open to opportunities" pill, the H1, and the rotating title; align all three to the same left edge on desktop and center on mobile.
- Constrain headline `max-w` so "Hi, I'm Aashish Pant" wraps predictably on mid-width viewports (~900px) instead of stretching across.
- Replace the heavy `drop-shadow` text treatment with a softer SaaS look: thinner display weight (600 instead of 700), tighter tracking, no drop-shadow in light mode.
- Add a subtle **abstract gradient blob** SVG behind the hero text column (low opacity, blue→purple→cyan) for the requested "subtle background gradients / abstract shapes" feel.
- Replace the cyan→purple "View My Work" gradient button with the project's `--gradient-np` (red→blue) for brand consistency; keep size/scale.

## 3. New Projects section

- Create `src/components/ProjectsSection.tsx` with id `#projects`, slotted in `Index.tsx` **between Skills and Experience**.
- Card grid (1/2/3 cols responsive) using `.glass-card` with hover lift + gradient border on hover.
- Seed with 3 placeholder project cards (title, 1-line description, tech chips, "View" + "Code" links as `#`) clearly marked so the user can swap in real content later. Content additions only — no existing content is touched.
- Add "Projects" to `Navbar` anchor list (between Skills and Experience) and to `Footer` quick links.

## 4. Global SaaS polish (visual only)

- Standardize section header pattern already used (eyebrow + gradient H2 + divider) and apply to any section currently missing it.
- Soften card shadows in `index.css` (`--shadow-elegant`) — less blur, lower alpha — Notion-style.
- Round inputs/buttons to `rounded-xl` consistently (currently mixed `lg`/`xl`).
- Increase vertical rhythm: bump `.section-container` py from current to `py-24 md:py-32`.
- Add a persistent **"Hire Me"** pill button to the navbar (desktop only, right side, before the theme toggle) linking to `#contact` with the np-gradient — satisfies the strong-CTA requirement.

## 5. Files

- **Create**: `src/components/ThemeProvider.tsx`, `src/components/ThemeToggle.tsx`, `src/components/ProjectsSection.tsx`.
- **Edit**: `src/index.css` (light tokens, softer shadow, section spacing), `src/main.tsx` (wrap with ThemeProvider), `src/components/Navbar.tsx` (theme toggle + Hire Me CTA + Projects link), `src/components/Footer.tsx` (Projects link, token cleanup), `src/components/HeroSection.tsx` (layout fix, blob bg, token cleanup, brand-gradient CTA), `src/pages/Index.tsx` (mount ProjectsSection).
- **No content changes** to About / Education / Skills / Experience / Political View / Articles / Career Objective / Languages & Interests / Contact text.

## Out of scope

- No backend, no new dependencies, no rewrite of existing copy, no changes to the rotating-title set.
