import { FC } from 'react'
import { ChartSvg, LocationSvg, PhoneSvg } from '../../../assets'
import { Card, Tag, TagInput, Tags } from '../../../components'
import { IBreweryCardProps } from './brewery-card.interface'

export const BreweryCardComponent: FC<IBreweryCardProps> = ({
  title,
  subtitle,
  size,
  location,
  phone,
  handleDelete,
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
        <TagInput onSubmitText={(s) => console.log(s)} typedText={''} />
      </Tags>
    </Card>
  )
}
