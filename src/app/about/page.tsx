import SectionHeading from "@/components/SectionHeading";
import FadeInSection from "@/components/FadeInSection";

const skills = [
  "Accessibility (WCAG 2.1)",
  "Course alignment",
  "Template systems",
  "Faculty enablement",
  "AI/Automation",
  "Quality assurance",
];

const tools = [
  "Canvas", "Python", "Next.js", "TypeScript", "Figma", "Tailwind CSS",
];

export default function AboutPage() {
  return (
    <main id="main-content" className="space-y-12 pb-24">
      <FadeInSection>
        <SectionHeading
          title="About"
          subtitle="A bit about how I work."
        />
      </FadeInSection>

      <FadeInSection delay={0.05}>
        <section className="space-y-4 text-slate-600">
          <p>
            I've spent the past 7+ years at FIU Online helping faculty build
            courses that actually work for students. That means QM alignment,
            accessibility audits, template systems, and a lot of hands-on
            collaboration with subject matter experts.
          </p>
          <p>
            I also build tools. CourseKit started because I kept running into the
            same tedious tasks every semester, so I wrote software to automate
            them. I work in Next.js, TypeScript, Python, and Canvas, and I'm
            always looking for ways to use AI to cut the repetitive parts of
            instructional design.
          </p>
        </section>
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <section className="border-l-2 border-sky-400 pl-5">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Education
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>M.S. Cybersecurity, Florida International University</li>
            <li>B.S. Information Technology, Florida International University</li>
          </ul>
        </section>
      </FadeInSection>

      <FadeInSection delay={0.15}>
        <section className="border-l-2 border-sky-400 pl-5">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Publication
          </h3>
          <p className="mt-4 text-sm text-slate-600">
            Co-author, &quot;Alt-Scan: Automating Alt Text Auditing for Accessible Course
            Content&quot; — presented at the FIU Online ID Expo.
          </p>
        </section>
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <section className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Skills
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Tools
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>
    </main>
  );
}
