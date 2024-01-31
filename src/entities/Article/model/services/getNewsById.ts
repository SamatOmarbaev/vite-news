import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

interface GetNewsByIdProps {
  newsId: string
}

export const getNewsById = async ({newsId}: GetNewsByIdProps) => {
  try {
    const response = await axios.get(`${BASE_URL}search/${newsId}`, {
      params: {
        apiKey: API_KEY,
        newsId
      }
    })

    return response.data
  } catch (e) {
    console.log(e);
  }
}