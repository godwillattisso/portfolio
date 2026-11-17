"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

// Each line fades up a little after the previous one.
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export default function Hero() {
  const [showResumePopup, setShowResumePopup] = useState(false);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[92vh] text-center px-4 pt-28 pb-16">
      <motion.div
        {...fadeUp(0)}
        className="inline-flex items-center gap-2 rounded-full border border-line bg-card backdrop-blur px-3 py-1 text-xs text-muted mb-8"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        Electronic Systems Engineering · University of Regina
      </motion.div>

      <motion.h1
        {...fadeUp(0.1)}
        className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tighter text-foreground mb-6"
      >
        Hi, I&apos;m <span className="text-gradient">Godwill</span>
      </motion.h1>

      <motion.p {...fadeUp(0.2)} className="max-w-xl text-muted text-lg leading-relaxed mb-10">
        I design and verify digital hardware: RTL, FPGAs, embedded systems and
        the low-level code that runs on them.
      </motion.p>

      <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center justify-center gap-3 mb-10">
        <a
          href="#projects"
          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-85 transition"
        >
          View my work
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
        </a>
        <button
          onClick={() => setShowResumePopup(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-line-strong bg-card backdrop-blur text-sm text-foreground hover:bg-foreground/5 transition"
        >
          <FileText size={16} /> Resume
        </button>
      </motion.div>

      <motion.div {...fadeUp(0.4)} className="flex items-center gap-2 text-muted">
        <a
          href="https://linkedin.com/in/godwillattisso"
          target="_blank"
          rel="noopener noreferrer"
          className="grid place-items-center w-9 h-9 rounded-full hover:text-foreground hover:bg-foreground/5 transition"
          aria-label="LinkedIn"
        >
          <LinkedinIcon />
        </a>
        <a
          href="https://github.com/godwillattisso"
          target="_blank"
          rel="noopener noreferrer"
          className="grid place-items-center w-9 h-9 rounded-full hover:text-foreground hover:bg-foreground/5 transition"
          aria-label="GitHub"
        >
          <GithubIcon />
        </a>
      </motion.div>

      <AnimatePresence>
        {showResumePopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[100] px-4"
            onClick={() => setShowResumePopup(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-background border border-line rounded-2xl p-8 max-w-sm text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">Want my resume?</h3>
              <p className="text-muted mb-6">
                Reach out to me at{" "}
                <a
                  href="mailto:attisso.godwill@gmail.com"
                  className="text-foreground underline underline-offset-2"
                >
                  attisso.godwill@gmail.com
                </a>{" "}
                and I&apos;ll send it over.
              </p>
              <button
                onClick={() => setShowResumePopup(false)}
                className="px-5 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-85 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
