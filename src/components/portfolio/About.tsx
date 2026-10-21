import { useLanguage } from "@/i18n/context";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <SectionHeader eyebrow={a.eyebrow} title={a.title} highlight={a.highlight} />

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16">
          <Reveal className="space-y-5 text-lg text-muted-foreground leading-relaxed">
            {a.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="rounded-2xl border border-border bg-card divide-y divide-border">
              {a.facts.map((f) => (
                <li key={f.label} className="flex items-start gap-4 p-5">
                  <span className="grid place-items-center h-10 w-10 shrink-0 rounded-lg bg-primary/10 text-primary">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{f.label}</p>
                    <p className="font-medium text-foreground">{f.value}</p>
                  </div>
                </li>
              ))}
              <li className="p-5">
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">{a.speaksLabel}</p>
                <div className="flex flex-wrap gap-2">
                  {a.languages.map((l) => (
                    <span key={l} className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                      {l}
                    </span>
                  ))}
                </div>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
