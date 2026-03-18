import Hero from "@/components/Hero";
import ProjectListSection from "@/components/ProjectListSection";
import SectionHeading from "@/components/SectionHeading";
import ProcessSteps from "@/components/ProcessSteps";
import FooterContact from "@/components/FooterContact";
import FadeInSection from "@/components/FadeInSection";
import { projects } from "@/content/projects";

const processSteps = [
  "Align outcomes & stakeholders",
  "Map experience & assessments",
  "Prototype quickly",
  "Build + QA + accessibility",
  "Launch + iterate",
];

const heroSlug = "coursekit-id-tools";

const highlightedSlugs = [
  "alt-scan-accessibility-tool",
  "360-vr-simulation-learning-experience",
];

const secondarySlugs = [
  "faculty-workshop-training-enablement",
  "fiu-online-showcase-course",
  "mslscm-orientation-shell",
  "pmbao-master-template-implementation",
];

const heroProject = projects.find((p) => p.slug === heroSlug);
const featuredProjects = projects.filter((p) => highlightedSlugs.includes(p.slug));
const secondaryProjects = projects.filter((p) => secondarySlugs.includes(p.slug));

export default function HomePage() {
  return (
    <main id="main-content" className="pb-24">
      <section id="home" className="scroll-mt-24">
        <FadeInSection>
          <Hero />
        </FadeInSection>
      </section>

      <FadeInSection>
        <section id="projects" className="mt-20 scroll-mt-24">
          <ProjectListSection
            title="Featured work"
            subtitle="A few things I've built and led."
            heroProject={heroProject}
            featuredProjects={featuredProjects}
            secondaryProjects={secondaryProjects}
          />
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id="about" className="mt-32 space-y-6 scroll-mt-24">
          <SectionHeading
            title="About"
            subtitle="A bit about how I work."
          />
          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="space-y-4 text-slate-600">
              <p>
                I work at FIU Online as an Instructional Design Consultant.
                For the past 7+ years, I've supported around 100 courses each
                semester, helping faculty build accessible, well-structured
                online courses.
              </p>
              <p>
                My day-to-day includes QM alignment, accessibility audits,
                template systems, and faculty training. I've also led projects
                in AR/VR, Canvas enhancements, and scalable orientation hubs.
              </p>
              <p>
                Outside of course work, I build tools with Next.js, TypeScript,
                and Python to solve real problems instructional designers deal
                with every day. I'm always looking for ways to use AI and
                automation to cut the busywork.
              </p>
            </div>
            <div className="border-l-2 border-sky-400 pl-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Credentials
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>Instructional Design Consultant (FIU Online)</li>
                <li>M.S. Cybersecurity (FIU)</li>
                <li>B.S. Information Technology (FIU)</li>
                <li>QM Peer Reviewer</li>
                <li>Course Quality & Accessibility</li>
                <li>Canvas LMS & EdTech Enablement</li>
              </ul>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id="process" className="mt-16 space-y-8 scroll-mt-24">
          <SectionHeading
            title="Process"
            subtitle="How I approach a project."
          />
          <ProcessSteps steps={processSteps} />
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id="impact" className="mt-24 space-y-8 scroll-mt-24">
          <SectionHeading
            title="Course impact"
            subtitle="Quality, scale, and recognition."
          />
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Scope of support
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                I support roughly 100 FIU Online courses each semester, consulting on
                QM alignment, course design, and new tool rollouts.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Recognition
              </p>
              <div className="mt-3 overflow-hidden rounded-lg border border-slate-100 bg-slate-50">
                <img
                  src="/artifacts/learning-design-updates-recognition.png"
                  alt="Recognition during Learning Design Updates for leading the Course Developer team in certifying courses"
                  className="h-40 w-full object-contain"
                />
              </div>
            </div>
          </div>
          <div className="relative rounded-xl border border-slate-200 bg-white p-6">
            <img
              src="/artifacts/quality_matters_v2_1_0.png"
              alt="Quality Matters logo"
              className="absolute right-6 top-6 h-12 w-auto"
            />
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              QM-certified courses
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              20+ courses certified to Quality Matters standards across Finance,
              Accounting, Marketing, and Management programs.
            </p>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id="contact" className="mt-32 scroll-mt-24">
          <FooterContact />
        </section>
      </FadeInSection>
    </main>
  );
}
