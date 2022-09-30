import styled from 'styled-components'

interface Props {
  children?: React.ReactNode
}
const StyledContainer = styled.div`
    padding: 15px 25px 15px 25px;
`
export const Container = ({ children }: Props): JSX.Element => {
  return <StyledContainer>{children}</StyledContainer>
}
