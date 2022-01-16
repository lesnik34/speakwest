import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isBurgerActive: false,
  isDesktop: false,
  isMobile: false,
  isTablet: false,
  isRetina: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleBurger: (state) => {
      state.isBurgerActive = !state.isBurgerActive;
    },
    setBurger: (state, action) => {
      state.isBurgerActive = action.payload;
    },
    setDesktop: (state) => ({
      ...state,
      isDesktop: true,
      isTablet: false,
      isMobile: false,
    }),
    setTablet: (state) => ({
      ...state,
      isDesktop: false,
      isTablet: true,
      isMobile: false,
    }),
    setMobile: (state) => ({
      ...state,
      isDesktop: false,
      isTablet: false,
      isMobile: true,
    }),
    setRetina: (state, action) => {
      state.isRetina = action.payload;
    },
  },
});
export const {
  toggleBurger,
  setBurger,
  setDesktop,
  setTablet,
  setMobile,
  setRetina,
} = globalSlice.actions;

export default globalSlice;
