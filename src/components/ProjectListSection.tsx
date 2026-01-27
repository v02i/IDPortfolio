import SectionHeading from "@/components/SectionHeading";
import ProjectGrid from "@/components/ProjectGrid";
import type { Project } from "@/content/projects";

type ProjectListSectionProps = {
  title: string;
  subtitle: string;
  projects: Project[];
};

export default function ProjectListSection({
  title,
  subtitle,
  projects,
}: ProjectListSectionProps) {
  return (
    <section className="space-y-8">
      <SectionHeading title={title} subtitle={subtitle} />
      <ProjectGrid projects={projects} />
    </section>
  );
}
