import { configureStore } from '@reduxjs/toolkit'
import { categoriesNewsApi, latestNewsApi, newsApi, newsSliceReducer } from 'pages/MainNews'

export const store = configureStore({
  reducer: {
    news: newsSliceReducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [latestNewsApi.reducerPath]: latestNewsApi.reducer,
    [categoriesNewsApi.reducerPath]: categoriesNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware, latestNewsApi.middleware, categoriesNewsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch