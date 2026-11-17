export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted">
        <p>© {new Date().getFullYear()} Godwill Attisso</p>
        <p className="font-mono">Built with Next.js · Deployed on Vercel</p>
      </div>
    </footer>
  );
}
