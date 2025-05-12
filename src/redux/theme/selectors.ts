import { RootState } from "../store.ts";
import { ThemeState } from "./slice.ts";

export const selectTheme = (state: RootState): ThemeState => state.theme;
