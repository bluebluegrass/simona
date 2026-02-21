import type { Metadata } from "next";
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
        <div className="space-y-4 rounded-2xl border border-neutral-200 p-6">
          <h2 className="text-xl font-medium tracking-tight">{newsletter.name}</h2>
          <SubscribeForm />
          <p className="text-sm text-neutral-500">{newsletter.formHint}</p>
        </div>

        <div className="grid gap-3">
          {newsletter.recentIssues.map((issue) => (
            <article key={issue.title} className="rounded-2xl border border-neutral-200 p-5 transition-shadow hover:shadow-sm">
              <p className="text-xs text-neutral-500">{toDateLabel(issue.date)}</p>
              <h3 className="mt-2 text-base font-medium">{issue.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{issue.summary}</p>
              <a
                href={isInternalHref(issue.url) ? withBasePath(issue.url) : issue.url}
                className="mt-3 inline-block text-sm underline underline-offset-4"
                target={issue.url.startsWith("http") ? "_blank" : undefined}
                rel={issue.url.startsWith("http") ? "noreferrer" : undefined}
              >
                {newsletter.title}
              </a>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
