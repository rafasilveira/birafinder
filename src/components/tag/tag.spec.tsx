import { render, screen } from '@testing-library/react'
import { Tag } from './tag.component'

describe('<Tag />', () => {
  it('renders without crashing', () => {
    render(<Tag icon={<></>} text="This is a test tag" />)
    expect(screen.getByText('This is a test tag')).toBeInTheDocument()
  })
})
