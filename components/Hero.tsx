import Link from "next/link";
import { siteData } from "@/content/site";

export default function Hero() {
  const { hero } = siteData;

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-4xl border-l border-border pl-5 md:pl-8">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">{siteData.meta.siteName}</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-medium tracking-tight text-ink md:text-6xl">
            {hero.titleLines.map((line) => (
              <span key={line} className="block leading-tight md:leading-[1.12]">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-7 max-w-2xl text-sm leading-relaxed text-muted md:text-base">{hero.subtitle}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {hero.proofBadges.map((badge) => (
              <span key={badge} className="rounded-full border border-border bg-accent-soft px-3 py-1 text-xs text-muted">
                {badge}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href={hero.primaryCta.href}
            className="rounded-full border border-podluck bg-podluck px-5 py-2.5 text-sm text-white transition-colors hover:bg-podluck-hover"
          >
            {hero.primaryCta.label}
          </Link>
          <Link
            href={hero.secondaryCta.href}
            className="rounded-full border border-border bg-card px-5 py-2.5 text-sm text-ink transition-colors hover:bg-surface"
          >
            {hero.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
