import type { Lang } from "@/i18n/ui";

export type Commission = {
  title: string;
  client?: string;
  year?: string;
  // "projection" | "event" | "web" | "motion" | other free text — used as a small tag.
  category?: string;
  description: string;
  // Optional technology / tools line.
  tech?: string;
  // Image path relative to /public, e.g. "/images/commissions/example.jpg"
  image?: string;
  imageAlt?: string;
  // Optional external link (live site, documentation, video).
  link?: string;
  linkLabel?: string;
};

export const commissions: Record<Lang, Commission[]> = {
  en: [
    {
      title: "Zoratopia",
      year: "2022",
      category: "Music Festival",
      description:
        "Live visuals direction for a nationally touring music festival — creating and managing live visuals for 50+ musical artists including Mick Jenkins, Kilo Kish, and Vic Mensa.",
      tech: "Resolume, After Effects, Cinema4D",
      image: "/images/commissions/zoratopia/zoratopia1.png",
      imageAlt: "Zoratopia live visuals",
      link: "",
      linkLabel: "",
    },
    {
      title: "I'm Tired of Being Hypersurveilled",
      year: "2023",
      category: "VR Experience",
      description:
        "A concept album for the age of the metaverse, confronting surveillance on the marginalized body in America. Placing us in the claustrophobic environment of the S.Y.S.T.E.M. (Securing Your Safety Through Extreme Means), we — playing as Heno. — are held hostage while the S.Y.S.T.E.M. attempts to surveille our every thought. When a glitch gives us the chance to see beyond the simulation, we must search for an exit or be trapped in the loop forever. The interactive experience includes simulations by nine Black artists, who created visualizers responding to prompts around surveillance. Premiered at SXSW.",
      tech: "Unreal Engine",
      image: "/images/commissions/hypersurveilled/hypersurveilled.png",
      imageAlt: "I'm Tired of Being Hypersurveilled",
      link: "",
      linkLabel: "",
    },
  ],
  fr: [
    {
      title: "Zoratopia",
      year: "2022",
      category: "Festival de musique",
      description:
        "Direction des visuels en direct pour un festival de musique en tournée nationale — création et gestion des visuels en direct pour plus de 50 artistes, dont Mick Jenkins, Kilo Kish et Vic Mensa.",
      tech: "Resolume, After Effects, Cinema4D",
      image: "/images/commissions/zoratopia/zoratopia1.png",
      imageAlt: "Visuels en direct de Zoratopia",
      link: "",
      linkLabel: "",
    },
    {
      title: "I'm Tired of Being Hypersurveilled",
      year: "2023",
      category: "Expérience VR",
      description:
        "Un album-concept pour l'ère du métavers, confrontant la surveillance du corps marginalisé en Amérique. Plongés dans l'environnement claustrophobe du S.Y.S.T.E.M. (Securing Your Safety Through Extreme Means), nous — incarnant Heno. — sommes retenus en otage tandis que le S.Y.S.T.E.M. tente de surveiller chacune de nos pensées. Lorsqu'un glitch nous donne l'occasion de voir au-delà de la simulation, nous devons chercher une sortie ou rester piégés dans la boucle à jamais. L'expérience interactive comprend des simulations de neuf artistes noirs, qui ont créé des visualiseurs répondant à des propositions autour de la surveillance. Présenté en première à SXSW.",
      tech: "Unreal Engine",
      image: "/images/commissions/hypersurveilled/hypersurveilled.png",
      imageAlt: "I'm Tired of Being Hypersurveilled",
      link: "",
      linkLabel: "",
    },
  ],
};
