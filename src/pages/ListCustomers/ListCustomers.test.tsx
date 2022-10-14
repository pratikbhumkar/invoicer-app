import * as ListCustomers from './ListCustomers'
import { Customer } from '../../interfaces/Customer'
import { render, screen } from '@testing-library/react'

describe('generateTableRows', () => {
  beforeEach(async () => {
    const customers: Customer[] = [
      {
        address: 'avc',
        disabled: false,
        email: 'asd',
        name: 'er',
        phone_number: 434,
        rate: 45,
        subject: 'dfdfd',
        abn: 334343
      }
    ]
    render(<div>{ListCustomers.generateTableRows(customers)}</div>)
  })
  test('should render the table', async () => {
    const name = await screen.findByText('er')
    const address = await screen.findByText('avc')
    const disabled = await screen.findByText('false')
    const email = await screen.findByText('asd')
    const phoneNumber = await screen.findByText('434')
    const rate = await screen.findByText('45')
    const subject = await screen.findByText('dfdfd')
    const abn = await screen.findByText('334343')
    expect(abn).not.toBeNull()
    expect(subject).not.toBeNull()
    expect(rate).not.toBeNull()
    expect(phoneNumber).not.toBeNull()
    expect(email).not.toBeNull()
    expect(disabled).not.toBeNull()
    expect(address).not.toBeNull()
    expect(name).not.toBeNull()
  })
})
