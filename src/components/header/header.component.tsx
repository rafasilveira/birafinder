import { FC } from 'react'
import { ArrowSvg } from '../../assets'
import { HeaderStyled } from './header.style'

export const Header: FC<{ name?: string }> = ({ name = '' }) => {
  return (
    <HeaderStyled>
      <button className="back">
        <ArrowSvg />
        <span>Go back</span>
      </button>
      <h1 className="name">{name}</h1>
    </HeaderStyled>
  )
}
