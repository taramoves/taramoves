// Structured CV data. Venue/festival/program names are proper nouns, so the
// lists are shared across languages; section headings are translated via the UI strings.

export type CvItem = {
  title: string;
  detail?: string;
  work?: string;
  forthcoming?: boolean;
};

export type CvYearGroup = {
  year: string;
  items: CvItem[];
};

export type EducationItem = {
  year: string;
  title: string;
  detail: string;
};

export const education: EducationItem[] = [
  {
    year: "2023",
    title: "MSc Fiction & Entertainment, SCI-Arc",
    detail: "Los Angeles, CA, USA",
  },
  {
    year: "2017",
    title: "BA Media Studies, Pomona College",
    detail: "Claremont, CA, USA",
  },
];

export const exhibitions: CvYearGroup[] = [
  {
    year: "2026",
    items: [
      { title: "FullDome Festival Jena, Zeiss Planetarium", detail: "Jena, Germany", work: "Flicker and Gambol" },
      { title: "Undersky, Caserne 26", detail: "Montreal, QC, Canada", work: "Undersky" },
      { title: "FlashDrive, InterAccess", detail: "Toronto, ON, Canada", work: "Entryway" },
      { title: "Montevideo Film Festival", detail: "Montevideo, Uruguay", work: "Flicker and Gambol" },
      { title: "SATFest, Petit SAT", detail: "Montreal, QC, Canada", work: "Flicker and Gambol" },
      { title: "Geary Art Crawl, Charles Street Video", detail: "Toronto, ON, Canada", work: "Birdworld" },
      { title: "Dome Under Film Festival", detail: "Melbourne, Australia", work: "Flicker and Gambol" },
    ],
  },
  {
    year: "2025",
    items: [
      { title: "Library Installation, École de technologie supérieure", detail: "Montreal, QC, Canada", work: "Tendre" },
      { title: "MAPP Festival", detail: "Montreal, QC, Canada", work: "Notes to Self" },
      { title: "Nuit Blanche", detail: "Toronto, ON, Canada", work: "MOVES" },
      { title: "Doors Open Toronto, InterAccess", detail: "Toronto, ON, Canada", work: "MOVES" },
      { title: "flashDrive, InterAccess", detail: "Toronto, ON, Canada", work: "softbody" },
      { title: "Open HDMI, Long Winter", detail: "Toronto, ON, Canada", work: "softbody" },
      { title: "Phantasia, It's OK Studios", detail: "Toronto, ON, Canada", work: "MOVES" },
      { title: "Mane Course, Ponyhaus", detail: "Toronto, ON, Canada", work: "horsing around" },
    ],
  },
  {
    year: "2024",
    items: [
      { title: "P2P, InterAccess", detail: "Toronto, ON, Canada", work: "MOVES" },
      { title: "In Bloom Gala, Toronto Arts Foundation", detail: "Toronto, ON, Canada", work: "Fly On The Wall" },
      { title: "Low Resolution GIF Screening, Postmasters 5.0 & TRANSFER", detail: "New York, NY, USA", work: "MOVES" },
      { title: "Signals, VIFF", detail: "Vancouver, BC, Canada", work: "I'm Tired of Being Hypersurveilled" },
      { title: "The Net Gala", detail: "New York, NY, USA", work: "I'm Tired of Being Hypersurveilled" },
      { title: "Catalyst LA, El Cid", detail: "Los Angeles, CA, USA", work: "NFTarot" },
      { title: "SXSW XR Experience, The Fairmont Hotel", detail: "Austin, TX, USA", work: "I'm Tired of Being Hypersurveilled" },
    ],
  },
  {
    year: "2023",
    items: [
      { title: "Gateway, NFT Now", detail: "Miami, FL, USA", work: "I'm Tired of Being Hypersurveilled" },
      { title: "The Edge of Surveillance, NeueHouse", detail: "Los Angeles, CA, USA", work: "I'm Tired of Being Hypersurveilled" },
      { title: "Fiction & Entertainment Showcase, SCI-Arc", detail: "Los Angeles, CA, USA", work: "I'm Tired of Being Hypersurveilled" },
      { title: "SuperChief Gallery, NFT Korea Festival", detail: "Seoul, South Korea", work: "Flow" },
    ],
  },
  {
    year: "2022",
    items: [
      { title: "Zoratopia", detail: "Miami, FL, USA", work: "MOVES" },
      { title: "Meta Masquerade, 50MM Collective", detail: "Los Angeles, CA, USA", work: "MOVES" },
      { title: "Loud Cinema, Smartbomb", detail: "Oakland, CA, USA", work: "Flower 4 U" },
      { title: "Evolution, Umba Daima", detail: "Atlanta, GA, USA", work: "Untitled Collaboration" },
    ],
  },
  {
    year: "2021",
    items: [
      { title: "Family Style, Medicine for Nightmares", detail: "San Francisco, CA, USA", work: "Untitled Paintings" },
      { title: "Meta Masquerade, 50MM Collective", detail: "Los Angeles, CA, USA", work: "MOVES" },
    ],
  },
  {
    year: "2020",
    items: [{ title: "Bandcamp Live, Gray Area", detail: "San Francisco, CA, USA", work: "Pastures" }],
  },
  {
    year: "2019",
    items: [{ title: "Artist Showcase, Gray Area", detail: "San Francisco, CA, USA", work: "MOVES" }],
  },
];

