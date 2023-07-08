"use client";
import SectionHome from "./components/SectionHome";
import Characters from "./components/SectionCharacters";
import Locations from "./components/SectionLocations";
import Episodes from "./components/SectionEpisodes";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./GlobalRedux/store";
import { scrollReset } from "./GlobalRedux/Feature/scroll/scrollSLice";

export default function Home() {
  const dispatch = useDispatch();
  const scroll = useSelector((state: RootState) => state.scroll.scrollTo);

  useEffect(() => {
    if (scroll === "TOP") {
      scrollTo({
        top: 0,
        behavior: "smooth",
      });
      dispatch(scrollReset());
    }
  }, [scroll]);

  return (
    <main className="bg-zinc-100 dark:bg-neutral-800 overflow-x-hidden flex-col">
      <SectionHome />
      <Characters />
      <Locations />
      <Episodes />
    </main>
  );
}
