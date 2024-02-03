import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Article } from 'entities/Article'
import { Filters } from '../types/NewsApiResponse'
import { PAGE_SIZE } from 'shared/const/constants'

interface NewsState {
  news: Article[]
  filters: Filters
}

const initialState: NewsState = {
  news: [],
  filters: {
    page_number: 1,
    page_size: PAGE_SIZE,
    category: undefined,
    keywords: ''
  }
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<Article[]>) => {
      state.news = action.payload
    },
    setFilters: (state, action: PayloadAction<{key: string, value: string | number | null}>) => {
      const {key, value} = action.payload
      state.filters = {...state.filters, [key]: value}
    },
  },
})

export const { actions: newsSliceActions } = newsSlice;
export const { reducer: newsSliceReducer } = newsSlice;
