import styled from 'styled-components'

interface props {
  title: string
  variant?: string
  value: string
  type?: string
  required?: boolean
  min?: number
  max?: number
  onChange: (event: any) => any
}

const StyledInputContainer = styled.div`
  flex-direction: column;
  width: 450px;
  display: flex;
  margin: 20px;
`

export const StyledInputTitle = styled.span`
  padding: 5px;
  font-size: 18px;
`

const StyledInputBox = styled.input`
  line-height: 30px;
  border: none;
  border-radius: 5px;
`
const StyledInputBoxLong = styled.input`
  line-height: 30px;
  border: none;
  border-radius: 5px;
  width: 550px;
`

export const InputBox = ({
  title,
  variant,
  value,
  type,
  required,
  max,
  min,
  onChange
}: props): JSX.Element => {
  return (
    <StyledInputContainer>
      <StyledInputTitle> {title} </StyledInputTitle>
      {variant !== 'long' ? (
        <StyledInputBox
          value={value}
          required={required}
          type={type}
          max={max}
          min={min}
          onChange={(event) => onChange(event)}
        />
      ) : (
        <StyledInputBoxLong
          value={value}
          required={required}
          onChange={(event) => onChange(event)}
        />
      )}
    </StyledInputContainer>
  )
}
