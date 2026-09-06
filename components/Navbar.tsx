import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-8 md:px-16 py-6 bg-transparent z-50">
      <span className="font-bold text-lg text-gray-900 dark:text-white">
        Godwill Attisso
      </span>
      <div className="flex items-center gap-8 text-sm text-gray-600 dark:text-gray-400">
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
          href="#about"
          className="hover:text-gray-900 dark:hover:text-white transition"
        >
          About
        </a>
        <a
          href="#contact"
          className="hover:text-gray-900 dark:hover:text-white transition"
        >
          Contact
        </a>
        <ThemeToggle />
      </div>
    </nav>
  );
}
