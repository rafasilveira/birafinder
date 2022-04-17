import { FC } from 'react'
import { TagStyled } from './tag.style'
import Skeleton from 'react-loading-skeleton'
import { ITagSkeletonProps } from './tag.interface'

export const TagSkeleton: FC<ITagSkeletonProps> = ({ icon }) => {
  return (
    <TagStyled>
      {icon ?? <Skeleton width={20} />}
      <span className="text">{<Skeleton />}</span>
    </TagStyled>
  )
}
