/* eslint-disable react/display-name */
import { forwardRef, InputHTMLAttributes } from 'react'
import {
  InputWrapper,
  InputStyleContainer,
  InputStyled,
  RightText,
} from './styles'
import { RegularText } from '../typography/regular-text'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  rightText?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, rightText, className, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyleContainer $hasError={!!error}>
          <InputStyled ref={ref} {...props} />
          {rightText && <RightText>{rightText}</RightText>}
        </InputStyleContainer>
        {error && <RegularText size="s">{error}</RegularText>}
      </InputWrapper>
    )
  },
)
