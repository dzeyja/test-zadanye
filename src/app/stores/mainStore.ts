import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootState = combineReducers({})

export const setupStore = () => {
  return configureStore({
    reducer: rootState,
  })
}

export type RootState = ReturnType<typeof rootState>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispath = AppStore['dispatch']
