import { siteData } from "@/content/site";

type Stop = (typeof siteData.lifeInMotion.stops)[number];

type LifeInMotionMapProps = {
  stops: readonly Stop[];
  activeStopId: string;
  setActiveStopId: (id: string) => void;
};

export default function LifeInMotionMap({ stops, activeStopId, setActiveStopId }: LifeInMotionMapProps) {
  const activeIndex = Math.max(
    0,
    stops.findIndex((stop) => stop.id === activeStopId),
  );

  const fullPoints = stops.map((stop) => `${stop.x},${stop.y}`).join(" ");
  const activePoints = stops
    .slice(0, activeIndex + 1)
    .map((stop) => `${stop.x},${stop.y}`)
    .join(" ");

  return (
    <div className="rounded-2xl border border-border bg-surface p-4 md:p-6">
      <svg viewBox="0 0 100 70" className="h-auto w-full" role="img" aria-label={siteData.lifeInMotion.title_en}>
        <polyline points={fullPoints} fill="none" stroke="currentColor" strokeWidth="1.4" className="text-border" />
        <polyline
          points={activePoints}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-accent"
        />
        {stops.map((stop) => {
          const isActive = stop.id === activeStopId;
          return (
            <circle
              key={stop.id}
              cx={stop.x}
              cy={stop.y}
              r={isActive ? 4 : 2.5}
              className={isActive ? "fill-accent" : "fill-muted"}
              style={{ opacity: isActive ? 1 : 0.35, cursor: "pointer" }}
              onMouseEnter={() => setActiveStopId(stop.id)}
              onClick={() => setActiveStopId(stop.id)}
              aria-label={`${stop.country_cn}${stop.city_cn ? ` ${stop.city_cn}` : ""}`}
            />
          );
        })}
      </svg>
    </div>
  );
}
