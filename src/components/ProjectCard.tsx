import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";
import TagChip from "@/components/TagChip";

const MAX_TOOLS = 4;

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const tools = project.tools.slice(0, MAX_TOOLS);
  const remaining = project.tools.length - tools.length;
  const preview = project.artifacts.find((artifact) => artifact.type === "image");
  const previewFitClass =
    project.slug === "alt-scan-accessibility-tool" ||
    project.slug === "fiu-online-showcase-course" ||
    project.slug === "mslscm-orientation-shell" ||
    project.slug === "pmbao-master-template-implementation"
      ? "object-top"
      : "object-center";

  return (
    <article className="relative flex h-full flex-col justify-between rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md focus-within:ring-2 focus-within:ring-slate-300">
      <span className="absolute left-6 top-0 h-1 w-14 rounded-full bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400" aria-hidden="true" />
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`View ${project.title}`}
        className="absolute inset-0 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
      />
      {preview ? (
        <div className="mb-5 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50">
          <Image
            src={preview.url}
            alt={preview.label}
            width={800}
            height={500}
            className={`h-36 w-full object-cover sm:h-40 ${previewFitClass}`}
          />
        </div>
      ) : null}
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-900">
            {project.title}
          </h3>
          <p className="text-sm text-slate-600">{project.oneLineOutcome}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.competencyTags.map((tag) => (
            <TagChip key={tag} tag={tag} />
          ))}
        </div>
        <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-500">
          {tools.map((tool) => (
            <span key={tool} className="rounded-full bg-slate-100 px-2.5 py-1">
              {tool}
            </span>
          ))}
          {remaining > 0 ? (
            <span className="rounded-full bg-slate-100 px-2.5 py-1">
              +{remaining}
            </span>
          ) : null}
        </div>
      </div>
      <div className="mt-6">
        <span className="text-sm font-semibold text-slate-900 underline-offset-4">
          See more
        </span>
      </div>
    </article>
  );
}
