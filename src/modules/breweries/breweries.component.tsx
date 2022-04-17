import { FC } from 'react'
import { Cards, PrivateLayout } from '../../components'
import { Pagination } from '../../components/pagination/pagination.component'
import { useBreweriesContext } from '../../context/breweries.context'
import { BreweryCard } from './brewery-card'

export const Breweries: FC<{ children?: never }> = () => {
  const {
    userName,
    breweries,
    breweriesError: error,
    breweriesLoading: loading,

    page,
    removeBrewery,
    setPage,
  } = useBreweriesContext()

  return (
    <PrivateLayout userName={userName}>
      <Cards>
        {error && <p>Error loading breweries :(</p>}
        {loading
          ? new Array(18)
              .fill('')
              .map((_, i) => <BreweryCard key={i} loading />)
          : breweries.map((brewery) => (
              <BreweryCard
                key={brewery.id}
                title={brewery.name}
                subtitle={`${brewery.street || ''}
            \n${brewery.city}, ${brewery.state} - ${brewery.country}`}
                size={brewery.brewery_type}
                phone={brewery.phone}
                location={brewery.postal_code}
                handleAddExtra={() => console.log('adding 123')}
                handleDelete={() => removeBrewery(brewery.id)}
              />
            ))}
      </Cards>
      <Pagination current={page} onNavigateToPage={(page) => setPage(page)} />
    </PrivateLayout>
  )
}

export default Breweries
