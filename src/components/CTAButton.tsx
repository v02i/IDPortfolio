import Link from "next/link";
import { cn } from "@/lib/utils";

type CTAButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
};

export default function CTAButton({
  href,
  label,
  variant = "primary",
  external = false,
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400",
        variant === "primary"
          ? "bg-slate-900 text-white shadow-sm hover:-translate-y-0.5 hover:bg-slate-800"
          : variant === "secondary"
            ? "bg-white text-slate-900 ring-1 ring-slate-200 hover:-translate-y-0.5 hover:bg-slate-50"
            : "text-slate-700 hover:-translate-y-0.5 hover:text-slate-900"
      )}
    >
      {label}
    </Link>
  );
}
