import type { Lang } from "@/i18n/ui";

export type Product = {
  title: string;
  // "edition" text e.g. "Limited edition of 25" / "Édition limitée de 25".
  // For one-of-a-kind originals, leave blank and set original: true.
  edition?: string;
  original?: boolean;
  // Medium + dimensions, e.g. "Archival giclée print · 18 × 24 in".
  details?: string;
  price?: string; // e.g. "$250 CAD". Leave blank if status is "inquire".
  status: "available" | "sold" | "inquire";
  image?: string; // "/images/shop/<file>.jpg"
  imageAlt?: string;
  // Checkout link for self-fulfilled sales — paste a Stripe Payment Link here.
  // See CONTENT-GUIDE.md → Shop. Leave "" for now.
  checkoutUrl?: string;
};

// PLACEHOLDERS — replace with your real prints + originals.
export const shop: Record<Lang, Product[]> = {
  en: [
    {
      title: "Print title one",
      edition: "Limited edition of 25",
      details: "Archival giclée print · 18 × 24 in · signed & numbered",
      price: "$250 CAD",
      status: "available",
      image: "",
      imageAlt: "",
      checkoutUrl: "",
    },
    {
      title: "Print title two",
      edition: "Limited edition of 10",
      details: "Archival giclée print · 24 × 36 in · signed & numbered",
      price: "$420 CAD",
      status: "available",
      image: "",
      imageAlt: "",
      checkoutUrl: "",
    },
    {
      title: "Original piece title",
      original: true,
      details: "Mixed media on panel · 16 × 20 in · one of a kind",
      price: "$1,800 CAD",
      status: "inquire",
      image: "",
      imageAlt: "",
      checkoutUrl: "",
    },
  ],
  fr: [
    {
      title: "Titre du tirage un",
      edition: "Édition limitée de 25",
      details: "Tirage giclée d'archive · 18 × 24 po · signé et numéroté",
      price: "250 $ CAD",
      status: "available",
      image: "",
      imageAlt: "",
      checkoutUrl: "",
    },
    {
      title: "Titre du tirage deux",
      edition: "Édition limitée de 10",
      details: "Tirage giclée d'archive · 24 × 36 po · signé et numéroté",
      price: "420 $ CAD",
      status: "available",
      image: "",
      imageAlt: "",
      checkoutUrl: "",
    },
    {
      title: "Titre de la pièce originale",
      original: true,
      details: "Techniques mixtes sur panneau · 16 × 20 po · pièce unique",
      price: "1 800 $ CAD",
      status: "inquire",
      image: "",
      imageAlt: "",
      checkoutUrl: "",
    },
  ],
};
