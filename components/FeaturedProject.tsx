import { ArrowUpRight, CircleCheck, Cpu } from "lucide-react";
import Reveal from "@/components/Reveal";

const stats = [
  { value: "0", label: "mismatches on 3,000 orders run on the FPGA" },
  { value: "100%", label: "functional coverage" },
  { value: "21/21", label: "regression runs passing" },
  { value: "10", label: "SVA assertions bound into the RTL" },
];

const highlights = [
  "Designed the matching engine in SystemVerilog RTL: a 5-state FSM over a 16-level bid/ask order book with price-time priority.",
  "Built a UVM testbench (driver, monitor, scoreboard, coverage) that checks every trade against my own C++ reference model.",
  "Caught bugs a scoreboard can't see with SVA assertions, and closed coverage holes by fixing the stimulus.",
  "Closed timing at 50 MHz on a Basys3 (Artix-7), then verified the real chip over UART with a Python hardware-in-the-loop script.",
];

const stack = ["SystemVerilog", "UVM", "SVA", "C++", "Python", "Xilinx Vivado", "Basys3 FPGA"];

export default function FeaturedProject() {
  return (
    <Reveal>
      {/* Thin gradient border: the outer div is the gradient, the inner one covers all but 1px */}
      <div className="rounded-3xl p-px bg-gradient-to-br from-accent/60 via-line to-accent-2/60 mb-14">
        <article className="relative overflow-hidden rounded-3xl bg-background p-6 sm:p-10">
          <div aria-hidden className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />

          <p className="relative flex items-center gap-2 font-mono text-xs tracking-widest text-accent mb-4">
            <Cpu size={14} /> FEATURED PROJECT
          </p>

          <h3 className="relative text-2xl sm:text-4xl font-semibold tracking-tight text-foreground mb-3">
            FPGA Order-Matching Engine
          </h3>
          <p className="relative text-muted mb-8 max-w-3xl leading-relaxed">
            The core of a stock exchange in hardware: it matches buy and sell
            orders and reports each trade. I designed and verified it end to end,
            from RTL to a UVM testbench to a working FPGA.
          </p>

          <div className="relative grid gap-8 lg:grid-cols-2">
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-foreground/80 leading-relaxed">
                  <CircleCheck size={18} className="shrink-0 mt-0.5 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 gap-3 content-start">
              {stats.map((s) => (
                <div key={s.label} className="p-4 rounded-2xl border border-line bg-card">
                  <p className="font-mono text-2xl sm:text-3xl font-semibold text-foreground">{s.value}</p>
                  <p className="text-xs text-muted mt-1 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex flex-wrap items-center justify-between gap-4 mt-10 pt-6 border-t border-line">
            <div className="flex flex-wrap gap-1.5">
              {stack.map((tech) => (
                <span key={tech} className="font-mono text-[11px] px-2 py-0.5 rounded-md border border-line text-muted">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href="https://github.com/godwillattisso/order-matcher"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full bg-foreground text-background hover:opacity-85 transition"
            >
              View on GitHub
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </article>
      </div>
    </Reveal>
  );
}
