import Link from "next/link";
import Badge from "@/components/Badge";
import { siteData } from "@/content/site";

export default function Hero() {
  const { hero } = siteData;

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_320px] lg:items-end lg:gap-12">
          <div className="max-w-5xl">
            <p className="editorial-kicker">{siteData.meta.siteName}</p>
            <h1 className="mt-5 max-w-4xl text-[2.9rem] font-medium tracking-[-0.03em] text-ink sm:text-[3.5rem] md:text-7xl lg:text-[5.25rem]">
              {hero.titleLines.map((line) => (
                <span key={line} className="block leading-[0.95]">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/85">{hero.intro}</p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">{hero.subtitle}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {hero.proofBadges.map((badge) => (
                <Badge key={badge}>{badge}</Badge>
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

          <div className="editorial-panel grain-overlay bg-card/90">
            <div className="p-5 md:p-6">
              <p className="editorial-kicker">Right Now</p>
              <h2 className="mt-3 text-xl font-medium tracking-tight text-ink">{hero.currentTitle}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">{hero.currentNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
