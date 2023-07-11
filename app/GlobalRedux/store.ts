"use client";

import { configureStore } from "@reduxjs/toolkit";

import episodeReducer from "./Feature/episode/episodeSlice";
import characterReducer from "./Feature/character/characterSlice";
import locationReducer from "./Feature/location/locationSlice";
import { combineReducers } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    episode: episodeReducer,
    character: characterReducer,
    location: locationReducer,
  },
});

const rootReducer = combineReducers({
  episode: episodeReducer,
  character: characterReducer,
  location: locationReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
