import styled from 'styled-components'

export const PaginationStyled = styled.nav`
  margin: 5% auto;
  display: flex;
  align-items: center;
  justify-content: center;

  .button {
    padding: 0;
    margin: 0;
    border: 0;
    background: transparent;
    margin: 0 1rem;
    cursor: pointer;

    opacity: 0.5;
    transition: all 0.25s;

    svg {
      filter: brightness(0);
    }

    &.disabled {
      opacity: 0.125;
      pointer-events: none;
    }

    &:hover {
      opacity: 1;
      transform: translateX(-5px);
    }

    &.next {
      svg {
        transform: rotate(180deg);
      }

      &:hover {
        transform: translateX(5px);
      }
    }
  }

  .page {
    background: transparent;
    border: none;
    padding: 4px;
    font-size: 1rem;
    margin: 0 8px;
    border-bottom: 2px solid transparent;
    color: #000;
    opacity: 0.75;
    font-size: 1.5rem;
    cursor: pointer;

    transition: all 0.25s;
    &:hover {
      opacity: 1;
      border-bottom-color: #000;
    }

    &.current {
      font-weight: bold;
    }
  }

  .dots {
    letter-spacing: 0.25em;
    color: #000;
    opacity: 0.75;
    margin: 0 8px;
  }
`
