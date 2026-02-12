import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Atom, FileCode, Code2, MonitorSmartphone,
  Server, Plug, ShieldCheck, Workflow,
  Cloud, Container,
  Globe, ShoppingCart, Store,
  CreditCard, Receipt,
  Bot, Video,
  Accessibility, Keyboard, Heart,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Skill {
  name: string;
  icon: LucideIcon;
}

const categories: { label: string; skills: Skill[] }[] = [
  { label: "Frontend", skills: [
    { name: "React.js", icon: Atom },
    { name: "JavaScript / TypeScript", icon: FileCode },
    { name: "HTML5 / CSS3", icon: Code2 },
    { name: "Responsive UI", icon: MonitorSmartphone },
  ]},
  { label: "Backend", skills: [
    { name: "Node.js", icon: Server },
    { name: "REST APIs", icon: Plug },
    { name: "Auth / Authorization", icon: ShieldCheck },
    { name: "Server Integrations", icon: Workflow },
  ]},
  { label: "Cloud & DevOps", skills: [
    { name: "AWS Deployments", icon: Cloud },
    { name: "Build Pipelines", icon: Container },
  ]},
  { label: "CMS", skills: [
    { name: "WordPress", icon: Globe },
    { name: "Shopify", icon: ShoppingCart },
    { name: "Magento", icon: Store },
  ]},
  { label: "Billing", skills: [
    { name: "Recurly Integration", icon: CreditCard },
    { name: "Pricing Models", icon: Receipt },
  ]},
  { label: "AI", skills: [
    { name: "Agentic Workflows", icon: Bot },
    { name: "AI Avatars (Real-time)", icon: Video },
  ]},
  { label: "Accessibility", skills: [
    { name: "WCAG Best Practices", icon: Accessibility },
    { name: "Keyboard Navigation", icon: Keyboard },
    { name: "Inclusive UI", icon: Heart },
  ]},
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
                  <Badge key={s.name} variant="secondary" className="text-xs gap-1.5 py-1 px-2.5">
                    <s.icon className="w-3.5 h-3.5" />
                    {s.name}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
