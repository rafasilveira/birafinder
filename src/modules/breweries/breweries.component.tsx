import { FC } from 'react'
import { Cards, PrivateLayout } from '../../components'
import { useBreweriesContext } from '../../context/breweries.context'
import { BreweryCard } from './brewery-card/brewery-card.component'

export const Breweries: FC<{ children?: never }> = () => {
  const {
    userName,
    breweries,
    breweriesError: error,
    breweriesLoading: loading,
  } = useBreweriesContext()

  return (
    <PrivateLayout userName={userName}>
      <Cards>
        {breweries.map((brewery) => (
          <BreweryCard
            key={brewery.id}
            title={brewery.name}
            subtitle={`${brewery.street || ''}
            \n${brewery.city}, ${brewery.state} - ${brewery.country}`}
            size={brewery.brewery_type}
            phone={brewery.phone}
            location={brewery.postal_code}
            handleAddExtra={() => console.log('adding 123')}
          />
        ))}
      </Cards>
    </PrivateLayout>
  )
}

export default Breweries
