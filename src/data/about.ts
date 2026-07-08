import type { Lang } from "@/i18n/ui";

// Bio: provided by the artist (third person). Artist statement: SEEDED PLACEHOLDER
// drawn from the bio/CV themes — review and rewrite in your own voice.
// NOTE: bio says "Montreal-based" while the CV says "Toronto". Pick one when you confirm your home base.

type AboutContent = {
  bio: string[];
  // Artist statement (first person). Replace with your own.
  statement: string[];
};

export const about: Record<Lang, AboutContent> = {
  en: {
    bio: [
      "Tara Rose Morris (she/they) is a mixed-desi Montreal-based new media artist, animator, and projection designer working across immersive installation, film, participatory art, and live performance. Working with collage-based animation and real-time visual systems, Morris builds layered audiovisual worlds that merge found media, generative processes, and architectural projection. Her work is grounded in world-building as a method for inquiry, using constructed speculative environments that audiences are invited to inhabit to explore how technologies intervene in our relationship to our bodies, identities, communities, and ecologies.",
      "Morris has presented work internationally in galleries, festivals, public spaces, and immersive media contexts. Recent presentations include Nuit Blanche Toronto, InterAccess, MAPP Montréal, SATFest, Montevideo Film Festival, SXSW XR Experience, VIFF Signals, Charles Street Video, and the FullDome Festival Jena. Her work has been exhibited across Canada, the United States, South Korea, Uruguay, Germany, and Australia.",
      "Recent recognitions include the Projection Mapping Award at MULTIFest, participation in NEW INC x Rhizome's Art & Code program, a residency with Caserne 26 and MAPP Montréal, and a Blue Creator Grant from the Centre for Ocean Literacy Collaboration.",
      "Alongside her artistic practice, Morris is an educator and facilitator who develops workshops, talks, and learning experiences focused on creative technologies, animation, and emerging media. Through both her artistic and educational work, she is interested in creating new ways for people to encounter technology as a medium for imagination, collective inquiry, and alternative futures.",
    ],
    statement: [
      "[Placeholder — replace with your own artist statement.] I make experimental animation, immersive installation, and audiovisual performance that treat emerging technology as a threshold to speculative inbetweens.",
      "Through collage-based animation and real-time visual systems, I build layered worlds that merge found media, generative processes, and architectural projection — environments audiences are invited to inhabit, and to question how technology shapes our bodies, identities, communities, and ecologies.",
    ],
  },
  fr: {
    bio: [
      "Tara Rose Morris (elle/iel) est une artiste montréalaise spécialisée dans les nouveaux médias. Animatrice et conceptrice de projections, elle travaille dans les domaines de l'installation immersive, du film, de l'art participatif et de la performance. Utilisant l'animation par collage et des systèmes visuels en temps réel, Morris construit des univers audiovisuels complexes qui fusionnent médias trouvés, processus génératifs et projection architecturale. Elle crée des environnements spéculatifs dont l'œuvre explore l'influence des technologies sur notre rapport à notre corps, à notre identité, à nos communautés et à notre environnement.",
      "Morris a présenté son travail à l'international, dans des galeries, des festivals, des espaces publics et des contextes de médias immersifs. Parmi ses présentations récentes, on compte Nuit Blanche Toronto, InterAccess, MAPP Montréal, SATFest, le Festival international du film de Montevideo, SXSW XR Experience, VIFF Signals, Charles Street Video et le FullDome Festival Jena. Son travail a été exposé au Canada, aux États-Unis, en Corée du Sud, en Uruguay, en Allemagne et en Australie.",
      "Elle a récemment reçu le prix de Projection Mapping au MULTIFest, a participé au programme Art & Code de NEW INC x Rhizome, a effectué une résidence à Caserne 26 et à MAPP Montréal, et a obtenu une bourse Blue Creator du Centre for Ocean Literacy Collaboration.",
      "Parallèlement à sa pratique artistique, Morris conçoit des ateliers, des conférences et des expériences d'apprentissage axés sur les technologies créatives, l'animation et les nouveaux médias.",
    ],
    statement: [
      "[Placeholder — à remplacer par votre propre démarche artistique.] Je crée des animations expérimentales, des installations immersives et des performances audiovisuelles qui utilisent les technologies émergentes comme seuil vers des entre-deux spéculatifs.",
      "À travers l'animation par collage et les systèmes visuels en temps réel, je construis des univers complexes qui fusionnent médias trouvés, processus génératifs et projection architecturale — des environnements que le public est invité à habiter, pour interroger la façon dont la technologie façonne nos corps, nos identités, nos communautés et nos écologies.",
    ],
  },
};

// Used across the site for contact + SEO.
export const profile = {
  name: "Tara Rose Morris",
  pronouns: { en: "she/they", fr: "elle/iel" },
  email: "taramoves@gmail.com",
  // NOTE: Instagram defaulted to instagram.com/taramoves — confirm/replace if different.
  instagram: "https://instagram.com/taramoves",
  // TODO: replace with your real handles/URLs (leave blank to hide).
  social: [
    { label: "Instagram", url: "https://instagram.com/taramoves" },
    { label: "Vimeo", url: "" },
    { label: "LinkedIn", url: "" },
  ] as { label: string; url: string }[],
  // Cal.com username + event slugs for the booking embeds (cal.com/<user>/<event>).
  calUsername: "taramoves",
  calEvents: {
    intro: "hello",
    consultation: "consultation",
  },
};
