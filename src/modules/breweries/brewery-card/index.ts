import { withLoading } from '../../../hocs/with-loading.hoc'
import { BreweryCardComponent } from './brewery-card.component'
import { IBreweryCardProps } from './brewery-card.interface'
import { BreweryCardSkeleton } from './brewery-card.skeleton'

export const BreweryCard = withLoading<IBreweryCardProps, {}>(
  BreweryCardSkeleton,
  BreweryCardComponent
)
