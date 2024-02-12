import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from 'shared/api/apiNews'
import { News } from '../types/New'

export const newByIdApi = createApi({
  reducerPath: 'newByIdApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getNewById: builder.query<News, number>({
      keepUnusedDataFor: 0,
      query: (id) => `news/${id}`
    }),
  }),
})

export const { useGetNewByIdQuery } = newByIdApi