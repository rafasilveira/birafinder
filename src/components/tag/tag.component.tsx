import { FC } from 'react'
import { ITagProps } from './tag.interface'
import { TagStyled } from './tag.style'

export const TagComponent: FC<ITagProps> = ({ icon, text }) => {
  return (
    <TagStyled>
      {icon}
      <span className="text">{text}</span>
    </TagStyled>
  )
}
