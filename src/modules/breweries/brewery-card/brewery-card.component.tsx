import { FC } from 'react'
import { AddSvg, ChartSvg, LocationSvg, PhoneSvg } from '../../../assets'
import { Card, ICardProps, Tag, Tags } from '../../../components'

export interface IBreweryCardProps extends Omit<ICardProps, 'children'> {
  size: string
  location: string
  phone: string
  extra?: string
  handleAddExtra: (text: string) => void
  children?: never
}

export const BreweryCard: FC<IBreweryCardProps> = ({
  title,
  subtitle,
  size,
  location,
  phone,
}) => {
  return (
    <Card
      title={title}
      subtitle={subtitle}
      handleDelete={() => console.log(`deleting card ${title}`)}
    >
      <Tags>
        <Tag icon={<ChartSvg />} text={size} />
        <Tag icon={<LocationSvg />} text={location} />
        <Tag icon={<PhoneSvg />} text={phone} />
        <Tag icon={<AddSvg />} text="add more" />
      </Tags>
    </Card>
  )
}
