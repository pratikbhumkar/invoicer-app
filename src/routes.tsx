import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Customer } from './pages/Customer';
import { Invoices } from './pages/Invoices';

export const routes = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/customer" element={<Customer />} />
        <Route path="/" element={<Invoices />} />
      </Routes>
    </Router>
  );
};
