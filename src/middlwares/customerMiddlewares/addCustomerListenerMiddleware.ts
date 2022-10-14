import { createListenerMiddleware } from '@reduxjs/toolkit'
import { addCustomer } from '../../store/customerSlice'
import axios from 'axios'
import { Customer } from '../../interfaces/Customer'

export const addCustomerListenerMiddleware = createListenerMiddleware()

addCustomerListenerMiddleware.startListening({
  actionCreator: addCustomer,
  effect: async (action, listenerApi) => {
    await addCustomerApiCall(action.payload)
  }
})

const addCustomerApiCall = (customer: Customer): void => {
  const data = JSON.stringify(customer)
  const config = {
    method: 'post',
    url: 'https://thawing-bayou-98812.herokuapp.com//customer/addCustomer',
    headers: {
      authorization: 'Bearer ',
      'Content-Type': 'application/json'
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
