import { render, screen } from '@testing-library/react'
import { BreweryCard } from './index'

describe('<BreweryCard />', () => {
  it('renders without crashing', () => {
    const onDelete = jest.fn()
    const onAdd = jest.fn()

    // loading
    render(<BreweryCard loading />)

    // default
    render(
      <BreweryCard
        title="Test title"
        subtitle="Super subtitle"
        size="medium"
        phone="40028922"
        location="123456"
        handleAddExtra={() => onAdd}
        handleDelete={() => onDelete}
      />
    )

    expect(screen.getByText('Test title')).toBeInTheDocument()
    expect(screen.getByText('Super subtitle')).toBeInTheDocument()
    expect(screen.getByText('medium')).toBeInTheDocument()
    expect(screen.getByText('40028922')).toBeInTheDocument()
    expect(screen.getByText('123456')).toBeInTheDocument()
    expect(screen.getByTitle('delete')).toBeInTheDocument()
  })
})
