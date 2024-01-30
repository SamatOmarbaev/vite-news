import { configureStore } from '@reduxjs/toolkit'
import { newsSliceReducer } from '../slices/newsSlice'

export const store = configureStore({
  reducer: {
    news: newsSliceReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch