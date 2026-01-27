type StatusPillProps = {
  label: string;
};

export default function StatusPill({ label }: StatusPillProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
      <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
      {label}
    </span>
  );
}
