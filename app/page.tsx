"use client";
import SectionHome from "./components/SectionHome";
import Characters from "./components/SectionCharacters";
import Locations from "./components/SectionLocations";
import Episodes from "./components/SectionEpisode";
import Footer from "./components/FooterApp";
import getReduxStore from "./configureStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { useTheme } from "next-themes";

export default function Home() {
  const { store, persistor } = getReduxStore();
  const { theme, setTheme } = useTheme();

  return (
    <main className="bg-zinc-100 dark:bg-neutral-800 overflow-x-hidden flex-col">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SectionHome />
          {theme === "dark" && (
            <button
              className="tracking-wide border-2 border-white px-2"
              onClick={() => setTheme("light")}
            >
              LIGHT
            </button>
          )}
          {theme === "light" && (
            <button
              className="text-zinc-700 tracking-wider border-2 border-zinc-700 px-2"
              onClick={() => setTheme("dark")}
            >
              DARK
            </button>
          )}
          <Characters />
          <Locations />
          <Episodes />
          <Footer />
        </PersistGate>
      </Provider>
    </main>
  );
}
