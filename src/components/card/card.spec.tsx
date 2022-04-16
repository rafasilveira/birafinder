import { fireEvent, render, screen } from '@testing-library/react'
import { Card } from './card.component'

describe('<Card />', () => {
  it('renders without crashing', () => {
    const onDelete = jest.fn()

    render(
      <Card title="Title" subtitle="Subtitle" handleDelete={onDelete}>
        <p>Super awesome card body</p>
      </Card>
    )

    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('Subtitle')).toBeInTheDocument()
    expect(screen.getByText('Super awesome card body')).toBeInTheDocument()
    expect(screen.getByTitle('delete')).toBeInTheDocument()
  })
})
