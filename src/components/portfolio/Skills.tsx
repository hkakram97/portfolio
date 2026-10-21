import { useLanguage } from "@/i18n/context";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  const { t } = useLanguage();
  const s = t.skills;

  return (
    <section id="skills" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <SectionHeader eyebrow={s.eyebrow} title={s.title} highlight={s.highlight} description={s.description} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {s.groups.map((g, i) => (
            <Reveal key={g.label} delay={(i % 3) * 0.06} className={i === s.groups.length - 1 ? "md:col-span-2 lg:col-span-3" : ""}>
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="grid place-items-center h-9 w-9 rounded-lg bg-primary/10 text-primary">
                    <g.icon className="h-[18px] w-[18px]" />
                  </span>
                  <h3 className="font-semibold text-foreground">{g.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-sm text-secondary-foreground transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
