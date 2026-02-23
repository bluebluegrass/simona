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
      <article className="mb-6 rounded-2xl border border-border bg-surface p-5 md:mb-8 md:p-6">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">Trust</p>
        <h2 className="mt-3 text-xl font-medium tracking-tight text-ink md:text-2xl">{trustStrip.title}</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {trustStrip.items.map((item) => (
            <li key={item} className="rounded-xl border border-border bg-card px-4 py-3 text-sm leading-relaxed text-muted">
              {item}
            </li>
          ))}
        </ul>
      </article>

      <div className="grid gap-5 md:grid-cols-3">
        <article className="rounded-2xl border border-border bg-card p-5">
          <h3 className="text-base font-medium tracking-tight">这次聊天适合你，如果…</h3>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
            {talk.goodFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-border bg-card p-5">
          <h3 className="text-base font-medium tracking-tight">这次聊天不太适合，如果…</h3>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
            {talk.notFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-border bg-card p-5">
          <h3 className="text-base font-medium tracking-tight">{siteData.header.nav.find((item) => item.href === "/talk")?.label ?? talk.title}</h3>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
            {talk.logistics.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a
            href={isInternalHref(talk.calendlyUrl) ? withBasePath(talk.calendlyUrl) : talk.calendlyUrl}
            className="btn-primary mt-5 inline-block px-4 py-2"
            target={talk.calendlyUrl.startsWith("http") ? "_blank" : undefined}
            rel={talk.calendlyUrl.startsWith("http") ? "noreferrer noopener" : undefined}
          >
            {talk.cta.label}
          </a>
        </article>
      </div>
    </Section>
  );
}
