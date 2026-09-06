import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-4 py-24">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
        Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title="STM32 Bare-Metal Environmental Monitor"
          description="Real-time environmental monitor on an STM32, using custom C drivers, timer interrupts, and ADC-controlled fan speed, synchronized with an I2C-based light sensor and LCD."
          stack={["C", "STM32 microcontroller", "KiCad"]}
          link="https://github.com/godwillattisso/STM32-Jurassic-ENV-Monitor"
        />
        <ProjectCard
          title="Elevator Control System"
          description="An elevator controller in VHDL simulating real-time floor status, movement, and safety logic, with custom testbenches validating edge cases."
          stack={["VHDL", "FPGA", "Xilinx Vivado"]}
        />
        <ProjectCard
          title="FPV Surveillance Robot"
          description="A robotic platform with a 3D-printed Fusion 360 chassis and Arduino C firmware for motor control and real-time telemetry."
          stack={["C", "Arduino", "Fusion 360"]}
        />
        <ProjectCard
          title="Simon Says Game"
          description="An embedded Simon Says game on an STM32 using GPIO, timers, and state-based logic, debugged for stable gameplay."
          stack={["C", "STM32"]}
        />
        <ProjectCard
          title="Frequency Detection System"
          description="A soldered analog frequency detection circuit using filters, amplifiers, and voltage regulation, tested with an oscilloscope and DMM."
          stack={[
            "Analog Design",
            "KiCad",
            "Voltage Regulation",
            "Oscilloscope",
          ]}
        />
        <ProjectCard
          title="Analog Modulation Analysis"
          description="Python simulations analyzing signal transmission and recovery under noise, with a feedback-based algorithm to correct frequency mismatch."
          stack={["Python", "NumPy", "Matplotlib"]}
        />
      </div>
    </section>
  );
}
