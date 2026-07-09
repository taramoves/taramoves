import { getCollection, type CollectionEntry } from "astro:content";
import type { Lang } from "@/i18n/ui";

export type ProjectEntry = CollectionEntry<"projects">;

/** Strip the language prefix to get a clean, language-agnostic slug. */
export function projectSlug(entry: ProjectEntry): string {
  return entry.id.replace(/^(en|fr)\//, "").replace(/\.(md|mdx)$/, "");
}

/** Latest 4-digit year found in a free-text year label (e.g. "2018–2025" -> 2025). */
function latestYear(year?: string): number {
  const matches = year?.match(/\d{4}/g);
  return matches ? Math.max(...matches.map(Number)) : 0;
}

/** All projects for a language, reverse-chronological (newest first), excluding drafts. */
export async function getProjects(lang: Lang): Promise<ProjectEntry[]> {
  const all = await getCollection("projects", ({ id, data }) => {
    return id.startsWith(`${lang}/`) && data.draft !== true;
  });
  return all.sort((a, b) => {
    const yearDiff = latestYear(b.data.year) - latestYear(a.data.year);
    return yearDiff !== 0 ? yearDiff : b.data.order - a.data.order;
  });
}

/** A single project by slug + language. */
export async function getProject(
  lang: Lang,
  slug: string,
): Promise<ProjectEntry | undefined> {
  const all = await getProjects(lang);
  return all.find((p) => projectSlug(p) === slug);
}
