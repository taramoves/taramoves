import { ui, defaultLang, type Lang } from "./ui";

/** Detect the active language from a URL pathname (e.g. /fr/work -> "fr"). */
export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split("/");
  if (maybeLang in ui) return maybeLang as Lang;
  return defaultLang;
}

/** Returns a translate function for the given language. */
export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Build a localized path. English (default) lives at the root, French under /fr/.
 * localizePath("fr", "/work") -> "/fr/work"
 * localizePath("en", "/work") -> "/work"
 */
export function localizePath(lang: Lang, path: string): string {
  const clean = "/" + path.replace(/^\/+/, "");
  if (lang === defaultLang) return clean === "/" ? "/" : clean;
  return clean === "/" ? "/fr/" : `/fr${clean}`;
}

/** Given the current URL, return the equivalent path in the other language. */
export function getAlternatePath(url: URL, current: Lang): string {
  const target: Lang = current === "en" ? "fr" : "en";
  let path = url.pathname;
  if (current === "fr") {
    path = path.replace(/^\/fr/, "") || "/";
  }
  return localizePath(target, path);
}
