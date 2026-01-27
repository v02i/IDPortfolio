type ImpactMetric = {
  label: string;
  value: string;
};

type ImpactMetricsProps = {
  metrics: ImpactMetric[];
};

export default function ImpactMetrics({ metrics }: ImpactMetricsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm"
        >
          <p className="text-2xl font-semibold text-slate-900">
            {metric.value}
          </p>
          <p className="text-sm text-slate-500">{metric.label}</p>
        </div>
      ))}
    </div>
  );
}
