type ProcessStepsProps = {
  steps: string[];
};

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <ol className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-0">
      {steps.map((step, index) => (
        <li key={step} className="flex items-center gap-3 sm:gap-2">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
            {index + 1}
          </span>
          <p className="text-sm font-medium text-slate-700">{step}</p>
          {index < steps.length - 1 && (
            <span className="ml-2 hidden shrink-0 text-slate-300 sm:block" aria-hidden="true">→</span>
          )}
        </li>
      ))}
    </ol>
  );
}
