import { useMemo } from 'react'
import useSWR, { SWRResponse } from 'swr'
import { IBrewery } from './models/brewery.model'

const getUrl = ({ page = 1, limit = 20 }: IGetBreweriesParams) => {
  const url = new URL('https://api.openbrewerydb.org/breweries')

  url.searchParams.append('page', page.toString())
  url.searchParams.append('per_page', limit.toString())
  url.searchParams.append('sort', 'name:asc')

  return url.href
}

interface IGetBreweriesParams {
  page?: number
  limit?: number
}

const getBreweries: (args: IGetBreweriesParams) => Promise<IBrewery[]> = (
  args
) => fetch(getUrl(args)).then((data) => data.json())

export const useBreweries = (
  args: IGetBreweriesParams
): SWRResponse<IBrewery[], any> => {
  const key = useMemo(() => getUrl(args), [args])

  return useSWR<IBrewery[]>(key, () => getBreweries(args), {
    revalidateOnFocus: false,
    revalidateOnReconnect: true,
  })
}
