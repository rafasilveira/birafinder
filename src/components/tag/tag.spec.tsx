import { render, screen } from '@testing-library/react'
import { Tag } from './index'

describe('<Tag />', () => {
  it('renders without crashing', () => {

    // skeleton tag
    render(<Tag loading />)

    // default tag
    render(<Tag icon={<></>} text="This is a test tag" />)
    
    expect(screen.getByText('This is a test tag')).toBeInTheDocument()
  })
})
