import type { Lang } from "@/i18n/ui";

// A "thread" is a theme or through-line that connects several projects across time.
// `projects` holds project slugs (the filename without the en/ or fr/ prefix).
export type Thread = {
  id: string;
  label: Record<Lang, string>;
  projects: string[];
};

export const threads: Thread[] = [
  {
    id: "human-movement",
    label: { en: "Human movement", fr: "Mouvement humain" },
    projects: ["handprint", "moves", "tendre", "flicker-and-gambol"],
  },
  {
    id: "collective-creation",
    label: { en: "Collective creation", fr: "Création collective" },
    projects: ["moves", "birdworld"],
  },
  {
    id: "identity",
    label: { en: "Identity", fr: "Identité" },
    projects: ["entryway", "masks", "flicker-and-gambol", "tendre"],
  },
  {
    id: "synthetic-ecologies",
    label: { en: "Synthetic ecologies", fr: "Écologies synthétiques" },
    projects: ["undersky", "birdworld"],
  },
];
