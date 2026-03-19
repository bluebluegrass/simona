import type { Metadata } from "next";
import Card from "@/components/Card";
import EditorialCard from "@/components/EditorialCard";
import EditorialList from "@/components/EditorialList";
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
  const { podcastsHosted, newsletter, book, projects, talk, socials, helpHub, homeExplore, workIndex } = siteData;
  const featuredBook = book.items[0];
  const featuredIssue = newsletter.recentIssues[0];

  return (
    <>
      <Hero />
      <section className="pb-8 md:pb-12">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <article className="border-t border-border pt-6 md:pt-8">
            <p className="editorial-kicker">Start Here</p>
            <h2 className="mt-3 text-2xl font-medium tracking-tight text-ink md:text-3xl">{helpHub.title}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted md:text-base">{helpHub.intro}</p>

            <EditorialList items={helpHub.items} className="mt-8" />
          </article>
        </div>
      </section>

      <LifeInMotion />

      {featuredIssue ? (
        <section className="pb-8 md:pb-12">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <article className="border-t border-border pt-6 md:pt-8">
              <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                <div>
                  <p className="editorial-kicker">Newsletter</p>
                  <h2 className="mt-3 text-2xl font-medium tracking-tight text-ink md:text-3xl">{newsletter.homepagePitch.title}</h2>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted md:text-base">{newsletter.homepagePitch.description}</p>
                  <p className="mt-4 text-sm text-ink">{newsletter.homepagePitch.proof}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <a href={withBasePath("/newsletter")} className="btn-newsletter px-4 py-2">
                      {newsletter.homepagePitch.ctaLabel}
                    </a>
                    <a
                      href={isInternalHref(featuredIssue.url) ? withBasePath(featuredIssue.url) : featuredIssue.url}
                      className="text-sm underline underline-offset-4"
                      target={featuredIssue.url.startsWith("http") ? "_blank" : undefined}
                      rel={featuredIssue.url.startsWith("http") ? "noreferrer noopener" : undefined}
                    >
                      {newsletter.homepagePitch.latestLabel}
                    </a>
                  </div>
                </div>
                <EditorialCard title={featuredIssue.title} className="hover:shadow-none">
                  <p className="text-xs text-muted">{toDateLabel(featuredIssue.date)}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">
                    {featuredIssue.summary}
                  </p>
                </EditorialCard>
              </div>
            </article>
          </div>
        </section>
      ) : null}

      <section className="pb-8 md:pb-12">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex flex-wrap gap-2.5">
            {homeExplore.items.map((item) => (
              <a
                key={`${item.label}-${item.href}`}
                href={withBasePath(item.href)}
                className="rounded-full border border-border bg-surface px-4 py-2.5 text-sm text-ink no-underline transition-colors hover:bg-card hover:text-ink hover:no-underline"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <Section title={newsletter.title} intro={newsletter.valueProp} kicker="03 / NEWSLETTER">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4 rounded-2xl border border-border bg-surface p-5">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">Join The Journal</p>
            <h3 className="text-xl font-medium tracking-tight">{newsletter.name}</h3>
            <SubscribeForm />
            <p className="text-sm text-muted">{newsletter.formHint}</p>
          </div>
          <div className="grid gap-3">
            {newsletter.recentIssues.slice(0, 3).map((issue) => (
              <article key={issue.title} className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-sm">
                <p className="font-mono text-xs tracking-[0.12em] text-muted">{toDateLabel(issue.date)}</p>
                <h4 className="mt-2 text-base font-medium">{issue.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{issue.summary}</p>
                <a
                  href={isInternalHref(issue.url) ? withBasePath(issue.url) : issue.url}
                  className="mt-3 inline-block text-sm underline underline-offset-4"
                  target={issue.url.startsWith("http") ? "_blank" : undefined}
                  rel={issue.url.startsWith("http") ? "noreferrer noopener" : undefined}
                >
                  {newsletter.title}
                </a>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section title="声音与文字" intro={podcastsHosted.intro} kicker="04 / PODCAST & BOOK">
        <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
          <div className="grid gap-6 md:grid-cols-2">
            {podcastsHosted.items.map((podcast) => (
              <Card key={podcast.id} title={podcast.title} description={podcast.description} imageSrc={podcast.coverImage} imageAlt={podcast.title}>
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">Editorial Note</p>
                <div className="mt-2 border-t border-dashed border-border pt-3">
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
                    {Object.entries(podcast.links).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={isInternalHref(url) ? withBasePath(url) : url}
                        className="underline underline-offset-4"
                        target={url.startsWith("http") ? "_blank" : undefined}
                        rel={url.startsWith("http") ? "noreferrer noopener" : undefined}
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
            <EditorialCard
              kicker="Book highlight"
              title="《我为什么（不）想成为妈妈》"
              description="根据《噢妈妈》的部分采访整理成文稿"
            >
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">2025-02</span>
                <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">168,311字</span>
                <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">纪实</span>
              </div>
              <a
                href={isInternalHref(featuredBook.url) ? withBasePath(featuredBook.url) : featuredBook.url}
                className="btn-primary mt-5 inline-block px-4 py-2"
                target={featuredBook.url.startsWith("http") ? "_blank" : undefined}
                rel={featuredBook.url.startsWith("http") ? "noreferrer noopener" : undefined}
              >
                去微信读书阅读
              </a>
            </EditorialCard>
          ) : null}
        </div>
      </Section>

      <Section title={projects.title} intro={projects.intro} kicker="05 / PROJECTS">
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

      <Section title={workIndex.title} intro={workIndex.intro} kicker="06 / ALL WORK">
        <EditorialList
          items={workIndex.items.map((item) => ({
            title: item.name,
            description: item.summary,
            href: item.href,
            ctaLabel: item.ctaLabel,
          }))}
        />
      </Section>

      <Section title={talk.title} intro={talk.intro} kicker="07 / TALK">
        <div className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-2xl border border-border bg-card p-5">
            <h3 className="text-base font-medium tracking-tight">{talk.positioning.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{talk.positioning.description}</p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-5">
            <h3 className="text-base font-medium tracking-tight">聊完你会带走什么</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {talk.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-border bg-card p-5">
            <h3 className="text-base font-medium tracking-tight">{siteData.header.nav.find((item) => item.href === "/talk")?.label ?? talk.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {talk.process.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a
              href={isInternalHref(talk.calendlyUrl) ? withBasePath(talk.calendlyUrl) : talk.calendlyUrl}
              className="btn-primary mt-4 inline-block px-4 py-2"
              target={talk.calendlyUrl.startsWith("http") ? "_blank" : undefined}
              rel={talk.calendlyUrl.startsWith("http") ? "noreferrer noopener" : undefined}
            >
              {talk.cta.label}
            </a>
          </article>
        </div>
      </Section>

      <Section title={socials.title} kicker="08 / ELSEWHERE">
        <div className="grid gap-3 md:grid-cols-2">
          {socials.items.map((item) => (
            <a
              key={item.platform}
              href={isInternalHref(item.url) ? withBasePath(item.url) : item.url}
              className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-sm"
              target={item.url.startsWith("http") ? "_blank" : undefined}
              rel={item.url.startsWith("http") ? "noreferrer noopener" : undefined}
            >
              <h3 className="text-base font-medium tracking-tight">{item.platform}</h3>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
