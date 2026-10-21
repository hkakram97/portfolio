import { Award, GraduationCap } from "lucide-react";
import { useLanguage } from "@/i18n/context";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Achievements() {
  const { t } = useLanguage();
  const h = t.highlights;

  return (
    <section id="achievements" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <SectionHeader eyebrow={h.eyebrow} title={h.title} highlight={h.highlight} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {h.achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <a.icon className="h-7 w-7 text-primary mb-4" />
                <p className="font-bold text-foreground">{a.title}</p>
                <p className="text-sm text-muted-foreground">{a.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-5">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-card p-7">
              <div className="flex items-center gap-3 mb-5">
                <Award className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">{h.certsTitle}</h3>
              </div>
              <ul className="divide-y divide-border">
                {h.certs.map((c) => (
                  <li key={c.name} className="flex items-baseline justify-between gap-4 py-3">
                    <span className="text-foreground">
                      <bdi>{c.name}</bdi> <span className="text-muted-foreground text-sm">· {c.issuer}</span>
                    </span>
                    <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">{c.year}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl border border-border bg-card p-7">
              <div className="flex items-center gap-3 mb-5">
                <GraduationCap className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">{h.educationTitle}</h3>
              </div>
              <p className="text-lg font-semibold text-foreground">{h.education.degree}</p>
              <p className="text-muted-foreground">{h.education.school}</p>
              <p className="text-xs font-mono text-muted-foreground mt-2">{h.education.period}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
