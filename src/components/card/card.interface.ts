import { ReactNode } from 'react'

export interface ICardProps {
  title: string
  subtitle?: string
  children: ReactNode
  handleDelete?: () => void
}

export interface ICardSkeletonProps {
  title?: boolean
  subtitle?: boolean
  childrenSkeletonHeight?: number
  children?: ReactNode
}
