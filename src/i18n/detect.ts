import type { Lang } from "@/content";

export const LANG_STORAGE_KEY = "lang";

export const isLang = (v: unknown): v is Lang => v === "en" || v === "ar";

// Priority: ?lang= in the URL (shareable links), then the visitor's last choice, then their browser language.
export function detectLang(): Lang {
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (isLang(fromUrl)) return fromUrl;
  try {
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    if (isLang(stored)) return stored;
  } catch {
    // storage unavailable (private mode, blocked cookies)
  }
  return navigator.language?.toLowerCase().startsWith("ar") ? "ar" : "en";
}
