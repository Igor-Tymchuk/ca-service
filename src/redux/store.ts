import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./language/slice.ts";
import themeReducer from "./theme/slice.ts";

export const store = configureStore({
  reducer: { language: languageReducer, theme: themeReducer },
});

// Типізація RootState і AppDispatch для TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
