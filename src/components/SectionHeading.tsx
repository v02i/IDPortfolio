import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export default function SectionHeading({
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-center gap-3">
        <span className="h-1.5 w-10 rounded-full bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400" />
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          {title}
        </p>
      </div>
      {subtitle ? (
        <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
          {subtitle}
        </h2>
      ) : null}
    </div>
  );
}
