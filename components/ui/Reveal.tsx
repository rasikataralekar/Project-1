"use client";

import { motion, Variants } from "framer-motion";
import { fadeInUp } from "@/hooks/useRevealAnimation";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variants?: Variants;
}

export default function Reveal({
  children,
  className,
  delay = 0,
  variants = fadeInUp,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
