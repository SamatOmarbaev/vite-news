import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_KEY, BASE_URL } from 'shared/api/apiNews'
import { NewsApiResponse, ParamsType } from '../types/New'

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getNews: builder.query<NewsApiResponse, ParamsType>({
      keepUnusedDataFor: 0,
      query: (params) => {
        const {page_number = 1, page_size = 10, category, keywords} = params || {}
        return {
          url: 'search',
          params: {
            apiKey: API_KEY,
            page_number, 
            page_size,
            category,
            keywords
          }
        }
      },
    }),
  }),
})

export const { useGetNewsQuery } = newsApi