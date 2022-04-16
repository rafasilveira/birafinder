import { FC, ReactNode } from 'react'
import { BackgroundStyled } from './signup.style'

export const SignupBackground: FC<{ children?: ReactNode }> = ({
  children,
}) => {
  return (
    <BackgroundStyled>
      {children}
      <img src="bee-2x.png" alt="Bee" className="bee" />
    </BackgroundStyled>
  )
}

export default SignupBackground
