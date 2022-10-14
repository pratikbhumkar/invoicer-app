import { createListenerMiddleware } from '@reduxjs/toolkit'
import { updateCustomer } from '../../store/customerSlice'

export const updateCustomerListenerMiddleware = createListenerMiddleware()

updateCustomerListenerMiddleware.startListening({
  actionCreator: updateCustomer,
  effect: async (action, listenerApi) => {
    // Add code to send data to server here.
  }
})
