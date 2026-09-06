type ExperienceItemProps = {
  role: string;
  org: string;
  dates: string;
  current?: boolean;
  logo?: string;
};

export default function ExperienceItem({
  role,
  org,
  dates,
  current,
  logo,
}: ExperienceItemProps) {
  return (
    <div className="flex items-center justify-between gap-6 py-6 border-b border-gray-200 dark:border-gray-800 last:border-0">
      <div className="flex items-center gap-4">
        <div className="w-19 h-21 rounded-full bg-white flex items-center justify-center overflow-hidden shrink-0 border border-gray-200 dark:border-transparent">
          {logo ? (
            <img
              src={logo}
              alt={org}
              className="w-full h-full object-contain "
            />
          ) : (
            <span className="text-black font-bold text-sm">
              {org.charAt(0)}
            </span>
          )}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            {role}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{org}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-500 whitespace-nowrap">
        {dates}
        {current && (
          <span className="flex items-center gap-1 text-green-600 dark:text-green-400 text-xs bg-green-600/10 dark:bg-green-400/10 px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-green-400" />
            Now
          </span>
        )}
      </div>
    </div>
  );
}
