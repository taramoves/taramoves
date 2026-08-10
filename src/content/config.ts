import { defineCollection, z } from "astro:content";

// One markdown file per project, per language:
//   src/content/projects/en/<slug>.md
//   src/content/projects/fr/<slug>.md
// The markdown body is the long-form project description.
const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    // Short one-line summary used on cards and meta descriptions.
    summary: z.string(),
    // Display label for the year, e.g. "2024–2025". Free text on purpose.
    year: z.string(),
    // Used for ordering newest-first. Higher = newer.
    order: z.number().default(0),
    medium: z.string().optional(),
    role: z.string().optional(),
    location: z.string().optional(),
    tags: z.array(z.string()).default([]),
    // Cover image path relative to /public, e.g. "/images/projects/moves/cover.jpg".
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    // Optional YouTube / Vimeo player URL. When set, the top of the project page
    // shows this video instead of the cover image. `cover` is still used for
    // cards and link previews.
    coverEmbed: z.string().optional(),
    // Gallery media.
    //   type "image" — image file in /public
    //   type "video" — mp4 file in /public (self-hosted)
    //   type "embed" — external embed URL (YouTube / Vimeo player URL)
    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string().default(""),
          type: z.enum(["image", "video", "embed"]).default("image"),
        }),
      )
      .default([]),
    // Distinct iterations / versions of a work (e.g. an installation vs. a film cut).
    iterations: z
      .array(
        z.object({
          title: z.string(),
          year: z.string().optional(),
          format: z.string().optional(),
          location: z.string().optional(),
          description: z.string().optional(),
          image: z.string().optional(),
          imageAlt: z.string().optional(),
          // Optional YouTube / Vimeo player URL — when set, the version shows an
          // inline video player instead of a still image.
          embed: z.string().optional(),
        }),
      )
      .default([]),
    // Presentations / showings of the work.
    presentations: z
      .array(
        z.object({
          // Free-text date, e.g. "2025", "05/29–05/30/2026", "2025 · 3-month installation".
          date: z.string().optional(),
          // Venue / festival / event name.
          title: z.string(),
          location: z.string().optional(),
          // Optional format of this showing, e.g. "Installation", "Film".
          format: z.string().optional(),
        }),
      )
      .default([]),
    // Credits, e.g. { name: "Tara Rose Morris", role: "Visuals" }.
    credits: z
      .array(
        z.object({
          name: z.string(),
          role: z.string(),
        }),
      )
      .default([]),
    // Optional external link (e.g. a video, microsite, or documentation).
    link: z.string().url().optional(),
    linkLabel: z.string().optional(),
    featured: z.boolean().default(false),
    forthcoming: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

// One markdown file per post, per language:
//   src/content/blog/en/<slug>.md
//   src/content/blog/fr/<slug>.md
const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// Unlisted prospective / future projects (WIP / seeking collaborators).
// One markdown file per project, per language:
//   src/content/future/en/<slug>.md
//   src/content/future/fr/<slug>.md
// Index at /future, detail at /future/<slug> — not linked from the menu.
const future = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    // Short tagline / one-liner used on cards and for meta description.
    summary: z.string(),
    // Free-text status, e.g. "In development", "Seeking collaborators".
    status: z.string().optional(),
    // Higher = listed first on the Future index.
    order: z.number().default(0),
    // What kind of collaboration / support you're looking for.
    lookingFor: z.array(z.string()).default([]),
    // Named collaborators already on the project.
    collaborators: z
      .array(
        z.object({
          name: z.string(),
          role: z.string().optional(),
        }),
      )
      .default([]),
    // Tech stack labels.
    tech: z.array(z.string()).default([]),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    // WIP clips / stills — same media types as project galleries.
    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string().default(""),
          type: z.enum(["image", "video", "embed"]).default("image"),
        }),
      )
      .default([]),
    // Keep out of search engines by default (these are shareable but unlisted).
    noindex: z.boolean().default(true),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog, future };
