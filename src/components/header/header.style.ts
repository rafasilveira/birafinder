import styled from 'styled-components'

export const HeaderStyled = styled.header`
  width: 100%;
  position: fixed;

  background: #f2ec54;
  padding: 0.75rem 0.9375rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 2.14rem;
  line-height: 1.5em;

  .back {
    background: transparent;
    border: none;
    padding: 0;
    font: inherit;

    display: flex;
    align-items: center;

    svg {
      transition: all 0.25s;
    }

    span {
      margin-left: 1rem;
      border-bottom: 2px solid transparent;
      transition: border-color 0.25s;
    }

    &:hover {
      cursor: pointer;
      span {
        border-color: black;
      }
      svg {
        transform: translateX(-10px);
        filter: brightness(0);
      }
    }
  }

  @media only screen and (max-width: 720px) {
    font-size: 1rem;
  }
`
