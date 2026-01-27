"use client";

import type { CompetencyTag } from "@/content/projects";
import { cn } from "@/lib/utils";

type ProjectFilterBarProps = {
  active: "All" | CompetencyTag;
  options: CompetencyTag[];
  onChange: (value: "All" | CompetencyTag) => void;
};

export default function ProjectFilterBar({
  active,
  options,
  onChange,
}: ProjectFilterBarProps) {
  const items: Array<"All" | CompetencyTag> = ["All", ...options];

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => onChange(item)}
          className={cn(
            "rounded-full px-4 py-2 text-xs font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400",
            active === item
              ? "bg-slate-900 text-white"
              : "bg-white text-slate-600 ring-1 ring-slate-200 hover:-translate-y-0.5"
          )}
          aria-pressed={active === item}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
