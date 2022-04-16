import { FC } from 'react'
import { Header } from '../../components'
import { useBreweriesContext } from '../../context/breweries.context'

export const Breweries: FC<{ children?: never }> = () => {
  const { userName } = useBreweriesContext()

  return <Header name={userName || 'John Cena'} />
}

export default Breweries
