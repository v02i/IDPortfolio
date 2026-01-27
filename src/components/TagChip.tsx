import { cn } from "@/lib/utils";
import type { CompetencyTag } from "@/content/projects";

type TagChipProps = {
  tag: CompetencyTag;
  className?: string;
};

const tagStyles: Record<CompetencyTag, string> = {
  "Strategy & Alignment": "bg-indigo-50 text-indigo-700 ring-indigo-200",
  "ID & Technology": "bg-sky-50 text-sky-700 ring-sky-200",
  Collaboration: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  "Problem-Solving": "bg-amber-50 text-amber-700 ring-amber-200",
};

export default function TagChip({ tag, className }: TagChipProps) {
  return (
    <span
      className={cn(
        "rounded-full px-3 py-1 text-xs font-semibold ring-1 shadow-[0_8px_20px_-16px_rgba(15,23,42,0.35)]",
        tagStyles[tag],
        className
      )}
    >
      {tag}
    </span>
  );
}
