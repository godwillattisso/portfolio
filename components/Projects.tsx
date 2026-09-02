import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-4 py-24">
      <h2 className="text-3xl font-bold text-white mb-10 text-center">
        Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        <ProjectCard
          title="STM32 Bare-Metal Environmental Monitor"
          description="Real-time environmental monitor on an STM32, using custom C drivers, timer interrupts,
           and ADC-controlled fan speed, synchronized with an I2C-based light sensor and LCD."
          stack={["C", "ARM Cortex-M3", "STM32F103"]}
          link="https://github.com/yourusername/stm32-environmental-monitor"
        />
        <ProjectCard
          title="Elevator Control System"
          description="An elevator controller in VHDL simulating real-time floor status, movement, and safety logic, 
          with custom testbenches validating edge cases."
          stack={["VHDL", "FPGA", "Xilinx Vivado"]}
        />
      </div>
    </section>
  );
}
