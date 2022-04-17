import { render, screen } from '@testing-library/react'
import { Input } from './input.component'

describe('<Input />', () => {
  it('renders default component without crashing', () => {
    render(<Input placeholder="placeholder" />)

    expect(screen.getByPlaceholderText('placeholder')).toBeInTheDocument()
  })
})
