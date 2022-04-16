import { FC, ReactNode } from 'react'
import { TrashSvg } from '../../assets'
import { CardStyled } from './card.style'

export interface ICardProps {
  title: string
  subtitle?: string
  children: ReactNode
  handleDelete?: () => void
}

export const Card: FC<ICardProps> = ({
  title,
  subtitle,
  children,
  handleDelete,
}) => {
  return (
    <CardStyled>
      <h2 className="title">{title}</h2>
      <p className="text">{subtitle}</p>

      {!!handleDelete && (
        <button
          className="delete"
          title="delete"
          onClick={() => handleDelete?.()}
        >
          <TrashSvg />
        </button>
      )}

      {children}
    </CardStyled>
  )
}
