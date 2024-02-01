import axios from "axios";
import { API_KEY, BASE_URL } from "shared/api/apiNews";
import { NewsApiResponse, ParamsType } from "../types/NewsApiResponse";

export const getNews = async(params?: ParamsType): Promise<NewsApiResponse> => {
  try {
    const {page_number = 1, page_size = 10, category, keywords} = params || {}

    const response = await axios.get<NewsApiResponse>(`${BASE_URL}search`, {
      params: {
        apiKey: API_KEY,
        page_number, 
        page_size,
        category,
        keywords
      }
    })

    return response.data
  } catch (e) {
    console.log(e);
    return {news: [], page: 1, status: 'error'}
  }
}