import { useLanguage } from "@/i18n/context";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Process() {
  const { t } = useLanguage();
  const p = t.process;

  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <SectionHeader eyebrow={p.eyebrow} title={p.title} highlight={p.highlight} description={p.description} />
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {p.steps.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 0.08} className="h-full">
                <div className="relative h-full rounded-2xl border border-border bg-card p-7 overflow-hidden">
                  <span className="absolute -top-3 -end-1 text-8xl font-black text-primary/[0.07] select-none" aria-hidden>
                    {i + 1}
                  </span>
                  <p className="text-xs font-mono text-primary mb-3">
                    {p.stepLabel} 0{i + 1}
                  </p>
                  <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
