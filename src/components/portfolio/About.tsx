import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 lg:py-32">
      <div
        ref={ref}
        className={`container mx-auto px-6 max-w-3xl transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
          <p>
            I'm a Senior Software Engineer and Full-Stack Developer with strong experience building production-grade web applications and integrating complex business systems. I work across frontend and backend, delivering features end-to-end — from UI and APIs to authentication, billing, and deployments.
          </p>
          <p>
            I also build AI-powered interfaces such as agentic workflows and interactive avatars, and I have experience working with CMS platforms and cloud services. I enjoy solving challenging problems, learning new technologies quickly, and taking ownership of critical deliverables under tight deadlines.
          </p>
        </div>
      </div>
    </section>
  );
}
