# taramoves.com

Bilingual (English / French) portfolio website for **Tara Rose Morris** — new media artist, animator, and projection designer. Built with [Astro](https://astro.build).

> Filling in your content? See **[CONTENT-GUIDE.md](./CONTENT-GUIDE.md)** — no coding required for most of it.

## Quick start

```bash
npm install      # install dependencies (first time only)
npm run dev      # start local dev server at http://localhost:4321
```

Then open the printed URL in your browser. Pages live at:

- English: `/`, `/work`, `/commissions`, `/work-with-me`, `/about`, `/contact`
- French: `/fr/`, `/fr/work`, `/fr/commissions`, …

## Build

```bash
npm run build    # outputs static site to ./dist
npm run preview  # preview the production build locally
```

## Project structure

```
public/                  Static files & images (see CONTENT-GUIDE.md)
src/
  components/            UI components (Nav, Footer, SEO, ProjectCard…)
    pages/               One component per page type (shared by EN + FR)
  content/projects/      Project write-ups: en/<slug>.md & fr/<slug>.md
  data/                  Editable content: about, cv, commissions, services
  i18n/                  Translations (ui.ts) + helpers
  layouts/               BaseLayout (head, SEO, nav, footer)
  pages/                 Routes — thin wrappers that pick a language
    fr/                  French routes
  styles/global.css      Design tokens & base styles
astro.config.mjs         Site URL, i18n config, sitemap
```

## Languages

English is the default and lives at the root (`/`). French lives under `/fr/`. The language toggle in the nav links to the equivalent page. UI labels are in `src/i18n/ui.ts`; long-form content is bilingual in `src/data/` and `src/content/`.

## Deploy to Vercel (free)

1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
3. Vercel auto-detects Astro. Click **Deploy**. Done — you get a free `*.vercel.app` URL and automatic redeploys on every push.
4. Add your custom domain (`taramoves.com`) in the project's **Domains** settings.

Before launch, update `SITE_URL` in `astro.config.mjs` and `src/consts.ts`, and the sitemap URL in `public/robots.txt`, to your real domain.

> Netlify and Cloudflare Pages also work the same way (free static hosting). Astro builds to plain static files.

## Note on Node version

This site targets **Astro 4** because your Node is `v18.20.3`. To upgrade to Astro 5 later, update Node to 18.20.8+ (or 20.3+ / 22+) and bump `astro` in `package.json`.
