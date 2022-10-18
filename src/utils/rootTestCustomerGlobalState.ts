import { configureStore, createSlice } from '@reduxjs/toolkit'
import { customerTestInitialState } from './rootTestCustomerGlobalState.util'

export const customerSlice = createSlice({
  name: 'CustomerTest',
  initialState: customerTestInitialState,
  reducers: {}
})

export const rootTestGlobalState = configureStore({
  reducer: {
    customer: customerSlice.reducer
  }
})

export type RootTestCustomerGlobalState = ReturnType<typeof rootTestGlobalState.getState>
