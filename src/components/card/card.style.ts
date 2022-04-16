import styled from 'styled-components'

export const CardStyled = styled.div`
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 4px;
  position: relative;
  padding: 30px 23px 0;

  & > .title {
    font-size: 1.428rem;
    line-height: 1.5em;
    color: #27272a;
    font-weight: 700;
    margin-bottom: 1.1em;
  }

  & > .text {
    font-size: 1.14rem;
    line-height: 1.625em;
    color: #3f3f46;
    margin-bottom: 1.625em;
  }

  .delete {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 36px;
    height: 36px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 4px 0 4px;
    background: transparent;
    transition: background 0.25s ease;
    border: none;
    cursor: pointer;

    svg {
      transition: filter 0.25s;
    }

    &:hover {
      background: #ff3333;
      svg {
        filter: brightness(0) invert(1);
      }
    }
  }
`

export const Cards = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;

  @media only screen and (max-width: 1180px) {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`
