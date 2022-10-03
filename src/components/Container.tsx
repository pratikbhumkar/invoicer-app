import styled from 'styled-components'

interface Props {
  children?: React.ReactNode
}
const StyledContainer = styled.div`
  padding: 0px 25px 0px 25px;
  margin-left: 50px;
  flex: 1;
`
export const Container = ({ children }: Props): JSX.Element => {
  return <StyledContainer>{children}</StyledContainer>
}
