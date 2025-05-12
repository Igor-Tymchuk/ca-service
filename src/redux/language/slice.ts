import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import i18n from "../../i18n.ts";

interface LanguageState {
  lang: "en" | "ua";
  isAnimating: boolean;
}

const initialState: LanguageState = {
  lang: "en",
  isAnimating: false,
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<"ua" | "en">) => {
      state.lang = action.payload;
      i18n.changeLanguage(action.payload);
    },
    setAnimating: (state, action) => {
      state.isAnimating = action.payload;
    },
  },
});

export const { setLanguage, setAnimating } = languageSlice.actions;
export default languageSlice.reducer;
