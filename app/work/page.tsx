import type { Metadata } from "next";
import Section from "@/components/Section";
import { siteData } from "@/content/site";
import { isInternalHref, withBasePath } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "作品索引 | 穿堂风Simona",
};

export default function WorkPage() {
  const { workIndex, podcastsHosted, newsletter, book, projects } = siteData;
  const featuredBook = book.items[0];

  return (
    <Section title={workIndex.title} intro={workIndex.intro}>
      <div className="grid gap-4 md:grid-cols-2">
        {workIndex.items.map((item) => (
          <article key={item.name} className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-sm">
            <h2 className="text-lg font-medium tracking-tight text-ink">{item.name}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.summary}</p>
            <a
              href={isInternalHref(item.href) ? withBasePath(item.href) : item.href}
              className="mt-4 inline-block text-sm underline underline-offset-4"
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer noopener" : undefined}
            >
              {item.ctaLabel}
            </a>
          </article>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {podcastsHosted.items.map((podcast) => (
          <article key={podcast.id} className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-sm">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">Podcast</p>
            <h2 className="mt-2 text-lg font-medium tracking-tight text-ink">{podcast.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{podcast.description}</p>
            <a
              href={isInternalHref(podcast.latestEpisodeUrl) ? withBasePath(podcast.latestEpisodeUrl) : podcast.latestEpisodeUrl}
              className="mt-4 inline-block text-sm underline underline-offset-4"
              target={podcast.latestEpisodeUrl.startsWith("http") ? "_blank" : undefined}
              rel={podcast.latestEpisodeUrl.startsWith("http") ? "noreferrer noopener" : undefined}
            >
              {siteData.ui.latestEpisodeLabel}
            </a>
          </article>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-sm">
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">Newsletter</p>
          <h2 className="mt-2 text-lg font-medium tracking-tight text-ink">{newsletter.name}</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">{newsletter.valueProp}</p>
          <a href={withBasePath("/newsletter")} className="mt-4 inline-block text-sm underline underline-offset-4">
            订阅 Newsletter
          </a>
        </article>

        {featuredBook ? (
          <article className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-sm">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">Book</p>
            <h2 className="mt-2 text-lg font-medium tracking-tight text-ink">{featuredBook.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{featuredBook.subtitle}</p>
            <a
              href={isInternalHref(featuredBook.url) ? withBasePath(featuredBook.url) : featuredBook.url}
              className="mt-4 inline-block text-sm underline underline-offset-4"
              target={featuredBook.url.startsWith("http") ? "_blank" : undefined}
              rel={featuredBook.url.startsWith("http") ? "noreferrer noopener" : undefined}
            >
              去微信读书阅读
            </a>
          </article>
        ) : null}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {projects.items.map((project) => (
          <article key={project.name} className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-sm">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">Project</p>
            <h2 className="mt-2 text-lg font-medium tracking-tight text-ink">{project.name}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
            <a
              href={isInternalHref(project.link) ? withBasePath(project.link) : project.link}
              className="mt-4 inline-block text-sm underline underline-offset-4"
              target={project.link.startsWith("http") ? "_blank" : undefined}
              rel={project.link.startsWith("http") ? "noreferrer noopener" : undefined}
            >
              查看项目
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
