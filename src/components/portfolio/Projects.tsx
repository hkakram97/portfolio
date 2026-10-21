import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/context";
import CaseStudyCard from "./CaseStudyCard";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import SmartLink from "./SmartLink";

const HOME_FEATURED = 4;

export default function Projects() {
  const { t } = useLanguage();
  const w = t.work;
  const total = w.caseStudies.length + w.archive.length;
  const teaser = w.archive.slice(0, 5);

  return (
    <section id="work" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <SectionHeader eyebrow={w.eyebrow} title={w.title} highlight={w.highlight} description={w.description} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {w.caseStudies.slice(0, HOME_FEATURED).map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.08}>
              <CaseStudyCard project={p} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <SmartLink
            to="/projects"
            className="group relative block overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] p-[2px] shadow-lg shadow-primary/10 transition-all duration-500 hover:bg-right hover:shadow-xl hover:shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <div className="relative flex flex-col gap-6 rounded-[calc(1rem-2px)] bg-card px-6 py-7 sm:px-8 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-5 sm:gap-6">
                <span className="shrink-0 text-5xl sm:text-6xl font-black tracking-tight text-gradient">{total}</span>
                <div>
                  <p className="text-lg sm:text-xl font-bold text-foreground">{w.viewAllTitle}</p>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed max-w-xl">{w.viewAllDesc(total)}</p>
                  <div className="mt-3 hidden sm:flex flex-wrap gap-1.5">
                    {teaser.map((a) => (
                      <span key={a.title} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground">
                        {a.title}
                      </span>
                    ))}
                    <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground">
                      +{total - HOME_FEATURED - teaser.length}
                    </span>
                  </div>
                </div>
              </div>
              <span className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-primary px-6 h-11 text-base font-semibold text-primary-foreground transition-colors group-hover:bg-primary/90">
                {w.viewAllCta}
                <ArrowRight className="h-4 w-4 transition-transform rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </span>
            </div>
          </SmartLink>
        </Reveal>
      </div>
    </section>
  );
}
