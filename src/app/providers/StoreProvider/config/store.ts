import { configureStore } from '@reduxjs/toolkit'
import { rootReducers } from './reducers'
import { categoriesNewsApi } from 'entities/category'
import { latestNewsApi, newsApi } from 'entities/New'

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware, latestNewsApi.middleware, categoriesNewsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch