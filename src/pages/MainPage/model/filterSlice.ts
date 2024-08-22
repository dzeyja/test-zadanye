import { createSlice } from '@reduxjs/toolkit'

interface FilterInitialState {
  onlyFavorite: boolean
}

const initialState: FilterInitialState = {
  onlyFavorite: false,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setOnlyFaovrite: (state) => {
      state.onlyFavorite = !state.onlyFavorite
    },
  },
})

export default filterSlice.reducer
export const { setOnlyFaovrite } = filterSlice.actions
