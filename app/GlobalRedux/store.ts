"use client";

import { configureStore } from "@reduxjs/toolkit";

import episodeReducer from "./Feature/episode/episodeSlice";
import characterReducer from "./Feature/character/characterSlice";
import locationReducer from "./Feature/location/locationSlice";
import scrollReducer from "./Feature/scroll/scrollSLice";

export const store = configureStore({
  reducer: {
    scroll: scrollReducer,
    episode: episodeReducer,
    character: characterReducer,
    location: locationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
