import { Search, PenTool, Hammer, Rocket } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  { icon: Search, title: "Understand", desc: "Requirements and business goals" },
  { icon: PenTool, title: "Design", desc: "Scalable solution and architecture" },
  { icon: Hammer, title: "Build", desc: "Integrate and test end-to-end" },
  { icon: Rocket, title: "Deploy", desc: "Monitor and iterate" },
];

export default function Process() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32">
      <div ref={ref} className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Work <span className="text-primary">Process</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className={`text-center transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: isVisible ? `${i * 120}ms` : "0ms" }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4">
                <s.icon className="h-7 w-7" />
              </div>
              <div className="text-xs font-mono text-primary mb-1">0{i + 1}</div>
              <h3 className="font-bold text-foreground mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
