import { combineReducers } from "@reduxjs/toolkit";
import { latestNewsApi, newsApi, newsSliceReducer } from "entities/New";
import { categoriesNewsApi } from "entities/category";

export const rootReducers = combineReducers({
  news: newsSliceReducer,
  [newsApi.reducerPath]: newsApi.reducer,
  [latestNewsApi.reducerPath]: latestNewsApi.reducer,
  [categoriesNewsApi.reducerPath]: categoriesNewsApi.reducer,
})