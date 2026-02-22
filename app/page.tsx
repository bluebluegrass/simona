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
  const featuredBook = book.items[0];
  const featuredIssue = newsletter.recentIssues[0];

  return (
    <>
      <Hero />
      {featuredIssue ? (
        <section className="pb-6 md:pb-10">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <article className="rounded-2xl border border-border bg-surface p-5 md:p-6">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-neutral-500">Newsletter</p>
              <h2 className="mt-3 text-xl font-medium tracking-tight text-neutral-900 md:text-2xl">{newsletter.name}</h2>
              <p className="mt-2 text-sm text-neutral-600">每个工作日精选播客｜双周 3000 字长信</p>

              <div className="mt-4 border-t border-border pt-4">
                <p className="text-xs text-neutral-500">{toDateLabel(featuredIssue.date)}</p>
                <h3 className="mt-2 text-base font-medium text-neutral-900 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:1] overflow-hidden">
                  {featuredIssue.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden">
                  {featuredIssue.summary}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href={withBasePath("/newsletter")}
                  className="rounded-full border border-neutral-900 bg-neutral-900 px-4 py-2 text-sm text-white transition-colors hover:bg-neutral-800"
                >
                  订阅
                </a>
                <a
                  href={isInternalHref(featuredIssue.url) ? withBasePath(featuredIssue.url) : featuredIssue.url}
                  className="text-sm underline underline-offset-4"
                  target={featuredIssue.url.startsWith("http") ? "_blank" : undefined}
                  rel={featuredIssue.url.startsWith("http") ? "noreferrer noopener" : undefined}
                >
                  读最近一期
                </a>
              </div>
            </article>
          </div>
        </section>
      ) : null}
      <LifeInMotion />

      <Section title={newsletter.title} intro={newsletter.valueProp} kicker="03 / NEWSLETTER">
        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4 rounded-2xl border border-border bg-surface p-5">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-neutral-500">Join The Journal</p>
            <h3 className="text-xl font-medium tracking-tight">{newsletter.name}</h3>
            <SubscribeForm />
            <p className="text-sm text-neutral-500">{newsletter.formHint}</p>
          </div>
          <div className="grid gap-3">
            {newsletter.recentIssues.slice(0, 3).map((issue) => (
              <article key={issue.title} className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-sm">
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
          {featuredBook ? (
            <article className="rounded-2xl border border-neutral-200 bg-[rgba(255,255,255,0.86)] p-5">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-neutral-500">Book highlight</p>
              <h3 className="mt-3 text-xl font-medium tracking-tight text-neutral-900">《我为什么（不）想成为妈妈》</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">根据《噢妈妈》的部分采访整理成文稿</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-neutral-300 bg-white px-3 py-1 text-xs text-neutral-600">2025-02</span>
                <span className="rounded-full border border-neutral-300 bg-white px-3 py-1 text-xs text-neutral-600">168,311字</span>
                <span className="rounded-full border border-neutral-300 bg-white px-3 py-1 text-xs text-neutral-600">纪实</span>
              </div>
              <a
                href={isInternalHref(featuredBook.url) ? withBasePath(featuredBook.url) : featuredBook.url}
                className="mt-5 inline-block rounded-full border border-neutral-900 bg-neutral-900 px-4 py-2 text-sm text-white transition-colors hover:bg-neutral-800"
                target={featuredBook.url.startsWith("http") ? "_blank" : undefined}
                rel={featuredBook.url.startsWith("http") ? "noreferrer" : undefined}
              >
                去微信读书阅读
              </a>
            </article>
          ) : null}
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
