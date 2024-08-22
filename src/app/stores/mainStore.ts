import { combineReducers, configureStore } from '@reduxjs/toolkit'
import postReducer from 'pages/MainPage/model/postSlice'
import filterReducer from 'pages/MainPage/model/filterSlice'

const rootState = combineReducers({
  postReducer,
  filterReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootState,
  })
}

export type RootState = ReturnType<typeof rootState>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispath = AppStore['dispatch']
