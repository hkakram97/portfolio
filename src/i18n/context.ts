import { createContext, useContext } from "react";
import type { Content, Lang } from "@/content";

interface LanguageContextValue {
  lang: Lang;
  dir: "ltr" | "rtl";
  t: Content;
  setLang: (lang: Lang) => void;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}

/** Builds router targets that keep ?lang=ar, so links copied from the Arabic site stay Arabic. */
export function useLocalizedTo() {
  const { lang } = useLanguage();
  return (pathname: string, hash = "") => ({ pathname, search: lang === "ar" ? "?lang=ar" : "", hash });
}
