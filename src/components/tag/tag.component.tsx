import { FC, ReactNode } from 'react'
import { TagStyled } from './tag.style'

export const Tag: FC<{ icon: ReactNode; text: string; children?: never }> = ({
  icon,
  text,
}) => {
  return (
    <TagStyled>
      {icon}
      <span className="text">{text}</span>
    </TagStyled>
  )
}
