import { Article } from "entities/Article";

export interface NewsApiResponse {
    news: Article[];
    page: number;
    status: string;
}