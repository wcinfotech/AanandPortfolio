import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  yOffset = 28,
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
