import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { NewsApiResponse } from 'entities/New'
import { API_KEY, BASE_URL } from 'shared/api/apiNews'

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