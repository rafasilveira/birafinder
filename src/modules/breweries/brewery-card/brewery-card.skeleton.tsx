import { FC } from 'react'
import { AddSvg, ChartSvg, LocationSvg, PhoneSvg } from '../../../assets'
import { Card, Tag, Tags } from '../../../components'

export const BreweryCardSkeleton: FC = () => {
  return (
    <Card loading title subtitle>
      <Tags>
        <Tag icon={<ChartSvg />} loading />
        <Tag icon={<LocationSvg />} loading />
        <Tag icon={<PhoneSvg />} loading />
        <Tag icon={<AddSvg />} text="add more" />
      </Tags>
    </Card>
  )
}
