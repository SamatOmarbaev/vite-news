import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { PAGE_SIZE } from 'shared/const/constants'
import { Filters, News } from '../types/New'

interface NewsState {
  news: News[]
  filters: Filters
  currentNews: News | null
}

const initialState: NewsState = {
  news: [],
  currentNews: null,
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
    setNews: (state, action: PayloadAction<News[]>) => {
      state.news = action.payload
    },
    setCurrentNews: (state, action: PayloadAction<News | null>) => {
      state.currentNews = action.payload
    },
    setFilters: (state, action: PayloadAction<{key: string, value: string | number | null}>) => {
      const {key, value} = action.payload
      state.filters = {...state.filters, [key]: value}
    },
  },
})

export const { actions: newsSliceActions } = newsSlice;
export const { reducer: newsSliceReducer } = newsSlice;
