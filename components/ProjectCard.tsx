type ProjectCardProps = {
  title: string;
  description: string;
  stack: string[];
  link?: string;
};

export default function ProjectCard({
  title,
  description,
  stack,
  link,
}: ProjectCardProps) {
  const Wrapper = link ? "a" : "div";

  return (
    <Wrapper
      href={link}
      target={link ? "_blank" : undefined}
      rel={link ? "noopener noreferrer" : undefined}
      className="block p-6 rounded-2xl border border-gray-800 hover:border-gray-600 transition"
    >
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      {link && (
        <p className="flex items-center gap-1 text-sm text-gray-300 mb-4">
          View on GitHub <span className="text-xs">↗</span>
        </p>
      )}
      <div className="flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </Wrapper>
  );
}
