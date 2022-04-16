import { FC } from 'react'
import { PrivateLayout, Cards } from '../../components'
import { useBreweriesContext } from '../../context/breweries.context'
import { BreweryCard } from './brewery-card/brewery-card.component'

export const Breweries: FC<{ children?: never }> = () => {
  const { userName } = useBreweriesContext()

  return (
    <PrivateLayout>
      <Cards>
        <BreweryCard
          title="Brewery 1"
          subtitle="Brewery 1 subtitle lorem ipsum Brewery 1 subtitle lorem ipsum Brewery 1 subtitle lorem ipsum"
          size="medium"
          phone="40028922"
          location="123456"
          handleAddExtra={() => console.log('adding 123')}
        />

        <BreweryCard
          title="Brewery 2"
          subtitle="Brewery 2 subtitle lorem ipsum Brewery 2 subtitle lorem ipsum Brewery 2 subtitle lorem ipsum"
          size="medium"
          phone="40028922"
          location="123456"
          handleAddExtra={() => console.log('adding 123')}
        />

        <BreweryCard
          title="Brewery 3"
          subtitle="Brewery 3 subtitle lorem ipsum Brewery 3 subtitle lorem ipsum Brewery 3 subtitle lorem ipsum"
          size="medium"
          phone="40028922"
          location="123456"
          handleAddExtra={() => console.log('adding 123')}
        />

        <BreweryCard
          title="Brewery 4"
          subtitle="Brewery 4 subtitle lorem ipsum Brewery 4 subtitle lorem ipsum Brewery 4 subtitle lorem ipsum"
          size="medium"
          phone="40028922"
          location="123456"
          handleAddExtra={() => console.log('adding 123')}
        />

        <BreweryCard
          title="Brewery 5"
          subtitle="Brewery 5 subtitle lorem ipsum Brewery 5 subtitle lorem ipsum Brewery 5 subtitle lorem ipsum"
          size="medium"
          phone="40028922"
          location="123456"
          handleAddExtra={() => console.log('adding 123')}
        />

        <BreweryCard
          title="Brewery 6"
          subtitle="Brewery 6 subtitle lorem ipsum Brewery 6 subtitle lorem ipsum Brewery 6 subtitle lorem ipsum"
          size="medium"
          phone="40028922"
          location="123456"
          handleAddExtra={() => console.log('adding 123')}
        />
      </Cards>
    </PrivateLayout>
  )
}

export default Breweries
