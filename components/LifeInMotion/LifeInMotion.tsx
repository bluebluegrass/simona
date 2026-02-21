"use client";

import { useState } from "react";
import Section from "@/components/Section";
import { siteData } from "@/content/site";
import LifeInMotionCards from "./LifeInMotionCards";

export default function LifeInMotion() {
  const { lifeInMotion } = siteData;
  const [activeStopId, setActiveStopId] = useState("usa");

  return (
    <Section title={`${lifeInMotion.title_cn} · ${lifeInMotion.title_en}`} intro={lifeInMotion.intro_cn}>
      <LifeInMotionCards
        stops={lifeInMotion.stops}
        activeStopId={activeStopId}
        setActiveStopId={setActiveStopId}
        className="grid gap-3 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5"
      />
    </Section>
  );
}
