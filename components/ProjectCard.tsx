import { ArrowUpRight } from "lucide-react";

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
      className="group flex h-full flex-col p-5 rounded-2xl border border-line bg-card backdrop-blur hover:border-line-strong hover:-translate-y-0.5 transition"
    >
      <h3 className="flex items-start justify-between gap-2 text-base font-medium text-foreground mb-2">
        {title}
        {link && (
          <ArrowUpRight
            size={16}
            className="shrink-0 mt-0.5 text-muted transition group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        )}
      </h3>
      <p className="text-sm text-muted mb-4 line-clamp-2">{description}</p>
      <div className="mt-auto flex flex-wrap gap-1.5">
        {stack.map((tech) => (
          <span key={tech} className="font-mono text-[11px] px-2 py-0.5 rounded-md border border-line text-muted">
            {tech}
          </span>
        ))}
      </div>
    </Wrapper>
  );
}
