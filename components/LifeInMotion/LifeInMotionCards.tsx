import { KeyboardEvent } from "react";
import { siteData } from "@/content/site";
import { cx } from "@/lib/cx";

type Stop = (typeof siteData.lifeInMotion.stops)[number];

type LifeInMotionCardsProps = {
  stops: readonly Stop[];
  activeStopId: string;
  setActiveStopId: (id: string) => void;
  className?: string;
};

export default function LifeInMotionCards({ stops, activeStopId, setActiveStopId, className }: LifeInMotionCardsProps) {
  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, id: string) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveStopId(id);
    }
  }

  return (
    <div className={className ?? "grid gap-3"}>
      {stops.map((stop) => {
        const isActive = stop.id === activeStopId;

        return (
          <button
            key={stop.id}
            type="button"
            onMouseEnter={() => setActiveStopId(stop.id)}
            onClick={() => setActiveStopId(stop.id)}
            onKeyDown={(event) => onKeyDown(event, stop.id)}
            className={cx(
              "rounded-2xl border p-5 text-left transition-colors",
              isActive ? "border-neutral-500 bg-[rgba(250,250,248,0.95)]" : "border-neutral-200 bg-[rgba(255,255,255,0.85)]",
            )}
          >
            <p className="text-xs text-neutral-500">{[stop.country_cn, stop.city_cn].filter(Boolean).join(" · ")}</p>
            <h3 className="mt-2 text-lg font-medium tracking-tight">{stop.title_cn}</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">{stop.body_cn}</p>
          </button>
        );
      })}
    </div>
  );
}
