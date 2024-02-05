import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CategoriesApiResponse } from 'entities/category'
import { API_KEY, BASE_URL } from 'shared/api/apiNews'

export const categoriesNewsApi = createApi({
  reducerPath: 'categoriesNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getByCategories: builder.query<CategoriesApiResponse, null>({
      query: () => {
        return {
          url: 'available/categories',
          params: {
            apiKey: API_KEY,
          }
        }
      },
    }),
  }),
})

export const { useGetByCategoriesQuery } = categoriesNewsApi