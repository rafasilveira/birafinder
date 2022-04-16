import {
  FC,
  useContext,
  createContext,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
} from 'react'

/**
 * @todo replace breweries type asap
 */
interface IBreweriesData {
  userName: string
  isUserAdult: boolean
  setUserName: Dispatch<SetStateAction<string>>
  setIsUserAdult: Dispatch<SetStateAction<boolean>>
}

const BreweriesContext = createContext({} as IBreweriesData)

export const BreweriesProvider: FC<{ children?: ReactNode }> = ({
  children,
}) => {
  const [userName, setUserName] = useState('')
  const [isUserAdult, setIsUserAdult] = useState(false)

  return (
    <BreweriesContext.Provider
      value={{
        userName,
        isUserAdult,
        setUserName,
        setIsUserAdult,
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
