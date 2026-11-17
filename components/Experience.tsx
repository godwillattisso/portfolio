import ExperienceItem from "@/components/ExperienceItem";
import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-4 py-24 scroll-mt-24">
      <SectionHeading eyebrow="WHERE I'VE WORKED" title="Experience" />

      <div className="space-y-3">
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
          logo="/crc1_logo.jpg"
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
