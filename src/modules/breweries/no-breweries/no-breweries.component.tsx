/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react'
import { Notification } from '../../../components'

export const NoBreweries: FC<{
  handleRefresh: () => void
  handleGoBack: () => void
  handleQuit: () => void
}> = ({ handleRefresh, handleGoBack, handleQuit }) => (
  <Notification title="No breweries! :(">
    <p>
      You may try <a onClick={handleRefresh}>refreshing this page</a>, go back
      to the <a onClick={handleGoBack}>previous page</a>, or{' '}
      <a onClick={handleQuit}>return to home screen</a>. You can also try the
      pagination down below.
    </p>
  </Notification>
)
