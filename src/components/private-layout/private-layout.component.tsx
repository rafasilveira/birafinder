import { FC, ReactNode } from 'react'
import { Header } from '../header/header.component'
import { PrivateLayoutStyled } from './private-layout.style'

export const PrivateLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <PrivateLayoutStyled>
    <Header />
    {children}
  </PrivateLayoutStyled>
)
