import { withLoading } from '../../hocs/with-loading.hoc'

import { CardComponent } from './card.component'
import { ICardProps, ICardSkeletonProps } from './card.interface'
import { CardSkeleton } from './card.skeleton'

export const Card = withLoading<ICardProps, ICardSkeletonProps>(
  CardSkeleton,
  CardComponent
)

export * from './card.interface'
export { Cards } from './card.style'
