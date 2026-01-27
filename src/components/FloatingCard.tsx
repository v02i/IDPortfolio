import { cn } from "@/lib/utils";

type FloatingCardProps = {
  title: string;
  className?: string;
};

export default function FloatingCard({ title, className }: FloatingCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200/70 bg-gradient-to-br from-white to-sky-50 p-4 text-sm text-slate-700 shadow-md sm:text-base",
        className
      )}
    >
      {title}
    </div>
  );
}
