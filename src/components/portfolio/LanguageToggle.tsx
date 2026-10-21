import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/context";

export default function LanguageToggle() {
  const { lang, setLang, t } = useLanguage();
  const other = lang === "en" ? "ar" : "en";

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLang(other)}
      aria-label={t.nav.otherLangAria}
      lang={other}
      className="gap-1.5 px-2.5"
    >
      <Languages className="h-4 w-4" />
      <span className="text-sm">{t.nav.otherLang}</span>
    </Button>
  );
}
