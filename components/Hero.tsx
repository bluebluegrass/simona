import Link from "next/link";
import { siteData } from "@/content/site";

export default function Hero() {
  const { hero } = siteData;

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="editorial-panel grain-overlay px-6 py-8 md:px-10 md:py-12">
          <div
            aria-hidden="true"
            className="absolute -right-12 top-8 h-32 w-32 rounded-full border border-podluck/40 bg-podluck-soft md:h-48 md:w-48"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-20 w-40 rounded-tr-full border-t border-r border-accent/20 bg-accent-soft/70 md:h-28 md:w-56"
          />

          <div className="relative grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-end">
            <div>
              <p className="editorial-kicker">{siteData.meta.siteName}</p>
              <h1 className="mt-6 max-w-4xl text-5xl font-medium tracking-[-0.03em] text-ink md:text-7xl lg:text-[5.5rem]">
                {hero.titleLines.map((line) => (
                  <span key={line} className="block leading-[0.95]">
                    {line}
                  </span>
                ))}
              </h1>
              <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted md:text-base">{hero.subtitle}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {hero.proofBadges.map((badge) => (
                  <span key={badge} className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted shadow-sm">
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10 border-t border-border pt-5 md:border-l md:border-t-0 md:pl-6 md:pt-0">
              <p className="editorial-kicker">Current Focus</p>
              <p className="mt-3 text-sm leading-relaxed text-ink md:text-base">
                播客推荐、长期写作、还有把迁移与重建讲清楚。
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={hero.primaryCta.href} className="btn-newsletter">
                  {hero.primaryCta.label}
                </Link>
                <Link href={hero.secondaryCta.href} className="btn-secondary">
                  {hero.secondaryCta.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
