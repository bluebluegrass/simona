import Link from "next/link";
import { siteData } from "@/content/site";

export default function Hero() {
  const { hero } = siteData;

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-5xl">
          <p className="editorial-kicker">{siteData.meta.siteName}</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-medium tracking-[-0.03em] text-ink md:text-7xl lg:text-[5.25rem]">
            {hero.titleLines.map((line) => (
              <span key={line} className="block leading-[0.95]">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted md:text-base">{hero.subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {hero.proofBadges.map((badge) => (
              <span key={badge} className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted">
                {badge}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={hero.primaryCta.href} className="btn-newsletter">
              {hero.primaryCta.label}
            </Link>
            <Link href={hero.secondaryCta.href} className="btn-secondary">
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
