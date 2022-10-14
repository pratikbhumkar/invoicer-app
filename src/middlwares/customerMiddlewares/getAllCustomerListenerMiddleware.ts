import { createListenerMiddleware } from '@reduxjs/toolkit'
import { getAllCustomers } from '../../store/customerSlice'

export const getAllCustomerListenerMiddleware = createListenerMiddleware()

getAllCustomerListenerMiddleware.startListening({
  actionCreator: getAllCustomers,
  effect: async (action, listenerApi) => {
    // Add code to send data to server here.
  }
})
