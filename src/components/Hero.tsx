import CTAButton from "@/components/CTAButton";
import FloatingCard from "@/components/FloatingCard";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[36px] border border-slate-200/80 bg-gradient-to-br from-white via-slate-50 to-indigo-50 px-6 py-12 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.45)] backdrop-blur sm:px-10 lg:px-14">
      <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">
              Victor M. Iglesias
            </h1>
            <p className="text-base text-slate-600 sm:text-lg">
              I design accessible learning experiences that improve clarity,
              consistency, and outcomes.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <CTAButton href="/#projects" label="View Projects" />
            <CTAButton
              href="/artifacts/Victor%20Iglesias%20Resume%20ID.pdf"
              label="Download Resume"
              variant="secondary"
            />
            <CTAButton href="mailto:victoriglesiascs@gmail.com" label="Email" variant="ghost" />
          </div>
          <p className="text-sm text-slate-600">
            Focused on accessibility, alignment, and measurable improvement across
            online and hybrid programs.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <FloatingCard title="Maintain ~100 courses per semester" />
          <FloatingCard title="Quality Matters alignment" />
          <FloatingCard title="Faculty training & enablement" />
          <FloatingCard title="Education tools & Canvas adoption" />
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-indigo-200/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 left-12 h-44 w-44 rounded-full bg-sky-200/40 blur-3xl"
      />
    </section>
  );
}
