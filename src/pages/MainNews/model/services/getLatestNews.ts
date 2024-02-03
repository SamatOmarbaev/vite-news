import axios from "axios";
import { NewsApiResponse } from "pages/MainNews/model/types/NewsApiResponse";
import { API_KEY, BASE_URL } from "shared/api/apiNews";

export const getLatestNews = async(): Promise<NewsApiResponse> => {
  try {
    const response = await axios.get<NewsApiResponse>(`${BASE_URL}latest-news`, {
      params: {
        apiKey: API_KEY,
      }
    })

    return response.data
  } catch (e) {
    console.log(e);
    return {news: [], page: 1, status: 'error'}
  }
}