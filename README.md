# Dariusz Jemielniak - personal site

A single-page static site. Three files of source (`index.html`, `styles.css`, `script.js`) plus one photo in `assets/`. No build step. Vercel serves it as-is.

## What to edit before deploying

Open `index.html` and check:

1. **Email address** (line near the bottom, in the contact section). The placeholder is `darekj@kozminski.edu.pl` - replace if needed.
2. **Roles** in the hero (lines 50-56 area) - update if anything changed.
3. **Books and papers** - already populated from the CV (December 2025 version).
4. **Photo** - already in `assets/portrait.jpg`. To replace, drop a new file in the same place with the same name.

That's it. No other edits required.

## Deploying via GitHub (web only, no CLI)

### 1. Create the repository

1. Go to [github.com/new](https://github.com/new).
2. Repository name: `jemielniak-site` (or anything you prefer).
3. Set to **Public** (Vercel's free tier works with public repos).
4. Leave the rest unchecked. Click *Create repository*.

### 2. Upload the files

On the new empty repo page:

1. Click *uploading an existing file* (the link in the middle of the page).
2. Drag in **all four items**: `index.html`, `styles.css`, `script.js`, and the `assets/` folder (or upload `assets/portrait.jpg` directly - GitHub will create the folder).
3. Scroll down. Commit message: "initial commit".
4. Click *Commit changes*.

### 3. Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new) (sign in with GitHub if asked).
2. *Import* the repository you just made.
3. Vercel will auto-detect it as a static site. Don't change any settings.
4. Click *Deploy*.

In ~20 seconds you'll have a live URL like `jemielniak-site.vercel.app`. Vercel will redeploy automatically every time you push a change to GitHub.

### 4. Custom domain (optional)

In the Vercel project: *Settings → Domains → Add*. Vercel will give you DNS records to point your domain at.

## File map

```
jemielniak-site/
├── index.html        # all content lives here
├── styles.css        # all design lives here
├── script.js         # scroll reveal + year stamp
├── assets/
│   └── portrait.jpg  # the photo
└── README.md         # this file
```

## Design notes

- Fonts are loaded from Google Fonts (Fraunces for display, Inter Tight for body, JetBrains Mono for tags). No self-hosting needed.
- Color palette: warm paper background, ink text, cinnabar accent.
- Responsive down to ~360px.
- Honors `prefers-reduced-motion` for the scroll reveals.
- No tracking, no cookies, no external scripts apart from Google Fonts.

## Editing later

To change copy, edit `index.html` on GitHub directly (pencil icon on the file page). Each commit triggers a fresh Vercel deploy in under a minute.
