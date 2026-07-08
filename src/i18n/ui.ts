export const languages = {
  en: "English",
  fr: "Français",
} as const;

export const defaultLang = "en";

export type Lang = keyof typeof languages;

// All UI / chrome strings. Page-specific long-form content lives in /src/data and /src/content.
export const ui = {
  en: {
    "site.name": "Tara Rose Morris",
    "site.role": "New media artist · animator · projection designer",

    "nav.work": "Art",
    "nav.commissions": "Work",
    "nav.workWithMe": "Collaborate",
    "nav.shop": "Shop",
    "nav.about": "About",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.otherProjects": "Other projects",
    "nav.menu": "Menu",
    "nav.close": "Close",

    "home.intro":
      "Montreal & Toronto–based new media artist, animator, and projection designer building immersive worlds across installation, film, and live performance.",
    "home.enter": "Enter",

    "work.title": "Art",
    "work.intro":
      "Selected art projects across immersive installation, animation, projection, and participatory media.",
    "work.viewProject": "View project",
    "work.all": "All",
    "work.backToWork": "← Back to art",
    "work.year": "Year",
    "work.medium": "Medium",
    "work.role": "Role",
    "work.location": "Location",
    "work.presentations": "Presentations",
    "work.iterations": "Iterations",
    "work.credits": "Credits",
    "work.viewGrid": "Grid",
    "work.viewList": "List",
    "work.viewThreads": "Threads",
    "work.threadsIntro": "Connections and recurring threads across the work.",

    "commissions.title": "Work",
    "commissions.intro":
      "Selected projection, event production, motion graphics, and web work made with and for clients and collaborators.",

    "wwm.title": "Work with me",
    "wwm.intro":
      "I help artists, organizations, and teams bring ideas to life with creative technology.",
    "wwm.servicesTitle": "What I can help with",
    "wwm.bookTitle": "Book a call",
    "wwm.bookIntro": "Quick intro call",
    "wwm.bookIntroDesc": "A short call to talk through your project and see if we're a fit.",
    "wwm.bookConsultation": "Consultation",
    "wwm.bookConsultationDesc": "A longer, focused session to dig into your project in depth.",
    "wwm.bookCta": "Book",
    "wwm.bookFallback": "Prefer email? You can also",
    "wwm.bookFallbackLink": "email me directly",
    "wwm.commissionsTitle": "Selected client work",
    "wwm.commissionsIntro":
      "A few projection, event, motion, and web projects made with and for clients and collaborators.",

    "shop.title": "Shop",
    "shop.intro":
      "Limited-edition prints and original one-of-a-kind pieces. Each is printed, signed, and shipped by me.",
    "shop.buy": "Buy",
    "shop.sold": "Sold",
    "shop.inquire": "Inquire",
    "shop.original": "Original · 1 of 1",
    "shop.note":
      "Prices in CAD. Shipping calculated at checkout. Questions about an edition or shipping?",
    "shop.contactLink": "Get in touch",

    "about.title": "About",
    "about.bioTitle": "Bio",
    "about.statementTitle": "Artist statement",
    "about.cvTitle": "CV",
    "about.downloadCv": "Download CV (PDF)",
    "about.talksTitle": "Talks & teaching",
    "about.upcoming": "Upcoming",
    "about.past": "Past",
    "about.education": "Education",
    "about.exhibitions": "Commissions, exhibitions & performances",
    "about.awards": "Fellowships, residencies & awards",
    "about.professional": "Professional",
    "about.skills": "Skills",
    "about.forthcoming": "Forthcoming",

    "contact.title": "Contact",
    "contact.intro":
      "For projects, commissions, exhibitions, talks, or just to say hello.",
    "contact.email": "Email",
    "contact.elsewhere": "Elsewhere",

    "blog.title": "Journal",
    "blog.intro": "Notes on process, works-in-progress, and what's coming next.",
    "blog.back": "← Back to journal",
    "blog.empty": "No posts yet.",

    "footer.tagline": "New media artist · animator · projection designer",
    "footer.rights": "All rights reserved.",
    "footer.contact": "Contact",
    "lang.switch": "FR",
    "lang.label": "Language",
  },
  fr: {
    "site.name": "Tara Rose Morris",
    "site.role": "Artiste en nouveaux médias · animatrice · conceptrice de projections",

    "nav.work": "Art",
    "nav.commissions": "Travaux",
    "nav.workWithMe": "Collaborer",
    "nav.shop": "Boutique",
    "nav.about": "À propos",
    "nav.blog": "Blogue",
    "nav.contact": "Contact",
    "nav.otherProjects": "Autres projets",
    "nav.menu": "Menu",
    "nav.close": "Fermer",

    "home.intro":
      "Artiste en nouveaux médias, animatrice et conceptrice de projections basée à Montréal et Toronto, créant des univers immersifs à travers l'installation, le film et la performance.",
    "home.enter": "Entrer",

    "work.title": "Art",
    "work.intro":
      "Projets artistiques choisis : installation immersive, animation, projection et médias participatifs.",
    "work.viewProject": "Voir le projet",
    "work.all": "Tout",
    "work.backToWork": "← Retour à l'art",
    "work.year": "Année",
    "work.medium": "Médium",
    "work.role": "Rôle",
    "work.location": "Lieu",
    "work.presentations": "Présentations",
    "work.iterations": "Itérations",
    "work.credits": "Crédits",
    "work.viewGrid": "Grille",
    "work.viewList": "Liste",
    "work.viewThreads": "Fils",
    "work.threadsIntro": "Connexions et fils récurrents à travers les œuvres.",

    "commissions.title": "Travaux",
    "commissions.intro":
      "Travaux choisis en projection, production d'événements, motion design et conception web, réalisés avec et pour des clients et collaborateurs.",

    "wwm.title": "Collaborer",
    "wwm.intro":
      "J'aide les artistes, organisations et équipes à donner vie à leurs idées grâce aux technologies créatives.",
    "wwm.servicesTitle": "Ce que je peux faire",
    "wwm.bookTitle": "Réserver un appel",
    "wwm.bookIntro": "Appel d'introduction",
    "wwm.bookIntroDesc": "Un court appel pour discuter de votre projet et voir si nous sommes compatibles.",
    "wwm.bookConsultation": "Consultation",
    "wwm.bookConsultationDesc": "Une séance plus longue et ciblée pour approfondir votre projet.",
    "wwm.bookCta": "Réserver",
    "wwm.bookFallback": "Vous préférez le courriel ? Vous pouvez aussi",
    "wwm.bookFallbackLink": "m'écrire directement",
    "wwm.commissionsTitle": "Travaux clients choisis",
    "wwm.commissionsIntro":
      "Quelques projets de projection, d'événement, de motion et de web réalisés avec et pour des clients et collaborateurs.",

    "shop.title": "Boutique",
    "shop.intro":
      "Tirages en édition limitée et pièces originales uniques. Chaque pièce est imprimée, signée et expédiée par moi.",
    "shop.buy": "Acheter",
    "shop.sold": "Vendu",
    "shop.inquire": "Demander",
    "shop.original": "Original · pièce unique",
    "shop.note":
      "Prix en CAD. Frais d'expédition calculés au paiement. Des questions sur une édition ou l'expédition ?",
    "shop.contactLink": "Écrivez-moi",

    "about.title": "À propos",
    "about.bioTitle": "Biographie",
    "about.statementTitle": "Démarche artistique",
    "about.cvTitle": "CV",
    "about.downloadCv": "Télécharger le CV (PDF)",
    "about.talksTitle": "Conférences & enseignement",
    "about.upcoming": "À venir",
    "about.past": "Passées",
    "about.education": "Formation",
    "about.exhibitions": "Commandes, expositions & spectacles",
    "about.awards": "Bourses, résidences & prix",
    "about.professional": "Expérience professionnelle",
    "about.skills": "Compétences",
    "about.forthcoming": "À venir",

    "contact.title": "Contact",
    "contact.intro":
      "Pour des projets, commandes, expositions, conférences, ou simplement pour dire bonjour.",
    "contact.email": "Courriel",
    "contact.elsewhere": "Ailleurs",

    "blog.title": "Journal",
    "blog.intro": "Notes sur le processus, les travaux en cours et la suite.",
    "blog.back": "← Retour au journal",
    "blog.empty": "Aucun article pour l'instant.",

    "footer.tagline":
      "Artiste en nouveaux médias · animatrice · conceptrice de projections",
    "footer.rights": "Tous droits réservés.",
    "footer.contact": "Contact",
    "lang.switch": "EN",
    "lang.label": "Langue",
  },
} as const;
