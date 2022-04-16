import { render, screen } from '@testing-library/react'
import { Header } from './header.component'

it('renders without crashing', () => {
  render(<Header name="John Cena" />)
  expect(screen.getByText('Go back')).toBeInTheDocument()
  expect(screen.getByText('John Cena')).toBeInTheDocument()
})
