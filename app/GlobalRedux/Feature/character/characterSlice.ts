"use client";

import { createSlice } from "@reduxjs/toolkit/";

export interface dataState {
  data: data | null;
  info: info | null;
  erro: any;
  favorites: any;
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
  erro: string | null | any;
}

const initialState: dataState = {
  data: null,
  info: null,
  erro: null,
  favorites: null,
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    saveData: (state, action) => {
      state.data = action.payload;
    },
    saveInfo: (state, action) => {
      state.info = action.payload;
    },
    saveErro: (state, action) => {
      state.erro = action.payload;
    },
    addToFavorite: (state, action) => {
      if (state.favorites === null) {
        state.favorites = [action.payload];
      } else {
        const existingItem = state.favorites.find(
          (item: data) => item.name === action.payload.name
        );
        if (!existingItem) {
          state.favorites = [...state.favorites, action.payload];
        }
      }
    },
    removeFromFavorite: (state, action) => {
      if (state.favorites !== null) {
        state.favorites = state.favorites.filter(
          (item: data) => item.name !== action.payload.name
        );
      }
    },
  },
});

export const {
  saveData,
  saveInfo,
  saveErro,
  addToFavorite,
  removeFromFavorite,
} = characterSlice.actions;
export default characterSlice.reducer;
