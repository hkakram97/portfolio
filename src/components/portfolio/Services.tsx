import {
  Code2, Layout, Server, ShieldCheck, CreditCard, Bot,
  User, Accessibility, Globe, Cloud, Wrench, Users
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  { icon: Code2, title: "Full-Stack Development", desc: "End-to-end web applications, scalable architecture, and production-ready delivery." },
  { icon: Layout, title: "Frontend Development (React)", desc: "Clean UI engineering, performance optimization, reusable components." },
  { icon: Server, title: "Backend Development", desc: "REST APIs, business logic, database integration, secure server development." },
  { icon: ShieldCheck, title: "Authentication & SSO", desc: "SSO integrations, secure login flows, session handling, access control." },
  { icon: CreditCard, title: "Subscription & Billing", desc: "Pricing models, checkout flows, billing system integrations, complex multi-account setups." },
  { icon: Bot, title: "Agentic AI Development", desc: "Building agentic workflows that automate tasks, integrate tools, and execute multi-step actions." },
  { icon: User, title: "AI Avatar Experiences", desc: "Interactive AI avatars with low latency, real-time responses, and multi-language support." },
  { icon: Accessibility, title: "A11y Expert (Accessibility)", desc: "WCAG best practices, keyboard navigation, semantic HTML, and inclusive UI design." },
  { icon: Globe, title: "CMS Development", desc: "WordPress, Shopify, Magento — custom builds, performance, themes, and integrations." },
  { icon: Cloud, title: "AWS Services", desc: "Deployments, hosting, environment setup, build pipelines, and cloud infrastructure." },
  { icon: Wrench, title: "Vibecode Fixer", desc: "Debugging broken codebases, resolving build issues, and stabilizing production apps." },
  { icon: Users, title: "Team Leadership & Delivery", desc: "Leading teams, sprint execution, ownership mindset, and delivering under deadlines." },
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/30">
      <div ref={ref} className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            What I <span className="text-primary">Do</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A broad range of engineering services, from frontend to cloud infrastructure.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group rounded-xl border border-border bg-card p-6 transition-all duration-500 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 60}ms` : "0ms" }}
            >
              <s.icon className="h-8 w-8 text-primary mb-4 transition-transform group-hover:scale-110" />
              <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
