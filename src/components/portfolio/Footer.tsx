import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/i18n/context";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>{t.footer.rights(new Date().getFullYear(), t.profile.name)}</p>
        <a href="#top" className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
          {t.footer.backToTop} <ArrowUp className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
