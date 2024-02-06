import { CategoriesType } from "entities/category"

export interface News {
  author: string
  category: CategoriesType[]
  description: string
  id: string
  image: string
  language: string
  published: string
  title: string
  url: string
}

export type ParamsTypeNews = Partial<News>

export interface NewsApiResponse {
  news: News[];
  page: number;
  status: string;
}

export interface Filters {
  page_number: number;
  page_size: number;
  category: CategoriesType | undefined;
  keywords: string;
}

export type ParamsType = Partial<Filters>