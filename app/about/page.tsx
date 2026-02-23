import type { Metadata } from "next";
import Section from "@/components/Section";
import { siteData } from "@/content/site";
import { isInternalHref, withBasePath } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "关于我 | 穿堂风Simona",
};

export default function AboutPage() {
  const { about } = siteData;

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <article className="rounded-3xl border border-border bg-surface p-6 md:p-9">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">About</p>
            <h1 className="mt-3 text-3xl font-medium tracking-tight text-ink md:text-5xl">{about.headline}</h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">{about.subtitle}</p>
            <div className="mt-5 space-y-3">
              {about.intro.map((paragraph) => (
                <p key={paragraph} className="max-w-3xl text-sm leading-relaxed text-muted md:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </div>
      </section>

      <Section title="Quick Facts" kicker="01 / SNAPSHOT">
        <ul className="grid gap-3 md:grid-cols-2">
          {about.quickFacts.map((fact) => (
            <li key={fact} className="rounded-2xl border border-border bg-card p-5 text-sm leading-relaxed text-muted">
              {fact}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Journey" kicker="02 / PATH">
        <ol className="grid gap-4">
          {about.journey.map((item) => (
            <li key={item.period} className="rounded-2xl border border-border bg-card p-5 md:p-6">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">{item.period}</p>
              <h2 className="mt-2 text-lg font-medium tracking-tight text-ink">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="What I'm Building" kicker="03 / WORK">
        <div className="grid gap-4 md:grid-cols-2">
          {about.projects.map((project) => (
            <article key={project.name} className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-sm">
              <h2 className="text-lg font-medium tracking-tight text-ink">{project.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
              <a
                href={isInternalHref(project.href) ? withBasePath(project.href) : project.href}
                className="mt-4 inline-block text-sm underline underline-offset-4"
                target={project.href.startsWith("http") ? "_blank" : undefined}
                rel={project.href.startsWith("http") ? "noreferrer noopener" : undefined}
              >
                {project.ctaLabel}
              </a>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Start Here" kicker="04 / NEXT STEP">
        <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
          <p className="max-w-2xl text-sm leading-relaxed text-muted md:text-base">
            如果你想先从内容认识我，可以从 Newsletter 开始；如果你正在经历迁移、转折或重建，也可以直接预约一段对话。
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={withBasePath(about.cta.newsletter.href)} className="btn-newsletter">
              {about.cta.newsletter.label}
            </a>
            <a href={withBasePath(about.cta.talk.href)} className="btn-primary">
              {about.cta.talk.label}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
