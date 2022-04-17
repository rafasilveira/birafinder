/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Cards,
  Notification,
  Pagination,
  PrivateLayout,
} from '../../components'
import { useBreweriesContext } from '../../context/breweries.context'
import { BreweryCard } from './brewery-card'
import { NoBreweries } from './no-breweries/no-breweries.component'

export const Breweries: FC<{ children?: never }> = () => {
  const {
    userName,
    breweries,
    breweriesError: error,
    breweriesLoading: loading,

    page,
    setPage,
    refreshPage,

    removeBrewery,
  } = useBreweriesContext()

  const navigate = useNavigate()

  return (
    <PrivateLayout userName={userName}>
      {error && (
        <Notification severity="error" title="Oops, something went wrong :(">
          There was an error loading the breweries. Please try again later.
          <br />
          {error.message}
        </Notification>
      )}

      {!breweries.length && (
        <NoBreweries
          handleGoBack={() => setPage(page - 1)}
          handleQuit={() => navigate('/')}
          handleRefresh={() => refreshPage()}
        />
      )}

      <Cards>
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
