// Fixed decorative layer behind the whole page: a faint grid that fades out
// toward the edges, plus two soft colour glows near the top.
export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--grid) 1px, transparent 1px), linear-gradient(to bottom, var(--grid) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
        }}
      />
      <div className="absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px] dark:bg-accent/15" />
      <div className="absolute top-40 -right-40 h-[360px] w-[360px] rounded-full bg-accent-2/15 blur-[120px] dark:bg-accent-2/10" />
    </div>
  );
}
