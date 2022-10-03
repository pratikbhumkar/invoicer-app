import { render, screen } from '@testing-library/react'
import { PageHead } from './PageHead'

describe('header', () => {
  test('should render the Page Header correctly', async () => {
    await render(
      <PageHead pageHeaderText="Customer" pageSubHeaderText="Manage all your Customers" />
    )
    expect(await screen.findByText('Manage all your Customers')).toBeVisible()
    expect(await screen.findByText('Customer')).toBeVisible()
  })
})
