import Link from "next/link";
import { siteData } from "@/content/site";

export default function Hero() {
  const { hero } = siteData;

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-4xl border-l border-neutral-300 pl-5 md:pl-8">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-neutral-500">{siteData.meta.siteName}</p>
          <h1 className="mt-5 text-4xl font-medium tracking-tight text-neutral-900 md:text-6xl">
            {hero.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-7 text-sm leading-relaxed text-neutral-500 md:text-base">{hero.subtitle}</p>
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href={hero.primaryCta.href}
            className="rounded-full border border-neutral-900 bg-neutral-900 px-5 py-2.5 text-sm text-white transition-colors hover:bg-neutral-800"
          >
            {hero.primaryCta.label}
          </Link>
          <Link
            href={hero.secondaryCta.href}
            className="rounded-full border border-neutral-300 bg-[rgba(255,255,255,0.5)] px-5 py-2.5 text-sm transition-colors hover:bg-neutral-100"
          >
            {hero.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
