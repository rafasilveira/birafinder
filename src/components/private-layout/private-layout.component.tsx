import { FC, ReactNode } from 'react'
import { Header } from '../header/header.component'
import { PrivateLayoutStyled } from './private-layout.style'

export const PrivateLayout: FC<{ children: ReactNode; userName: string }> = ({
  children,
  userName,
}) => (
  <PrivateLayoutStyled>
    <Header name={userName} />
    {children}
  </PrivateLayoutStyled>
)
