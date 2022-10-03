import styled from 'styled-components'
import { Header } from './Header'
interface props {
  pageHeaderText: string
  pageSubHeaderText: string
}

const StyledSubMenu = styled.span`
  font-size: 24px;
  margin: 50px 50px 10px 0px;
`
const SubMenuContainer = styled.div`
  margin-top: 50px;
  border-bottom: 1px solid #d8d8d8;
  padding-bottom: 5px;
  flex: 1;
`

export const PageHead = ({ pageHeaderText, pageSubHeaderText }: props): JSX.Element => {
  return (
    <>
      <Header headerText={pageHeaderText} />
      <p className="sub-header">{pageSubHeaderText}</p>
      <SubMenuContainer>
        <StyledSubMenu className="sub-header">Create</StyledSubMenu>{' '}
        <StyledSubMenu className="sub-header">List</StyledSubMenu>{' '}
      </SubMenuContainer>
    </>
  )
}
