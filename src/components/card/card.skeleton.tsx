import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import { ICardSkeletonProps } from './card.interface'
import { CardStyled } from './card.style'

export const CardSkeleton: FC<ICardSkeletonProps> = ({
  title = false,
  subtitle = false,
  childrenSkeletonHeight = '32px',
  children,
}) => {
  return (
    <CardStyled>
      {title && (
        <h2 className="title">
          <Skeleton />
        </h2>
      )}
      {subtitle && (
        <p className="text">
          <Skeleton count={2} />
        </p>
      )}
      {children ?? <Skeleton height={childrenSkeletonHeight} />}
    </CardStyled>
  )
}
