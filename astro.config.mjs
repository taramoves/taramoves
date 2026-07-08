import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Update this to your real domain once you deploy (used for SEO, sitemap, canonical URLs).
export const SITE_URL = "https://taramoves.com";

export default defineConfig({
  site: SITE_URL,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          fr: "fr",
        },
      },
    }),
  ],
});
