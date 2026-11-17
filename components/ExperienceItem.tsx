import Reveal from "@/components/Reveal";

type ExperienceItemProps = {
  role: string;
  org: string;
  dates: string;
  current?: boolean;
  logo?: string;
};

export default function ExperienceItem({ role, org, dates, current, logo }: ExperienceItemProps) {
  return (
    <Reveal>
      <div className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl border border-line bg-card backdrop-blur hover:border-line-strong transition">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center overflow-hidden shrink-0 border border-line p-1">
            {logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={logo} alt={org} className="w-full h-full object-contain" />
            ) : (
              <span className="text-black font-bold text-sm">{org.charAt(0)}</span>
            )}
          </div>
          <div>
            <h3 className="font-medium text-foreground">{role}</h3>
            <p className="text-muted text-sm">{org}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-muted whitespace-nowrap sm:pl-4">
          {dates}
          {current && (
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              Now
            </span>
          )}
        </div>
      </div>
    </Reveal>
  );
}
