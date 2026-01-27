type ProcessStepsProps = {
  steps: string[];
};

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((step, index) => (
        <li
          key={step}
          className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Step {index + 1}
          </p>
          <p className="mt-2 text-sm font-semibold text-slate-900">{step}</p>
        </li>
      ))}
    </ol>
  );
}
