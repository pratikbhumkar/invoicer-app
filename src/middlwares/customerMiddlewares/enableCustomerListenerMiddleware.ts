import { createListenerMiddleware } from '@reduxjs/toolkit'
import { enableCustomer } from '../../store/customerSlice'
import axios from 'axios'

export const enableCustomerListenerMiddleware = createListenerMiddleware()

enableCustomerListenerMiddleware.startListening({
  actionCreator: enableCustomer,
  effect: async (action, listenerApi) => {
    // Add code to send data to server here.
    enableCustomerListener(action.payload)
  }
})

const enableCustomerListener = (phoneNumber: number): void => {
  const data = ''

  const config = {
    method: 'get',
    url: `https://thawing-bayou-98812.herokuapp.com/customer/enableCustomer?customerPhoneNumber=${phoneNumber}`,
    headers: {
      authorization: 'Bearer '
    },
    data
  }

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data))
    })
    .catch(function (error) {
      console.log(error)
    })
}
