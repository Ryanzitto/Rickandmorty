"use client";
import Image from "next/image";
import SectionHome from "./components/SectionHome";
import Characters from "./components/SectionCharacters";
import Locations from "./components/SectionLocations";
import Episodes from "./components/SectionEpisodes";

export default function Home() {
  const teste = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <main className="h-[400vh] bg-neutral-800 overflow-x-hidden flex-col">
      <SectionHome />
      <Characters />
    </main>
  );
}
