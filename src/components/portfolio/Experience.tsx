import { CalendarDays } from "lucide-react";
import { useLanguage } from "@/i18n/context";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

// Small screens: one line on the start edge. lg+: centred line, cards alternate sides,
// and each date sits across the line from its card. Positions use start/end so RTL mirrors.
export default function Experience() {
  const { t } = useLanguage();
  const e = t.experience;

  return (
    <section id="experience" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <SectionHeader eyebrow={e.eyebrow} title={e.title} highlight={e.highlight} center />

        <ol className="relative max-w-5xl mx-auto">
          <span
            aria-hidden
            className="absolute top-2 bottom-2 start-[7px] lg:start-[calc(50%-1px)] w-0.5 rounded-full bg-gradient-to-b from-primary via-primary/40 to-border"
          />

          {e.roles.map((r, i) => {
            const onEnd = i % 2 === 1;
            const current = i === 0;

            return (
              <li key={r.period} className="relative ps-10 pb-10 last:pb-0 lg:ps-0 lg:pb-16 lg:grid lg:grid-cols-2 lg:gap-x-20">
                <span
                  aria-hidden
                  className={`absolute top-7 start-0 lg:start-[calc(50%-8px)] h-4 w-4 rounded-full border-[3px] border-background ${
                    current ? "bg-primary ring-4 ring-primary/25" : "bg-muted-foreground/50 ring-4 ring-secondary"
                  }`}
                >
                  {current && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-40" />}
                </span>

                <Reveal
                  from={onEnd ? "end" : "start"}
                  delay={0.05}
                  className={`lg:row-start-1 ${onEnd ? "lg:col-start-2" : "lg:col-start-1"}`}
                >
                  <div
                    className={`rounded-2xl border bg-card p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/40 ${
                      current ? "border-primary/30" : "border-border"
                    }`}
                  >
                    <p className="lg:hidden inline-flex items-center gap-1.5 text-xs font-mono text-primary mb-2">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {r.period}
                    </p>
                    <h3 className="text-xl font-bold text-foreground">{r.title}</h3>
                    <p className="text-muted-foreground mb-4">{r.company}</p>
                    <ul className="space-y-2">
                      {r.points.map((pt) => (
                        <li key={pt} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                <div
                  className={`hidden lg:flex lg:row-start-1 pt-5 ${
                    onEnd ? "lg:col-start-1 justify-end" : "lg:col-start-2 justify-start"
                  }`}
                >
                  <Reveal from={onEnd ? "start" : "end"} delay={0.15}>
                    <span
                      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-mono ${
                        current ? "border-primary/30 bg-primary/10 text-primary" : "border-border bg-card text-muted-foreground"
                      }`}
                    >
                      <CalendarDays className="h-4 w-4" />
                      {r.period}
                    </span>
                  </Reveal>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
