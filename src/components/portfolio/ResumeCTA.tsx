import { Download, Mail } from "lucide-react";
import { links } from "@/content";
import { useLanguage } from "@/i18n/context";
import Reveal from "./Reveal";
import ResumeButton from "./ResumeButton";

function ResumeMock() {
  return (
    <div dir="ltr" className="relative mx-auto w-56 sm:w-64" aria-hidden>
      <div className="absolute inset-0 translate-x-4 translate-y-3 rotate-6 rounded-xl bg-white/25" />
      <div className="relative -rotate-3 rounded-xl bg-white p-5 shadow-2xl shadow-black/25 transition-transform duration-500 group-hover/banner:rotate-0">
        <p className="text-center text-sm font-black tracking-wide text-slate-800">M HAMZA AKRAM</p>
        <p className="mt-0.5 text-center text-[8px] font-semibold text-blue-600">Senior Full-Stack Software Engineer</p>
        <div className="mx-auto mt-1.5 h-1 w-3/4 rounded bg-slate-200" />
        {["w-1/2", "w-2/5", "w-1/2"].map((heading, i) => (
          <div key={i} className="mt-4">
            <div className={`h-1.5 ${heading} rounded bg-slate-700`} />
            <div className="mt-1 h-px w-full bg-slate-300" />
            <div className="mt-1.5 space-y-1">
              <div className="h-1 w-full rounded bg-slate-200" />
              <div className="h-1 w-11/12 rounded bg-slate-200" />
              <div className="h-1 w-4/5 rounded bg-slate-200" />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute -bottom-4 -right-4 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-accent to-primary text-white shadow-xl ring-4 ring-white/30 motion-safe:animate-float">
        <Download className="h-6 w-6" />
      </div>
    </div>
  );
}

export default function ResumeCTA() {
  const { t } = useLanguage();
  const r = t.resume;

  return (
    <section id="resume" className="py-16 lg:py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="group/banner relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-accent px-6 py-12 sm:px-12 lg:py-14 text-white shadow-2xl shadow-primary/25">
            <div className="pointer-events-none absolute inset-0" aria-hidden>
              <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />
              <div className="absolute -top-24 -end-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
              <div className="absolute -bottom-32 -start-16 h-72 w-72 rounded-full bg-accent/50 blur-3xl" />
            </div>

            <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
              <div className="max-w-xl">
                <span className="inline-flex items-center rounded-full bg-white/15 px-3.5 py-1 text-xs font-medium backdrop-blur ring-1 ring-white/25">
                  {r.eyebrow}
                </span>
                <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">{r.title}</h2>
                <p className="mt-4 text-lg text-white/85 leading-relaxed">{r.desc}</p>

                <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                  <ResumeButton variant="inverse" className="w-full sm:w-auto" />
                  <a
                    href={`mailto:${links.email}`}
                    className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white/85 underline-offset-4 hover:text-white hover:underline"
                  >
                    <Mail className="h-4 w-4" />
                    {r.orEmail}
                  </a>
                </div>
                <p className="mt-4 text-xs font-mono text-white/65">{r.meta}</p>
              </div>

              <div className="hidden sm:block">
                <ResumeMock />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
