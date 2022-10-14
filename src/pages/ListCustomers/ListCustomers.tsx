import { useSelector } from 'react-redux'
import { PageHead } from '../../components/PageHead'
import { Customer } from '../../interfaces/Customer'
import { RootGlobalState } from '../../store/rootGlobalState'
import {
  StyledButton,
  StyledTable,
  StyledTableData,
  StyledTableHead,
  StyledTableRow
} from './ListCustomersStyles'

export const generateTableRows = (customers: Customer[]): JSX.Element[] => {
  return customers.map((customer, index) => (
    <StyledTableRow key={index}>
      <StyledTableData>{customer.name}</StyledTableData>
      <StyledTableData>{customer.address}</StyledTableData>
      <StyledTableData>{customer.phone_number}</StyledTableData>
      <StyledTableData>{customer.rate}</StyledTableData>
      <StyledTableData>{customer.subject}</StyledTableData>
      <StyledTableData>{customer.email}</StyledTableData>
      <StyledTableData>{customer.abn}</StyledTableData>
      <StyledTableData>{`${customer.disabled}`}</StyledTableData>
      <StyledTableData>
        <StyledButton onClick={() => alert('Create')}>Create</StyledButton>
      </StyledTableData>
      <StyledTableData>
        <StyledButton onClick={() => alert('Edit')}>Edit</StyledButton>
      </StyledTableData>
    </StyledTableRow>
  ))
}

export const ListCustomers = (): JSX.Element => {
  const customers = useSelector((state: RootGlobalState) => state.customer)
  return (
    <div>
      <PageHead
        pageHeaderText={'Customer'}
        pageSubHeaderText={'Manage all your Customers'}
        activeTab="list"
        baseLocation="customer"
      />
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHead>Name</StyledTableHead>
            <StyledTableHead>Address</StyledTableHead>
            <StyledTableHead>Phone Number</StyledTableHead>
            <StyledTableHead>Rate</StyledTableHead>
            <StyledTableHead>Subject</StyledTableHead>
            <StyledTableHead>Email</StyledTableHead>
            <StyledTableHead>ABN/ACN</StyledTableHead>
            <StyledTableHead>Disabled</StyledTableHead>
            <StyledTableHead>Invoice</StyledTableHead>
            <StyledTableHead>Customer</StyledTableHead>
          </tr>
        </thead>
        <tbody>{customers.length > 0 && generateTableRows(customers)}</tbody>
      </StyledTable>
    </div>
  )
}
