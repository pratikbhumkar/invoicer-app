import { render, screen } from '@testing-library/react'
import * as MenuItem from './MenuItems'
import { BrowserRouter as Router } from 'react-router-dom'

describe('MenuItems', () => {
  const { MenuItems } = MenuItem
  test('should render the Page Menu items correctly', async () => {
    await render(
      <Router>
        <MenuItems />
      </Router>
    )
    expect(await screen.findByText('Invoice')).toBeVisible()
    expect(await screen.findByText('Customer')).toBeVisible()
  })
})
