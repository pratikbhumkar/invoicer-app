import { Dispatch } from '@reduxjs/toolkit'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { InputBox } from '../../components/InputBox/InputBox'
import { PageHead } from '../../components/PageHead'
import { Customer } from '../../interfaces/Customer'
import { addCustomer } from '../../store/customerSlice'
import { StyledButton, StyledContainer } from './CreateCustomerStyles'

export const submitCreateCustomer = (customer: Customer, dispatch: Dispatch): void => {
  dispatch(addCustomer(customer))
}

export const CreateCustomer = (): JSX.Element => {
  const dispatch = useDispatch()
  const [customer, setCustomer] = useState<Partial<Customer>>()
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
          submitCreateCustomer(customer as Customer, dispatch)
        }}>
        <StyledContainer>
          <InputBox
            testId="customerName"
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
            testId="customerAddress"
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
            testId="customerSubject"
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
            testId="phoneNumber"
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
            testId="rate"
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
            testId="email"
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
            testId="abn"
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
