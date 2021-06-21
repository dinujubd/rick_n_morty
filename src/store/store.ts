import { configureStore } from '@reduxjs/toolkit'
import { charactersReducer } from './characters'
import { init, setCurretCharacter } from './actions'

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
  },
})

store.dispatch(init())
store.dispatch(setCurretCharacter(1))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch