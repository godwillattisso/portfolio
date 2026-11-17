import { ArrowUpRight, CircleCheck, Cpu } from "lucide-react";

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
    <article className="p-6 sm:p-8 rounded-2xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60 mb-12">
      <p className="flex items-center gap-2 text-xs tracking-widest text-gray-500 mb-3">
        <Cpu size={14} /> FEATURED PROJECT
      </p>

      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
        FPGA Order-Matching Engine
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-3xl">
        The core of a stock exchange in hardware: it matches buy and sell
        orders and reports each trade. I designed and verified it end to end,
        from RTL to a UVM testbench to a working FPGA.
      </p>

      <div className="grid gap-8 lg:grid-cols-2">
        <ul className="space-y-3">
          {highlights.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-gray-700 dark:text-gray-300">
              <CircleCheck size={18} className="shrink-0 mt-0.5 text-gray-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-2 gap-4 content-start">
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950"
            >
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{s.value}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 mt-8">
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href="https://github.com/godwillattisso/order-matcher"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:opacity-80 transition"
        >
          View on GitHub <ArrowUpRight size={16} />
        </a>
      </div>
    </article>
  );
}