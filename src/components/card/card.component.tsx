import { FC } from 'react'
import { TrashSvg } from '../../assets'
import { ICardProps } from './card.interface'
import { CardStyled } from './card.style'



export const CardComponent: FC<ICardProps> = ({
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
