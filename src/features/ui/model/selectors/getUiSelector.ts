// import { createSelector } from "@reduxjs/toolkit";
import { UiState } from "../types/UiSchema";

export const getUIScroll = (state: UiState) => state.scroll
// export const getUIScrollPath = createSelector(
//   getUIScroll,
//   (state: UiState, path: string) => path,
//   (scroll, path) => scroll[path] || 0,
// )