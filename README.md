# Dariusz Jemielniak - personal site

A trilingual static site (English, Polish, German). Shared CSS and JS, one photo, three HTML files. No build step. Vercel serves it as-is.

## URLs once live

- `/` - English (default)
- `/pl/` - Polski
- `/de/` - Deutsch

The language switcher in the masthead links between them. Each version sets the right `<html lang="...">` and includes `hreflang` tags so search engines understand the alternates.

## Before deploying

Open the three `index.html` files (root, `pl/`, `de/`) and check:

1. **Email address** in the contact section. The placeholder is `darekj@kozminski.edu.pl` in all three - change if needed.
2. **Wikipedia links**: the EN and PL Wikipedia articles are confirmed to exist. The DE Wikipedia link points to `https://de.wikipedia.org/wiki/Dariusz_Jemielniak` but I could not verify the German article actually exists yet. If it doesn't, the link will lead to a "create article" page on de.wikipedia. Either remove that link from all three files or use it as motivation to ask a German Wikipedian to create the article.
3. **Roles** in the hero (each language) - update if anything changed.
4. **Photo** - `assets/portrait.jpg`. Replace by overwriting that file (same name).

## File map

```
jemielniak-site/
├── index.html          # English (root)
├── pl/
│   └── index.html      # Polish
├── de/
│   └── index.html      # German
├── styles.css          # shared design (referenced as ../styles.css from subfolders)
├── script.js           # shared JS (referenced as ../script.js from subfolders)
├── assets/
│   └── portrait.jpg    # photo
├── .gitignore
└── README.md
```

## Deploying via GitHub (web only, no CLI)

### 1. Create the repository

1. Go to [github.com/new](https://github.com/new).
2. Repository name: `jemielniak-site` (or anything).
3. Set to **Public**.
4. Click *Create repository*.

### 2. Upload the files

On the new empty-repo page:

1. Click *uploading an existing file*.
2. Drag in everything from the unzipped folder: `index.html`, `styles.css`, `script.js`, `README.md`, `.gitignore`, the `assets/` folder, the `pl/` folder, and the `de/` folder. GitHub preserves folder structure when you drag from your file explorer.
3. Commit with message "initial commit".

If GitHub's web uploader balks at folders, use the CLI alternative below.

### 3. Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new) (sign in with GitHub).
2. *Import* the repository.
3. Vercel auto-detects a static site. Keep defaults.
4. *Deploy*.

You'll have a live URL in ~20 seconds. Every later commit triggers a fresh deploy.

### 4. Custom domain (optional)

Vercel project settings → Domains → Add. Vercel gives you DNS records to point your domain at.

## CLI alternative for upload (if web uploader struggles with folders)

```bash
cd jemielniak-site
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/jemielniak-site.git
git push -u origin main
```

## Editing the live site

Use GitHub's pencil-icon editor on each `index.html` to make text changes. Each commit auto-deploys via Vercel. To edit all three language versions consistently, edit each `index.html` file in turn.

## Translation notes

The Polish and German translations preserve book titles in their original (mostly English) form, since those are the published canonical titles. Section labels, role descriptions, and prose paragraphs are fully translated. Place names follow the conventional rendering of each language (Warsaw / Warszawa / Warschau).

## Design notes

- Fonts loaded from Google Fonts (Fraunces, Inter Tight, JetBrains Mono).
- Color palette: warm paper, ink, cinnabar accent.
- Responsive to ~360px.
- Honors `prefers-reduced-motion`.
- No tracking, no cookies, no external scripts other than Google Fonts.
