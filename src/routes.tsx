import { Routes, Route } from 'react-router-dom'
import { CreateCustomer } from './pages/CreateCustomer/CreateCustomer'
import { ListCustomers } from './pages/ListCustomers/ListCustomers'
import { Invoices } from './pages/Invoices'
import { Login } from './pages/Login'
import { ProtectedRoute } from './auth/protected-route'

export const routes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/customer/create" element={<ProtectedRoute component={CreateCustomer} />} />
      <Route path="/customer/list" element={<ProtectedRoute component={ListCustomers} />} />
      <Route path="/invoice" element={<ProtectedRoute component={Invoices} />} />
      <Route path="/" element={<Login />} />
    </Routes>
  )
}
