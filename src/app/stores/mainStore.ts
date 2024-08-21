import { combineReducers, configureStore } from '@reduxjs/toolkit'
import postReducer from 'pages/MainPage/model/postSlice'

const rootState = combineReducers({
  postReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootState,
  })
}

export type RootState = ReturnType<typeof rootState>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispath = AppStore['dispatch']
