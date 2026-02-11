import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    name: "Shopping AI",
    type: "MVP | Chrome Extension + Web App",
    contributions: [
      "Developed a Chrome extension and web application",
      "Built single-checkout experience across multiple websites",
      "Improved user flow by removing repeated payment entry",
    ],
    outcome: "Reduced checkout friction and improved user convenience significantly.",
    tech: ["React", "Chrome Extension API", "Node.js"],
  },
  {
    name: "Educational Platform",
    type: "Web Platform | Education",
    contributions: [
      "Implemented full accessibility (a11y) across the platform",
      "Ensured inclusive, usable experience for all learners",
    ],
    outcome: "Platform became fully accessible and significantly more user-friendly.",
    tech: ["React", "WCAG", "Semantic HTML", "ARIA"],
  },
  {
    name: "B2B Security Platform",
    type: "B2B Product",
    contributions: [
      "Integrated Single Sign-On (SSO) feature",
      "Simplified login flow and improved UX",
    ],
    outcome: "Faster onboarding and smoother authentication for business customers.",
    tech: ["SSO", "OAuth", "React", "Node.js"],
  },
  {
    name: "B2C Subscription Platform",
    type: "B2C Product | Subscription + Billing",
    contributions: [
      "Integrated B2B product into existing B2C pricing model",
      "Worked with two billing accounts in Recurly",
      "Delivered on a PHP-based server — learned PHP quickly",
    ],
    outcome: "Successfully delivered complex billing integration and improved product monetization.",
    tech: ["PHP", "Recurly", "REST APIs", "React"],
  },
  {
    name: "Hospitality Management System",
    type: "Full System | Web + Mobile",
    contributions: [
      "Led a team of 6 engineers",
      "Built web and mobile applications in 6 weeks",
      "Delivered role-based workflows for staff and admins",
    ],
    outcome: "Delivered a full system under tight deadline — one of my biggest career achievements.",
    tech: ["React", "React Native", "Node.js", "PostgreSQL"],
  },
];

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 lg:py-32">
      <div ref={ref} className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Real-world products I've contributed to — from MVPs to enterprise systems.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.name}
              className={`rounded-xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 ${
                i === projects.length - 1 ? "lg:col-span-2 lg:max-w-[calc(50%-0.75rem)]" : ""
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : "0ms" }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold text-foreground">{p.name}</h3>
                <Badge variant="secondary" className="shrink-0 text-xs font-mono">{p.type}</Badge>
              </div>
              <ul className="space-y-1.5 mb-4">
                {p.contributions.map((c) => (
                  <li key={c} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
              <p className="text-sm font-medium text-foreground mb-4">
                <span className="text-primary">Outcome:</span> {p.outcome}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <Badge key={t} variant="outline" className="text-xs">{t}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
