import type { Metadata } from "next";
import Card from "@/components/Card";
import Section from "@/components/Section";
import { siteData } from "@/content/site";
import { isInternalHref, withBasePath } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "我主持的播客 | 穿堂风Simona",
};

const platformOrder = [
  { key: "spotify", label: "Spotify" },
  { key: "apple", label: "Apple Podcasts" },
  { key: "xiaoyuzhou", label: "小宇宙" },
  { key: "youtube", label: "YouTube" },
  { key: "rss", label: "RSS" },
] as const;

export default function PodcastsPage() {
  const { podcastsHosted } = siteData;

  return (
    <Section title={podcastsHosted.title} intro={podcastsHosted.intro}>
      <div className="grid gap-6 md:grid-cols-2">
        {podcastsHosted.items.map((podcast) => (
          <Card key={podcast.id} title={podcast.title} description={podcast.description} imageSrc={podcast.coverImage} imageAlt={podcast.title}>
              <div className="flex flex-wrap gap-2">
                {platformOrder.map(({ key, label }) => {
                  const url = podcast.platformLinks?.[key] ?? podcast.links[key];
                  if (!url) return null;
                  return (
                  <a
                    key={key}
                    href={isInternalHref(url) ? withBasePath(url) : url}
                    className="rounded-full border border-neutral-300 px-3 py-1 text-xs text-neutral-700 transition-colors hover:bg-neutral-100"
                    target={url.startsWith("http") ? "_blank" : undefined}
                    rel={url.startsWith("http") ? "noreferrer noopener" : undefined}
                  >
                    {label}
                  </a>
                  );
                })}
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-neutral-600">
                <span className="text-neutral-500">从这里开始</span>
                {podcast.startHere.slice(0, 3).map((item) => (
                  <a
                    key={item.title}
                    href={isInternalHref(item.url) ? withBasePath(item.url) : item.url}
                    className="underline underline-offset-4"
                    target={item.url.startsWith("http") ? "_blank" : undefined}
                    rel={item.url.startsWith("http") ? "noreferrer noopener" : undefined}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
              <a
                href={isInternalHref(podcast.latestEpisodeUrl) ? withBasePath(podcast.latestEpisodeUrl) : podcast.latestEpisodeUrl}
                className="inline-block text-sm underline underline-offset-4"
                target={podcast.latestEpisodeUrl.startsWith("http") ? "_blank" : undefined}
                rel={podcast.latestEpisodeUrl.startsWith("http") ? "noreferrer noopener" : undefined}
              >
                {siteData.ui.latestEpisodeLabel}
              </a>
            </Card>
          ))}
      </div>
    </Section>
  );
}
