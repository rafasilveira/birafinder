import { render, screen } from '@testing-library/react'
import { Tag, TagInput } from './index'

describe('<Tag />', () => {
  it('renders without crashing', () => {
    // skeleton tag
    render(<Tag loading />)

    // default tag
    render(<Tag icon={<></>} text="This is a test tag" />)

    // input tag
    // @todo cover all possibilities
    render(
      <TagInput onSubmitText={jest.fn()} typedText="" placeholder="Tag input" />
    )

    expect(screen.getByText('This is a test tag')).toBeInTheDocument()
    expect(screen.getByText('Tag input')).toBeInTheDocument()
  })
})
