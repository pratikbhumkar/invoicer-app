import { render, screen } from '@testing-library/react'
import { Header } from './Header'

describe('header', () => {
  test('should render the header correctly', async () => {
    await render(<Header headerText={'Billing & Invoices'} />)
    expect(await screen.findByText('Billing & Invoices')).not.toBeNull()
  })
})
