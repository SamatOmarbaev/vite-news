export type { News, NewsApiResponse } from "./model/types/New";
export { NewsList } from "./ui/NewsList/NewsList";
export { NewDetails } from "./ui/NewDetails/NewDetails";
export { NewRecList } from "./ui/NewRecList/NewRecList";
export { newsSliceActions, newsSliceReducer } from "./model/slices/newsSlice";
export { newsApi, useGetNewsQuery } from "./model/services/getNews";
export { latestNewsApi, useGetLatestNewsQuery } from "./model/services/getLatestNews";