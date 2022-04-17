import {
  FC,
  useContext,
  createContext,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
  useEffect,
} from 'react'
import { useBreweries } from '../request/get-breweries.request'
import { IBrewery } from '../request/models/brewery.model'

/**
 * @todo replace breweries type asap
 */
interface IBreweriesData {
  userName: string
  isUserAdult: boolean
  setUserName: Dispatch<SetStateAction<string>>
  setIsUserAdult: Dispatch<SetStateAction<boolean>>

  breweries: IBrewery[]
  breweriesLoading: boolean
  breweriesError: Error | undefined

  pagination: { page: number; limit: number }
  setPagination: Dispatch<SetStateAction<{ page: number; limit: number }>>

  removeBrewery: (id: string) => void
  addDataToBrewery: (id: string, data: string) => void
}

const BreweriesContext = createContext({} as IBreweriesData)

export const BreweriesProvider: FC<{ children?: ReactNode }> = ({
  children,
}) => {
  const [userName, setUserName] = useState('')
  const [isUserAdult, setIsUserAdult] = useState(false)

  const [pagination, setPagination] = useState({ page: 1, limit: 20 })
  const {
    data,
    error: breweriesError,
    isValidating: breweriesLoading,
  } = useBreweries(pagination)

  useEffect(() => {
    console.log('data', data)
  }, [data])

  return (
    <BreweriesContext.Provider
      value={{
        userName,
        isUserAdult,
        setUserName,
        setIsUserAdult,

        breweries: data ?? ([] as IBrewery[]),
        breweriesLoading,
        breweriesError,

        pagination,
        setPagination,

        removeBrewery: (id: string) => console.log(`removing ${id}`),
        addDataToBrewery: (id: string, data: string) =>
          console.log(`addin ${data} to ${id}`),
      }}
    >
      {children}
    </BreweriesContext.Provider>
  )
}

export const useBreweriesContext = (): IBreweriesData => {
  const ctx = useContext(BreweriesContext)

  if (!Object.entries(ctx).length) {
    throw new Error(
      'useBreweriesContext must be used within a BreweriesContext Provider'
    )
  }

  return ctx
}
