import { ICardProps } from "../../../components"

export interface IBreweryCardProps extends Omit<ICardProps, 'children'> {
  size: string
  location: string
  phone: string
  extra?: string
  handleAddExtra: (text: string) => void
  children?: never
}
