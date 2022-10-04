import { useState } from 'react'
import styled from 'styled-components'
import { InputBox } from '../components/InputBox'
import { PageHead } from '../components/PageHead'

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
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [subject, setSubject] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [rate, setRate] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [abn, setABN] = useState('')

  return (
    <div>
      <PageHead
        pageHeaderText={'Customer'}
        pageSubHeaderText={'Manage all your Customers'}
        activeTab="create"
        baseLocation="customer"
      />
      <form>
        <StyledContainer>
          <InputBox
            title="Customer Name"
            required={true}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <InputBox
            title="Customer Address"
            required={true}
            variant="long"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </StyledContainer>
        <StyledContainer>
          <InputBox
            title="Customer Subject"
            value={subject}
            required={true}
            onChange={(event) => setSubject(event.target.value)}
          />
          <InputBox
            title="Phone number"
            required={true}
            value={phoneNumber}
            type="number"
            max={500000000}
            min={400000000}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </StyledContainer>
        <StyledContainer>
          <InputBox
            required={true}
            title="Rate per hour"
            type="number"
            value={rate}
            onChange={(event) => setRate(event.target.value)}
          />
          <InputBox
            title="Email Address"
            required={true}
            type="email"
            value={emailAddress}
            onChange={(event) => setEmailAddress(event.target.value)}
          />
        </StyledContainer>
        <StyledContainer>
          <InputBox
            title="ABN/ACN"
            value={abn}
            type="number"
            onChange={(event) => setABN(event.target.value)}
          />
        </StyledContainer>
        <StyledButton type="submit">Submit</StyledButton>
        <StyledButton type="reset">Reset</StyledButton>
      </form>
    </div>
  )
}
