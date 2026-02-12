import { Mail, Linkedin, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const contactLinks = [
  { icon: Mail, label: "Email", href: "mailto:hkakram97@gmail.com", text: "hkakram97@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-hamza-akram-akram/", text: "linkedin.com/in/muhammad-hamza-akram-akram" },
  { icon: Github, label: "GitHub", href: "https://github.com/hkakram97", text: "github.com/hkakram97" },
];

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div ref={ref} className="container mx-auto px-6 max-w-2xl text-center">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Want to build something impactful? Let's connect.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {contactLinks.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all"
              >
                <c.icon className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">{c.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
