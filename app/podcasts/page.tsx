import type { Metadata } from "next";
import Card from "@/components/Card";
import Section from "@/components/Section";
import { siteData } from "@/content/site";
import { isInternalHref, withBasePath } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "我主持的播客 | 穿堂风Simona",
};

export default function PodcastsPage() {
  const { podcastsHosted } = siteData;

  return (
    <Section title={podcastsHosted.title} intro={podcastsHosted.intro}>
      <div className="grid gap-6 md:grid-cols-2">
        {podcastsHosted.items.map((podcast) => (
          <Card key={podcast.id} title={podcast.title} description={podcast.description} imageSrc={podcast.coverImage} imageAlt={podcast.title}>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-neutral-600">
                {Object.entries(podcast.links).map(([platform, url]) => (
                  <a key={platform} href={isInternalHref(url) ? withBasePath(url) : url} className="underline underline-offset-4">
                    {platform}
                  </a>
                ))}
              </div>
              <a href={isInternalHref(podcast.latestEpisodeUrl) ? withBasePath(podcast.latestEpisodeUrl) : podcast.latestEpisodeUrl} className="inline-block text-sm underline underline-offset-4">
                {siteData.ui.latestEpisodeLabel}
              </a>
            </Card>
          ))}
      </div>
    </Section>
  );
}
