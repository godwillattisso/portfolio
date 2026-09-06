import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/60 dark:bg-[#0a0e14]/60 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 py-4 sm:py-6">
        <span className="font-bold text-base sm:text-lg text-gray-900 dark:text-white whitespace-nowrap">
          Godwill Attisso
        </span>
        <div className="flex items-center gap-3 sm:gap-5 text-sm sm:text-base text-gray-600 dark:text-gray-400">
          <a
            href="#experience"
            className="hover:text-gray-900 dark:hover:text-white transition"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="hover:text-gray-900 dark:hover:text-white transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-gray-900 dark:hover:text-white transition"
          >
            Contact
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
