import { Mail } from "lucide-react";

function LinkedinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gray-500 dark:text-gray-400"
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
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gray-500 dark:text-gray-400"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="max-w-2xl mx-auto px-4 py-24 text-center">
      <p className="text-sm tracking-widest text-gray-500 mb-2">SAY HELLO</p>
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
        Get in Touch
      </h2>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="attisso.godwill@gmail.com"
          className="flex items-center gap-3 px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition"
        >
          <Mail className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          <div className="text-left">
            <p className="text-xs tracking-wide text-gray-500">EMAIL</p>
            <p className="text-sm text-gray-900 dark:text-white">
              attisso.godwill@gmail.com
            </p>
          </div>
        </a>

        <a
          href="https://linkedin.com/in/godwillattisso"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition"
        >
          <LinkedinIcon />
          <div className="text-left">
            <p className="text-xs tracking-wide text-gray-500">LINKEDIN</p>
            <p className="text-sm text-gray-900 dark:text-white">
              Godwill Attisso
            </p>
          </div>
        </a>

        <a
          href="https://github.com/godwillattisso"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition"
        >
          <GithubIcon />
          <div className="text-left">
            <p className="text-xs tracking-wide text-gray-500">GITHUB</p>
            <p className="text-sm text-gray-900 dark:text-white">
              godwillattisso
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
