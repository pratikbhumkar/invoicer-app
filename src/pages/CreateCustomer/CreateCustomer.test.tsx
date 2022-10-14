import { fireEvent, render, screen } from '@testing-library/react'
import * as redux from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { rootGlobalState } from '../../store/rootGlobalState'
import { CreateCustomer } from './CreateCustomer'
import * as CustomerSlice from '../../store/customerSlice'

describe('create customer', () => {
  beforeEach(async () => {
    await render(
      <Router>
        <redux.Provider store={rootGlobalState}>
          <CreateCustomer />
        </redux.Provider>
      </Router>
    )
  })
  describe('should render elements', () => {
    test('should render Customer Name', async () => {
      const elementLabel = await screen.findByText('Customer Name')
      const element = await screen.findByTestId('customerName')
      expect(elementLabel).not.toBeNull()
      expect(element).not.toBeNull()
    })
    test('should render Customer Address', async () => {
      const elementLabel = await screen.findByText('Customer Address')
      const element = await screen.findByTestId('customerAddress')
      expect(elementLabel).not.toBeNull()
      expect(element).not.toBeNull()
    })
    test('should render Customer Subject', async () => {
      const elementLabel = await screen.findByText('Customer Subject')
      const element = await screen.findByTestId('customerSubject')
      expect(elementLabel).not.toBeNull()
      expect(element).not.toBeNull()
    })
    test('should render Phone number', async () => {
      const elementLabel = await screen.findByText('Phone number')
      const element = await screen.findByTestId('phoneNumber')
      expect(elementLabel).not.toBeNull()
      expect(element).not.toBeNull()
    })
    test('should render Rate per hour', async () => {
      const elementLabel = await screen.findByText('Rate per hour')
      const element = await screen.findByTestId('rate')
      expect(elementLabel).not.toBeNull()
      expect(element).not.toBeNull()
    })
    test('should render Email Address', async () => {
      const elementLabel = await screen.findByText('Email Address')
      const element = await screen.findByTestId('email')
      expect(elementLabel).not.toBeNull()
      expect(element).not.toBeNull()
    })
    test('should render ABN/ACN', async () => {
      const elementLabel = await screen.findByText('ABN/ACN')
      const element = await screen.findByTestId('abn')
      expect(elementLabel).not.toBeNull()
      expect(element).not.toBeNull()
    })
    test('should render Submit', async () => {
      const element = await screen.findByText('Submit')
      expect(element).not.toBeNull()
    })
    test('should render Reset', async () => {
      const element = await screen.findByText('Reset')
      expect(element).not.toBeNull()
    })
  })
  test('should dispatch when form is submitted', async () => {
    const addCustomerSpy = jest
      .spyOn(CustomerSlice, 'addCustomer')
      .mockReturnValue({ payload: 'test', type: 'test' })

    fireEvent.change(screen.getByTestId('customerName'), { target: { value: 'em@em.com' } })
    fireEvent.change(screen.getByTestId('customerAddress'), { target: { value: 'em@em.com' } })
    fireEvent.change(screen.getByTestId('customerSubject'), { target: { value: 'em@em.com' } })
    fireEvent.change(screen.getByTestId('phoneNumber'), { target: { value: 400000002 } })
    fireEvent.change(screen.getByTestId('rate'), { target: { value: 120 } })
    fireEvent.change(screen.getByTestId('email'), { target: { value: 'em@em.com' } })
    fireEvent.click(screen.getByText('Submit'))
    expect(addCustomerSpy).toHaveBeenCalled()
  })
})
