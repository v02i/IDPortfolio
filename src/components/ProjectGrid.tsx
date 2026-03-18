import Link from "next/link";
import type { Project } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";
import StaggerGrid, { StaggerItem } from "@/components/StaggerGrid";

type ProjectGridProps = {
  heroProject?: Project;
  featuredProjects: Project[];
  secondaryProjects: Project[];
};

export default function ProjectGrid({ heroProject, featuredProjects, secondaryProjects }: ProjectGridProps) {
  return (
    <div className="space-y-8">
      {heroProject ? (
        <StaggerGrid className="grid gap-6">
          <StaggerItem>
            <ProjectCard project={heroProject} variant="hero" />
          </StaggerItem>
        </StaggerGrid>
      ) : null}

      {featuredProjects.length > 0 && (
        <StaggerGrid className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} variant="featured" />
            </StaggerItem>
          ))}
        </StaggerGrid>
      )}

      {secondaryProjects.length > 0 && (
        <StaggerGrid className="flex flex-col divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
          {secondaryProjects.map((project) => (
            <StaggerItem key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="group flex items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-slate-50"
              >
                <div className="min-w-0 flex-1 space-y-1">
                  <h3 className="font-semibold text-slate-900 group-hover:text-slate-700">
                    {project.title}
                  </h3>
                  <p className="truncate text-sm text-slate-600">
                    {project.oneLineOutcome}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.slice(0, 4).map((tool) => (
                      <span key={tool} className="text-xs text-slate-400">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm text-slate-500 transition-all duration-300 group-hover:bg-slate-900 group-hover:text-white">
                  →
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGrid>
      )}
    </div>
  );
}
