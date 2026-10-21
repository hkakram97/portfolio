import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, FolderKanban, MessageSquare } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";
import CaseStudyCard from "@/components/portfolio/CaseStudyCard";
import ResumeButton from "@/components/portfolio/ResumeButton";
import SmartLink from "@/components/portfolio/SmartLink";
import { projectTags, type ProjectTag } from "@/content";
import { useLanguage } from "@/i18n/context";

type Filter = ProjectTag | "all";

export default function ProjectsPage() {
  const { t } = useLanguage();
  const p = t.projectsPage;
  const { caseStudies, archive } = t.work;
  const [filter, setFilter] = useState<Filter>("all");

  useEffect(() => {
    document.title = p.metaTitle;
    return () => {
      document.title = t.meta.title;
    };
  }, [p.metaTitle, t.meta.title]);

  const matches = (tags: ProjectTag[]) => filter === "all" || tags.includes(filter);
  const featured = caseStudies.filter((c) => matches(c.tags));
  const rest = archive.filter((a) => matches(a.tags));
  const total = caseStudies.length + archive.length;

  const countFor = useMemo(() => {
    const all = [...caseStudies, ...archive];
    return (f: Filter) => (f === "all" ? all.length : all.filter((x) => x.tags.includes(f)).length);
  }, [caseStudies, archive]);

  const filters: Filter[] = ["all", ...projectTags];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Header */}
        <section id="top" className="relative overflow-hidden pt-32 pb-14 lg:pt-40 lg:pb-16">
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
            <div className="absolute -top-40 -end-40 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[120px]" />
            <div className="absolute top-20 -start-40 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px]" />
          </div>
          <div className="container mx-auto px-6 relative">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <SmartLink
                to="/"
                className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4 transition-transform rtl:rotate-180 group-hover:-translate-x-1 rtl:group-hover:translate-x-1" />
                {p.back}
              </SmartLink>
              <p className="text-xs font-mono font-medium tracking-[0.2em] uppercase text-primary mb-3">{p.eyebrow}</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] max-w-3xl">
                {p.title} <span className="text-gradient">{p.highlight}</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">{p.description}</p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur px-4 py-1.5 font-medium text-foreground">
                  <FolderKanban className="h-4 w-4 text-primary" />
                  {p.count(total)}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <div className="sticky top-[61px] z-40 border-y border-border bg-background/85 backdrop-blur-xl">
          <div className="container mx-auto px-6">
            <div role="group" aria-label={p.filtersLabel} className="flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {filters.map((f) => {
                const active = filter === f;
                return (
                  <button
                    key={f}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setFilter(f)}
                    className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                      active
                        ? "border-transparent bg-gradient-to-r from-primary to-accent text-white shadow-md shadow-primary/25"
                        : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                    }`}
                  >
                    {f === "all" ? p.all : p.tags[f]}
                    <span
                      className={`rounded-full px-1.5 text-xs font-mono ${active ? "bg-white/20" : "bg-secondary text-secondary-foreground"}`}
                    >
                      {countFor(f)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {/* Case studies */}
            {featured.length > 0 && (
              <section className="py-16 lg:py-20">
                <div className="container mx-auto px-6">
                  <div className="mb-10">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{p.featuredTitle}</h2>
                    <p className="mt-2 text-muted-foreground">{p.featuredDesc}</p>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {featured.map((c) => (
                      <CaseStudyCard key={c.title} project={c} />
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Full list: everything that isn't a case study above */}
            {rest.length > 0 && (
              <section className="py-16 lg:py-20 bg-secondary/30">
                <div className="container mx-auto px-6">
                  <div className="mb-10">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{p.archiveTitle}</h2>
                    <p className="mt-2 text-muted-foreground">{p.archiveDesc}</p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {rest.map((a) => (
                      <article
                        key={a.title}
                        className="group flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                      >
                        <div className="mb-3 flex flex-wrap gap-1.5">
                          {a.tags.map((tag) => (
                            <span key={tag} className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary">
                              {p.tags[tag]}
                            </span>
                          ))}
                        </div>
                        <h3 className="font-semibold text-foreground">{a.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{a.what}</p>
                        <p className="mt-auto pt-3 text-xs font-mono text-muted-foreground">{a.stack}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {featured.length === 0 && rest.length === 0 && (
              <p className="container mx-auto px-6 py-24 text-center text-muted-foreground">{p.empty}</p>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Closing CTA */}
        <section className="py-20 lg:py-24">
          <div className="container mx-auto px-6">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 sm:px-12 text-center">
              <div className="absolute inset-0 pointer-events-none" aria-hidden>
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/15 blur-[100px]" />
              </div>
              <div className="relative max-w-2xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight">{p.ctaTitle}</h2>
                <p className="mt-4 text-lg text-muted-foreground">{p.ctaDesc}</p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <SmartLink
                    hash="#contact"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-primary px-7 h-11 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    <MessageSquare className="h-4 w-4" />
                    {p.ctaContact}
                  </SmartLink>
                  <ResumeButton className="w-full sm:w-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
