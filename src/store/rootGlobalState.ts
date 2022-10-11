import { configureStore } from '@reduxjs/toolkit'
import { customerReducer } from './customerSlice'

export const rootGlobalState = configureStore({
  reducer: {
    customer: customerReducer
  }
})

export type RootGlobalState = ReturnType<typeof rootGlobalState.getState>
