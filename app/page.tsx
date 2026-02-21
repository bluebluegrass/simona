import type { Metadata } from "next";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import LifeInMotion from "@/components/LifeInMotion/LifeInMotion";
import Section from "@/components/Section";
import SubscribeForm from "@/components/SubscribeForm";
import { siteData } from "@/content/site";
import { isInternalHref, withBasePath } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "穿堂风Simona | 流动的人生",
};

function toDateLabel(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit" });
}

export default function HomePage() {
  const { podcastsHosted, newsletter, book, projects, talk, socials } = siteData;

  return (
    <>
      <Hero />
      <LifeInMotion />

      <Section title={newsletter.title} intro={newsletter.valueProp} kicker="03 / NEWSLETTER">
        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4 rounded-2xl border border-neutral-200 bg-[rgba(252,252,251,0.9)] p-5">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-neutral-500">Join The Journal</p>
            <h3 className="text-xl font-medium tracking-tight">{newsletter.name}</h3>
            <SubscribeForm />
            <p className="text-sm text-neutral-500">{newsletter.formHint}</p>
          </div>
          <div className="grid gap-3">
            {newsletter.recentIssues.slice(0, 3).map((issue) => (
              <article key={issue.title} className="rounded-2xl border border-neutral-200 bg-[rgba(255,255,255,0.8)] p-5 transition-shadow hover:shadow-sm">
                <p className="font-mono text-xs tracking-[0.12em] text-neutral-500">{toDateLabel(issue.date)}</p>
                <h4 className="mt-2 text-base font-medium">{issue.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{issue.summary}</p>
                <a href={isInternalHref(issue.url) ? withBasePath(issue.url) : issue.url} className="mt-3 inline-block text-sm underline underline-offset-4">
                  {newsletter.title}
                </a>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section title="声音与文字" intro={podcastsHosted.intro} kicker="04 / PODCAST & BOOK">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="grid gap-6 md:grid-cols-2">
            {podcastsHosted.items.map((podcast) => (
              <Card key={podcast.id} title={podcast.title} description={podcast.description} imageSrc={podcast.coverImage} imageAlt={podcast.title}>
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-neutral-500">Editorial Note</p>
                <div className="mt-2 border-t border-dashed border-neutral-300 pt-3">
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-neutral-600">
                    {Object.entries(podcast.links).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={isInternalHref(url) ? withBasePath(url) : url}
                        className="underline underline-offset-4"
                        target={url.startsWith("http") ? "_blank" : undefined}
                        rel={url.startsWith("http") ? "noreferrer" : undefined}
                      >
                        {platform}
                      </a>
                    ))}
                  </div>
                  <a
                    href={isInternalHref(podcast.latestEpisodeUrl) ? withBasePath(podcast.latestEpisodeUrl) : podcast.latestEpisodeUrl}
                    className="mt-4 inline-block text-sm underline underline-offset-4"
                  >
                    {siteData.ui.latestEpisodeLabel}
                  </a>
                </div>
              </Card>
            ))}
          </div>
          <div className="space-y-4">
            <p className="font-mono text-xs tracking-[0.14em] text-neutral-500">{book.relationshipNote}</p>
            <Card title={book.bookTitle} description={book.blurb} imageSrc={book.coverImage} imageAlt={book.bookTitle}>
              <p className="text-sm leading-relaxed text-neutral-600">{book.why}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                {book.buyLinks.map((link) => (
                  <a
                    key={link.label}
                    href={isInternalHref(link.url) ? withBasePath(link.url) : link.url}
                    className="underline underline-offset-4"
                    target={link.url.startsWith("http") ? "_blank" : undefined}
                    rel={link.url.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <Section title={projects.title} intro={projects.intro} kicker="05 / PROJECTS">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.items.map((project) => (
            <article key={project.name} className="rounded-2xl border border-neutral-200 p-5 transition-shadow hover:shadow-sm">
              <p className="text-xs text-neutral-500">{project.status}</p>
              <h3 className="mt-2 text-lg font-medium tracking-tight">{project.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{project.description}</p>
              <p className="mt-3 text-xs text-neutral-500">{project.tags.join(" · ")}</p>
              <a href={isInternalHref(project.link) ? withBasePath(project.link) : project.link} className="mt-3 inline-block text-sm underline underline-offset-4">
                {projects.title}
              </a>
            </article>
          ))}
        </div>
      </Section>

      <Section title={talk.title} intro={talk.intro} kicker="06 / TALK">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-neutral-200 p-5">
            <h3 className="text-base font-medium">{talk.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              {talk.whoItsFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-neutral-200 p-5">
            <h3 className="text-base font-medium">{talk.cta.label}</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              {talk.topics.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-neutral-200 p-5">
            <h3 className="text-base font-medium">{siteData.header.nav.find((item) => item.href === "/talk")?.label ?? talk.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              {talk.logistics.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a href={isInternalHref(talk.calendlyUrl) ? withBasePath(talk.calendlyUrl) : talk.calendlyUrl} className="mt-4 inline-block rounded-full border border-neutral-900 px-4 py-2 text-sm">
              {talk.cta.label}
            </a>
          </article>
        </div>
      </Section>

      <Section title={socials.title} kicker="07 / ELSEWHERE">
        <div className="grid gap-3 md:grid-cols-2">
          {socials.items.map((item) => (
            <a
              key={item.platform}
              href={isInternalHref(item.url) ? withBasePath(item.url) : item.url}
              className="rounded-2xl border border-neutral-200 p-5 transition-shadow hover:shadow-sm"
              target={item.url.startsWith("http") ? "_blank" : undefined}
              rel={item.url.startsWith("http") ? "noreferrer" : undefined}
            >
              <h3 className="text-base font-medium tracking-tight">{item.platform}</h3>
              <p className="mt-2 text-sm text-neutral-600">{item.description}</p>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
