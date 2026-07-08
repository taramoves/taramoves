import { getCollection, type CollectionEntry } from "astro:content";
import type { Lang } from "@/i18n/ui";

export type PostEntry = CollectionEntry<"blog">;

/** Strip the language prefix to get a clean, language-agnostic slug. */
export function postSlug(entry: PostEntry): string {
  return entry.id.replace(/^(en|fr)\//, "").replace(/\.(md|mdx)$/, "");
}

/** All posts for a language, newest first, excluding drafts. */
export async function getPosts(lang: Lang): Promise<PostEntry[]> {
  const all = await getCollection("blog", ({ id, data }) => {
    return id.startsWith(`${lang}/`) && data.draft !== true;
  });
  return all.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
}

/** A single post by slug + language. */
export async function getPost(
  lang: Lang,
  slug: string,
): Promise<PostEntry | undefined> {
  const all = await getPosts(lang);
  return all.find((p) => postSlug(p) === slug);
}

export function formatPostDate(date: Date, lang: Lang): string {
  return date.toLocaleDateString(lang === "fr" ? "fr-CA" : "en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
