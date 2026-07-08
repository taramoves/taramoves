# Content guide — where to put your stuff

This is a plain-language guide to filling in your site. You don't need to touch code for most of it — just drop images in folders and edit text in a few files.

---

## 1. Images

All images live in `public/images/`. Drop files into these folders:

| What | Where | Suggested file |
| --- | --- | --- |
| Home page big photo of you | `public/images/home/` | `portrait.jpg` |
| About page photo of you | `public/images/about/` | `portrait.jpg` |
| Project cover + gallery images | `public/images/projects/<project>/` | `cover.jpg`, then anything |
| Commission images | `public/images/commissions/` | any name |
| Social share image (link previews) | `public/images/` | `og-default.jpg` (1200×630) |

Project folders already exist: `moves`, `flicker-and-gambol`, `undersky`, `entryway`, `tendre`, `birdworld`, `masks`, `jaali-window`.

**Naming:** keep filenames lowercase with no spaces (e.g. `cover.jpg`, `detail-01.jpg`). The names referenced in the project files are `cover.jpg` — if you use a different name, update the `cover:` line in that project's file.

Until you add an image, a soft "image coming soon" placeholder shows automatically — nothing breaks.

---

## 2. Project text

Each project has two files (English + French):

- `src/content/projects/en/<project>.md`
- `src/content/projects/fr/<project>.md`

The top part (between the `---` lines) is the info shown in the sidebar. Edit any of these:

```
title:    "MOVES"
summary:  "One line shown on cards."
year:     "2024–2025"
medium:   "Immersive installation · projection"
role:     "Artist, projection design"
location: "Toronto"
tags:     ["Immersive installation", "Projection"]
cover:    "/images/projects/moves/cover.jpg"
```

Below the second `---` is the long description — write as much as you like.

**To add gallery images** to a project, fill in the `gallery:` list:

```
gallery:
  - src: "/images/projects/moves/detail-01.jpg"
    alt: "Description of the image"
  - src: "/images/projects/moves/clip.mp4"
    type: "video"
```

`masks` and `jaali-window` need year/medium/role filled in — I didn't have that info.

---

## 3. Commissions / client work

Edit `src/data/commissions.ts`. There are example entries (English + French). Copy an entry to add more. Categories like `"Projection"`, `"Event"`, `"Web"`, `"Motion"` show as a small tag. This is where your projection commissions, event production, and client websites go. (Animation reel is left out for now — add it here later as a video gallery item or a commission entry.)

---

## 4. About page (bio, statement, CV)

- **Bio + artist statement:** `src/data/about.ts`. Your bio is already in (EN + FR). The **artist statement is a placeholder** seeded from your bio/CV — please rewrite it in your own voice.
- **CV (education, exhibitions, talks, awards, professional, skills):** `src/data/cv.ts`. All entries from your CV are already in.
- **Downloadable CV PDF:** drop a file named `tara-rose-morris-cv.pdf` into `public/` and the "Download CV" button works.

> Note: your bio says "Montreal-based" but your CV says "Toronto." Pick one home base — search the project for `Montreal & Toronto` to update the SEO/structured-data location.

---

## 4b. Shop (prints & originals)

Edit `src/data/shop.ts` (English + French lists). Each product:

```
title:    "Print title"
edition:  "Limited edition of 25"   // or set original: true for one-of-a-kind
details:  "Archival giclée print · 18 × 24 in · signed & numbered"
price:    "$250 CAD"
status:   "available"   // "available" | "sold" | "inquire"
image:    "/images/shop/your-image.jpg"
checkoutUrl: ""         // paste a Stripe Payment Link here (see below)
```

Drop product photos into `public/images/shop/`.

**Status behaviour:**
- `available` → shows a **Buy** button (links to your `checkoutUrl`; falls back to the contact page if blank).
- `inquire` → shows an **Inquire** button (opens an email with the piece title). Good for originals/price-on-request.
- `sold` → shows a **Sold** badge, no button.

**Setting up checkout (Stripe Payment Links — simplest, on your own site):**
1. Create a free [Stripe](https://stripe.com) account.
2. In the Stripe dashboard → **Payment Links** → create a link per product (set price, image, and turn on **Shipping address collection** + **shipping rates**; enable **Stripe Tax** if you want automatic tax).
3. Copy each link into the matching product's `checkoutUrl`. That's it — clicking **Buy** sends the buyer to Stripe's secure checkout, and you fulfill/ship yourself.

> Later, if you want a real multi-item cart on your own site, we can switch to **Snipcart** without changing the page design.

## 5. Booking (Cal.com)

In `src/data/about.ts`, set:

```
calUsername: "taramoves",   // your cal.com username
calEvent: "intro-call",     // your event-type slug
```

So the embed loads `cal.com/<calUsername>/<calEvent>`. Create a free event type on cal.com named accordingly and it appears on the "Work with me" page automatically.

---

## 6. Contact + social links

In `src/data/about.ts`, set your `email` and fill in `social` links (Instagram, Vimeo, etc.). Empty ones are hidden automatically.

---

## 7. Before going live

- Update the domain in `astro.config.mjs` (`SITE_URL`), `src/consts.ts` (`SITE_URL`), and `public/robots.txt`.
- Add `public/images/og-default.jpg` (1200×630) for nice link previews.

See `README.md` for how to run and deploy.
