import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const channels = [
  {
    label: "EMAIL",
    value: "attisso.godwill@gmail.com",
    href: "mailto:attisso.godwill@gmail.com",
    icon: <Mail size={20} />,
  },
  {
    label: "LINKEDIN",
    value: "Godwill Attisso",
    href: "https://linkedin.com/in/godwillattisso",
    icon: <LinkedinIcon size={20} />,
  },
  {
    label: "GITHUB",
    value: "godwillattisso",
    href: "https://github.com/godwillattisso",
    icon: <GithubIcon size={20} />,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-4 py-24 scroll-mt-24">
      <SectionHeading eyebrow="SAY HELLO" title="Get in Touch" center />
      <Reveal>
        <p className="text-center text-muted max-w-md mx-auto -mt-4 mb-10">
          Open to hardware, FPGA and embedded internship opportunities. The
          fastest way to reach me is email.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-3 p-4 rounded-2xl border border-line bg-card backdrop-blur hover:border-line-strong transition"
            >
              <span className="grid place-items-center w-10 h-10 rounded-xl border border-line text-muted group-hover:text-accent transition">
                {c.icon}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-mono text-[11px] tracking-wide text-muted">{c.label}</p>
                <p className="text-sm text-foreground truncate">{c.value}</p>
              </div>
              <ArrowUpRight size={16} className="text-muted group-hover:text-foreground transition" />
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
