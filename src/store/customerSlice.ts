import { createSlice } from '@reduxjs/toolkit'
import { Customer } from '../interfaces/Customer'

const customerInitialState: Customer[] = []

export const customerSlice = createSlice({
  name: 'Customer',
  initialState: customerInitialState,
  reducers: {
    addCustomer: (state, action) => {
      state.push(action.payload as Customer)
    },
    updateCustomer: (state, action) => {
      state.forEach((element: Customer) => {
        if (element.email === action.payload.email) {
          element = { ...element, ...action.payload, disabled: false }
        }
      })
    },
    enableCustomer: (state, action) => {
      state.forEach((element: Customer) => {
        if (element.email === action.payload) {
          element.disabled = false
        }
      })
    },
    disbleCustomer: (state, action) => {
      state.forEach((element: Customer) => {
        if (element.email === action.payload) {
          element.disabled = true
        }
      })
    },
    getAllCustomers: (state, action) => {
      state = action.payload as Customer[]
    }
  }
})

export const { addCustomer, updateCustomer, enableCustomer, disbleCustomer, getAllCustomers } =
  customerSlice.actions
export const customerReducer = customerSlice.reducer
