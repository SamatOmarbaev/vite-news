import { combineReducers } from "@reduxjs/toolkit";
import { categoriesNewsApi, latestNewsApi, newsApi, newsSliceReducer } from "pages/MainNews";

export const rootReducers = combineReducers({
  news: newsSliceReducer,
  [newsApi.reducerPath]: newsApi.reducer,
  [latestNewsApi.reducerPath]: latestNewsApi.reducer,
  [categoriesNewsApi.reducerPath]: categoriesNewsApi.reducer,
})