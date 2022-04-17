import { render, screen } from '@testing-library/react'
import { Notification } from './notification.component'

describe('<Notification />', () => {
  it('renders without crashing', () => {
    render(<Notification title="Test">Notification body</Notification>)
    expect(screen.getByText('Test')).toBeInTheDocument()
    expect(screen.getByText('Notification body')).toBeInTheDocument()
  })
})
