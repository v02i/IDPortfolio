import CTAButton from "@/components/CTAButton";

export default function Hero() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
      <div className="max-w-2xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl lg:text-6xl">
            Victor M. Iglesias
          </h1>
          <p className="text-base text-slate-600 sm:text-lg">
            I design online courses and build the tools that make instructional
            design faster. Currently consulting at FIU Online and building
            CourseKit.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <CTAButton href="/#projects" label="View Projects" />
          <CTAButton href="mailto:victoriglesiascs@gmail.com" label="Email" variant="secondary" />
        </div>
      </div>
    </section>
  );
}
