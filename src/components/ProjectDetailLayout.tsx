import Image from "next/image";
import type { Project } from "@/content/projects";
import TagChip from "@/components/TagChip";
import ProjectMetaList from "@/components/ProjectMetaList";

function ArtifactIcon({ type }: { type: Project["artifacts"][number]["type"] }) {
  switch (type) {
    case "image":
      return "🖼️";
    case "pdf":
      return "📄";
    case "link":
      return "🔗";
    default:
      return "📎";
  }
}

type ProjectDetailLayoutProps = {
  project: Project;
};

export default function ProjectDetailLayout({ project }: ProjectDetailLayoutProps) {
  return (
    <article className="space-y-10">
      <header className="space-y-5">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Case Study
          </p>
          <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            {project.title}
          </h1>
          <p className="text-lg text-slate-600">{project.oneLineOutcome}</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-[1.6fr_0.9fr] lg:items-start">
          {project.artifacts.find((artifact) => artifact.type === "image") ? (
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <Image
                src={project.artifacts.find((artifact) => artifact.type === "image")?.url ?? "/placeholders/project-1.svg"}
                alt={project.title}
                width={1400}
                height={900}
                className="h-80 w-full object-contain sm:h-[26rem]"
              />
            </div>
          ) : null}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Summary
            </h3>
            <p className="mt-4 text-sm text-slate-600">{project.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.competencyTags.map((tag) => (
                <TagChip key={tag} tag={tag} />
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-slate-500">
              {project.tools.map((tool) => (
                <span key={tool} className="rounded-full bg-slate-100 px-3 py-1">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Project framing
            </p>
            <h2 className="text-xl font-semibold text-slate-900">
              Ask, constraints, and approach
            </h2>
          </div>
        </div>
        <div className="mt-4 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-slate-900">The Ask</span>
                <span className="h-1 w-8 rounded-full bg-slate-200" aria-hidden="true" />
              </div>
              <p className="text-sm leading-relaxed text-slate-600">
                {project.context}
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-slate-900">Constraints</span>
                <span className="h-1 w-8 rounded-full bg-slate-200" aria-hidden="true" />
              </div>
              <div className="space-y-2">
                {project.constraints.map((constraint) => (
                  <div
                    key={constraint}
                    className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-sm text-slate-600"
                  >
                    {constraint}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-slate-900">Approach</span>
              <span className="h-1 w-8 rounded-full bg-slate-200" aria-hidden="true" />
            </div>
            <ol className="space-y-2 text-sm text-slate-600">
              {project.approachSteps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 text-xs font-semibold text-slate-500">
                    {index + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Artifacts</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.artifacts.map((artifact) => (
            <a
              key={artifact.label}
              href={artifact.url}
              target={artifact.url.startsWith("http") ? "_blank" : undefined}
              rel={artifact.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center justify-between text-sm font-semibold text-slate-900">
                <span>{artifact.label}</span>
                <span aria-hidden="true">{ArtifactIcon({ type: artifact.type })}</span>
              </div>
              <p className="mt-2 text-xs text-slate-500">
                {artifact.note ?? "Open artifact"}
              </p>
              {artifact.type === "image" ? (
                <div className="mt-4 overflow-hidden rounded-xl border border-slate-100">
                  <Image
                    src={artifact.url}
                    alt={artifact.label}
                    width={640}
                    height={400}
                    className="h-36 w-full object-cover"
                  />
                </div>
              ) : null}
            </a>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Impact</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.impact.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="text-2xl font-semibold text-slate-900">
                {metric.value}
              </p>
              <p className="text-sm text-slate-500">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-slate-900">Reflection</h2>
        {project.reflection.includes("\n") ? (
          <div className="space-y-3 text-slate-600">
            <p>{project.reflection.split("\n")[0]}</p>
            <ul className="space-y-2 pl-5 text-sm">
              {project.reflection
                .split("\n")
                .slice(1)
                .map((line) => line.replace(/^•\s?/, "").trim())
                .filter(Boolean)
                .map((line) => (
                  <li key={line} className="list-disc">
                    {line}
                  </li>
                ))}
            </ul>
          </div>
        ) : (
          <p className="text-slate-600">{project.reflection}</p>
        )}
      </section>
    </article>
  );
}
