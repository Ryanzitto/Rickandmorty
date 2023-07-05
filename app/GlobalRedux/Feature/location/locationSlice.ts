"use client";

import { createSlice } from "@reduxjs/toolkit/";

export interface dataState {
  data: data | null;
  info: info | null;
  erro: error | null;
  favorites: null | Array<data>;
  url: string | null;
}
interface data {
  map(
    arg0: (item: any) => import("react").JSX.Element
  ): import("react").ReactNode;
  name: string;
  image: string;
  species: string;
  status: string;
  type: string;
  location: {
    name: string;
  };
  origin: {
    name: string;
  };
  gender: string;
}
interface info {
  next: string | null;
  prev: string | null;
}
interface error {
  erro: string | null;
}

const initialState: dataState = {
  data: null,
  info: null,
  erro: null,
  favorites: null,
  url: null,
};

export const locationSlice = createSlice({
  name: "location",
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
    saveUrl: (state, action) => {
      state.url = action.payload;
    },
  },
});

export const { saveData, saveInfo, saveErro, saveUrl } = locationSlice.actions;
export default locationSlice.reducer;
