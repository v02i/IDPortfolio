import Image from "next/image";
import Link from "next/link";
import StatusPill from "@/components/StatusPill";
import type { Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
  variant?: "default" | "hero" | "featured";
};

export default function ProjectCard({ project, variant = "default" }: ProjectCardProps) {
  const preview = project.artifacts.find((artifact) => artifact.type === "image");

  const isHero = variant === "hero";
  const isFeatured = variant === "featured";

  return (
    <article
      className={`group relative flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md focus-within:ring-2 focus-within:ring-slate-300 ${
        isHero
          ? "border-l-2 border-l-sky-400"
          : ""
      }`}
    >
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`View ${project.title}`}
        className="absolute inset-0 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
      />
      <div className={isHero ? "grid gap-6 md:grid-cols-[1fr_1.2fr]" : ""}>
        {preview ? (
          <div className={`${isHero ? "" : "mb-5"} overflow-hidden rounded-xl border border-slate-200 bg-slate-100`}>
            <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-slate-300" />
              <span className="h-2 w-2 rounded-full bg-slate-300" />
              <span className="h-2 w-2 rounded-full bg-slate-300" />
            </div>
            <Image
              src={preview.url}
              alt={preview.label}
              width={800}
              height={500}
              className={`w-full object-cover object-top ${
                isHero ? "h-48 sm:h-56" : isFeatured ? "h-56 sm:h-64" : "h-44 sm:h-48"
              }`}
            />
          </div>
        ) : (
          <div className={`${isHero ? "" : "mb-5"} overflow-hidden rounded-xl border border-slate-200 bg-slate-100`}>
            <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-slate-300" />
              <span className="h-2 w-2 rounded-full bg-slate-300" />
              <span className="h-2 w-2 rounded-full bg-slate-300" />
            </div>
            <div className={`flex items-center justify-center bg-slate-50 ${isHero ? "h-48 sm:h-56" : isFeatured ? "h-56 sm:h-64" : "h-52 sm:h-56"}`}>
              <span className="font-mono text-sm text-slate-500">coursekit.tools</span>
            </div>
          </div>
        )}
        <div className="flex flex-col justify-between">
          <div className="space-y-4">
            <div className="space-y-2">
              {isHero && (
                <div className="relative z-10">
                  <StatusPill label="Live at coursekit.tools" />
                </div>
              )}
              <h3 className={`font-semibold text-slate-900 ${isHero ? "text-xl sm:text-2xl" : isFeatured ? "text-lg sm:text-xl" : "text-lg"}`}>
                {project.title}
              </h3>
              <p className={`text-slate-600 ${isHero || isFeatured ? "text-base" : "text-sm"}`}>{project.oneLineOutcome}</p>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-600 transition-all duration-300 group-hover:bg-slate-900 group-hover:text-white">
              →
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
