import { ReactNode } from 'react'

export interface ITagProps {
  icon?: ReactNode
  text: string
  children?: never
  onClick?: () => void
}

export interface ITagSkeletonProps {
  icon?: ReactNode
  children?: never
}
