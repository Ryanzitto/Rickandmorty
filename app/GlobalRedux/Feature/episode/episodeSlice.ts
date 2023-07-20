"use client";

import { createSlice } from "@reduxjs/toolkit/";

export interface dataState {
  data: data | null;
  info: info | null;
  erro: error | null | any;
}
interface data {
  map(
    arg0: (item: any) => import("react").JSX.Element
  ): import("react").ReactNode;
  air_date: string;
  episode: string;
  name: string;
  url: string;
}
interface info {
  next: string | null;
  prev: string | null;
}
interface error {
  erro: string | null | any;
}

const initialState: dataState = {
  data: null,
  info: null,
  erro: null,
};

export const episodeSlice = createSlice({
  name: "episode",
  initialState,
  reducers: {
    saveData: (state, action) => {
      state.data = action.payload;
      console.log(state.data);
    },
    saveInfo: (state, action) => {
      state.info = action.payload;
    },
    saveErro: (state, action) => {
      state.erro = action.payload;
    },
  },
});

export const { saveData, saveInfo, saveErro } = episodeSlice.actions;
export default episodeSlice.reducer;
