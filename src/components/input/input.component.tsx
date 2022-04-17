import { FC, InputHTMLAttributes } from 'react'
import { InputStyled } from './input.style'

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  fieldSize?: 'default' | 'small'
}

export const Input: FC<IInputProps> = ({
  fieldSize = 'default',
  className,
  ...props
}) => {
  return <InputStyled className={`${fieldSize} ${className}`} {...props} />
}
