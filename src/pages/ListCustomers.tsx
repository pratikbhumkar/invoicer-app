import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { PageHead } from '../components/PageHead'
import { Customer } from '../interfaces/Customer'
import { RootGlobalState } from '../store/rootGlobalState'

const StyledTable = styled.table`
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  width: 90%;
  border-radius: 5px;
  border: 0.5px solid black;
  border-bottom: none;
`

const StyledTableHead = styled.th`
  background-color: #7687fc;
  color: #ffffff;
  height: 20px;
  text-align: left;
  padding: 10px;
  border-radius: 4px;
`

const StyledTableData = styled.td`
  padding: 12px 15px;
  border-right: 0.5px black solid;
  border-bottom: 0.5px black solid;
  width: 200px;
  color: #001052;
  border-radius: 4px;
`

const StyledTableRow = styled.tr`
  border-bottom: 1px solid #dddddd;
`
const generateTableRows = (customers: Customer[]): JSX.Element[] => {
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
        <StyledTableHead>Name</StyledTableHead>
        <StyledTableHead>Address</StyledTableHead>
        <StyledTableHead>Phone Number</StyledTableHead>
        <StyledTableHead>Rate</StyledTableHead>
        <StyledTableHead>Subject</StyledTableHead>
        <StyledTableHead>Email</StyledTableHead>
        <StyledTableHead>ABN/ACN</StyledTableHead>
        <StyledTableHead>Disabled</StyledTableHead>
        {customers.length > 0 && generateTableRows(customers)}
      </StyledTable>
    </div>
  )
}
