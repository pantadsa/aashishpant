# Favicon + branding from the gold "A" logo

Use the existing gold "A" logo (`src/assets/logo-a.jpg`) as the browser tab icon, replacing the default Lovable icon.

## What changes

**Favicon set**
- Generate square icons from the logo: 32x32 (`public/favicon.png`), 180x180 (`public/apple-touch-icon.png`), plus a 192x192 for Android. Padded to square, not stretched.
- Add the matching `<link rel="icon">` and `<link rel="apple-touch-icon">` tags to `index.html`.
- Delete `public/favicon.ico` so the browser no longer falls back to the old default icon.

**Navbar logo**
- The navbar and footer already display this logo image (`src/assets/logo-a.jpg`) next to the "Aashish Pant" wordmark, so no placeholder or text-only mark remains. No change needed there.

**Title and meta**
- Title is already "Aashish Pant — Portfolio" with a matching description, `og:title`, `og:description`, and Twitter card. Only addition: `<meta property="og:site_name" content="Aashish Pant" />` so shared links show the site name.

## Technical notes

- Icons produced with ImageMagick (`-resize`, `-background none -gravity center -extent`) from `src/assets/logo-a.jpg`; real files in `public/`, not asset pointers.
- Browser tabs cache favicons aggressively — a hard refresh may be needed to see the new icon locally.
