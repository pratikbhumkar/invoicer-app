import { title } from 'process'
import { StyledInputContainer, StyledInputTitle } from './InputBoxStyles'

export const InputBoxSmall = ({}: any) => {
  return (
    <StyledInputContainer>
      <StyledInputTitle> {title} </StyledInputTitle>
    </StyledInputContainer>
  )
}
