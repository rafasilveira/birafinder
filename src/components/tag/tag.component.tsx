import { FC } from 'react'
import { ITagProps } from './tag.interface'
import { TagStyled } from './tag.style'

export const TagComponent: FC<ITagProps> = ({ icon, text, onClick }) => {
  return (
    <TagStyled onClick={() => onClick?.()} clickable={!!onClick}>
      {icon ?? <></>}
      <span className="text">{text}</span>
    </TagStyled>
  )
}
