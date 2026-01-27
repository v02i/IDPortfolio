import CTAButton from "@/components/CTAButton";

export default function FooterContact() {
  return (
    <footer className="rounded-2xl border border-slate-200 bg-white px-6 py-10 shadow-sm">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-slate-900">
            Let’s build inclusive learning experiences.
          </h3>
          <p className="text-sm text-slate-600">
            Open to instructional design and faculty consulting roles.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <CTAButton href="mailto:victoriglesiascs@gmail.com" label="Email" />
          <CTAButton
            href="/artifacts/Victor%20Iglesias%20Resume%20ID.pdf"
            label="Download Resume"
            variant="secondary"
          />
        </div>
      </div>
      <p className="mt-8 text-xs text-slate-400">
        © 2026 Victor Iglesias. All rights reserved.
      </p>
      <p className="mt-2 text-xs text-slate-400">
        Portfolio designed and developed by me from the ground up using Next.js, TypeScript,
        and Tailwind CSS.
      </p>
    </footer>
  );
}
