"use client";

import { motion } from "framer-motion";

type Props = { eyebrow: string; title: string; center?: boolean };

// Same heading style for every section: a small mono label, then the title.
export default function SectionHeading({ eyebrow, title, center }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`mb-10 ${center ? "text-center" : ""}`}
    >
      <p className="font-mono text-xs tracking-widest text-accent mb-3">
        {"// "}
        {eyebrow}
      </p>
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
    </motion.div>
  );
}
