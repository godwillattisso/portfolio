import ExperienceItem from "@/components/ExperienceItem";

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-4 py-24">
      <p className="text-center text-sm tracking-widest text-gray-500 mb-2">
        WHERE I'VE WORKED
      </p>
      <h2 className="text-4xl font-bold text-white mb-12 text-center">
        Experience
      </h2>

      <div>
        <ExperienceItem
          role="Automation Engineering Intern"
          org="Suncor Energy"
          dates="2025 — Present"
          current
          logo="/suncor_logo.png"
        />
        <ExperienceItem
          role="Electrical and Instrumentation Engineering Student"
          org="Co-op Refinery Complex"
          dates="Jan 2025 — Apr 2025"
          logo="/crc_logo.png"
        />
        <ExperienceItem
          role="Founder & President"
          org="NSBE (National Society of Black Engineers) — U of R Chapter"
          dates="Sept 2025 — Present"
          current
          logo="/nsbe_logo2.svg"
        />
      </div>
    </section>
  );
}
