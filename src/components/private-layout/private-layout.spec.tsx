import { render, screen } from '@testing-library/react'
import { PrivateLayout } from './private-layout.component'

const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}))

describe('<PrivateLayout />', () => {
  it('renders without crashing', () => {
    render(
      <PrivateLayout>
        <h1>Hi, I'm a test</h1>
      </PrivateLayout>
    )
    expect(screen.getByText('Go back')).toBeInTheDocument()
    expect(screen.getByText("Hi, I'm a test")).toBeInTheDocument()
  })
})
