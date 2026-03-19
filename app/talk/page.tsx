import EditorialCard from "@/components/EditorialCard";
import FeaturePanel from "@/components/FeaturePanel";
import type { Metadata } from "next";
import Section from "@/components/Section";
import { siteData } from "@/content/site";
import { isInternalHref, withBasePath } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "和我聊聊 | 穿堂风Simona",
};

export default function TalkPage() {
  const { talk, trustStrip } = siteData;

  return (
    <Section title={talk.title} intro={talk.intro}>
      <div className="mb-6 grid gap-5 md:mb-8 lg:grid-cols-[1.1fr_0.9fr]">
        <FeaturePanel
          kicker="Conversation"
          title={talk.positioning.title}
          description={talk.positioning.description}
          className="bg-card"
          footer={
            <a
              href={isInternalHref(talk.calendlyUrl) ? withBasePath(talk.calendlyUrl) : talk.calendlyUrl}
              className="btn-primary inline-flex min-h-11 items-center justify-center px-4 py-2"
              target={talk.calendlyUrl.startsWith("http") ? "_blank" : undefined}
              rel={talk.calendlyUrl.startsWith("http") ? "noreferrer noopener" : undefined}
            >
              {talk.cta.label}
            </a>
          }
        />
        <EditorialCard title="聊完你会带走什么">
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
            {talk.outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </EditorialCard>
      </div>

      <FeaturePanel kicker="Trust" title={trustStrip.title} className="mb-6 md:mb-8">
        <ul className="grid gap-3 md:grid-cols-2">
          {trustStrip.items.map((item) => (
            <li key={item} className="rounded-xl border border-border bg-card px-4 py-3 text-sm leading-relaxed text-muted">
              {item}
            </li>
          ))}
        </ul>
      </FeaturePanel>

      <div className="mb-6 grid gap-5 md:mb-8 lg:grid-cols-2">

        <EditorialCard title="这次对话怎么进行">
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
            {talk.process.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </EditorialCard>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <EditorialCard title="这次聊天适合你，如果…">
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
            {talk.goodFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </EditorialCard>

        <EditorialCard title="这次聊天不太适合，如果…">
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
            {talk.notFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </EditorialCard>

        <EditorialCard title={siteData.header.nav.find((item) => item.href === "/talk")?.label ?? talk.title}>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
            {talk.logistics.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </EditorialCard>
      </div>
    </Section>
  );
}
