import { Badge } from "@/components/ui/badge";
import type { CaseStudy } from "@/content";

export default function CaseStudyCard({ project: p }: { project: CaseStudy }) {
  return (
    <article className="group h-full flex flex-col rounded-2xl border border-border bg-card p-7 sm:p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-muted-foreground mb-4">
        <span>{p.client}</span>
        <Badge variant="secondary" className="ms-auto font-mono text-[11px]">{p.role}</Badge>
      </div>

      <h3 className="text-2xl font-bold tracking-tight text-foreground mb-3">{p.title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-6">{p.summary}</p>

      <div className="rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/15 px-5 py-4 mb-6">
        <p className="text-2xl font-black tracking-tight text-gradient">{p.metric.value}</p>
        <p className="text-sm text-muted-foreground">{p.metric.label}</p>
      </div>

      <ul className="space-y-2.5 mb-6">
        {p.highlights.map((h) => (
          <li key={h} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <Badge key={s} variant="outline" className="text-xs font-normal">{s}</Badge>
        ))}
      </div>
    </article>
  );
}
