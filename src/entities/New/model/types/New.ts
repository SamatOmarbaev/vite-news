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

export interface NewsApiResponse {
  news: News[];
  page: number;
  status: string;
}