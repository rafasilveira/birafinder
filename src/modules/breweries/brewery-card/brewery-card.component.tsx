import { FC } from 'react'
import { AddSvg, ChartSvg, LocationSvg, PhoneSvg } from '../../../assets'
import { Card, Tag, Tags } from '../../../components'
import { IBreweryCardProps } from './brewery-card.interface'

export const BreweryCardComponent: FC<IBreweryCardProps> = ({
  title,
  subtitle,
  size,
  location,
  phone,
  handleDelete
}) => {
  return (
    <Card
      title={title}
      subtitle={subtitle}
      handleDelete={() => handleDelete?.()}
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
