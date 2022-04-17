import { render, screen } from '@testing-library/react'
import { Pagination } from './pagination.component'


describe('<Pagination />', () => {
  it('renders without crashing', () => {

    const onNavigate = jest.fn()

    render(
      <Pagination current={1} onNavigateToPage={onNavigate} />
    )
    expect(screen.getByTitle('Previous page')).toBeInTheDocument()
    expect(screen.getByTitle('Current page')).toBeInTheDocument()
    expect(screen.getByTitle('Next page')).toBeInTheDocument()
  })
})
