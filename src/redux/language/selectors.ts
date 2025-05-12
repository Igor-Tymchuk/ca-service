import { RootState } from "../store.ts";

export const selectLang = (state: RootState) => state.language;
