import axios from "axios";
import { API_KEY, BASE_URL } from "shared/api/apiNews";

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