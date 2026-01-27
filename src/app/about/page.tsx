import SectionHeading from "@/components/SectionHeading";

const skills = [
  "Accessibility (WCAG 2.1)",
  "Course alignment",
  "Template systems",
  "Faculty enablement",
  "Learning technology",
  "Quality assurance",
];

const tools = [
  "Storyline", "Rise 360", "Canvas", "Figma", "Miro", "Python",
];

export default function AboutPage() {
  return (
    <main id="main-content" className="space-y-12 pb-24">
      <SectionHeading
        title="About"
        subtitle="Instructional design leadership grounded in accessibility and outcomes."
      />

      <section className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-600 shadow-sm">
        <p>
          I partner with faculty and program leaders to design clear, accessible
          learning experiences that scale. My focus is practical: align outcomes,
          simplify delivery, and measure impact.
        </p>
        <p className="mt-4">
          I combine instructional strategy with systems thinking—templates, audits,
          and enablement—so teams can deliver quality courses with confidence.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
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
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
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
    </main>
  );
}
