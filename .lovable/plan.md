## Replace logo with uploaded "A" image

Use the uploaded gold/black "A" logo image in place of the current "AP." text logo across the site.

### Steps

1. Copy `user-uploads://WhatsApp_Image_2026-05-09_at_12.19.17_PM.jpeg` → `src/assets/logo-a.jpg`.
2. Update `src/components/Navbar.tsx`: replace the "AP." text with `<img src={logo} alt="Aashish Pant" className="h-9 w-9 rounded-md object-cover" />`.
3. Update `src/components/Footer.tsx`: same replacement, sized similarly.
4. Keep the link wrapper (`<a href="#">`) and existing layout/spacing untouched.

No other sections or styles change.