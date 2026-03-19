import EditorialCard from "@/components/EditorialCard";
import FeaturePanel from "@/components/FeaturePanel";
import type { Metadata } from "next";
import GhostSignupEmbed from "@/components/GhostSignupEmbed";
import Section from "@/components/Section";
import SubscribeForm from "@/components/SubscribeForm";
import { siteData } from "@/content/site";
import { isInternalHref, withBasePath } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "播客推荐 Newsletter | 穿堂风Simona",
};

function toDateLabel(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit" });
}

export default function NewsletterPage() {
  const { newsletter } = siteData;

  return (
    <Section title={newsletter.title} intro={newsletter.valueProp}>
      <div className="grid gap-8 md:grid-cols-[1fr_1.1fr]">
        <FeaturePanel
          kicker="Join The Journal"
          title={newsletter.name}
          className="bg-podluck-soft shadow-sm"
          footer={<p className="text-sm text-muted">{newsletter.formHint}</p>}
        >
          <div className="space-y-5">
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <GhostSignupEmbed />
            </div>
            <p className="text-center text-xs tracking-[0.08em] text-muted">或跳转订阅页</p>
            <SubscribeForm />
          </div>
        </FeaturePanel>

        <div className="grid gap-3">
          {newsletter.recentIssues.map((issue) => (
            <EditorialCard key={issue.title} title={issue.title} href={issue.url} ctaLabel={newsletter.title}>
              <p className="text-xs text-muted">{toDateLabel(issue.date)}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{issue.summary}</p>
            </EditorialCard>
          ))}
        </div>
      </div>
    </Section>
  );
}
