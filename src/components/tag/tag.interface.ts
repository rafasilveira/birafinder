import { ReactNode } from 'react'

export interface ITagProps {
  icon: ReactNode
  text: string
  children?: never
}

export interface ITagSkeletonProps {
  icon?: ReactNode
  children?: never
}
