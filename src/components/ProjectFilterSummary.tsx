import type { CompetencyTag } from "@/content/projects";

type ProjectFilterSummaryProps = {
  active: "All" | CompetencyTag;
  count: number;
};

export default function ProjectFilterSummary({
  active,
  count,
}: ProjectFilterSummaryProps) {
  return (
    <p className="text-xs font-medium text-slate-500">
      Showing {count} project{count === 1 ? "" : "s"}
      {active === "All" ? "" : ` tagged ${active}`}
    </p>
  );
}
