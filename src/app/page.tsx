import Hero from "@/components/Hero";
import ProjectListSection from "@/components/ProjectListSection";
import SectionHeading from "@/components/SectionHeading";
import ProcessSteps from "@/components/ProcessSteps";
import FooterContact from "@/components/FooterContact";
import { projects } from "@/content/projects";

const processSteps = [
  "Align outcomes & stakeholders",
  "Map experience & assessments",
  "Prototype quickly",
  "Build + QA + accessibility",
  "Launch + iterate",
];

const featuredSlugs = [
  "alt-scan-accessibility-tool",
  "360-vr-simulation-learning-experience",
  "faculty-workshop-training-enablement",
  "fiu-online-showcase-course",
  "mslscm-orientation-shell",
  "pmbao-master-template-implementation",
];

const featuredProjects = projects.filter((project) =>
  featuredSlugs.includes(project.slug)
);

export default function HomePage() {
  return (
    <main id="main-content" className="space-y-20 pb-24">
      <section id="home" className="space-y-10 scroll-mt-24">
        <Hero />
      </section>

      <section id="projects" className="scroll-mt-24">
        <ProjectListSection
          title="Featured work"
          subtitle="Selected projects that connect strategy, technology, and collaboration."
          projects={featuredProjects}
        />
      </section>

      <section id="services" className="space-y-6 scroll-mt-24">
        <SectionHeading
          title="Services"
          subtitle="What I help teams accomplish."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Course redesign & alignment",
            "Accessibility remediation",
            "Template systems & QA",
            "Faculty enablement",
            "Learning technology rollout",
            "Evaluation & iteration",
          ].map((service) => (
            <div
              key={service}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-4 text-sm text-slate-600 shadow-sm"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-sky-400" aria-hidden="true" />
              {service}
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="space-y-6 scroll-mt-24">
        <SectionHeading
          title="About"
          subtitle="Instructional design leadership grounded in accessibility and outcomes."
        />
        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-4 text-slate-600">
            <p>
              I support FIU Online as an Instructional Design Specialist, maintaining
              large course portfolios while consulting on QM alignment, course design,
              and new tool implementations.
            </p>
            <p>
              My work spans accessibility, template systems, faculty enablement, and
              learning technology pilots—including AR/VR, Canvas enhancements, and
              scalable orientation hubs.
            </p>
            <p>
              I stay current by exploring new technologies, building apps, and tinkering
              with tools like 3D printers. I’m always looking for new ideas and
              collaborations that turn emerging tech into meaningful learning experiences.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Credentials
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Instructional Design Specialist (FIU Online)</li>
              <li>QM Peer Reviewer</li>
              <li>Course Quality & Accessibility</li>
              <li>Canvas LMS & EdTech Enablement</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="process" className="space-y-8 scroll-mt-24">
        <SectionHeading
          title="Process"
          subtitle="A consulting approach built for clarity, speed, and alignment."
        />
        <ProcessSteps steps={processSteps} />
      </section>

      <section id="impact" className="space-y-8 scroll-mt-24">
        <SectionHeading
          title="Course impact"
          subtitle="Scope of support, QM certification, and recognition highlights."
        />
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Scope of support
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Maintain approximately 100 FIU Online courses each semester as an Instructional Design
              Specialist, while consulting on QM alignment, course design, and new tool implementation.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Recognition
            </p>
            <div className="mt-3 overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
              <img
                src="/artifacts/learning-design-updates-recognition.png"
                alt="Recognition during Learning Design Updates for leading the Course Developer team in certifying courses"
                className="h-40 w-full object-contain"
              />
            </div>
          </div>
        </div>
        <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <img
            src="/artifacts/quality_matters_v2_1_0.png"
            alt="Quality Matters logo"
            className="absolute right-6 top-6 h-12 w-auto"
          />
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            QM-certified courses
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            A selection of courses certified to Quality Matters standards (not exhaustive).
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
            <li>MAN6327 RXS / RXX 1231 — Nathan Hiller</li>
            <li>FIN6406 RX1 1221 — Ode Oztekin</li>
            <li>FIN6406 RXG 1218 — Edward Lawrence</li>
            <li>FIN4502 RVD 1218 — Edward Lawrence</li>
            <li>FIN4324 RVD / RVE 1231 — Muhammad Talukar</li>
            <li>ACG6225 RX6 / RX8 — Maria Vulcheva</li>
            <li>MAR3023 RVD 1248 — Vivian Chen</li>
            <li>FIN6457C RX1 1248 — Florent Rouxelin</li>
            <li>MAR6805 1248 — Jayati Sinha</li>
            <li>ACG6175 RXG 1248 — Clark Wheatley</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="space-y-6 scroll-mt-24">
        <FooterContact />
      </section>
    </main>
  );
}
