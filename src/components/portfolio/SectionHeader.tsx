import Reveal from "./Reveal";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeader({ eyebrow, title, highlight, description, center }: SectionHeaderProps) {
  return (
    <Reveal className={`mb-14 ${center ? "text-center mx-auto" : ""} max-w-2xl`}>
      <p className="text-xs font-mono font-medium tracking-[0.2em] uppercase text-primary mb-3">{eyebrow}</p>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {description && <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{description}</p>}
    </Reveal>
  );
}
