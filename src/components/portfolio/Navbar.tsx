import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/context";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import ResumeButton from "./ResumeButton";
import SmartLink from "./SmartLink";

type NavKey = "about" | "services" | "projects" | "experience" | "skills" | "contact";

// "projects" is its own page; the rest are sections of the home page.
const items: { key: NavKey; to?: string; hash?: string }[] = [
  { key: "about", hash: "#about" },
  { key: "services", hash: "#services" },
  { key: "projects", to: "/projects" },
  { key: "experience", hash: "#experience" },
  { key: "skills", hash: "#skills" },
  { key: "contact", hash: "#contact" },
];

// Home sections that light up a nav item while in view. The home "work" teaser counts as Projects.
const observed: Record<string, NavKey> = {
  about: "about",
  services: "services",
  work: "projects",
  experience: "experience",
  skills: "skills",
  contact: "contact",
};

export default function Navbar() {
  const { t } = useLanguage();
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [inView, setInView] = useState<NavKey | "">("");
  const active: NavKey | "" = pathname === "/projects" ? "projects" : onHome ? inView : "";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!onHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setInView(observed[e.target.id] ?? "");
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    Object.keys(observed).forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [onHome]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open || !onHome ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-3">
        <SmartLink hash="#top" className="flex items-center gap-2.5 font-bold tracking-tight text-foreground">
          <span className="grid place-items-center h-9 w-9 rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground text-sm font-black">
            HA
          </span>
          <span className="hidden sm:inline">{t.profile.name}</span>
        </SmartLink>

        <ul className="hidden lg:flex items-center gap-1">
          {items.map((item) => (
            <li key={item.key}>
              <SmartLink
                to={item.to}
                hash={item.hash}
                aria-current={active === item.key ? "page" : undefined}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  active === item.key ? "text-foreground bg-secondary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.nav[item.key]}
              </SmartLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <LanguageToggle />
          <ThemeToggle />
          <ResumeButton size="sm" short className="hidden xl:inline-flex ms-2" />
          <Button asChild size="sm" className="hidden sm:inline-flex ms-2">
            <SmartLink hash="#contact">{t.nav.cta}</SmartLink>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={t.nav.toggleMenu}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border">
          <ul className="container mx-auto px-6 flex flex-col py-4">
            {items.map((item) => (
              <li key={item.key}>
                <SmartLink
                  to={item.to}
                  hash={item.hash}
                  onClick={() => setOpen(false)}
                  className={`block py-3 text-base font-medium transition-colors ${
                    active === item.key ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t.nav[item.key]}
                </SmartLink>
              </li>
            ))}
            <li className="pt-3">
              <ResumeButton className="w-full" />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
