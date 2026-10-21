import { useLanguage } from "@/i18n/context";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Services() {
  const { t } = useLanguage();
  const s = t.services;

  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <SectionHeader eyebrow={s.eyebrow} title={s.title} highlight={s.highlight} description={s.description} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {s.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
                <span className="grid place-items-center h-12 w-12 rounded-xl bg-primary/10 text-primary mb-5 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
