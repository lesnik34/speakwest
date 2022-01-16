import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  title: "",
  info: "",
  description: "",
  image: {
    url: "",
  },
  url: "",
  color: "",
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    setPopup: (state, action) => ({
      ...state,
      ...action.payload.program,
      color: action.payload.color,
    }),
    clearPopup: (state) => ({ ...initialState }),
  },
});
export const { setPopup, clearPopup } = popupSlice.actions;

export default popupSlice;
