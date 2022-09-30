import styled from 'styled-components'
import { Logo } from './Logo'

const StyledSidebar = styled.div`
background-color: #f0f2f5;
height: 100vh;
width: 15%;
`

export const Sidebar = (): JSX.Element => {
  return <StyledSidebar>
    <Logo/>
  </StyledSidebar>
}
