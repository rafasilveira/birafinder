import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowSvg } from '../../assets'
import { HeaderStyled } from './header.style'

export const Header: FC<{ name?: string }> = ({ name = '' }) => {
  const navigate = useNavigate()
  return (
    <HeaderStyled>
      <button className="back" onClick={() => navigate('/')}>
        <ArrowSvg />
        <span>Go back</span>
      </button>
      <h1 className="name">{name}</h1>
    </HeaderStyled>
  )
}
