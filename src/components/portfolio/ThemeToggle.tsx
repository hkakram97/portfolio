import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/context";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useLanguage();
  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={isDark ? t.nav.toLight : t.nav.toDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <Sun className="h-5 w-5 hidden dark:block" />
      <Moon className="h-5 w-5 dark:hidden" />
    </Button>
  );
}
