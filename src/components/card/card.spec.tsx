import { render, screen } from '@testing-library/react'
import { Card } from './'

describe('<Card />', () => {
  it('renders default component without crashing', () => {
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

  it('renders skeleton component without crashing', () => {
    render(
      <Card loading title subtitle>
        <p>Super awesome card body</p>
      </Card>
    )

    expect(screen.getByText('Super awesome card body')).toBeInTheDocument()
  })
})
