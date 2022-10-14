import { render, screen } from '@testing-library/react'
import { PageHead } from './PageHead'
import { BrowserRouter as Router } from 'react-router-dom'

describe('header', () => {
  test('should render the Page Header correctly', async () => {
    await render(
      <Router>
        <PageHead
          pageHeaderText="Customer"
          pageSubHeaderText="Manage all your Customers"
          activeTab=""
          baseLocation="customer"
        />
      </Router>
    )
    expect(await screen.findByText('Manage all your Customers')).toBeVisible()
    expect(await screen.findByText('Customer')).toBeVisible()
  })
})
