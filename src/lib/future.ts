import { getCollection, type CollectionEntry } from "astro:content";
import type { Lang } from "@/i18n/ui";

export type FutureEntry = CollectionEntry<"future">;

/** Strip the language prefix to get a clean, language-agnostic slug. */
export function futureSlug(entry: FutureEntry): string {
  return entry.id.replace(/^(en|fr)\//, "").replace(/\.(md|mdx)$/, "");
}

/** All future projects for a language, ordered, excluding drafts. */
export async function getFutureProjects(lang: Lang): Promise<FutureEntry[]> {
  const all = await getCollection("future", ({ id, data }) => {
    return id.startsWith(`${lang}/`) && data.draft !== true;
  });
  return all.sort((a, b) => b.data.order - a.data.order);
}

/** A single future project by slug + language. */
export async function getFutureProject(
  lang: Lang,
  slug: string,
): Promise<FutureEntry | undefined> {
  const all = await getFutureProjects(lang);
  return all.find((p) => futureSlug(p) === slug);
}
