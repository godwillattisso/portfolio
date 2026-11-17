import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

// Floating glass "pill" navbar that stays at the top while scrolling.
export default function Navbar() {
  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4">
      <nav className="mx-auto max-w-3xl flex items-center justify-between gap-2 rounded-full border border-line bg-background/70 backdrop-blur-xl px-3 sm:px-4 py-2 shadow-sm shadow-black/5">
        <a href="#" className="flex items-center gap-2 font-semibold text-foreground whitespace-nowrap">
          <span className="grid place-items-center w-7 h-7 rounded-full bg-foreground text-background text-[11px] font-bold">
            GA
          </span>
          <span className="hidden sm:inline text-sm">Godwill Attisso</span>
        </a>
        <div className="flex items-center gap-1 text-sm text-muted">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-2.5 sm:px-3 py-1.5 rounded-full hover:text-foreground hover:bg-foreground/5 transition"
            >
              {l.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
