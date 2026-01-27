import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/content/projects";
import ProjectDetailLayout from "@/components/ProjectDetailLayout";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Project Not Found | Victor Iglesias" };
  }

  return {
    title: `${project.title} | Victor Iglesias`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main id="main-content" className="space-y-6 pb-24">
        <h1 className="text-2xl font-semibold text-slate-900">Project not found</h1>
        <Link href="/#projects" className="text-sm font-semibold text-slate-600">
          Back to featured work
        </Link>
      </main>
    );
  }

  return (
    <main id="main-content" className="space-y-10 pb-24">
      <ProjectDetailLayout project={project} />
      <Link href="/#projects" className="text-sm font-semibold text-slate-600">
        Back to featured work
      </Link>
    </main>
  );
}
