# Business-card static site (Furniture)

This repository contains a small static website intended to be a business-card / landing page for a local furniture business.

Files:
- `index.html` — main page
- `css/style.css` — styles
- `assets/logo.svg` — placeholder logo to replace

How to publish on GitHub Pages
1. Push these files to the `main` branch of your repository (root).
2. In GitHub, go to Settings → Pages.
3. Select "Branch: main" and folder " / (root) " and Save.
4. After a short while, the site will be available at `https://<your-username>.github.io/<repo-name>/` (or at a custom domain if you add a `CNAME` file).

Customization checklist
- Replace placeholders: company name, owner name, phone, email, address.
- Replace the map iframe src with your exact Google Maps / OpenStreetMap embed for your location.
- Replace gallery placeholders with images (add `assets/` files and use `<img>` tags instead of placeholders).
- Optionally add a `CNAME` file if you have a custom domain, or a `favicon.ico`.
- If you want different fonts, add a Google Fonts link in `index.html` head and update CSS font-family.

Accessibility & print
- The site is lightweight, responsive, and includes a print stylesheet to print a business-card sized card.

If you'd like, I can:
- Prepare a ready-to-push commit (I can create the branch and files for you).
- Localize into Polish (or another language).
- Add a small contact form (static with mailto or with GitHub Actions / third-party form).