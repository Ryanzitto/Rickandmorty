"use client";
import SectionHome from "./components/SectionHome";
import Characters from "./components/SectionCharacters";
import Locations from "./components/SectionLocations";
import Episodes from "./components/SectionEpisodes";
import Footer from "./components/FooterApp";

import getReduxStore from "./configureStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function Home() {
  const { store, persistor } = getReduxStore();
  return (
    <main className="bg-zinc-100 dark:bg-neutral-800 overflow-x-hidden flex-col">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SectionHome />
          <Characters />
          <Locations />
          <Episodes />
          <Footer />
        </PersistGate>
      </Provider>
    </main>
  );
}
