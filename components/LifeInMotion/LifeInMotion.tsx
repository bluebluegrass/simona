import Section from "@/components/Section";
import { siteData } from "@/content/site";
import LifeInMotionCards from "./LifeInMotionCards";

export default function LifeInMotion() {
  const { lifeInMotion } = siteData;

  return (
    <Section title={`${lifeInMotion.title_cn} · ${lifeInMotion.title_en}`} intro={lifeInMotion.intro_cn}>
      <LifeInMotionCards stops={lifeInMotion.stops} />
    </Section>
  );
}
