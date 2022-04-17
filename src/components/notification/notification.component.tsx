/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, ReactNode } from 'react'
import { NotificationStyled } from './notification.style'

export const Notification: FC<{
  title: string
  severity?: 'warning' | 'error'
  children?: ReactNode
}> = ({ title, children, severity = 'warning' }) => (
  <NotificationStyled severity={severity}>
    <h2>{title}</h2>
    {children}
  </NotificationStyled>
)
