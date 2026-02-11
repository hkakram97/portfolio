import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const categories = [
  { label: "Frontend", skills: ["React.js", "JavaScript / TypeScript", "HTML5 / CSS3", "Responsive UI Development"] },
  { label: "Backend", skills: ["Node.js", "REST APIs", "Authentication / Authorization", "Server-side Integrations"] },
  { label: "Cloud & DevOps", skills: ["AWS Deployments", "Hosting & Build Pipelines"] },
  { label: "CMS", skills: ["WordPress", "Shopify", "Magento"] },
  { label: "Billing", skills: ["Recurly Integration", "Pricing Models"] },
  { label: "AI", skills: ["Agentic Workflows", "AI Avatars (Real-time)"] },
  { label: "Accessibility", skills: ["WCAG Best Practices", "Keyboard Navigation", "Inclusive UI Development"] },
];

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 lg:py-32 bg-secondary/30">
      <div ref={ref} className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Skills & <span className="text-primary">Tech Stack</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {categories.map((cat, i) => (
            <div
              key={cat.label}
              className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: isVisible ? `${i * 80}ms` : "0ms" }}
            >
              <h3 className="text-sm font-mono font-semibold text-primary uppercase tracking-widest mb-3">{cat.label}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
