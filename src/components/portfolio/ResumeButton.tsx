import { FileDown } from "lucide-react";
import { links } from "@/content";
import { useLanguage } from "@/i18n/context";

interface ResumeButtonProps {
  /** "gradient": gradient border on the page background. "inverse": solid white, for use on the gradient banner. */
  variant?: "gradient" | "inverse";
  size?: "sm" | "lg";
  short?: boolean;
  className?: string;
}

const Shimmer = ({ tint }: { tint: string }) => (
  <span
    aria-hidden
    className={`pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent ${tint} to-transparent motion-safe:animate-shimmer`}
  />
);

export default function ResumeButton({ variant = "gradient", size = "lg", short, className = "" }: ResumeButtonProps) {
  const { t } = useLanguage();
  const label = short ? t.resume.ctaShort : t.resume.cta;
  const icon = size === "lg" ? "h-5 w-5" : "h-4 w-4";

  if (variant === "inverse") {
    return (
      <a
        href={links.resume}
        download={links.resumeFileName}
        className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-md bg-white font-semibold text-primary shadow-xl shadow-black/15 transition-all hover:-translate-y-0.5 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary ${
          size === "lg" ? "h-12 px-7 text-base" : "h-9 px-4 text-sm"
        } ${className}`}
      >
        <Shimmer tint="via-primary/15" />
        <FileDown className={`${icon} transition-transform group-hover:translate-y-0.5`} />
        {label}
      </a>
    );
  }

  return (
    <a
      href={links.resume}
      download={links.resumeFileName}
      className={`group relative inline-flex rounded-md bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] p-[2px] shadow-lg shadow-primary/20 transition-all duration-500 hover:bg-right hover:shadow-primary/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`}
    >
      <span
        className={`relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-[calc(var(--radius)-4px)] bg-background font-semibold text-foreground ${
          size === "lg" ? "h-10 px-6 text-base" : "h-8 px-3 text-sm"
        }`}
      >
        <Shimmer tint="via-primary/15" />
        <FileDown className={`${icon} text-primary transition-transform group-hover:translate-y-0.5`} />
        {label}
      </span>
    </a>
  );
}
