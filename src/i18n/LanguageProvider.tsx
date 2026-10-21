import { useCallback, useLayoutEffect, useMemo, useState, type ReactNode } from "react";
import { content, type Lang } from "@/content";
import { setAnalyticsLanguage } from "@/lib/analytics";
import { LanguageContext } from "./context";
import { detectLang, LANG_STORAGE_KEY } from "./detect";

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang);
  const dir: "ltr" | "rtl" = lang === "ar" ? "rtl" : "ltr";
  const t = content[lang];

  useLayoutEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = dir;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description);
    setAnalyticsLanguage(lang);
  }, [lang, dir, t]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, next);
    } catch {
      // storage unavailable
    }
    const url = new URL(window.location.href);
    if (next === "en") url.searchParams.delete("lang");
    else url.searchParams.set("lang", next);
    window.history.replaceState(null, "", url);
  }, []);

  const value = useMemo(() => ({ lang, dir, t, setLang }), [lang, dir, t, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
