# Rebuild: minimal editorial portfolio

A full visual rebuild of the site into a quiet, typography-led personal site. All existing content stays — bio, education, skills, projects, articles, political view, contact details — but the copy gets tightened and the decoration comes off.

## Look and feel

- Palette: Paper & Ink — off-white paper background, near-black text, soft grey rules. One single accent used sparingly for links, active states and the Writing section.
- Type: Instrument Serif for headings, Work Sans for body text. Large, confident headings; comfortable line length for reading.
- No glowing cards, no animated blobs or particles, no gradient text, no emoji icons. Icons come from lucide-react only.
- Separation between sections comes from whitespace and thin hairline rules, not shadows.
- Light mode is the primary design; the dark/light toggle stays and gets a matching restrained dark palette.

## Page structure (single page)

1. **Hero** — name, one-line identity statement ("First-year Computer Engineering student. I write about youth and politics in Nepal."), one short intro paragraph, two plain links (see work / get in touch), and the profile photo. Static background.
2. **About** — 2–3 sentences, plus a compact strip for career objective, languages and interests so nothing is lost.
3. **Education** — simple dated list with school, board and result. No bars or percentages.
4. **Skills** — grouped tag lists (Programming, Tools, Soft skills). No progress bars.
5. **Projects** — static card grid with title, one-line description, tech tags and links.
6. **Writing** — visually distinct block: darker/inverted paper tone, serif-led article list with title, standfirst, category, read time and a "Read" link. The political-view text becomes the short editorial intro to this section instead of its own decorated section.
7. **Contact** — short form (name, email, message) plus direct links to email and the Facebook / LinkedIn / Instagram profiles as small labelled icon links.

Navigation becomes a plain sticky bar with section links, the "A" logo, and the theme toggle. Footer becomes one quiet line.

## Contact form

Messages are stored in your backend and you read them there. No email sending.

## Performance

- Motion limited to a single subtle fade on the hero and on the Writing section heading; everything else renders statically.
- Article and project images compressed and lazy-loaded, with width/height set to avoid layout shift; hero photo loads eagerly as the main image.
- Remove the decorative animation components (aurora background, particles, mouse glow, rotating title, scroll progress) and drop unused animation utilities so the bundle shrinks.
- Page title and description updated to match the new positioning.

## Technical notes

- Rewrite `src/index.css` tokens (paper/ink palette, both themes) and `tailwind.config.ts` font families; delete the glow/gradient tokens and keyframes that are no longer used.
- Rebuild each section component in place: `HeroSection`, `AboutSection`, `EducationSection`, `SkillsSection`, `ProjectsSection`, `ExperienceSection`, `ArticlesSection` (absorbing `PoliticalViewSection`, `WritingSection`), `ContactSection`, `Navbar`, `Footer`, `Layout`.
- Delete `AuroraBackground`, `Particles`, `MouseGlow`, `NepalMapBg`, `RotatingTitle`, `ScrollProgress`.
- New `contact_messages` table with RLS: public insert only, no public read; grants for insert to anon/authenticated. Client-side validation with zod (trimmed, length-capped fields) before insert.
- Existing MCP tools in `src/lib/mcp` keep working; their data file is untouched unless copy changes need mirroring.
