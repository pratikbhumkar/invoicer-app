import styled from 'styled-components'

interface props {
  headerText: string
}
const HeaderContainer = styled.div``
export const Header = ({ headerText }: props): JSX.Element => {
  return (
    <HeaderContainer>
      <h1 className="header">{headerText}</h1>
    </HeaderContainer>
  )
}
