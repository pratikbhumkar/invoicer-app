import { Routes, Route } from 'react-router-dom'
import { CreateCustomer } from './pages/CreateCustomer'
import { ListCustomers } from './pages/ListCustomers'
import { Invoices } from './pages/Invoices'

export const routes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/customer/create" element={<CreateCustomer />} />
      <Route path="/customer/list" element={<ListCustomers />} />
      <Route path="/" element={<Invoices />} />
    </Routes>
  )
}
