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
  const featuredIssue = newsletter.recentIssues[0];

  return (
    <Section title={newsletter.title} intro={newsletter.valueProp}>
      <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr]">
        <FeaturePanel
          kicker="Join The Journal"
          title={newsletter.name}
          description={newsletter.homepagePitch.proof}
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
          {featuredIssue ? (
            <FeaturePanel
              kicker="从这里开始"
              title={featuredIssue.title}
              description={featuredIssue.summary}
              className="bg-card"
              footer={
                <a
                  href={isInternalHref(featuredIssue.url) ? withBasePath(featuredIssue.url) : featuredIssue.url}
                  className="text-sm underline underline-offset-4"
                  target={featuredIssue.url.startsWith("http") ? "_blank" : undefined}
                  rel={featuredIssue.url.startsWith("http") ? "noreferrer noopener" : undefined}
                >
                  读最近一期
                </a>
              }
            >
              <p className="text-xs text-muted">{toDateLabel(featuredIssue.date)}</p>
            </FeaturePanel>
          ) : null}
          {newsletter.recentIssues.slice(1).map((issue) => (
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
