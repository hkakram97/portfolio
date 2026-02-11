import { CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const highlights = [
  "Led a 6-person team and delivered a complete system in 6 weeks",
  "Successfully shipped complex billing integrations with multi-account constraints",
  "Delivered accessibility improvements for a large education platform",
  "Quickly learned PHP to deliver production features on a legacy backend",
  "Strong ability to debug, stabilize, and fix production issues fast",
];

export default function Leadership() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div ref={ref} className="container mx-auto px-6 max-w-3xl">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-10">
            Leadership & Key <span className="text-primary">Achievements</span>
          </h2>
          <ul className="space-y-4">
            {highlights.map((h, i) => (
              <li
                key={i}
                className={`flex items-start gap-3 transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                style={{ transitionDelay: isVisible ? `${i * 100}ms` : "0ms" }}
              >
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
