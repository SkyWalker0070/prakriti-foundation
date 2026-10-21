# Prakriti Foundation website

This is a static multi-page website: no database, hosting account, or password is needed to preview it locally.

## Preview locally

Open `index.html` in a web browser. For live updates while editing, open this folder in VS Code and use the Live Server extension (or another local static server).

## Update names, contact details and work

Open `site-content.js` in VS Code. It contains one simple list for the seven founding committee members, plus contact details, completed work and planned work.

Replace `Add full name` with each person's name and change the `position` text as needed. Add only details you are authorised to publish. Save the file, then refresh `about.html` or `work.html` in the browser to see the changes.

## Before publishing

1. Register a domain only after checking its availability. `prakritifoundationbangla.org` is currently shown only as an idea.
2. Replace every `hello@prakritifoundationbangla.org` address in `index.html` with a real monitored email address.
3. Add real social profiles and contact details only after they exist.
4. Choose a hosting provider and create the account yourself. Keep its password in a password manager; do not place it in the website files.
5. Confirm all claims, activities, legal status and donation details before adding them to the site.

## Free GitHub Pages launch

The project includes `.github/workflows/deploy-pages.yml`. After creating a GitHub repository and uploading these files, enable **Settings → Pages → Source: GitHub Actions**. The site will then publish automatically whenever the `main` branch changes. GitHub supplies a free public address in this format: `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

Do not add a `CNAME` file until you have registered and verified a custom domain.

## Files

- `index.html` — content and page structure
- `about.html` — About Us, founding committee and contact details
- `work.html` — completed work and planned work
- `styles.css` — responsive design and visual details
- `app.js` — mobile menu, subtle scroll reveals and current footer year
- `site-content.js` — the editable names, positions, contact details and work entries
- `.github/workflows/deploy-pages.yml` — free GitHub Pages deployment configuration
