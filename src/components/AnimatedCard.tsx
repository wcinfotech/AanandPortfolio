import type { ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

interface AnimatedCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  delay?: number;
}

export default function AnimatedCard({
  children,
  delay = 0,
  className,
  ...props
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -4 }}
      className={`glass-panel rounded-3xl p-6 ${className ?? ""}`.trim()}
      {...props}
    >
      {children}
    </motion.div>
  );
}