export const talks: CvYearGroup[] = [
  {
    year: "2026",
    items: [
      { title: "Synthetic Worlds, soft_launch, InterAccess", detail: "Toronto, Canada" },
      { title: "Reactive Space, soft_launch, InterAccess", detail: "Toronto, Canada" },
      { title: "Internet Canvas, soft_launch, InterAccess", detail: "Toronto, Canada" },
      { title: "Everything Under The Dome, PXR", detail: "VRChat, Online" },
      { title: "Artist Talk, ÉTS", detail: "Montreal, Canada" },
    ],
  },
  {
    year: "2025",
    items: [
      { title: "Performing XR Worlds, Sari-Sari Xchange", detail: "Toronto, Canada" },
      { title: "AI & Creativity, Toronto Public Library", detail: "Toronto, Canada" },
      { title: "My Computer and I Watch Each Other, Vector Festival", detail: "Toronto, Canada" },
      { title: "MOVES, DEMO 2025", detail: "New York, NY, USA" },
    ],
  },
  {
    year: "2024",
    items: [
      { title: "Co-Creative Code, InterAccess", detail: "Toronto, Canada" },
      { title: "Artist Talk & FaceMesh Micro Workshop, SITHUB", detail: "Toronto, Canada" },
      { title: "Artist Talk, Signals", detail: "Vancouver, Canada" },
      { title: "Artist Talk, Disney Imagineering", detail: "Los Angeles, CA, USA" },
      { title: "Generating the Moving Image Workshop, NeueHouse", detail: "Los Angeles, CA, USA" },
    ],
  },
  {
    year: "2023",
    items: [
      { title: "Generating the Image Workshop, NeueHouse", detail: "Los Angeles, CA, USA" },
      { title: "Edge of Surveillance Presentation & Panel, NeueHouse", detail: "Los Angeles, CA, USA" },
      { title: "Introduction to Video Generation with AI Workshop, SCI-Arc", detail: "Los Angeles, CA, USA" },
    ],
  },
];

export const awards: CvYearGroup[] = [
  {
    year: "2026",
    items: [
      { title: "Makerspace Residency, Charles Street Video", detail: "Toronto, ON, Canada" },
      { title: "Blue Creator Grant, The Centre for Ocean Literacy Collaboration", detail: "Canada" },
      { title: "Caserne 26 with MAPP", detail: "Montreal, QC, Canada" },
    ],
  },
  {
    year: "2025",
    items: [
      { title: "Projection Mapping Award, MULTIFest", detail: "Toronto, ON, Canada" },
      { title: "InterAccess", detail: "Toronto, Canada" },
    ],
  },
  {
    year: "2024",
    items: [
      { title: "Art & Code, NEW INC x Rhizome", detail: "New York, NY, USA" },
      { title: "Base Builders Hackathon Creative Awardee, Base x FWB", detail: "Idyllwild, CA, USA" },
      { title: "Art Farm Nebraska", detail: "Marquette, NE, USA" },
    ],
  },
  {
    year: "2022",
    items: [{ title: "Avaissance Residency, Art on Avax", detail: "Digital" }],
  },
  {
    year: "2021",
    items: [{ title: "FWB Fellowship, FWB", detail: "Digital" }],
  },
];

export type ProfessionalItem = {
  period: string;
  role: string;
  org: string;
  location: string;
};

export const professional: ProfessionalItem[] = [
  { period: "2019 – Present", role: "Motion Graphics & Projection Design", org: "Freelance", location: "Remote" },
  { period: "2021 – 2023", role: "Live Visuals Director, Zoratopia", org: "Zora", location: "Remote" },
  { period: "2019 – 2020", role: "Animation & Creative Coding Instructor", org: "David E. Glover Center", location: "Oakland, CA, USA" },
  { period: "2018 – 2019", role: "Director of Creative Operations", org: "Kapwing", location: "San Francisco, CA, USA" },
];

export const skills: string[] = [
  "Unreal Engine",
  "TouchDesigner",
  "Adobe Creative Suite",
  "GenAI tools",
  "Physical computing",
  "Projection mapping",
  "Real-time visuals",
  "Web development",
];
