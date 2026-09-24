"use client";
import { useRef } from "react";
import type { RefObject } from "react";
import HeroBanner from "../../organisms/HeroBanner";
import TeamInfo from "./TeamInfo";
import LifeOrganisation from "./LifeOrganisation";
import OpenPositions from "./OpenPositions";
import FutureColleagues from "./FutureColleagues";
import PositionsPop from "@/components/frontendcomponent/molecules/PositionsPop";
import "@/uploads/sass/career/career.css";

export default function CareerPage() {
  const positionsSec = useRef<HTMLDivElement>(null);
  const activeScroll = <T extends HTMLElement>(ref: RefObject<T | null>) => {
    if (ref.current) {
      const top = ref.current.offsetTop - 70;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };
  return (
    <main>
      <HeroBanner
        classname="career_hero"
        heading="Shaping Tomorrow’s Energy & Infrastructure."
        desc="Join our journey to power the future of the coal and mining industry through innovation, operational excellence, and sustainable growth. We are building strong foundations that drive energy, infrastructure, and long-term industrial progress across the nation."
        mediaSrc="/images/career/career_banner.jpg"
        onClick={() => activeScroll(positionsSec)}
      />
      <TeamInfo />
      <LifeOrganisation />
      <OpenPositions ref={positionsSec} />
      <FutureColleagues />
      <PositionsPop />
    </main>
  );
}
