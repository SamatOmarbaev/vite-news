import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UiState } from '../types/UiSchema'


const initialState: UiState = {
  scroll: {}
}

export const uiSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setScrollPosition: (state, {payload}: PayloadAction<{path: string; position: number}>) => {
      state.scroll[payload.path] = payload.position
    },
  },
})

export const { actions: uiSliceActions } = uiSlice;
export const { reducer: uiSliceReducer } = uiSlice;