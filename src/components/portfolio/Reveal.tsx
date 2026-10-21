import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useLanguage } from "@/i18n/context";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Slide in from the inline start or end side instead of from below. */
  from?: "start" | "end";
}

export default function Reveal({ children, delay = 0, className, from }: RevealProps) {
  const { dir } = useLanguage();
  // "start" is the left edge in LTR and the right edge in RTL.
  const startSign = dir === "rtl" ? 1 : -1;
  const x = from === "start" ? 32 * startSign : from === "end" ? -32 * startSign : 0;

  return (
    <motion.div
      initial={{ opacity: 0, x, y: from ? 0 : 24 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
