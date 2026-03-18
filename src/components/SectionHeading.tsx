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
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
        {title}
      </p>
      {subtitle ? (
        <h2 className="text-2xl font-medium text-slate-900 sm:text-3xl">
          {subtitle}
        </h2>
      ) : null}
    </div>
  );
}
