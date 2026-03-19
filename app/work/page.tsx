import type { Metadata } from "next";
import EditorialCard from "@/components/EditorialCard";
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
      <div className="grid gap-4 lg:grid-cols-2">
        {workIndex.items.map((item) => (
          <EditorialCard key={item.name} title={item.name} description={item.summary} href={item.href} ctaLabel={item.ctaLabel} />
        ))}
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        {podcastsHosted.items.map((podcast) => (
          <EditorialCard
            key={podcast.id}
            kicker="Podcast"
            title={podcast.title}
            description={podcast.description}
            href={podcast.latestEpisodeUrl}
            ctaLabel={siteData.ui.latestEpisodeLabel}
          />
        ))}
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <EditorialCard
          kicker="Newsletter"
          title={newsletter.name}
          description={newsletter.valueProp}
          href="/newsletter"
          ctaLabel="订阅 Newsletter"
        />

        {featuredBook ? (
          <EditorialCard
            kicker="Book"
            title={featuredBook.title}
            description={featuredBook.subtitle}
            href={featuredBook.url}
            ctaLabel="去微信读书阅读"
          />
        ) : null}
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        {projects.items.map((project) => (
          <EditorialCard
            key={project.name}
            kicker="Project"
            title={project.name}
            description={project.description}
            href={project.link}
            ctaLabel="查看项目"
          />
        ))}
      </div>
    </Section>
  );
}
