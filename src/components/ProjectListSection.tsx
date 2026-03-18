import SectionHeading from "@/components/SectionHeading";
import ProjectGrid from "@/components/ProjectGrid";
import type { Project } from "@/content/projects";

type ProjectListSectionProps = {
  title: string;
  subtitle: string;
  heroProject?: Project;
  featuredProjects: Project[];
  secondaryProjects: Project[];
};

export default function ProjectListSection({
  title,
  subtitle,
  heroProject,
  featuredProjects,
  secondaryProjects,
}: ProjectListSectionProps) {
  return (
    <section className="space-y-8">
      <SectionHeading title={title} subtitle={subtitle} />
      <ProjectGrid
        heroProject={heroProject}
        featuredProjects={featuredProjects}
        secondaryProjects={secondaryProjects}
      />
    </section>
  );
}
