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
  redirects: {
    "/pitch": "/future",
    "/pitch/nritta-exe": "/future/nritta-exe",
    "/pitch/moves": "/future/moves",
    "/pitch/hopscotch": "/future/hopscotch",
    "/pitch/bird-watching": "/future/bird-watching",
    "/fr/pitch": "/fr/future",
    "/fr/pitch/nritta-exe": "/fr/future/nritta-exe",
    "/fr/pitch/moves": "/fr/future/moves",
    "/fr/pitch/hopscotch": "/fr/future/hopscotch",
    "/fr/pitch/bird-watching": "/fr/future/bird-watching",
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
      // Future pages are shareable but unlisted — keep them out of the sitemap.
      filter: (page) => !page.includes("/future/") && !page.endsWith("/future"),
    }),
  ],
});
