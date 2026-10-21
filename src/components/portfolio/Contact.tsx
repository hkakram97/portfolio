import { useState } from "react";
import { Check, Copy, FileDown, Github, Linkedin, Mail } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { links } from "@/content";
import { useLanguage } from "@/i18n/context";
import Reveal from "./Reveal";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: links.linkedin },
  { icon: Github, label: "GitHub", href: links.github },
];

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
      toast.success(c.copiedToast);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error(c.copyFailed(links.email));
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 sm:px-12 sm:py-20 text-center">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/15 blur-[100px]" />
              <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] opacity-60" />
            </div>

            <div className="relative max-w-2xl mx-auto">
              <p className="text-xs font-mono font-medium tracking-[0.2em] uppercase text-primary mb-4">{c.eyebrow}</p>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-5">
                {c.titleStart} <span className="text-gradient">{c.titleHighlight}</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10">{c.body}</p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
                <Button size="lg" asChild className="px-7 text-base w-full sm:w-auto">
                  <a href={`mailto:${links.email}?subject=${encodeURIComponent(c.mailSubject)}`}>
                    <Mail className="me-2 h-4 w-4" />
                    <span dir="ltr">{links.email}</span>
                  </a>
                </Button>
                <Button size="lg" variant="outline" onClick={copyEmail} className="px-5 text-base w-full sm:w-auto">
                  {copied ? <Check className="me-2 h-4 w-4" /> : <Copy className="me-2 h-4 w-4" />}
                  {copied ? c.copied : c.copy}
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                  >
                    <s.icon className="h-4 w-4" />
                    {s.label}
                  </a>
                ))}
                <a
                  href={links.resume}
                  download={links.resumeFileName}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/15 transition-colors"
                >
                  <FileDown className="h-4 w-4" />
                  {t.resume.cta}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
