import type { Lang } from "@/i18n/ui";

// `icon` maps to an inline SVG defined in WorkWithMePage.astro.
type Service = {
  icon: string;
  title: string;
  description: string;
};

export const services: Record<Lang, Service[]> = {
  en: [
    {
      icon: "projection",
      title: "Projection mapping & installation",
      description:
        "Projection design, content, and on-site setup for events, performances, architecture, and immersive spaces.",
    },
    {
      icon: "realtime",
      title: "TouchDesigner & real-time systems",
      description:
        "Interactive and generative visual systems, live visuals, sensors, and reactive environments.",
    },
    {
      icon: "motion",
      title: "Motion graphics & animation",
      description:
        "Vibrant 2D and 3D animation, title sequences, loops, and content for screens and domes.",
    },
    {
      icon: "web",
      title: "Creative websites",
      description:
        "Custom, expressive websites and interactive web experiences for artists, organizations, and projects.",
    },
    {
      icon: "ai",
      title: "Artificial intelligence",
      description:
        "Generative image & video, real-time models, and weaving machine learning into creative tools and workflows.",
    },
    {
      icon: "workshops",
      title: "Workshops & consultation",
      description:
        "Talks, workshops, and one-on-one guidance on creative technology, emerging media, and animation.",
    },
  ],
  fr: [
    {
      icon: "projection",
      title: "Projection mapping & installation",
      description:
        "Conception de projection, contenu et installation sur place pour événements, performances, architecture et espaces immersifs.",
    },
    {
      icon: "realtime",
      title: "TouchDesigner & systèmes en temps réel",
      description:
        "Systèmes visuels interactifs et génératifs, visuels en direct, capteurs et environnements réactifs.",
    },
    {
      icon: "motion",
      title: "Motion design & animation",
      description:
        "Animation 2D et 3D vibrante, génériques, boucles et contenu pour écrans et dômes.",
    },
    {
      icon: "web",
      title: "Sites web créatifs",
      description:
        "Sites web sur mesure et expériences web interactives pour artistes, organisations et projets.",
    },
    {
      icon: "ai",
      title: "Intelligence artificielle",
      description:
        "Image et vidéo génératives, modèles en temps réel et intégration de l'apprentissage automatique aux outils et flux créatifs.",
    },
    {
      icon: "workshops",
      title: "Ateliers & consultation",
      description:
        "Conférences, ateliers et accompagnement individuel en technologies créatives, nouveaux médias et animation.",
    },
  ],
};
