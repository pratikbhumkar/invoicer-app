import { createListenerMiddleware } from '@reduxjs/toolkit'
import { disbleCustomer } from '../../store/customerSlice'
import axios from 'axios'

export const disableCustomerListenerMiddleware = createListenerMiddleware()

disableCustomerListenerMiddleware.startListening({
  actionCreator: disbleCustomer,
  effect: async (action, listenerApi) => {
    // Add code to send data to server here.
    disableCustomerListener(action.payload)
  }
})

const disableCustomerListener = (phoneNumber: number): void => {
  const data = ''

  const config = {
    method: 'get',
    url: `https://thawing-bayou-98812.herokuapp.com/customer/disableCustomer?customerPhoneNumber=${phoneNumber}`,
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
