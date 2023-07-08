"use client";

import { createSlice } from "@reduxjs/toolkit/";

export interface dataState {
  data: data | null;
}

interface data {
  scrollTo: string | null;
}

const initialState: data = {
  scrollTo: null,
};

export const scrollSlice = createSlice({
  name: "scroll",
  initialState,
  reducers: {
    scrollToTop: (state) => {
      state.scrollTo = "TOP";
    },
    scrollReset: (state) => {
      state.scrollTo = null;
    },
  },
});

export const { scrollToTop, scrollReset } = scrollSlice.actions;
export default scrollSlice.reducer;
