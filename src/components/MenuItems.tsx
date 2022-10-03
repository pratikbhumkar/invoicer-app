import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import CustomerIcon from '../assets/customer.png'
import InvoiceIcon from '../assets/invoice.png'

const StyledIcon = styled.img`
  width: 30px;
  height: 30px;
  padding-right: 10px;
  margin-bottom: 30px;
`
const StyledIconContainer = styled.button`
  display: flex;
  padding: 10px 20px 0px 30px;
  height: 30px;
  border: none;
  background-color: transparent;
`
const StyledMenuItem = styled.p`
  align-self: center;
  font-size: 20px;
  padding-top 9px;
`
const MenuItemContainer = styled.div`
  padding-top: 20px;
`
export const MenuItems = (): JSX.Element => {
  const navigateTo = useNavigate()
  return (
    <MenuItemContainer>
      <div>
        <StyledIconContainer
          onClick={() => navigateTo('/invoice/create')}
          data-testid="invoice-container">
          <StyledIcon src={InvoiceIcon} alt="Invoice icon" />
          <StyledMenuItem className="sub-header">Invoice</StyledMenuItem>
        </StyledIconContainer>
      </div>
      <div>
        <StyledIconContainer onClick={() => navigateTo('/customer/create')}>
          <StyledIcon src={CustomerIcon} alt="Customer logo" />
          <StyledMenuItem className="sub-header">Customer</StyledMenuItem>
        </StyledIconContainer>
      </div>
    </MenuItemContainer>
  )
}
