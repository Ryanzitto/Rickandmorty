"use client";

import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./Feature/counter/counterSlice";
import characterReducer from "./Feature/character/characterSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    character: characterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
