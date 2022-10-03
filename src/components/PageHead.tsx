import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Header } from './Header'
interface props {
  pageHeaderText: string
  pageSubHeaderText: string
  activeTab: string
  baseLocation: string
}

const StyledSubMenu = styled.button`
  font-size: 24px;
  margin: 0px 50px 10px -5px;
  decoration: none;
  border: none;
  background-color: transparent;
`
const SubMenuContainer = styled.div`
  margin-top: 30px;
  border-bottom: 1px solid #d8d8d8;
  padding-bottom: 5px;
  flex: 1;
`

export const PageHead = ({
  pageHeaderText,
  pageSubHeaderText,
  activeTab,
  baseLocation
}: props): JSX.Element => {
  const navigateTo = useNavigate()
  return (
    <>
      <Header headerText={pageHeaderText} />
      <p className="sub-header">{pageSubHeaderText}</p>
      <SubMenuContainer>
        <StyledSubMenu
          className={activeTab === 'create' ? 'sub-header active' : 'sub-header'}
          onClick={() => navigateTo(`/${baseLocation}/create`)}>
          Create
        </StyledSubMenu>{' '}
        <StyledSubMenu
          className={activeTab === 'list' ? 'sub-header active' : 'sub-header'}
          onClick={() => navigateTo(`/${baseLocation}/list`)}>
          List
        </StyledSubMenu>{' '}
      </SubMenuContainer>
    </>
  )
}
