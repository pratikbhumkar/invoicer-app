import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { InputBox } from '../components/InputBox'
import { PageHead } from '../components/PageHead'
import { Customer } from '../interfaces/Customer'
import { addCustomer } from '../store/customerSlice'

const StyledContainer = styled.div`
  display: flex;
`
export const StyledButton = styled.button`
  width: 200px;
  height: 30px;
  margin: 50px 150px 0px 20px;
  background-color: #7687fc;
  border: none;
`

export const CreateCustomer = (): JSX.Element => {
  const [customer, setCustomer] = useState<Partial<Customer>>()
  const dispatch = useDispatch()
  return (
    <div>
      <PageHead
        pageHeaderText={'Customer'}
        pageSubHeaderText={'Manage all your Customers'}
        activeTab="create"
        baseLocation="customer"
      />
      <form
        onSubmit={(event) => {
          event.preventDefault()
          dispatch(addCustomer(customer as Customer))
        }}>
        <StyledContainer>
          <InputBox
            title="Customer Name"
            required={true}
            value={customer?.name}
            onChange={(event) =>
              setCustomer({
                ...customer,
                name: event.target.value,
                disabled: false
              })
            }
          />
          <InputBox
            title="Customer Address"
            required={true}
            variant="long"
            value={customer?.address}
            onChange={(event) =>
              setCustomer({
                ...customer,
                address: event.target.value
              })
            }
          />
        </StyledContainer>
        <StyledContainer>
          <InputBox
            title="Customer Subject"
            value={customer?.subject}
            required={true}
            onChange={(event) =>
              setCustomer({
                ...customer,
                subject: event.target.value
              })
            }
          />
          <InputBox
            title="Phone number"
            required={true}
            value={customer?.phone_number}
            type="number"
            max={500000000}
            min={400000000}
            onChange={(event) =>
              setCustomer({
                ...customer,
                phone_number: Number(event.target.value)
              })
            }
          />
        </StyledContainer>
        <StyledContainer>
          <InputBox
            required={true}
            title="Rate per hour"
            type="number"
            value={customer?.rate}
            min={30}
            onChange={(event) =>
              setCustomer({
                ...customer,
                rate: Number(event.target.value)
              })
            }
          />
          <InputBox
            title="Email Address"
            required={true}
            type="email"
            value={customer?.email}
            onChange={(event) =>
              setCustomer({
                ...customer,
                email: event.target.value
              })
            }
          />
        </StyledContainer>
        <StyledContainer>
          <InputBox
            title="ABN/ACN"
            value={customer?.abn}
            type="number"
            onChange={(event) =>
              setCustomer({
                ...customer,
                abn: Number(event.target.value)
              })
            }
          />
        </StyledContainer>
        <StyledButton type="submit">Submit</StyledButton>
        <StyledButton type="reset">Reset</StyledButton>
      </form>
    </div>
  )
}
