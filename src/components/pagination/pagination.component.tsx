import { FC } from 'react'
import { ArrowSvg } from '../../assets'
import { PaginationStyled } from './pagination.style'

interface IPaginationProps {
  current: number
  onNavigateToPage: (page: number) => void
  children?: never
}

/**
 * <- 1 ->
 * <- 1 2 ->
 * <- 1 ... [current] ->
 */
export const Pagination: FC<IPaginationProps> = ({
  current,
  onNavigateToPage,
}) => {
  return (
    <PaginationStyled>
      <button
        className={`button ${current === 1 ? 'disabled' : ''}`}
        title="Previous page"
        onClick={() => onNavigateToPage(current - 1)}
      >
        <ArrowSvg />
      </button>

      {current > 1 && (
        <button
          className={'page first'}
          title="First page"
          onClick={() => onNavigateToPage(1)}
        >
          1
        </button>
      )}

      {current > 2 && <span className="dots">•••</span>}

      <button
        className={'page current'}
        title="Current page"
        onClick={() => onNavigateToPage(current)}
      >
        {current}
      </button>

      <button
        className={`button next`}
        title="Next page"
        onClick={() => onNavigateToPage(current + 1)}
      >
        <ArrowSvg />
      </button>
    </PaginationStyled>
  )
}
