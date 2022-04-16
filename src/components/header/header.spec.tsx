import { render, screen } from '@testing-library/react'
import { Header } from './header.component'

const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}))

describe('<Header />', () => {
  it('renders without crashing', () => {
    render(<Header name="John Cena" />)
    expect(screen.getByText('Go back')).toBeInTheDocument()
    expect(screen.getByText('John Cena')).toBeInTheDocument()
  })
})
