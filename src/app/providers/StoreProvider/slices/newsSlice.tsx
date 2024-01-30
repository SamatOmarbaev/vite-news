import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Article } from 'entities/Article'

interface NewsState {
  news: Article[]
}

const initialState: NewsState = {
  news: [],
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<Article[]>) => {
      state.news = action.payload
    },
  },
})

export const { actions: newsSliceActions } = newsSlice;
export const { reducer: newsSliceReducer } = newsSlice;
