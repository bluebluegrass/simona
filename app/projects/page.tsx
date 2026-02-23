import type { Metadata } from "next";
import Section from "@/components/Section";
import { siteData } from "@/content/site";
import { isInternalHref, withBasePath } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "项目与实验 | 穿堂风Simona",
};

export default function ProjectsPage() {
  const { projects } = siteData;

  return (
    <Section title={projects.title} intro={projects.intro}>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.items.map((project) => (
          <article key={project.name} className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-sm">
            <p className="text-xs text-muted">{project.status}</p>
            <h3 className="mt-2 text-lg font-medium tracking-tight">{project.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
            <p className="mt-3 text-xs text-muted">{project.tags.join(" · ")}</p>
            <a href={isInternalHref(project.link) ? withBasePath(project.link) : project.link} className="mt-3 inline-block text-sm underline underline-offset-4">
              {projects.title}
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
