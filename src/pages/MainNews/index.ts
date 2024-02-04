export { MainNewsAsync as MainNews } from "./ui/MainNews.async";
export { newsSliceReducer } from "../../entities/New/model/slices/newsSlice";
export { newsApi } from "./model/services/getNews";
export { categoriesNewsApi } from "./model/services/getByCategories";
export { latestNewsApi } from "./model/services/getLatestNews";