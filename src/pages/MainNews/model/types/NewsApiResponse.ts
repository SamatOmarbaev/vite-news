import { Article } from "entities/Article";
import { CategoriesType } from "entities/Article/model/types/Article";

export interface NewsApiResponse {
    news: Article[];
    page: number;
    status: string;
}

export interface CategoriesApiResponse {
    categories: CategoriesType[];
    description: string;
    status: string;
}

export interface Filters {
    page_number: number;
    page_size: number;
    category: CategoriesType | null;
    keywords: string;
}
  
export type ParamsType = Partial<Filters>