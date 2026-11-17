type ProjectCardProps = {
  title: string;
  description: string;
  stack: string[];
  link?: string;
};

export default function ProjectCard({ title, description, stack, link }: ProjectCardProps) {
  const Wrapper = link ? "a" : "div";

  return (
    <Wrapper
      href={link}
      target={link ? "_blank" : undefined}
      rel={link ? "noopener noreferrer" : undefined}
      className="block p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition"
    >
      <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
        {title}
        {link && <span className="ml-1 text-xs text-gray-500">↗</span>}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">{description}</p>
      <div className="flex flex-wrap gap-1.5">
        {stack.map((tech) => (
          <span
            key={tech}
            className="text-[11px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </Wrapper>
  );
}