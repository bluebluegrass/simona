import { siteData } from "@/content/site";

type Stop = (typeof siteData.lifeInMotion.stops)[number];

type LifeInMotionCardsProps = {
  stops: readonly Stop[];
};

export default function LifeInMotionCards({ stops }: LifeInMotionCardsProps) {
  return (
    <ol className="relative space-y-4 md:space-y-5" aria-label="Life in motion timeline">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[1.12rem] top-0 hidden h-full w-px bg-neutral-300 md:block"
      />

      {stops.map((stop, index) => {
        const number = String(index + 1).padStart(2, "0");

        return (
          <li key={stop.id} className="relative md:grid md:grid-cols-[2.25rem_1fr] md:items-start md:gap-4">
            <div className="hidden md:block" aria-hidden="true">
              <div className="relative z-10 mt-2 flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 bg-[rgba(248,248,247,0.95)] text-[11px] font-medium tracking-[0.08em] text-neutral-600">
                {number}
              </div>
            </div>

            <article
              tabIndex={0}
              className="rounded-2xl border border-neutral-200 bg-[rgba(255,255,255,0.86)] p-5 transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2"
            >
              <div className="flex items-center gap-2 md:hidden">
                <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full border border-neutral-300 px-2 text-[11px] font-medium tracking-[0.08em] text-neutral-600">
                  {number}
                </span>
                <p className="text-xs text-neutral-500">{[stop.country_cn, stop.city_cn].filter(Boolean).join(" · ")}</p>
              </div>

              <p className="hidden text-xs text-neutral-500 md:block">{[stop.country_cn, stop.city_cn].filter(Boolean).join(" · ")}</p>
              <h3 className="mt-2 text-lg font-medium tracking-tight text-neutral-900">{stop.title_cn}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{stop.body_cn}</p>
            </article>
          </li>
        );
      })}
    </ol>
  );
}
