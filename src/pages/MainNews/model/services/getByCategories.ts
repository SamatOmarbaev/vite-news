import axios from "axios";
import { API_KEY, BASE_URL } from "shared/api/apiNews";
import { CategoriesApiResponse } from "../types/NewsApiResponse";

export const getByCategories = async(): Promise<CategoriesApiResponse> => {
  try {
    const response = await axios.get<CategoriesApiResponse>(`${BASE_URL}available/categories`, {
      params: {
        apiKey: API_KEY,
      }
    })

    return response.data
  } catch (e) {
    console.log(e);
    return {categories: [], description: '', status: 'error'}
  }
}