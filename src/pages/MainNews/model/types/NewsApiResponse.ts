import { CategoriesType } from "entities/category";

export interface Filters {
    page_number: number;
    page_size: number;
    category: CategoriesType | undefined;
    keywords: string;
}
  
export type ParamsType = Partial<Filters>