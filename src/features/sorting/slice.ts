import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'

import { RootState } from 'app/root-reducer'

const initialState = {
  value: 'price',
}

const sortingSlice = createSlice({
  name: 'sorting',
  initialState,
  reducers: {
    toggleSorting(state, action: PayloadAction<string>) {
      state.value = action.payload
    },
  },
})

export const sortingReducer = sortingSlice.reducer

export const { toggleSorting } = sortingSlice.actions

// Selectors
export const selectSorting = (state: RootState) => state.sorting

export const selectSortingValue = createSelector(
  [selectSorting],
  (sorting) => sorting.value,
)
