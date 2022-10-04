import { createSlice } from "@reduxjs/toolkit";
import { IThemeState } from "../../common/interfaces/IThemeState";

const initialState: IThemeState = {
  theme: "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state: IThemeState) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
