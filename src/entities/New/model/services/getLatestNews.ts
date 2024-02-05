import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_KEY, BASE_URL } from 'shared/api/apiNews'
import { NewsApiResponse } from '../types/New'

export const latestNewsApi = createApi({
  reducerPath: 'latestNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getLatestNews: builder.query<NewsApiResponse, null>({
      query: () => {
        return {
          url: 'latest-news',
          params: {
            apiKey: API_KEY,
          }
        }
      },
    }),
  }),
})

export const { useGetLatestNewsQuery } = latestNewsApi