import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_KEY, BASE_URL } from 'shared/api/apiNews'
import { NewsApiResponse, ParamsTypeNews } from '../types/New'

export const newByIdApi = createApi({
  reducerPath: 'newByIdApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getNewById: builder.query<NewsApiResponse, ParamsTypeNews>({
      keepUnusedDataFor: 0,
      query: (params) => {
        const {id} = params || {}
        return {
          url: 'search',
          params: {
            apiKey: API_KEY,
            id
          }
        }
      },
    }),
  }),
})

export const { useGetNewByIdQuery } = newByIdApi