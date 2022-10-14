import styled from 'styled-components'
import { Logo } from './Logo'
import { MenuItems } from './MenuItems'

const StyledSidebar = styled.div`
  background-color: #f0f2f5;
  height: 100vh;
  width: 12%;
  margin-top: 6px;
`

export const Sidebar = (): JSX.Element => {
  return (
    <StyledSidebar>
      <Logo />
      <MenuItems />
    </StyledSidebar>
  )
}
