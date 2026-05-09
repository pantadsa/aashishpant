## Make lower sections more attractive

Enhance visual richness across the lower sections (keep Hero untouched) with a "Bold modern minimal + glassmorphism glow" direction and moderate motion.

### 1. Background atmosphere
- Add subtle animated gradient blobs (blue/purple) to `index.css` as fixed decorative layer behind lower sections.
- Soft grid/dot pattern overlay at very low opacity for depth.

### 2. Section headers
- Larger gradient titles with animated underline accent.
- Add a small floating icon badge above each section title for visual anchor.

### 3. Cards & components
- Upgrade `.glass-card` with stronger frosted blur, gradient border (using mask trick), and glow on hover.
- Add tilt/lift hover micro-interaction.
- Education timeline: add gradient connector line, pulsing dots, and shine sweep on cards.
- Skills: animated progress bars or gradient skill chips with hover glow.
- Experience: timeline cards with gradient left-border accent.
- Articles: image hover zoom + gradient overlay reveal.
- Contact: gradient social buttons with neon hover glow.

### 4. Motion
- Scroll-reveal staggered fade/slide for items.
- Subtle floating animation on icon badges.
- Gradient shimmer on section dividers.

### 5. Files to touch
- `src/index.css` — new utility classes (gradient borders, glow, shimmer, blob animations, dot grid).
- `tailwind.config.ts` — add keyframes (float, shimmer, blob).
- `src/pages/Index.tsx` — wrap lower sections with decorative blob layer.
- Section components: `AboutSection`, `EducationSection`, `SkillsSection`, `ExperienceSection`, `ArticlesSection`, `CareerObjectiveSection`, `LanguagesInterestsSection`, `ContactSection` — apply enhanced classes and add floating icon badges.

### Constraints
- Keep Hero exactly as-is.
- No layout/typography overhaul — same content, same spacing rhythm.
- Light theme stays clean and readable; effects are subtle, not heavy.