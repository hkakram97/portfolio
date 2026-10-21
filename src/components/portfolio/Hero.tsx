import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { links } from "@/content";
import { useLanguage } from "@/i18n/context";
import ResumeButton from "./ResumeButton";

const codeLines: [string, string][] = [
  ["role", '"Senior Full-Stack Engineer"'],
  ["basedIn", '"Karachi · UTC+5"'],
  ["shipsWith", '["React", "Next.js", "Node.js", "Django"]'],
  ["lately", '"AI voice agents & automation"'],
  ["openTo", '["freelance", "full-time"]'],
];

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
        <div className="absolute -top-40 -end-40 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[120px]" />
        <div className="absolute top-40 -start-40 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="min-w-0"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur px-3.5 py-1.5 text-xs font-medium text-muted-foreground mb-7">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {t.hero.badge}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-6">
              {t.hero.titleStart} <span className="text-gradient">{t.hero.titleHighlight}</span>
            </h1>

            <p className="max-w-xl text-lg text-muted-foreground leading-relaxed mb-8">{t.hero.intro}</p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-8">
              <Button size="lg" asChild className="px-7 text-base group">
                <a href="#work">
                  {t.hero.ctaWork}
                  <ArrowRight className="ms-2 h-4 w-4 transition-transform rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </a>
              </Button>
              <ResumeButton className="w-full sm:w-auto" />
              <Button size="lg" variant="ghost" asChild className="px-6 text-base">
                <a href="#contact">{t.hero.ctaContact}</a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4" /> {t.profile.location}
              </span>
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href={`mailto:${links.email}`} className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
                <Mail className="h-4 w-4" /> {t.hero.email}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative min-w-0"
            dir="ltr"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
            <div className="relative rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                <span className="ml-3 text-xs font-mono text-muted-foreground">hamza.ts</span>
              </div>
              <pre className="p-5 sm:p-6 text-[13px] sm:text-sm font-mono leading-7 overflow-x-auto">
                <code>
                  <span className="text-accent">const</span> <span className="text-foreground">hamza</span>{" "}
                  <span className="text-muted-foreground">=</span> {"{"}
                  {"\n"}
                  {codeLines.map(([key, val]) => (
                    <span key={key}>
                      {"  "}
                      <span className="text-primary">{key}</span>
                      <span className="text-muted-foreground">: </span>
                      <span className="text-emerald-600 dark:text-emerald-400">{val}</span>
                      <span className="text-muted-foreground">,</span>
                      {"\n"}
                    </span>
                  ))}
                  {"};"}
                  {"\n\n"}
                  <span className="text-muted-foreground">// happy to work across time zones</span>
                </code>
              </pre>
            </div>
          </motion.div>
        </div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 rounded-2xl border border-border bg-card/70 backdrop-blur overflow-hidden"
        >
          {t.stats.map((s, i) => (
            <div
              key={s.label}
              className={`p-6 sm:p-8 border-border ${i % 2 === 1 ? "border-s" : ""} ${
                i >= 2 ? "border-t lg:border-t-0" : ""
              } ${i === 2 ? "lg:border-s" : ""}`}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-3xl sm:text-4xl font-black tracking-tight text-gradient">{s.value}</dd>
              <dd className="mt-2 text-sm text-muted-foreground leading-snug">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
