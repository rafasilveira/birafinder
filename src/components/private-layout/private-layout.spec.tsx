import { render, screen } from '@testing-library/react'
import { PrivateLayout } from './private-layout.component'

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => jest.fn(),
}))

describe('<PrivateLayout />', () => {
  it('renders without crashing', () => {
    render(
      <PrivateLayout userName="Chuck Norris">
        <h1>Hi, I'm a test</h1>
      </PrivateLayout>
    )
    expect(screen.getByText('Go back')).toBeInTheDocument()
    expect(screen.getByText("Hi, I'm a test")).toBeInTheDocument()
  })
})
