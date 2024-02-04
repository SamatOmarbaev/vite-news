import { configureStore } from '@reduxjs/toolkit'
import { categoriesNewsApi, latestNewsApi, newsApi } from 'pages/MainNews'
import { rootReducers } from './reducers'

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware, latestNewsApi.middleware, categoriesNewsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch