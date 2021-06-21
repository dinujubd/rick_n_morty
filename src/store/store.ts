import { configureStore } from '@reduxjs/toolkit'
import { charactersReducer } from './characters'
import { initAction, setCurretCharacterAction } from './actions'

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
  },
})

store.dispatch(initAction())
store.dispatch(setCurretCharacterAction(1))

export type ApplicationState = ReturnType<typeof store.getState>
export type ApplicationDispatch = typeof store.dispatch