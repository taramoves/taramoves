import type { Lang } from "@/i18n/ui";

// Recorded talks, newest first. Event names are proper nouns and stay in one
// language; descriptions are translated. `date` is shown verbatim.
// Not to be confused with `talks` in cv.ts, which is the CV listing.
export type TalkVideo = {
  event: string;
  date: string;
  description: Record<Lang, string>;
  // YouTube embed URL. Add ?start=<seconds> to open partway into a long stream.
  embedUrl: string;
};

export const talkVideos: TalkVideo[] = [
  {
    event: "SAT Fulldome Meetup",
    date: "09/11/2026",
    description: {
      en: "Full Circles in Dome Artist Talk for Flicker and Gambol Film",
      fr: "Full Circles in Dome, causerie d'artiste pour le film Flicker and Gambol",
    },
    embedUrl: "https://www.youtube.com/embed/TwKvlMdDo3A",
  },
  {
    event: "NEW INC DEMO2025: Art & Code",
    date: "06/04/2025",
    description: {
      en: "Documenting Community Through Dance with MOVES Project",
      fr: "Documenter la communauté par la danse avec le projet MOVES",
    },
    // Long livestream — starts at the talk (4:25:27).
    embedUrl: "https://www.youtube.com/embed/SERpjuB9hBM?start=15927",
  },
];
