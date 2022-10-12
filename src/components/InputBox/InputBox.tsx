import {
  StyledInputContainer,
  StyledInputTitle,
  StyledInputBox,
  StyledInputBoxLong
} from './InputBoxStyles'

export interface props {
  title: string
  variant?: string
  value: string | undefined | number
  type?: string
  required?: boolean
  min?: number
  max?: number
  readOnly?: boolean
  onChange: (event: any) => any
}

export const InputBox = ({
  title,
  variant,
  value,
  type,
  required,
  max,
  min,
  readOnly,
  onChange
}: props): JSX.Element => {
  return (
    <StyledInputContainer>
      <StyledInputTitle> {title} </StyledInputTitle>
      {variant !== 'long' ? (
        <StyledInputBox
          value={value}
          readOnly={readOnly}
          required={required}
          type={type}
          max={max}
          min={min}
          onChange={(event) => onChange(event)}
        />
      ) : (
        <StyledInputBoxLong
          readOnly={readOnly}
          value={value}
          required={required}
          onChange={(event) => onChange(event)}
        />
      )}
    </StyledInputContainer>
  )
}
