"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function LinkedinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

export default function Hero() {
  const [showResumePopup, setShowResumePopup] = useState(false);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-4 pt-20">
      <p className="text-sm tracking-widest text-gray-500 mb-4 uppercase">
        Electronics Systems Engineer
      </p>
      <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
        Hi, I&apos;m Godwill
      </h1>
      <p className="max-w-xl text-gray-600 dark:text-gray-400 text-lg mb-10">
        Electronic Systems Engineering student at the University of Regina with
        a passion for low-level systems, FPGAs, and custom hardware design.
      </p>
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => setShowResumePopup(true)}
          className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:border-gray-400 dark:hover:border-gray-500 transition"
        >
          Resume
        </button>
        <a
          href="#contact"
          className="px-6 py-3 rounded-full bg-gray-900 text-white dark:bg-white dark:text-black font-medium hover:bg-gray-700 dark:hover:bg-gray-200 transition"
        >
          Contact
        </a>
      </div>
      <div className="flex items-center gap-5 text-gray-500">
        <a
          href="https://linkedin.com/in/godwillattisso"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900 dark:hover:text-white transition"
          aria-label="LinkedIn"
        >
          <LinkedinIcon />
        </a>
        <a
          href="https://github.com/godwillattisso"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900 dark:hover:text-white transition"
          aria-label="GitHub"
        >
          <GithubIcon />
        </a>
      </div>

      <AnimatePresence>
        {showResumePopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-[100] px-4"
            onClick={() => setShowResumePopup(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 max-w-sm text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Want my resume?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Reach out to me at{" "}
                <a
                  href="mailto:attisso.godwill@gmail.com"
                  className="text-gray-900 dark:text-white underline underline-offset-2"
                >
                  attisso.godwill@gmail.com
                </a>{" "}
                and I&apos;ll send it over.
              </p>
              <button
                onClick={() => setShowResumePopup(false)}
                className="px-5 py-2 rounded-full bg-gray-900 text-white dark:bg-white dark:text-black text-sm font-medium hover:bg-gray-700 dark:hover:bg-gray-200 transition"
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
